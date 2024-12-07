import Image from "next/image"

type MyTechsProps = {
    title: string
    imageUrl: string
}

export function MyTechs({ title, imageUrl }: MyTechsProps) {
    return (
        <div className="text-primary-foreground bg-blue-900/80 text-sm px-3 rounded-lg flex items-center gap-1">
            <Image src={imageUrl} width={24} height={24} alt={title} />
            <span>{title}</span>
        </div>
    )
}