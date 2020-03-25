const ConsoleReader = require('./ConsoleReader');
const Notebook = require('./Notebook');
const phonebookStorage = require('./PhoneBookStorage');
const MessagePrinter = require('./MessagePrinter'); 

const notebook = new Notebook(phonebookStorage);
const chooseAction = new ConsoleReader();

const main = async () => {
    MessagePrinter.printTooltip('Выберите действие.\nadd - добавить\nlist - печать\ndelete - удалить\nfind - найти\n\nДля выхода используйте команду - exit');
    const command = await chooseAction.getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await notebook.addContact();
    } else if (command === 'list') {
        await notebook.listContact();
    }else if (command === 'delete') {
        await notebook.deleteContact();
    } else if (command === 'find') {
        await notebook.findContact();
    } else if (command === 'size') {
        await Notebook.getSizeNoteBook(phonebookStorage);
    } else {
        MessagePrinter.printMessage('Неизвестная команда');
    }

    main();
};

main();

