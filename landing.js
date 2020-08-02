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
let ton = true

const Terminalon = () => {
    document.querySelector("#ter").style.display = "block"
    foc()
    ton = true
}
const Terminalonn = () => {
    if (ton) {
        document.querySelector("#ter").style.display = "none"
        ton = false

    }
    else {
        document.querySelector("#ter").style.display = "block"
        ton = true

    }
}

let listOfCommands = ['help', 'clear', 'ls', 'cat', 'date', 'cd', 'mv', 'rm', 'rmdir', 'touch', 'flag', 'fork', 'sudo'];
let his = document.getElementById("history");
let textInput = document.querySelector("#input");

textInput.focus()

// setInterval(document.querySelector(".body").scrollTo(0, document.querySelector(".terminal").scrollHeight), 0)
document.querySelector(".terminal").scrollTo(0, 0)


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
        historyCommands += "Hi somethings about me<br>bla bla bla<br><br>"
    },
    "Contact_Me.txt": () => {
        historyCommands += "My Contact info<br><br>"

    },
    "Github.txt": () => {
        historyCommands += "github link<br><br>"

    },
    "Linkedin.txt": () => {
        historyCommands += "my linkedin link<br><br>"

    },
    "Credits.txt": () => {
        historyCommands += "Created by: rootnarayan<br><br>"

    }
}

let historyCommands = '';
let clText = '<span id = "path">guest@user:~$</span>'//this should be changed
console.log(his)

const scrollToBot = () => {
    document.querySelector(".terminal").scrollTo(0, document.querySelector(".terminal").scrollHeight)
    document.querySelector(".terminal").scrollTo(0, document.querySelector(".terminal").scrollHeight)
    document.querySelector(".terminal").scrollTo(0, document.querySelector(".terminal").scrollHeight)

    console.log("scroll")

}
const comm = (ele, yn = false) => {
    if (yn) {
        let command = ele;
        console.log(command);
        textInput.value = "";
        historyCommands += (clText + '<p class = "aaa"> ' + command + '</p>');
        if (listOfCommands.includes(command) || listOfCommands.includes(command.split(" ")[0])) {
            commandFunction(command);
        }
        else {
            historyCommands += "<br>'" + command + "'" + " is not a recognized command<br> type 'help' to see the list of commands<br><br>";
        }
        // console.log(historyCommands)
        his.innerHTML = historyCommands;
        document.querySelector(".terminal").scrollTo(0, document.querySelector(".terminal").scrollHeight)
    }
    else if (event.key === 'Enter') {
        let command = textInput.value;
        console.log(command);
        textInput.value = "";
        historyCommands += (clText + '<p class = "aaa"> ' + command + '</p>');
        if (listOfCommands.includes(command) || listOfCommands.includes(command.split(" ")[0])) {
            commandFunction(command);
        }
        else {
            if (command != '')
                historyCommands += "<br>'" + command + "'" + " is not a recognized command<br> type 'help' to see the list of commands<br><br>";
            else
                historyCommands += "<br>"
        }
        // console.log(historyCommands)
        his.innerHTML = historyCommands;
        document.querySelector(".terminal").scrollTo(0, document.querySelector(".terminal").scrollHeight)
    }

}
const abtMe = () => {
    Terminalon()
    setTimeout(() => comm("cat About_Me.txt", true), 100);
    textInput.focus()
}
const linkedin = () => {
    Terminalon()
    setTimeout(() => comm("cat Linkedin.txt", true), 100);
    textInput.focus()
}
const github = () => {
    Terminalon()
    setTimeout(() => comm("cat Github.txt", true), 100);
    textInput.focus()
}
const contact = () => {
    Terminalon()
    setTimeout(() => comm("cat Contact_Me.txt", true), 100);
    textInput.focus()
}
const credits = () => {
    Terminalon()
    setTimeout(() => comm("cat Credits.txt", true), 100);
    textInput.focus()
}
const nonSudo = (w) => {
    historyCommands += "Unable to '" + w + "', Permission Denied!<br>"
}
const commandFunction = (c) => {
    if (c == 'help') {
        historyCommands += "<br>" + "Here are a list of commands"
        for (let i = 0; i < listOfCommands.length; i++) {
            historyCommands += "<br>" + listOfCommands[i] + " : " + commandInfo[listOfCommands[i]];
            console.log(listOfCommands[i])

        }
    }
    if (c == 'clear') {
        historyCommands = "";
        textInput.value = "";
        console.log("CCLLEAR")
    }
    let s = c.split(" ")
    if (c == 'ls') {
        Object.keys(listOfFiles).map(i => {
            historyCommands += i + "<br>"
        })
        historyCommands += "<br>"
    }
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

    scrollToBot()
}
const foc = () => {
    textInput.focus()
    console.log("Focus")
}




// nav control 
document.getElementById("cl").addEventListener('click', () => {
    comm("clear", true)
    ton = false
    document.querySelector("#ter").style.display = "none"
})


document.getElementById("min").addEventListener('click', () => {

    // comm("clear", true)
    ton = false
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
    document.querySelector(".terminal").style.height = "83%"
    document.querySelector(".terminal").style.paddingBottom = "100%"

    document.querySelector("#fakeMenu").style.width = "100%"
    document.querySelector("#fakeMenu2").style.width = "100%"
    console.log(c)
    let y = Math.floor(document.querySelector(".navbar").getBoundingClientRect().bottom + document.documentElement.scrollTop)
    document.querySelector("#ter").style.transform = "translate3d(" + -25 + "%, " + -15 + "%, 0)";
    m = true
    fresh = true
    // dragEnd()
    textInput.focus()
    // document.getElementById('fakeMenu').style.position = "absolute"
    // document.getElementById('fakeMenu').style.top = "0"
    // document.getElementById('fakeMenu2').style.position = "absolute"
    // document.getElementById('fakeMenu2').style.top = "4%"


}
const minimize = () => {
    document.querySelector("#ter").style.width = "50%"
    document.querySelector("#ter").style.height = "50%"
    document.querySelector(".terminal").style.width = "100%"
    document.querySelector(".terminal").style.height = "100%"
    document.querySelector("#fakeMenu").style.width = "100%"
    document.querySelector("#fakeMenu2").style.width = "100%"
    document.querySelector(".terminal").style.paddingBottom = "0%"

    if (fresh) {
        document.querySelector("#ter").style.transform = "translate3d(" + -25 + "%, " + -25 + "%, 0)";
        console.log("SDSDSD")
        fresh = false

    }
    // dragStart()

    m = false
    document.getElementById('fakeMenu').style.position = "static"
    // document.getElementById('fakeMenu').style.top = "0"
    document.getElementById('fakeMenu2').style.position = "static"
    // document.getElementById('fakeMenu2').style.top = "4%"
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
window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
document.getElementById("max").addEventListener('click', () => {
    if (!mobileCheck()) {
        if (!m) {
            maximize()
        }
        else {
            minimize()
        }
    }
    else {
        alert("resize not available on mobile")
    }
})



