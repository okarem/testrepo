import React from 'react';
import "./Home.css"
import OneFrame from "../../components/OneFrame/OneFrame"
const Home = () => {

    return <div>
        <h1>HOME PAGE</h1>
        <div className="multiple-frames">
            <OneFrame value={{ link: "#", title: "1st Title", imageUrl: "https://dummyimage.com/127X200/ff799e/fff.jpg&text=dummy+apple" }} />
            <OneFrame value={{ link: "#", title: "2nd Title", imageUrl: "https://dummyimage.com/127X200/ff799e/fff.jpg&text=dummy+banana" }} />
        </div></div>;
};
export default Home;