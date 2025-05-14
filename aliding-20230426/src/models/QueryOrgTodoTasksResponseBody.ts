// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryOrgTodoTasksResponseBodyTodoCards } from "./QueryOrgTodoTasksResponseBodyTodoCards";


export class QueryOrgTodoTasksResponseBody extends $dara.Model {
  /**
   * @example
   * 15
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  todoCards?: QueryOrgTodoTasksResponseBodyTodoCards[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      todoCards: 'todoCards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      todoCards: { 'type': 'array', 'itemType': QueryOrgTodoTasksResponseBodyTodoCards },
    };
  }

  validate() {
    if(Array.isArray(this.todoCards)) {
      $dara.Model.validateArray(this.todoCards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

