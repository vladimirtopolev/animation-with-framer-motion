import { AnimatePresence, motion } from "framer-motion";

type HeroesProps = {
  index: number;
  heroes: { hero: string; title: string; rightEmojiSrc: string }[];
};
const Heroes = ({ index, heroes }: HeroesProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={index}
        style={{
          position: "absolute",
          width: "65%",
          left: "19%",
          top: "20%"
        }}
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        exit={{ x: "-50%", opacity: 0, transition: { duration: 0.2 } }}
      >
        <img src={heroes[index].hero} alt="hero" style={{ width: "100%" }} />
        <motion.img
          src={heroes[index].rightEmojiSrc}
          style={{
            width: "15%",
            top: "-25%",
            position: "absolute",
            right: "10%",
            opacity: 1,
            transformOrigin: "-50% 200%"
          }}
          initial={{ rotate: "10deg" }}
          animate={{ rotate: "-20deg" }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5
          }}
        />

        <motion.div
          style={{
            width: "60%",
            position: "absolute",
            color: "white",
            top: "0%",
            left: "110%",
            fontSize: "11px",
            fontWeight: 900,
            background:
              "linear-gradient(100.8deg, #F575FC 51.52%, #B19FDF 97.11%)",
            padding: "10px 15px",
            borderRadius: "20px"
          }}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "-60%", opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {heroes[index].title}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Heroes;
