import Image from "next/image"
import background from "@/assets/exlog-background.png"

export default function Home() {
  return (
    <Image
      src={background}
      quality={100}
      className="w-full h-full xl:h-dvh object-bottom object-cover"
      alt="EXLOG - Página en construcción"
    />
  )
}
