import React from "react";
import styles from "./FooterSection.module.css";
import Typography from "../Typography";

type FooterSectionProps = {
  title: string;
  items: string[];
};

export default function FooterSection({
  title,
  items,
  ...props
}: FooterSectionProps) {
  return (
    <div className={styles.section} {...props}>
      <Typography variantStyle="body-large-bold">{title}</Typography>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
