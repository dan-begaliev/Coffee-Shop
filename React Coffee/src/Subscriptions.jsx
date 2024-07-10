import "./Subscriptions.css";
function Subscriptions() {
  return (
    <>
      <div className="main-photo">
        <div className="main-content-in-pictute">
          <h1>Fresh Roasted Specialty Coffee Subscription</h1>
          <p>Choose Your Coffee</p>
          <div className="main-photo-buttons">
            <button>SHOP SUBSCRIPTIONS</button>
            <button>SHOP GIFT SUBSCRIPTION</button>
          </div>
        </div>
      </div>
      <section className="howItWorks">
        <div className="howItWorks-content">
          <h2>How It Works</h2>
        </div>
        <div className="howItWorks-grids">
          <div className="howItWorks-grid">
            <img
              src="http://res.cloudinary.com/hbhhv9rz9/image/upload/v1662777895/Subscription%20/Icons/Subscription_Flexibility.svg"
              width="60px"
            />
            <h3>CHANGE TIME</h3>
          </div>
          <div className="howItWorks-grid">
            <img
              src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_256,q_auto/Icons%20For%20PDPs/Box_Icon.png"
              width="60px"
            />
            <h3>ALWAYS SHIPS FREE</h3>
          </div>
          <div className="howItWorks-grid">
            <img
              src="http://res.cloudinary.com/hbhhv9rz9/image/upload/v1661439089/Subscription%20/Subscription_Roasting.svg"
              width="60px"
            />
            <h3>FRESHLY ROASTED</h3>
          </div>
          <div className="howItWorks-grid">
            <img
              src="http://res.cloudinary.com/hbhhv9rz9/image/upload/v1661439090/Subscription%20/Subscription_Curated.svg"
              width="60px"
            />
            <h3>CAREFULLY CURATED</h3>
          </div>
        </div>
      </section>
      <section className="subscriptions">
        <h2>Choose Your Coffee</h2>
        <h3>
          Tailored shipments to meet your preferences - change, pause, or cancel
          at any time
        </h3>
        <div className="filters">
          <a href="" className="box">
            DARK
          </a>
          <a href="" className="box">
            MEDIUM
          </a>
          <a href="" className="box">
            LIGHT
          </a>
          <a href="" className="box">
            INSTANT
          </a>
          <a href="" className="box">
            BLENDS
          </a>
          <a href="" className="box">
            DECAF
          </a>
          <a href="" className="box">
            ESPRESSO
          </a>
          <a href="" className="box">
            COLD BREW
          </a>
        </div>
        <section className="list-products-button">
          <div className="product-grids">
            <div className="product-grid">
              <span className="spanTop">SINGLE ORIGIN</span>
              <p>Single Origin Assortment</p>
              <img
                className="imgOfItem"
                src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Coffee/Bolivia%20Caranavi%20Taypiplaya/Bolivia-Caranavi-Taypiplaya-M2-Desktop.jpg"
                width="350px"
              />
              <p className="bottomP">Dark Chocolate, Molasses, Toasted Malt</p>
              <span className="spanBottom">LIGHT TO MEDIUM</span>
              <button id="sub-button">SUBSCRIBE $25</button>
            </div>
            <div className="product-grid">
              <span className="spanTop">SINGLE ORIGIN</span>
              <p>Single Origin Assortment</p>
              <img
                className="imgOfItem"
                src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Coffee/-Coffee-Roastery-Shot-M4-Desktop.jpg"
                width="350px"
              />
              <p className="bottomP">Dark Chocolate, Molasses, Toasted Malt</p>
              <span className="spanBottom">LIGHT TO MEDIUM</span>
              <button id="sub-button">SUBSCRIBE $25</button>
            </div>
            <div className="product-grid">
              <span className="spanTop">SINGLE ORIGIN</span>
              <p>Single Origin Assortment</p>
              <img
                className="imgOfItem"
                src="https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Coffee/Hayes%20Valley%20Espresso%202/Hayes-Valley-Espresso-M3-Design-Detail1-Desktop.jpg"
                width="350px"
              />
              <p className="bottomP">For fans of comforting coffee flavors</p>
              <span className="spanBottom">FRUITY TO CHOCOLATEY</span>
              <button id="sub-button">SUBSCRIBE $25</button>
            </div>
          </div>
        </section>
      </section>
      <section className="quote">
        <div className="quote-content">
          <p>
            Blue Bottle's coffee subscription won us over with its balance of
            variety, customizability, and, most importantly, taste. Beyond its
            coffee, Blue Bottle's subscription is simple and easy to use.
          </p>
          <span>CNN</span>
        </div>
      </section>
      <section className="photo-left-text-right">
        <div className="photo-left"></div>
        <div className="text-right">
          <div className="flex-icon-text">
            <div className="icon-text">
              <div className="icon">
                <img
                  src="http://res.cloudinary.com/hbhhv9rz9/image/upload/v1661439089/Subscription%20/Subscription_Quality.svg"
                  width="48px"
                />
              </div>
              <div className="text">
                <h4 className="h4-text">METICULOUS QUALITY</h4>
                <p>
                  Each coffee—whether it’s a tried and true blend or a new
                  single origin—is tasted at least 50 times by our experts
                  before it is delivered to you.
                </p>
              </div>
            </div>
            <div className="icon-text">
              <div className="icon">
                <img
                  src="http://res.cloudinary.com/hbhhv9rz9/image/upload/v1661439089/Subscription%20/Subscription_Source.svg"
                  width="48px"
                />
              </div>
              <div className="text">
                <h4 className="h4-text">SMALL BATCH ROASTING</h4>
                <p>
                  Our coffee is roasted daily to order in small batches (70
                  kilograms max) and shipped to you directly from our roastery.
                </p>
              </div>
            </div>
            <div className="icon-text">
              <div className="icon">
                <img
                  src="http://res.cloudinary.com/hbhhv9rz9/image/upload/v1661439089/Subscription%20/Subscription_Roasting.svg"
                  width="48px"
                />
              </div>
              <div className="text">
                <h4 className="h4-text">ETHICALLY SOURCED</h4>
                <p>
                  We source from producers whom we have long-lasting
                  relationships with and worked with for over 5 years on average
                  to ensure high traceability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscriptions;
