import { useForm } from '../context/FormContext';

function StepTwo({ errors }) {

  const { formData, updateForm } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 2: Security</h2>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>
    </div>
  );
}

export default StepTwo;
