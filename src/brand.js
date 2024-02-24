import React from "react";
import "./brand.css";
import Product from "./Product";
import logo2 from "./Images/image-2.png";
import logo3 from "./Images/image-3.png";
import logo4 from "./Images/image-4.png";
import logo5 from "./Images/image-5.png";
import logo6 from "./Images/image-6.png";
import logo7 from "./Images/image-7.png";
import logo8 from "./Images/image-8.png";
import logo9 from "./Images/image-9.png";
import logo10 from "./Images/image-10.png";
import logo11 from "./Images/image-11.png";
import logo12 from "./Images/image-12.png";
import logo13 from "./Images/image-13.png";
import logo14 from "./Images/image-14.png";
import logo15 from "./Images/image-15.png";

function Brand() {
    return (
    <div className="brand">
        <div className="brand__container">

        <h1 className="brand_description">Here you can buy the products of shopsmart</h1>
            
            <div className="brand__row">
                <Product
                    id="12321341"
                    title="A customize hoodie for winter."
                    price={350}
                    rating={5}
                    image={logo2}
                />
                <Product
                    id="49538094"
                    title="A winter leather jacket for mens."
                    price={899}
                    rating={4}
                    image={logo3}
                />
            </div>

            <div className="brand__row">
                <Product
                    id="4903850"
                    title="Shoes with extra comfort and can be easily wore for hours."
                    price={400}
                    rating={3}
                    image={logo4}
                />
                <Product
                    id="23445930"
                    title="A school bag which can carry extra luggage and is water-proof."
                    price={750}
                    rating={5}
                    image={logo5}
                />
                <Product
                    id="3254354345"
                    title="A set of three-water bottles."
                    price={599}
                    rating={4}
                    image={logo6}
                />
            </div>

            <div className="brand__row">
                <Product
                    id="90829332"
                    title="A pair of t-shirt and trouser which provides extra comfort and can be wore for the morning walk."
                    price={699}
                    rating={4}
                    image={logo7}
                />
            </div>

            <div className="brand__row">
                <Product
                    id="12321341"
                    title="A pair of slippers for both men and women."
                    price={250}
                    rating={5}
                    image={logo8}
                />
                <Product
                    id="49538094"
                    title="A Men's Cotton Standard Length Bomber Jacket."
                    price={599}
                    rating={4}
                    image={logo9}
                />
            </div>

            <div className="brand__row">
                <Product
                    id="4903850"
                    title="Lunch Box for Kids with Spoon - Durable Perfect Size for On-The-Go Meal."
                    price={350}
                    rating={3}
                    image={logo10}
                />
                <Product
                    id="23445930"
                    title="Soft Bound Long Book | 21cm X 29.7 cm | Single Line | 172 Pages | Pack of 6, Multicolor."
                    price={450}
                    rating={5}
                    image={logo11}
                />
                <Product
                    id="3254354345"
                    title="A pair of slippers for women for household chores."
                    price={200}
                    rating={4}
                    image={logo12}
                />
            </div>

            <div className="brand__row">
                <Product
                    id="90829332"
                    title="Head Caps for Men Unisex Mens Caps with Adjustable Strap."
                    price={150}
                    rating={4}
                    image={logo13}
                />
            </div>

            <div className="brand__row">
                <Product
                    id="12321341"
                    title="Men's Auto Lock PU Leather Belt."
                    price={200}
                    rating={5}
                    image={logo14}
                />
                <Product
                    id="49538094"
                    title="Non-Woven Fabric 3 Layer Disposable Face Mask With Nose Clip (Black) For Men & Women."
                    price={199}
                    rating={4}
                    image={logo15}
                />
            </div>
        </div>
    </div >
  );
}

export default Brand;