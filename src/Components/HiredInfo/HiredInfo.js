import React from "react";

const HiredInfo = (props) => {
  const info = props.hiredInfo;
  return (
      <div>
      <p>{info.name}</p>
    </div>
  );
};

export default HiredInfo;
