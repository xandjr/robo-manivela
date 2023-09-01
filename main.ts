input.onButtonPressed(Button.A, function () {
    basic.showString("OLA! MEU NOME E MANIVELA")
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        # . . . .
        # # # # #
        `)
    led.enable(false)
    basic.pause(200)
    led.enable(true)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . # .
        # . . . #
        `)
    led.enable(false)
    basic.pause(200)
    led.enable(true)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . # .
        # . . . #
        `)
    led.enable(false)
    basic.pause(200)
    led.enable(true)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    led.enable(false)
    basic.pause(200)
    led.enable(true)
    basic.clearScreen()
    basic.showString("TO DE BRINKS")
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        # . . # .
        . . . # .
        # . . # .
        . . # . .
        `)
})
