import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white h-24">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <Image 
              src="/logo.png" 
              alt="Logo Tech Inside" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-primary leading-none">
              TECH INSIDE
            </span>
            <span className="text-[10px] font-medium tracking-[4px] text-secondary uppercase">
              Technology
            </span>
          </div>
        </Link>

        <nav className="flex gap-8 items-center">
          <Link href="/" className="text-sm font-bold text-primary hover:text-secondary uppercase transition-colors">
            Home
          </Link>
          <Link href="/sobre" className="text-sm font-bold text-primary hover:text-secondary uppercase transition-colors">
            Sobre Nós
          </Link>
        </nav>
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors">
          <ShoppingCart className="h-5 w-5" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Carrinho
          </span>
        </button>
      </div>
    </header>
  );
}