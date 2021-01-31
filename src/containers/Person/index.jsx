import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createPersonAction } from '../../redux/actions/person'

class Person extends Component {
  render() {
    return (
      <div>
        <h2>我是Person组件,上方组件的求和为：{this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="请输入姓名" />
        <input ref={c => this.ageNode = c} type="text" placeholder="请输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map((person) => {
              return <li key={person.id}>{person.name}--{person.age}</li>
            })
          }
        </ul>
      </div>
    )
  }

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    this.props.createPersonAction(personObj)
  }
}


export default connect(
  state => ({
    persons: state.person,
    count: state.count,
  }),
  {
    createPersonAction
  }
)(Person)
