import {useState} from "react";
import Avatar from "../Avartar/Avatar";
import Comment from "../Comment/Comment";

import style from './Post.module.css'

function Post({author, content, publishedAt}) {
    const publishedAtFormatted = new Date(publishedAt).toLocaleDateString('pt-BR')


    const [newComment, setNewComment] = useState('')
    const [comments, setComments] = useState([
        'Fala galeraa 👋',
    ])

    function handleCreateNewComment(event) {
        event.preventDefault()

        setComments([...comments, newComment])
        setNewComment('')
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Digite um comentário')
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewComment(event.target.value)
    }

    function deleteComment(commentToDelete) {
        setComments(comments.filter(comment => comment !== commentToDelete))
    }

    const isNewCommentEmpty = newComment.trim().length === 0

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={style.profile}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedAtFormatted}</time>
            </header>

            <div className={style.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <a key={item.content} href="#">{item.content}</a>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.comments}>
                <strong>Comentários</strong>
                <textarea
                    name="comment"
                    placeholder="Escreva seu comentário..."
                    value={newComment}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>

            <div className={style.commentsList}>
                {comments.map(item => {
                    return <Comment key={item} content={item} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}

export default Post