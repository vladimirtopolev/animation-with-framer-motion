import { useState, useEffect } from "react";

export default (countSlides: number) => {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % countSlides);
      setStep((i) => i + 1);
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [countSlides]);

  return { index, step };
};
