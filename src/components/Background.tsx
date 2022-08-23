import { motion, AnimatePresence } from "framer-motion";

export default ({ step }: { step: number }) => {
  return (
    <>
      <motion.img
        src="./assets/bg-layer01.svg"
        style={{
          position: "absolute",
          top: "18.2%",
          left: "10.9%",
          width: "70.7%",
          height: "62.7%"
        }}
        alt="bg layer 01"
        animate={{ rotate: -40 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4
        }}
      />
      <motion.img
        src="./assets/bg-layer02.svg"
        style={{
          position: "absolute",
          top: "13.7%",
          left: "2.4%",
          width: "81.7%",
          height: "56%"
        }}
        alt="bg layer 02"
        animate={{ rotate: 60 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3
        }}
      />
      <motion.img
        src="./assets/bg-layer03.svg"
        style={{
          position: "absolute",
          top: "25.2%",
          left: "17.7%",
          width: "66.5%",
          height: "53.9%"
        }}
        alt="bg layer 03"
        animate={{ rotate: 40 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4
        }}
      />
      <motion.img
        src="./assets/bg-rotator01.svg"
        style={{
          position: "absolute",
          top: "27.1%",
          left: "16.6%",
          width: "32.9%",
          height: "22.1%",
          transformOrigin: "100% 120%"
        }}
        animate={{ rotate: -360 * (step + 1) }}
        transition={{ duration: 1.5, type: "spring" }}
        alt="bg rotator 01"
      />
      <motion.img
        src="./assets/bg-rotator02.png"
        style={{
          position: "absolute",
          top: "50%",
          left: "70.1%",
          width: "16.5%",
          height: "14.5%",
          transformOrigin: "-120% 50%"
        }}
        animate={{ rotate: -360 * (step + 1) }}
        transition={{ duration: 1.5, type: "spring" }}
        alt="bg rotator 02"
      />
      <motion.img
        src="./assets/bg-rotator03.png"
        style={{
          position: "absolute",
          top: "53.8%",
          left: "38.8%",
          width: "45.4%",
          height: "40.2%",
          zIndex: 1000,
          transformOrigin: "92% 47%"
        }}
        animate={{ rotate: 360 * (step + 1) }}
        transition={{ duration: 1.5, type: "spring" }}
        alt="bg rotator 03"
      />
    </>
  );
};
