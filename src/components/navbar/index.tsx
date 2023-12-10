import { ModeToggle } from "../mode-toggle";
import NavbarLinks from "./NavbarLinks";
import Search from "./search";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        {/* <TeamSwitcher /> */}
        <NavbarLinks className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ModeToggle/>
          {/* <UserNav /> */}
        </div>
      </div>
    </div>
  );
};


export default Navbar;