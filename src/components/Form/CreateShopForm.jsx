import React from "react";
import axiosInstance from "../../api/axiosInstance";
import { useForm } from "react-hook-form";

function CreateShopForm({ onClose, onSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/shops", data);
      if (response.status === 201) {
        onSuccess();
        onClose();
      }
    } catch (err) {
      console.error("Failed to create shop:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6">
      <h2 className="text-2xl font-bold text-teal-900 drop-shadow-md mb-6 text-center">
        Create New Shop
      </h2>

      {/* Shop Name Input */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-teal-800"
        >
          Shop Name
        </label>
        <input
          id="name"
          {...register("name", {
            required: "Shop Name is required",
            validate: (value) =>
              value.includes("Toko") || "Toko harus punya kata toko",
          })}
          className="mt-2 w-full border border-teal-400 rounded-lg p-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Admin Email Input */}
      <div className="mb-5">
        <label
          htmlFor="adminEmail"
          className="block text-sm font-medium text-teal-800"
        >
          Admin Email
        </label>
        <input
          id="adminEmail"
          type="email"
          {...register("adminEmail", {
            required: "Admin Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="mt-2 w-full border border-teal-400 rounded-lg p-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
        {errors.adminEmail && (
          <p className="text-red-500 text-sm mt-1">
            {errors.adminEmail.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition mr-3"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-md shadow-teal-900/30 hover:bg-teal-500 transition transform active:scale-95"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateShopForm;
