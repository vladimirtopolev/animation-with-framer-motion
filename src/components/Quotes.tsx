import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type QuotesProps = {
  index: number;
  heroes: { quote: ReactNode }[];
};
export const Quotes = ({ index, heroes }: QuotesProps) => {
  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "absolute",
          top: "80%",
          width: "100%",
          fontSize: 22,
          fontWeight: 900,
          color: "#ffffff",
          padding: "10px"
        }}
        key={index}
        transition={{ type: "spring" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        {heroes[index].quote}
      </motion.div>
    </AnimatePresence>
  );
};
