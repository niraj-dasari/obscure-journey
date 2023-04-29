import { Link } from "react-router-dom";
import logo  from '../assets/presistent-logo.svg';

const Header = () => {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="" srcset="" height={"23px"} width={"23px"} />
                    <span class="ml-1 text-xl">Persistent</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link class="mr-5 hover:text-gray-900" to="">Employees</Link>
                    <Link class="mr-5 hover:text-gray-900" to='certification'>Certification</Link>
                    <Link class="mr-5 hover:text-gray-900" to='project'>Projects</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;