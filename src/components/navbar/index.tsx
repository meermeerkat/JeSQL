import { ModeToggle } from "../mode-toggle";
import NavbarLinks from "./NavbarLinks";
import ScriptSwitcher from "./ScriptSwitcher";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <ScriptSwitcher/>
        <NavbarLinks className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ModeToggle/>
        </div>
      </div>
    </div>
  );
};


export default Navbar;