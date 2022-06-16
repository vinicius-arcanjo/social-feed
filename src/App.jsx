import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import SideBar from "./components/SideBar/SideBar";

import './styles/global.css'

function App() {
    return (
        <>
            <Header/>
            <Container>
                <SideBar/>
            </Container>
        </>
    )
}

export default App
