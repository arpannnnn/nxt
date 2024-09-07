import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div>

            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M921 733L591 162q-19-35-55-47t-72 0-55 47L79 733q-20 34-13 71t36 62 68 25h660q39 0 68-25t36-62-13-71zm-351 28q0 18-13 31t-31 13h-52q-18 0-31-13t-13-31v-44q0-18 13-30.5t31-12.5h51q19 0 32 12.5t13 30.5v44zm-11-181q0 19-12 31.5T517 624h-34q-18 0-30-12.5T441 580l-15-248q-1-17 14-30t34-13h52q19 0 34 13t14 30z"/></svg>
                        <span className="ml-3 text-xl">COLBERT</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                        <Link href='/' className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href='/' className="mr-5 hover:text-gray-900">About</Link>
                        <Link href='/' className="mr-5 hover:text-gray-900">Services</Link>
                        <Link href='/' className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Login</button>

                </div>
            </header>


        </div>
    )
}

export default Navbar