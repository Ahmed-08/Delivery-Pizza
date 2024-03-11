import React from "react";
import Header from "../header/Header";
import './auth.scss'


export default function Auth(props){


    const arr = ['Регистрация', 'Вход'];
    return <div className="auth">

        <div className="auth-block">
            <div className="auth-block__form">
                <form>
                    <h1>Авторизация</h1>

                    <div className="auth-block__input-name">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="client-email"/>
                    </div>

                    <div className="auth-block__input-password">
                        <label for="password">Password</label>
                        <input type="email" id="password" name="client-password"/>
                    </div>

                    <button>Войти</button>

                </form>
            </div>
        </div>
    </div>
}