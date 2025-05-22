import Image from "next/image";

export default function Home() {
  return (
    <div
    className="md:flex-row flex-col"
     style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <div
        className="md:w-[35%] w-[100%] md:items-start items-center" 
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
        <div
          className="2xl:text-[64px] text-[48px] items-start"
          style={{
            fontFamily: "'Ranga', cursive",
            fontWeight: "bold",
            color: "#FFFFFF",
            lineHeight: 1.1
          }}
        >
          Purple wolf furry<br />
          on the internet :3
        </div>
        <div
          className="2xl:text-[48px] text-[32px]"
          style={{
            fontFamily: "'Ranga', cursive",
            fontWeight: "normal",
            color: "#C7C7C7",
            lineHeight: 1.2
          }}
        >
          Gold-fanged furry with pink horns.<br />
          Made with love by hand by{" "}
          <a
            href="/links?amber"
            style={{ color: "#ECAE11", textDecoration: "none", fontWeight: "bold" }}
          >
            Amber
          </a>.
        </div>
        <div
          className="2xl:text-[32px] text-[24px]"
          style={{
            fontFamily: "'Ranga', cursive",
            fontWeight: "normal",
            color: "#C7C7C7",
            lineHeight: 1.2
          }}
        >
          Check out the{" "}
          <a
            href="/links"
            style={{ color: "#ECAE11", textDecoration: "none", fontWeight: "bold" }}
          >
            link tree
          </a>
        </div>
      </div>
      {/* Right 65% badge and background */}
      <div
        className="md:w-[65%] w-auto md:h-auto h-[100%]"
        style={{
          position: 'relative',
          maxWidth: '100%',
          maxHeight: '100%',
          aspectRatio: '1',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(43, 43, 43)',
            clipPath: 'polygon(90% 10%, 25% 10%, 10% 90%, 75% 90%)',
            zIndex: 0,
          }}
        />
        <Image
          alt="badge"
          src="/badge.webp"
          draggable={false}
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'contain',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 1,
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
