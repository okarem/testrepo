import React, { useState } from "react";
import "./OneFrame.css"
const OneFrame = (props) => {
    const [frameInfo, setFrameInfo] = useState({ link: "#", title: "Dummy Title", imageUrl: "https://dummyimage.com/127X200/9e799e/fff.jpg&text=dummy+image",...props.value });

    return <div className="one-frame-container">
        <a href={frameInfo.link}>
            <img src={frameInfo.imageUrl} />
            <h3>{frameInfo.title}</h3>
        </a>
    </div>;
}
export default OneFrame;