// document.write(unescape('%3C%6C%69%6E%6B%20%72%65%6C%3D%22%73%74%79%6C%65%73%68%65%65%74%22%20%68%72%65%66%3D%22%73%74%79%6C%65%73%2F%63%73%73%2E%63%73%73%22%20%74%79%70%65%3D%22%74%65%78%74%2F%63%73%73%22%20%6D%65%64%69%61%3D%22%73%63%72%65%65%6E%22%20%2F%3E%0A%3C%73%63%72%69%70%74%20%74%79%70%65%3D%22%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%22%20%73%72%63%3D%22%73%63%72%69%70%74%2F%6A%73%2E%6A%73%22%20%6C%61%6E%67%75%61%67%65%3D%22%6A%61%76%61%73%63%72%69%70%74%22%3E%3C%2F%73%63%72%69%70%74%3E%0A'));

// Navbar Date
let d = new Date()
days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
let day = days[d.getDay()]
let hr = d.getHours();
let min = d.getMinutes();
let time = hr + ":" + min;
document.getElementById("date").innerText = day + " " + time


// Terminal Commands

let listOfCommands = ['help', 'clear', 'ls', 'cat', 'date', 'cd', 'mv', 'rm', 'rmdir', 'touch', 'flag', 'fork', 'sudo'];
let his = document.getElementById("history");
let textInput = document.querySelector("#input");

textInput.focus()




let commandInfo = {
    'help': "lists all the commands",//done
    'ls': "List information about the files and folders.",//done
    "cat": "Read FILE(s) content and print it to the standard output(screen).",//done
    "date": "Print the system date and time.",//done
    "clear": "Clear the terminal screen.",//done
    "cd": "Change the current working directory.",//done
    "mv": "Move(rename) files.",//done
    "rm": "Remove files or directories.",//done
    "rmdir": "Remove directory, this command will only work if the folders are empty.",//done
    "touch": "Change file timestamps.If the file doesn't exist, it's created an empty one.",
    "sudo": "Execute a command as the superuser.<br><br>",
    'flag': "Submit a flag",
    'fork': "Fork this repository"
}

let listOfFiles = {
    "About_Me.txt": () => {
        historyCommands += "Hi somethings about me<br>bla bla bla<br>"
    },
    "Contact_Me.txt": () => {
        historyCommands += "My Contact info<br>"

    },
    "Github.txt": () => {
        historyCommands += "github link<br>"

    },
    "Linkedin.txt": () => {
        historyCommands += "my linkedin link<br>"

    },
    "Credits.txt": () => {
        historyCommands += "Created by: rootnarayan<br>"

    }
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
        if (listOfCommands.includes(command) || listOfCommands.includes(command.split(" ")[0])) {
            commandFunction(command);
        }
        else {
            historyCommands += "<br>'" + command + "'" + " is not a recognized command<br> type 'help' to see the list of commands<br><br>";
        }
        // console.log(historyCommands)
        his.innerHTML = historyCommands;
    }
}
const nonSudo = (w) => {
    historyCommands += "Unable to '" + w + "', Permission Denied!<br>"
}
const commandFunction = (c) => {
    if (c === 'help') {
        for (let i = 0; i < listOfCommands.length; i++) {
            historyCommands += "<br>" + listOfCommands[i] + " : " + commandInfo[listOfCommands[i]];
            console.log(listOfCommands[i])
        }
    }
    if (c === 'clear') {
        historyCommands = "";
        textInput.value = "";
    }
    let s = c.split(" ")
    if (c == 'ls') {
        Object.keys(listOfFiles).map(i => {
            historyCommands += i + "<br>"
        })
        historyCommands += "<br>"
    }
    console.log(s)
    if (s[0] == 'cat') {
        let file = s[1]
        if (Object.keys(listOfFiles).includes(file)) {
            listOfFiles[file]()
        }
        else if (s.length = 1) {
            historyCommands += "Please specify a file<br>"

        }
        else {
            historyCommands += file + " not found"
        }
    }
    if (c == 'date') {
        let da = new Date()
        historyCommands += days[da.getDay()] + " " + (da.getHours() < 10 ? '0' : '') + da.getHours() + ":" + (da.getMinutes() < 10 ? '0' : '') + da.getMinutes()

    }
    if (c == 'cd' || c == 'rm' || c == 'mv' || c == 'rmdir' || c == 'touch' || c == 'sudo') {
        nonSudo(c)
    }
    if (s[0] == 'flag') {
        historyCommands += 'Flag submission will be added soon'
    }
    if (c == 'fork') {
        historyCommands += "Repo will be added soon"
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



