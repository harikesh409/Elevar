// function fun(event) {
// 	// event.preventDefault();
// 	var user = firebase.auth().currentUser;
// 	if(user) {
// 		firebase.database().ref().child(user.uid).on('value',function(snapshot){
// 			if(snapshot.val() == null) {
// 				console.log("asdfadf");
// 			}
// 			var acc = snapshot.val().Accomidation;
// 			console.log(acc);
// 		});
// 	} else {
// 		console.log("signed out");
// 	}
// }
