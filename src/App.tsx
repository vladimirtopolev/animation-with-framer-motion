import "./styles.css";
import Background from "./components/Background";
import Heroes from "./components/Heroes";
import useIndex from "./hooks/useIndex";
import heroes from "./config/slideConfig";
import { Quotes } from "./components/Quotes";

export default function App() {
  const { index, step } = useIndex(4);

  if (heroes.length === 0) {
    return;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#350089",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          padding: "10px 0",
          width: "100%",
          maxWidth: 420,
          aspectRatio: "720 / 840",
          //border: "1px dashed yellow",
          position: "relative"
        }}
      >
        <Background step={step} />
        <Heroes index={index} heroes={heroes} />
        <Quotes index={index} heroes={heroes} />
      </div>
    </div>
  );
}
