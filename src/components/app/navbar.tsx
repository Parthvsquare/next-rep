import Link from "next/link";
import { Home } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2 text-primary">
          <Home size={24} />
          <span className="font-bold">AI Sales Dashboard</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-muted-foreground hover:text-primary">
          Home
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
