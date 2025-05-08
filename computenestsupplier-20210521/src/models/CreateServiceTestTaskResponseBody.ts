// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceTestTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF0F666F-FBBC-55C3-A368-C955DE7B4839
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * stt-568c2c5a687a409b977e
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
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

