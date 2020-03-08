const ConsoleReader = require('./ConsoleReader');
const PhoneBook = require('./PhoneBook');
const MessagePrinter = require('./MessagePrinter');

async function addContact() {
    MessagePrinter.printTooltip('Введите имя');
    const name = await ConsoleReader.getLine();
    MessagePrinter.printTooltip('Введите номер телефона');
    const phone = await ConsoleReader.getLine();
    PhoneBook[name] = phone;
    MessagePrinter.printMessage(`Вы добавили контакт c именем ${name} и номером ${PhoneBook[name]}`);
}

async function listContact() {
    MessagePrinter.printMessage ('В телефонной книге находятся:')
     for (let key in PhoneBook){
        MessagePrinter.printMessage(`контакт с именем ${key} и номером ${PhoneBook[key]}`);
    }
}

async function deleteContact() {
    MessagePrinter.printTooltip('Введите имя контакта, который хотите удалить');
    const name = await ConsoleReader.getLine();
    if (PhoneBook[name] === undefined) {
        MessagePrinter.printError('Такого имени нет в телефонной книге');
    } else {
        delete PhoneBook[name];
        MessagePrinter.printMessage(`Вы удалили контакт с именем ${name}`);
    }
    
}

async function findContact() {
    MessagePrinter.printTooltip('Введите имя контакта, который хотите найти');
    const name = await ConsoleReader.getLine();
    
    if (PhoneBook[name] === undefined) {
        MessagePrinter.printError('Такого имени нет в телефонной книге');
    } else {
        MessagePrinter.printMessage(`Найден контакт с именем ${name} и номером ${PhoneBook[name]}`);
    }
}

module.exports.addContact = addContact;
module.exports.listContact = listContact;
module.exports.deleteContact = deleteContact;
module.exports.findContact = findContact;

