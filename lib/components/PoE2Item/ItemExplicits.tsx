import { type Item } from "poe-item-parser";

import { ItemSeparator } from "./ItemSeparator";

interface ItemExplicitProps {
  item: Item;
}

export function ItemExplicits({ item }: ItemExplicitProps) {
  if (!item.affixes || item.affixes.length === 0) {
    return null;
  }

  return (
    <>
      <div className="item-content-inner">
        {item.affixes.map((aff) => {
          return (
            <span className="text-augment text-s" key={aff}>
              {aff}
            </span>
          );
        })}
      </div>
      {item.corrupted && (
        <>
          <ItemSeparator />
          <div className="flex flex-col text-center">
            <span className="text-corrupted">Corrupted</span>
          </div>
        </>
      )}
      {item.flavorText && (
        <>
          <ItemSeparator />
          <div className="flex flex-col text-center">
            <span className="text-unique">{item.flavorText.flavorText}</span>
          </div>
        </>
      )}
    </>
  );
}
