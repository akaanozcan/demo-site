const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector(".password-toggle");
const loginForm = document.querySelector("#login-form");
const forgotLink = document.querySelector("#forgot-link");
const languageToggle = document.querySelector(".language-toggle");
const year = document.querySelector("#year");

const translations = {
  tr: {
    title: "Ali Eminoğlu",
    description: "Geleceğe açılan kapınız.",
    brandHome: "Ali Eminoğlu ana sayfa",
    eyebrow: "ALİ EMİNOĞLU'NA HOŞ GELDİNİZ",
    heroLine1: "Yüksek Değerli",
    heroLine2: "Mülkler Uzmanlığı",
    welcomeDescription: "Bireysel Varlık Yatırımı - Kurumsal ve Stratejik Yatırımlar",
    loginTitle: "Hoş geldiniz",
    loginDescription: "Devam etmek için giriş yapın.",
    emailLabel: "E-posta adresi",
    emailPlaceholder: "ornek@mail.com",
    passwordLabel: "Şifre",
    passwordPlaceholder: "Şifrenizi girin",
    passwordShow: "Şifreyi göster",
    passwordHide: "Şifreyi gizle",
    remember: "Beni hatırla",
    forgotPassword: "Şifremi unuttum",
    signIn: "Giriş yap",
    noAccount: "Henüz hesabınız yok mu?",
    signUp: "Kayıt ol",
    securityNote: "Güvenli ve kolay erişim",
    footerTagline: "Güncellemelerimiz devam etmektedir, en kısa sürede görüşmek üzere.",
    socialAccounts: "Sosyal medya hesapları",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    languageAction: "Switch to English",
  },
  en: {
    title: "Ali Eminoğlu",
    description: "Your gateway to the future",
    brandHome: "Ali Eminoğlu home",
    eyebrow: "WELCOME TO ALI EMINOGLU",
    heroLine1: "High-value Real Estate",
    heroLine2: "Consulting & Representation",
    welcomeDescription: "Private Wealth Investment - Institutional & Strategic Investments",
    loginTitle: "Welcome",
    loginDescription: "Sign in to continue.",
    emailLabel: "Email address",
    emailPlaceholder: "name@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    passwordShow: "Show password",
    passwordHide: "Hide password",
    remember: "Remember me",
    forgotPassword: "Forgot password?",
    signIn: "Sign in",
    noAccount: "Don't have an account yet?",
    signUp: "Create account",
    securityNote: "Secure and easy access",
    footerTagline: "We're making updates and look forward to seeing you again soon.",
    socialAccounts: "Social media accounts",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    languageAction: "Türkçeye geç",
  },
};

year.textContent = new Date().getFullYear();

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector("#page-description").content = copy.description;
  document.querySelector("#og-title").content = copy.title;
  document.querySelector("#og-description").content = copy.description;
  document.querySelector("#twitter-title").content = copy.title;
  document.querySelector("#twitter-description").content = copy.description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = copy[element.dataset.i18nPlaceholder];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
  });

  languageToggle.querySelector("span").textContent = language === "tr" ? "EN" : "TR";
  languageToggle.setAttribute("aria-label", copy.languageAction);
  languageToggle.setAttribute("aria-pressed", String(language === "en"));
  passwordToggle.setAttribute(
    "aria-label",
    copy[passwordInput.type === "password" ? "passwordShow" : "passwordHide"],
  );
}

passwordToggle.addEventListener("click", () => {
  const shouldShowPassword = passwordInput.type === "password";
  passwordInput.type = shouldShowPassword ? "text" : "password";
  passwordToggle.setAttribute("aria-pressed", String(shouldShowPassword));
  const language = document.documentElement.lang;
  passwordToggle.setAttribute(
    "aria-label",
    translations[language][shouldShowPassword ? "passwordHide" : "passwordShow"],
  );
  passwordInput.focus();
});

languageToggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "tr" ? "en" : "tr");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

forgotLink.addEventListener("click", (event) => {
  event.preventDefault();
});
