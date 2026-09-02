const content = {
  fr: {
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",
    "nav.cv": "Télécharger mon CV",
    "nav.cta": "Me contacter",
    "hero.eyebrow": "PORTFOLIO · ANGELA",
    "hero.title":
      "Et si votre idée<br>devenait quelque chose<br><em>de réel&nbsp;?</em>",
    "hero.cta": "Voir mes projets <span>↘</span>",
    "projects.label": "PROJETS",
    "projects.title": "Ce que je construis.",
    "projects.intro": "Des projets réels, conçus au fil de mes apprentissages.",
    "project.croq.description":
      "Un projet web autour d’une activité de restauration : présentation des produits, menu, formules Solo et Box, variantes et commandes. Il comprend une gestion des utilisateurs et des données côté backend.",
    "project.live": "Voir le projet ↗",
    "project.github": "GitHub ↗",
    "projects.note":
      "Les liens du projet seront ajoutés dès leur mise en ligne.",
    "about.label": "À PROPOS",
    "about.title": "< Derrière le code />",
    "about.p1":
      "Je m'appelle Angela et je suis en formation en développement web.",
    "about.p2":
      "J'aime apprendre en faisant. Je pars d'une idée, je cherche, je teste, je casse parfois des choses, puis je recommence. Et entre deux « pourquoi ça ne marche pas ? », il y a généralement quelque chose de nouveau que je finis par comprendre.",
    "about.p3":
      "Je ne sais pas encore tout faire, loin de là. Mais c'est justement ce qui me plaît : avoir quelque chose à découvrir, un problème à résoudre ou une idée à transformer en projet. Chaque fois, j'apprends un peu plus.",
    "about.p4":
      "Ce portfolio rassemble une partie de tout ça : mes projets, mes essais, mes apprentissages et les choses que j'ai eu envie de construire.",
    "skills.label": "COMPÉTENCES",
    "skills.title": "Les outils que j'utilise.",
    "skills.intro":
      "Pas de chiffres : seulement ce avec quoi je travaille aujourd'hui.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Base de données",
    "skills.tools": "Outils",
    "contact.label": "CONTACT",
    "contact.title": "Parlons-en.",
    "contact.copy":
      "Une question, une idée ou simplement envie d'échanger ? N'hésitez pas à me contacter.",
    "form.name": "Nom",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Envoyer le message <span>↗</span>",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.cv": "Download my CV",
    "nav.cta": "Get in touch",
    "hero.eyebrow": "PORTFOLIO · ANGELA",
    "hero.title":
      "What if your idea<br>became something<br><em>real&nbsp;?</em>",
    "hero.cta": "See my projects <span>↘</span>",
    "projects.label": "PROJECTS",
    "projects.title": "What I build.",
    "projects.intro": "Real projects, made along the way as I learn.",
    "project.croq.description":
      "A web project for a food business: product presentation, menu, Solo and Box offers, variants and orders. It also includes user and backend data management.",
    "project.live": "View project ↗",
    "project.github": "GitHub ↗",
    "project.note": "Project links will be added once they are live.",
    "about.label": "ABOUT",
    "about.title": "< Behind the code />",
    "about.p1":
      "My name is Angela and I am currently training in web development.",
    "about.p2":
      "I like learning by doing. I start with an idea, research, test, sometimes break things, then start again. And somewhere between two “why isn't this working?” moments, there is usually something new I end up understanding.",
    "about.p3":
      "I don't know how to do everything yet — far from it. But that's exactly what I enjoy: having something new to discover, a problem to solve, or an idea to turn into a project. Each time, I learn a little more.",
    "about.p4":
      "This portfolio brings together some of that: my projects, experiments, learning, and the things I wanted to build.",
    "skills.label": "SKILLS",
    "skills.title": "The tools I use.",
    "skills.intro": "No numbers — just what I work with today.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Database",
    "skills.tools": "Tools",
    "contact.label": "CONTACT",
    "contact.title": "Let's talk.",
    "contact.copy":
      "A question, an idea, or simply want to connect? Feel free to get in touch.",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Send message <span>↗</span>",
  },
};

const languageToggleBtn = document.getElementById("language-toggle");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (content[lang][key]) {
      el.innerHTML = content[lang][key];
    }
  });
  localStorage.setItem("angela-language", lang);

  // Mettre à jour l'accessibilité du bouton selon la langue active
  if (lang === "en") {
    languageToggleBtn.setAttribute("aria-label", "Passer en français");
  } else {
    languageToggleBtn.setAttribute("aria-label", "Passer en anglais");
  }
}

// 1. Initialisation au chargement de la page
const savedLang = localStorage.getItem("angela-language") || "fr";
setLanguage(savedLang);

// 2. Événement au clic sur l'icône globe de la navbar
languageToggleBtn.addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "fr" ? "en" : "fr";
  setLanguage(newLang);
});

const themeSwitcher = document.getElementById("theme-switcher");
const themeIcon = themeSwitcher.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeSwitcher.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");

    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");

    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});
