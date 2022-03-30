const full_img = document.getElementById("full-img-box");
const f_img = document.getElementById("f-img");

function openImg(pic){
    full_img.style.opacity = "1";
    full_img.style.visibility = "visible";
    f_img.src = pic;

}
function closeImg(){
    full_img.style.opacity = "0";
    full_img.style.visibility = "hidden";
}