import "./Products.css"
import InfoCard from "../info-card/InfoCard"
import ppg from "../../assets/ppg.png"
import tcg from "../../assets/tcg.png"
import ivg from "../../assets/ivg.png"
import dng from "../../assets/dng.png"

export default function Products() {
  const productDetails = [
    {
        id: 1,
        imageUrl: ppg,
        headingText: "Privacy Policy Generator",
        description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    },
    {
        id: 2,
        imageUrl: tcg,
        headingText: "Terms & Conditions Generator",
        description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    },
    {
        id: 3,
        imageUrl: dng,
        headingText: "Domain Name Generator",
        description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    },
    {
        id: 4,
        imageUrl: ivg,
        headingText: "Invoice Generator",
        description: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    },
  ]

  return (
    <div className="products-container">
        <h1>Try our other free products</h1>
        <div className="products">
            {productDetails.map((product) => (
                <InfoCard
                    className="product-card"
                    key={product.id}
                    imageUrl={product.imageUrl}
                    headingText={product.headingText}
                    description={product.description}
                />
            ))}
        </div>
    </div>
  )
}
