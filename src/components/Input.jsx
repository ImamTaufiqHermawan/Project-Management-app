function Input({ textArea, label }) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textArea ? <textarea name="" id=""></textarea> : <input type="text" />}
    </p>
  );
}

export default Input;
