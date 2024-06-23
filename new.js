let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let button = document.querySelector('.click');
let text = document.querySelector('#text');
let detail = document.querySelector('#detail');


let number = () => {
    weight = Number(weight.value);
    height = Number(height.value);
    let num = 2;
    let number = Math.pow(height, num)
    let BMI = weight / number * 10000;
    BMI = BMI.toFixed(2);
    return text.textContent = BMI;
}

button.onclick = () => {
    let BMI = number();
    let all = ['คุณอ้วนมาก ควรลดน้ำหนัก'];

    if (isNaN(BMI)) {
        window.alert('This is not a number')
    } 
    else if(BMI >= 30){
        text.textContent = BMI;
        detail.textContent = 'คุณอ้วนมาก ควรลดน้ำหนัก';
    }
    else if(BMI >= 25){
        text.textContent = BMI;
        detail.textContent = 'อ้วนในระดับหนึ่ง ควรลดน้ำหนัก';
    }
    else if(BMI >= 18.6){
        text.textContent = BMI;
        detail.textContent = 'อยู่ในเกณฑ์ปกติ';
    }
    else{
        text.textContent = BMI;
        detail.textContent = 'น้ำหนักน้อยกว่าเกณท์ปกติ';
    }
}

