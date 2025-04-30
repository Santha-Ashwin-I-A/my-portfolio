import { navBars } from '../data/data'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";


const NavBar = () =>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = navBars;
    return (
        <div>
            <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            {/* <div className="flex items-center gap-4">
                <NavbarButton variant="secondary">Login</NavbarButton>
                <NavbarButton variant="primary">Book a call</NavbarButton>
            </div> */}
            </NavBody>
    
            {/* Mobile Navigation */}
            <MobileNav>
            <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
            </MobileNavHeader>
    
            <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            >
                {navItems.map((item, idx) => (
                <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                >
                    <span className="block">{item.name}</span>
                </a>
                ))}
                <div className="flex w-full flex-col gap-4">
                <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                >
                    Login
                </NavbarButton>
                <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                >
                    Book a call
                </NavbarButton>
                </div>
            </MobileNavMenu>
            </MobileNav>
        </Navbar>
        </div>
    );
}
export {NavBar}