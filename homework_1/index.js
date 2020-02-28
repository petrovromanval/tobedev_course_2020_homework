let phoneBook = {};

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();

async function addContact() {
    console.log('Введите имя');
    const name = await getLine();
    console.log('Введите номер телефона');
    const phone = await getLine();
    phoneBook[name] = phone;
    console.log(`Вы добавили контакт ${name} с номером телефона ${phoneBook[name]}`);
}

async function deleteContact() {
    console.log('Введите имя контакта, который хотите удалить');
    const name = await getLine();
    delete phoneBook[name];
    console.log(`Вы удалили контакт ${name}`);
}

async function findContact() {
    console.log('Введите имя контакта, который хотите найти');
    const name = await getLine();
    
    if (phoneBook[name] === undefined) {
        console.log('Такого имени нет в телефонной книге');
    } else {
        console.log(`${name} - ${phoneBook[name]}`);
    }
}


const main = async () => {
    console.log('Выберите действие.\nadd - добавить\ndelete - удалить\nfind - найти\n\nДля выхода используйте команду - exit');
    const command = await getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await addContact();
    } else if (command === 'delete') {
        await deleteContact();
    } else if (command === 'find') {
        await findContact();
    } else if (command === 'circle') {
        await calculateCircleArea();
    } else {
        console.log('Неизвестная команда');
    }

    main();
};

main();
