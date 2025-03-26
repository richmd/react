import React from "react";
import { richmd } from "@richmd/js";
import parse from "html-react-parser"

type RichmdProps = {
  text: string;
  id?: string;
  className?: string;
}

export const Richmd: React.FC<RichmdProps> = ({ text, id = "", className = "" }) => {
  const { html } = richmd(text);

  return (
    <div id={id} className={className}>
      {parse(html)}
    </div>
  );
};
