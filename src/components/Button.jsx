function Button({ label }) {
  return (
    <button className="border-2 border-orange-500  px-2 py-5 rounded-full hover:text-violet-500">
      {label}
    </button>
  );
}

export default Button;
