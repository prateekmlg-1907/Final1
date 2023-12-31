

// import React from 'react';
// import './Signup.css'; // Import your custom CSS if needed

// const Signup = () => {
//   return (
//     <div className='signup-container'>
//       <div className='signup-box'>
//         <form>
//           <h3 className='text-center mb-4'>Sign Up</h3>

//           <div className='mb-3'>
//             <input
//               type='text'
//               placeholder='Name'
//               className='form-control'
//               name='Name'
//             />
//           </div>

//           <div className='mb-3'>
//             <input
//               type='number'
//               placeholder='Phone Number'
//               className='form-control'
//               name='Ph_num'
//             />
//           </div>

//           <div className='mb-3'>
//             <input
//               type='number'
//               placeholder='Age'
//               className='form-control'
//               name='Age'
//             />
//           </div>

//           <div className='mb-3'>
//             <input
//               type='email'
//               placeholder='Email'
//               className='form-control'
//               name='Email'
//             />
//           </div>

//           <div className='mb-3'>
//             <input
//               type='password'
//               placeholder='Password'
//               className='form-control'
//               name='Password'
//             />
//           </div>

//           <div className='mb-3 form-check'>
//             <input type='checkbox' className='form-check-input' id='remember' />
//             <label htmlFor='remember' className='form-check-label'>
//               Remember me on this device.
//             </label>
//           </div>

//           <div className='d-grid'>
//             <button className='btn btn-primary' type='submit'>
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;




//  TYPE 2
// import React from 'react';
// import './Signup.css'; // Import your custom CSS if needed

// const Signup = () => {
//   return (
//     <div className='signup-page'>
//       <div className='signup-container'>
//         <div className='signup-box'>
//           <form>
//             <h3 className='text-center mb-4'>Sign Up</h3>

//             <div className='mb-3'>
//               <input
//                 type='text'
//                 placeholder='Name'
//                 className='form-control'
//                 name='Name'
//               />
//             </div>
//             <div className='mb-3'>
//               <input
//               type='number'
//               placeholder='Phone Number'
//               className='form-control'
//               name='Ph_num'
//             />
//           </div>

//           <div className='mb-3'>
//             <input
//               type='number'
//               placeholder='Age'
//               className='form-control'
//               name='Age'
//             />
//           </div>

//           <div className='mb-3'>
//             <input
//               type='email'
//               placeholder='Email'
//               className='form-control'
//               name='Email'
//             />
//           </div>

//           <div className='mb-3'>
//             <input
//               type='password'
//               placeholder='Password'
//               className='form-control'
//               name='Password'
//             />
//           </div>

//           <div className='mb-3 form-check'>
//             <input type='checkbox' className='form-check-input' id='remember' />
//             <label htmlFor='remember' className='form-check-label'>
//               Remember me on this device.
//             </label>
//           </div>
            
//             <div className='d-grid'>
//               <button className='btn btn-primary' type='submit'>
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className='background-details'>
//         {/* Add details and background image */}
//       </div>
//     </div>
//   );
// };

// export default Signup;


//TYPE 3
import React from 'react';

import image1 from './Crave Crafters.png';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

const Signup = () => {
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <img src={image1}  style={{height:220, width:400,justifyContent:"center"}} alt="Logo" className="me-3" />
          </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Sign Up</h3>

              <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='First Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Last Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Password' id='formControlLg' type='password' size="lg"/>
              <div className="d-grid gap-2">
              <MDBBtn className="mb-4 px-5 mx-5" color='info' size='lg'>Sign Up</MDBBtn>
              </div>
              <p className='ms-5'>Already have an account? <a href="/login" className="link-info">Log in here</a></p>

            </div>
          </MDBCol>
          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img
              src="https://assets.epicurious.com/photos/6362d443105688a4b1411056/3:4/width_1024/Epicurious-Id-portal-Image.png"
              alt="Signup image"
              className="w-100"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Signup;