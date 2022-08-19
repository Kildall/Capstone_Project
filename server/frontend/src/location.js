import './bootstrap.min.css';
import React from 'react';

class Location extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="text-center text-primary">
          <h2>
            We are located at:
          </h2>
        </div>
        <div style={{display:"flex"}}>
        <img src='/location.png' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
              <span>
                Next to you.
              </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default Location;
