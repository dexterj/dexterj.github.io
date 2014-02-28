var shiftPage = function () {
  $("#subTitle").delay(500).removeClass("lead").delay(500).addClass("not-lead");
  $("#nameAndButtons").delay(500).removeClass("col-md-12").delay(100).addClass("col-md-4");
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

//SLIDER BARS ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- SLIDER BARS
var slideBars = function(){
  if ($("#succ-dev").hasClass("width0")){
    setTimeout(function(){$("#succ-dev").removeClass("width0").addClass("width40");}, 1000);
    setTimeout(function(){$("#warn-dev").removeClass("width0").addClass("width50");}, 1000);
    setTimeout(function(){$("#dang-dev").removeClass("width0").addClass("width10");}, 1000);

    setTimeout(function(){$("#succ-method").removeClass("width0").addClass("width45");}, 1000);
    setTimeout(function(){$("#warn-method").removeClass("width0").addClass("width55");}, 1000);

    setTimeout(function(){$("#succ-type").removeClass("width0").addClass("width30");}, 1000);
    setTimeout(function(){$("#warn-type").removeClass("width0").addClass("width40");}, 1000);
    setTimeout(function(){$("#dang-type").removeClass("width0").addClass("width30");}, 1000);
    console.log("jamming");
  }
}
var resetBars = function(){
  $("#succ-dev").delay(1000).removeClass("width40").addClass("width0");
  $("#warn-dev").delay(1000).removeClass("width50").addClass("width0");
  $("#dang-dev").delay(1000).removeClass("width10").addClass("width0");

  $("#succ-method").delay(1000).removeClass("width45").addClass("width0");
  $("#warn-method").delay(1000).removeClass("width55").addClass("width0");

  $("#succ-type").delay(1000).removeClass("width30").addClass("width0");
  $("#warn-type").delay(1000).removeClass("width40").addClass("width0");
  $("#dang-type").delay(1000).removeClass("width30").addClass("width0");
}
//QUOTES ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- QUOTES

var showQuotes = function () {
  setTimeout(function(){$(".popover").fadeIn("slow");}, 1200);
  setTimeout(function(){$( "#unglue1" ).css("top", "150px");},1200);
  setTimeout(function(){$( "#unglue2" ).css("top", "265px");},1200);
  setTimeout(function(){$( "#unglue3" ).css("top", "380px");},1200);
  setTimeout(function(){$(".quotes").slideDown("slow");}, 1200);
  setTimeout(function(){$("#popover0" ).css("color", "#444");}, 1800);
  setTimeout(function(){$("#popover1" ).css("color", "#444");}, 2100);
  setTimeout(function(){$("#popover2" ).css("color", "#444");}, 2400);
  setTimeout(function(){$("#popover3" ).css("color", "#444");}, 2700);

}
var resetPraise = function(){
  setTimeout(function(){$( "#unglue1" ).animate({top: "35px"}, 500);},200);
  setTimeout(function(){$( "#unglue2" ).animate({top: "35px"}, 500);},200);
  setTimeout(function(){$( "#unglue3" ).animate({top: "35px"}, 500);},200);
  setTimeout(function(){$(".quotes").slideUp("slow");}, 1200);
  setTimeout(function(){$("#popover0" ).css("color", "transparent");}, 1400);
  setTimeout(function(){$("#popover1" ).css("color", "transparent");}, 1100);
  setTimeout(function(){$("#popover2" ).css("color", "transparent");}, 800);
  setTimeout(function(){$("#popover3" ).css("color", "transparent");}, 500);
}

//SHOW CONTENT FUNCTIONS ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- SHOW CONTENT FUNCTIONS
var showKnowledge = function () {
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
  $('.carousel').carousel()
}
var showPraise = function () {
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


$('body').scrollspy({target: '#nameAndButtons'});
$('.dropdown-toggle').dropdown();
$(".menuButton").on("click", shiftPage);
$(".knowledgeButton").on("click", showKnowledge);
$(".experienceButton").on("click", showExperience);
$(".portfolioButton").on("click", showPortfolio);
$(".praiseButton").on("click", showPraise);
$(".contactButton").on("click", showContact);
$(".avatar").on("click", reLoad);
