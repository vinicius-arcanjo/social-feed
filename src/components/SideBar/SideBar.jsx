import { PencilLine } from 'phosphor-react'
import style from './SideBar.module.css'

function SideBar() {
    return (
        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src="https://images.unsplash.com/photo-1655244995763-8fb27e73aa18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt="Cover"/>

            <div className={style.profile}>
                <img className={style.avatar} src="https://github.com/vinicius-arcanjo.png" alt="Avatar"/>
                <strong>John Doe</strong>
                <span>@johndoe</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}

export default SideBar

