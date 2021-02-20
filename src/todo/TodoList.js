import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}


function TodoList(props) {
    return(
        //jsx code
        <ul style={styles.ul}>
            {/*скобки говорят что мы сейчас будем писать js код*/}
            { props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={ todo.id } index={index}></TodoItem>
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList