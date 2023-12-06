import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="p-5">
        <div className="flex justify-between">
            <div>
              <Link>
                <img
                    width={100}
                    src="https://companieslogo.com/img/orig/FVRR_BIG-9a067792.png"    />
              </Link>
            </div>
            <nav className="flex gap-3 font-medium items-center">
                <span className="max-sm:hidden">Business Solutions</span>
                <span className="max-sm:hidden">Explore</span>
                <span className="max-sm:hidden">Become Seller</span>
                <Link to={'/login'} className="hover:text-green-500">Sign in </Link>
                <Link to={'/register'} className="hover:bg-green-500 hover:text-white text-green-500 border border-green-400 p-2 rounded"> Join Us</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header