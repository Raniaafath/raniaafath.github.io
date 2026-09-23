const translations = {
  fr: {
    'nav-experience': 'Parcours',
    'nav-projects': 'Projets',
    'nav-awards': 'Prix & Certifs',
    'nav-skills': 'Compétences',
    'nav-resume': 'CV',
    'nav-contact': 'Contact',
    'hero-tag': 'Disponible pour un PFE — Fév 2027',
    'hero-desc': "Élève ingénieure ICT, option Cloud et IoT, à l'ENIT. Ancienne boursière DAAD KOSPIE à TU Dresden / ScaDS.AI. J'automatise des infrastructures cloud avec Kubernetes, Terraform, CI/CD et GitOps.",
    'btn-view-projects': 'Voir les projets',
    'stat-internships': "expériences pro & recherche",
    'stat-production': "projets présentés",
    'stat-cloud': 'plateformes cloud',
    'qstat-languages': 'Langues',

    'section-profile-label': 'Profil',
    'section-profile-title': 'Résumé rapide',
    'profile-card-summary': 'Profil',
    'profile-summary': "Élève ingénieure ICT (Cloud et IoT) à l'ENIT. Expérience en DevOps, automatisation, développement logiciel, IA et réseaux. Recherche un stage de fin d'études de 6 mois en DevOps, Cloud et automatisation d'infrastructure à partir de février 2027.",
    'profile-card-contact': 'Coordonnées',
    'label-address': 'Adresse',
    'label-phone': 'Téléphone',
    'label-email': 'Courriel',
    'label-github': 'GitHub',
    'label-linkedin': 'LinkedIn',
    'label-location': 'Localisation',
    'location-text': "Tunis, Tunisie",
    'profile-card-personal': 'Détails',
    'label-languages': 'Langues',

    'section-journey-label': 'Parcours',
    'section-journey-title': "Mon histoire",
    'timeline-type-research': 'Recherche',
    'timeline-type-work': 'Expérience',
    'timeline-type-education': 'Formation',

    'tl1-role': "Séjour de recherche — Extraction d'assertions scientifiques",
    'tl1-place': "ScaDS.AI / TU Dresden, Allemagne · Bourse DAAD KOSPIE",
    'tl1-desc': "Pipeline d'extraction d'assertions à partir d'articles arXiv : baseline à règles, extraction par LLM, puis architecture multi-étapes de type Claimify, exécutée sur infrastructure HPC.",
    'tl1-date': "02/2026 – 07/2026",

    'tl2-role': "Développeuse DevOps & Automatisation",
    'tl2-place': "Neomark Group · France–Tunisie (à distance)",
    'tl2-desc': "Pipelines CI/CD GitHub Actions pour un ERP Dolibarr avec déploiement blue-green. Administration d'un VPS OVH : déploiement, sauvegardes, reverse proxy, SSL/TLS, supervision et workflows n8n multi-services. Application Python/React d'automatisation SEO avec PostgreSQL, API OpenAI et Google Keyword Planner.",
    'tl2-link': 'Voir le post LinkedIn →',
    'tl2-date': "09/2025 – 01/2026",

    'tl3-role': "Stagiaire Intelligence Artificielle",
    'tl3-place': "Orange Tunisie · Tunis",
    'tl3-desc': "Détection de fraude IMEI par clustering, détection d'anomalies et modèles supervisés, avec packaging Docker et CI/CD. Comparaison des modèles (précision, rappel, ROC/AUC) et optimisation des seuils de décision.",
    'tl3-date': "07/2025 – 08/2025",

    'tl4-role': "Développeuse logicielle",
    'tl4-place': "Tunipages · Tunisie",
    'tl4-desc': "Maintenance d'une plateforme CRM : Laravel/PHP, frontend, back-office et migrations SQL. Suivi de production, résolution d'incidents et organisation du développement via GitLab Flow.",
    'tl4-date': "09/2025 – 01/2026",

    'tl5-role': "École Nationale d'Ingénieurs de Tunis (ENIT)",
    'tl5-place': "Cycle ingénieur ICT · Option Cloud et IoT",
    'tl5-desc': "8e/46 de la spécialité. Projet de fin d'études prévu à partir de février 2027.",
    'tl5-date': "2023 – 2027",

    'tl6-role': "Stagiaire Réseaux",
    'tl6-place': "Tunisie Telecom · Monastir",
    'tl6-desc': "Déploiement FTTH-GPON : configuration d'OLT/ONT Huawei et ZTE, mesures OTDR, supervision ONMSi et analyse Wireshark.",
    'tl6-date': "06/2024 – 07/2024",

    'tl7-role': 'IPEIM, Monastir',
    'tl7-place': 'Classes préparatoires · Maths-Physique',
    'tl7-desc': "Institut préparatoire aux études d'ingénieur de Monastir.",
    'tl7-date': '2021 – 2023',


    'section-work': 'Travaux',
    'section-projects': 'Projets sélectionnés',
    'project1-title': "Plateforme Kubernetes auto-réparatrice (GitOps / SRE)",
    'project1-desc': "Cluster Azure AKS provisionné avec Terraform et déploiement continu via ArgoCD : infrastructure et manifestes versionnés avec réconciliation automatique. Observabilité Prometheus/Grafana et auto-remédiation des incidents selon une approche SRE.",
    'project-link': 'Voir sur GitHub →',
    'project2-title': "Extraction d'assertions scientifiques — ScaDS.AI",
    'project2-desc': "Pipeline pour des articles arXiv : baseline à règles, extraction par LLM, puis architecture multi-étapes de type Claimify. Exécution sur l'infrastructure HPC de TU Dresden pendant le séjour DAAD KOSPIE.",
    'project3-title': 'Pipeline CI/CD — Analyse de sentiments BERT',
    'project3-desc': "Pipeline CI/CD de niveau production pour une API d'analyse de sentiments basée sur BERT. Lint, tests automatisés, build Docker et scan de sécurité Trivy à chaque push, orchestrés via GitHub Actions.",
    'project4-title': 'Stack DevOps auto-hébergée sur VPS',
    'project4-desc': "Stack auto-hébergée complète sur un VPS OVH avec Docker : Caddy en reverse proxy avec HTTPS automatique (Let's Encrypt), serveur mail Mailu (SPF/DKIM/DMARC), Vaultwarden, Nextcloud, Taiga, wiki interne et ERP/CRM Dolibarr déployé en blue/green via GitHub Actions.",
    'project5-title': "Plateforme MLOps — Durée de séjour hospitalier",
    'project5-desc': "Application full-stack prédisant la durée de séjour de patients victimes d'AVC ischémique. Pipeline ETL Spark, API Flask et modèle XGBoost conteneurisé, explications SHAP, MongoDB et tableau de bord React/TypeScript. Réentraînement et CI/CD via GitHub Actions. Projet présenté au laboratoire LR-RISC de l'ENIT.",
    'project7-title': "API de prédiction du risque cardiaque",
    'project7-desc': "API Flask prédisant le risque de maladie cardiaque à partir de paramètres de santé, avec un modèle Random Forest et une normalisation scikit-learn. Interface React/TypeScript pour saisir les données et afficher le résultat.",
    'project8-title': "Sécurité des réseaux Wi-Fi — Audit & contre-mesures",
    'project8-desc': "Audit sous Kali Linux : Rogue AP / Evil Twin, analyse WPA2/WPA3 avec Aircrack-ng, génération de wordlists avec Crunch pour une attaque par force brute sur WPA2, et proposition de contre-mesures.",
    'project-link-linkedin': 'Voir le post LinkedIn →',

    'section-tech': 'Technologies',
    'section-skills': 'Compétences techniques',

    'section-awards-label': 'Distinctions',
    'section-awards-title': 'Prix & certifications',
    'award1-title': 'DAAD KOSPIE Scholar 2026',
    'award1-desc': "Séjour de recherche à TU Dresden · 15 lauréats sélectionnés parmi plus de 300 candidats.",
    'award4-title': "Cisco — Introduction to Networking",
    'award4-desc': "Cisco Networking Academy",

    'contact-availability': 'Ouverte aux opportunités PFE — Fév 2027',
    'contact-title': 'Construisons quelque chose ensemble',
    'contact-sub': "Je recherche un stage de fin d'études de 6 mois en DevOps, Cloud et automatisation d'infrastructure, à partir de février 2027.",
    'contact-button': '→ Contactez-moi',
    'qstat-rank': "Rang ENIT",
    'qstat-daad': "DAAD KOSPIE",
    'award5-title': "Linux Foundation — LFS101",
    'award5-desc': "Introduction to Linux",
    'award6-title': "NVIDIA DLI — Efficient LLM Customisation",
    'award6-desc': "NVIDIA Deep Learning Institute",
    'skills-g1': "Cloud & Infrastructure",
    'skills-g2': "CI/CD & Observabilité",
    'skills-g3': "Développement & Data",
    'skills-g4': "Réseaux & Sécurité",
    'label-availability': "Disponibilité",
    'availability-text': "PFE de 6 mois · à partir de février 2027",
    'footer-top': '↑ Retour en haut'
  },
  en: {
    'nav-experience': 'Journey',
    'nav-projects': 'Projects',
    'nav-awards': 'Awards & Certs',
    'nav-skills': 'Skills',
    'nav-resume': 'Resume',
    'nav-contact': 'Contact',
    'hero-tag': 'Available for PFE — Feb 2027',
    'hero-desc': "ICT engineering student (Cloud & IoT track) at ENIT. Former DAAD KOSPIE scholar at TU Dresden / ScaDS.AI. I automate cloud infrastructure with Kubernetes, Terraform, CI/CD and GitOps.",
    'btn-view-projects': 'View projects',
    'stat-internships': "work & research roles",
    'stat-production': "featured projects",
    'stat-cloud': 'cloud platforms',
    'qstat-languages': 'Languages',

    'section-profile-label': 'Profile',
    'section-profile-title': 'Quick summary',
    'profile-card-summary': 'Profile',
    'profile-summary': "ICT engineering student (Cloud & IoT) at ENIT, with experience in DevOps, automation, software development, AI and networking. Seeking a 6-month final-year internship in DevOps, Cloud and infrastructure automation from February 2027.",
    'profile-card-contact': 'Contact',
    'label-address': 'Address',
    'label-phone': 'Phone',
    'label-email': 'Email',
    'label-github': 'GitHub',
    'label-linkedin': 'LinkedIn',
    'label-location': 'Location',
    'location-text': "Tunis, Tunisia",
    'profile-card-personal': 'Details',
    'label-languages': 'Languages',

    'section-journey-label': 'Journey',
    'section-journey-title': 'My story',
    'timeline-type-research': 'Research',
    'timeline-type-work': 'Work',
    'timeline-type-education': 'Education',

    'tl1-role': "Research stay — Scientific claim extraction",
    'tl1-place': "ScaDS.AI / TU Dresden, Germany · DAAD KOSPIE scholarship",
    'tl1-desc': "Claim extraction pipeline for arXiv papers: rule-based baseline, LLM extraction, then a Claimify-style multi-stage architecture, run on HPC infrastructure.",
    'tl1-date': "02/2026 – 07/2026",

    'tl2-role': "DevOps & Automation Developer",
    'tl2-place': "Neomark Group · France–Tunisia (remote)",
    'tl2-desc': "Built GitHub Actions CI/CD pipelines for a Dolibarr ERP with blue-green deployment. Administered an OVH VPS: deployment, backups, reverse proxy, SSL/TLS, monitoring and multi-service n8n workflows. Built and shipped a Python/React SEO automation app with PostgreSQL, the OpenAI API and Google Keyword Planner.",
    'tl2-link': 'View LinkedIn post →',
    'tl2-date': "09/2025 – 01/2026",

    'tl3-role': "AI Intern",
    'tl3-place': "Orange Tunisia · Tunis",
    'tl3-desc': "IMEI fraud detection using clustering, anomaly detection and supervised models, packaged with Docker and CI/CD. Compared models (precision, recall, ROC/AUC) and tuned decision thresholds.",
    'tl3-date': "07/2025 – 08/2025",

    'tl4-role': "Software Developer",
    'tl4-place': "Tunipages · Tunisia",
    'tl4-desc': "Maintained a CRM platform: Laravel/PHP, frontend, back-office and SQL migrations. Production monitoring, incident resolution and development organised with GitLab Flow.",
    'tl4-date': "09/2025 – 01/2026",

    'tl5-role': "National Engineering School of Tunis (ENIT)",
    'tl5-place': "ICT engineering degree · Cloud & IoT track",
    'tl5-desc': "Ranked 8th of 46 in the specialisation. Final-year project planned from February 2027.",
    'tl5-date': "2023 – 2027",

    'tl6-role': "Network Intern",
    'tl6-place': "Tunisie Telecom · Monastir",
    'tl6-desc': "FTTH-GPON deployment: configured Huawei and ZTE OLT/ONT, ran OTDR measurements, ONMSi monitoring and Wireshark analysis.",
    'tl6-date': "06/2024 – 07/2024",

    'tl7-role': 'IPEIM, Monastir',
    'tl7-place': 'Preparatory classes · Maths-Physics',
    'tl7-desc': "Preparatory institute for engineering studies of Monastir.",
    'tl7-date': '2021 – 2023',


    'section-work': 'Work',
    'section-projects': 'Selected projects',
    'project1-title': "Self-Healing Kubernetes Platform (GitOps / SRE)",
    'project1-desc': "Azure AKS cluster provisioned with Terraform and continuously deployed via ArgoCD, with versioned infrastructure and manifests and automatic reconciliation. Prometheus/Grafana observability and SRE-style automated incident remediation.",
    'project-link': 'View on GitHub →',
    'project2-title': "Scientific Claim Extraction — ScaDS.AI",
    'project2-desc': "Pipeline for arXiv papers: rule-based baseline, LLM extraction, then a Claimify-style multi-stage architecture. Run on TU Dresden HPC infrastructure during the DAAD KOSPIE research stay.",
    'project3-title': 'BERT Sentiment Analysis CI/CD Pipeline',
    'project3-desc': 'Production-grade CI/CD pipeline wrapping a BERT-based sentiment analysis API. Automated linting, testing, Docker builds, and Trivy security scans on every push, orchestrated with GitHub Actions.',
    'project4-title': 'Self-Hosted DevOps Stack on a VPS',
    'project4-desc': "Full self-hosted stack on an OVH VPS using Docker: Caddy reverse proxy with automatic HTTPS (Let's Encrypt), Mailu mail server (SPF/DKIM/DMARC), Vaultwarden, Nextcloud, Taiga, an internal wiki, and a Dolibarr ERP/CRM deployed blue/green via GitHub Actions.",
    'project5-title': "MLOps Platform — Hospital Length of Stay",
    'project5-desc': "Full-stack app predicting length of stay for ischemic stroke patients. Spark ETL pipeline, Flask API and containerised XGBoost model, SHAP explanations, MongoDB and a React/TypeScript dashboard. Retraining and CI/CD via GitHub Actions. Presented at ENIT's LR-RISC lab.",
    'project7-title': "Heart Disease Risk Prediction API",
    'project7-desc': "Flask API predicting heart disease risk from health parameters, using a Random Forest model with scikit-learn scaling. React/TypeScript UI to enter data and display the result.",
    'project8-title': "Wi-Fi Network Security — Audit & Countermeasures",
    'project8-desc': "Kali Linux audit: Rogue AP / Evil Twin, WPA2/WPA3 analysis with Aircrack-ng, Crunch wordlists for a WPA2 brute-force attack, and proposed countermeasures.",
    'project-link-linkedin': 'View LinkedIn post →',

    'section-tech': 'Stack',
    'section-skills': 'Technical skills',

    'section-awards-label': 'Recognition',
    'section-awards-title': 'Awards & certifications',
    'award1-title': 'DAAD KOSPIE Scholar 2026',
    'award1-desc': "Research stay at TU Dresden · 15 scholars selected from 300+ applicants.",
    'award4-title': "Cisco — Introduction to Networking",
    'award4-desc': "Cisco Networking Academy",

    'contact-availability': 'Open to PFE opportunities — Feb 2027',
    'contact-title': 'Let’s build something together',
    'contact-sub': "I'm looking for a 6-month final-year internship in DevOps, Cloud and infrastructure automation, starting February 2027.",
    'contact-button': '→ Get in touch',
    'qstat-rank': "ENIT rank",
    'qstat-daad': "DAAD KOSPIE",
    'award5-title': "Linux Foundation — LFS101",
    'award5-desc': "Introduction to Linux",
    'award6-title': "NVIDIA DLI — Efficient LLM Customisation",
    'award6-desc': "NVIDIA Deep Learning Institute",
    'skills-g1': "Cloud & Infrastructure",
    'skills-g2': "CI/CD & Observability",
    'skills-g3': "Development & Data",
    'skills-g4': "Networking & Security",
    'label-availability': "Availability",
    'availability-text': "6-month final-year internship · from February 2027",
    'footer-top': '↑ Back to top'
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
  const nextLang = getSavedLang() === 'fr' ? 'en' : 'fr';
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

// Whole project card opens its main link (LinkedIn post or GitHub repo).
document.querySelectorAll('.project-card[data-href]').forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    window.open(card.dataset.href, '_blank', 'noopener');
  });
});
