    var timeout;

    function showWebsite() {
        document.getElementById("coverDiv").style.display = "none";
        document.body.style.overflow = "auto";
        clearTimeout(timeout);
        timeout = setTimeout(hideWebsite, 10000);
    }


    function hideWebsite() {
        document.getElementById("coverDiv").style.display = "block";
        document.body.style.overflow = "hidden";
    }

    var blowup =   [
    {
      offset: 0,
      transform: 'none'
    },
    {
        offset: .5,
        opacity: .5
    }
    ,{
      offset: 1,
      transform: 'scale(20)',
      opacity: 0
    }
  ];

          var dropin = [
            {
                transform: "translate(0px, -287px)",
                offset: 0
            },
            {
                transform: "translate(0px, -261.281px)",
                offset: 1
            }
        ];

        var appear = [
            {
                opacity: 0,
                offset: 0
            },
            {
                opacity: 1,
                offset: 1
            }
        ];

var boom, drop, l, u, g, cancel;
window.onload = function() {
    console.log("Starting Animation!");
    boom = document.getElementById('svg8').animate(blowup, {
        delay: 0,
        endDelay: 0,
        iterations: 1,
        duration: 1000,
    })

    drop = document.getElementById('layer2').animate(dropin, {
        delay: 0,
        endDelay: 0,
        iterations: 1,
        duration: 1000,
        duration: 3000,
    })
    l = document.getElementById('L').animate(appear, {
        delay: 0,
        fill: "forwards",
        iterations: 1,
        duration: 1000,
    })
    u = document.getElementById('U').animate(appear, {
        delay: 0,
        fill: "forwards",
        iterations: 1,
        duration: 1000,
    })
    g = document.getElementById('G').animate(appear, {
        delay: 0,
        fill: "forwards",
        iterations: 1,
        duration: 1000,
    })
    boom.pause();
    l.pause();
    u.pause();
    g.pause();
    lugAnim();
    setInterval(lugAnim, 10000);
}

function lugAnim(){
        l.cancel();
        u.cancel();
        g.cancel();
        drop.play();
        setTimeout(function() {
                l.play();
        }, 2000);
        setTimeout(function() {
                u.play();
        }, 2500);
        setTimeout(function() {
                g.play();
        }, 3000);
        setTimeout(function() {
            boom.play();
        }, 9000);
}
