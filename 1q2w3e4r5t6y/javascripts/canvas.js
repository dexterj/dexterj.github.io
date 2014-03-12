// Variables
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

var fontName ="Roboto";
var fontSize =   "20";
var fromStart= 30;
var addYear = 240;
var lighter = "#cccccc";
var darker  = "#333333";
var defaultColor = "grey";

var alpha1  = 	 125; // y begin point 1
var alpha2  = 	 150; // y begin point 2
var alpha3  = 	 175; // y begin point 3
var alpha4  = 	 200; // y begin point default
var charlie = 	 300; // y end point

var beta    = 	((6.5*2)*10) +  			 fromStart; // Married
var delta   = 	((11 *2)*10) +  			 fromStart; // Barista
var epsilon = 	(( 5 *2)*10) +  addYear +    fromStart; // Coffee Roaster
var fargo   = 	((6.5*2)*10) +  addYear +    fromStart; // Marketing Intern
var george  = 	((12 *2)*10) +  addYear +    fromStart; // Graduate College
var hector  = 	((1.5*2)*10) + (addYear*2) + fromStart; // Creative Director
var isis    = 	(( 3 *2)*10) + (addYear*2) + fromStart; // Cafe Manager
var jake    = 	((4.5*2)*10) + (addYear*2) + fromStart; // Freelance Designer
var kappa   = 	(( 6 *2)*10) + (addYear*5) + fromStart; // Web Design Intern
var lambda  = 	(( 3 *2)*10) + (addYear*6) + fromStart; // Bank Teller
var mamba   = 	(( 8 *2)*10) + (addYear*7) + fromStart; // Flooring Installer
var nathan   = 	(( 2 *2)*10) + (addYear*8) + fromStart; // DevIowa Bootcamp


// Lines for each event
var deltaTrue 	= delta;								 // Barista
var epsilonTrue = epsilon;								 // Coffee Roaster
var fargoTrue 	= (( 5 *2)*10) +  addYear +    fromStart;// Marketing Intern
var georgeTrue 	= 0;								 	 // Graduate College
var hectorTrue 	= (( 1 *2)*10) + (addYear*2) + fromStart;// Creative Director
var isisTrue 	= (( 1 *2)*10) + (addYear*2) + fromStart;// Cafe Manager
var jakeTrue 	= (( 1 *2)*10) + (addYear*2) + fromStart;// Freelance Designer
var kappaTrue 	= kappa;								 // Web Design Intern
var lambdaTrue 	= lambda;								 // Bank Teller
var mambaTrue 	= mamba;								 // Flooring Installer
var nathanTrue  = nathan;							 	 // DevIowa Bootcamp

var deltaEnd 	= hectorTrue							 // Barista
var epsilonEnd 	= (( 1 *2)*10) + (addYear*6) + fromStart;// Coffee Roaster
var fargoEnd 	= hectorTrue							 // Marketing Intern
var georgeEnd 	= hectorTrue							 // Graduate College
var hectorEnd 	= epsilonEnd							 // Creative Director
var isisEnd 	= kappaTrue								 // Cafe Manager
var jakeEnd 	= 5000									 // Freelance Designer
var kappaEnd 	= epsilonEnd							 // Web Design Intern
var lambdaEnd 	= mambaTrue							 // Bank Teller
var mambaEnd 	= nathanTrue							 // Flooring Installer
var nathanEnd   = (( 3 *2)*10) + (addYear*8) + fromStart;// DevIowa Bootcamp

// Timeline Bar
var timeline = function(){
	ctx.font=fontSize+"px "+ "Roboto Slab";
	var pos = 30;
	for(var i = 2006; i <= 2014; i++){
		ctx.fillText(i, pos, 50);
		pos += 240;
	};
};

// Married
//var married = function(color, textColor){
//	ctx.beginPath();
//	ctx.strokeStyle=color;
//	ctx.moveTo(									 beta,  75);
//	ctx.lineTo(									 beta,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
//	ctx.translate( 								 beta,  charlie); ctx.rotate(45*Math.PI/180);
//	ctx.translate( 								-beta, -charlie); ctx.font = fontSize+"px "+fontName;
//	ctx.fillText("Married",				 		 beta+3,  charlie+8);
//	ctx.restore();
//};

// Barista
var barista = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 deltaTrue, 75);
	ctx.lineTo(									 deltaTrue, alpha2-10);
	ctx.lineTo(									 deltaTrue+10, alpha2);
	ctx.lineTo(									 deltaEnd-10, alpha2);
	ctx.lineTo(									 deltaEnd, alpha2-10);
	ctx.lineTo(									 deltaEnd, 75);
	ctx.moveTo(									 delta+10,  alpha2);
	ctx.lineTo(									 delta+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 delta,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-delta, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Barista",						 delta+10,  charlie);
	ctx.restore();
}

// Coffee Roaster
var roaster = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 epsilonTrue, 75);
	ctx.lineTo(									 epsilonTrue, alpha3-10);
	ctx.lineTo(									 epsilonTrue+10, alpha3);
	ctx.lineTo(									 epsilonEnd-10, alpha3);
	ctx.lineTo(									 epsilonEnd, alpha3-10);
	ctx.lineTo(									 epsilonEnd, 75);
	ctx.moveTo(									 epsilon+10,  alpha3);
	ctx.lineTo(									 epsilon+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 epsilon,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-epsilon, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Coffee Roaster",	 			 epsilon+10,  charlie);
	ctx.restore();
}

// Marketing Intern
var marketing = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 fargoTrue, 75);
	ctx.lineTo(									 fargoTrue, alpha4-10);
	ctx.lineTo(									 fargoTrue+10, alpha4);
	ctx.lineTo(									 fargoEnd-10, alpha4);
	ctx.lineTo(									 fargoEnd, alpha4-10);
	ctx.lineTo(									 fargoEnd, 75);
	ctx.moveTo(									 fargo+10,  alpha4);
	ctx.lineTo(									 fargo+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 fargo,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-fargo, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Marketing Intern",			 fargo+10,  charlie);
	ctx.restore();
}

// Graduate College
var graduate = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 georgeTrue, alpha1);
	ctx.lineTo(									 georgeEnd-10, alpha1);
	ctx.lineTo(									 georgeEnd, alpha1-10);
	ctx.lineTo(									 georgeEnd, 75);
	ctx.moveTo(									 george,  alpha1);
	ctx.lineTo(									 george,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 george,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-george, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Graduate College",			 george+3,  charlie+10);
	ctx.restore();
}

// Creative Director
var creative = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 hectorTrue, 75);
	ctx.lineTo(									 hectorTrue, alpha4-10);
	ctx.lineTo(									 hectorTrue+10, alpha4);
	ctx.lineTo(									 hectorEnd-10, alpha4);
	ctx.lineTo(									 hectorEnd, alpha4-10);
	ctx.lineTo(									 hectorEnd, 75);
	ctx.moveTo(									 hector+10,  alpha4);
	ctx.lineTo(									 hector+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 hector,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-hector, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Creative Director",			 hector+10,  charlie);
	ctx.restore();
}

// Cafe Manager
var manager = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 isisTrue, 75);
	ctx.lineTo(									 isisTrue, alpha2-10);
	ctx.lineTo(									 isisTrue+10, alpha2);
	ctx.lineTo(									 isisEnd-10, alpha2);
	ctx.lineTo(									 isisEnd, alpha2-10);
	ctx.lineTo(									 isisEnd, 75);
	ctx.moveTo(									 isis+10,  alpha2);
	ctx.lineTo(									 isis+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 isis,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-isis, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Cafe Manager",				 isis+10,  charlie);
	ctx.restore();
}

// Freelance Designer
var freelance = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 jakeTrue, 75);
	ctx.lineTo(									 jakeTrue, alpha1-10);
	ctx.lineTo(									 jakeTrue+10, alpha1);
	ctx.lineTo(									 jakeEnd-10, alpha1);
	ctx.lineTo(									 jakeEnd, alpha1-10);
	ctx.lineTo(									 jakeEnd, 75);
	ctx.moveTo(									 jake+10,  alpha1);
	ctx.lineTo(									 jake+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 jake,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-jake, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Freelance Designer",			 jake+10,  charlie);
	ctx.restore();
}

// Web Design Intern
var intern = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 kappaTrue, 75);
	ctx.lineTo(									 kappaTrue, alpha2-10);
	ctx.lineTo(									 kappaTrue+10, alpha2);
	ctx.lineTo(									 kappaEnd-10, alpha2);
	ctx.lineTo(									 kappaEnd, alpha2-10);
	ctx.lineTo(									 kappaEnd, 75);
	ctx.moveTo(									 kappa+10,  alpha2);
	ctx.lineTo(									 kappa+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 kappa,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-kappa, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Web Design Intern",			 kappa+10,  charlie);
	ctx.restore();
}

// Bank Teller
var teller = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 lambdaTrue, 75);
	ctx.lineTo(									 lambdaTrue, alpha2-10);
	ctx.lineTo(									 lambdaTrue+10, alpha2);
	ctx.lineTo(									 lambdaEnd-10, alpha2);
	ctx.lineTo(									 lambdaEnd, alpha2-10);
	ctx.lineTo(									 lambdaEnd, 75);
	ctx.moveTo(									 lambda+10,  alpha2);
	ctx.lineTo(									 lambda+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 lambda,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-lambda, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Bank Teller",			 		 lambda+10,  charlie);
	ctx.restore();
}

// Flooring Installer
var flooring = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 mambaTrue, 75);
	ctx.lineTo(									 mambaTrue, alpha2-10);
	ctx.lineTo(									 mambaTrue+10, alpha2);
	ctx.lineTo(									 mambaEnd-10, alpha2);
	ctx.lineTo(									 mambaEnd, alpha2-10);
	ctx.lineTo(									 mambaEnd, 75);
	ctx.moveTo(									 mamba+10,  alpha2);
	ctx.lineTo(									 mamba+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 mamba,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-mamba, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Flooring Installer",			 mamba+10,  charlie);
	ctx.restore();
}

// DevIowa Bootcamp
var bootcamp = function(color, textColor){
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(									 nathanTrue, 75);
	ctx.lineTo(									 nathanTrue, alpha2-10);
	ctx.lineTo(									 nathanTrue+10, alpha2);
	ctx.lineTo(									 nathanEnd-10, alpha2);
	ctx.lineTo(									 nathanEnd, alpha2-10);
	ctx.lineTo(									 nathanEnd, 75);
	ctx.moveTo(									 nathan+10,  alpha2);
	ctx.lineTo(									 nathan+10,  charlie); ctx.stroke(); ctx.fillStyle = textColor; ctx.save();
	ctx.translate( 								 nathan,  charlie); ctx.rotate(45*Math.PI/180);
	ctx.translate( 								-nathan, -charlie); ctx.font = fontSize+"px "+fontName;
	ctx.fillText("Dev/Iowa Bootcamp",			 nathan+10,  charlie);
	ctx.restore();
}

var showEverything = function(){
	canvas.width = canvas.width;
	timeline();
	//married(			defaultColor, defaultColor);
	barista(			defaultColor, defaultColor);
	roaster(			defaultColor, defaultColor);
	marketing(		defaultColor, defaultColor);
	graduate(		 defaultColor, defaultColor);
	creative(		 defaultColor, defaultColor);
	manager(			defaultColor, defaultColor);
	freelance(		defaultColor, defaultColor);
	intern(			 defaultColor, defaultColor);
	teller(			 defaultColor, defaultColor);
	flooring(		 defaultColor, defaultColor);
	bootcamp(		 defaultColor, defaultColor);
}


var showCapanna = function(){
canvas.width = canvas.width;
timeline();
//married(			 lighter ,  lighter );
barista(			 darker  ,  darker  );
roaster(			 darker  ,  darker  );
marketing(		 darker  ,  darker  );
graduate(		  lighter ,  lighter );
creative(		  darker  ,  darker  );
manager(			 darker  ,  darker  );
freelance(		 lighter ,  lighter );
intern(			  lighter ,  lighter );
teller(			  lighter ,  lighter );
flooring(		  lighter ,  lighter );
bootcamp(		  lighter ,  lighter );
}

var showBiz = function(){
canvas.width = canvas.width;
timeline();
//married(			 lighter , lighter );
barista(			 lighter , lighter );
roaster(			 lighter , lighter );
marketing(		 darker , darker );
graduate(		  lighter , lighter );
creative(		  lighter , lighter );
manager(			 darker , darker );
freelance(		 lighter , lighter );
intern(			  lighter , lighter );
teller(			  darker , darker );
flooring(		  lighter , lighter );
bootcamp(		  lighter , lighter );
}

var showOddJob = function(){
canvas.width = canvas.width;
timeline();
//married(			 lighter , lighter );
barista(			 lighter , lighter );
roaster(			 darker , darker );
marketing(		 lighter , lighter );
graduate(		  lighter , lighter );
creative(		  lighter , lighter );
manager(			 lighter , lighter );
freelance(		 lighter , lighter );
intern(			  lighter , lighter );
teller(			  darker , darker );
flooring(		  darker , darker );
bootcamp(		  lighter , lighter );
}

var showEdu = function(){
canvas.width = canvas.width;
timeline();
//married(			 lighter , lighter );
barista(			 lighter , lighter );
roaster(			 lighter , lighter );
marketing(		 darker , darker );
graduate(		  darker , darker );
creative(		  lighter , lighter );
manager(			 lighter , lighter );
freelance(		 lighter , lighter );
intern(			  darker , darker );
teller(			  lighter , lighter );
flooring(		  lighter , lighter );
bootcamp(		  darker , darker );
}

var showCreative = function(){
canvas.width = canvas.width;
timeline();
//married(			 darker , darker );
barista(			 lighter , lighter );
roaster(			 darker , darker );
marketing(		 lighter , lighter );
graduate(		  darker , darker );
creative(		  darker , darker );
manager(			 lighter , lighter );
freelance(		 darker , darker );
intern(			  darker , darker );
teller(			  lighter , lighter );
flooring(		  darker , darker );
bootcamp(		  darker , darker );
}

$("#everything").on('click', showEverything);
$("#creative")	.on('click', showCreative);
$("#edu")			 .on('click', showEdu);
$("#oddjob")	  .on('click', showOddJob);
$("#biz")			 .on('click', showBiz);
$("#cafe")			.on('click', showCapanna);

timeline();
showEverything();
