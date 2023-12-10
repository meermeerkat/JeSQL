import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavbarLinks = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link to="/scripts" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Scripts
      </Link>
      <Link to="/upload" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Upload
      </Link>
      <Link to="/help" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Help
      </Link>
    </nav>
  );
};

export default NavbarLinks;
