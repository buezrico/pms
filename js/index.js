const loginBtn = document.querySelector(".login");
const login = document.querySelector(".login-modal");
const signInBtn = document.querySelector(".sign-in");
const header = document.querySelector(".header");

loginBtn.addEventListener("click", () => {
  login.classList.add("login-modal-toggle");
  header.classList.add("login-modal-coming");
});

signInBtn.addEventListener("click", () => {
  login.classList.add("login-modal-toggle");
  header.classList.add("login-modal-coming");
});

const password = document.querySelector(".password");
const passwordToggle = document.querySelector(".password-toggle");

passwordToggle.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  passwordToggle.classList.toggle("fa-eye-slash");
});
