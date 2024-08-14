import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="flex justify-between items-center mx-auto max-w-7xl">
        <div className="flex items-center">
          <img
            className="w-20 h-20"
            src="data:image/png;base64,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"
            alt="Logo"
          />
          <h1 className="text-2xl sans serif font-bold">Huri</h1>
        </div>
        <div className="hidden sm:flex items-center justify-center space-x-5 ml-5">
          <a href="/help" className="text-md sans serif hover:text-orange-500">
            Help
          </a>
          <a href="/resource" className="text-md sans serif hover:text-orange-500">
            Resource
          </a>
          <a href="/pricing" className="text-md sans serif hover:text-orange-500">
            Pricing
          </a>
          <a href="/contactus" className="text-md sans serif hover:text-orange-500">
            Contact Us
          </a>
        </div>
        <div className="sm:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex items-center space-x-2">
          <SignedOut>
            <SignInButton className="bg-orange-500 mr-1 py-2 px-6 rounded-full" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <button className="border-orange-500 rounded-full border py-2 px-6 ml-2">
            Join
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className="sm:hidden bg-white w-full p-4">
          <nav className="flex flex-col space-y-3">
            <a href="/help" className="text-md sans serif hover:text-orange-500">
              Help
            </a>
            <a href="/resource" className="text-md sans serif hover:text-orange-500">
              Resource
            </a>
            <a href="/pricing" className="text-md sans serif hover:text-orange-500">
              Pricing
            </a>
            <a href="/contactus" className="text-md sans serif hover:text-orange-500">
              Contact Us
            </a>
          </nav>
        </div>
      )}
      <hr />
    </div>
  );
}

export default Header;
