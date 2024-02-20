export default function Navigation({ links }) {
    console.log(links)
    return (
        <ul>
            {links.map((link) => <li key={link.id}> {link} </li>)}
        </ul>
    );
}