const blur = document.querySelector(".blur");

function blurOn() {
    jQuery(blur).css('display', 'flex')
}

function blurOff() {
    jQuery(blur).css('display', 'none')
}

export {blurOn, blurOff}