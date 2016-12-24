var canvas = document.getElementById('load');
$("#load").css("left",$(window).width()/2-30);
$("#load").css("top",$(window).height()/2-30);

var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius1 = 25;
var radius2 = 15;
var counterClockwise = false;
var startAngle1 = 1.25 * Math.PI;
var endAngle1 = 1.75 * Math.PI;
var startAngle2 = 2.25 * Math.PI;
var endAngle2 = 2.75 * Math.PI;
var startAngle3 = 1.75 * Math.PI;
var endAngle3 = 2.25 * Math.PI;
var startAngle4 = 2.75 * Math.PI;
var endAngle4 = 3.25 * Math.PI;
var frame;
var load =0;

function load_animation()
{
    context.clearRect(0,0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x, y, radius1, startAngle1, endAngle1, counterClockwise);
    context.lineWidth = 5;
    context.strokeStyle = 'white';
    context.stroke();

    context.beginPath();
    context.arc(x, y, radius1, startAngle2, endAngle2, counterClockwise);
    context.lineWidth = 5;
    context.strokeStyle = 'white';
    context.stroke();

    context.beginPath();
    context.arc(x, y, radius2, startAngle3, endAngle3, counterClockwise);
    context.lineWidth = 5;
    context.strokeStyle = 'white';
    context.stroke();

    context.beginPath();
    context.arc(x, y, radius2, startAngle4, endAngle4, counterClockwise);
    context.lineWidth = 5;
    context.strokeStyle = 'white';
    context.stroke();

    startAngle1 += -0.02 * Math.PI;
    startAngle2 += -0.02 * Math.PI;
    startAngle3 += 0.02 * Math.PI;
    startAngle4 += 0.02 * Math.PI;

    endAngle1 += -0.02 * Math.PI;
    endAngle2 += -0.02 * Math.PI;
    endAngle3 += 0.02 * Math.PI;
    endAngle4 += 0.02 * Math.PI;

    frame = window.requestAnimationFrame(load_animation);

}

frame = window.requestAnimationFrame(load_animation);
delay();

window.addEventListener('load', function(){
    load =1;
});

function delay()
{
    if(load == 0)
        setTimeout(delay,1000);
    else
        end_animation();
}

function hide_loaders()
{
    $('#load-right').hide();
    $('#load-left').hide();
}

function end_animation()
{
    window.cancelAnimationFrame(frame);
    $("#load").hide();
    $(".info").css("display", "inline-block");
    $("#load-right").addClass("right-loaded");
    $("#load-left").addClass("left-loaded");
    setTimeout(hide_loaders, 1000);
}
