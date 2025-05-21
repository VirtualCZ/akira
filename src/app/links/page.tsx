import { Instagram, Send } from "lucide-react";
import SocialMediaCard from "../components/SocialMediaCard";

export default function Links() {
    return (
        <div className="flex flex-col w-[50%] gap-3">
            <h1 className="text-3xl font-bold">Links</h1>
            <SocialMediaCard name="Telegram" url="https://t.me/AkiraGoldFang">
                <Send size={32} color="#821880" />
            </SocialMediaCard>
            <SocialMediaCard name="Akira Instagram" url="https://www.instagram.com/akira.gold.fang/">
                <Instagram size={32} color="#821880" />
            </SocialMediaCard>
            <SocialMediaCard name="Personal Instagram" url="https://www.instagram.com/tomas_v_chill/">
                <Instagram size={32} color="#821880" />
            </SocialMediaCard>
            <SocialMediaCard name="Fursuit maker Telegram" url="https://t.me/AmberzH3llP1t">
                <Send size={32} color="#821880" />
            </SocialMediaCard>
            <SocialMediaCard name="Fursuit maker Instagram 1" url="https://www.instagram.com/_amber.bites_/">
                <Instagram size={32} color="#821880" />
            </SocialMediaCard>
            <SocialMediaCard name="Fursuit maker Instagram 1" url="https://www.instagram.com/ambyspit/">
                <Instagram size={32} color="#821880" />
            </SocialMediaCard>
        </div>
    );
}