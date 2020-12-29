const body = document.querySelector("body");
const popup = document.querySelector(".popup");
const popupUserInfo = document.querySelector(".popup__user-info");
const blur = document.querySelector(".blur");
const closeBtn = document.querySelector(".close__btn");
const closeBtnSecond = document.querySelector(".close__btn-second");
const userInfoMain = document.querySelector(".user-info__list-main");
const address = document.querySelector('.user-info__list-address');
const company = document.querySelector('.user-info__list-company');

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

function popupUserOff() {
    jQuery(popupUserInfo).css("display", "none");
}

function popupOn() {
    jQuery(popupUserInfo).css("display", "flex");
}

function clearPopupInfo() {
    jQuery(userInfoMain).empty();
    jQuery(address).empty();
    jQuery(company).empty();
}

function popupClose() {
    overflowOff();
    jQuery(closeBtn).on('click', function () {
        popupOff();
        blurOff();
        overflowOn();
    })
    jQuery(closeBtnSecond).on('click', function () {
        clearPopupInfo();
        popupUserOff();
        blurOff();
        overflowOn();
    })
}

export {blurOn, blurOff, overflowOn, overflowOff, popupOff, popupClose, popupOn, popupUserOff, clearPopupInfo};