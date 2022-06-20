import style from './Avatar.module.css'

function Avatar({hasBorder = true, src}) {
    return (
        <img
            className={hasBorder ? style.avatarWithBorder : style.avatar}
            src={src} alt="Avatar"
        />
    )
}

export default Avatar