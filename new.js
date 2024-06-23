let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let button = document.querySelector('.click');
let text = document.querySelector('#text');


button.onclick = () =>{
    weight = Number(weight.value);
    height = Number(height.value);
    let num = 2;
    let number = Math.pow(height, num)
    let BMI = weight / number * 10000;
    BMI = BMI.toFixed(2);
    
    
    return text.textContent = BMI;
    
}

