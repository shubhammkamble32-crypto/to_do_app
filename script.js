let task = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");


// btn.addEventListener("click",function(){
//     let new_task = document.createElement("li");
//     let new_div=document.createElement("div");

//     let de_btn = document.createElement("button");
//     let item = document.querySelector(".listItem");
//     de_btn.innerText = "Delete";
//     // new_task.append(de_btn);
//     de_btn.classList.add("Delete");
//     de_btn.style.backgroundColor = "blueviolet"
//     de_btn.style.color = "white";
//   de_btn.style.height = "20px";
//   de_btn.style.width = "85px";
//    de_btn.style.borderRadius = "7px";

//     new_task.textContent = task.value;
//     // document.querySelector("ul").append(new_task);

//     item.append(new_task);

//      item.appendChild(de_btn);

//     task.value = "";






// });

// list.addEventListener("click", function(ev){


//     let per = ev.target.parentElement;



//         per.remove();
// })

list.addEventListener("click", function (ev) {

    if (ev.target.tagName == "BUTTON") {
        ev.target.parentElement.remove();
    }

});

btn.addEventListener("click", function () {
    if (task.value == "") {
        alert("Enter task");
    }
    else {
        // task.type = "checkbox";
        let check_box = document.createElement("input");
        check_box.type = "checkbox";
        let new_div = document.createElement("div");
        new_div.classList.add("listItem");

        let new_task = document.createElement("li");
        new_task.innerText = task.value;

        let de_btn = document.createElement("button");
        de_btn.innerText = "Delete";

        de_btn.style.backgroundColor = "blueviolet";
        de_btn.style.color = "white";
        de_btn.style. padding="2px 12px " ;
        de_btn.style. cursor=" pointer ";
        de_btn.style.borderRadius = "7px";
        de_btn.style.display=" inline-flex" ;
    
    
        de_btn.style.display = "flex";
de_btn.style.alignItems = "center";
de_btn.style.justifyContent = "center";
        //   de_btn.style.



       
        new_div.appendChild(new_task);
        
        new_div.appendChild(de_btn); 

        list.appendChild(new_div);

        task.value = "";
    }
});





