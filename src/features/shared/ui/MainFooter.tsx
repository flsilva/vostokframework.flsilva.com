import { A, P, SmallText } from "./typography/Typography";

export const MainFooter = () => (
  <footer className="flex flex-col items-center bg-[#5c0004]">
    <div className="grid gap-y-6 w-full lg:max-w-5xl p-8">
      <P className="text-base">
        Code licensed under{" "}
        <A
          className="text-base"
          href="http://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          The MIT License (MIT)
        </A>
        .<br />
        This site and all documentation licensed under{" "}
        <A
          className="text-base"
          href="http://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons Attribution-ShareAlike
        </A>
        .<br />
      </P>
      <SmallText>
        © 2025{" "}
        <A
          className="text-sm"
          href="https://flsilva.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flavio Silva
        </A>
      </SmallText>
    </div>
  </footer>
);
