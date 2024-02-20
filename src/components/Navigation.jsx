export default function Navigation({ links }) {
    return (
        <ul>
            {links.map((link) => link)}
        </ul>
    );
}