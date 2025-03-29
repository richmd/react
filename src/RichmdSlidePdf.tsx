import React, { useCallback, useState } from "react";
import { usePdf } from "./hooks/usePdf";
import { richmd } from "@richmd/js";
import parse from "html-react-parser";

type RichmdSlidePdfProps = {
  text: string;
}

export const RichmdSlidePdf: React.FC<RichmdSlidePdfProps> = ({ text }) => {
  const { html, slide } = richmd(text);
  const { isLoading, downloadPdf } = usePdf();

  const onClick = useCallback(() => {
    downloadPdf(slide);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "auto",
        overflow: "scroll",
        gap: "20px",
      }}
    >
      <button onClick={onClick} style={{ margin: "20px 0", cursor: "pointer", fontSize: "1rem" }} disabled={isLoading}>
        {isLoading ? 'Downloading....' : 'PDF Download'}
      </button>
      {parse(html)}
    </div>
  );
};
