// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let getran=getrandom();
//     h3.innerText=getran;

//     let div=document.querySelector("div");
//     div.style.backgroundColor=getran;
//     console.log("color updated");
// });

// function getrandom(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color =`rgb(${red},${green},${blue})`;
//     return color;
// }
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);
//     let user=this.elements[0];
//     let pass=this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`${user.value} username and your password is ${pass.value}`);
// })


let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});
let delbtns=document.querySelectorAll(".delete");
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par);
        par.remove();

    });
};
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem= event.target.parentElement;
        listitem.remove();
        console.log("Deleted");
    }
})