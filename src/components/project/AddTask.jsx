import axios from "axios";
import React from "react";
 import { useForm } from "react-hook-form";
import { useState } from "react";

const AddTask = () =>{
    const {  register,handleSubmit, formState: { errors } } = useForm();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form Data Submitted:", formData);
    //   };

    const submitHandler = async (data) => {
      try {
        const response = await axios.post("http://localhost:3000/task", data);
        console.log("task created successfully:", response.data);
        alert("task added successfully!");
      } catch (error) {
        console.error("Error creating project:", error);
        alert("Failed to add project. Please try again.");
      }
    };
  const [formData, setFormData] = useState({
    projectid: "",
    taskname: "",
    assignedto: "",
    startdate: "",
    enddate: "",
    status: "",
    priority: "",
    dependencies: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            .heading{
            text-align:center;
            }
           
        `}
      </style>
    {/* <div className="max-w-lg mx-auto mt-10 p-4 shadow-lg"> */}
    <div className="add-project-container">

     
        <h2 className="heading">Create Task</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <div>
            <label>Project ID</label>
            <input name="projectid" value={formData.projectid} onChange={handleChange} required />
          </div>
          <div>
            <label>Task Name</label>
            {/* <input name="taskname" value={formData.taskname} onChange={handleChange} required /> */}
            <input type="text" {...register("taskname",{required:"task name is required"})}></input>
          </div>
          <div>
            <label>Assigned To</label>
            {/* <input name="assignedto" value={formData.assignedto} onChange={handleChange} required /> */}
            <input type="text" {...register("assignedto",{required:"assignedto is required"})}></input>
          </div>
          <div>
            <label>Start Date</label>
            {/* <input type="date" name="startdate" value={formData.startdate} onChange={handleChange} required /> */}
            <input type="date" {...register("startdate",{required:"start Date is required"})}></input>

          </div>
          <div>
            <label>End Date</label>
            <input type="date" {...register("enddate",{required:"end Date is required"})}></input>
          </div>
          <div>
            <label>Status</label>
         
            <select {...register("status", { required: "status is required" })}>           
              
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              
            </select>
          </div>
          {/* <div>
            <label>Priority</label>
            <select name="priority" onValueChange={(value) => setFormData({ ...formData, priority: value })}>
              <selecttrigger><selectvalue placeholder="Select Priority" /></selecttrigger>
              <selectcontent>
                <selectitem value="Low">Low</selectitem>
                <selectitem value="Medium">Medium</selectitem>
                <selectitem value="High">High</selectitem>
              </selectcontent>
            </select>
          </div> */}
          <div>
            <label>Dependencies</label>
            <input type="text" {...register("dependencies",{required:"dependencies is required"})}></input>
          </div>
          <button type="submit" className="w-full">Submit</button>
        </form>
    
    </div>
    </div>
  );
}
export default AddTask
