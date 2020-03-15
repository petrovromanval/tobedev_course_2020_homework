const ConsoleReader = require('./ConsoleReader');
const Contact = require('./Contact');
const MessagePrinter = require('./MessagePrinter');

const PhoneBook = {

    contacts: [],

    async addContact() {
        MessagePrinter.printTooltip('Введите имя латинскими буквами. Длина имени должна быть не менее шести символов');
        let name = await ConsoleReader.getLine();
        let checkedName = checkName(name);
        function checkName(name) {
            var nameno =/[a-zA-Z]{6,}$/;
            if (name.match(nameno)) {
                return true;
            } else {
                return false;
            }
        }
        for (;;){
            if (checkedName == true){
                break
            } else {
                MessagePrinter.printError('Вы ввели Имя в неправильном формате, попробуйте еще раз');
                name = await ConsoleReader.getLine();
                checkedName = checkName(name);
            }
        }

        MessagePrinter.printTooltip('Введите номер телефона в формате +7XXXXXXXXXX или 8XXXXXXXXXX');
        let phone = await ConsoleReader.getLine();
        let checkedPhone = checkPhone(phone);
        function checkPhone(phone) {
            var phoneno = /^((\+7|7|8)+([0-9]){10})$/;
            if (phone.match(phoneno)) {
                return true;
            } else {
                return false;
            }
        }
        
        for (;;){
            if (checkedPhone == true){
                break
            } else {
                MessagePrinter.printError('Вы ввели Номер в неправильном формате, попробуйте еще раз');
                phone = await ConsoleReader.getLine();
                checkedPhone = checkPhone(phone);
            }
        }
        /*Попробовал более краткую запись. !checkedPhone значит - выполнять дествия пока checkedPhone = false
        while (!checkedPhone) {
            MessagePrinter.printError('Вы ввели номер в неправильном формате, попробуйте еще раз');
            phone = await ConsoleReader.getLine();
            checkedPhone = checkPhone(phone);
        }*/

        const contact = new Contact(name, phone);
        this.contacts.push(contact);
        MessagePrinter.printMessage(`Вы добавили контакт c именем ${contact.name} и номером ${contact.phone}`);
    },

    async listContact() {
        MessagePrinter.printMessage ('В телефонной книге находятся:')
         for (let i = 0; i < this.contacts.length; i++){
            const contact = this.contacts[i];
            MessagePrinter.printMessage(`контакт с именем ${contact.name} и номером ${contact.phone}`);
        }
    },

    async deleteContact() {
        MessagePrinter.printTooltip('Введите имя контакта, который хотите удалить');
        const name = await ConsoleReader.getLine();

        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            if (contact.name === name) {
                this.contacts.splice(i, 1);
                MessagePrinter.printMessage(`Вы удалили контакт с именем ${contact.name}`);
            } else {
                MessagePrinter.printError('Такого имени нет в телефонной книге');
            }
        }   
    },

    async findContact() {
        MessagePrinter.printTooltip('Введите имя контакта, который хотите найти');
        const name = await ConsoleReader.getLine();
        
        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            if (contact.name === name) {
                MessagePrinter.printMessage(`Найден контакт с именем ${contact.name} и номером ${contact.phone}`);
            } else {
                MessagePrinter.printError('Такого имени нет в телефонной книге');
            }
        }
    }
};

module.exports = PhoneBook;