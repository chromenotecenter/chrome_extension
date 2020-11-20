//This is nothing at te moment.

chrome.contextMenus.create({
    id: "collect_text",
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


