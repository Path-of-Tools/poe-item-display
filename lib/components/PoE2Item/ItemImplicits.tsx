import { type Item } from "poe-item-parser";

import { ItemSeparator } from "./ItemSeparator";

interface ItemImplicitProps {
  item: Item;
}

export function ItemImplicits({ item }: ItemImplicitProps) {
  if (!item.implicits || item.implicits.length === 0) {
    return null;
  }

  return (
    <>
      <div className="item-content-inner">
        {item.enchants?.map((aff) => {
          return (
            <span className="text-enchant" key={aff}>
              {aff}
            </span>
          );
        })}
        {item.implicits?.map((aff) => {
          return (
            <span className="text-augment" key={aff}>
              {aff}
            </span>
          );
        })}
      </div>
      {item.affixes?.length && <ItemSeparator />}
    </>
  );
}
