import React from "react";
import { RichmdSlidePdf } from "./RichmdSlidePdf";
import { RichmdSlideView } from "./RichmdSlideView";

type RichmdProps = {
  text: string;
  isController?: boolean;
  pdfDownload?: boolean;
  id?: string;
  className?: string;
}

export const RichmdSlide: React.FC<RichmdProps> = ({ text, isController = false, pdfDownload = false }) => {
  return (
    pdfDownload ? <RichmdSlidePdf text={text} /> : <RichmdSlideView text={text} isController={isController} />
  );
};
