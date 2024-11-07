import { Helmet } from "react-helmet";

import Profile from './Profile.jsx';
import Experience from './Experience.jsx';


const Home = () => {
    //? Web Title here!!
    const webTitle = "Lisan Shidqi Farizan | Home";

    return (
        <>
            <Helmet title={webTitle} />
            <div class="main-wrapper">
                {/*  Profile  */}
                <Profile />
                {/* Experience Section  */}
                <Experience />
            </div>
        </>
    )
}

export default Home;