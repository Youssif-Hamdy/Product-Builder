import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
  onClick: () => void;
}

const Ccolor = ({ color, onClick, ...rest }: IProps) => {
  return (
    <span
      className={`block w-5 h-5 rounded-full cursor-pointer mp-1`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      {...rest}
    />
  );
};

export default Ccolor;
