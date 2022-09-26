input.onButtonPressed(Button.A, function () {
    if (number == 0) {
        basic.showIcon(IconNames.Sad)
    } else if (number == 1) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let number = 0
number = randint(0, 2)
