import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <div className='profilePic' style={{backgroundImage: `url(${data.aboutImage})`}} alt='about jonah' title="photo by Marissa Shea"></div> : null}
            

        </div>  );
    }
}
 
export default About;