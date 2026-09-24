// Home page copy. Partner and client names come from the original abitrading.net About page.
export const partners = ['HP', 'Dell', 'Microsoft', 'Cisco', 'VMware', 'EMC', 'Symantec', 'Avaya', 'Veritas', 'Alcatel', 'Seagate'];
export const clients = ['Publicis Groupe', 'Starcom', 'Leo Burnett', 'Magna', 'IPG Momentum', 'IPAS Group', 'Weber Shandwick', 'Fortune Promoseven', 'IPG Initiative', 'Tecofi', 'UM7'];

export const finder = {
  fr: {
    eyebrow: 'Simulateur',
    title: 'Quel plan Microsoft 365 pour votre équipe ?',
    lead: 'Répondez en 10 secondes, nous vous recommandons un point de départ. Le devis final est confirmé avec vous.',
    users: 'Nombre d’utilisateurs', need: 'Votre priorité',
    needs: [['mail', 'Email pro + Teams'], ['office', 'Applications Office installées'], ['secure', 'Sécurité & appareils']],
    plans: { mail: 'Business Basic', office: 'Business Standard', secure: 'Business Premium' },
    why: { mail: 'Email professionnel, Teams et OneDrive. Idéal pour démarrer vite.', office: 'Ajoute Word, Excel, PowerPoint et Outlook installés sur les postes.', secure: 'Ajoute la protection avancée et la gestion des appareils.' },
    result: 'Notre recommandation', cta: 'Obtenir mon devis', for: 'pour', usersWord: 'utilisateurs'
  },
  en: {
    eyebrow: 'Planner',
    title: 'Which Microsoft 365 plan fits your team?',
    lead: 'Answer in 10 seconds and we will suggest a starting point. The final quote is confirmed with you.',
    users: 'Number of users', need: 'Your priority',
    needs: [['mail', 'Business email + Teams'], ['office', 'Installed Office apps'], ['secure', 'Security & devices']],
    plans: { mail: 'Business Basic', office: 'Business Standard', secure: 'Business Premium' },
    why: { mail: 'Business email, Teams and OneDrive. The fastest way to get started.', office: 'Adds Word, Excel, PowerPoint and Outlook installed on your devices.', secure: 'Adds advanced protection and device management.' },
    result: 'Our recommendation', cta: 'Get my quote', for: 'for', usersWord: 'users'
  }
};

export const home = {
  slug: { fr: '', en: '' },
  title: {
    fr: 'Microsoft 365 Maroc, Cloud & Infogérance IT | AbiTrading',
    en: 'Microsoft 365 Morocco, Cloud & Managed IT | AbiTrading'
  },
  desc: {
    fr: 'Partenaire Microsoft CSP au Maroc depuis 2003 : licences Microsoft 365 et Office, migration cloud Azure, infogérance IT, sites web, e-commerce et SaaS sur mesure. Devis gratuit.',
    en: 'Microsoft CSP partner in Morocco since 2003: Microsoft 365 and Office licences, Azure cloud migration, managed IT, and custom websites, e-commerce and SaaS. Free quote.'
  },
  h1: {
    fr: 'Votre entreprise mérite un IT <em>sans friction</em>.',
    en: 'Give your business IT that <em>just works</em>.'
  },
  lead: {
    fr: 'Microsoft 365, cloud Azure, infogérance et solutions web sur mesure : AbiTrading équipe et fait tourner l’informatique des entreprises marocaines depuis 2003.',
    en: 'Microsoft 365, Azure cloud, managed IT and custom web solutions: AbiTrading has been equipping and running Moroccan businesses since 2003.'
  },
  points: {
    fr: ['Licences, migration et formation', 'Une équipe locale, FR / AR / EN', 'Réponse sous 24 h ouvrées'],
    en: ['Licences, migration and training', 'Local team, FR / AR / EN', 'Reply within 1 business day']
  },
  viz: {
    fr: [['Exchange Online', 'Migration terminée'], ['Microsoft Teams', 'Équipe connectée'], ['Sauvegarde Azure', 'Dernière copie : cette nuit']],
    en: [['Exchange Online', 'Migration complete'], ['Microsoft Teams', 'Team connected'], ['Azure backup', 'Last copy: last night']]
  },
  blocks: {
    fr: [
      { type: 'partners' },
      { type: 'bento', eyebrow: 'Nos expertises', title: 'Tout ce dont votre entreprise a besoin, chez un seul partenaire', items: [
        { t: 'Microsoft 365 & Office', d: 'Licences, migration de messagerie, Teams, SharePoint et sécurité. Nous déployons et nous formons vos équipes.', to: 'microsoft', big: true, tag: 'Partenaire CSP' },
        { t: 'Cloud & Azure', d: 'Serveurs, sauvegarde et continuité d’activité dans le cloud.', to: 'azure' },
        { t: 'Infogérance IT', d: 'Support, réseau, antivirus, sauvegardes : tout est surveillé.', to: 'managed' },
        { t: 'Web sur mesure', d: 'Sites, e-commerce, SaaS et SEO pour développer vos ventes.', to: 'custom', wide: true },
        { t: 'Matériel & logiciels', d: 'Serveurs, réseau, postes et licences, fournis et installés.', to: 'products', full: true }
      ]},
      { type: 'finder' },
      { type: 'stats' },
      { type: 'clients' },
      { type: 'steps', title: 'Un projet mené sans mauvaise surprise', items: [
        { t: 'Audit gratuit', d: 'Nous analysons votre messagerie, vos postes, vos serveurs et vos usages.' },
        { t: 'Proposition claire', d: 'Un devis détaillé, sans jargon, avec calendrier et coûts mensuels.' },
        { t: 'Migration sans coupure', d: 'Déploiement progressif et formation, sans interrompre votre activité.' },
        { t: 'Support continu', d: 'Une équipe joignable qui suit votre environnement dans la durée.' }
      ]},
      { type: 'cta', t: 'Parlons de votre projet', d: 'Décrivez votre besoin, nous revenons vers vous sous 24 h ouvrées avec une première recommandation.' }
    ],
    en: [
      { type: 'partners' },
      { type: 'bento', eyebrow: 'Our expertise', title: 'Everything your business needs, from a single partner', items: [
        { t: 'Microsoft 365 & Office', d: 'Licences, mail migration, Teams, SharePoint and security. We deploy and we train your team.', to: 'microsoft', big: true, tag: 'CSP partner' },
        { t: 'Cloud & Azure', d: 'Servers, backup and business continuity in the cloud.', to: 'azure' },
        { t: 'Managed IT', d: 'Support, network, antivirus and backups: all monitored.', to: 'managed' },
        { t: 'Custom web', d: 'Websites, e-commerce, SaaS and SEO to grow your sales.', to: 'custom', wide: true },
        { t: 'Hardware & software', d: 'Servers, networking, devices and licences, supplied and installed.', to: 'products', full: true }
      ]},
      { type: 'finder' },
      { type: 'stats' },
      { type: 'clients' },
      { type: 'steps', title: 'A project run without unpleasant surprises', items: [
        { t: 'Free audit', d: 'We review your mail, devices, servers and how your team works.' },
        { t: 'Clear proposal', d: 'A detailed, jargon-free quote with timeline and monthly costs.' },
        { t: 'Zero-downtime migration', d: 'Phased rollout and training, without interrupting your business.' },
        { t: 'Ongoing support', d: 'A reachable team that looks after your environment long term.' }
      ]},
      { type: 'cta', t: 'Let’s talk about your project', d: 'Describe your need and we will reply within 1 business day with a first recommendation.' }
    ]
  }
};
