import { useState } from 'react';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import { useForm } from '../context/FormContext';
import { validateStepOne, validateStepTwo } from '../utils/validation';
import { registerUser } from '../services/registerService';

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { formData } = useForm();

  const handleNext = () => {
    const stepErrors = validateStepOne(formData);
    if (Object.keys(stepErrors).length === 0) {
      setErrors({});
      setStep(2);
    } else {
      setErrors(stepErrors);
    }
  };

  const handleSubmit = async () => {
    const stepErrors = validateStepTwo(formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    try {
      setLoading(true);
      await registerUser(payload);
      setSuccess(true);
    } catch (error) {
      alert(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

      <div className="mb-4">
        <div className="h-2 w-full bg-gray-200 rounded">
          <div
            className={`h-2 rounded transition-all duration-300 ${
              step === 1 ? 'w-1/2 bg-red-400' : 'w-full bg-red-600'
            }`}
          ></div>
        </div>
        <p className="text-center mt-2 text-sm text-gray-600">Step {step} of 2</p>
      </div>

      {step === 1 ? <StepOne errors={errors} /> : <StepTwo errors={errors} />}

      <div className="mt-6 flex justify-between">
        {step === 2 && (
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setStep(1)}
          >
            Back
          </button>
        )}

        {step === 1 ? (
          <button
            className="ml-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        )}
      </div>

      {success && (
        <p className="mt-4 text-green-600 font-medium text-center">
          Registration successful!
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;
