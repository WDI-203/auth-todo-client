import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const TodoCard = ({ todo, handleDelete }) => {
	const deleteButton = () => {
		//calls the handleDelete from the props and passes in the id
		handleDelete(todo._id);
	};
	return (
		<tr style={{ margin: "5px", textAlign: "start" }}>
			<td>
				<input type="checkbox" defaultChecked={todo.completed} />
			</td>
			<td>
				{todo.title}: {todo.description}
			</td>
			<td>{todo.priority}</td>
			<td>
				<FontAwesomeIcon icon={faPenToSquare} />
				<FontAwesomeIcon icon={faTrashCan} onClick={deleteButton} />
			</td>
		</tr>
	);
};

export default TodoCard;
