import React from "react";

export default function ScrollingAkiraText() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 200,
          left: 0,
          width: "100vw",
          height: "fit-content",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: -1,
          overflow: "hidden"
        }}
      >
        <span
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            fontFamily: "'Sedgwick Ave Display', cursive",
            fontSize: "192px",
            color: "transparent",
            WebkitTextStroke: "2px #ECAE11",
            opacity: 1,
            animation: "akira-scroll 90s linear infinite",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none"
          }}
        >
          {"AKIRA GOLD FANG ".repeat(10)}
        </span>
      </div>
      <style>
        {`
          @keyframes akira-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </>
  );
}