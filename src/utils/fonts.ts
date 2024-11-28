import localFont from "next/font/local";

export const circularWeb = localFont({
  src: [
    {
      path: "../../public/fonts/circularweb-book.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-circular-web",
});

export const zentry = localFont({
  src: [
    {
      path: "../../public/fonts/zentry-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-zentry",
});

export const general = localFont({
  src: [
    {
      path: "../../public/fonts/general.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-general",
});

export const robert = localFont({
  src: [
    {
      path: "../../public/fonts/robert-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/robert-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-robert",
});
