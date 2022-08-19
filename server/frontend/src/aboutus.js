import './bootstrap.min.css';
import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="text-center text-primary">
          <h2>
            We are really cool, more like a family.
          </h2>
        </div>
        <div style={{display:"flex"}}>
        <img src='/family.png' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
              <span>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default AboutUs;
