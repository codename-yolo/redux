import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Todo from '../Todo'
import { todosRemainingSelector } from '../../redux/selectors'
import todoSlice from './todoSlice'
export default function TodoList() {
  console.log('TodoList view run')

  const dispatch = useDispatch()
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const todoList = useSelector(todosRemainingSelector)

  // const searchText = useSelector(searchTextSelector);
  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }
  const handleOnchangeSelect = (value) => {
    setPriority(value) // sd libary antd thi se khong tra lai event obj ma se tra ve value
  }

  const handleAddButtonClick = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      }),
    )
    setTodoName('')
    setPriority('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(({ id, name, priority, completed }) => {
          return (
            <Todo
              key={id}
              id={id}
              name={name}
              prioriry={priority}
              completed={completed}
            />
          )
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            onChange={handleOnchangeSelect}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddButtonClick} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
