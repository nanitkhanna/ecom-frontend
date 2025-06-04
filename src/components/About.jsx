import ProductCard from "./shared/ProductCard";

const products = [
    {
        image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg",
        productName: "iPhone 13 Pro Max",
        description:
          "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
        specialPrice: 720,
        price: 780,
      },
      {
        image: "https://images-cdn.ubuy.co.in/659146056223ae58d12ef4cf-samsung-galaxy-s21-5g-128gb-g991u-fully.jpg",
        productName: "Samsung Galaxy S21",
        description:
          "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
        specialPrice: 699,
        price: 799,
      },
      {
        image: "https://www.dxomark.com/wp-content/uploads/drafts/post-103489/Google-Pixel-6-featured-image-packshot-review-Recovered.jpg",
        productName: "Google Pixel 6",
        description:
          "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
        price: 599,
        specialPrice: 400,
      }
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
           <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">
                        Welcome to our e-commerce store! We are dedicated to providing the
                        best products and services to our customers. Our mission is to offer
                        a seamless shopping experience while ensuring the highest quality of
                        our offerings.
                    </p>
                </div>

                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"></img>
                </div>
           </div>


           <div className="py-7 space-y-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center">
                Our Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    image={product.image}
                    productName={product.productName}
                    description={product.description}
                    specialPrice={product.specialPrice}
                    price={product.price}
                    about
                />
               ))
               }
                

            </div>
           </div>
        </div>
    );
}

export default About;