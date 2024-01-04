import React from "react";

function Resolutions(props) {
  const { name, year, family, partner, friends, sports, leisure, academics, travel, work, finance, other } =
    props;

  return (
    <div className="finalResolutionContainer">
      <div className="finalResolution">
        <h2>{name}&apos;s - {year} -  Resolutions </h2>
        <p className="resolution">~ Family ~</p>
        <p className='answer'>{family}</p>
        <p className="resolution">~ Partner ~</p>
        <p className='answer'>{partner}</p>
        <p className="resolution">~ Friends ~</p>
        <p className='answer'>{friends}</p>
        <p className="line"></p>
        <p className="resolution">~ Sports ~</p>
        <p className='answer'>{sports}</p>
        <p className="resolution">~ Leisure ~</p>
        <p className='answer'>{leisure}</p>
        <p className="resolution">~ Academics ~</p>
        <p className='answer'>{academics}</p>
        <p className="resolution">~ Travel ~</p>
        <p className='answer'>{travel}</p>
        <p className="line"></p>
        <p className="resolution">~ Work ~</p>
        <p className='answer'>{work}</p>
        <p className="resolution">~ Finance ~</p>
        <p className='answer'>{finance}</p>
        <p className="resolution">~ Other ~</p>
        <p className='answer'>{other}</p>
        <p className="enjoy">Happy New Year!</p>
      </div>
    </div>
  );
}

export default Resolutions;