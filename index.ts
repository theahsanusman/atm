import inquirer from "inquirer";

type UserData = {
    user_id: string,
    pin: number
}

let userData: UserData = {
    user_id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    pin: Number(Math.random().toString().slice(2, 6)),
}
function atm() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'user_id',
            message: "Enter your user Id"
        },
        {
            type: "password",
            name: 'pin',
            message: "Enter your pin"
        }
    ]).then(answer => {
        if (answer.user_id === userData.user_id && answer.pin === userData.pin) {
            console.log('Access granted. ATM functionalities unlocked.');
        } else {
            console.log('Access denied. Incorrect user id or pin.');
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'tryAgain',
                    message: 'Would you like to try again?',
                    default: true
                }
            ]).then(res => {
                if (res.tryAgain) atm();
            })
        }
    })
}
atm();