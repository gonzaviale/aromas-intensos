export interface ProductInterface {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export interface ProductProps {
    product: ProductInterface;
    addToCart: (product: ProductInterface) => void;
  }

  export interface CartProps {
    cart: ProductInterface[];
    removeFromCart: (product: ProductInterface) => void;
    isOpen: boolean;
    onClose: () => void;
  }