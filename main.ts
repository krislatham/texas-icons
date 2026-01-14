//% color=#BF5700 icon="\uf005" block="Texas Icons"
namespace texasIcons {



    //% block="Cowboy Hat Icon"
    export function scrollCowboyHat(delay: number = 150) {
        const frames = [
        images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .`),
        images.createImage(`
. . . . .
. . . . .
. . . . .
# . . . .
. . . . .`),
        images.createImage(`
. . . . .
. . . . .
. . . . .
. # . . .
# . . . .`),
        images.createImage(`
. . . . .
. . . . .
. . . . .
. . # . .
# # . . .`),
        images.createImage(`
. . . . .
. . . . .
# . . . .
# . . # .
# # # . .`),
        images.createImage(`
. . . . .
# . . . .
. # . . .
. # . . #
. # # # .`),
        images.createImage(`
# . . . .
. # . . .
. . # . .
. . # . .
# # # # #`),
        images.createImage(`
. # . . .
# . # . .
. . . # .
. . . # .
# # # # #`)
        ]
        for(let frame of frames) {
            //control.inBackground(() => scrollIcon(cowboyHatFrames, 150));
            frame.showImage(0)
            basic.pause(delay)
        }
    }
 
}