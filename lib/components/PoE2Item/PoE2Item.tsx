import { PoE2ItemParser } from "poe-item-parser";
import { FC } from "react";

import "./styles.css";

import { ItemHeader } from "./ItemHeader";
import { ItemContent } from "./ItemContent";
import { ItemMeta } from "./ItemMeta";
import { ItemRequirements } from "./ItemRequirements";
import { ItemRunes } from "./ItemRunes";
import { ItemImplicits } from "./ItemImplicits";
import { ItemExplicits } from "./ItemExplicits";

interface Props {
  item: string;
}

export const PoE2Item: FC<Props> = ({ item }) => {
  const parsedItem = new PoE2ItemParser(item).getItem();

  console.log(parsedItem);

  if (!parsedItem) {
    return null;
  }

  return (
    <div className="poe2-item">
      <div
        className={`item-content-wrapper poe2-${parsedItem?.itemRarity?.toLowerCase()}-wrapper`}
      >
        <ItemHeader item={parsedItem} />
        <ItemContent>
          <ItemMeta item={parsedItem} />
          <ItemRequirements item={parsedItem} />
          <ItemRunes item={parsedItem} />
          <ItemImplicits item={parsedItem} />
          <ItemExplicits item={parsedItem} />
        </ItemContent>
      </div>
    </div>
  );
};
