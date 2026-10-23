// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoResponseBodyTodosAssignees extends $dara.Model {
  /**
   * @remarks
   * The processing time in UTC+8. This field is empty if the item is unprocessed.
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  actedAt?: string;
  /**
   * @remarks
   * The source of the assignee. Valid values: ORIGINAL and TRANSFERRED.
   * 
   * @example
   * ORIGINAL
   */
  assigneeSource?: string;
  /**
   * @remarks
   * The user ID of the assignee.
   * 
   * @example
   * 42
   */
  assigneeUserId?: string;
  /**
   * @remarks
   * The read time in UTC+8. This field is empty if the item is unread.
   * 
   * @example
   * 2026-10-12 10:01:00
   */
  readAt?: string;
  /**
   * @remarks
   * The action status of the assignee.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The user ID of the person who transferred the task. This field is populated only when the task is transferred.
   * 
   * @example
   * 43
   */
  transferredFromUserId?: string;
  static names(): { [key: string]: string } {
    return {
      actedAt: 'actedAt',
      assigneeSource: 'assigneeSource',
      assigneeUserId: 'assigneeUserId',
      readAt: 'readAt',
      status: 'status',
      transferredFromUserId: 'transferredFromUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actedAt: 'string',
      assigneeSource: 'string',
      assigneeUserId: 'string',
      readAt: 'string',
      status: 'string',
      transferredFromUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoResponseBodyTodos extends $dara.Model {
  /**
   * @remarks
   * The assignees.
   */
  assignees?: GetTodoResponseBodyTodosAssignees[];
  /**
   * @remarks
   * The completion time in UTC+8.
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  completedAt?: string;
  /**
   * @remarks
   * The user ID of the person who completed the to-do item.
   * 
   * @example
   * 42
   */
  completedByUserId?: string;
  /**
   * @remarks
   * The creation time in UTC+8.
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time in UTC+8.
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the assistant message. This field is empty if there is no conversation source.
   * 
   * @example
   * msg-1
   */
  messageId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * MEDIUM
   */
  priority?: string;
  /**
   * @remarks
   * The list of questions in the original JSONB format.
   * 
   * @example
   * q1=Sample question
   */
  questions?: { [key: string]: any };
  /**
   * @remarks
   * The response content in the original JSONB format.
   * 
   * @example
   * result=Approved
   */
  resultPayload?: { [key: string]: any };
  /**
   * @remarks
   * The source context passed through in its original format.
   * 
   * @example
   * source=openapi
   */
  sourceContext?: { [key: string]: any };
  /**
   * @remarks
   * The primary status of the to-do item.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The summary of the to-do item.
   * 
   * @example
   * To-do item summary
   */
  summary?: string;
  /**
   * @remarks
   * The title of the to-do item.
   * 
   * @example
   * Governance approval
   */
  title?: string;
  /**
   * @remarks
   * The ID of the to-do item.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      assignees: 'assignees',
      completedAt: 'completedAt',
      completedByUserId: 'completedByUserId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      messageId: 'messageId',
      priority: 'priority',
      questions: 'questions',
      resultPayload: 'resultPayload',
      sourceContext: 'sourceContext',
      status: 'status',
      summary: 'summary',
      title: 'title',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignees: { 'type': 'array', 'itemType': GetTodoResponseBodyTodosAssignees },
      completedAt: 'string',
      completedByUserId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      messageId: 'string',
      priority: 'string',
      questions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultPayload: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      summary: 'string',
      title: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignees)) {
      $dara.Model.validateArray(this.assignees);
    }
    if(this.questions) {
      $dara.Model.validateMap(this.questions);
    }
    if(this.resultPayload) {
      $dara.Model.validateMap(this.resultPayload);
    }
    if(this.sourceContext) {
      $dara.Model.validateMap(this.sourceContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoResponseBody extends $dara.Model {
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
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The single result returned when you query by todoId. This field is empty for other query types. The field set is the same as the flattened structure of getTodoDetail.
   * 
   * @example
   * Sample to-do key-value pair
   */
  todo?: { [key: string]: any };
  /**
   * @remarks
   * The multiple results returned when you query by workItemId or messageId. This field is empty for todoId queries.
   */
  todos?: GetTodoResponseBodyTodos[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      todo: 'todo',
      todos: 'todos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      todo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      todos: { 'type': 'array', 'itemType': GetTodoResponseBodyTodos },
    };
  }

  validate() {
    if(this.todo) {
      $dara.Model.validateMap(this.todo);
    }
    if(Array.isArray(this.todos)) {
      $dara.Model.validateArray(this.todos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

