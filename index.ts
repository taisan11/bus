import { $ } from "bun"
import "node:process"

switch (process.argv[2]) {
    // install
    case 'i':
        if (process.argv.includes('-D')) {
            $`bun i -D ${process.argv[2]}`
            break
        } else {
            $`bun i ${process.argv[2]}`
            break
        }
    case 'install':
        if (process.argv.includes('-D')) {
            $`bun i -D ${process.argv[2]}`
            break
        } else {
            $`bun i ${process.argv[2]}`
            break
        }
    case 'r':
        $`bun remove ${process.argv[2]}`
        break
    case 'help':
        if (process.argv.includes('--bus')) {
            console.log(`Bus is pack cmd Bun`)
            console.log(`~~~~~~~~cmd~~~~~~~~`)
            console.log(`i, install {packagename}`)
            console.log(`SupportFlag: -D`)
            console.log(`r, remove {packagename}`)
            console.log(`h, help`)
            break
        }
        await $`bun help`.text()
        break
    default:
        console.log("default")
}