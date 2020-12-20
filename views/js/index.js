const page = document.getElementById("right_menu");
const introbtn = document.getElementById("btn_introduction");
const broadcastbtn = document.getElementById("btn_broadcast");
const subscriberbtn = document.getElementById("btn_subscriber");

const divnames = [
    {
    title: "doc_broadcast",
    textnode: "Broadcasts"
    },
    {
    title: "doc_subscriber",
    textnode: "Subscribers"
    }
];



introbtn.addEventListener('click', () =>{
    setfontweight(2);
    setIntro();
})

broadcastbtn.addEventListener('click', () =>{
    setfontweight(0);
    setPage(0);
});

subscriberbtn.addEventListener('click', () =>{
    setfontweight(1);
    setPage(1);
});


function setPage(i){
    page.removeChild(page.children[1]);

    var div = document.createElement('div');
    div.classList.add(divnames[i].title);

    var divtitle = document.createElement('div');
    divtitle.classList.add('docu_title');

    var h = document.createElement("H2");
    var t = document.createTextNode(divnames[i].textnode);
    h.appendChild(t);

    divtitle.appendChild(h);
    div.appendChild(divtitle);

    switch(i){
        case 0:
            if(totalbroadcastitems != undefined){
                div.innerHTML += totalbroadcastitems;
            }
        break;
        case 1:
            if(totalsubscriberitems != undefined){
                div.innerHTML += totalsubscriberitems;
            }
        break;
        default:
            div.innerHTML += "gekkigheid";

    }

    if(div != undefined){
        page.appendChild(div);
    }
}

function setIntro(){
    page.removeChild(page.children[1]);

    var div = document.createElement('div');
    div.classList.add('doc_intro');

    var divtitle = document.createElement('div');
    divtitle.classList.add('docu_title');

    var h = document.createElement("H2");
    var t = document.createTextNode("Introduction");
    h.appendChild(t);

    var p = document.createElement("p");
    p.innerHTML = `Welcome to a simple Webinargeek Api, where you can create, read, update and delete Subscribers aswell as Broadcasts.<br>
    For the database I used MongoDB, it's a NoSQL database and it's structured in a json format.<br>
    In the menu on the left, you can walk through the documentation`;

    divtitle.appendChild(h);

    if(div != undefined){
        div.appendChild(divtitle);
        div.appendChild(p);
        page.appendChild(div);
    }

}

function setfontweight(i){
    subscriberbtn.style.fontWeight = "normal";
    broadcastbtn.style.fontWeight = "normal";

    switch(i){
        case 0:
            broadcastbtn.style.fontWeight = "bold";
        break;
        case 1:
            subscriberbtn.style.fontWeight = "bold";
        break;
        default:
            subscriberbtn.style.fontWeight = "normal";
        broadcastbtn.style.fontWeight = "normal";    
    }
}