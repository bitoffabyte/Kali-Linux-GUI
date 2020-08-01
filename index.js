var listOfCommands = ['help', 'clear'];
var his = document.getElementById("history");
var textInput = document.querySelector("#input");

textInput.focus()

var commandInfo = {
    'help': "lists all the commands",
    'clear': "clears the terminal<br><br>"//give 2 br at the end of last cmd
}
var historyCommands = '';
var clText = 'guest@vinylic.codes:~$'//this should be changed
console.log(his)
function comm(ele) {
    if (event.key === 'Enter') {
        var command = textInput.value;
        console.log(command);
        textInput.value = "";
        historyCommands += (clText + ' ' + command + '<br>');
        if (listOfCommands.includes(command)) {
            commandFunction(command);
        }
        else {
            historyCommands += "<br>'" + command + "'" + " is not a recognized command<br> type 'help' to see the list of commands<br><br>";
        }

        console.log(historyCommands)
        his.innerHTML = historyCommands;
    }
}
function commandFunction(c) {
    if (c === 'help') {
        for (var i = 0; i < listOfCommands.length; i++) {
            historyCommands += "<br>" + listOfCommands[i] + " : " + commandInfo[listOfCommands[i]];
        }
    }
    if (c === 'clear') {
        historyCommands = "";
        textInput.value = "";
    }
}
const foc = () => {
    textInput.focus()
}




// DRAGABLE

dragElement(document.getElementById("ter"));
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById("fakeMenu")) {
        document.getElementById("fakeMenu").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}