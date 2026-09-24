// All site copy lives here. Each page has fr + en. Blocks are rendered by build.mjs.

export const ui = {
  fr: {
    lang: 'fr', dir: 'ltr', locale: 'fr_MA', langName: 'Français',
    menu: 'Menu', quote: 'Devis gratuit', call: 'Appelez-nous', whatsapp: 'WhatsApp',
    footTag: 'Microsoft 365, cloud, infogérance et solutions web sur mesure pour les entreprises au Maroc.',
    footServices: 'Services', footCompany: 'Société', footContact: 'Contact',
    rights: 'Tous droits réservés.', partner: 'Partenaire Microsoft CSP',
    learnMore: 'En savoir plus', faq: 'Questions fréquentes', years: 'ans d’expérience', partnersN: 'partenaires technologiques', clientsN: 'clients de référence', since: 'Depuis 2003', partnersT: 'Nos partenaires technologiques', clientsT: 'Ils nous font confiance', home: 'Accueil',
    form: {
      name: 'Nom complet', company: 'Entreprise', email: 'Email professionnel', phone: 'Téléphone / WhatsApp',
      interest: 'Votre besoin', message: 'Décrivez votre projet', send: 'Envoyer ma demande',
      sending: 'Envoi en cours…', ok: 'Merci ! Nous vous répondons sous 24 h ouvrées.',
      err: 'Une erreur est survenue. Réessayez ou contactez-nous directement.',
      options: ['Microsoft 365 / Office', 'Cloud & Azure', 'Infogérance IT', 'Matériel & logiciels', 'Site web / e-commerce / SaaS', 'SEO', 'Autre']
    }
  },
  en: {
    lang: 'en', dir: 'ltr', locale: 'en_US', langName: 'English',
    menu: 'Menu', quote: 'Free quote', call: 'Call us', whatsapp: 'WhatsApp',
    footTag: 'Microsoft 365, cloud, managed IT and custom web solutions for businesses in Morocco.',
    footServices: 'Services', footCompany: 'Company', footContact: 'Contact',
    rights: 'All rights reserved.', partner: 'Microsoft CSP Partner',
    learnMore: 'Learn more', faq: 'Frequently asked questions', years: 'years of experience', partnersN: 'technology partners', clientsN: 'reference clients', since: 'Since 2003', partnersT: 'Our technology partners', clientsT: 'Trusted by', home: 'Home',
    form: {
      name: 'Full name', company: 'Company', email: 'Work email', phone: 'Phone / WhatsApp',
      interest: 'What do you need?', message: 'Tell us about your project', send: 'Send request',
      sending: 'Sending…', ok: 'Thank you! We will reply within 1 business day.',
      err: 'Something went wrong. Please retry or contact us directly.',
      options: ['Microsoft 365 / Office', 'Cloud & Azure', 'Managed IT', 'Hardware & software', 'Website / e-commerce / SaaS', 'SEO', 'Other']
    }
  }
};

// nav order + which pages appear in the footer "services" column
export const nav = ['microsoft', 'azure', 'managed', 'custom', 'products', 'about'];

export const pages = {
  microsoft: {
    slug: { fr: 'microsoft-365-maroc', en: 'microsoft-365-morocco' },
    title: {
      fr: 'Microsoft 365 & Licences Office au Maroc | AbiTrading',
      en: 'Microsoft 365 & Office Licences in Morocco | AbiTrading'
    },
    desc: {
      fr: 'Achetez et déployez Microsoft 365 (Office, Exchange, Teams, SharePoint) au Maroc avec un partenaire CSP : licences, migration de messagerie, sécurité et support.',
      en: 'Buy and deploy Microsoft 365 (Office, Exchange, Teams, SharePoint) in Morocco with a CSP partner: licences, mail migration, security and support.'
    },
    h1: { fr: 'Microsoft 365 au Maroc : licences, migration et support', en: 'Microsoft 365 in Morocco: licences, migration and support' },
    lead: {
      fr: 'En tant que partenaire Microsoft CSP, nous vous fournissons vos licences Microsoft 365 et Office, configurons votre tenant et migrons votre messagerie sans interruption.',
      en: 'As a Microsoft CSP partner, we supply your Microsoft 365 and Office licences, set up your tenant and migrate your mail with no downtime.'
    },
    service: { fr: 'Licences et déploiement Microsoft 365', en: 'Microsoft 365 licensing and deployment' },
    blocks: {
      fr: [
        { type: 'cards', title: 'Ce qui est inclus', items: [
          { t: 'Applications Office', d: 'Word, Excel, PowerPoint et Outlook sur PC, Mac et mobile, toujours à jour.' },
          { t: 'Email professionnel Exchange', d: 'Adresse @votre-domaine, boîte de 50 Go ou plus selon le plan, anti-spam intégré.' },
          { t: 'Teams', d: 'Messagerie d’équipe, visioconférence et appels, au même endroit que vos fichiers.' },
          { t: 'OneDrive & SharePoint', d: 'Stockage cloud et partage sécurisé de documents avec contrôle des accès.' },
          { t: 'Sécurité & conformité', d: 'Authentification multifacteur, protection des appareils et des données.' },
          { t: 'Facturation simplifiée', d: 'Abonnement mensuel ou annuel, ajout ou retrait d’utilisateurs à tout moment.' }
        ]},
        { type: 'plans', title: 'Quel plan choisir ?', items: [
          { t: 'Business Basic', d: 'Email, Teams, OneDrive et versions web des applications Office.' },
          { t: 'Business Standard', d: 'Tout Basic, plus les applications Office installées sur vos postes.', hot: true },
          { t: 'Business Premium', d: 'Tout Standard, plus sécurité avancée et gestion des appareils.' }
        ], note: 'Les plans et prix évoluent : demandez-nous un devis à jour pour votre nombre d’utilisateurs.' },
        { type: 'steps', title: 'Notre méthode de migration', items: [
          { t: 'Inventaire', d: 'Boîtes mail, domaines, fichiers partagés et postes concernés.' },
          { t: 'Configuration', d: 'Tenant, domaine, comptes, MFA et politiques de sécurité.' },
          { t: 'Migration', d: 'Transfert des emails, contacts, calendriers et documents, sans perte.' },
          { t: 'Formation', d: 'Prise en main de Outlook, Teams et OneDrive par vos équipes.' }
        ]},
        { type: 'faq', items: [
          { q: 'Office 365 et Microsoft 365, quelle différence ?', a: 'Microsoft 365 est le nom actuel de l’offre. Il regroupe les applications Office, la messagerie, Teams, le stockage cloud et la sécurité dans un seul abonnement.' },
          { q: 'Pouvons-nous garder notre adresse email actuelle ?', a: 'Oui. Nous connectons votre nom de domaine existant à Microsoft 365, vos adresses restent identiques.' },
          { q: 'Combien de temps dure une migration ?', a: 'Pour une PME, de quelques jours à deux semaines selon le volume de données. Nous planifions le basculement pour éviter toute interruption.' },
          { q: 'Proposez-vous un support après la migration ?', a: 'Oui, via nos contrats d’infogérance ou à l’intervention, pour vos utilisateurs et vos administrateurs.' }
        ]},
        { type: 'cta', t: 'Obtenez votre devis Microsoft 365', d: 'Indiquez le nombre d’utilisateurs et votre messagerie actuelle, nous préparons une offre adaptée.' }
      ],
      en: [
        { type: 'cards', title: 'What is included', items: [
          { t: 'Office apps', d: 'Word, Excel, PowerPoint and Outlook on PC, Mac and mobile, always up to date.' },
          { t: 'Exchange business email', d: 'An address on your own domain, 50 GB or more mailboxes depending on plan, built-in spam filtering.' },
          { t: 'Teams', d: 'Team chat, video meetings and calls, next to your files.' },
          { t: 'OneDrive & SharePoint', d: 'Cloud storage and secure document sharing with access control.' },
          { t: 'Security & compliance', d: 'Multi-factor authentication, device and data protection.' },
          { t: 'Simple billing', d: 'Monthly or annual subscription, add or remove users any time.' }
        ]},
        { type: 'plans', title: 'Which plan should you pick?', items: [
          { t: 'Business Basic', d: 'Email, Teams, OneDrive and web versions of Office apps.' },
          { t: 'Business Standard', d: 'Everything in Basic, plus desktop Office apps installed on your devices.', hot: true },
          { t: 'Business Premium', d: 'Everything in Standard, plus advanced security and device management.' }
        ], note: 'Plans and prices change: ask us for an up-to-date quote for your number of users.' },
        { type: 'steps', title: 'Our migration method', items: [
          { t: 'Inventory', d: 'Mailboxes, domains, shared files and devices involved.' },
          { t: 'Configuration', d: 'Tenant, domain, accounts, MFA and security policies.' },
          { t: 'Migration', d: 'Emails, contacts, calendars and documents moved without loss.' },
          { t: 'Training', d: 'Your team gets up to speed on Outlook, Teams and OneDrive.' }
        ]},
        { type: 'faq', items: [
          { q: 'Office 365 vs Microsoft 365: what is the difference?', a: 'Microsoft 365 is the current name of the offer. It bundles Office apps, email, Teams, cloud storage and security in one subscription.' },
          { q: 'Can we keep our current email address?', a: 'Yes. We connect your existing domain to Microsoft 365, so your addresses stay the same.' },
          { q: 'How long does a migration take?', a: 'For an SME, from a few days to two weeks depending on data volume. We schedule the cut-over to avoid any interruption.' },
          { q: 'Do you provide support after migration?', a: 'Yes, through our managed IT contracts or on demand, for both users and administrators.' }
        ]},
        { type: 'cta', t: 'Get your Microsoft 365 quote', d: 'Tell us the number of users and your current mail system, and we will prepare a tailored offer.' }
      ]
    }
  },

  azure: {
    slug: { fr: 'cloud-azure-maroc', en: 'azure-cloud-morocco' },
    title: {
      fr: 'Migration Cloud & Azure au Maroc | AbiTrading',
      en: 'Cloud Migration & Azure in Morocco | AbiTrading'
    },
    desc: {
      fr: 'Migration vers le cloud Microsoft Azure au Maroc : serveurs, sauvegarde, continuité d’activité et bureaux virtuels pour les PME. Audit gratuit.',
      en: 'Microsoft Azure cloud migration in Morocco: servers, backup, business continuity and virtual desktops for SMEs. Free audit.'
    },
    h1: { fr: 'Migration cloud et Azure pour les PME marocaines', en: 'Cloud and Azure migration for Moroccan SMEs' },
    lead: {
      fr: 'Sortez du serveur dans le placard. Nous migrons vos applications, fichiers et sauvegardes vers Microsoft Azure avec un coût mensuel maîtrisé.',
      en: 'Get rid of the server in the closet. We move your applications, files and backups to Microsoft Azure with a predictable monthly cost.'
    },
    service: { fr: 'Migration cloud Microsoft Azure', en: 'Microsoft Azure cloud migration' },
    blocks: {
      fr: [
        { type: 'cards', title: 'Nos prestations cloud', items: [
          { t: 'Migration de serveurs', d: 'Passage de vos serveurs de fichiers et applications vers des machines virtuelles Azure.' },
          { t: 'Sauvegarde et reprise', d: 'Copies automatiques et plan de reprise pour redémarrer vite après un incident.' },
          { t: 'Bureaux virtuels', d: 'Accès sécurisé à vos applications depuis n’importe où, sur n’importe quel appareil.' },
          { t: 'Identité et accès', d: 'Connexion unique, MFA et gestion centralisée des comptes avec Microsoft Entra ID.' },
          { t: 'Maîtrise des coûts', d: 'Dimensionnement adapté et suivi de la consommation pour éviter les surprises.' },
          { t: 'Hybride', d: 'Conservez ce qui doit rester sur site et migrez le reste progressivement.' }
        ]},
        { type: 'steps', title: 'Étapes du projet', items: [
          { t: 'Audit', d: 'Inventaire des serveurs, applications, dépendances et contraintes.' },
          { t: 'Plan', d: 'Architecture cible, calendrier, budget mensuel estimé.' },
          { t: 'Migration', d: 'Bascule par lots, tests, retour arrière prévu.' },
          { t: 'Exploitation', d: 'Supervision, sécurité et optimisation continues.' }
        ]},
        { type: 'cta', t: 'Demandez un audit cloud gratuit', d: 'Nous évaluons votre infrastructure actuelle et vous présentons les options réalistes.' }
      ],
      en: [
        { type: 'cards', title: 'Our cloud services', items: [
          { t: 'Server migration', d: 'Move your file servers and applications to Azure virtual machines.' },
          { t: 'Backup and recovery', d: 'Automated copies and a recovery plan to get back up fast after an incident.' },
          { t: 'Virtual desktops', d: 'Secure access to your apps from anywhere, on any device.' },
          { t: 'Identity and access', d: 'Single sign-on, MFA and centralised accounts with Microsoft Entra ID.' },
          { t: 'Cost control', d: 'Right-sizing and usage monitoring so there are no surprises.' },
          { t: 'Hybrid', d: 'Keep on-site what must stay, migrate the rest step by step.' }
        ]},
        { type: 'steps', title: 'Project steps', items: [
          { t: 'Audit', d: 'Inventory of servers, applications, dependencies and constraints.' },
          { t: 'Plan', d: 'Target architecture, timeline and estimated monthly budget.' },
          { t: 'Migration', d: 'Cut-over in batches, testing, rollback planned.' },
          { t: 'Operations', d: 'Ongoing monitoring, security and optimisation.' }
        ]},
        { type: 'cta', t: 'Request a free cloud audit', d: 'We assess your current infrastructure and present realistic options.' }
      ]
    }
  },

  managed: {
    slug: { fr: 'infogerance-it-maroc', en: 'managed-it-morocco' },
    title: {
      fr: 'Infogérance IT & Support Informatique au Maroc | AbiTrading',
      en: 'Managed IT & IT Support in Morocco | AbiTrading'
    },
    desc: {
      fr: 'Infogérance informatique pour PME au Maroc : support utilisateurs, réseau, antivirus, sauvegarde et maintenance. Une équipe qui gère votre IT pour vous.',
      en: 'Managed IT for SMEs in Morocco: user support, networking, antivirus, backup and maintenance. A team that runs your IT for you.'
    },
    h1: { fr: 'Infogérance IT : votre informatique, sans souci', en: 'Managed IT: your technology, worry-free' },
    lead: {
      fr: 'Concentrez-vous sur votre activité. Nous installons, surveillons et dépannons votre réseau, vos postes et vos logiciels.',
      en: 'Focus on your business. We install, monitor and fix your network, devices and software.'
    },
    service: { fr: 'Infogérance informatique', en: 'Managed IT services' },
    blocks: {
      fr: [
        { type: 'cards', title: 'Ce que couvre l’infogérance', items: [
          { t: 'Support utilisateurs', d: 'Une équipe joignable pour dépanner vos collaborateurs, à distance ou sur site.' },
          { t: 'Réseau & Wi-Fi', d: 'Installation, sécurisation et supervision de votre réseau local et de votre accès internet.' },
          { t: 'Antivirus & sécurité', d: 'Protection des postes et serveurs, mises à jour et gestion des menaces.' },
          { t: 'Sauvegarde & restauration', d: 'Sauvegardes automatiques et restauration testée de vos données.' },
          { t: 'Stockage de données', d: 'Serveurs NAS ou cloud pour centraliser et protéger vos fichiers.' },
          { t: 'Réparation & maintenance', d: 'Diagnostic et réparation de vos ordinateurs et équipements.' }
        ]},
        { type: 'cta', t: 'Un contrat adapté à votre taille', d: 'Forfait mensuel ou intervention ponctuelle : nous chiffrons selon votre parc.' }
      ],
      en: [
        { type: 'cards', title: 'What managed IT covers', items: [
          { t: 'User support', d: 'A reachable team to help your staff, remotely or on site.' },
          { t: 'Network & Wi-Fi', d: 'Setup, hardening and monitoring of your LAN and internet access.' },
          { t: 'Antivirus & security', d: 'Protection for devices and servers, updates and threat handling.' },
          { t: 'Backup & restore', d: 'Automated backups and tested restores of your data.' },
          { t: 'Data storage', d: 'NAS or cloud storage to centralise and protect your files.' },
          { t: 'Repair & maintenance', d: 'Diagnosis and repair of your computers and equipment.' }
        ]},
        { type: 'cta', t: 'A contract that fits your size', d: 'Monthly plan or one-off intervention: we quote based on your estate.' }
      ]
    }
  },

  custom: {
    slug: { fr: 'solutions-web-sur-mesure', en: 'custom-web-solutions' },
    title: {
      fr: 'Site Web, E-commerce, SaaS & SEO sur mesure au Maroc | AbiTrading',
      en: 'Custom Websites, E-commerce, SaaS & SEO in Morocco | AbiTrading'
    },
    desc: {
      fr: 'Création de sites web, boutiques e-commerce, applications SaaS et référencement SEO au Maroc. Développement sur mesure, rapide et pensé pour convertir.',
      en: 'Website design, e-commerce stores, SaaS applications and SEO in Morocco. Custom development that is fast and built to convert.'
    },
    h1: { fr: 'Sites web, e-commerce, SaaS et SEO sur mesure', en: 'Custom websites, e-commerce, SaaS and SEO' },
    lead: {
      fr: 'Au-delà de l’infrastructure, nous concevons les outils digitaux de votre croissance : un site qui apparaît sur Google, une boutique qui vend, une application qui automatise.',
      en: 'Beyond infrastructure, we build the digital tools that grow your business: a site that ranks on Google, a store that sells, an app that automates.'
    },
    service: { fr: 'Développement web sur mesure et SEO', en: 'Custom web development and SEO' },
    blocks: {
      fr: [
        { type: 'cards', title: 'Nos solutions digitales', items: [
          { t: 'Sites vitrines', d: 'Sites rapides, bilingues et optimisés mobile pour présenter votre entreprise.' },
          { t: 'E-commerce', d: 'Boutiques en ligne avec catalogue, paiement, livraison et gestion des commandes.' },
          { t: 'Applications SaaS', d: 'Plateformes métier sur mesure : comptes, abonnements, tableaux de bord, API.' },
          { t: 'Référencement SEO', d: 'Audit technique, contenus, netlinking local et suivi de vos positions sur Google.' },
          { t: 'Intégrations', d: 'Connexion à vos outils : Microsoft 365, ERP, CRM, passerelles de paiement.' },
          { t: 'Maintenance & hébergement', d: 'Mises à jour, sécurité, sauvegardes et évolutions après la mise en ligne.' }
        ]},
        { type: 'steps', title: 'Notre approche', items: [
          { t: 'Cadrage', d: 'Objectifs, cibles, fonctionnalités et budget définis ensemble.' },
          { t: 'Design & développement', d: 'Maquettes validées, puis développement par étapes avec démonstrations.' },
          { t: 'Lancement', d: 'Tests, optimisation SEO, mise en ligne et formation.' },
          { t: 'Croissance', d: 'Suivi des résultats et améliorations continues.' }
        ]},
        { type: 'cta', t: 'Un projet web en tête ?', d: 'Décrivez-le en quelques lignes, nous vous répondons avec une estimation.' }
      ],
      en: [
        { type: 'cards', title: 'Our digital solutions', items: [
          { t: 'Business websites', d: 'Fast, bilingual, mobile-first sites to present your company.' },
          { t: 'E-commerce', d: 'Online stores with catalogue, payment, delivery and order management.' },
          { t: 'SaaS applications', d: 'Custom business platforms: accounts, subscriptions, dashboards, APIs.' },
          { t: 'SEO', d: 'Technical audit, content, local link building and Google ranking tracking.' },
          { t: 'Integrations', d: 'Connect your tools: Microsoft 365, ERP, CRM, payment gateways.' },
          { t: 'Maintenance & hosting', d: 'Updates, security, backups and improvements after launch.' }
        ]},
        { type: 'steps', title: 'Our approach', items: [
          { t: 'Scoping', d: 'Goals, audience, features and budget defined together.' },
          { t: 'Design & build', d: 'Approved mock-ups, then step-by-step development with demos.' },
          { t: 'Launch', d: 'Testing, SEO optimisation, go-live and training.' },
          { t: 'Growth', d: 'Results tracking and continuous improvement.' }
        ]},
        { type: 'cta', t: 'Have a web project in mind?', d: 'Describe it in a few lines and we will reply with an estimate.' }
      ]
    }
  },

  products: {
    slug: { fr: 'materiel-informatique-logiciels', en: 'hardware-software' },
    title: {
      fr: 'Matériel Informatique & Logiciels pour Entreprises au Maroc | AbiTrading',
      en: 'Business IT Hardware & Software in Morocco | AbiTrading'
    },
    desc: {
      fr: 'Serveurs, réseau, stockage, imprimantes, licences Microsoft et antivirus pour entreprises au Maroc. Fourniture, installation et garantie.',
      en: 'Servers, networking, storage, printers, Microsoft licences and antivirus for businesses in Morocco. Supply, installation and warranty.'
    },
    h1: { fr: 'Matériel informatique et logiciels pour entreprises', en: 'Business IT hardware and software' },
    lead: {
      fr: 'Nous fournissons et installons les équipements et licences dont votre entreprise a besoin, avec conseil et suivi.',
      en: 'We supply and install the equipment and licences your business needs, with advice and follow-up.'
    },
    service: { fr: 'Fourniture de matériel et logiciels IT', en: 'IT hardware and software supply' },
    blocks: {
      fr: [
        { type: 'cards', title: 'Catalogue', items: [
          { t: 'Serveurs', d: 'Serveurs physiques dimensionnés pour vos applications et vos utilisateurs.' },
          { t: 'Réseau', d: 'Routeurs, commutateurs, pare-feu et bornes Wi-Fi professionnels.' },
          { t: 'Stockage', d: 'NAS et baies de stockage avec sauvegarde intégrée.' },
          { t: 'Imprimantes', d: 'Imprimantes et multifonctions pour bureaux et ateliers.' },
          { t: 'Licences Microsoft', d: 'Windows, Office, Microsoft 365, serveurs et outils métiers.' },
          { t: 'Antivirus', d: 'Solutions de protection pour postes, serveurs et messagerie.' }
        ]},
        { type: 'cta', t: 'Besoin d’un chiffrage ?', d: 'Envoyez votre liste de besoins, nous revenons avec un devis comparatif.' }
      ],
      en: [
        { type: 'cards', title: 'Catalogue', items: [
          { t: 'Servers', d: 'Physical servers sized for your applications and users.' },
          { t: 'Networking', d: 'Professional routers, switches, firewalls and Wi-Fi access points.' },
          { t: 'Storage', d: 'NAS and storage arrays with built-in backup.' },
          { t: 'Printers', d: 'Printers and multifunction devices for offices and workshops.' },
          { t: 'Microsoft licences', d: 'Windows, Office, Microsoft 365, server and business tools.' },
          { t: 'Antivirus', d: 'Protection for devices, servers and email.' }
        ]},
        { type: 'cta', t: 'Need a quote?', d: 'Send us your requirements and we will come back with a comparative quote.' }
      ]
    }
  },

  about: {
    slug: { fr: 'a-propos', en: 'about' },
    title: { fr: 'À propos d’AbiTrading | Partenaire IT & Microsoft au Maroc', en: 'About AbiTrading | IT & Microsoft Partner in Morocco' },
    desc: {
      fr: 'AbiTrading accompagne les entreprises marocaines depuis 2003 en informatique, cloud et Microsoft 365.',
      en: 'AbiTrading has supported Moroccan businesses since 2003 in IT, cloud and Microsoft 365.'
    },
    h1: { fr: 'Votre partenaire IT de confiance depuis 2003', en: 'Your trusted IT partner since 2003' },
    lead: {
      fr: 'AbiTrading aide les entreprises à s’appuyer sur une informatique fiable pour se concentrer sur leur plan stratégique.',
      en: 'AbiTrading helps businesses rely on dependable IT so they can focus on their strategic plans.'
    },
    blocks: {
      fr: [
        { type: 'stats' },
        { type: 'cards', title: 'Nos engagements', items: [
          { t: 'Expertise', d: 'Depuis 2003, nous concevons et exploitons des infrastructures, du cloud et des logiciels pour des entreprises de toutes tailles.' },
          { t: 'Proximité', d: 'Une équipe locale, en français et en arabe, joignable rapidement.' },
          { t: 'Transparence', d: 'Devis clairs, prix récurrents lisibles, pas de mauvaise surprise.' }
        ]},
        { type: 'clients' },
        { type: 'partners' },
        { type: 'cta', t: 'Travaillons ensemble', d: 'Présentez-nous votre contexte, nous vous proposons la bonne approche.' }
      ],
      en: [
        { type: 'stats' },
        { type: 'cards', title: 'Our commitments', items: [
          { t: 'Expertise', d: 'Since 2003 we have designed and run infrastructure, cloud and software for businesses of every size.' },
          { t: 'Proximity', d: 'A local team, reachable quickly, working in French, Arabic and English.' },
          { t: 'Transparency', d: 'Clear quotes, readable recurring prices, no unpleasant surprises.' }
        ]},
        { type: 'clients' },
        { type: 'partners' },
        { type: 'cta', t: 'Let’s work together', d: 'Tell us about your context and we will propose the right approach.' }
      ]
    }
  },

  contact: {
    slug: { fr: 'contact', en: 'contact' },
    title: { fr: 'Contact & Devis Gratuit | AbiTrading Maroc', en: 'Contact & Free Quote | AbiTrading Morocco' },
    desc: {
      fr: 'Contactez AbiTrading pour un devis gratuit Microsoft 365, cloud, infogérance IT ou développement web au Maroc.',
      en: 'Contact AbiTrading for a free quote on Microsoft 365, cloud, managed IT or web development in Morocco.'
    },
    h1: { fr: 'Contactez-nous', en: 'Contact us' },
    lead: {
      fr: 'Parlez-nous de votre projet. Nous répondons sous 24 h ouvrées.',
      en: 'Tell us about your project. We reply within 1 business day.'
    },
    blocks: { fr: [{ type: 'form' }], en: [{ type: 'form' }] }
  }
};

import { home } from './home.mjs';
pages.home = home;
