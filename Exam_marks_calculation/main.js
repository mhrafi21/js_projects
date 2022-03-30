const bangla = document.getElementById("bangla");
const english = document.getElementById("english");
const math = document.getElementById("math");
const physics = document.getElementById("physics");
const btn  =document.getElementById("btn");
const inputs = document.querySelectorAll(".inputs");
const small = document.querySelectorAll(".small");


btn.addEventListener("click", ()=>{
    if(bangla.value === "" || english.value === "" || math.value === "" || physics.value === ""  ){
            alert("Input can't be empty");
            if((bangla.value === "" || english.value === "" || math.value === "" || physics.value === "" )==true){
             
            }
    }else{
        const result = document.getElementById("result");
        const total = document.getElementById("total");
        const average = document.getElementById("average");
        const gpa = document.getElementById("gpa");
        const grade = document.getElementById("grade");
        const  result_type = document.getElementById("result_type");
        // total marks
        const total_marks =parseInt(bangla.value)  + parseInt(english.value)  + parseInt(math.value ) + parseInt(physics.value) ;
        total.innerText = `Total Number is : ${total_marks}`;
        // avrage
        const average_marks = total_marks / inputs.length;
        average.innerText = `average : ${average_marks}`;

    }
})
for( var i = 0;  i<inputs.length; i++){
    inputs[i].addEventListener("input" , ()=>{
        for(let j = 0; j< inputs.length ; j++){
           if(inputs[j].value > 100){
            inputs[j].style.border = "1px solid red";
            for(s = 0; s< small.length; s++){
                if(inputs[j].value > 100){
                    small[s].classList.add('show');
                }else{
                    small[s].classList.remove('show');
                }
               }
               }else{
              inputs[j].style.border = "none";
            
           }
        }
    })
}