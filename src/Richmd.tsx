import React from "react";
import { richmd } from "@richmd/js";
import parse from "html-react-parser"

type RichmdProps = {
  text: string;
  useSlideMode?: boolean;
  id?: string;
  className?: string;
}

export const Richmd: React.FC<RichmdProps> = ({ text, useSlideMode = true, id = "", className = "" }) => {
  const { html } = richmd(text, useSlideMode);

  return (
    <div id={id} className={className}>
      {parse(html)}
    </div>
  );
};
