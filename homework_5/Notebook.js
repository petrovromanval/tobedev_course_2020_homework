const ConsoleReader = require('./ConsoleReader');
const {Contact, Family} =require('./Contact');
const MessagePrinter = require('./MessagePrinter');

const action = new ConsoleReader();

class Notebook {

    constructor(phonebookStorage){
        this.phonebookStorage = phonebookStorage;
    }
    
    async addContact() {
        MessagePrinter.printTooltip('Введите имя латинскими буквами. Длина имени должна быть не менее шести символов');
        let name = await action.getLine();
        let checkedName = checkName(name);
        function checkName(name) {
            var nameno =/[a-zA-Z]{6,}$/;
            if (name.match(nameno)) {
                return true;
            } else {
                return false;
            }
        }
        while (!checkedName) {
                MessagePrinter.printError('Вы ввели Имя в неправильном формате, попробуйте еще раз');
                name = await action.getLine();
                checkedName = checkName(name);
        }

        MessagePrinter.printTooltip('Введите номер телефона в формате +7XXXXXXXXXX или 8XXXXXXXXXX');
        let phone = await action.getLine();
        let checkedPhone = checkPhone(phone);
        function checkPhone(phone) {
            var phoneno = /^((\+7|7|8)+([0-9]){10})$/;
            if (phone.match(phoneno)) {
                return true;
            } else {
                return false;
            }
        }
        while (!checkedPhone) {
                MessagePrinter.printError('Вы ввели Номер в неправильном формате, попробуйте еще раз');
                phone = await action.getLine();
                checkedPhone = checkPhone(phone);
        }

        const contact = new Contact(name, phone);
        this.phonebookStorage.push(contact);
        MessagePrinter.printMessage(`Вы добавили контакт c именем ${contact.name} и номером ${contact.phone}`);
    }

    async listContact() {
        MessagePrinter.printMessage ('В телефонной книге находятся:')
         for (let i = 0; i < this.phonebookStorage.length; i++){
            const contact = this.phonebookStorage[i];
            MessagePrinter.printMessage(`контакт с именем ${contact.name} и номером ${contact.phone}`);
        }
    }

    async deleteContact() {
        MessagePrinter.printTooltip('Введите имя контакта, который хотите удалить');
        const name = await action.getLine();


        for (let i = 0; i < this.phonebookStorage.length; i++) {
            const contact = this.phonebookStorage[i];
            if (contact.name === name) {
                this.phonebookStorage.splice(i, 1);
                MessagePrinter.printMessage(`Вы удалили контакт с именем ${name}`);
            } else {
                MessagePrinter.printError('Такого имени нет в телефонной книге');
            }
        }   
    }

    async findContact() {
        MessagePrinter.printTooltip('Введите имя контакта, который хотите найти');
        const name = await action.getLine();
        
        for (let i = 0; i < this.phonebookStorage.length; i++) {
            const contact = this.phonebookStorage[i];
            if (contact.name === name) {
                MessagePrinter.printMessage(`Найден контакт с именем ${contact.name} и номером ${contact.phone}`);
            } else {
                MessagePrinter.printError('Такого имени нет в телефонной книге');
            }
        }
    }

    static getSizeNoteBook() {
        MessagePrinter.printMessage(phoneBookStorage.length);
    }
}

module.exports = Notebook;