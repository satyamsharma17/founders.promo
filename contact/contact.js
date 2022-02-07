//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyCOtFMNO-LaZnEjKgwS8cfGcrYadVLkcKk",
    authDomain: "founders-33300.firebaseapp.com",
    projectId: "founders-33300",
    storageBucket: "founders-33300.appspot.com",
    messagingSenderId: "560976242293",
    appId: "1:560976242293:web:0425124f83779a9297ba3c"
  };
  
  //Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()
  
  //Variable to access database collection
  const db = firestore.collection("formData")
  
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let name = document.getElementById('name').value
    let company = document.getElementById('company').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value
  
    //Save Form Data To Firebase
    db.doc().set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    }).then( () => {
      console.log("Data saved!")
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Congrats, your form has been submitted successfully!")
  })