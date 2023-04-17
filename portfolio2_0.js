let hello = document.querySelector(".hello");
let iAm = document.querySelector(".iam");
let Nithin = document.querySelector(".nithin");

hello.addEventListener("mouseover",function(){
    hello.innerHTML = "About";
})

hello.addEventListener("mouseout",function(){
    hello.innerHTML = "Hello.";
})

iAm.addEventListener("mouseover",function(){
    iAm.innerHTML = "projects";
})

iAm.addEventListener("mouseout",function(){
    iAm.innerHTML = "I am";
})

Nithin.addEventListener("mouseover",function(){
    Nithin.innerHTML = "Contact";
})

Nithin.addEventListener("mouseout",function(){
    Nithin.innerHTML = "Nithin";
})