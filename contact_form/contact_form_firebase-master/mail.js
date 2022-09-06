const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyCBg3MIg_Ek4KmOrg1_hdzQQCIJ9Bgi5wk",
  authDomain: "admission-form-71052.firebaseapp.com",
  databaseURL: "https://admission-form-71052-default-rtdb.firebaseio.com",
  projectId: "admission-form-71052",
  storageBucket: "admission-form-71052.appspot.com",
  messagingSenderId: "12635840796",
  appId: "1:12635840796:web:5a8ad8eddf5f02b6fa9ad9"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Admission Form");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
