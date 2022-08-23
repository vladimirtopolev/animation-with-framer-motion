import { CSSProperties, FC } from "react";
import { motion } from "framer-motion";

const styleSquare: CSSProperties = {
  position: "absolute",
  width: "8px",
  height: "8px",
  background: "rgba(255,255,255,0.3)"
};

const SelectedText: FC<{ delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <span style={{ position: "relative" }}>
      <motion.div
        style={{
          top: 2,
          left: 0,
          position: "absolute",
          width: 0,
          height: 0,
          opacity: 0
        }}
        animate={{ width: "100%", height: "80%", opacity: 1 }}
        transition={{ type: "spring", delay }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(51deg, rgba(138,69,190,1) 0%, rgba(34,119,130,1) 6%, rgba(60,92,185,1) 12%, rgba(34,38,178,1) 22%, rgba(139,66,193,1) 64%, rgba(138,69,190,1) 100%)",
            border: `2px dashed rgba(0,0,0,0.3)`
          }}
        />
        <div style={{ ...styleSquare, top: "-4px", left: "-4px" }} />
        <div style={{ ...styleSquare, top: "-4px", right: "-4px" }} />
        <div style={{ ...styleSquare, bottom: "-4px", left: "-4px" }} />
        <div style={{ ...styleSquare, bottom: "-4px", right: "-4px" }} />
      </motion.div>
      <span style={{ position: "relative", padding: "0 8px" }}>{children}</span>
    </span>
  );
};

export default SelectedText;
