// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedeployRCInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 866F5EB8-4650-4061-87F0-379F6F968BCE
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-bp10e8orkp8x****
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

