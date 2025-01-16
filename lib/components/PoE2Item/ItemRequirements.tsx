import { type Item } from "poe-item-parser";

import { ItemSeparator } from "./ItemSeparator";

interface ItemRequirementsProps {
  item: Item;
}

export function ItemRequirements({ item }: ItemRequirementsProps) {
  const getLevelReq = () => {
    if (item.requirements?.level) {
      return (
        <span className="text-white">Level {item.requirements.level}</span>
      );
    }
  };

  const getIntReq = () => {
    if (item.requirements?.intelligence) {
      return (
        <span className="text-white">
          , {item.requirements.intelligence} Int
        </span>
      );
    }
  };

  const getStrReq = () => {
    if (item.requirements?.strength) {
      return (
        <span className="text-white">, {item.requirements.strength} Str</span>
      );
    }
  };

  const lvlReq = getLevelReq();
  const intReq = getIntReq();
  const strReq = getStrReq();

  const hasRequirements = lvlReq || intReq || strReq;

  if (!hasRequirements) {
    return null;
  }

  return (
    <>
      <div className="item-content-inner">
        <span className="text-poe-default">
          Requires: {getLevelReq()}
          {getIntReq()}
          {getStrReq()}
        </span>
      </div>
      <ItemSeparator />
    </>
  );
}
