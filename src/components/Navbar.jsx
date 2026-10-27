import { FaBars, FaRegCalendarCheck } from "react-icons/fa";
import logo from "../assets/Link.png";
import { navLinks } from "../data/LandingData";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header
      className={
        "max-w-6xl backdrop-blur-2xl px-5 py-3.75 mx-4 lg:mx-auto fixed left-0 z-100 right-0 top-6 bg-linear-to-r from-[#FFFFFF] to-[#38BDF8]/45 rounded-2xl"
      }
    >
      <nav className="flex items-center justify-between">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <Button
          text={"Book Appointment"}
          icon={<FaRegCalendarCheck />}
          className={"bg-sky-500 text-white hidden md:flex"}
        />
        <button className="md:hidden">
          <FaBars />
        </button>
      </nav>
    </header>
  );
}
