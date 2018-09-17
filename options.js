var startingOptions = JSON.parse(localStorage.getItem("options"));

document.getElementById("checkDaily").onclick = setOptions;
document.getElementById("checkDaily").checked = false;
if (startingOptions !== null && startingOptions.hasOwnProperty('checkDaily') ) {
    document.getElementById("checkDaily").checked = startingOptions.checkDaily;
}
function setOptions() {
    var options = {
        checkDaily: document.getElementById("checkDaily").checked
    };
    chrome.runtime.sendMessage({name: "setOptions", options: JSON.stringify(options)});
}
