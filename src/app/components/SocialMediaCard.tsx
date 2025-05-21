import Image from "next/image";

interface SocialMediaCardProps {
  logoSrc: string;
  name: string;
}

export default function SocialMediaCard({ logoSrc, name }: SocialMediaCardProps) {
  return (
    <div className="flex flex-col items-center justify-center border rounded-lg shadow-md p-6 w-48 bg-white dark:bg-neutral-900">
      <Image src={logoSrc} alt={`${name} logo`} width={48} height={48} className="mb-4" />
      <span className="text-lg font-semibold">{name}</span>
    </div>
  );
}