let task = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");
let ts = document.querySelector(".tasks")



ts.addEventListener("click", function (ev) {

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
        let new_div = document.createElement("ul");
        new_div.classList.add("listItem");

        let new_task = document.createElement("li");
        new_task.innerText = task.value;

        let de_btn = document.createElement("button");
        de_btn.innerText = "Delete";

        let task_div = document.createElement("div");

        de_btn.style.backgroundColor = "blueviolet";
        de_btn.style.color = "white";
        de_btn.style. padding="2px 26.7px " ;
        de_btn.style. cursor=" pointer ";
        de_btn.style.borderRadius = "7px";
        de_btn.style.display=" inline-flex" ;
    
    
        de_btn.style.display = "flex";
de_btn.style.alignItems = "center";
de_btn.style.justifyContent = "center";
        //   de_btn.style.
        // new_div.style.paddingBlock="8px";


// /        task_div.style.backgroundColor="white";
       task_div.appendChild(new_task)
        new_div.appendChild(task_div);
        
        new_div.appendChild(de_btn); 

        // list.appendChild(new_div);

        ts.appendChild(new_div);
        

        task.value = "";
    }
});





