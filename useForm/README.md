# useForm

Ejemplo de uso:

```
  const initialForm = {
    name: '',
    email: '',
    activo: false
  }

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { name, email, activo } = formValues;
```

Implementacion

```
  <input
    type="text"
    name="name"
    value={name}
    id=""
    onChange={handleInputChange}
  />

  <input
    type="email"
    placeholder="Put your email"
    name="email"
    value={email}
    id=""
    onChange={handleInputChange}
  />

  <input
    type="checkbox"
    name="activo"
    checked={activo}
    onChange={handleInputChange}
  />
```
