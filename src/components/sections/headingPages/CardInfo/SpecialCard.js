import { MdDeliveryDining } from "react-icons/md";

export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <span
                    role="button"
                    aria-label="On Click"
                    className="specials-order-btn"
                >
                    Order a delivery
                    <MdDeliveryDining
                        size={30}
                        style={{
                            color: "#333",
                            marginLeft: "15px",
                            marginBottom: "-10px",
                        }}
                    />
                </span>
            </section>
        </article>
    );
}