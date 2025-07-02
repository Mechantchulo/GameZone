import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode; //passing children
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
