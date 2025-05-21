interface SocialMediaCardProps {
    name: string;
    children: React.ReactNode;
    url: string;
}

export default function SocialMediaCard({ name, children, url }: SocialMediaCardProps) {

    return (
        <a
            className="flex gap-2 select-none"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            aria-label={name}
            style={{
                clipPath: 'polygon(100% 0%, 25px 0%, 0% 100%, calc(100% - 25px) 100%)',
                backgroundColor: "#2b2b2b",
                padding: "12px 25px",
                userSelect: "none",
                textDecoration: "none",
                color: "inherit"
            }}
        >
                {children}
                <p className="text-2xl font-semibold select-none" style={{ userSelect: "none" }}>{name}</p>
        </a>
    )
}