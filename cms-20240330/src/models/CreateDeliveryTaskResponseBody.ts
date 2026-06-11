// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID for the request.
   * 
   * @example
   * 4CB23A2E-B426-5D4B-9AA2-6C7A508D954B
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the delivery task.
   * 
   * @example
   * 98e367d8fb8cc83b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

