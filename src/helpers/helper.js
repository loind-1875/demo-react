export function setTime(initTime) {
    var now = new Date().getTime();

    var distance = now - initTime.getTime();

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${hours}:${minutes}:${seconds}`;
}

export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}