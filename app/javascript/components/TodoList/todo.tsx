import React, { useState } from "react";
import axios from "axios";

type Props = {
    id: number,
    title: string,
    checked: boolean
};

const Todo: React.FC<Props> = ({id, title, checked}) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const checkBoxOnCheck = (
      e: React.ChangeEvent<HTMLInputElement>,
      todoItemId: number
    ): void => {
      try {
        axios.post("/todo", {
          id: todoItemId,
          checked: e.target.checked,
        });

        setIsChecked(old => !old);
      } catch(e) {
        console.log(e);
      }
    };

    return(
        <ListGroup.Item key={id}>
          <Form.Check
              type="checkbox"
              label={title}
              checked={isChecked}
              onChange={(e) => checkBoxOnCheck(e, id)}
          />
        </ListGroup.Item>
    )
}

export default Todo;