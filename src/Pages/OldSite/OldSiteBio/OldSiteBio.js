import React from "react";
import "./OldSiteBio.css";
import "./bio.css";

class OldSiteBio extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <>
                <body>
                    <img className = "cvTitle" src="bioTitle.png" alt="biography title"/>
                    <div className = "tbar"></div>
                    <a href = "index.html"><img className = "home2" src = "home2.png" href = "Module1.html" alt="home button" /></a>
                    <a href = "resume.html"><img className = "resume2" src = "Resume2.png" alt="resume button"/></a>
                    <a href = "imsorry.html"><img className = "blog2" src = "blog2.png" alt="resume button" /></a>
                    <a href = "portfolio.html"><img className = "portfolio2" src = "portfolio2.png" alt="portfolio button"/></a>
                    <div className = "wrapper">
                        <div className = "wrappertext">
                            <p>
                                My name is Syrus Maurice Gaddy.
                                <br/><br/> 
                                As of May 2016, I am a Computer Science graduate with a minor in Mathematics.<br/><br/>
                                Objectively, I am a champion of the Inaugural Swarmathon Robotics Physical Challenge.
                                In 2015, I recieved an Honorable Mention in the Regional Intercollegiate Programming contest hosted by IBM at Duke University, 
                                reaching the top half of participants. I am also self taught web designer who began working with HTML & Adobe Photoshop in middle school. 
                                I have sold computers for Best Buy and I have done professional troubleshooting with Apple. 
                                During my time at Fayetteville State University I almost single-handedly recorded, edited, and produced a 10-minute documentary for 
                                Fayetteville Urban Ministries' Executive Director, for which I recieved an A grade.<br/><br/>
                                But really? I am an artist who is attempting to use technology as a medium to express ideas and to apply them on a large scale to benefit humanity. 
                                Currently, I am still in my early stages of development. What that really means is that I am learning everything I can every day to gain the skills 
                                I need to combine my left and right-brained abilities to produce something unique for the world and loving every moment of it. 
                                <br/><br/>
                                I am currently dedicating my summer to learning as much as I could to prepare for my desired job in the software engineering field. 
                                This fall, I plan to put all of my IT, programming, and scripting abilities to the test in my first full-time job post-graduation. 
                                In the future, I plan to pursue a Masters Degree in Artificial Intelligence and a Ph.D. in Robotics. 
                            </p>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}

export default OldSiteBio;