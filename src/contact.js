export default (() => {
    const content = document.querySelector('#content');
    const hours = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 6pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm',];
    const locationLines = ['12345 Main Street', 'Fort Worth, TX', '00000-0000']

    function render() {
        // Title
        const title = document.createElement('h1');
        title.textContent = 'Contact Sky Cafe';
        content.appendChild(title)

        // Hours
        const hoursTitle = document.createElement('h2');
        hoursTitle.textContent = 'Hours';
        content.appendChild(hoursTitle);
        for (const hour of hours) {
            const p = document.createElement('p');
            p.textContent = hour;
            content.appendChild(p);
        }

        // Location
        const locationTitle = document.createElement('h2');
        locationTitle.textContent = 'Location';
        content.appendChild(locationTitle);
        for (const line of locationLines) {
            const location = document.createElement('p');
            location.textContent = line;
            content.appendChild(location);
        }

        // Contact phone numbers
        const phoneTitle = document.createElement('h2');
        phoneTitle.textContent = 'Phone';
        content.appendChild(phoneTitle);
        const frontPhone = document.createElement('p');
        frontPhone.textContent = 'Front desk: (555) 555-5555';
        content.appendChild(frontPhone);
        const managerPhone = document.createElement('p');
        managerPhone.textContent = 'Location manager: (555) 555-5555';
        content.appendChild(managerPhone);
        const ownerPhone = document.createElement('p');
        ownerPhone.textContent = 'Owner: (555) 555-5555';
        content.appendChild(ownerPhone);

        // Email
        const emailTitle = document.createElement('h2');
        emailTitle.textContent = 'Email';
        content.appendChild(emailTitle);
        const email = document.createElement('p');
        email.textContent = 'support@skycafe.com';
        content.appendChild(email);

        // Form submission
        const contactFormTitle = document.createElement('h2');
        contactFormTitle.textContent = 'Send us a message!';
        content.appendChild(contactFormTitle);
        const contactForm = document.createElement('form');
        const formNameInput = document.createElement('input');
        formNameInput.setAttribute('type', 'text');
        formNameInput.setAttribute('placeholder', 'Name');
        contactForm.appendChild(formNameInput);
        const formSubjectInput = document.createElement('input');
        formSubjectInput.setAttribute('type', 'text');
        formSubjectInput.setAttribute('placeholder', 'Subject');
        contactForm.appendChild(formSubjectInput);
        const formMessageInput = document.createElement('textarea');
        formMessageInput.setAttribute('placeholder', 'Message');
        formMessageInput.setAttribute('rows', '10');
        contactForm.appendChild(formMessageInput);
        const submitFormButton = document.createElement('button');
        submitFormButton.textContent = 'Send Message';
        submitFormButton.addEventListener('click', (event) => {
            event.preventDefault();
        })
        contactForm.appendChild(submitFormButton);
        content.appendChild(contactForm);
    };

    return { render };
})();