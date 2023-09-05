import React, { ReactNode } from "react";
type PropTypes = {
  heading: string;
  count?: number;
  func1: (b: string) => void;
  children: ReactNode;
};

const Box = ({ heading, count = 2, func1, children }: PropTypes) => {
  func1("hdsf");
  return (
    <div>
      <h1>{heading}</h1>
      <h2>{count}</h2>
      {children}
    </div>
  );
};

export default Box;
