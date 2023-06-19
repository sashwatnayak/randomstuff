import { Task } from '../skyTasks.js';

window.addEventListener('DOMContentLoaded', init);

var counter = 0;

function init() {
    testfunc();
}

function testfunc() {
    document.getElementById("212").addEventListener("click", function open() {
        document.getElementById("212").style.backgroundColor="yellow";
        alert("YOU CLICKED THE BOX!");
        creatingModal();
        location.href = "#modal-open";

        //if ()

        //on refresh, basically redirect back to weekly page
        //location.href = "#";
        //window.location.reload();

        //window.addEventListener("refresh")
        
        //var newEl = document.getElementById("212");
        //newEl.class = "clicker"
        //document.getElementById("212").href = "../month/month.html"
        //document.getElementById("212").append(newEl);


    })
}

function creatingModal() {
    var curr = document.getElementById('modal-open');
    var newEl = document.createElement('div');
    newEl.style="background-color:purple";
    newEl.id = "boxform"
    curr.append(newEl);
    newEl.innerHTML = `
    <a onclick="document.getElementById('modal-open').style.display='none'" href="weekly.html" title="Close" class="modal-cl">x</a>
    <h1 style="background-color:red;text-align:center" class="titl" >TIME TO VERIFY</h1>
    <p id='para1' class="descript"><span class="effect"> WHAT IS YOUR NAME? </span> <input type="text" id="values"></input></p>
    <button id="first" class="delete_task">SUBMIT!</button>
    `;

    inputCheck();
    
    return curr;

}

//have a function for her name (submit should refresh and ask new questions)

function inputCheck() {
    var submitted = document.querySelector(".delete_task")
    submitted.addEventListener("click",()=>{
        var name = document.getElementById("values").value;
        checkName(name);
        //alert("Your name is " + name)
    })
}

function checkName(name) {
    var checker = name.toLowerCase();
    if (checker == 'elise' || checker == 'elise bushnell') {
        alert('are you really her? coz I have some questions...');
        changeModal();
    }
    else {
        alert('WHAT ARE YOU DOING HERE? LEAVE!')
    }
}


function changeModal() {

    var container = document.getElementById('boxform');

    var prevEl = document.getElementById('para1');
    var prevSub = document.getElementById('first')
    prevEl.remove();
    prevSub.remove();
    var newPara = document.createElement('p');
    newPara.id = "para2"
    var newButton = document.createElement('button')
    newButton.class = "delete_task"
    newButton.id = "second"
    container.append(newPara);
    container.append(newButton);
    newPara.innerHTML = `
    <span class="effect"> QUESTION 1: AM I AN ALCOHOLIC? </span> <select id="value1" placeholder="select">
        <option selected>choose one</option>
        <option>duh</option>
        <option>NO! Sash is a SAINT!</option>
    </select>
    `;
    newButton.innerHTML = `
        SUBMIT!
    `;

    var submitted = document.getElementById("second")
    submitted.addEventListener("click",()=>{
        var ans = document.getElementById("value1").value;
        if (ans == "duh") {
            alert('okay tbh that was easy, next one!')
            counter += 1;
            changeModal2();
        }
        else {
            alert('hmmmm.....')
            changeModal2();
        }
        //alert("Your name is " + name)
    })



    /*
    var change = document.getElementById('para1');
    change.innerHTML = ` 
    <span class="effect"> SECURITY1 </span> <input type="text" id="value1"></input>
    `;

    var submitted = document.querySelector(".delete_task")
    submitted.addEventListener("click",()=>{
        var name = document.getElementById("value1").value;
        alert("YOU ANSWERED " + name);
        //alert("Your name is " + name)
        
    })

    /*
    change.innerHTML = ` 
            <span class="effect"> SECURITY2 </span> <input type="text" id="value2"></input>
    `;

    var submitted = document.querySelector(".delete_task")
    submitted.addEventListener("click",()=>{
        var name = document.getElementById("value2").value;
        alert("YOU ANSWERED " + name);
        //alert("Your name is " + name)
    })*/

    
    /*
    change.innerHTML = ` 
    <span class="effect"> SECURITY3 </span> <input type="text" id="value2"></input>
    `;

    var submitted = document.querySelector(".delete_task")
    submitted.addEventListener("click",()=>{
        var name = document.getElementById("value3").value;
        alert("YOU ANSWERED " + name);
        //alert("Your name is " + name)
        if (counter == 3) {
            location.href="../end/end.html"
        }
    
        else {
            alert('FUCKIN SHAM! YOURE NOT HER!')
            changeModal();
        }
    })

    

    //if counter == 3 , go to the last page
    //else, if not 3, retry!*/

}

function changeModal2() {
    var container = document.getElementById('boxform');

    var prevEl = document.getElementById('para2');
    var prevSub = document.getElementById('second')
    prevEl.remove();
    prevSub.remove();
    var newPara = document.createElement('p');
    newPara.id = "para3"
    var newButton = document.createElement('button')
    newButton.class = "delete_task"
    newButton.id = "third"
    container.append(newPara);
    container.append(newButton);
    newPara.innerHTML = `
    <span class="effect"> QUESTION 2: WHO TAUGHT CSE 127 in SP23? </span> <select id="value2">
        <option selected>choose one</option>
        <option>Prof. Thomas Powell, the Promised One</option>
        <option>Prof. Joseph Pasquale, the Chosen One</option>
        <option>earlence</option>
    </select>
    `;
    newButton.innerHTML = `
        SUBMIT!
    `;

    var submitted = document.getElementById("third")
    submitted.addEventListener("click",()=>{
        var ans = document.getElementById("value2").value;
        if (ans == "earlence") {
            alert('professor? my sweet ass')
            counter += 1;
            changeModal3();
        }
        else {
            alert('im starting to question your sanity...')
            changeModal3();
        }
    })

}

function changeModal3() {
    var container = document.getElementById('boxform');

    var prevEl = document.getElementById('para3');
    var prevSub = document.getElementById('third')
    prevEl.remove();
    prevSub.remove();
    var newPara = document.createElement('p');
    newPara.id = "last"
    var newButton = document.createElement('button')
    newButton.class = "delete_task"
    newButton.id = "final"
    container.append(newPara);
    container.append(newButton);
    newPara.innerHTML = `
    <span class="effect"> QUESTION 3: WHAT'S THE SILLIEST THING I HAVE DONE? </span> <select id="value3">
        <option selected>choose one</option>
        <option>stealing your champagne on your 21st</option>
        <option>getting my car towed after dragging you 150 miles</option>
        <option>constantly finding a way to ceaselessly instigate you</option>
        <option>ALL OF THEM</option>
    </select>
    `;
    newButton.innerHTML = `
        SUBMIT!
    `;

    var submitted = document.getElementById("final")
    submitted.addEventListener("click",()=>{
        var ans = document.getElementById("value3").value;
        if (ans == "ALL OF THEM") {
            alert('its just me being me haha...')
            counter += 1;
        }
        else {
            alert('you missed one')
        }

        checkCounter();
    })

}

function checkCounter() {
    if (counter == 3) {
        alert('... and you are still the same Elise I know ;)');
        window.location.href="../end/end.html"
    }
    else {
        alert('TRY AGAIN FROM THE START YOU POSER!');
        window.location.href="weekly.html"
    }
}