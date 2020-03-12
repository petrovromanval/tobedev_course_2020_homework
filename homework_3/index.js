const ConsoleReader = require('./ConsoleReader');
const Contact = require('./Contact');
const MessagePrinter = require('./MessagePrinter');

const main = async () => {
    MessagePrinter.printTooltip('Выберите действие.\nadd - добавить\nlist - печать\ndelete - удалить\nfind - найти\n\nДля выхода используйте команду - exit');
    const command = await ConsoleReader.getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await Contact.addContact();
    } else if (command === 'list') {
        await Contact.listContact();
    }else if (command === 'delete') {
        await Contact.deleteContact();
    } else if (command === 'find') {
        await Contact.findContact();
    } else {
        MessagePrinter.printMessage('Неизвестная команда');
    }

    main();
};

main();

