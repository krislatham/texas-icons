//% color=#BF5700 icon="\uf005" block="Texas Icons"
namespace texasIcons {

    //% block="Show Cowboy Hat Icon with Delay"
    //% delay.defl=150
    //% delay.min=20 delay.max=1000
    export function showCowboyHatIcon(delay: number = 150) {
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
        
        scrollFrames(frames, delay)
    }

    //% blockHidden=true
    function scrollFrames(frames: Image[], delay: number): void {
        for (let frame of frames) {
            frame.showImage(0)
            basic.pause(delay)
        }
    }
 
}