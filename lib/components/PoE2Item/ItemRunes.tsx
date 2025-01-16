import { type Item } from "poe-item-parser";

import { ItemSeparator } from "./ItemSeparator";

interface ItemRunesProps {
  item: Item;
}

export function ItemRunes({ item }: ItemRunesProps) {
  if (!item.runes || item.runes.length === 0) {
    return null;
  }

  return (
    <>
      <div className="item-content-inner">
        {item.runes.map((rune) => {
          return (
            <span className="text-enchant" key={rune}>
              {rune}
            </span>
          );
        })}
      </div>
      <ItemSeparator />
    </>
  );
}
