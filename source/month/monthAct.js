import { Task } from '../skyTasks.js';

window.addEventListener('DOMContentLoaded', init);



function init() {
    clickDay()
}

function clickDay() {
    var currDay = document.getElementById('no27');
    currDay.addEventListener("load", function() {
        alert('HOLD UP');
        currDay.querySelector('event').style.backgroundColor="red";
    })

}