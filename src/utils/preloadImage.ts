export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((res) => {
    const image = new Image();
    image.onload = () => res(image);
    image.src = src;
  });
};

export const preloadImages = (sources: string[]) => {
  return Promise.all(sources.map((src) => preloadImage(src)));
};
