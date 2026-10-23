// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTodoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of canceled to-do items.
   * 
   * @example
   * 1
   */
  cancelledCount?: number;
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
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The status after cancellation.
   * 
   * @example
   * CANCELLED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the canceled to-do item. This parameter is empty if the to-do item is located by workItemId.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelledCount: 'cancelledCount',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledCount: 'number',
      code: 'string',
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

