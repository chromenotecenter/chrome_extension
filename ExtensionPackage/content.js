//Maybe make it so that people can have the option to use right click to save or just click on the save button.

chrome.contextMenus.create({
    title: "Save that Mother Trucker!",
    contexts:["selection"],
    onclick: addToLog
});

function addToLog(word){
    if (word.selectionText.length != 0) {
        let selection = word.selectionText;    
        console.log(selection);
        alert(selection);
    } else{
        console.log("The Selection was empty");
        alert("There was nothing highlighted...")
    }

}


