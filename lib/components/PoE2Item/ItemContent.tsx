interface ItemHeaderProps {
  children: React.ReactNode;
}

export function ItemContent({ children }: ItemHeaderProps) {
  return <div className="item-content">{children}</div>;
}
