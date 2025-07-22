import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProducts } from '../hooks/useProducts';


export const ProductCard = () => {

    const { counter, increaseBy } = useProducts();

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug" />

            <span className={styles.productDescription}>Coffe Mug</span>

            <div className={styles.buttonsContainer }>
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
        </div>
    )
}