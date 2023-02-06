function look() {
    event.preventDefault();
    let sub = document.getElementById("inp").value;
    if (sub == ""){
        alert("Fill in your Name Dude 🙄");
     return;   
    } else
    document.getElementById("new").innerHTML= "Welcome " + sub + "!";
    var elem = document.getElementById("tree");
    elem.parentNode.removeChild(elem);
}