import { Watermark } from "antd";

export default function Home() {
  return (
    <Watermark content="Micro Frontend">
      <div
        style={{
          height: 500,
          margin: 16,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Home Page (Host App)</h2>
      </div>
    </Watermark>
  );
}
