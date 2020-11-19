//Maybe make it so that people can have the option to use right click to save or just click on the save button.

chrome.contextMenus.create({
    title: "Save that Mother Trucker!",
    contexts:["selection"],
    onclick: addToLog
});

function addToLog(){
    if (document.getSelection().toString().length) {
        let selection = document.getSelection().toString();    
        console.log(selection);
    } else{
        console.log("The Selection was empty");
    }

}


