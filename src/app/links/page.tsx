import SocialMediaCard from "../components/SocialMediaCard";

export default function Links() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-2">
      <h1 className="text-3xl font-bold mb-6">Useful Links</h1>
      <SocialMediaCard logoSrc="/telegram.svg" name="Telegram" />
      <SocialMediaCard logoSrc="/instagram.svg" name="Akira Instagram" />
      <SocialMediaCard logoSrc="/instagram.svg" name="Personal Instagram" />
      <SocialMediaCard logoSrc="/telegram.svg" name="Fursuit maker Telegram" />
      <SocialMediaCard logoSrc="/Instagram.svg" name="Fursuit maker Instagram" />
    </div>
  );
}