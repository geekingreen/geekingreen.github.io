import { styled } from "goober";

const SIZES = {
  p: "1rem",
  h1: "4rem",
  h2: "3rem",
  h3: "2.5rem",
  h4: "2rem",
  h5: "1.5rem",
  h6: "1rem",
};

const Typography = styled("p")((props) => ({
  color: "lime",
  fontFamily: "Space Mono",
  textAlign: 'center',
  // @ts-expect-error might not map to size
  fontSize: SIZES[props.as] || "1rem",
  margin: 0,
}));

export default Typography;
