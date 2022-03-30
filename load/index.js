let loadText = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');
let count = 0 ;
let project = setInterval(blurry, 30)
function blurry(){
    loadText.innerText = count + "%";

    count++;
    bg.style.filter = 'blur(20px)'
    bg.style.transition = 'all 500ms ease-in'
    
    if(count === 101){
    bg.style.filter = 'blur(0px)'

        clearInterval(project);
    }else{
        count
    }
}
blurry()