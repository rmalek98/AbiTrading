<?php
// Contact form handler. Recipient is injected at build time from site.config.json.
header('Content-Type: application/json; charset=utf-8');

$to = '__RECIPIENT__';
if ($_SERVER['REQUEST_METHOD'] !== 'POST' || $to === '') { http_response_code(405); echo '{"ok":false}'; exit; }

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) { http_response_code(400); echo '{"ok":false}'; exit; }

// Bot checks: honeypot filled, or form submitted in under 3 seconds
$elapsed = (time() * 1000) - (float)($in['t'] ?? 0);
if (!empty($in['website']) || $elapsed < 3000) { echo '{"ok":true}'; exit; }

// Strip CR/LF from anything that reaches a mail header (header injection)
$clean = fn($v, $max) => mb_substr(trim(str_replace(["\r", "\n"], ' ', (string)$v)), 0, $max);
$name = $clean($in['name'] ?? '', 120);
$email = $clean($in['email'] ?? '', 160);
$company = $clean($in['company'] ?? '', 160);
$phone = $clean($in['phone'] ?? '', 60);
$interest = $clean($in['interest'] ?? '', 120);
$message = mb_substr(trim((string)($in['message'] ?? '')), 0, 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422); echo '{"ok":false}'; exit;
}

$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'abitrading.net');
$subject = '=?UTF-8?B?' . base64_encode("Nouvelle demande: $interest ($name)") . '?=';
$body = "Nom: $name\nEntreprise: $company\nEmail: $email\nTéléphone: $phone\nBesoin: $interest\nLangue: " . $clean($in['lang'] ?? '', 5) . "\n\n$message\n";
$headers = "From: AbiTrading Site <noreply@$host>\r\nReply-To: $name <$email>\r\nContent-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);
http_response_code($sent ? 200 : 500);
echo json_encode(['ok' => $sent]);
