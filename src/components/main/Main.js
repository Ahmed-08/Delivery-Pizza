import React from 'react';
import Card from '../card/Card';
import './main.scss';




export default function Main() {

    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        fetch('https://65eb5f6243ce16418933c2b3.mockapi.io/items').then(res => {
            return res.json();
        }).then(json => {
            setCartItems(json);
        });
    }, []);


    const onSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    return <div className="main">
        <div className="search">
            <div className='search-title'>
                <h1>{searchValue ? `Поиск по запросу ${searchValue}` : 'Все блюда'}</h1>
            </div>

            <div className='search-input'>
                <img src='/search.svg' alt='search' />
                <input onChange={onSearchValue} value={searchValue} type='text' />
                <img onClick={()=>setSearchValue('')} width={28} height={28} src='/btn-remove.svg' alt='clear' />
            </div>

        </div>

        <div className='items'>
            {
                cartItems.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                                        item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
                                        item.category.toLowerCase().includes(searchValue.toLowerCase())
                ).map(item => {
                    return <Card imgUrl={item.imgUrl} title={item.title} category={item.category} rating={item.rating} description={item.description} price={item.price} />
                })
            }
        </div>
    </div>
}