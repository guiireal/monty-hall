import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import styles from "../../../styles/Game.module.css";

export default function Game() {
  const router = useRouter();

  const [doors, setDoors] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    setDoors(createDoors(doors, hasGift));
  }, [router?.query]);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;

    const qtdValidDoors = doors >= 3 && doors <= 100;

    const hasGiftValid = hasGift >= 1 && hasGift <= doors;

    setIsValid(qtdValidDoors && hasGiftValid);
  }, [doors, router.query.doors, router.query.hasGift]);

  const renderDoors = () => {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  };

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {isValid ? renderDoors() : <h2>Valores inválidos</h2>}
      </div>
      <div className={styles.buttons}>
        <Link href="/" passHref>
          <button style={{ cursor: "pointer" }}>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
