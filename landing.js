// Navbar Date
let d = new Date()
days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
let day = days[d.getDay()]
let hr = d.getHours();
let min = d.getMinutes();
let time = hr + ":" + min;
document.getElementById("date").innerText = day + " " + time


// Terminal Commands


let listOfCommands = ['help', 'clear'];
let his = document.getElementById("history");
let textInput = document.querySelector("#input");

textInput.focus()

let commandInfo = {
    'help': "lists all the commands",
    'clear': "clears the terminal<br><br>"//give 2 br at the end of last cmd
}
let historyCommands = '';
let clText = 'guest@user:~$'//this should be changed
console.log(his)
const comm = (ele) => {
    if (event.key === 'Enter') {
        let command = textInput.value;
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
const commandFunction = (c) => {
    if (c === 'help') {
        for (let i = 0; i < listOfCommands.length; i++) {
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


// nav control 
document.getElementById("cl").addEventListener('click', () => {
    document.querySelector("#ter").style.display = "none"
})

document.getElementById("min").addEventListener('click', () => {
    document.querySelector("#ter").style.display = "none"
})




let dragItem = document.querySelector("#fakeMenu");
let container = document.querySelector("body");

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;



const dragStart = (e) => {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;

    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

    }

    if (e.target === dragItem) {
        active = true;

    }
}

const dragEnd = (e) => {
    initialX = currentX;
    initialY = currentY;
    active = false;
}

const drag = (e) => {
    if (active) {

        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
            console.log("123")

        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, document.querySelector("#ter"));
    }
}

let m = false
let fresh = false
const maximize = (c) => {
    document.querySelector("#ter").style.width = "99.5%"
    document.querySelector("#ter").style.height = "100%"
    document.querySelector(".terminal").style.width = "100%"
    document.querySelector(".terminal").style.height = "100%"
    document.querySelector("#fakeMenu").style.width = "100%"
    document.querySelector("#fakeMenu2").style.width = "100%"
    console.log(c)
    let y = Math.floor(document.querySelector(".navbar").getBoundingClientRect().bottom + document.documentElement.scrollTop)
    document.querySelector("#ter").style.transform = "translate3d(" + -25 + "%, " + -20 + "%, 0)";
    m = true
    fresh = true
    // dragEnd()
    textInput.focus()
}
const minimize = () => {
    document.querySelector("#ter").style.width = "50%"
    document.querySelector("#ter").style.height = "50%"
    document.querySelector(".terminal").style.width = "100%"
    document.querySelector(".terminal").style.height = "100%"
    document.querySelector("#fakeMenu").style.width = "100%"
    document.querySelector("#fakeMenu2").style.width = "100%"
    if (fresh) {
        document.querySelector("#ter").style.transform = "translate3d(" + -25 + "%, " + -25 + "%, 0)";
        console.log("SDSDSD")
        fresh = false

    }
    // dragStart()

    m = false
}
const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // console.log(xPos)
    let coord = Math.floor(document.querySelector("#ter").getBoundingClientRect().top + document.documentElement.scrollTop)
    let coord2 = Math.floor(document.querySelector(".navbar").getBoundingClientRect().bottom + document.documentElement.scrollTop)
    // console.log(coord1)
    if (coord <= coord2) {
        maximize(coord2)
    }
    else {
        minimize()
    }
}
container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("click", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

document.getElementById("max").addEventListener('click', () => {
    if (!m) {
        maximize()
    }
    else {
        minimize()
    }
})



