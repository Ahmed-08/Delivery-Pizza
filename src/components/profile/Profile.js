import React from "react";
import Header from "../header/Header";
import './profile.scss';


export default function Profile(){

    return <div className="profile">

        <div className="profile-header">
            <Header arr={['Выйти']}/>
        </div>

        <div className="profile-block">
            <form>
                <h1>Профиль</h1>
                <div className="profile-block__fullname">
                    <label for="fullname">ФИО</label>
                    <input type="text" id="fullname" name="client-fullname"></input>
                </div>

                <div className="profile-block__gender">
                    <label name="gender">Пол</label>
                    <select type="select" id="gender" name="select-gender">
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </select>
                </div>

                <div className="profile-block__phone">
                    <label for="phone">Телефон</label>
                    <input type="text" id="phone" name="client-phone"></input>
                </div>

                <div className="profile-block__birthday">
                    <label for="date">День рождения</label>
                    <input type="date" id="date" name="client-date"></input>
                </div>

                <div className="profile-block__adress">
                    <label for="adress"></label>
                    <input type="text" id="adress" name="client-adress"></input>
                </div>

                <div className="profile-block__email">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="client-email"></input>
                </div>

            <button>Изменить</button>

            </form>
        </div>

    </div>
}