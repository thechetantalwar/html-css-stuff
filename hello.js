function hello(){
    alert("Hello World");
}


function tagplay(){
    var msg = document.getElementsByTagName("p");
    document.write(msg.length);s
}

function changePcolor(){
    var msg =document.getElementsByTagName("p");
    for (var i in msg){
        msg[i].style.background = "white";
        msg[i].style.color = "black";
    }
}
//document.getElementById("btn").onclick = hello;