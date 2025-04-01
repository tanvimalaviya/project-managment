import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";


const AddProject = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/project", data);
      console.log("Project created successfully:", response.data);
      alert("Project added successfully!");
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to add project. Please try again.");
    }
  };

  return (
    <div>
  
  <style>
        {`
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f0f0;
          }

          .add-project-container {
            // max-width: 600px;
            width: 700px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .add-project-container h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }

          .add-project-container form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .add-project-container form div {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .add-project-container label {
            font-weight: bold;
            color: #555;
          }

          .add-project-container input,
          .add-project-container select {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }

          .add-project-container input:focus,
          .add-project-container select:focus {
            border-color: #007bff;
            outline: none;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }

          .add-project-container button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .add-project-container button:hover {
            background-color: #0056b3;
          }

          .add-project-container p {
            color: red;
            font-size: 14px;
            margin: 0;
          }
        `}
      </style>
<div className="add-project-container">
      <h1>ADD PROJECT</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            {...register("title", { required: "title is required" })}
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
        </div>

        <div>
          <label>Technology</label>
          <select {...register("technology", { required: "technology is required" })}>
            <option value="">Select Technology</option>
            <option value="MERN-Stack">MERN-Stack</option>
            <option value="JAVA">JAVA</option>
            <option value="C or C++">C or C++</option>
            <option value="Other">Other</option>
          </select>
          {errors.technology && <p style={{ color: "red" }}>{errors.technology.message}</p>}
        </div>

        <div>
          <label>Description</label>
          <textarea
            type="text"
            {...register("description", { required: "description is required" })}
          />
          {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
        </div>

        <div>
          <label>Start Date</label>
          <input
            type="date"
            {...register("startdate", { required: "startdate is required" })}
          />
          {errors.startdate && <p style={{ color: "red" }}>{errors.startdate.message}</p>}
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            {...register("completiondate", { required: "compltiondate is required" })}
          />
          {errors.completiondate && <p style={{ color: "red" }}>{errors.completiondate.message}</p>}
        </div>

        <div>
          <label>Status</label>
          <select {...register("status")}>
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>

        <button type="submit">Add Project</button>
      </form>
    </div>
    </div>
  );
};

export default AddProject;
// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";

// const AddProject = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const submitHandler = async (data) => {
//     try {
//       const response = await axios.post("http://localhost:3000/project", data);
//       console.log("Project created successfully:", response.data);
//       alert("Project added successfully!");
//     } catch (error) {
//       console.error("Error creating project:", error);
//       alert("Failed to add project. Please try again.");
//     }
//   };

//   return (
//     <div>
//       {/* Internal CSS */}
//       <style>
//         {`
//           body {
//             margin: 0;
//             padding: 0;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             min-height: 100vh;
//             background-color: #f0f0f0;
//           }

//           .add-project-container {
//             max-width: 600px;
//             width: 100%;
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             background-color: #f9f9f9;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           }

//           .add-project-container h1 {
//             text-align: center;
//             color: #333;
//             margin-bottom: 20px;
//           }

//           .add-project-container form {
//             display: flex;
//             flex-direction: column;
//             gap: 15px;
//           }

//           .add-project-container form div {
//             display: flex;
//             flex-direction: column;
//             gap: 5px;
//           }

//           .add-project-container label {
//             font-weight: bold;
//             color: #555;
//           }

//           .add-project-container input,
//           .add-project-container select {
//             padding: 10px;
//             border: 1px solid #ccc;
//             border-radius: 4px;
//             font-size: 16px;
//           }

//           .add-project-container input:focus,
//           .add-project-container select:focus {
//             border-color: #007bff;
//             outline: none;
//             box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
//           }

//           .add-project-container button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             border-radius: 4px;
//             font-size: 16px;
//             cursor: pointer;
//             transition: background-color 0.3s ease;
//           }

//           .add-project-container button:hover {
//             background-color: #0056b3;
//           }

//           .add-project-container p {
//             color: red;
//             font-size: 14px;
//             margin: 0;
//           }
//         `}
//       </styl>

//       {/* JSX */}
//       <div className="add-project-container">
//         <h1>ADD PROJECTS</h1>
//         <form onSubmit={handleSubmit(submitHandler)}>
//           <div>
//             <label>Project Name</label>
//             <input
//               type="text"
//               {...register("title", { required: "Project Name is required" })}
//             />
//             {errors.title && (
//               <p>{errors.title.message}</p>
//             )}
//           </div>

//           <div>
//             <label>Technology</label>
//             <select
//               {...register("technology", { required: "Technology is required" })}
//             >
//               <option value="">Select Technology</option>
//               <option value="MERN-Stack">MERN-Stack</option>
//               <option value="JAVA">JAVA</option>
//               <option value="C or C++">C or C++</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.technology && (
//               <p>{errors.technology.message}</p>
//             )}
//           </div>

//           <div>
//             <label>Description</label>
//             <input
//               type="text"
//               {...register("description", { required: "Description is required" })}
//             />
//             {errors.description && (
//               <p>{errors.description.message}</p>
//             )}
//           </div>

//           <div>
//             <label>Start Date</label>
//             <input
//               type="date"
//               {...register("startdate", { required: "Start Date is required" })}
//             />
//             {errors.startdate && (
//               <p>{errors.startdate.message}</p>
//             )}
//           </div>

//           <div>
//             <label>End Date</label>
//             <input
//               type="date"
//               {...register("completiondate", { required: "End Date is required" })}
//             />
//             {errors.completiondate && <p>{errors.completiondate.message}</p>}
//           </div>

//           <div>
//             <label>Status</label>
//             <select {...register("status")}>
//               <option value={true}>Active</option>
//               <option value={false}>Inactive</option>
//             </select>
//           </div>

//           <button type="submit">Add Project</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProject;