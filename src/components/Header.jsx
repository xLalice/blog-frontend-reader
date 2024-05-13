import { NavLink, Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="py-4">
            <div className="container mx-auto">
                <Link to="/" className="text-white font-bold text-3xl font-lobster">
                    Dead Poets Society
                </Link>
            </div>
        </header>
    )
}
