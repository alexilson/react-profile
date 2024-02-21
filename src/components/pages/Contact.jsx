import { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    function handleInputChange(e) {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        (inputType === 'email') ? setEmail(inputValue) : (
            (inputType === 'name') ? setName(inputValue) : (
                setMessage(inputValue)
            )
        )
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Thank you, ${name}, for the message.`)

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    required={true}
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    required={true}
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                    required={true}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    );

}

export default Contact;