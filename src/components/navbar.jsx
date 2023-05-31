import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="glass flex p-5 justify-between items-center shadow fixed w-screen z-50">
        <Link className="text-2xl font-bold" to='/'>EGG</Link>
        <div className="flex gap-5 pr-3 items-center">
            <Link className="font-medium" to='/'>Home</Link>
            <Link className="font-medium" to='/about'>About</Link>
            <Link className="font-medium" to='/contacts'>Contacts</Link>
        </div>
    </nav>
  )
}

export default Navbar