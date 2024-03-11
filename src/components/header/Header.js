import { Link } from "react-router-dom";

import './header.scss';


export default function Header(props) {
    return (
        <header className="header">
            <div className="header-block">
                <div className="header-block__left">
                    <div className="header-block__logo">
                        <div className="header-block__logo-name">Delivery.Кушац</div>
                    </div>

                    <nav className="header-block__nav-left">
                        <div>
                            <Link to={'/'}>
                                <div>меню</div>
                            </Link>
                        </div>

                        {
                            props.signIn && <div style={{ display: 'flex', gap: '15px' }}>
                                <div>
                                    <Link to={'/orders'}>
                                        <div className="nav-orders">заказы</div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/cart'}>
                                        <div className="nav-cart">корзина</div>
                                    </Link>
                                </div>
                            </div>
                        }
                    </nav>
                </div>

                <div className="header-block__right">
                    <nav className="header-block__nav-right">
                        {
                            props.signIn ? <div style={{ display: 'flex', gap: '15px' }}>
                                <div>
                                    <Link to={'/email'}>
                                        <div className="nav-email">email</div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/exit'}>
                                        <div className="nav-exit">выйти</div>
                                    </Link>
                                </div>
                            </div> : <div style={{ display: 'flex', gap: '15px' }}>
                                <div>
                                    <Link to={'/registration'}>
                                        <div className="nav-registration">регистрация</div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/auth'}>
                                        <div className="nav-signin">вход</div>
                                    </Link>
                                </div>
                            </div>
                        }
                    </nav>
                </div>
            </div>
        </header>
    )
}