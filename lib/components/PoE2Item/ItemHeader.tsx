import { type Item } from "poe-item-parser";

interface ItemHeaderProps {
  item: Item;
}

export function ItemHeader({ item }: ItemHeaderProps) {
  if (
    !item.itemName ||
    !item.itemName.lines ||
    item.itemName.lines.length === 0
  ) {
    return null;
  }

  return (
    <div className={`item-header`}>
      {item.itemName.lines.map((line: string) => (
        <span key={`item_${line}`}>{line}</span>
      ))}
    </div>
  );
}
