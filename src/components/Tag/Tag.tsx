import "./Tag.scss";

type TagProps = {
  /** text of the tag */
  text: string;
};

export const Tag = ({ text }: TagProps) => {
  return <div className="tag">{text}</div>;
};
