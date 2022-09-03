import React from "react";
import { IconButton } from "@material-ui/core";
import _ from "lodash";

//data
import data from "./data.json";

//icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const HorizontalScroll = () => {
  const [slideLeft, setSlideLeft] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const sliderWidth = 1900;

  //on arrow click
  const moveRight = () => {
    const el = document.getElementById(`hscroll`);
    setSlideLeft((el.scrollLeft += 200));
  };

  const moveLeft = () => {
    const el = document.getElementById(`hscroll`);
    setSlideLeft((el.scrollLeft -= 200));
  };

  if (isScrolling) {
    setTimeout(() => setIsScrolling(false), 3000);
  }

  return (
    <div className="homepageMargin">
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        {slideLeft > 0 ? (
          <IconButton onClick={moveLeft}>
            <ArrowBackIcon
              style={
                isScrolling
                  ? { display: "none" }
                  : {
                      paddingTop: ".2rem",
                      cursor: "pointer"
                    }
              }
            />
          </IconButton>
        ) : (
          <div />
        )}
        {slideLeft < sliderWidth ? (
          <IconButton onClick={moveRight}>
            <ArrowForwardIcon
              style={
                isScrolling
                  ? { display: "none" }
                  : {
                      paddingTop: ".2rem",
                      cursor: "pointer"
                    }
              }
            />
          </IconButton>
        ) : (
          <div />
        )}
      </section>

      <hr style={{ backgroundColor: "black" }} />
      <div
        class="flex-container"
        id={`hscroll`}
        onScroll={() => {
          setIsScrolling(true);
        }}
      >
        {data.map((item) => (
          <div style={{ minWidth: "300px" }}>
            <img src={item.imgSrc} alt="images" style={{ width: "18rem" }} />
            <h6>{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
