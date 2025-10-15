function Header() {
    return (
        <header className="bg-blue-500 text-white p-4" box-shadow="md">
            <nav>
                <ul className="flex space-x-6 justify-center mx-auto">
                    <li><a href="#" className="hover:underline mx-auto">Home</a></li>
                    <li><a href="#" className="hover:underline mx-auto">About</a></li>
                    <li><a href="#" className="hover:underline mx-auto">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header   