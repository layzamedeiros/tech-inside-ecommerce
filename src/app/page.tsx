import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-14">
        <div className="flex flex-row px-2 gap-50 items-center mb-10">
          <div className="mb-12 text-start gap-6">
            <div className="inline-block bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
              <p className="text-secondary text-sm font-bold tracking-widest uppercase">Loja Tech Inside</p>
            </div>
            <h1 className="text-5xl font-bold text-primary uppercase leading-tight tracking-tight">
              Periféricos de <br/> Alta Performance
            </h1>
            <p className="text-secondary text-lg leading-relaxed font-medium mt-2">Equipamentos profissionais para elevar seu setup ao próximo nível. Tecnologia de <br/> ponta com a qualidade Tech Inside.</p>
            <div className="pt-4">
              <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-xl transform hover:-translate-y-1">
                Ver Ofertas
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <div className="inline-block bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
            <p className="text-secondary text-sm font-bold tracking-widest uppercase">Loja Oficial</p>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">
            Destaques Tech Inside
          </h1>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
}