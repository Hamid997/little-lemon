import {Link} from 'react-router-dom';
import Food from "../../../assets/Food.jpg";


export default function Heading() {
    return (
        <header>
        <div className="left-side">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>
            <Link to="/reservations">Reserve a table</Link>
          </button>
        </div>

        <div className="right-side">
          <img
            src={Food}
            alt="our cook holding a tablet with delicoues baguettes"
          />
        </div>
      </header>
    );
}