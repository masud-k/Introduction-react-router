import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is my Home</h2>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Home;