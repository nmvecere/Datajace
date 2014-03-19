// Check if local storage variables are set.
// If not, set them.
function pageSetup() {
    if (window.localStorage.getItem('playerOneLife') !== null && window.localStorage !== null) {
        var playerOneLife = localStorage.getItem('playerOneLife');
        $('.playerOneLifeNum').html(playerOneLife);
    } else {
        localStorage.setItem('playerOneLife', 20);
        $('.playerOneLifeNum').html(20);
    }

    if (window.localStorage.getItem('playerOneGeneral') !== null && window.localStorage !== null) {
        var playerOneGeneral = localStorage.getItem('playerOneGeneral');
        $('.playerOneGeneralNum').html(playerOneGeneral);
    } else {
        localStorage.setItem('playerOneGeneral', 0);
        $('.playerOneGeneralNum').html(0);
    }

    if (window.localStorage.getItem('playerOnePoison') !== null && window.localStorage !== null) {
        var playerOnePoison = localStorage.getItem('playerOnePoison');
        $('.playerOnePoisonNum').html(playerOnePoison);
    } else {
        localStorage.setItem('playerOnePoison', 0);
        $('.playerOnePoisonNum').html(0);
    }

    if (window.localStorage.getItem('playerTwoLife') !== null && window.localStorage !== null) {
        var playerTwoLife = localStorage.getItem('playerTwoLife');
        $('.playerTwoLifeNum').html(playerTwoLife);
    } else {
        localStorage.setItem('playerTwoLife', 20);
        $('.playerTwoLifeNum').html(20);
    }

    if (window.localStorage.getItem('playerTwoGeneral') !== null && window.localStorage !== null) {
        var playerTwoGeneral = localStorage.getItem('playerTwoGeneral');
        $('.playerTwoGeneralNum').html(playerTwoGeneral);
    } else {
        localStorage.setItem('playerTwoGeneral', 0);
        $('.playerTwoGeneralNum').html(0);
    }

    if (window.localStorage.getItem('playerTwoPoison') !== null && window.localStorage !== null) {
        var playerTwoPoison = localStorage.getItem('playerTwoPoison');
        $('.playerTwoPoisonNum').html(playerTwoPoison);
    } else {
        localStorage.setItem('playerTwoPoison', 0);
        $('.playerTwoPoisonNum').html(0);
    }

    // Implement changes based on settings.
    if (localStorage.getItem('mirrorSetting') == 'true') {
        $('.player-one').addClass('mirror-mode');
    } else if (localStorage.getItem('mirrorSetting') == 'false') {
        $('.player-one').removeClass('mirror-mode');
    }

    if (localStorage.getItem('poisonSetting') == 'true') {
        $('#playerOnePoison').show();
        $('#playerTwoPoison').show();
    } else if (localStorage.getItem('poisonSetting') == 'false') {
        $('#playerOnePoison').hide();
        $('#playerTwoPoison').hide();
    }

    if (localStorage.getItem('generalSetting') == 'true') {
        $('#playerOneGeneral').show();
        $('#playerTwoGeneral').show();
    } else if (localStorage.getItem('generalSetting') == 'false') {
        $('#playerOneGeneral').hide();
        $('#playerTwoGeneral').hide();
    }

    // Format counters.
    if ($('#playerOnePoison').is(':hidden') && $('#playerOneGeneral').is(':hidden')) {
        $('#playerOneLife').addClass('show-life');
        $('#playerTwoLife').addClass('show-life');
    } else if ($('#playerOnePoison').is(':hidden')) {
        $('#playerOneGeneral').addClass('show-life-general');
        $('#playerTwoGeneral').addClass('show-life-general');
    } else if ($('#playerOneGeneral').is(':hidden')) {
        $('#playerOneLife').addClass('show-life-poison');
        $('#playerTwoLife').addClass('show-life-poison');
    }

    console.log('pagesetup called');
}

// Define function to change page.
function changePage(page) {
    location.href = page;
}

function updateSettings() {
    // MAKE CHANGES BASED ON SETTINGS
    if ($('#mirror').is(':checked')) {
        localStorage.setItem('mirrorSetting', true);
    } else {
        localStorage.setItem('mirrorSetting', false);
    };

    if ($('#poison').is(':checked')) {
        localStorage.setItem('poisonSetting', true);
    } else {
        localStorage.setItem('poisonSetting', false);
    };

    if ($('#general').is(':checked')) {
        localStorage.setItem('generalSetting', true);
    } else {
        localStorage.setItem('generalSetting', false);
    };
    console.log('updatesettings called');
}

// Call functions when page loads.
$(document).ready(function() {

    // Setup audio variable for sound effect triggers.
    var audio = document.getElementById('audio');

    // Save switch settings.
    var settingList = (localStorage["settingList"]) ? JSON.parse(localStorage["settingList"]) : [];

    $("input[type='checkbox']").each(function() {
        if ($.inArray($(this).attr('id'), settingList) >= 0) {
            $(this).attr('checked', true);
        }
    });

    $("input[type='checkbox']").change(function() {

        var settingIDs = $("input:checkbox:checked").map(function() {
            return $(this).val();
        }).get();

        localStorage['settingList'] = JSON.stringify(settingIDs);

        console.log(settingIDs);
        console.log(localStorage['settingList']);
    });

    // Implement switchery.
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function(html) {
        var switchery = new Switchery(html);
    });

    // Define variables.
    var $allCounters = $('.counter');

    // Select counter.
    $allCounters.click(function() {
        $allCounters.removeClass('active');
        $(this).addClass('active');
    });

    // Set up player one counter controls.
    $('#playerOneAdd').click(function() {
        if ($('#playerOneLife').hasClass('active')) {
            var playerOneLife = localStorage.getItem('playerOneLife');
            playerOneLife++;
            $('.playerOneLifeNum').html(playerOneLife);
            localStorage.setItem('playerOneLife', playerOneLife);
            audio.play();
        } else if ($('#playerOneGeneral').hasClass('active')) {
            var playerOneGeneral = localStorage.getItem('playerOneGeneral');
            playerOneGeneral++;
            $('.playerOneGeneralNum').html(playerOneGeneral);
            localStorage.setItem('playerOneGeneral', playerOneGeneral);
            audio.play();
        } else if ($('#playerOnePoison').hasClass('active')) {
            var playerOnePoison = localStorage.getItem('playerOnePoison');
            playerOnePoison++;
            $('.playerOnePoisonNum').html(playerOnePoison);
            localStorage.setItem('playerOnePoison', playerOnePoison);
            audio.play();
        }
    });

    $('#playerOneSub').click(function() {
        if ($('#playerOneLife').hasClass('active')) {
            var playerOneLife = localStorage.getItem('playerOneLife');
            playerOneLife--;
            $('.playerOneLifeNum').html(playerOneLife);
            localStorage.setItem('playerOneLife', playerOneLife);
            audio.play();
        } else if ($('#playerOneGeneral').hasClass('active')) {
            var playerOneGeneral = localStorage.getItem('playerOneGeneral');
            playerOneGeneral--;
            $('.playerOneGeneralNum').html(playerOneGeneral);
            localStorage.setItem('playerOneGeneral', playerOneGeneral);
            audio.play();
        } else if ($('#playerOnePoison').hasClass('active')) {
            var playerOnePoison = localStorage.getItem('playerOnePoison');
            playerOnePoison--;
            $('.playerOnePoisonNum').html(playerOnePoison);
            localStorage.setItem('playerOnePoison', playerOnePoison);
            audio.play();
        }
    });

    // Set up player two counter controls.
    $('#playerTwoAdd').click(function() {
        if ($('#playerTwoLife').hasClass('active')) {
            var playerTwoLife = localStorage.getItem('playerTwoLife');
            playerTwoLife++;
            $('.playerTwoLifeNum').html(playerTwoLife);
            localStorage.setItem('playerTwoLife', playerTwoLife);
            audio.play();
        } else if ($('#playerTwoGeneral').hasClass('active')) {
            var playerTwoGeneral = localStorage.getItem('playerTwoGeneral');
            playerTwoGeneral++;
            $('.playerTwoGeneralNum').html(playerTwoGeneral);
            localStorage.setItem('playerTwoGeneral', playerTwoGeneral);
            audio.play();
        } else if ($('#playerTwoPoison').hasClass('active')) {
            var playerTwoPoison = localStorage.getItem('playerTwoPoison');
            playerTwoPoison++;
            $('.playerTwoPoisonNum').html(playerTwoPoison);
            localStorage.setItem('playerTwoPoison', playerTwoPoison);
            audio.play();
        }
    });

    $('#playerTwoSub').click(function() {
        if ($('#playerTwoLife').hasClass('active')) {
            var playerTwoLife = localStorage.getItem('playerTwoLife');
            playerTwoLife--;
            $('.playerTwoLifeNum').html(playerTwoLife);
            localStorage.setItem('playerTwoLife', playerTwoLife);
            audio.play();
        } else if ($('#playerTwoGeneral').hasClass('active')) {
            var playerTwoGeneral = localStorage.getItem('playerTwoGeneral');
            playerTwoGeneral--;
            $('.playerTwoGeneralNum').html(playerTwoGeneral);
            localStorage.setItem('playerTwoGeneral', playerTwoGeneral);
            audio.play();
        } else if ($('#playerTwoPoison').hasClass('active')) {
            var playerTwoPoison = localStorage.getItem('playerTwoPoison');
            playerTwoPoison--;
            $('.playerTwoPoisonNum').html(playerTwoPoison);
            localStorage.setItem('playerTwoPoison', playerTwoPoison);
            audio.play();
        }
    });

    // Allow user to reset counters.
    $('#resetButton').click(function() {
        $allCounters.removeClass('active');
        var lifeTotal = 20;
        var zero = 0;

        $('.playerOneLifeNum').html(lifeTotal);
        localStorage.setItem('playerOneLife', lifeTotal);

        $('.playerOneGeneralNum').html(zero);
        localStorage.setItem('playerOneGeneral', zero);

        $('.playerOnePoisonNum').html(zero);
        localStorage.setItem('playerOnePoison', zero);

        $('.playerTwoLifeNum').html(lifeTotal);
        localStorage.setItem('playerTwoLife', lifeTotal);

        $('.playerTwoGeneralNum').html(zero);
        localStorage.setItem('playerTwoGeneral', zero);

        $('.playerTwoPoisonNum').html(zero);
        localStorage.setItem('playerTwoPoison', zero);
    });
});