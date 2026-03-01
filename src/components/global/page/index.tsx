import { clsx } from "clsx";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const pageStyles = tv({
  base: ["mx-auto"],
  variants: {
    content: {
      app: ["w-[100%] max-w-[100%]", "h-auto p-4 overflow-auto"],
      website: ["w-full lg:w-[800px]", "min-h-screen h-screen lg:h-screen"],
    },
  },
});

interface PageProps {
  className?: string;
  children: ReactNode;
  content: "app" | "website";
}

export const Page = (props: PageProps) => {
  const { content } = props;

  return (
    <main
      className={clsx(pageStyles({ content }), props.className)}
      data-page="page-content"
    >
      {props.children}
    </main>
  );
};