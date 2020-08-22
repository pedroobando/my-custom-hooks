# useForm

Ejemplo de uso:

```
  const initialForm = {
    nameField: '',
    ageField: 0,
    emailField: '',
    activoField: false
  }

  const [formValues, handleInputChange, reset] = useForm(initialForm);
  
  const { nameField, ageField, emailField, activoField } = formValues;
```


Implementacion
```
  <input
    type="text"
    className="form-control"
    placeholder="Indique el name"
    name="nameField"
    value={nameField}
    id=""
    onChange={handleInputChange}
  />
  
  <input
    type="email"
    className="form-control"
    placeholder="Put your email"
    name="emailField"
    value={emailField}
    id=""
    onChange={handleInputChange}
  />
```
