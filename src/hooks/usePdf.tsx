import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

export const usePdf = () => {
  const [isLoading, setLoading] = useState(false);

  const downloadPdf = async (
    slide: string[],
    fileName?: string,
    nextAction?: () => void,
    prevAction?: () => void,
  ) => {
    setLoading(true);
    const slideLength = slide.length;

    if (prevAction) prevAction();
    // Get the width and height of the slide
    const target = document.getElementById(`slide-1`);
    if (target === null) {
      console.error("The slide does not exist.");
      return;
    }

    const { width, height } = await html2canvas(target);
    const pdf = new jsPDF({
      orientation: "l",
      unit: "px",
      format: [width / 5, height / 5],
      compress: true,
    });

    for (let i = 1; i <= slideLength; i++) {
      const target = document.getElementById(`slide-${i}`);
      if (target === null) {
        console.log(`slide-${i}`);
        console.error("The slide does not exist.");
        return;
      }
      const canvas = await html2canvas(target);
      const imgData = canvas.toDataURL("image/svg", 1);
      if (nextAction) nextAction();
      pdf.addImage(imgData, "SVG", 0, 0, canvas.width / 5, canvas.height / 5, `slide-${i}`);
      if (i !== slideLength) pdf.addPage();
    }
    pdf.save(fileName ?? "richmd_slide.pdf");
    setLoading(false);
  };
  return { downloadPdf, isLoading };
};
