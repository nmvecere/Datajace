function pageSetup() {
    console.log("Page setup.")
}

function changePage(page) {
	location.href = page;
}

// Switchery test
var elems = Array.prototype.slice.call(document.querySelectorAll(".js-switch"));

elems.forEach(function(html) {
  var switchery = new Switchery(html, {color: "#41b7f1"});
});

//$(document).ready(function(){
//    var playerOneLife = 0;
//    var playerTwoLife = 0;
//    
//    
//}

// BUTTON TEST

// VARIABLE DECLARATIONS

var $allCounters = $('.counter');

var playerOneLife = 20;
var playerOneGeneral = 0;

// COUNTER ACTIVATION
$allCounters.click(function(){
    $allCounters.removeClass('active');
    $(this).addClass('active');
});

// PLAYER ONE COUNTER CONTROLS
$("#playerOneAdd").click(function(){
    if ($("#playerOneLife").hasClass("active")) {
        playerOneLife++;
        $(".playerOneLifeNum").html(playerOneLife);
    }
    else if ($("#playerOneGeneral").hasClass("active")) {
        playerOneGeneral++;
        $(".playerOneGeneralNum").html(playerOneGeneral);
    }
    // else if...
});