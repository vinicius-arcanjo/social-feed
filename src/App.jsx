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
            name: 'John Doe',
            role: 'Developer'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {type: 'link', content: 'jane.design/doctorcare'},
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
