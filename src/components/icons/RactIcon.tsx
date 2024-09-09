import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const ReactIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 4a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 12m-7 4a7 7 0 1 1 14 0a7 7 0 1 1 -14 0" />
    <path d="M12 12m-5 4a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  </svg>
);

export default ReactIcon;
