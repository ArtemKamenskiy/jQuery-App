const body = document.querySelector("body");
const popup = document.querySelector(".popup");
const blur = document.querySelector(".blur");

function blurOn() {
    jQuery(blur).css('display', 'flex');
}

function blurOff() {
    jQuery(blur).css('display', 'none');
}

function overflowOn() {
    jQuery(body).css("overflow", "auto");
}

function overflowOff() {
    jQuery(body).css("overflow", "hidden");
}

function popupOff() {
    jQuery(popup).css("display", "none");
}

export {blurOn, blurOff, overflowOn, overflowOff, popupOff};