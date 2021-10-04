type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ setCity, city, getWeather }: FormPropsType) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type='text'
        name='city'
        placeholder='都市名'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type='submit'>Get Weather</button>
    </form>
  );
};

export default Form;
