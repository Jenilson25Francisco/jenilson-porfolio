import { MyTechs } from "@/components/techs";
import Image from "next/image";

export default function Home() {
  return (
    <section
      className="w-full bg-hero-image h-[755px] bg-center bg-cover bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb[110px]"
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full max-w-[530px]">
          <p className="text-emerald-400 text-sm mt-4">Olá eu me chamo</p>
          <p className="text-4xl font-medium mt-2">Jenilson Francisco</p>
          <h2 className="text-4xl font-bold mt-3">Sou Desenvolvedor Full Stack</h2>
          <p className="text-zinc-400 my-6 text-sm sm:text-md">
            Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            <MyTechs title="html5" imageUrl="/HTML.png" />
            <MyTechs title="css3" imageUrl="/CSS.png" />
            <MyTechs title="React" imageUrl="/React.png" />
            <MyTechs title="java" imageUrl="/java.png" />
            <MyTechs title="springboot" imageUrl="/springboot.png" />
          </div>
          <div>Contatos</div>
        </div>
        <div>
          <Image
            src="/perfil-pic.png"
            width={420}
            height={404}
            alt="profile picture"
            className="rounded-lg shadow-lg mt-6"
          />
        </div>
      </div>
    </section>
  );
}
