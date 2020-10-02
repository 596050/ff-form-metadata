const { createForm } = require("final-form");

const setFormData = (args, state) => {
  const [name, data] = args;
  const metaObject = { [name]: data };
  const formState = state.formState;

  if (!formState.data) {
    formState.data = metaObject;
  } else {
    formState.data = Object.assign(state.formState.data, metaObject);
  }
};

// Create Form
const form = createForm({
  mutators: { setFormData },
  onSubmit: () => {},
});

form.mutators.setFormData("firstName", { awesome: true });

form.registerField(
  "firstName",
  (formState) => {
    const { awesome } = formState.data; // true
  },
  {
    // ...other subscription items
    data: true,
  }
);

console.log("form.getState()", form.getState());
