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

// const addPatientBtn = document.querySelector(".new-patient-btn");
// const addPatientModal = document.querySelector(".add-patient-modal");

// addPatientBtn.addEventListener("click", () => {
//   addPatientModal.classList.add("add-patient-toggle");
// });

const showNewPatientModal = () => {
  const addPatientModal = document
    .querySelector(".add-patient-modal")
    .classList.add("add-patient-toggle");
};
