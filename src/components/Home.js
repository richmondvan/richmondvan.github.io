import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './Home.css'
import Typewriter from 'typewriter-effect';
import {Button} from 'react-bootstrap';

function Home()
{
    return (
        <div className="landing">
            <div>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("<h1>Hi, I'm Evan!<h1>").start();
                    }}
                    options={{cursor: "<h1>|<h1>"}}
                />
            </div>
            <br/>
            <p className="about">
                I'm a programmer based in Toronto, ON, currently studying at St. Theresa of Lisieux CHS.
                My online handle is <code>richmondvan</code>. <br/> <br/> 
                If you're here, you might want to check out some of the links below, or scroll down to see my projects.<br/><br/>
            </p>
            <div className="horizontal" style={{marginBottom: '10em'}}>
                <Button href="./Resume.pdf" variant="outline-primary mainbutton">
                résumé
                </Button>
                <Button href="https://github.com/richmondvan" variant="outline-primary">
                github
                </Button>
            </div>

        </div>
    );
}

export default Home;