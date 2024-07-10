import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="mainImg">
        <p className="textInImg">Blue Bottle Best Sellers </p>
      </div>
      <div className="filters">
        <a href="" className="box">
          ALL BEST SELLERS
        </a>
        <a href="" className="box">
          BEST SELLERS
        </a>
        <a href="" className="box">
          BLENDS
        </a>
        <a href="" className="box">
          CRAFT INSTANT
        </a>
        <a href="" className="box">
          DRINKWARE
        </a>
        <a href="" className="box">
          BREW TOOLS
        </a>
      </div>
      <section className="list-products-button">
        <div className="product-grids">
          <div className="product-grid">
            <span className="spanTop">INSTANT</span>
            <p>Craft Instant Espresso Multiverse</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_2048,q_auto/Coffee/Instant%20Multiserve/Multi-Serve-Craft-Instant-Espresso-M1-Detail1.jpg"
              width="350px"
            />
            <p className="bottomP">Dark Chocolate, Molasses, Toasted Malt</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">ESPRESSO</span>
            <p>Hayes Valley Espresso</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_1920,q_auto/Coffee/Bella%20Donovan/Bella-Donovan-M3-Design-Detail1-Desktop.jpg"
              width="350px"
            />
            <p className="bottomP">
              Baking chocolate, Orange Zest, Brown Sugar
            </p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">BLENDS</span>
            <p>Bella Donovan</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_1920,q_auto/Coffee/Giant%20Steps/Giant-Steps-M1-Hero.png"
              width="350px"
            />
            <p className="bottomP">Raspberry Chocolate, Molasses</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">MATCHA</span>
            <p>Craft Matcha</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_1920,q_auto/Merch%20PDPs/Fellow%2016-Oz%20Carter%20Move%20Mug/Fellow-16-Ounce-Carter-Move-Mug-White-M4-Lifestyle-Mobile.jpg"
              width="350px"
            />
            <p className="bottomP">First Harvest From Uji, Japan</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">ESPRESSO</span>
            <p>17ft Ceiling</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Coffee/Instant%20Single%20Serve/Instant-Sachets-M1-Hero.png"
              width="350px"
            />
            <p className="bottomP">Caramel Almond, Dried Cherry</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">BLENDS</span>
            <p>Giant Steps</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Coffee/Hayes%20Valley%20Espresso%202/Hayes-Valley-Espresso-M3-Design-Detail1-Desktop.jpg"
              width="350px"
            />
            <p className="bottomP">For fans of comforting coffee flavors</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">INSTANT</span>
            <p>Craft Instant Espresso Multiverse</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Coffee/-Coffee-Roastery-Shot-M4-Desktop.jpg"
              width="350px"
            />
            <p className="bottomP">Dark Chocolate, Molasses, Toasted Malt</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">ESPRESSO</span>
            <p>Hayes Valley Espresso</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Coffee/Hayes%20Valley%20Espresso%202/Hayes-Valley-Espresso-M3-Design-Detail1-Desktop.jpg"
              width="350px"
            />
            <p className="bottomP">
              Baking chocolate, Orange Zest, Brown Sugar
            </p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">BLENDS</span>
            <p>Bella Donovan</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Coffee/Samra%20Craft%20Instant%20SS/Samra-Origins-Craft-Instant-SingleServe-M1-Hero.png"
              width="350px"
            />
            <p className="bottomP">Raspberry Chocolate, Molasses</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">MATCHA</span>
            <p>Craft Matcha</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_1920,q_auto/Matcha/Craft-Matcha-M1-Detail.jpg"
              width="350px"
            />
            <p className="bottomP">First Harvest From Uji, Japan</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">ESPRESSO</span>
            <p>17ft Ceiling</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_1920,q_auto/Coffee/Instant%20Multiserve/DSK_BBC_SR23_DAY1_S14_0123.jpg"
              width="350px"
            />
            <p className="bottomP">Caramel Almond, Dried Cherry</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
          <div className="product-grid">
            <span className="spanTop">BLENDS</span>
            <p>Giant Steps</p>
            <img
              className="imgOfItem"
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_1920,q_auto/Single_Serve_PDP_Image_3_hdcmqy.jpg"
              width="350px"
            />
            <p className="bottomP">For fans of comforting coffee flavors</p>
            <span className="spanBottom">DARK ROAST</span>
            <button id="sub-button">ADD TO CART $25</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
