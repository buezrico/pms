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
