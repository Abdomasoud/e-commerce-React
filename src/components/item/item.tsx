import "./item.css";

type Props = {
  image: string;
  name: string;
  new_price: number;
  old_price: number;
};

const item = (props: Props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </div>
  );
};

export default item;
