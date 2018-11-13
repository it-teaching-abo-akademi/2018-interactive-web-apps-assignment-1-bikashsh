//Script for canvas contexts
var canvas_a = document.getElementById('text_a');
var ctx_a = canvas_a.getContext("2d");
ctx_a.font = "40px Arial";
ctx_a.fillStyle = "white";
ctx_a.fillText('Text A',canvas_a.width/4,canvas_a.height/4);

var canvas_b = document.getElementById('text_b');
var ctx_b = canvas_b.getContext("2d");
ctx_b.font = "40px Arial";
ctx_b.fillStyle = "black";
ctx_b.fillText('Text B',canvas_b.width/20,canvas_b.height/2);

var canvas_c = document.getElementById('text_c');
var ctx_c = canvas_c.getContext("2d");
ctx_c.font = "20px Arial";
ctx_c.fillStyle = "white";
ctx_c.fillText('Text C',canvas_c.width/3,canvas_c.height);


var canvas_d = document.getElementById('text_d');
var ctx_d = canvas_d.getContext("2d");
ctx_d.font = "20px Arial";
ctx_d.fillStyle = "red";
ctx_d.fillText('Text D',canvas_c.width/20,canvas_c.height/8);


//Creating various functions to drag and drop the draggable picture
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}