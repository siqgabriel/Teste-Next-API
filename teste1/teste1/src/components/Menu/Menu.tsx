import Link from "next/link";

export default function Menu() {
    return(
        <nav className="menu">
            <ul className="text-white flex flex-row">
                <li className="px-5"> <Link href="/">Home</Link> </li>
                <li> <Link href="/produtos">Produtos</Link> </li>
            </ul>
        </nav>
    )
}