// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoResponseBodyAssignees extends $dara.Model {
  /**
   * @remarks
   * The user ID of the assignee.
   * 
   * @example
   * 43
   */
  assigneeUserId?: string;
  /**
   * @remarks
   * The processing status of the assignee.
   * 
   * @example
   * PENDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      assigneeUserId: 'assigneeUserId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigneeUserId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of assignees.
   */
  assignees?: CreateTodoResponseBodyAssignees[];
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format with a time zone. This format differs from the UTC+8 format string used in the list and details.
   * 
   * @example
   * 2026-10-12T15:00:00+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the to-do item.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The ID of the created to-do item.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      assignees: 'assignees',
      code: 'code',
      gmtCreate: 'gmtCreate',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignees: { 'type': 'array', 'itemType': CreateTodoResponseBodyAssignees },
      code: 'string',
      gmtCreate: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignees)) {
      $dara.Model.validateArray(this.assignees);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

