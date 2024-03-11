import React from "react";
import './registration.scss';


export default function Registration() {

    



    return <div className="registration">
        <form>

            <div className="registration-block">
                <h1>Регистрация нового пользователя</h1>

                <div className="registration-block__fullname">
                    <label for="fullname">ФИО</label>
                    <input type="text" id="fullname" name="client-fullname"></input>
                </div>

                <div className="registration-block__gender">
                    <label name="gender">Пол</label>
                    <select type="select" id="gender" name="select-gender">
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </select>
                </div>

                <div className="registration-block__phone">
                    <label for="phone">Телефон</label>
                    <input type="text" id="phone" name="client-phone"></input>
                </div>

                <div className="registration-block__birthday">
                    <label for="date">День рождения</label>
                    <input type="date" id="date" name="client-date"></input>
                </div>

                <div className="registration-block__adress">
                    <label for="adress">Адрес</label>
                    <input type="text" id="adress" name="client-adress"></input>
                </div>

                <div className="registration-block__email">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="client-email"></input>
                </div>

                <div className="registration-block__password">
                    <label for="password">Пароль</label>
                    <input type="text" id="password" name="client-password"></input>
                </div>

                <button>Зарегистрироваться</button>
            </div>


        </form>

    </div>
}