type Props = {
  category: string;
};

const ShopCategory = (category: Props) => {
  return <div>{category.category}</div>;
};

export default ShopCategory;
