import { useState } from "react";
import RadioButton from "../RadioButton";
import Typography from "../Typography";
import Styles from "./ProductDetail.module.css";
import { AddCarrinhoIcon } from "../../common/icons/AddCarrinhoIcon";
import { useCart } from "../../common/context/CartContext";
import Button from "../Button";

type ProductDetailProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  colors: string[];
};

function ProductDetail({
  id,
  title,
  description,
  price,
  imageUrl,
  colors,
}: ProductDetailProps) {
  const [selectedValue, setSelectedValue] = useState("");

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id,
      label: title,
      description,
      price,
      colors,
      imageSrc: imageUrl,
    };

    addToCart(product);
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <section className={Styles.productDetail}>
      <div className={Styles.imageContainer}>
        <img src={imageUrl} alt={title} className={Styles.productImage} />
      </div>

      <div className={Styles.detailContainer}>
        <Typography variant="h4">{title}</Typography>
        <Typography variantStyle="body-large">{description}</Typography>
        <Typography variantStyle="heading-semi-bold">
          {price.toFixed(2)}
        </Typography>

        <div className={Styles.radioGroup}>
          {colors.map((color) => (
            <RadioButton
              key={color}
              label={color}
              value={color}
              checked={selectedValue === color}
              onChange={handleRadioChange}
            />
          ))}
        </div>

        <div className={Styles.action}>
          <Button icon={<AddCarrinhoIcon />} onClick={handleAddToCart}>
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
