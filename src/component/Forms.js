import React from 'react';

import { PureComponent } from 'react';

export default class Forms extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

      formState: {
        name: "",
        firstAddress: "",
        secondAddress: "",
        city: "",
        states: "",
        zip: "",
      },
      users: []
    }
  }
  resetFormState() {
    this.setState({
      formState: {
        name: "",
        firstAddress: "",
        secondAddress: "",
        city: "",
        states: "",
        zip: "",
      }
    });
  };

  onChange = event => {
    this.setState({
      formState: {
        ...this.state.formState,
        [event.target.name]: event.target.value,
        [event.target.firstAddress]: event.target.value,
        [event.target.secondAddress]: event.target.value,
        [event.target.city]: event.target.value,
        [event.target.states]: event.target.value,
        [event.target.zip]: event.target.value,
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const name = event.target.querySelector("input[name='name']").value;
    const firstAddress = event.target.querySelector("input[name='firstAddress']").value;
    const secondAddress = event.target.querySelector("input[name='secondAddress']").value;
    const city = event.target.querySelector("input[name='city']").value;
    const states = event.target.querySelector("input[name='states']").value;
    const zip = event.target.querySelector("input[name='zip']").value;
    this.setState({
      users: [
        ...this.state.users,
        {
          name,
          firstAddress,
          secondAddress,
          city,
          states,
          zip,
        }
      ]
    });

    this.resetFormState();
  };

  proble3() {
    const search = (tree, target) => {
      const stack = [tree];
      
      while (stack.length) {
        const curr = stack.pop();
        
        if (curr.id === target) {
          return curr.label;
        }
    
        stack.push(...curr.child);
      }
    };
  
    const tree = {"id":1,"label":"A","child":[{"id":2,"label":"B","child":[{"id":5,"label":"E","child":[]},{"id":6,"label":"F","child":[]},{"id":7,"label":"G","child":[]}]},{"id":3,"label":"C","child":[]},{"id":4,"label":"D","child":[{"id":8,"label":"H","child":[]},{"id":9,"label":"I","child":[]}]}]};

    console.log("Is this is what resolve problem 3?")
    for (let i = 0; ++i < 12; console.log(search(tree, i)));

  }

  render() {
    const { users, formState } = this.state;



    return (
      <div>
      <button className="problem3" onClick={this.proble3.bind(this)}>Resolve problem 3, see in the console</button>
      <br />
        <Form
          formState={formState}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Table
          users={users}
        />

      </div>
    );
  }
}

const Table = ({ users = [] }) => {
  return (
    <div className="table">
      <div className="table-header">
        <div className="row">
          <div className="column">Name</div>
          <div className="column">First Addres</div>
          <div className="column">Second Address</div>
          <div className="column">City</div>
          <div className="column">State</div>
          <div className="column">Zip</div>
        </div>
      </div>
      <div className="table-body">
        {users.map((user, index) => {
          return (
            <div className="row" key={index} >
              <div className="column">{user.name}</div>
              <div className="column">{user.firstAddress}</div>
              <div className="column">{user.secondAddress}</div>
              <div className="column">{user.city}</div>
              <div className="column">{user.states}</div>
              <div className="column">{user.states}</div>
              <div className="column">
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Field = ({ label = "", name = "", value = "", onChange }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
};

const Form = ({ formState, onChange, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset>
        <Field
          name="name"
          label="User Name"
          value={formState.name}
          onChange={onChange}
        />
        <Field
          name="firstAddress"
          label="First Address"
          value={formState.firstAddress}
          onChange={onChange}
        />
        <Field
          name="secondAddress"
          label="Second Address"
          value={formState.secondAddress}
          onChange={onChange}
        />
        <Field
          name="city"
          label="City"
          value={formState.city}
          onChange={onChange}
        />
        <Field
          name="states"
          label="State"
          value={formState.states}
          onChange={onChange}
        />
        <Field
          name="zip"
          label="Zip Code"
          value={formState.zip}
          onChange={onChange}
        />
      </fieldset>
      <button>Submit</button>
    </form>
  );
};
