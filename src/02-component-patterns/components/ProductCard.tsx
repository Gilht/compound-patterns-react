import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProducts } from '../hooks/useProducts';

interface Props {
    product: Product;
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductImage = ({ img = '' }) => {
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt="Coffe Mug" />
    )
}

export const ProductTitle = ({ title }: { title: string }) => {
    return (
        <span className={styles.productDescription}>{title}</span>
    )
}

interface ProductButtonsProps {
    increaseBy: ( value: number)  => void;
    counter: number;
}

export const ProductButtons = ({ increaseBy, counter }: ProductButtonsProps) => {

    console.log(counter, 'click');

    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>

            <button
                className={styles.countLabel}
            >
                {counter}
            </button>

            <button
                className={styles.buttonAdd}
                onClick={() => increaseBy(+1)}
            >
                +
            </button>
        </div>
    )
}


export const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProducts();

    return (
        <div className={styles.productCard}>

            <ProductImage img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons 
            increaseBy={increaseBy}
            counter={counter}
            />
        </div>
    )
}