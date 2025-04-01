// import React from "react";

// const  DemoForm = () => {
//   return (
//     <form>
//       <div className="mb-3">
//         <label htmlFor="exampleInputEmail1" className="form-label">
//           Email address
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//         />
//         <div id="emailHelp" className="form-text">
//           We'll never share your email with anyone else.
//         </div>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">
//           Password
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           id="exampleInputPassword1"
//         />
//       </div>
//       <div className="input-group mb-3">
//         <input type="file" className="form-control" id="inputGroupFile02" />
//         <label className="input-group-text" htmlFor="inputGroupFile02">
//           Upload
//         </label>
//       </div>
//       <div className="mb-3 form-check">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="exampleCheck1"
//         />
//         <label className="form-check-label" htmlFor="exampleCheck1">
//           Check me out
//         </label>
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default DemoForm;
import React from 'react';
import '../../assets/Form.css'

const DemoForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="exampleInputEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default DemoForm;