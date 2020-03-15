function Contact(name, phone) {
    this.name = name;
    this.phone = phone;
}

Object.defineProperty(Contact, 'name', {
    writable: false
});

module.exports = Contact;

