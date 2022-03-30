const arrow = document.getElementById("arrowBtn");

window.addEventListener("scroll" , ()=>{
   let height = scrollY;
    console.log(height);
    if(height > 100){
        arrow.classList.add("show");
    }else{
        arrow.classList.remove("show");
    }

})