import React, { useCallback, useMemo, useState } from "react";
import { richmd } from "@richmd/js";
import parse from "html-react-parser"
import useEvent from "@react-hook/event";

type RichmdSlideViewProps = {
  text: string;
  isController?: boolean;
  id?: string;
  className?: string;
}

export const RichmdSlideView: React.FC<RichmdSlideViewProps> = ({ text, isController = false }) => {
  const { slide } = richmd(text); 
  const [index, setIndex] = useState<number>(0);
  const max = slide.length - 1;
  const view = useMemo(() => parse(slide[index]), [index, slide]);

  const NextSlide = useCallback(() => {
    if (index !== max) {
      setIndex((num) => num + 1);
    }
  }, [index, max, slide]);

  const PrevSlide = useCallback(() => {
    if (index !== 0) {
      setIndex((num) => num - 1);
    }
  }, [index, slide]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Enter") {
        NextSlide();
      }
      if (e.key === "ArrowLeft" || e.key === "Backspace") {
        PrevSlide();
      }
      if (e.key === "Escape") {
        setIndex(0);
      }
    },
    [NextSlide, PrevSlide],
  );

  if (typeof window !== "undefined") {
    useEvent(window, "keydown", handleKeyDown);
  }

  return (
    <div className="richmd-slide">
      {view}
      {isController && <div className="slide-control-wrap">
        <div className="slide-control">
          <button onClick={() => PrevSlide()}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 291 338"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="slide-button"
            >
              <path d="M0 169L291 0.991089V337.009L0 169Z" fill="#71a3e3" />
            </svg>
          </button>
          <button onClick={() => NextSlide()}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 291 338"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="slide-button"
            >
              <path d="M291 169L0 337.009V0.991074L291 169Z" fill="#71a3e3" />
            </svg>
          </button>
        </div>
      </div>}
    </div>
  );
};
