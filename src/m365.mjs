// Cloud-only Microsoft offers (no desktop apps). No public prices: every plan leads to a quote request.
export const m365Plans = [
  {
    id: 'exchange',
    name: 'Exchange Online (Plan 1)',
    tag: { fr: 'Email uniquement', en: 'Email only' },
    best: { fr: 'Pour une messagerie pro simple et fiable.', en: 'For simple, reliable business email.' },
    features: {
      fr: ['Adresse @votre-domaine', 'Boîte mail de 50 Go par utilisateur', 'Outlook sur le web et mobile', 'Calendriers et contacts partagés', 'Anti-spam et anti-malware intégrés'],
      en: ['Address on your own domain', '50 GB mailbox per user', 'Outlook on the web and mobile', 'Shared calendars and contacts', 'Built-in anti-spam and anti-malware']
    }
  },
  {
    id: 'basic',
    name: 'Microsoft 365 Business Basic',
    hot: true,
    tag: { fr: 'Le plus demandé', en: 'Most popular' },
    best: { fr: 'Pour les PME jusqu’à 300 utilisateurs.', en: 'For SMEs up to 300 users.' },
    features: {
      fr: ['Tout Exchange Online (50 Go)', 'Word, Excel, PowerPoint sur le web et mobile', 'Teams : chat, réunions et appels', 'OneDrive 1 To par utilisateur', 'SharePoint pour les fichiers d’équipe'],
      en: ['Everything in Exchange Online (50 GB)', 'Word, Excel, PowerPoint on the web and mobile', 'Teams: chat, meetings and calls', '1 TB OneDrive per user', 'SharePoint for team files']
    }
  },
  {
    id: 'e1',
    name: 'Office 365 E1',
    tag: { fr: 'Grandes entreprises', en: 'Enterprise' },
    best: { fr: 'Au-delà de 300 utilisateurs.', en: 'Beyond 300 users.' },
    features: {
      fr: ['Nombre d’utilisateurs illimité', 'Office sur le web et mobile', 'Boîte mail 50 Go et OneDrive 1 To', 'SharePoint et outils de conformité', 'Teams disponible en option'],
      en: ['Unlimited number of users', 'Office on the web and mobile', '50 GB mailbox and 1 TB OneDrive', 'SharePoint and compliance tools', 'Teams available as an add-on']
    }
  }
];

export const m365Ui = {
  fr: { cloud: '100 % cloud · aucune installation', onQuote: 'Sur devis', quoteSub: 'Tarif adapté à votre nombre d’utilisateurs', choose: 'Demander un devis', title: 'Nos offres Microsoft 365 cloud', note: 'Nos tarifs dépendent du nombre d’utilisateurs et de la durée d’engagement. Contactez-nous : nous répondons sous 24 h ouvrées avec une offre chiffrée en dirhams.' },
  en: { cloud: '100% cloud · nothing to install', onQuote: 'Quote on request', quoteSub: 'Priced for your number of users', choose: 'Request a quote', title: 'Our Microsoft 365 cloud plans', note: 'Pricing depends on your number of users and commitment term. Contact us and we will reply within 1 business day with a quote in Moroccan dirhams.' }
};
