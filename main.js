// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
      apiKey: "AIzaSyABabX4gLruIhHvs_l6QMwgnZEzz8K17BY",
    authDomain: "blood-donation-app-b9d3d.firebaseapp.com",
    projectId: "blood-donation-app-b9d3d",
    storageBucket: "blood-donation-app-b9d3d.appspot.com",
    messagingSenderId: "422272546203",
    appId: "1:422272546203:web:b84e6cc0b6a58ef0bf9d3e"
  measurementId: "G-VRK70M867Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Database');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var place = getInputVal('place');
  var age = getInputVal('age');
  var phone = getInputVal('phone');
  var group = getInputVal('group');

  // Save message
  saveMessage(name, place, age, phone, group);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, place, age, phone, group){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    place:place,
    age:age,
    phone:phone,
    group:group
  });
}
