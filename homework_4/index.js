const ConsoleReader = require('./ConsoleReader');
const PhoneBook = require('./PhoneBook');
const MessagePrinter = require('./MessagePrinter');

const main = async () => {
    MessagePrinter.printTooltip('Выберите действие.\nadd - добавить\nlist - печать\ndelete - удалить\nfind - найти\n\nДля выхода используйте команду - exit');
    const command = await ConsoleReader.getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await PhoneBook.addContact();
    } else if (command === 'list') {
        await PhoneBook.listContact();
    }else if (command === 'delete') {
        await PhoneBook.deleteContact();
    } else if (command === 'find') {
        await PhoneBook.findContact();
    } else {
        MessagePrinter.printMessage('Неизвестная команда');
    }

    main();
};

main();

