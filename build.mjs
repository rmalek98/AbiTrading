// Zero-dependency static site generator. Run: node build.mjs  ->  dist/
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from 'node:fs';
import { ui, nav, pages } from './src/content.mjs';
import { partners, clients, finder } from './src/home.mjs';
import { m365Plans, m365Ui } from './src/m365.mjs';

const cfg = JSON.parse(readFileSync('site.config.json', 'utf8'));
const OUT = 'dist';
const langs = ['fr', 'en'];
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '');
const digits = (s) => String(s).replace(/\D/g, '');
const BASE = (process.env.BASE || '').replace(/\/$/, '');   // e.g. /abitrading-demo for GitHub project pages
const DEMO = !!process.env.DEMO;                                // demo: noindex + block crawlers
const yearsSince = new Date().getFullYear() - cfg.foundedYear;

// French at root, English under /en/
const path = (lang, key) => {
  const slug = pages[key].slug[lang];
  const base = lang === 'fr' ? '/' : '/en/';
  return slug ? `${base}${slug}/` : base;
};
const abs = (lang, key) => cfg.domain + path(lang, key);

// ---------- icons (24px, stroke) ----------
const I = {
  office: '<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  teams: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M17 14c2.7 0 4.5 1.8 4.5 4.5"/>',
  cloud: '<path d="M7 18a4 4 0 0 1-.6-8A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18z"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.1 8 7.5 9.5 4.4-1.5 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
  server: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  backup: '<path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v4h4"/><path d="M12 8v4l3 2"/>',
  desktop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M16 7l3 3"/>',
  chart: '<path d="M4 20V4M4 20h16"/><path d="m8 15 3-4 3 2 5-6"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  network: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
  drive: '<path d="M3 14 6 5h12l3 9"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 17h.01"/>',
  wrench: '<path d="M14.5 6a4 4 0 0 0 5 5L10 20.5a2.1 2.1 0 0 1-3-3z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11L21 7H6"/>',
  code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v4"/>',
  printer: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><rect x="7" y="14" width="10" height="7" rx="1"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
  pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  wa: null
};
const icon = (n, s = 24) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n] || ''}</svg>`;
const WA = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.1-3.4-8.3zM12 21.7c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2 6.4 6.5 2 12 2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.9-9.8 9.9zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>';

const pageIcons = {
  home: { microsoft: 'office', azure: 'cloud', managed: 'headset', custom: 'code', products: 'server' },
  microsoft: ['office', 'mail', 'teams', 'cloud', 'shield', 'receipt'],
  azure: ['server', 'backup', 'desktop', 'key', 'chart', 'layers'],
  managed: ['headset', 'network', 'shield', 'backup', 'drive', 'wrench'],
  custom: ['globe', 'cart', 'code', 'search', 'plug', 'wrench'],
  products: ['server', 'network', 'drive', 'printer', 'key', 'shield'],
  about: ['award', 'pin', 'eye']
};

// ---------- brand mark (from the AbiTrading logo) ----------
const MARK = [[0, 0, 'g'], [2, 0, 'b'], [0, 1, 'g'], [1, 1, 'b'], [2, 1, 'o'], [0, 2, 'b'], [1, 2, 'g'], [2, 2, 'b'], [0, 3, 'o'], [1, 3, 'b'], [2, 3, 'o']];
const markSvg = (cls = '') => `<svg class="mark ${cls}" viewBox="0 0 228 230" aria-hidden="true"><g class="wires"><path d="M114 87 188 31M114 87 188 143M40 143 114 199"/></g>${MARK.map(([c, r, k], n) => `<rect class="blk ${k}" style="--d:${(n * 0.07).toFixed(2)}s" x="${8 + c * 74}" y="${8 + r * 56}" width="64" height="46" rx="8"/>`).join('')}</svg>`;

// ---------- blocks ----------
let pageKey = 'home';
function renderBlock(b, lang, u) {
  switch (b.type) {
    case 'bento': {
      return `<section class="section"><div class="wrap"><div class="head-s rv"><p class="eyebrow">${esc(b.eyebrow)}</p><h2>${esc(b.title)}</h2></div><div class="bento">${b.items.map((i, n) => `<a class="tile rv${i.big ? ' big' : ''}${i.wide ? ' wide' : ''}${i.full ? ' full' : ''}" style="--i:${n}" href="${path(lang, i.to)}">${i.big ? markSvg('wm') : ''}<span class="ico">${icon(pageIcons.home[i.to], 26)}</span>${i.tag ? `<span class="tag">${esc(i.tag)}</span>` : ''}<h3>${esc(i.t)}</h3><p>${esc(i.d)}</p><span class="more">${u.learnMore} ${icon('arrow', 18)}</span></a>`).join('')}</div></div></section>`;
    }
    case 'cards': {
      const ic = pageIcons[pageKey] || [];
      return `<section class="section"><div class="wrap"><div class="head-s rv"><h2>${esc(b.title)}</h2></div><div class="grid">${b.items.map((i, n) => `<div class="card rv" style="--i:${n % 3}"><span class="ico">${icon(ic[n] || 'check', 24)}</span><h3>${esc(i.t)}</h3><p>${esc(i.d)}</p></div>`).join('')}</div></div></section>`;
    }
    case 'partners':
      return `<section class="strip"><div class="wrap"><p class="strip-t">${u.partnersT}</p></div><div class="marquee" aria-hidden="true"><div class="track">${[...partners, ...partners].map((n) => `<span>${esc(n)}</span>`).join('')}</div></div></section>`;
    case 'clients':
      return `<section class="section"><div class="wrap"><div class="head-s rv center"><p class="eyebrow">${u.since}</p><h2>${u.clientsT}</h2></div><ul class="clients">${clients.map((n, k) => `<li class="rv" style="--i:${k % 4}">${esc(n)}</li>`).join('')}</ul></div></section>`;
    case 'stats': {
      const items = [[yearsSince, '+', u.years], [partners.length, '', u.partnersN], [clients.length, '', u.clientsN], ['CSP', '', 'Microsoft']];
      return `<section class="stats"><div class="wrap stats-grid">${items.map(([n, suf, l]) => `<div class="rv"><strong${typeof n === 'number' ? ` data-count="${n}"` : ''}>${typeof n === 'number' ? 0 : n}</strong>${suf ? `<b>${suf}</b>` : ''}<span>${esc(l)}</span></div>`).join('')}</div></section>`;
    }
    case 'steps':
      return `<section class="section alt"><div class="wrap"><div class="head-s rv"><h2>${esc(b.title)}</h2></div><ol class="steps">${b.items.map((i, n) => `<li class="rv" style="--i:${n}"><h3>${esc(i.t)}</h3><p>${esc(i.d)}</p></li>`).join('')}</ol></div></section>`;
    case 'plans':
      return `<section class="section"><div class="wrap"><div class="head-s rv"><h2>${esc(b.title)}</h2></div><div class="grid three">${b.items.map((i, n) => `<div class="card plan rv${i.hot ? ' hot' : ''}" style="--i:${n}">${i.hot ? `<span class="tag">${lang === 'fr' ? 'Populaire' : 'Most popular'}</span>` : ''}<h3>${esc(i.t)}</h3><p>${esc(i.d)}</p></div>`).join('')}</div>${b.note ? `<p class="note">${esc(b.note)}</p>` : ''}</div></section>`;
    case 'faq':
      return `<section class="section alt"><div class="wrap narrow"><div class="head-s rv"><h2>${u.faq}</h2></div><div x-data="{open:0}">${b.items.map((i, n) => `<div class="faq" :class="{on: open === ${n}}"><button type="button" @click="open = open === ${n} ? null : ${n}" :aria-expanded="open === ${n}"><span>${esc(i.q)}</span><i aria-hidden="true"></i></button><div class="ans" x-show="open === ${n}" x-collapse><p>${esc(i.a)}</p></div></div>`).join('')}</div></div></section>`;
    case 'finder':
      return renderFinder(lang);
    case 'pricing':
      return renderPricing(lang);
    case 'cta':
      return `<section class="cta"><div class="wrap cta-in">${markSvg('cta-mark')}<div><h2>${esc(b.t)}</h2><p>${esc(b.d)}</p><a class="btn" href="${path(lang, 'contact')}">${u.quote} ${icon('arrow', 18)}</a></div></div></section>`;
    case 'form':
      return renderForm(lang, u);
  }
  return '';
}

function renderPricing(lang) {
  const m = m365Ui[lang];
  return `<section class="section" id="offres"><div class="wrap"><div class="head-s rv"><p class="eyebrow">${m.cloud}</p><h2>${m.title}</h2></div>
<div class="pricing">${m365Plans.map((p, n) => {
    return `<article class="price-card rv${p.hot ? ' hot' : ''}" style="--i:${n}">
<span class="tag">${esc(p.tag[lang])}</span><h3>${esc(p.name)}</h3><p class="best">${esc(p.best[lang])}</p>
<p class="amount"><strong>${m.onQuote}</strong><span>${m.quoteSub}</span></p>
<ul>${p.features[lang].map((f) => `<li>${icon('check', 18)}${esc(f)}</li>`).join('')}</ul>
<a class="btn${p.hot ? '' : ' line'}" href="${path(lang, 'contact')}?plan=${encodeURIComponent(p.name)}">${m.choose} ${icon('arrow', 18)}</a>
</article>`;
  }).join('')}</div><p class="note">${m.note}</p></div></section>`;
}

function renderFinder(lang) {
  const f = finder[lang];
  const names = Object.fromEntries(m365Plans.map((p) => [p.id, p.name]));
  const state = { users: 25, need: 'collab', names, why: f.why };
  return `<section class="finder" id="planner"><div class="wrap fin-grid">
<div class="rv"><p class="eyebrow">${f.eyebrow}</p><h2>${f.title}</h2><p class="fin-lead">${f.lead}</p></div>
<div class="fin-card rv" x-data='${JSON.stringify(state).replace(/'/g, '&#39;').slice(0, -1)},
get plan(){return this.need==="mail"?"exchange":this.users>300?"e1":"basic"},
get href(){return "${path(lang, 'contact')}?plan="+encodeURIComponent(this.names[this.plan])+"&users="+this.users}}'>
<label class="fin-l">${f.users} <output x-text="users"></output></label>
<input type="range" min="1" max="500" x-model.number="users" :style="'--p:'+((users-1)/499*100)+'%'" aria-label="${f.users}">
<p class="fin-l">${f.need}</p>
<div class="opts">${f.needs.map(([k, l]) => `<button type="button" :class="{on: need==='${k}'}" @click="need='${k}'">${l}</button>`).join('')}</div>
<div class="fin-out"><span>${f.result}</span><strong x-text="names[plan]"></strong><p x-text="why[plan]"></p></div>
<a class="btn" :href="href">${f.cta} ${icon('arrow', 18)}</a>
</div></div></section>`;
}

function renderForm(lang, u) {
  const f = u.form;
  const rows = [
    cfg.phone && [icon('headset', 20), u.call, `<a href="tel:${esc(cfg.phone.replace(/\s/g, ''))}">${esc(cfg.phone)}</a>`],
    cfg.whatsapp && [icon('teams', 20), 'WhatsApp', `<a href="https://wa.me/${digits(cfg.whatsapp)}">${esc(cfg.whatsapp)}</a>`],
    cfg.email && [icon('mail', 20), 'Email', `<a href="mailto:${esc(cfg.email)}">${esc(cfg.email)}</a>`],
    cfg.address && [icon('pin', 20), lang === 'fr' ? 'Adresse' : 'Address', `<span>${esc(cfg.address)}</span>`],
    [icon('globe', 20), lang === 'fr' ? 'Zone d’intervention' : 'Coverage', `<span>${esc(cfg.areaServed.join(', '))}</span>`]
  ].filter(Boolean).map(([i, l, v]) => `<li><span class="ico sm">${i}</span><div><strong>${l}</strong>${v}</div></li>`).join('');
  return `<section class="section"><div class="wrap contact-grid">
<form class="form" x-data="contactForm()" @submit.prevent="send" novalidate>
<div class="two"><label>${f.name}<input name="name" x-model="d.name" required autocomplete="name"></label>
<label>${f.company}<input name="company" x-model="d.company" autocomplete="organization"></label></div>
<div class="two"><label>${f.email}<input name="email" type="email" x-model="d.email" required autocomplete="email"></label>
<label>${f.phone}<input name="phone" type="tel" x-model="d.phone" autocomplete="tel"></label></div>
<label>${f.interest}<select name="interest" x-model="d.interest">${f.options.map((o) => `<option>${esc(o)}</option>`).join('')}</select></label>
<label>${f.message}<textarea name="message" rows="5" x-model="d.message" required></textarea></label>
<input type="text" name="website" x-model="d.website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
<button class="btn" type="submit" :disabled="state==='sending'"><span x-show="state!=='sending'">${f.send}</span><span x-show="state==='sending'" x-cloak>${f.sending}</span></button>
<p class="ok" x-show="state==='ok'" x-cloak role="status">${f.ok}</p>
<p class="bad" x-show="state==='err'" x-cloak role="alert">${f.err}</p>
</form>
<aside class="side"><h2>${u.footContact}</h2><ul class="contact-list">${rows}</ul></aside>
</div>
<script>
function contactForm(){const q=new URLSearchParams(location.search),plan=q.get('plan'),n=q.get('users');
return{d:{name:'',company:'',email:'',phone:'',interest:${JSON.stringify(f.options[0])},message:plan?(plan.slice(0,60)+(parseInt(n)?' - '+parseInt(n)+' ${lang === 'fr' ? 'utilisateurs' : 'users'}':'')+'\\n'):'',website:'',lang:${JSON.stringify(lang)},t:Date.now()},state:'idle',
async send(){if(!this.d.name||!this.d.email||!this.d.message){this.state='err';return}this.state='sending';
try{const r=await fetch('/contact.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(this.d)});this.state=r.ok?'ok':'err'}catch(e){this.state='err'}}}}
</script></section>`;
}

// ---------- structured data ----------
function orgSchema() {
  const sameAs = [cfg.linkedin, cfg.facebook].filter(Boolean);
  return {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': cfg.domain + '/#org',
    name: cfg.name, url: cfg.domain, image: cfg.domain + '/assets/img/og.png', logo: cfg.domain + '/assets/img/logo-abitrading.png',
    foundingDate: String(cfg.foundedYear),
    ...(cfg.phone && { telephone: cfg.phone }), ...(cfg.email && { email: cfg.email }),
    ...(cfg.address && { address: { '@type': 'PostalAddress', streetAddress: cfg.address, addressLocality: cfg.city, addressCountry: 'MA' } }),
    areaServed: cfg.areaServed.map((n) => ({ '@type': n === 'Maroc' ? 'Country' : 'City', name: n })),
    ...(sameAs.length && { sameAs }),
    knowsAbout: ['Microsoft 365', 'Office 365', 'Microsoft Azure', 'Managed IT services', 'E-commerce', 'SEO']
  };
}

// ---------- layout ----------
function layout(lang, key) {
  pageKey = key;
  const u = ui[lang], p = pages[key];
  const other = lang === 'fr' ? 'en' : 'fr';
  const url = abs(lang, key);
  const blocks = p.blocks[lang];
  const title = strip(p.h1[lang]);
  const ld = [orgSchema()];
  if (p.service) ld.push({ '@context': 'https://schema.org', '@type': 'Service', name: p.service[lang], provider: { '@id': cfg.domain + '/#org' }, areaServed: { '@type': 'Country', name: 'Morocco' }, url });
  const faq = blocks.find((b) => b.type === 'faq');
  if (faq) ld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })) });
  if (key !== 'home') ld.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: cfg.name, item: abs(lang, 'home') },
    { '@type': 'ListItem', position: 2, name: title, item: url }] });

  const navHtml = nav.map((k, n) => `<a href="${path(lang, k)}" style="--i:${n}" @click="open=false"${k === key ? ' aria-current="page"' : ''}><span>${esc(navLabel(k, lang))}</span>${icon('arrow', 20)}</a>`).join('');
  const waHref = cfg.whatsapp ? `https://wa.me/${digits(cfg.whatsapp)}` : '';
  const waLink = waHref ? `<a class="wa" href="${waHref}" aria-label="${u.whatsapp}" rel="noopener">${WA}</a>` : '';

  const viz = key === 'home' ? pages.home.viz[lang] : null;
  const hero = key === 'home'
    ? `<section class="hero home"><div class="wrap hero-grid"><div>
<p class="pill">${icon('check', 16)} ${u.partner} · ${u.since}</p>
<h1>${p.h1[lang]}</h1><p class="lead">${esc(p.lead[lang])}</p>
<div class="hero-cta"><a class="btn" href="${path(lang, 'contact')}">${u.quote} ${icon('arrow', 18)}</a><a class="btn ghost" href="#planner">${finder[lang].eyebrow} Microsoft 365</a></div>
<ul class="points">${p.points[lang].map((t) => `<li>${icon('check', 18)}${esc(t)}</li>`).join('')}</ul>
</div><div class="viz" aria-hidden="true">${markSvg('hero-mark')}${viz.map(([a, b], n) => `<div class="float f${n + 1}"><i></i><div><b>${esc(a)}</b><span>${esc(b)}</span></div></div>`).join('')}</div></div></section>`
    : `<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="${path(lang, 'home')}">${u.home}</a><span>/</span><span>${esc(title)}</span></nav>
<h1>${p.h1[lang]}</h1><p class="lead">${esc(p.lead[lang])}</p>
${key !== 'contact' ? `<div class="hero-cta"><a class="btn" href="${path(lang, 'contact')}">${u.quote} ${icon('arrow', 18)}</a>${waHref ? `<a class="btn ghost" href="${waHref}" rel="noopener">${u.whatsapp}</a>` : ''}</div>` : ''}
${markSvg('hero-bg')}</div></section>`;

  return `<!doctype html>
<html lang="${u.lang}" dir="${u.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.title[lang])}</title>
<meta name="description" content="${esc(p.desc[lang])}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="fr" href="${abs('fr', key)}">
<link rel="alternate" hreflang="en" href="${abs('en', key)}">
<link rel="alternate" hreflang="x-default" href="${abs('fr', key)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${cfg.name}">
<meta property="og:title" content="${esc(p.title[lang])}">
<meta property="og:description" content="${esc(p.desc[lang])}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${u.locale}">
<meta property="og:image" content="${cfg.domain}/assets/img/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#071a3d">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/jakarta.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script>document.documentElement.classList.add('js')</script>
<script defer src="/assets/js/main.js"></script>
<script defer src="/assets/js/alpine-collapse.min.js"></script>
<script defer src="/assets/js/alpine.min.js"></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site" x-data="{open:false}" :class="{open}" x-effect="document.documentElement.classList.toggle('menu-open', open)" @keydown.escape="open=false" @resize.window="if (innerWidth > 1080) open = false">
<div class="wrap bar">
<a class="brand" href="${path(lang, 'home')}"><img src="/assets/img/logo-abitrading.png" alt="${cfg.name}" width="168" height="52"></a>
<nav class="nav" id="menu" :class="{open}" aria-label="Main">${navHtml}
<div class="nav-foot" style="--i:${nav.length}"><a class="btn" href="${path(lang, 'contact')}" @click="open=false">${u.quote} ${icon('arrow', 18)}</a>${waHref ? `<a class="btn line" href="${waHref}" rel="noopener">WhatsApp</a>` : ''}<a class="nav-lang" href="${path(other, key)}" hreflang="${other}" lang="${other}">${ui[other].langName}</a></div></nav>
<div class="actions">
<a class="lang" href="${path(other, key)}" hreflang="${other}" lang="${other}">${other.toUpperCase()}</a>
<a class="btn sm" href="${path(lang, 'contact')}">${u.quote}</a>
<button class="burger" type="button" @click="open=!open" :aria-expanded="open" aria-controls="menu" aria-label="${u.menu}"><span></span><span></span><span></span></button>
</div></div></header>
<main id="main">
${hero}
${blocks.map((b) => renderBlock(b, lang, u)).join('\n')}
</main>
<footer class="foot"><div class="wrap foot-grid">
<div><a class="foot-brand" href="${path(lang, 'home')}">${markSvg('sm')}<span>Abi<b>Trading</b></span></a><p>${u.footTag}</p></div>
<div><h2>${u.footServices}</h2>${['microsoft', 'azure', 'managed', 'custom', 'products'].map((k) => `<a href="${path(lang, k)}">${esc(navLabel(k, lang))}</a>`).join('')}</div>
<div><h2>${u.footCompany}</h2><a href="${path(lang, 'about')}">${esc(navLabel('about', lang))}</a><a href="${path(lang, 'contact')}">Contact</a><a href="${path(other, key)}" hreflang="${other}">${ui[other].langName}</a></div>
<div><h2>${u.footContact}</h2>${cfg.phone ? `<a href="tel:${esc(cfg.phone.replace(/\s/g, ''))}">${esc(cfg.phone)}</a>` : ''}${cfg.email ? `<a href="mailto:${esc(cfg.email)}">${esc(cfg.email)}</a>` : ''}${cfg.address ? `<span>${esc(cfg.address)}</span>` : ''}<span>${esc(cfg.areaServed.slice(1).join(' · '))}</span></div>
</div><div class="wrap copy">© ${new Date().getFullYear()} ${cfg.name} · ${u.since}. ${u.rights}</div></footer>
${waLink}
</body></html>`;
}

function navLabel(k, lang) {
  const L = {
    microsoft: { fr: 'Microsoft 365', en: 'Microsoft 365' }, azure: { fr: 'Cloud & Azure', en: 'Cloud & Azure' },
    managed: { fr: 'Infogérance IT', en: 'Managed IT' }, custom: { fr: 'Web sur mesure', en: 'Custom web' },
    products: { fr: 'Matériel', en: 'Hardware' }, about: { fr: 'À propos', en: 'About' }
  };
  return L[k][lang];
}

// ---------- demo / subpath post-processing ----------
function post(html) {
  if (DEMO) html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="robots" content="noindex,nofollow">');
  if (!BASE) return html;
  return html
    .replace(/(href|src)="\/(?!\/)/g, `$1="${BASE}/`)
    .replace(/"\/(en\/)?contact\/\?plan=/g, `"${BASE}/$1contact/?plan=`)
    .replace(/'\/contact\.php'/g, `'${BASE}/contact.php'`);
}

// ---------- output ----------
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('assets', `${OUT}/assets`, { recursive: true });
cpSync('static', OUT, { recursive: true });

const urls = [];
for (const lang of langs) for (const key of Object.keys(pages)) {
  const dir = OUT + path(lang, key);
  mkdirSync(dir, { recursive: true });
  writeFileSync(dir + 'index.html', post(layout(lang, key)));
  urls.push({ lang, key });
}

writeFileSync(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ lang, key }) => `<url><loc>${abs(lang, key)}</loc><xhtml:link rel="alternate" hreflang="fr" href="${abs('fr', key)}"/><xhtml:link rel="alternate" hreflang="en" href="${abs('en', key)}"/></url>`).join('\n')}
</urlset>
`);
writeFileSync(`${OUT}/robots.txt`, DEMO ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nDisallow: /contact.php\n\nSitemap: ${cfg.domain}/sitemap.xml\n`);
if (DEMO) writeFileSync(`${OUT}/.nojekyll`, '');

const php = readFileSync('static/contact.php', 'utf8').replace('__RECIPIENT__', cfg.contactFormRecipient || cfg.email || '');
writeFileSync(`${OUT}/contact.php`, php);

console.log(`Built ${urls.length} pages -> ${OUT}/`);
for (const k of ['phone', 'whatsapp', 'email', 'address']) if (!cfg[k]) console.warn(`  ! site.config.json: "${k}" is empty, so it is hidden on the site`);
if (!(cfg.contactFormRecipient || cfg.email)) console.warn('  ! No recipient set: the contact form will not send email');
