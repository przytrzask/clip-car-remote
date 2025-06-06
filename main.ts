radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendNumber(1)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendNumber(3)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendNumber(4)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendNumber(2)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.No)
    } else if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendNumber(6)
    } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendNumber(5)
    }
})
