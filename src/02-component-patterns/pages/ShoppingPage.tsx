import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1> Shopping store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                     <ProductCard.Image/>
                     <ProductCard.Title title={'new title'}/>
                     <ProductCard.Buttons/>
                </ProductCard>

                <ProductCard product={product}>
                     <ProductImage/>
                     <ProductTitle/>
                     <ProductButtons/>
                </ProductCard>

            </div>

        </div>
    )
}