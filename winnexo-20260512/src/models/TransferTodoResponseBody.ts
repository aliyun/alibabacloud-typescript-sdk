// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTodoResponseBodyTargets extends $dara.Model {
  /**
   * @remarks
   * The processing result. Valid values: CREATED, REVIVED, and ALREADY_PENDING.
   * 
   * @example
   * CREATED
   */
  result?: string;
  /**
   * @remarks
   * The ID of the target user.
   * 
   * @example
   * 43
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferTodoResponseBody extends $dara.Model {
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
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The processing results for each target.
   */
  targets?: TransferTodoResponseBodyTargets[];
  /**
   * @remarks
   * The ID of the to-do task.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      targets: 'targets',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      targets: { 'type': 'array', 'itemType': TransferTodoResponseBodyTargets },
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

