export default function Navigation({ links }) {
    return (
        <ul>
            {links.map((link) => <li key={link.key}> {link} </li>)}
        </ul>
    );
}