function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false
}) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

export default FormField;

