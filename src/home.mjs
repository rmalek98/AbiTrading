// Home page copy. Partner and client names come from the original abitrading.net About page.
export const partners = ['HP', 'Dell', 'Microsoft', 'Cisco', 'VMware', 'EMC', 'Symantec', 'Avaya', 'Veritas', 'Alcatel', 'Seagate'];
export const clients = ['Publicis Groupe', 'Starcom', 'Leo Burnett', 'Magna', 'IPG Momentum', 'IPAS Group', 'Weber Shandwick', 'Fortune Promoseven', 'IPG Initiative', 'Tecofi', 'UM7'];

export const finder = {
  fr: {
    eyebrow: 'Simulateur',
    title: 'Quel abonnement Microsoft 365 cloud pour votre équipe ?',
    lead: 'Choisissez votre nombre d’utilisateurs et votre besoin : nous vous recommandons l’offre adaptée. Tout est 100 % cloud, rien à installer.',
    users: 'Nombre d’utilisateurs', need: 'Votre besoin',
    needs: [['mail', 'Email professionnel uniquement'], ['collab', 'Email + Teams + Office en ligne']],
    why: { exchange: 'Messagerie pro 50 Go sur votre domaine, Outlook web et mobile.', basic: 'Email, Teams, Office en ligne et 1 To OneDrive par utilisateur.', e1: 'Au-delà de 300 utilisateurs : Office en ligne, email et OneDrive sans limite d’utilisateurs.' },
    result: 'Notre recommandation', cta: 'Obtenir mon devis'
  },
  en: {
    eyebrow: 'Planner',
    title: 'Which Microsoft 365 cloud plan fits your team?',
    lead: 'Pick your number of users and your need, and we recommend the right plan. Everything is 100% cloud, nothing to install.',
    users: 'Number of users', need: 'Your need',
    needs: [['mail', 'Business email only'], ['collab', 'Email + Teams + Office Online']],
    why: { exchange: '50 GB business email on your domain, Outlook web and mobile.', basic: 'Email, Teams, Office Online and 1 TB OneDrive per user.', e1: 'Beyond 300 users: Office Online, email and OneDrive with no user cap.' },
    result: 'Our recommendation', cta: 'Get my quote'
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
        { t: 'Microsoft 365 & Office', d: 'Email Exchange, Teams et Office en ligne, 100 % cloud. Nous migrons votre messagerie et formons vos équipes.', to: 'microsoft', big: true, tag: 'Partenaire CSP' },
        { t: 'Cloud & Azure', d: 'Serveurs, sauvegarde et continuité d’activité dans le cloud.', to: 'azure' },
        { t: 'Infogérance IT', d: 'Support, réseau, antivirus, sauvegardes : tout est surveillé.', to: 'managed' },
        { t: 'Web sur mesure', d: 'Sites, e-commerce, SaaS et SEO pour développer vos ventes.', to: 'custom', wide: true },
        { t: 'Matériel & logiciels', d: 'Serveurs, réseau, postes et licences, fournis et installés.', to: 'products', full: true }
      ]},
      { type: 'finder' },
      { type: 'clients' },
      { type: 'stats' },
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
        { t: 'Microsoft 365 & Office', d: 'Exchange email, Teams and Office Online, 100% cloud. We migrate your mail and train your team.', to: 'microsoft', big: true, tag: 'CSP partner' },
        { t: 'Cloud & Azure', d: 'Servers, backup and business continuity in the cloud.', to: 'azure' },
        { t: 'Managed IT', d: 'Support, network, antivirus and backups: all monitored.', to: 'managed' },
        { t: 'Custom web', d: 'Websites, e-commerce, SaaS and SEO to grow your sales.', to: 'custom', wide: true },
        { t: 'Hardware & software', d: 'Servers, networking, devices and licences, supplied and installed.', to: 'products', full: true }
      ]},
      { type: 'finder' },
      { type: 'clients' },
      { type: 'stats' },
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
