let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let button = document.querySelector('.click');
let text = document.querySelector('#text');
let detail = document.querySelector('#detail');


let number = () => {
    let weightValue = Number(weight.value);
    let heightValue = Number(height.value);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
        text.textContent = 'Invalid input';
        return NaN;
    }

    let num = 2;
    let number = Math.pow(heightValue, num);
    let BMI = weightValue / number * 10000;
    BMI = BMI.toFixed(2); 

    text.textContent = BMI;
    return BMI;
}

button.onclick = () => {
    let BMI = number();

    if (isNaN(BMI)) {
        detail.textContent = 'Please enter valid weight and height.';
        return;
    }

    if (BMI >= 30) {
        detail.textContent = 'คุณอ้วนมาก ควรลดน้ำหนัก';
    } else if (BMI >= 25) {
        detail.textContent = 'อ้วนในระดับหนึ่ง ควรลดน้ำหนัก';
    } else if (BMI >= 18.6) {
        detail.textContent = 'อยู่ในเกณฑ์ปกติ';
    } else {
        detail.textContent = 'น้ำหนักน้อยกว่าเกณท์ปกติ';
    }
}
