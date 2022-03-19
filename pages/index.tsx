import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import NumberInput from "../components/NumberInput";
import styles from "../styles/Form.module.css";

export default function Home() {
  const [qtdDoors, setQtdDoors] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Qtde Portas?"
            value={qtdDoors}
            onChange={(newQtdDoors) => setQtdDoors(newQtdDoors)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Porta com Presente?"
            value={doorWithGift}
            onChange={(newDoorWithGift) => setDoorWithGift(newDoorWithGift)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${qtdDoors}/${doorWithGift}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
