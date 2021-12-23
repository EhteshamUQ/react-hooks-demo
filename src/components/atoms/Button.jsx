const Button = ({ title, id , onClick }) => {
  return <button id={id} onClick = {onClick}>{title}</button>;
};

export default Button;