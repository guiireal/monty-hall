import styles from "../styles/Card.module.css";

type CardProps = {
  bgColor?: string;
  children?: any;
};

export default function Card(props: CardProps) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.bgColor ?? "#fff" }}
    >
      {props.children}
    </div>
  );
}
