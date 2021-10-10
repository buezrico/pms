let patientLink = document.querySelectorAll(".patient-link");
const patientInfo = document.querySelectorAll(".patient-info");

patientLink.forEach((button) => {
  button.addEventListener("click", () => {
    patientLink.forEach((btn) => btn.classList.remove("patient-active"));
    button.classList.add("patient-active");
  });
});

const patientDetails = () => {
  document.getElementById("patient-details").style.display = "block";
  document.getElementById("medical-record").style.display = "none";
  document.getElementById("vital-signs").style.display = "none";
};
const medicalRecord = () => {
  document.getElementById("patient-details").style.display = "none";
  document.getElementById("medical-record").style.display = "block";
  document.getElementById("vital-signs").style.display = "none";
};
const vitalSigns = () => {
  document.getElementById("patient-details").style.display = "none";
  document.getElementById("medical-record").style.display = "none";
  document.getElementById("vital-signs").style.display = "block";
};
