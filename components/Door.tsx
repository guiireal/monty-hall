import DoorModel from "../models/DoorModel";
import styles from "../styles/Door.module.css";
import Gift from "./Gift";

type DoorProps = {
  value: DoorModel;
  onChange: (newDoow: DoorModel) => void;
};

export default function Door(props: DoorProps) {
  const door = props.value;

  const frameSelected =
    door.selected && !door.isOpen ? styles.frameSelected : "";
  const numberSelected = door.selected ? styles.numberSelected : "";
  const handleSelected = door.selected ? styles.handleSelected : "";

  const toggleSelection = () => props.onChange(door.toggleSelection());

  const open = (event: any) => {
    event.stopPropagation();
    props.onChange(door.open());
  };

  const renderDoor = () => (
    <div className={styles.door}>
      <div className={`${styles.number} ${numberSelected}`}>{door.number}</div>
      <div
        onClick={open}
        className={`${styles.handle} ${handleSelected}`}
      ></div>
    </div>
  );

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.frame} ${frameSelected}`}>
        {door.isClose ? renderDoor() : door.hasGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
