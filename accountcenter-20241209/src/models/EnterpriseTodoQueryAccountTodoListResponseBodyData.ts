// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoList } from "./EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoList";


export class EnterpriseTodoQueryAccountTodoListResponseBodyData extends $dara.Model {
  count?: number;
  todoList?: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      todoList: 'TodoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      todoList: { 'type': 'array', 'itemType': EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoList },
    };
  }

  validate() {
    if(Array.isArray(this.todoList)) {
      $dara.Model.validateArray(this.todoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

