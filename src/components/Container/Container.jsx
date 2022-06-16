import style from './Container.module.css'

function Container(props) {
    return (
        <header className={style.wrapper}>{props.children}</header>
    )
}

export default Container

