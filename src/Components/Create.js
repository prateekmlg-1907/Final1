// import React, { useState } from 'react';
// import './Create.css'; // Import your custom CSS if needed

// const Create = () => {
//   const [recipeName, setRecipeName] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [steps, setSteps] = useState('');
//   const [serves, setServes] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here you can process the form data, save the recipe, etc.

//     // Clear the form after submission
//     setRecipeName('');
//     setIngredients('');
//     setSteps('');
//     setServes('');
//   };

//   return (
//     <div className='create-page'>
//       <div className='create-container'>
//         <div className='create-box'>
//           <h3 className='text-center mb-4'>Create New Recipe</h3>
//           <form onSubmit={handleSubmit}>
            // <div className='mb-3'>
            //   <label htmlFor='recipeName'>Recipe Name</label>
            //   <input
            //     type='text'
            //     className='form-control'
            //     id='recipeName'
            //     value={recipeName}
            //     onChange={(e) => setRecipeName(e.target.value)}
            //   />
            // </div>
            // <div className='mb-3'>
            //   <label htmlFor='ingredients'>Ingredients</label>
            //   <textarea
            //     className='form-control'
            //     id='ingredients'
            //     value={ingredients}
            //     onChange={(e) => setIngredients(e.target.value)}
            //   />
            // </div>
            // <div className='mb-3'>
            //   <label htmlFor='steps'>Stepwise Explanation</label>
            //   <textarea
            //     className='form-control'
            //     id='steps'
            //     value={steps}
            //     onChange={(e) => setSteps(e.target.value)}
            //   />
            // </div>
            // <div className='mb-3'>
            //   <label htmlFor='serves'>Number of Serves</label>
            //   <input
            //     type='number'
            //     className='form-control'
            //     id='serves'
            //     value={serves}
            //     onChange={(e) => setServes(e.target.value)}
            //   />
            // </div>
//             <button className='btn btn-primary' type='submit'>
//               Create Recipe
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className='background-details'>
//         {/* Add background image or details */}
//       </div>
//     </div>
//   );
// };

// export default Create;


// import React, { useState } from 'react';
// import './Create.css';

// const Create = () => {
//   const [recipeName, setRecipeName] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [steps, setSteps] = useState('');
//   const [serves, setServes] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here you can process the form data, save the recipe, etc.

//     // Clear the form after submission
//     setRecipeName('');
//     setIngredients('');
//     setSteps('');
//     setServes('');
//   };

//   return (
//     <div className='create-page'>
//       <div className='background-details'>
//       </div>
//       <div className='create-container'>
//         <div className='create-box'>
//           <h3 className='text-center mb-4'>Create New Recipe</h3>
//           <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//               <label htmlFor='recipeName'>Recipe Name</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='recipeName'
//                 value={recipeName}
//                 onChange={(e) => setRecipeName(e.target.value)}
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='ingredients'>Ingredients</label>
//               <textarea
//                 className='form-control'
//                 id='ingredients'
//                 value={ingredients}
//                 onChange={(e) => setIngredients(e.target.value)}
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='steps'>Stepwise Explanation</label>
//               <textarea
//                 className='form-control'
//                 id='steps'
//                 value={steps}
//                 onChange={(e) => setSteps(e.target.value)}
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='serves'>Number of Serves</label>
//               <input
//                 type='number'
//                 className='form-control'
//                 id='serves'
//                 value={serves}
//                 onChange={(e) => setServes(e.target.value)}
//               />
//             </div>
//             <button className='btn btn-primary' type='submit'>
//               Create Recipe
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;

import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import './Create.css';

const Create = () => {
  return (
    <div className='create-recipe-container'>
      <MDBContainer fluid>
        <MDBRow className="justify-content-center">
          <MDBCol md='8' lg='6'>
            <div className='d-flex flex-column align-items-center'>
              {/* Updated h1 element */}
              <h1 className="form-title">Create a Recipe</h1>
            </div>
            <div className='bg-white-opacity rounded shadow p-4'>
              <label className="form-label" htmlFor='recipeName'>Recipe Name</label>
              <input className="form-input" id='recipeName' type='text' placeholder='Enter recipe name' />
              <label className="form-label" htmlFor='ingredients'>Ingredients</label>
              <textarea className="form-textarea" id='ingredients' placeholder='Enter ingredients'></textarea>
              <label className="form-label" htmlFor='serves'>Number of Serves</label>
              <input className="form-input" id='serves' type='number' placeholder='Enter number of serves' />
              <label className="form-label" htmlFor='steps'>Stepwise Explanation</label>
              <textarea className="form-textarea" id='steps' placeholder='Enter stepwise explanation'></textarea>
              <div className="d-grid gap-2">
                <button className='form-btn' type='submit'>Create Recipe</button>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Create;
