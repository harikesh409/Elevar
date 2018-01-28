$(document).ready(function() {
	total = 0;
	acc = "";
	var config = {
    apiKey: "AIzaSyAtzb-Kms3MtbFN7XnAL5lyK2rTpzh6_Dw",
    authDomain: "elevar-2k18.firebaseapp.com",
    databaseURL: "https://elevar-2k18.firebaseio.com",
    projectId: "elevar-2k18",
    storageBucket: "",
    messagingSenderId: "161555306103"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user){
			var user = firebase.auth().currentUser;
	console.log(user);
	firebase.database().ref().child(user.uid).on('value',function(snapshot){
		acc = snapshot.val().Accomidation;
		if(acc == 'yes') {
			 sessionStorage.setItem('total',750);
		} else {
			 sessionStorage.setItem('total',300);
		}
	});
});
  
	console.log(sessionStorage.getItem('total'));
	total = parseInt(sessionStorage.getItem('total'));
	$("#total").html("&#8377; "+total);
	// var allRadios = $("input[type='radio']");
	// var booRadio;
 //    var x = 0;
 //    for(x = 0; x < allRadios.length; x++){

 //            allRadios[x].onclick = function() {
 //                if(booRadio == this){
 //                    this.checked = false;
 //                    booRadio = null;
 //                }else{
 //                    booRadio = this;
 //                }
 //            };
 //        }
	$("input[type='radio']").change(function() {
		var radioName = $(this).attr('name');
		var radioval = $("input[name='"+radioName+"']:checked").val();
		if(radioval == 'indi') {
				$("input[name='"+radioName+"']").next('div').css({
					display: 'none'
			});
				if(radioName == 'cricRadio') {
					$("input[name='"+radioName+"']").prev('h5').html('<a href="Cric.html" target="_blank" >Cric Quiz:</a> &#8377; 150');
				} else if(radioName == 'pptRadio') {
					$("input[name='"+radioName+"']").prev('h5').html('<a href="PPT.html" target="_blank" >PPT:</a> &#8377; 150');
				} else {
					$("input[name='"+radioName+"']").prev('h5').html('<a href="Crack.html" target="_blank" >Crack Jack</a> &#8377; 150');
				}
				// total = total + 150;
		} else {
			$("input[name='"+radioName+"']").next('div').css({
				display: 'block'
			});
			if(radioName == 'cricRadio') {
					$("input[name='"+radioName+"']").prev('h5').html('<a href="Cric.html" target="_blank" >Cric Quiz:</a> &#8377; 250');
					// total += 250;
				} else if(radioName == 'pptRadio') {
					$("input[name='"+radioName+"']").prev('h5').html('<a href="PPT.html" target="_blank" >PPT:</a> &#8377; 250');
					// total += 250;
				} else {
					$("input[name='"+radioName+"']").prev('h5').html('<a href="Crack.html" target="_blank" >Crack Jack</a> &#8377; 200');
					// total += 250;
				}
		}
		// $("#total").html("&#8377; "+total);
	});		
		$("#cout").on('click', function() {
			event.preventDefault();
			$("#rmCout").toggle();
			// $("#codechef").css('display', 'block');
			$("#codechef").slideDown("slow",function() {
				tot(150,'a')
			});
			$("#cout").toggle();
		});
		$("#rmCout").click(function() {
			event.preventDefault();
			$("#rmCout").toggle();
			$("#cout").toggle();
			$("#codechef").slideUp("slow",function() {
				tot(150,'m')
				
			});
		});
		$("#pay").click(function() {
			$("#rmpay").toggle();
			tot(50,'a')
			$("#pay").toggle();
		});
		$("#rmpay").click(function() {
			$("#pay").toggle();
			$("#rmpay").toggle();
			tot(50,'m');

		});
		$("#movie").click(function() {
			$("#rmMovie").toggle();
			tot(300,'a');
			$("#movie").toggle();
		});
		$("#rmMovie").click(function() {
			$("#movie").toggle();
			$("#rmMovie").toggle();
			tot(300,'m')
		});
		$("#code").click(function() {
			$("#rmCode").toggle();
			tot(150,'a');
			$("#code").toggle();
		});
		$("#rmCode").click(function() {
			$("#code").toggle();
			tot(150,'m');
			$("#rmCode").toggle();
		});
		$("#workshop").click(function() {
			$("#rmWorkshop").toggle();
			tot(300,'a');
			$("#workshop").toggle();
		});
		$("#rmWorkshop").click(function() {
			$("#workshop").toggle();
			tot(300,'m');
			$("#rmWorkshop").toggle();
		});
		$("#ppt").click(function() {
			
			if($("input[name='pptRadio']:checked").val() == 'indi') {
				tot(150,'a');
				$("input[name='pptRadio']").attr('disabled', true);
				$("#ppt").toggle();
				$("#rmPpt").toggle();
			} else {
				if($("input[name='pptT1']").val()=="" || $("input[name='pptT2']").val()=="" || $("input[name='pptT3']").val()=="") {
					alert("Fill all team members email ids");
				} else {
					tot(250,'a');
					$("input[name='pptRadio']").attr('disabled', true);
					$("#ppt").toggle();
					$("#rmPpt").toggle();
				}
				
			}
		});
		$("#rmPpt").click(function() {
			$("input[name='pptRadio']").attr('disabled', false);
			$("#ppt").toggle();
			$("#rmPpt").toggle();
			if($("input[name='pptRadio']:checked").val() == 'indi') {
				tot(150,'m')
			} else {
				tot(250,'m')
			}
		});
		$("#cric").click(function() {
			
			if($("input[name='cricRadio']:checked").val() == 'indi') {
				tot(150,'a');
				$("input[name='cricRadio']").attr('disabled', true);
				$("#cric").toggle();
				$("#rmCric").toggle();
			} else {
				if($("input[name='crT1']").val()=="" || $("input[name='crT2']").val()=="" || $("input[name='crT3']").val()=="") {
					alert("Fill all team members email ids");
				} else {
					tot(250,'a');
					$("input[name='cricRadio']").attr('disabled', true);
					$("#cric").toggle();
					$("#rmCric").toggle();
				}
			}
		});
		$("#rmCric").click(function() {
			$("input[name='cricRadio']").attr('disabled', false);
			$("#cric").toggle();
			$("#rmCric").toggle();
			if($("input[name='cricRadio']:checked").val() == 'indi') {
				tot(150,'m')
			} else {
				tot(250,'m')
			}
		});
		$("#crack").click(function() {
			
			if($("input[name='crackRadio']:checked").val() == 'indi') {
				tot(150,'a');
				$("input[name='crackRadio']").attr('disabled', true);
				$("#crack").toggle();
				$("#rmCrack").toggle();
			} else {
				if($("input[name='jT1']").val()=="" || $("input[name='jT2']").val()=="") {
					alert("Fill all team members email ids");
				} else {
					$("input[name='crackRadio']").attr('disabled', true);
					tot(200,'a');
					$("#crack").toggle();
					$("#rmCrack").toggle();
				}
			}
		});
		$("#rmCrack").click(function() {
			$("input[name='crackRadio']").attr('disabled', false);
			$("#crack").toggle();
			$("#rmCrack").toggle();
			if($("input[name='crackRadio']:checked").val() == 'indi') {
				tot(150,'m')
			} else {
				tot(200,'m')
			}
		});
});
function tot(cost,op) {
		if(op=='a') {
		total = total + cost;
	} else {
		total = total - cost;
	}
	$("#total").html("&#8377; " + total);
}

$("#logout").click(function(event) {
    firebase.auth().signOut().then(function(){
    	top.location.href = "index.html";
    }).catch(function(error){
    	console.error('Sign Out Error', error);
    });
});