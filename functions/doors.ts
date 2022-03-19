import DoorModel from "../models/DoorModel";

export function createDoors(
  length: number,
  doorNumberWithGift: number
): DoorModel[] {
  return Array.from({ length }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorNumberWithGift;

    return new DoorModel(number, hasGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  doorModified: DoorModel
): DoorModel[] {
  return doors.map((door) => {
    if (door.number === doorModified.number) {
      return doorModified;
    }

    return doorModified.isOpen ? door : door.unSelect();
  });
}
