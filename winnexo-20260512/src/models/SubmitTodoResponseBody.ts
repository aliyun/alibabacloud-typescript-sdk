// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTodoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of answer values.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The completion time in ISO 8601 UTC format. This format differs from other fields formatted in UTC+8.
   * 
   * @example
   * 2026-10-12T02:00:00Z
   */
  completedAt?: string;
  /**
   * @remarks
   * The user ID of the user who completed the task.
   * 
   * @example
   * 42
   */
  completedByUserId?: string;
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
   * The status after submission. The value is always COMPLETED.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The answer array. The original text of the question must align with the to-do question.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      completedAt: 'completedAt',
      completedByUserId: 'completedByUserId',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedAt: 'string',
      completedByUserId: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      todoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

