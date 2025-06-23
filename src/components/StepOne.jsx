import { useForm } from '../context/FormContext';

function StepOne({ errors }) {
  const { formData, updateForm } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 1: Personal Info</h2>

      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
    </div>
  );
}

export default StepOne;
