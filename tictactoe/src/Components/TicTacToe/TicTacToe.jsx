import React from "react";
import { useState, useRef} from "react";
import "./TicTacToe.css";
import circle_icon from "../../../public/recOG.png";
import cross_icon from "/public/delete.png";

let data = ["", "", "", "", "", "", "", "", ""];

  export const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setlock] = useState(false);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${cross_icon} alt="cross" />`;
      data[num] = "X";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src=${circle_icon} alt="circle" />`;
      data[num] = "o";
      setCount(++count);
    }
    checkwinner();
  };

  

  const checkwinner = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setlock(true);
    if ((winner = "X")) {
      titleRef.current.innerHTML = "Cross Won";
    } else {
      titleRef.current.innerHTML = "Circle Won";
    }
  };
  const Reset = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setlock(false);
    setCount(0);
    titleRef.current.innerHTML = "TicTacToe-Game with-<span> React</span>";
    let boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
  }

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        TicTacToe-Game with-
        <span> React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset" onClick={Reset}>Reset Game</button>
    </div>
  );
};

