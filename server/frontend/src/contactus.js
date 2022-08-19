import './bootstrap.min.css';
import React from 'react';

class ContactUs extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="text-center text-primary">
          <h2>
            Please talk to us!
          </h2>
        </div>
        <div style={{display:"flex"}}>
        <img src='/contatus.jpeg' style={{width: "300px"}}/>
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

export default ContactUs;
