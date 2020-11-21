//Maybe make it so that people can have the option to use right click to save or just click on the save button.

document.getElementById('lgn').addEventListener("click", collecter);

function collecter(){
    let usr = document.getElementById('usrnme').value;
    let pwd = document.getElementById('psswrd').value;

    alert("Username: " + usr + "\n" + "Password: " + pwd)
}