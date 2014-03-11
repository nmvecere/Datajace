//CHECK IF LOCALSTORAGE VARIABLES ARE SET
//IF NOT, SET THEM
//IF SO, RETRIEVE THEM

function pageSetup() {
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
        var playerOneLife = localStorage.getItem('playerOneLife');
        $('.playerOneLifeNum').html(playerOneLife);
        
        var playerOneGeneral = localStorage.getItem('playerOneGeneral');
        $('.playerOneGeneralNum').html(playerOneGeneral);
        
        var playerOnePoison = localStorage.getItem('playerOnePoison');
        $('.playerOnePoisonNum').html(playerOnePoison);
    } else {
        localStorage.setItem('playerOneLife', 20);
        localStorage.setItem('playerOneGeneral', 0);
        localStorage.setItem('playerOnePoison', 0);
    }
}

// Define function to change page.
function changePage(page) {
	location.href = page;
}

$(document).ready(function () {

// Test Switchery.
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
  var switchery = new Switchery(html, {color: '#41b7f1'});
});
    
// SETTINGS TEST
    
var generalSetting = document.querySelector('.general-setting');
var poisonSetting = document.querySelector('.poison-setting');
var mirrorSetting = document.querySelector('.mirror-setting');

//generalSetting.onchange = function() {
//    localStorage.setItem('generalSetting', generalSetting.checked);
//    console.log(localStorage.getItem('generalSetting'));
//};
//    
//poisonSetting.onchange = function() {
//    localStorage.setItem('poisonSetting', poisonSetting.checked);
//    console.log(localStorage.getItem('poisonSetting'));
//};
//    
//mirrorSetting.onchange = function() {
//    localStorage.setItem('mirrorSetting', mirrorSetting.checked);
//    console.log(localStorage.getItem('mirrorSetting'));
//};
//    
//if (localStorage.getItem('mirrorSetting') == 'true') {
//    console.log('TEST');
//};

// Define variables.
var $allCounters = $('.counter');
var playerTwoLife = 20;
var playerTwoGeneral = 0;
var playerTwoPoison = 0;
    

// Select counter.
$allCounters.click(function(){
    $allCounters.removeClass('active');
    $(this).addClass('active');
});

// Set up player one counter controls.
$('#playerOneAdd').click(function(){
    if ($('#playerOneLife').hasClass('active')) {
        var playerOneLife = localStorage.getItem('playerOneLife');
        playerOneLife++;
        $('.playerOneLifeNum').html(playerOneLife);
        localStorage.setItem('playerOneLife', playerOneLife);
    }
    else if ($('#playerOneGeneral').hasClass('active')) {
        var playerOneGeneral = localStorage.getItem('playerOneGeneral');
        playerOneGeneral++;
        $('.playerOneGeneralNum').html(playerOneGeneral);
        localStorage.setItem('playerOneGeneral', playerOneGeneral);
    }
    else if ($('#playerOnePoison').hasClass('active')) {
        var playerOnePoison = localStorage.getItem('playerOnePoison');
        playerOnePoison++;
        $('.playerOnePoisonNum').html(playerOnePoison);
        localStorage.setItem('playerOnePoison', playerOnePoison);
    }
});

$('#playerOneSub').click(function(){
    if ($('#playerOneLife').hasClass('active')) {
        playerOneLife--;
        $('.playerOneLifeNum').html(playerOneLife);
    }
    else if ($('#playerOneGeneral').hasClass('active')) {
        playerOneGeneral--;
        $('.playerOneGeneralNum').html(playerOneGeneral);
    }
    else if ($('#playerOnePoison').hasClass('active')) {
        playerOnePoison--;
        $('.playerOnePoisonNum').html(playerOnePoison);
    }
});

// Set up player two counter controls.
$('#playerTwoAdd').click(function(){
    if ($('#playerTwoLife').hasClass('active')) {
        playerTwoLife++;
        $('.playerTwoLifeNum').html(playerTwoLife);
    }
    else if ($('#playerTwoGeneral').hasClass('active')) {
        playerTwoGeneral++;
        $('.playerTwoGeneralNum').html(playerTwoGeneral);
    }
    else if ($('#playerTwoPoison').hasClass('active')) {
        playerTwoPoison++;
        $('.playerTwoPoisonNum').html(playerTwoPoison);
    }
});

$('#playerTwoSub').click(function(){
    if ($('#playerTwoLife').hasClass('active')) {
        playerTwoLife--;
        $('.playerTwoLifeNum').html(playerTwoLife);
    }
    else if ($('#playerTwoGeneral').hasClass('active')) {
        playerTwoGeneral--;
        $('.playerTwoGeneralNum').html(playerTwoGeneral);
    }
    else if ($('#playerTwoPoison').hasClass('active')) {
        playerTwoPoison--;
        $('.playerTwoPoisonNum').html(playerTwoPoison);
    }
});

// Allow user to reset counters.
$('#resetButton').click(function(){
    localStorage.setItem('playerOneLife', 20);
})
});