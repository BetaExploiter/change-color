const btn = document.getElementById('buton');
let randomNumber = () => {
    let sayi = (Math.floor(Math.random() * 256));
    return sayi;
}
let renkdegis = () => {
    let sayirenk = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    document.body.style.backgroundColor = sayirenk;
}
btn.addEventListener('click', renkdegis);
window.addEventListener('load', renkdegis);