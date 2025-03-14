// // Hi Lets go for new Java sript in browsers:

// console.log(window.alert("In the name of God"));

// // از این به بعد دیگه لاگ نمیگیرم

// let a = open("https://www.youtube.com/");

// // اینجا نمیگیره

// let confirmAll = confirm("Ok or cancel??!!");

// console.log(confirmAll);

// print;
// // پرینت میگیره

// const inPut = prompt("put yowr password MAN");
// console.log(inPut);

// stop();
// // Dont load

// const timing = setTimeout(() => {
//     console.log("Alooooo")
// },10000);

// console.log(timing);
// clearTimeout(timing)

// const timing2 = setInterval(() => {
//     console.log("Alooooo")
// }, 500);

// console.log(timing2);


// console.log(innerWidth);
// matchMedia("(with : 700px)").machingIt;
// console.log(matchMedia.machingIt);

// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);
// // location.origin is logging port and host

// location.assign("https://chatgpt.com/");

// // با هیستوری آشنا شو

// history.back();
// history.forward();
// console.log(history.length);
// history.go(-1);

// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availHeight);
// console.log(screen.availWidth);

// // کوکی هوووو

// console.log(new Date("2020/1/1").toUTCString());
// document.cookie = "name = Ali; expires = Tue, 31 Dec 2019 20:30:00 GMT";


// // LOCAL storage

// localStorage.setItem("manage" , "Its managing");
// localStorage.setItem("name" , "ALi");

// localStorage.removeItem("manage");
// localStorage.clear()


// sessionStorage.clear();
// // هست فقط اینکه در همون تب فقط در دسترس هست و بعد پاک میشه Localstorage در واقع همون sessionStorage 
// // حواست باشه پراپرتی و متود ها هم همونه

// // گرفتن آیدی و کلاس
// document.getElementById("link-in-footer");
// document.getElementsByClassName("title");
 
// const gettingId = document.getElementById("link-in-footer");
// let gettingClass = document.getElementsByClassName("title");
// let gettingTag = document.getElementsByTagName("a");

// // اول اینکه با کنسول میتونی لاگ بگیی اینارو و اینکه کلاس سلکتور هاو
// // بر می گردونن HTML Colection تگ سلکتور ها 

// gettingClass[2];

// // پیمایش کردن با گت المنت ها

// const scroll = document.getElementsByClassName("to-do-li");

// Array.from(scroll).forEach(element => {
//     console.log(element)
// });

// // تبدیلشون می کنیم به آرایه

// let myHtml = document.childNodes[1];
// myHtml.childNodes;
// document.childNodes;
// document.childNodes[0].nodeType;
// document.nodeName;
// const myBody = myHtml.childNodes[2];
// myBody.children

// // دسترسی به هفت جد و آباد یک المنت

// let findParent = document.getElementById("make-list").parentElement;
// findParent = document.getElementById("make-list").parentNode;
// findParent = document.getElementById("make-list").parentNode.children;
// findParent = document.getElementById("make-list");
// // داداش خواهر آبجی برادر بیا داریم../12

// findParent.nextSibling;
// findParent.nextElementSibling;
// findParent.previousSibling;
// findParent.previousElementSibling;


// // هارو میکنه فقط با تغییرات سی اس اسی getElemt که کار  Query selector ببین یه چیز داریم به نام 
// document.querySelector(".ti-do-li");
// document.querySelectorAll(".ti-do-li");
// // اولی فقط یکی رو خروجی میده و دومی همه اعضا رو


// findParent.getElementsByTagName("li");
// findParent.getElementsByTagName("span");


// const h1 = document.querySelector("#h1-id");

// h1.innerHTML = "Hi";
// h1.innerText = "HGK in JS";

// console.log(document.body);
// console.log(document.head);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.scripts);
// console.log(document.documentElement);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.lastModified);
// console.log(document.links);
// console.log(document.activeElement);
// console.log(document.characterSet);
// console.log(document.readyState);

// const attBlank = document.createAttribute("target");
// attBlank.value = "_blank";

// const getLink0 = document.getElementById("link-in-footer");
// getLink.setAttributeNode(attBlank);

// const attRed = document.createAttribute("class");
// attRed.value = "become-red";

// getLink.setAttributeNode(attRed);
// // به جای این همه خل بازی بیا این کارو انجام بده

// const getLink = document.getElementById("link-in-footer");
// getLink.setAttribute("id","become-red");

// const haveLi = document.createElement("li");
// const textOfLi = document.createTextNode("We have 5 span");

// haveLi.appendChild(textOfLi);

// const haveUl = document.querySelector("#make-list");
// haveUl.appendChild(haveLi);

// haveLi.setAttribute("class" , "to-do-li");

// document.querySelector("li").tagName;
// document.querySelector("li").matches(".to-do-li");

// document.querySelector("a").accessKey = "a";

// document.querySelector("#footer h3").attributes
// //document.querySelector("#footer h3").id = "h3-i-like"

// document.querySelector("#footer h3").className
// // اتربیوت رو دست رسی پیدا می کنیم
// document.querySelector("#footer h3").attributes.removeNamedItem("class")
// // document.querySelector("#footer h3").attributes.getNamedItem("class").value

// document.querySelector("#link-in-footer").target = "_blank";
// document.querySelector("#link-in-footer").setAttribute("class","link-for-class");
// document.querySelector("#link-in-footer").removeAttribute("class");
// document.querySelector("#link-in-footer").getAttribute("class");
// document.querySelector("#link-in-footer").getAttributeNode("class");
// document.querySelector("#link-in-footer").hasAttribute("class");

// // let a = document.querySelector("#header");
// // a.classList.add("to-do-sectin");
// // a.classList.replace("body" , "to-do-section");
// // a.classList.remove("to-do-section");
// // a.classList.toggle("title");

// const getLi = document.querySelector("li").cloneNode(true);
// getLi.querySelector("span").innerText = "We have 5 span";
// const getUlTag = document.getElementById("make-list");
// getUlTag.appendChild(getLi);

// const makeLiElement = document.createElement("li");
// const makeSpanElement = document.createElement("span");
// const takeNodeOfChild = document.querySelector("#make-list").children[3];

// makeLiElement.className = "to-do-li";
// makeSpanElement.className = "span-in-li";

// makeSpanElement.innerText = "We have 4 span But New04"
// makeLiElement.appendChild(makeSpanElement);

// document.querySelector("#make-list").replaceChild( makeLiElement , takeNodeOfChild);

// // حالا که دستکاری المنت ها تموم شد
// // بریم سراغ موقعیت المنت ها 

// const all = document.querySelector("#h1-id");
// a.clientWidth
// a.clientLeft
// a.clientTop 

// // ها هستن border مقدار  clienttop and left

// // پیمایش المنت ها

// const takingUl = document.getElementById("make-list");
// const takingA = document.getElementById("link-in-footer");

// takingUl.insertAdjacentElement("afterbegin",takingA);
// takingUl.insertAdjacentElement("beforebegin",takingA);
// takingUl.insertAdjacentElement("afterend",takingA);
// takingUl.insertAdjacentElement("beforeend",takingA);

// console.log(takingUl.firstChild);
// console.log(takingUl.firstElementChild);
// console.log(takingUl.lastChild);
// console.log(takingUl.lastElementChild);
// console.log(takingUl.parentNode);
// console.log(takingUl.parentElement.children);
// console.log(takingUl.nextSibling);
// console.log(takingUl.nextElementSibling);
// console.log(takingUl.previousElementSibling);
// console.log(takingUl.innerHTML);

// takingA.innerHTML = "<h3>Helloooo</h3>";

// // رسیدیم به ایونتسس
// // EVENTS:

// const getForEvent = document.getElementById("make-list");
// getForEvent.addEventListener("touchstart" , take =>console.log(take.touches) );
// getForEvent.addEventListener("touchend" , take =>console.log(take.touches));
// getForEvent.addEventListener("touchcancel" , take =>console.log(take));

// const getMyAnimation = document.querySelector("#footer h3");
// getMyAnimation.addEventListener("animationstart", (varib) => console.log(varib , " شروعه دادا "));
// getMyAnimation.addEventListener("animationend", (varib) => console.log(varib , "بسکن دادا"));

// //function eventClick(){
// //    document.querySelector("#make-list li span").remove();
// //};

// // HTML یه آن بذاری جلوی ایونت میتونی ببریش توی 

// function clicking(){
//     document.querySelector("#make-list li").remove();
// }

// document.querySelector("#make-list li").addEventListener("click" , clicking);

// const takeUl = document.querySelector("#make-list");
// const takeLi = document.querySelector("#make-list li");
// const takeSpan = document.querySelector("#make-list li span");

// takeUl.addEventListener("click" , (e) => {
//     console.log("Log ul"); 
//     e.stopPropagation();
// } , {capture : true , once : true});

// takeLi.addEventListener("click" , () => console.log("Log Li") , {capture : true , once : true});
// takeSpan.addEventListener("click" , () => console.log("Log Span") , {once : true});

// // Event پراپرتی های پدر همه ایونت ها یا آبجکت ایونت 

// document.querySelector("ul").addEventListener("click" , (e) => console.log(e.target));
// window.addEventListener("load" , (e) => console.log(e));
// // گذاشته بشن target  بقیه پراپرتی ها که باید به جای
// // type: نوع ایونت رو بر میگردونه
// // target: المنتی که باعث صدا زند این شده رو بر میگردونه یعنی میگه کدوم المنت باعث صدا زدن ایونت شده
// // currentTarget: المنتی رو بر میگردونه که موجب صدا زده شدن فانکشن بشه

// window.addEventListener( "orientationchange" , () => {
//     if(window.screen.orientation.type == "landscape-primary"){
//         document.body.style.backgroundColor = "red"
//     }else{
        // document.body.style.backgroundColor = "blue"
//     }
// })

// window.addEventListener("scroll" , () => console.log(document.documentElement.scrollTop));

// Personal  EVENT:

// const myEvent = new CustomEvent("myEvent1", {detail: Date.now()});

// document.querySelector("ul").addEventListener("myEvent1", (e) => {
//     e.target.style.backgroundColor = "red";
// })

// window.addEventListener("scroll", () => {
//     if(document.documentElement.scrollTop >= 115){
//         document.querySelector("ul").dispatchEvent(myEvent);
//     }
// })

// document.querySelector("#make-list").addEventListener("contextmenu", (e) => {
//     console.log(e);
//     e.preventDefault()
// });
// document.querySelector("#make-list").addEventListener("dblclick", (e) => {
//     console.log(e);
// });
// document.querySelector("#make-list").addEventListener("mousedown", (e) => {
//     console.log(e);
// });
// document.querySelector("#make-list").addEventListener("mouseup", (e) => {
//     console.log(e);
// });
// document.querySelector("#make-list").addEventListener("mouseenter", (e) => {
//     console.log(e);
// });
// document.querySelector("#make-list").addEventListener("mouseleave", (e) => {
//     console.log(e);
// });
// // document.querySelector("#make-list").addEventListener("mousemove", (e) => {
// //     console.log(e);
// // });
// document.querySelector("#make-list").addEventListener("mouseover", (e) => {
//     console.log(e);
// });
// document.querySelector("#make-list").addEventListener("mouseout", (e) => {
//     console.log(e);
// });
// document.querySelector("#make-list").addEventListener("click", (e) => {
//     console.log(e.composedPath());
// });
// // پراپرتی های دیگه
// // altKey , controlKey , clientX , clientY , offsetX , offsetY , composedPath();

// document.querySelector("#input1-in-div-main").addEventListener("keydown", (e) =>{
//     console.log(`keydown: ${e}`);
// })
// document.querySelector("#input1-in-div-main").addEventListener("keypress", (e) =>{
//     console.log(`keypressed: ${e}`);
// })
// document.querySelector("#input1-in-div-main").addEventListener("keyup", (e) =>{
//     console.log(`keyup: ${e}`);
// })
// // Key press is just for letters not like shift or alt

// document.querySelector("body").addEventListener("keydown", (e) =>{
//     let char = e.which || e.charCode || e.keyCode;
//     console.log(String.fromCharCode(char));
// })
// // بقیه پراپرتی ها
// // code: نوع را بر میگرداند
// // پراپرتی کد خیلی آسون تره اونارو بریز دور
// // Key: از کدم بهتره خالص بر میگردونه
// // repeat: میگه نگهش داشتی یا نه
// // shiftKey , aktKey , ctrlKey;

// document.querySelector("#input1-in-div-main").addEventListener("input", (e) =>{
//     console.log("INPUTEH");
//     console.log(e);
// })
// document.querySelector("#input1-in-div-main").addEventListener("beforeinput", (e) =>{
//     console.log("Before INPUTEH");
//     console.log(e.target.value);
// })
// // data: پراپرتی برای فهمیدن مقدار

// document.querySelector("#input1-in-div-main").addEventListener("beforeinput", (e) =>{
//         if(e.data == 0){
//             e.preventDefault();
//         }
// })
// document.querySelector("#input1-in-div-main").addEventListener("focus", (e) =>{
//     document.getElementById("input1-in-div-main").style.backgroundColor = "red"
// })
// document.querySelector("#input1-in-div-main").addEventListener("blur", (e) =>{
//     document.getElementById("input1-in-div-main").style.backgroundColor = "white"
// })
// // relatedTarget: اگه در اولی اشتفاده کنی میگه قبلش روی چی فوکوس کرده بودی
// // اکه در دومی استفاده کنی میگه بعدش روی چی فوکوس کردی

// document.querySelector("ul li").addEventListener("dragend", (e) =>{
//         console.log(e)
// })
// document.querySelector("ul li").addEventListener("dragstart", (e) =>{
//         e.dataTransfer.setData("ulTake", e.target.id);
//         console.log("start");
// })
// document.querySelector("#to-do-section").addEventListener("dragover", (e) =>{
//         console.log("overing");
//         e.preventDefault();
// })
// document.querySelector("#to-do-section").addEventListener("drop", (e) =>{
//         console.log("droped");
//         const takeId = e.dataTransfer.getData("ulTake");
//         e.target.appendChild(document.getElementById(takeId));
// })

// document.querySelector("#to-do-section").addEventListener("copy", (e) =>{
//         console.log("cccccc");
//         e.preventDefault();
// })
// document.getElementById("input1-in-div-main").addEventListener("paste", (e) =>{
//         console.log("ppppppp");
//         e.preventDefault();
// })



// //document.querySelector("ul li").addEventListener("drag", (e) =>{
// //        console.log(e);
// //})