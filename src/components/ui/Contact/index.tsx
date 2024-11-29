import { Button } from "../Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

export default function Contact() {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute top-0 -left-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="[clip-path:_polygon(25%_0%,_74%_0,_69%_64%,_34%_73%)]"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="[clip-path:_polygon(29%_15%,_85%_30%,_50%_100%,_10%_64%)] lg:translate-y-18 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:right-10 md:left-auto lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="[clip-path:_polygon(16%_0,_89%_15%,_75%_100%,_0_97%)] md:scale-125"
          />
        </div>

        <div className="mx-auto flex max-w-[950px] flex-col items-center text-center">
          <p className="font-general mb-10 text-[10px] uppercase">
            Join Zentry
          </p>

          {/* <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] font-zentry w-full !text-5xl !leading-[.9] !font-black"
          /> */}

          <h2 className="special-font mt-5 text-center text-5xl leading-[.9] text-white md:text-[6.2rem]">
            let&apos;s b<b>u</b>ild the new era of g<b>a</b>ming t<b>o</b>
            gether.
          </h2>

          <Button>contact us</Button>
        </div>
      </div>
    </div>
  );
}
