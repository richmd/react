import React from "react";
import { richmd } from "@richmd/core";
import parse from "html-react-parser"

type RichmdProps = {
  text: string;
  id?: string;
  className?: string;
}

export const Richmd: React.FC<RichmdProps> = ({ text, id = "", className = "" }) => {
  return (
    <div id={id} className={className}>
      {parse(richmd(text))}
    </div>
  );
};
