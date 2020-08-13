function hello(){
    alert("Hello World");
}


function tagplay(){
    var msg = document.getElementsByTagName("p");
    document.write(msg.length);
}

function changePcolor(){
    var msg =document.getElementsByTagName("p");
    for (var i in msg){
        msg[i].style.background = "white";
        msg[i].style.color = "black";
    }
}
function classplay(){
    var msg = document.getElementsByClassName("test");
    console.log(msg.length);
    msg[0].style.fontWeight = "bold";
}
//document.getElementById("btn").onclick = hello;