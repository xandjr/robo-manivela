def on_button_pressed_a():
    basic.show_string("OLA! MEU NOME E MANIVELA")
    basic.show_leds("""
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        """)
    basic.pause(1000)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)
led.enable(False)