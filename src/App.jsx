import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import SideBar from "./components/SideBar/SideBar";
import Post from "./components/Post/Post";

import './styles/global.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://avatars0.githubusercontent.com/u/527058?v=4",
            name: 'Vinicius Arcanjo',
            role: 'Developer'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀'
            },
            {type: 'link', content: 'https://github.com/vinicius-arcanjo'},
        ],
        puplishedAt: new Date('2022-05-17 23:00:00'),
    }
]

function App() {
    return (
        <>
            <Header/>
            <Container>
                <SideBar/>
                {posts.map(post => {
                    return (
                        <Post key={post.id} author={post.author} content={post.content} publishedAt={post.puplishedAt}/>
                    )
                })}
            </Container>
        </>
    )
}

export default App
