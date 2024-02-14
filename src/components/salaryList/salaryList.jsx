import React, { Component } from 'react'

export default class SalaryList extends Component {
  constructor(props) { 
    super(props)
    this.state = this.props.billSalary
  }
  render() {
    const {billSalary} = this.props
    return (
      <div>
        <p>{billSalary}</p>
        <button>Down salary
        </button>
        <button>Rise salary
        </button>
      </div>
    )
  }
}
