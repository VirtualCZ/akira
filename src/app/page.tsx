export default function Home() {
  return (
    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <div style={{ width: "35%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
        <div
          style={{
            fontFamily: "'Ranga', cursive",
            fontSize: "64px",
            fontWeight: "bold",
            color: "#FFFFFF",
            lineHeight: 1.1
          }}
        >
          Purple wolf furry<br />
          on the internet :3
        </div>
        <div
          style={{
            fontFamily: "'Ranga', cursive",
            fontSize: "48px",
            fontWeight: "normal",
            color: "#C7C7C7",
            lineHeight: 1.2
          }}
        >
          Gold-fanged furry with pink horns.<br />
          Made by with love by hand by{" "}
          <a
            href="/links?amber"
            style={{ color: "#ECAE11", textDecoration: "none", fontWeight: "bold" }}
          >
            Amber
          </a>.
        </div>
        <div
          style={{
            fontFamily: "'Ranga', cursive",
            fontSize: "32px",
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
        style={{
          position: 'relative',
          width: '65%',
          maxWidth: '100%',
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
            clipPath: 'polygon(100% 0%, 15% 0%, 0% 100%, 85% 100%)',
            zIndex: 0,
          }}
        />
        <img
          alt="badge"
          src="/badge.webp"
          draggable="false"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
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
