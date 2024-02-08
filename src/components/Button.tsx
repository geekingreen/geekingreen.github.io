import { styled } from "goober";

const Button = styled("button")`
  background-color: #bada55;
  color: #000;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #cbeb66;
  }
  &:active {
    background-color: #a9d948;
  }
`;

export default Button;
