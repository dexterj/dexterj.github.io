var shiftPage = function () {
  if($("#nameAndButtons").hasClass("col-md-6")){
    $("#nameAndButtons").fadeOut(200);
    setTimeout(function(){$("#nameAndButtons").removeClass("col-md-6").removeClass("col-md-offset-3").addClass("col-md-12");},500);
    setTimeout(function(){$("#nameAndButtons").fadeIn("slow");},500);
    setTimeout(function(){$("#avatar").removeClass("col-md-12").addClass("col-md-1");},200);
    setTimeout(function(){$("#headerTitle").removeClass("col-md-12").removeClass("center").addClass("col-md-4");},200);
    setTimeout(function(){$("#menuTitle").removeClass("col-md-12").removeClass("center").addClass("col-md-7");},200);
    setTimeout(function(){$("#subTitle").removeClass("lead").addClass("not-lead");},200);
  }
}

var reLoad = function () {
  setTimeout(function(){$("#subTitle").removeClass("not-lead").addClass("lead");}, 800);
  setTimeout(function(){$("#nameAndButtons").removeClass("col-md-4").addClass("col-md-12");}, 800);
  $("#knowledgeBox").slideUp("slow");
  $("#experienceBox").slideUp("slow");
  $("#portfolioBox").slideUp("slow");
  $("#praiseBox").slideUp("slow");
  $("#contactBox").slideUp("slow");
  $("#k-h1").slideUp("slow");
  $("#e-h1").slideUp("slow");
  $("#po-h1").slideUp("slow");
  $("#pr-h1").slideUp("slow");
  $("#co-h1").slideUp("slow");
  resetPraise();
}

var changeActive = function(){
  $(".knowledgeButton").removeClass("active");
  $(".experienceButton").removeClass("active");
  $(".portfolioButton").removeClass("active");
  $(".praiseButton").removeClass("active");
}

//QUOTES ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- QUOTES

var showQuotes = function () {
  setTimeout(function(){$( "#popover0" ).css("right", "0");},1200);
  setTimeout(function(){$( "#popover1" ).css("right", "0");},1200);
  setTimeout(function(){$( "#popover2" ).css("right", "0");},1200);
  setTimeout(function(){$( "#popover3" ).css("right", "0");},1200);
  setTimeout(function(){$( "#unglue0" ).css("left", "0");},1200);
  setTimeout(function(){$( "#unglue1" ).css("left", "0");},1500);
  setTimeout(function(){$( "#unglue2" ).css("left", "0");},1800);
  setTimeout(function(){$( "#unglue3" ).css("left", "0");},2100);
  setTimeout(function(){$("#popover0" ).css("color", "#444");}, 1000);
  setTimeout(function(){$("#popover1" ).css("color", "#444");}, 1300);
  setTimeout(function(){$("#popover2" ).css("color", "#444");}, 1600);
  setTimeout(function(){$("#popover3" ).css("color", "#444");}, 1900);

}
var resetPraise = function(){
  setTimeout(function(){$( "#popover0" ).css("right", "-1000px");},1200);
  setTimeout(function(){$( "#popover1" ).css("right", "-1000px");},1200);
  setTimeout(function(){$( "#popover2" ).css("right", "-1000px");},1200);
  setTimeout(function(){$( "#popover3" ).css("right", "-1000px");},1200);
  setTimeout(function(){$( "#unglue0" ).css("left", "-1000px");},1200);
  setTimeout(function(){$( "#unglue1" ).css("left", "-1000px");},1200);
  setTimeout(function(){$( "#unglue2" ).css("left", "-1000px");},1200);
  setTimeout(function(){$( "#unglue3" ).css("left", "-1000px");},1200);
  setTimeout(function(){$("#popover0" ).css("color", "transparent");}, 1000);
  setTimeout(function(){$("#popover1" ).css("color", "transparent");}, 1000);
  setTimeout(function(){$("#popover2" ).css("color", "transparent");}, 1000);
  setTimeout(function(){$("#popover3" ).css("color", "transparent");}, 1000);
}

//SHOW CONTENT FUNCTIONS ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- SHOW CONTENT FUNCTIONS
var showKnowledge = function () {
  if ($(".knowledgeButton").hasClass("active")){return}
  changeActive();
  setTimeout(function(){$(".knowledgeButton").addClass("active");}, 1000);
  $("#knowledgeBox").delay(500).slideDown("slow");
  $("#experienceBox").slideUp("slow");
  $("#portfolioBox").slideUp("slow");
  $("#praiseBox").slideUp("slow");
  $("#contactBox").slideUp("slow");
  $("#k-h1").delay(500).slideDown("slow");
  $("#e-h1").slideUp("slow");
  $("#po-h1").slideUp("slow");
  $("#pr-h1").slideUp("slow");
  $("#co-h1").slideUp("slow");
  resetPraise();
}
var showExperience = function () {
  if ($(".experienceButton").hasClass("active")){return}
  changeActive();
  setTimeout(function(){$(".experienceButton").addClass("active");}, 1000);
  $("#knowledgeBox").slideUp("slow");
  $("#experienceBox").delay(500).slideDown("slow");
  $("#portfolioBox").slideUp("slow");
  $("#praiseBox").slideUp("slow");
  $("#contactBox").slideUp("slow");
  $("#k-h1").slideUp("slow");
  $("#e-h1").delay(500).slideDown("slow");
  $("#po-h1").slideUp("slow");
  $("#pr-h1").slideUp("slow");
  $("#co-h1").slideUp("slow");
  setTimeout(function(){$( ".scrollx" ).scrollLeft( 750 );}, 500);
  resetPraise();
}
var showPortfolio = function () {
  if ($(".portfolioButton").hasClass("active")){return}
  changeActive();
  setTimeout(function(){$(".portfolioButton").addClass("active");}, 1000);
  $("#knowledgeBox").slideUp("slow");
  $("#experienceBox").slideUp("slow");
  $("#portfolioBox").delay(500).slideDown("slow");
  $("#praiseBox").slideUp("slow");
  $("#contactBox").slideUp("slow");
  $("#k-h1").slideUp("slow");
  $("#e-h1").slideUp("slow");
  $("#po-h1").delay(500).slideDown("slow");
  $("#pr-h1").slideUp("slow");
  $("#co-h1").slideUp("slow");
  resetPraise();
}
var showPraise = function () {
  if ($(".praiseButton").hasClass("active")){return}
  changeActive();
  setTimeout(function(){$(".praiseButton").addClass("active");}, 1000);
  $("#knowledgeBox").slideUp("slow");
  $("#experienceBox").slideUp("slow");
  $("#portfolioBox").slideUp("slow");
  $("#praiseBox").delay(500).slideDown("slow");
  $("#contactBox").slideUp("slow");
  $("#k-h1").slideUp("slow");
  $("#e-h1").slideUp("slow");
  $("#po-h1").slideUp("slow");
  $("#pr-h1").delay(500).slideDown("slow");
  $("#co-h1").slideUp("slow");
  showQuotes();
}
var showContact = function () {
  changeActive();
  shiftPage();
  $("#knowledgeBox").slideUp("slow");
  $("#experienceBox").slideUp("slow");
  $("#portfolioBox").slideUp("slow");
  $("#praiseBox").slideUp("slow");
  $("#contactBox").delay(500).slideDown("slow");
  $("#k-h1").slideUp("slow");
  $("#e-h1").slideUp("slow");
  $("#po-h1").slideUp("slow");
  $("#pr-h1").slideUp("slow");
  $("#co-h1").delay(500).slideDown("slow");
  resetPraise();
}


$('.dropdown-toggle').dropdown();
$(".menuButton").on("click", shiftPage);
$(".knowledgeButton").on("click", showKnowledge);
$(".experienceButton").on("click", showExperience);
$(".portfolioButton").on("click", showPortfolio);
$(".praiseButton").on("click", showPraise);
$(".contactButton").on("click", showContact);
//$(".avatar").on("click", reLoad);
