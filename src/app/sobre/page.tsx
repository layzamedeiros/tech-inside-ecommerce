import { Header } from "@/components/Header";
import { Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';
import Image from "next/image";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-6">

        <section className="bg-white py-14">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div  className="inline-block bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
                <p className="text-secondary text-sm font-bold tracking-widest uppercase">
                  Quem Somos
                </p>
              </div>
              <h1 className="text-5xl font-bold text-primary uppercase leading-tight tracking-tight">
                Inovação e Performance <br/> para o seu setup
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mt-2">
                Somos a Tech Inside. Nascemos com a missão de equipar desenvolvedores e gamers com o que há de melhor no mercado mundial. Não vendemos apenas hardware, vendemos performance.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 text-white">
          <div className="bg-secondary p-16">
            <Zap className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-xl font-bold tracking-wider uppercase mb-4">
              Qualidade Extrema
            </h3>
            <p className="text-gray-100 leading-relaxed">
              Trabalhamos apenas com marcas premium e produtos testados para aguentar o uso intenso do dia a dia.
            </p>
          </div>
          
          <div className="bg-primary p-16">
            <Users className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-xl font-bold tracking-wider uppercase mb-4">
              Foco no Cliente
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Nosso time é formado por especialistas que entendem do assunto e falam a sua língua.
            </p>
          </div>
          
          <div className="bg-dark p-16">
            <TrendingUp className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-xl font-bold tracking-wider uppercase mb-4">
              Tecnologia de Ponta
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Sempre atualizados com os lançamentos mais recentes do mercado global de hardware.
            </p>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4 flex gap-16 items-center">
          <div className="w-full md:w-1/2 relative h-[400px] bg-gray-50 rounded-lg"> 
            <Image
              src="/logo-sobre.png"
              alt="Logo Tech Inside"
              fill
              className="object-contain p-8" 
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-wide mb-6">
              Nossa Missão
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Especializada em equipamentos de alta performance, a Tech Inside oferece uma curadoria cuidadosa. Nossa missão é elevar a experiência dos nossos clientes através de produtos premium.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {["Produtos Originais", "Entrega Rápida", "Garantia Estendida", "Suporte Técnico", "Preço Justo", "Compra Segura"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-primary text-white py-8 text-center">
        <p className="text-sm opacity-80">
          © 2025 Tech Inside. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}