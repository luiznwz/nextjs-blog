import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-purple-500">Luuiz</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-purple-500 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-500 transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-500 transition-colors"
            href="/"
          >
            Home
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <LoginLink className={buttonVariants()}>Login</LoginLink>
        <RegisterLink className={buttonVariants({variant: "secondary"})}>Sing up</RegisterLink>
      </div>
    </nav>
  );
}
