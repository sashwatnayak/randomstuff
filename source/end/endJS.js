window.addEventListener('DOMContentLoaded', init);

function init() {
    addText();
    
}

(function() {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    /*
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });*/
})();

function addText() {
    /*
    var screen = document.querySelector('.alternate');
    var text = document.createElement('p');
    text.id='change';
    text.innerHTML=`
        you fuckin made it, CONGRATULATIONS!
    `;
    screen.appendChild(text);*/

    
}



setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);

