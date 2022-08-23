import SelectedText from "../components/SelectedText";

export const slidesConfig = [
  {
    hero: "./assets/heroes/hero001.png",
    title: "Black and white resumes are one-dimensional.",
    rightEmojiSrc: "./assets/emoji/emoji01.png",
    quote: (
      <>
        <SelectedText delay={1}>Soft skills</SelectedText> have become more
        important than hard or technical skills.
      </>
    )
  },
  {
    hero: "./assets/heroes/hero002.png",
    title: "⅔ of jobs will be soft skill intensive occupations by 2030.",
    rightEmojiSrc: "./assets/emoji/emoji02.png",
    quote: (
      <>
        Stand out in any college or job with a robust{" "}
        <SelectedText delay={1}>digital profile.</SelectedText>
      </>
    )
  },
  {
    hero: "./assets/heroes/hero003.png",
    title: "Own your story before someone tells it differently.",
    rightEmojiSrc: "./assets/emoji/emoji03.png",
    quote: (
      <>
        Let us help <SelectedText delay={1}>prepare</SelectedText> you for
        personal and <SelectedText delay={1.5}>professional</SelectedText>{" "}
        success.
      </>
    )
  },
  {
    hero: "./assets/heroes/hero004.png",
    title: "Do you know what kind of career you’d like to pursue?",
    rightEmojiSrc: "./assets/emoji/emoji04.png",
    quote: (
      <>
        Create a <SelectedText delay={1}>multi-dimensional</SelectedText>{" "}
        digital profile instead of traditional one.
      </>
    )
  }
];

export default slidesConfig;
