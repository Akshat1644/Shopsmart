import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
  
        <div className="home__row">
          <Product
            id="12321341"
            title="A customize t-shirt with RRR logo"
            price={150}
            rating={5}
            image="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077"
          />
          <Product
            id="49538094"
            title="UBON BT-5100 Bluetooth 5.0 Wireless in Ear Earphones with Hi-Fi Stereo Sound, 10Hrs Playtime, Lightweight Ergonomic Neckband, Sweat-Resistant Magnetic Earbuds, Voice Assistant & with Mic (Black)"
            price={249}
            rating={4}
            image="https://m.media-amazon.com/images/I/51Wp-4gKZML._AC_UF1000,1000_QL80_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={400}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="URBAN FOREST Men Black Genuine Leather Wallet Black, Redwood"
            price={250}
            rating={5}
            image="https://rukminim2.flixcart.com/image/850/1000/xif0q/wallet-card-wallet/a/k/w/kyle-1-4-5-ubf130blr1037-8-wallet-urban-forest-3-7-original-imagkcafzqmde8gb.jpeg?q=20"
          />
          <Product
            id="3254354345"
            title="Men Black & White Nike Air Max Shoes"
            price={399}
            rating={4}
            image="https://5.imimg.com/data5/ANDROID/Default/2021/2/XR/JO/HO/74947638/product-jpeg.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Base Camp Cologne - 100 ml - Perfume for Men"
            price={199}
            rating={4}
            image="https://ustraa.cdn.imgeng.in/media/catalog/product/b/a/base-camp-cologne_image-1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="A perfect fit sunglasses for men"
            price={200}
            rating={5}
            image="https://www.villain.in/cdn/shop/products/villain-wingsman-1-394.jpg?v=1640096163"
          />
          <Product
            id="49538094"
            title="A men's slippers for household chores."
            price={299}
            rating={4}
            image="https://5.imimg.com/data5/QN/JN/NB/SELLER-36376318/slides-men-500x500.JPG"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Wytino Outdoor Training Football Sports Equipment for Kids"
            price={150}
            rating={3}
            image="https://m.media-amazon.com/images/I/61VXRmdilbL.jpg"
          />
          <Product
            id="23445930"
            title="Denim Jeans for men"
            price={350}
            rating={5}
            image="https://thumbs.dreamstime.com/b/blue-jeans-isolated-white-background-blue-jeans-isolated-white-126824335.jpg"
          />
          <Product
            id="3254354345"
            title="A golden watch for men"
            price={249}
            rating={4}
            image="https://media.istockphoto.com/id/471712723/photo/watch.jpg?s=612x612&w=0&k=20&c=iMEdtY6uP3iFURngL9qAzzMnWYSkPmHrxIlYIEfduvM="
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Wireless light up logo headphone, black"
            price={199}
            rating={4}
            image="https://www.logo.ee/product/viewimage/10939463/XD-P326.271-1.jpg"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
