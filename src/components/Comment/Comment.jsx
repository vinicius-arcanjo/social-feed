import Avatar from "../Avartar/Avatar";
import {ThumbsUp, Trash} from "phosphor-react";

import style from './Comment.module.css'

function Comment({content}) {
    function handleDelete() {
        console.log('Deletar comentário')
    }

    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/vinicius-arcanjo.png" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.author}>
                            <strong>John Doe</strong>
                            <time title="17 de Junho às 23:00:00" dateTime="2022-05-17 23:00:00">Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDelete} title="Deletar comentário" type="button">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment

