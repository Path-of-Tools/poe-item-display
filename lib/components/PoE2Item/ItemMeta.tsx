import { type Item } from "poe-item-parser";

import { ItemSeparator } from "./ItemSeparator";

interface ItemMetaProps {
  item: Item;
}

export function ItemMeta({ item }: ItemMetaProps) {
  return (
    <>
      <div className="item-content-inner">
        <span className="text-poe-default">{item.itemClass}</span>
        {item.charmSlots && (
          <span className="text-poe-default">
            Charm Slots: <span className="text-white">{item.charmSlots}</span>
          </span>
        )}
        {item.quality && (
          <span className="text-poe-default">
            Quality: <span className="text-augment">+{item.quality}%</span>
          </span>
        )}
        {item?.stats?.energyShield && (
          <span className="text-poe-default">
            Energy Shield:{" "}
            <span className="text-augment">{item?.stats?.energyShield}</span>
          </span>
        )}
        {item?.stats?.evasionRating && (
          <span className="text-poe-default">
            Evasion Rating:{" "}
            <span className="text-augment">{item?.stats?.evasionRating}</span>
          </span>
        )}
        {item?.stats?.armour && (
          <span className="text-poe-default">
            Armour: <span className="text-augment">{item?.stats?.armour}</span>
          </span>
        )}{" "}
        {item?.physicalDamage && (
          <span className="text-poe-default">
            Physical Damage:{" "}
            <span className="text-white">
              {item.physicalDamage.map((dmg, i) => {
                return `${i > 0 ? ", " : ""}${dmg.min}-${dmg.max}`;
              })}
            </span>
          </span>
        )}
        {item?.elementalDamage && (
          <span className="text-poe-default">
            Elemental Damage:{" "}
            <span className="text-white">
              {item.elementalDamage.map((dmg, i) => {
                return `${i > 0 ? ", " : ""}${dmg.min}-${dmg.max}`;
              })}
            </span>
          </span>
        )}
        {item.criticalHitChance && (
          <span className="text-poe-default">
            Critical Hit Chance:{" "}
            <span className="text-white">
              {item.criticalHitChance.toFixed(2)}%
            </span>
          </span>
        )}
        {item.attacksPerSecond && (
          <span className="text-poe-default">
            Attacks per Second:{" "}
            <span className="text-white">
              {item.attacksPerSecond.toFixed(2)}
            </span>
          </span>
        )}
      </div>
      <ItemSeparator />
    </>
  );
}
