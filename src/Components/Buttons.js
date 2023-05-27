export const Button = ({ className, label, handleClickedButton }) => {
  return (
    <div
      className={"btn btn-" + className}
      onClick={() => handleClickedButton(label)}
    >
      {label}
    </div>
  );
};
