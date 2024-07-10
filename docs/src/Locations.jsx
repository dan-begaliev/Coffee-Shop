import "./Locations.css";
function Locations() {
  return (
    <section id="locations">
      <div class="mainImg">
        <p className="textInImg">Experience Great Taste</p>
      </div>
      <div className="locator">
        <h2 id="textCafe">Cafe Locator</h2>
        <div className="searchInput">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="17px"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="ENTER A LOCATION"
          />
        </div>
        <button id="moveRight">FIND CAFE</button>
      </div>
      <div className="locations">
        <div className="Loc">
          <img
            src="https://i.pinimg.com/736x/d9/53/38/d95338cfc82a0c2d4aa4118d5463f1f6.jpg"
            className="imgLoc"
          />
          <h2 className="letter">CHAPMAN COURT</h2>
          <p className="under">555 S Alexandria Ave Los</p>
          <span className="under">Angeles, CA 90020</span>
          <span className="textFloat">Opens Fri 7:00 AM</span>
        </div>
        <div className="Loc">
          <img
            src="https://leibal.com/wp-content/uploads/2016/04/leibal_bluebottleshinjuku_schemata_1.jpg"
            className="imgLoc"
          />
          <h2 className="letter">TRIBUNE TOWER</h2>
          <p className="under">435 Michigan Ave, Unit 114,</p>
          <span className="under">Chicago, IL 60611</span>
          <span className="textFloat">Opens Fri 7:00 AM</span>
        </div>
        <div className="Loc">
          <img
            src="https://www.bcj.com/wp-content/uploads/2021/08/Blue-Bottle-Stanford_AR_0275_medium.jpg"
            className="imgLoc"
          />
          <h2 className="letter">MIDTOWN NORTH</h2>
          <p className="under">1345 Avenue of the Americas,</p>
          <span className="under">New York, NY 10105</span>
          <span className="textFloat">Opens Fri 6:30 AM</span>
        </div>
      </div>
      <img
        className="fill screenshotImg"
        src="../public/Screenshot 2024-04-27 at 2.03.20 AM.png"
      />
      <img
        className="fill lastImg"
        src="../public/Screenshot 2024-04-28 at 3.56.39 PM.png"
      />{" "}
      <div className="moveUp">
        <h2 className="letter">MIDTOWN NORTH</h2>
        <p className="under">1345 Avenue of the Americas,</p>
        <span className="under">New York, NY 10105</span>
      </div>
    </section>
  );
}
export default Locations;
