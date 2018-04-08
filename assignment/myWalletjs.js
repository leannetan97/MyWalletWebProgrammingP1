// jQuery Validate password
// function validate_Pwd(){
// 	if ($("#signuppwd").val() === $("#signupconfirm_pwd").val()) {
// 		alert("Successful!\nAccount Created");
// 		return true;
// 	}else{
// 		alert("Passwords aren't match.\nPlease re-enter your password.");
// 		return false;
// }
// };



// $(document).ready(function() {
// 	$("#Create_Account").on("submit", function(evt) {
// 		// prevent default behavior of form submission event
// 		evt.preventDefault();
// 		// i think this is the key for this to work
		
// 		if (validate_Pwd()) {
// 			location.href = 'registertq.html';
// 		}
// 		return false;
// 	});
// });

// JS Validate Passwords
function validate_Pwd(){
	password = document.querySelector("#signuppwd").value;
	confirm_password = document.querySelector("#signupconfirm_pwd").value;
	if (password === confirm_password) {
		alert("Successful!\nAccount Created");
		return true;
	}else{
		alert("Passwords aren't match.\nPlease re-enter your password.");
		return false;
}
};

//JS redirect function page
function link_page(clicked_id){
	if(clicked_id == "goals"){
 	location.href = 'goal.html';
}else if(clicked_id == "expenses"){
	location.href = 'expenses.html';
}else if(clicked_id == "reports"){
	location.href = 'report.html';
}
};


 window.addEventListener("load",function(){
 	console.log("load");
 	document.querySelector("#Create_Account").addEventListener("submit", function(e){
 		e.preventDefault();
 		if(validate_Pwd()){
 			location.href = 'registertq.html';
 		}
 		return false;
 	});

 	// var goals = document.querySelector("#goals"); 
 	// goals.addEventListener("mouseover",function (event) {
 	//        goals.className = "display:hover";    
 	// }); 
});



// gapi.load('auth2',function(){
// 	gapi.auth2.init();
// });

//  function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

