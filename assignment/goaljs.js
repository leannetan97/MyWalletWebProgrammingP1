
window.addEventListener("load",function(){
	var targetGoal = document.getElementById("TargetGoal").innerHTML;
	var moneySave = document.getElementById("MoneySaved").innerHTML;
	var moneyRequired = document.getElementById("MoneyRequired").innerHTML;
	console.log("test goaljs");
	console.log(document.getElementById("TargetGoal").innerHTML);
	// console.log(moneyRequired);
	// console.log(moneySave);
	if (parseInt(targetGoal) == 0) {}
	else {
	document.getElementById("mrPercent").innerHTML = ((parseInt(moneyRequired)/parseInt(targetGoal))*100).toFixed(0) + "%";
	document.getElementById("msPercent").innerHTML = ((parseInt(moneySave)/parseInt(targetGoal))*100).toFixed(0) + "%";
}});