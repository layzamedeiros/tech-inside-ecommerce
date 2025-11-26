import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product; 
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white border border-muted hover:border-secondary transition-all duration-300 overflow-hidden rounded-lg">
      
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-primary font-bold text-lg uppercase tracking-wide mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-secondary/80 text-sm mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-dashed border-muted/50">
          <div className="text-primary font-bold text-lg">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </div>
          
          <button className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded transition-colors text-sm font-bold uppercase tracking-wider">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
}