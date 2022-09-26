input.onButtonPressed(Button.A, function () {
    if (school == true) {
        basic.showString("go to school")
    } else {
        basic.showString("stay home")
    }
})
let school = false
school = true
