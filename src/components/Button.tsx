interface ButtonProps {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
