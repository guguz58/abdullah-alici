radio.onReceivedNumber(function (receivedNumber) {
    sayı = receivedNumber
})
let sayı = 0
radio.setGroup(58)
basic.forever(function () {
    if (sayı == 1) {
        basic.showIcon(IconNames.Happy)
    }
    if (sayı == 2) {
        basic.showIcon(IconNames.Asleep)
    }
    if (sayı == 3) {
        basic.showIcon(IconNames.Sad)
    }
})
