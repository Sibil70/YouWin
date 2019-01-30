var btn = document.querySelector(".button"),
    closeReg = document.querySelector(".registration__close"),
    regForm = document.querySelector(".registration"),
    warning = document.querySelector('.warning__text'),
    content = document.querySelector('.content');
    
btn.addEventListener("click", function(e) {
    e.preventDefault;
    regForm.style.display = "block";
    btn.style.display = "none";
    warning.style.color = "#fff";
    if (regForm.style.position = "absolute") {
        content.firstElementChild.style.position ="absolute";
        content.firstElementChild.style.top ="5%";
    }
});

regForm.addEventListener("click", function(e) {
    e.preventDefault;
    regForm.style.display = "none";
    btn.style.display = "block";
    warning.style.color = "transparent";
    content.firstElementChild.style.position ="initial";
});
