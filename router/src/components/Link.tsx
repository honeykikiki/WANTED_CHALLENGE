import useRouter from "../hooks/useRouter";

type LinkProps = {
  to: string;
  children: React.ReactNode;
  state?: { [index: string]: unknown };
};

const Link = ({ to, children, state }: LinkProps) => {
  const { push } = useRouter();
  // console.log(push);
  return <button onClick={() => push(to, state)}>{children}</button>;
};

export default Link;
