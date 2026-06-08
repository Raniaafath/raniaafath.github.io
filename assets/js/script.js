const translations = {
  fr: {
    'nav-experience': 'Parcours',
    'nav-projects': 'Projets',
    'nav-skills': 'Compétences',
    'nav-resume': 'CV',
    'nav-contact': 'Contact',
    'hero-tag': 'Disponible pour un PFE — Fév 2027',
    'hero-desc': "Ingénieure DevOps et Cloud. Étudiante en génie télécom à l'ENIT, actuellement en recherche sur les systèmes de graphes de connaissances à TU Dresden / ScaDS.AI. Je construis des infrastructures scalables, autoréparantes et déployables.",
    'btn-view-projects': 'Voir les projets',
    'stat-internships': 'stages & rôles de recherche',
    'stat-production': 'projets en production',
    'stat-cloud': 'plateformes cloud',

    'section-profile-label': 'Profil',
    'section-profile-title': 'Résumé rapide',
    'profile-card-summary': 'Profil',
    'profile-summary': "Étudiante en télécommunications à TU Dresden, actuellement en recherche chez ScaDS.AI. Expérience en IT, développement logiciel et DevOps. Je recherche un poste Werkstudent ou mini-job à Dresde.",
    'profile-card-contact': 'Coordonnées',
    'label-address': 'Adresse',
    'label-phone': 'Téléphone',
    'label-email': 'Courriel',
    'label-github': 'GitHub',
    'label-linkedin': 'LinkedIn',
    'label-location': 'Localisation',
    'location-text': 'Dresde, Allemagne · en cours de relocation en France',
    'profile-card-personal': 'Détails',
    'label-born': 'Né(e)',
    'label-nationality': 'Nationalité',
    'label-languages': 'Langues',

    'section-journey-label': 'Parcours',
    'section-journey-title': "Mon histoire",
    'timeline-type-research': 'Recherche',
    'timeline-type-work': 'Expérience',
    'timeline-type-education': 'Formation',

    'tl1-role': 'Chercheuse étudiante — Knowledge Graphs & QA',
    'tl1-place': 'ScaDS.AI / TU Dresden · Groupe du Prof. Michael Färber',
    'tl1-desc': "Création d'une pipeline RAG pour QA sur grands graphes de connaissances (SemOpenAlex, 250M+ entités). Conception de prompts et de workflows MCP pour l'extraction de revendications scientifiques (projet ClaimBase).",
    'tl1-date': 'Fév 2026 – présent',

    'tl2-role': 'Ingénieure DevOps & Automatisation',
    'tl2-place': 'Neomark Group · Tunisie (à distance)',
    'tl2-desc': "Administration Linux/Ubuntu VPS, CI/CD GitHub Actions, SSL/TLS, Nginx reverse proxy et monitoring. Création de workflows n8n, gestion DNS, runbooks et outil SEO Node.js avec OpenAI.",
    'tl2-link': 'Voir le post LinkedIn →',
    'tl2-date': 'Sep 2025 – Jan 2026',

    'tl3-role': 'Stagiaire IA',
    'tl3-place': 'Orange Tunisie · Tunis',
    'tl3-desc': "Projet de détection de fraude IMEI : feature engineering, évaluation des modèles (Precision/Recall, ROC/AUC) et documentation de déploiement.",
    'tl3-date': 'Sep 2025 – Jan 2026',

    'tl4-role': 'Développeuse logicielle',
    'tl4-place': 'Tunipages · Tunisie (à distance)',
    'tl4-desc': "Maintenance d'une plateforme CRM, migrations de base de données, corrections et pipelines GitLab CI/CD. Intégration d'API REST avec FastAPI et Node.js.",
    'tl4-date': '2024',

    'tl5-role': "École Nationale d'Ingénieurs de Tunis (ENIT)",
    'tl5-place': "Diplôme d'ingénieur · Télécommunications",
    'tl5-desc': "Spécialisation en télécommunications avec une orientation Cloud & DevOps. Diplôme d'ingénieur prévu pour 2027.",
    'tl5-date': '2023 – présent',

    'tl6-role': 'Stagiaire en ingénierie réseau',
    'tl6-place': 'Tunisie Telecom · Tunis',
    'tl6-desc': "Configuration de routage, pare-feu, VLAN et VPN ; support xDSL, fibre et 5G. Tests OLT/ONT et analyse réseau Wireshark.",
    'tl6-date': '2023',

    'tl7-role': 'IPEIM, Monastir',
    'tl7-place': 'Classes préparatoires · Maths-Physique',
    'tl7-desc': "Classement national 445/1600 au concours national d'entrée aux écoles d'ingénieurs.",
    'tl7-date': '2021 – 2023',

    'tl8-role': 'Lycée Pilote, Monastir',
    'tl8-place': 'Baccalauréat · Section Mathématiques',
    'tl8-desc': 'Obtenu avec la mention Très Bien.',
    'tl8-date': '2021',

    'section-work': 'Travaux',
    'section-projects': 'Projets sélectionnés',
    'project1-title': 'Kubernetes GitOps auto-réparant',
    'project1-desc': "Pipeline GitOps complet avec autoréparation automatisée. ArgoCD synchronise l'état du cluster avec Git ; Prometheus détecte les pods dégradés et déclenche des workflows de récupération automatique.",
    'project-link': 'Voir sur GitHub →',
    'project2-title': 'ClaimBase — Extraction de revendications scientifiques',
    'project2-desc': "Pipeline d'extraction de revendications scientifiques à partir d'articles arXiv (jeu de données unarXive), avec annotation manuelle d'un échantillon de référence. Socle du projet de recherche WP1 mené avec ScaDS.AI / TU Dresden.",
    'project3-title': 'Pipeline CI/CD — Analyse de sentiments BERT',
    'project3-desc': "Pipeline CI/CD de niveau production pour une API d'analyse de sentiments basée sur BERT. Lint, tests automatisés, build Docker et scan de sécurité Trivy à chaque push, orchestrés via GitHub Actions.",
    'project4-title': 'Stack DevOps auto-hébergée sur VPS',
    'project4-desc': "Stack auto-hébergée complète sur un VPS OVH avec Docker : Caddy en reverse proxy avec HTTPS automatique (Let's Encrypt), serveur mail Mailu (SPF/DKIM/DMARC), Vaultwarden, Nextcloud, Taiga, wiki interne et ERP/CRM Dolibarr déployé en blue/green via GitHub Actions.",
    'project5-title': 'Pipeline MLOps — Prédiction de durée de séjour',
    'project5-desc': "Pipeline MLOps de prédiction et de réentraînement de modèles pour estimer la durée de séjour (LOS) des patients, conçu pour aider les hôpitaux à optimiser la gestion des lits et des coûts. Présenté à la Journée Scientifique LR-RISC de l'ENIT, avec Rayan Gharbi, sous la supervision du Dr Soumaya Meherzi.",
    'project6-title': 'Patient Risk Analyzer — Prédiction de durée de séjour',
    'project6-desc': "Application web complète prédisant la durée de séjour de patients victimes d'AVC ischémique. Backend Flask avec un modèle XGBoost, tableau de bord React/TypeScript, MongoDB pour les données patients, visualisations SHAP pour expliquer les prédictions, le tout conteneurisé avec Docker.",
    'project7-title': 'API de prédiction du risque cardiaque',
    'project7-desc': "API Flask + React prédisant le risque de crise cardiaque à partir de données de santé, avec un modèle Random Forest entraîné sur des données Kaggle, prétraitement (standardisation, encodage one-hot) et réponse JSON structurée affichée dans une interface React.",
    'project-link-linkedin': 'Voir le post LinkedIn →',

    'section-tech': 'Technologies',
    'section-skills': 'Compétences techniques',

    'contact-availability': 'Ouverte aux opportunités PFE — Fév 2027',
    'contact-title': 'Construisons quelque chose ensemble',
    'contact-sub': "Ingénieure télécom diplômée en juin 2027. À la recherche d'un stage PFE en DevOps, infrastructure cloud ou MLOps — idéalement en France.",
    'contact-button': '→ Contactez-moi'
  },
  en: {
    'nav-experience': 'Journey',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-resume': 'Resume',
    'nav-contact': 'Contact',
    'hero-tag': 'Available for PFE — Feb 2027',
    'hero-desc': 'DevOps & Cloud Engineer. Telecom engineering student at ENIT, currently researching knowledge graph systems at TU Dresden / ScaDS.AI. I build infrastructure that scales, heals, and ships.',
    'btn-view-projects': 'View projects',
    'stat-internships': 'internships & research roles',
    'stat-production': 'production projects',
    'stat-cloud': 'cloud platforms',

    'section-profile-label': 'Profile',
    'section-profile-title': 'Quick summary',
    'profile-card-summary': 'Profile',
    'profile-summary': 'Telecommunications engineering student enrolled at TU Dresden, currently researching at ScaDS.AI. Experienced in IT, software development, and DevOps. Looking for a Werkstudent or mini-job position in Dresden.',
    'profile-card-contact': 'Contact',
    'label-address': 'Address',
    'label-phone': 'Phone',
    'label-email': 'Email',
    'label-github': 'GitHub',
    'label-linkedin': 'LinkedIn',
    'label-location': 'Location',
    'location-text': 'Dresden, Germany · relocating to France',
    'profile-card-personal': 'Details',
    'label-born': 'Born',
    'label-nationality': 'Nationality',
    'label-languages': 'Languages',

    'section-journey-label': 'Journey',
    'section-journey-title': 'My story',
    'timeline-type-research': 'Research',
    'timeline-type-work': 'Work',
    'timeline-type-education': 'Education',

    'tl1-role': 'Student Researcher — Knowledge Graphs & QA',
    'tl1-place': 'ScaDS.AI / TU Dresden · Prof. Michael Färber’s group',
    'tl1-desc': 'Building a RAG pipeline for QA over large knowledge graphs (SemOpenAlex, 250M+ entities). Designing prompts and MCP workflows for scientific claim extraction (ClaimBase project).',
    'tl1-date': 'Feb 2026 – present',

    'tl2-role': 'DevOps & Automation Engineer',
    'tl2-place': 'Neomark Group · Tunisia (remote)',
    'tl2-desc': 'Linux/Ubuntu VPS administration, CI/CD with GitHub Actions, SSL/TLS, Nginx reverse proxy, and monitoring. Built n8n workflows, managed DNS, wrote runbooks, and shipped a Node.js SEO tool powered by OpenAI.',
    'tl2-link': 'View LinkedIn post →',
    'tl2-date': 'Sep 2025 – Jan 2026',

    'tl3-role': 'AI Engineer Intern',
    'tl3-place': 'Orange Tunisia · Tunis',
    'tl3-desc': 'IMEI fraud detection project: feature engineering, model evaluation (Precision/Recall, ROC/AUC), and deployment documentation.',
    'tl3-date': 'Sep 2025 – Jan 2026',

    'tl4-role': 'Software Developer',
    'tl4-place': 'Tunipages · Tunisia (remote)',
    'tl4-desc': 'Maintained a CRM platform, ran database migrations, fixed bugs, and built GitLab CI/CD pipelines. Integrated REST APIs with FastAPI and Node.js.',
    'tl4-date': '2024',

    'tl5-role': 'National Engineering School of Tunis (ENIT)',
    'tl5-place': 'Engineering degree · Telecommunications',
    'tl5-desc': 'Specializing in telecommunications with a Cloud & DevOps focus. Engineering degree expected in 2027.',
    'tl5-date': '2023 – present',

    'tl6-role': 'Network Engineering Intern',
    'tl6-place': 'Tunisie Telecom · Tunis',
    'tl6-desc': 'Configured routing, firewalls, VLANs and VPNs; supported xDSL, fiber and 5G. Ran OLT/ONT tests and Wireshark network analysis.',
    'tl6-date': '2023',

    'tl7-role': 'IPEIM, Monastir',
    'tl7-place': 'Preparatory classes · Maths-Physics',
    'tl7-desc': 'Ranked 445/1600 nationally in the engineering school entrance exam.',
    'tl7-date': '2021 – 2023',

    'tl8-role': 'Lycée Pilote, Monastir',
    'tl8-place': 'Baccalaureate · Mathematics track',
    'tl8-desc': 'Graduated with highest honors (Très Bien).',
    'tl8-date': '2021',

    'section-work': 'Work',
    'section-projects': 'Selected projects',
    'project1-title': 'GitOps Self-Healing Kubernetes',
    'project1-desc': 'Full GitOps pipeline with automated self-healing. ArgoCD syncs cluster state with Git; Prometheus detects degraded pods and triggers automated recovery workflows.',
    'project-link': 'View on GitHub →',
    'project2-title': 'ClaimBase — Scientific Claim Extraction',
    'project2-desc': 'Pipeline extracting scientific claims from arXiv papers (unarXive dataset), with manual gold-sample annotation. Foundation of the WP1 research project at ScaDS.AI / TU Dresden.',
    'project3-title': 'BERT Sentiment Analysis CI/CD Pipeline',
    'project3-desc': 'Production-grade CI/CD pipeline wrapping a BERT-based sentiment analysis API. Automated linting, testing, Docker builds, and Trivy security scans on every push, orchestrated with GitHub Actions.',
    'project4-title': 'Self-Hosted DevOps Stack on a VPS',
    'project4-desc': "Full self-hosted stack on an OVH VPS using Docker: Caddy reverse proxy with automatic HTTPS (Let's Encrypt), Mailu mail server (SPF/DKIM/DMARC), Vaultwarden, Nextcloud, Taiga, an internal wiki, and a Dolibarr ERP/CRM deployed blue/green via GitHub Actions.",
    'project5-title': 'MLOps Pipeline — Hospital Length-of-Stay Prediction',
    'project5-desc': 'MLOps pipeline for predicting and retraining models for patient Length of Stay (LOS), designed to help hospitals optimize bed allocation and cost management. Presented at ENIT’s LR-RISC Scientific Day, with Rayan Gharbi, under the supervision of Dr. Soumaya Meherzi.',
    'project6-title': 'Patient Risk Analyzer — Length-of-Stay Prediction',
    'project6-desc': 'Full-stack web app predicting Length of Stay for ischemic stroke patients. Flask backend with an XGBoost model, React/TypeScript dashboard, MongoDB for patient data, SHAP visualizations for model explainability, all containerized with Docker.',
    'project7-title': 'Heart Attack Risk Prediction API',
    'project7-desc': 'Flask + React API predicting heart attack risk from health data, powered by a Random Forest model trained on Kaggle data, with preprocessing (standardization, one-hot encoding) and a structured JSON response rendered in a React UI.',
    'project-link-linkedin': 'View LinkedIn post →',

    'section-tech': 'Stack',
    'section-skills': 'Technical skills',

    'contact-availability': 'Open to PFE opportunities — Feb 2027',
    'contact-title': 'Let’s build something together',
    'contact-sub': 'Telecom engineer graduating June 2027. Looking for a PFE internship in DevOps, Cloud infrastructure, or MLOps — ideally in France.',
    'contact-button': '→ Get in touch'
  }
};

const i18nElements = document.querySelectorAll('[data-i18n]');
const langToggle = document.getElementById('lang-toggle');
const getSavedLang = () => localStorage.getItem('lang') || 'fr';

function setLanguage(lang) {
  document.documentElement.lang = lang;
  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    const text = translations[lang]?.[key];
    if (text !== undefined) {
      element.textContent = text;
    }
  });
  langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
  localStorage.setItem('lang', lang);
}

langToggle.addEventListener('click', () => {
  const nextLang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
  setLanguage(nextLang);
});

setLanguage(getSavedLang());

// Reveal sections/cards as the visitor scrolls down, so the page feels alive beyond the first screen.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
