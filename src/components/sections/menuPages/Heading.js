import HeroImage from "../../../assets/restaurant.png";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Menu</h1>
      </div>
    </header>
  );
}