// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 111111111111111
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F9BDE64-BF30-41F3-BD29-C19CE4AB3404
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 111111111
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

