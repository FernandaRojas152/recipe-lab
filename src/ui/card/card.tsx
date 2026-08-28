import styles from "./card.module.scss";

interface CardProps {
  children: React.ReactNode;
}
export default function Card({ children }: CardProps) {
  return <section className={styles.container}>{children}</section>;
}
