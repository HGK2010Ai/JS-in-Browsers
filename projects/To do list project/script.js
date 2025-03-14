const list = document.querySelector(".ul-list");
const search = document.querySelector("#search-form input");
const addInput = document.querySelector("#ul-in-footer input");
const addButton = document.querySelector("#ul-in-footer button");

list.addEventListener("click", (e) =>{
    if(e.target.nodeName == "BUTTON" && e.target.className == "button-delete"){
        e.target.parentNode.remove();
    }
    if(list.children.length == 0){
        const msgEmpty = document.createElement("div");
        msgEmpty.style.textAlign = "center";
        msgEmpty.innerText = "لیست شما خالی است";
        msgEmpty.style.color = "rgb(31, 68, 13)"
        msgEmpty.id = "msgEmpty"
        list.appendChild(msgEmpty)
    }
})

addButton.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!addInput.value){
        return;
    }
    if(document.getElementById("msgEmpty")){
        document.getElementById("msgEmpty").remove();
    }

    list.appendChild(createItem(addInput.value));
    addInput.value = "";
})

function createItem(itemValue){
    const createLi = document.createElement("li");
    const createButton = document.createElement("button");

    createLi.className = "li-list";
    createLi.innerText = itemValue;
    
    createButton.type = "button";
    createButton.className = "button-delete";
    createButton.innerText = "پاک کردن"

    createLi.appendChild(createButton);

    return createLi;
}

search.addEventListener("input", (e)=>{
    const arrayOfList = Array.from(list.children);
    arrayOfList.forEach((element)=>{
        if(document.getElementById("msgEmpty")){
            return;
        }


        if(element.querySelector(".span-in-li").innerText.toLowerCase().includes(e.target.value)){
            element.style.display = "flex";
        }else{
            element.style.display = "none";
        }
    });
});