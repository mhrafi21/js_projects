window.addEventListener("scroll" , ()=>{
    const div3 = document.getElementById("div3");
    const contentPosition = div3.getBoundingClientRect().top;

    const scrollY = window.scrollY;

    if(contentPosition  < scrollY){
        div3.classList.add('show');
    }
})

