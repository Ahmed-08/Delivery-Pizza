import './card.scss';


export default function Card(props) {

    return <div className="card">

        <img width={250} height={150} src={props.imgUrl} alt="WOK-BOLONYEZE" />

        <div className="title">
            <h4>{props.title}</h4>
            <p>Категория блюда - {props.category}</p>
        </div>

        <div className="description">{props.description}</div>

        <div className="price">Цена - {props.price} руб.
            <button>В корзину</button>
        </div>
    </div>
}