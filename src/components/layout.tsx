import { Sen } from "next/font/google";
import type { ReactNode } from "react";

const font = Sen({ weight: "400", subsets: [] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        className={`${[
          "min-h-screen",
          "w-full",
          "items-center",
          "justify-center",
          "bg-gradient-to-b",
          "from-[#ffffff]",
          "to-[#d6d6d0]",
        ].join(" ")}`}
      >
        <div className={`${["max-w-xl", "mx-auto"].join(" ")}`}>
          <h1
            className={`${[
              "${font.className}",
              "text-5xl",
              "tracking-tight",
              "text-black",
              "sm:text-[5rem]",
              "my-6",
            ].join(" ")}`}
          >
            Dan Stevenson
          </h1>
          <main className={`${font.className} my-6`}>{children}</main>
        </div>
      </div>
    </>
  );
}
