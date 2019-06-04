import React, { Component } from 'react'


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "addres1": "",
      "address2": "",
      "city": "",
      "state": "",
      "zipCode": ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);

  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
      addres1: e.target.value,
      city: e.target.value,
      states: e.target.value,
      zipCode: e.target.value,
    });
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.name);
    e.preventDefault();
  }

  resetForm() {
    this.setState({
      ...this.state,
      "name": "",
      "addres1": "",
      "address2": "",
      "city": "",
      "state": "",
      "zipCode": ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationTooltip01">Name</label>
              <input type="text" class="form-control" id="validationTooltip01" placeholder="Name" required
                value={this.state.name} onChange={this.handleChange} />

              <div class="invalid-tooltip">
                Please input your name
              </div>
            </div>
          </div>

          <div class="form-row">

            <div class="col">
              <label >Address1</label>
              <input type="text" class="form-control" placeholder="Address1" required 
              value={this.state.addres1} onChange={this.handleChange} />
            </div>
            <div class="col">
              <label >Address2</label>
              <input type="text" class="form-control" placeholder="Address2" 
              value={this.state.address2} onChange={this.handleChange} />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip03">City</label>
              <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required 
              value={this.state.city} onChange={this.handleChange} />
              <div class="invalid-tooltip">
                Please provide a valid city.
               </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip04">State</label>
              <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required 
              value={this.state.states} onChange={this.handleChange} />
              <div class="invalid-tooltip">
                Please provide a valid state.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">Zip</label>
              <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required 
              value={this.state.zip} onChange={this.handleChange} />
              <div class="invalid-tooltip">
                Please provide a valid zip.
              </div>
            </div>
          </div>

          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" onClick={this.resetForm}/>
        </form>



        <ShowFormData />
      </div>
    )
  }
}

class ShowFormData extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

