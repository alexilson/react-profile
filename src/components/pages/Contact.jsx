import { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleInputChange(e) {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        (inputType === 'email') ? setEmail(inputValue) : (
            (inputType === 'name') ? setName(inputValue) : (
                setMessage(inputValue)
            )
        )

        if (!inputValue) {
            return setErrorMessage(`You must enter something into the ${inputType} field.`)
        }

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Thank you, ${name}, for the message.`)

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
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
                    onBlur={handleInputChange}
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    required={true}
                    onBlur={handleInputChange}
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                    required={true}
                    onBlur={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <alert>{errorMessage}</alert>
                </div>
            )}
        </div>
    );

}

export default Contact;