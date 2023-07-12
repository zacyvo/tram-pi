import React, { useState, useRef } from "react";



const AudioPlayer = ({ src, onClick }) => {

  const handleClick = () =>{
    var x = document.getElementById("myAudio");
    onClick()
    setTimeout(() => {
      x.play();
    }, 5000);
  }

  return (
    <div>
      <button onClick={handleClick} className="primary">
        Bắt đầu thôi
      </button>
      <audio
        id="myAudio"
        controls={false}
        src={src}>
      </audio>
    </div>
  );
};

export default AudioPlayer