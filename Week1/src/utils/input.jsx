import { useEffect, useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (document.querySelector(`script[src="https://cdnjs.cloudflare.com/ajax/libs/Sly/1.6.1/sly.min.js"]`))
      return;

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Sly/1.6.1/sly.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <input
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
    />
  );
}

export default Input;
