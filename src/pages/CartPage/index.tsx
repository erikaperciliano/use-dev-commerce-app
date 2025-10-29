import Typography from "../../components/Typography";
import Styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";

import { Product } from "../../common/types/product";
import CartList from "../../components/CartList";
import CartSummary from "../../components/CartSummary";

type CartPageProps = {
  cartCount: number;
  cartItems: Product[];
  removeFromCart: (id: number) => void;
};

const CartPage = ({ cartCount, cartItems, removeFromCart }: CartPageProps) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freight = cartItems.length > 0 ? 8 : 0;

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  const handlePayment = () => console.log('pagamento')

  return (
    <main className="container">
      <div className={Styles.cartTitle}>
        <Typography variant="h4">Carrinho de Compras</Typography>
      </div>
        <section className={Styles.cartPage}>
          <CartList cartItems={cartItems} onRemove={removeFromCart} />
            <CartSummary 
            itemCount={cartCount} 
            total={total} 
            freight={freight} 
            handleRedirect={handleRedirect}
            onPayment={handlePayment}
          />
      </section>
    </main>
  );
};

export default CartPage;
