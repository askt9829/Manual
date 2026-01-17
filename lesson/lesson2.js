const inputZone = document.getElementById('user-input-zone');
const popupContainer = document.getElementById('popup-container');
const paintBtn = document.getElementById('paint-white');

function showToast(text, color = "#b026ff") {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.background = color;
    toast.innerHTML = `✦ ${text}`;
    popupContainer.innerHTML = '';
    popupContainer.appendChild(toast);
}

inputZone.addEventListener('input', () => {
    const val = inputZone.innerText;
    const spaceMatch = val.match(/\s/g) || [];
    const dotMatch = val.match(/\./g) || [];

    if (dotMatch.length >= 3) {
        showToast("Точки введены! Теперь закрась их белым цветок.");
    } else if (spaceMatch.length >= 3) {
        showToast("ПОБЕДА! ХАЙ в центре!", "#00ff8c");
    }
});

paintBtn.addEventListener('click', () => {
    if (inputZone.innerText.includes('...')) {
        inputZone.style.color = "white";
        showToast("ИДЕАЛЬНО! Метод закрашивания освоен.", "#00ff8c");
    } else {
        showToast("Сначала введи три точки '...'");
    }
});

setTimeout(() => showToast("Начни вводить пробелы или точки перед словом"), 1000);