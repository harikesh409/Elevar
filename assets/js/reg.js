$(document).ready(function($) {
	var config = {
    apiKey: "AIzaSyAtzb-Kms3MtbFN7XnAL5lyK2rTpzh6_Dw",
    authDomain: "elevar-2k18.firebaseapp.com",
    databaseURL: "https://elevar-2k18.firebaseio.com",
    projectId: "elevar-2k18",
    storageBucket: "",
    messagingSenderId: "161555306103"
  };
  firebase.initializeApp(config);
});
$("#register").submit(function(e) {
	e.preventDefault();
	var pass = $("#pass").val();
	var cpass = $("#cpass").val();
	if(pass != cpass) {
		alert("Password and Confirm password must be same");
	} else {
		e.preventDefault();
		var name = $("#name").val();
		var id = $("#id").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var clg = $("#clg").val();
		var branch = $("#branch :selected").val();
		var gender = $("#gender :selected").val();
		var acc = $("#acc :selected").val();
		firebase.auth().createUserWithEmailAndPassword(email,pass).then(function(firebaseuser) {
			  $("#reg").attr('disabled', 'disabled');
			  var databaseRef = firebase.database().ref().child(firebaseuser.uid);
			  databaseRef.set({
			  		Name: name,
			  		StudentId:id,
			  		Email: email,
			  		Pass:pass,
			  		Phone: phone,
			  		College: clg,
			  		Branch: branch,
			  		Gender: gender,
			  		Accomidation: acc
			  });
			  firebase.auth().currentUser.sendEmailVerification().then(function(){
    			alert("Verification mail sent kindly verify it and login.");
  				}).catch(function(error){
    				console.log("Error");
  				});
		}).catch(function(error) {
				var errorCode = error.code;
        		var errorMessage = error.message;
        		if (errorCode == 'auth/user-not-found') {
          			alert('User already present');
        		} else {
          			alert(errorMessage);
        		}
			});
	}
});
$("#login").submit(function(e) {
	e.preventDefault();
	var email = $("#lEmail").val();
	var pass = $("#lPass").val();
	firebase.auth().signInWithEmailAndPassword(email,pass).then(function(firebaseuser){
		if(firebaseuser.emailVerified) {
			top.location.href = "eventReg.html";
		} else {
			firebase.auth().currentUser.sendEmailVerification();
			alert("Kindly verify your email id.");
		}
	}).catch(function(error){
		var errorCode = error.code;
        var errorMessage = error.message;
		if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
        console.log(error);
	});
});