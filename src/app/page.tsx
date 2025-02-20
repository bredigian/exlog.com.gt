import Image from "next/image"
import background from "@/assets/background.webp"
import logo from "@/assets/logo.png"
import facebook from "@/assets/facebook.png"
import instagram from "@/assets/instagram.png"

export default function Home() {
  return (
    <main className="h-dvh flex flex-col gap-12 lg:gap-0 items-center justify-center lg:justify-end px-4 w-fit mx-auto">
      <Image
        src={background}
        alt="EXLOG - Página en construcción"
        quality={100}
        className="!h-dvh !w-dvh aspect-video object-cover absolute -z-10"
      />
      <div className="flex flex-col gap-12 items-center justify-center px-4 lg:flex-row">
        <Image
          alt="Logo de EXLOG"
          src={logo}
          quality={100}
          className="size-48 xl:size-56"
        />
        <div className="relative flex items-center gap-2 h-full w-full lg:py-12">
          <div className="relative w-6 h-full bg-transparent border-l-[6px] border-red-600">
            <div className="absolute -top-1 -left-1.5 w-6 h-1.5 bg-red-600"></div>
            <div className="absolute -bottom-1 -left-1.5 w-6 h-1.5 bg-red-600"></div>
          </div>
          <section className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-start py-4">
            <h1 className="text-[28px] leading-8 font-bold md:text-4xl lg:text-5xl text-white">
              ¡Grandes cosas están en camino!
            </h1>
            <p className="text-lg font-normal md:text-xl lg:text-2xl xl:text-4xl text-white">
              Estamos preparando un sitio web que revolucionará tu logística.
            </p>
          </section>
          <div className="relative w-6 h-full bg-transparent border-l-[6px] border-red-600 rotate-180">
            <div className="absolute -top-1 -left-1.5 w-6 h-1.5 bg-red-600"></div>
            <div className="absolute -bottom-1 -left-1.5 w-6 h-1.5 bg-red-600"></div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center lg:items-end gap-2 lg:self-end lg:mr-8 lg:pb-12">
        <h4 className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-widest text-white">
          ¡NO TE LO PIERDAS!
        </h4>
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src={instagram}
            quality={100}
            className="size-6 md:size-8 lg:size-10"
            alt="EXLOG - Página en construcción"
          />
          <Image
            src={facebook}
            quality={100}
            className="size-6 md:size-8 lg:size-10"
            alt="EXLOG - Página en construcción"
          />
        </div>
      </footer>
    </main>
  )
}
