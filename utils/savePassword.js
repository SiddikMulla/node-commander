import fs from "fs"
import path from "path"
import os from "os"

import chalk from "chalk"

const savePassword = (password) => {
    fs.open(path.join(__dirname, "../", "password.txt"), "a", 666, (e, id) => {
        fs.write(id, password + os.EOL, null, "utf-8", () => {
            fs.close(id, () => {
                console.log(chalk.yellow("password Saved to Password.txt"))
            })
        })
    })
}
export default savePassword