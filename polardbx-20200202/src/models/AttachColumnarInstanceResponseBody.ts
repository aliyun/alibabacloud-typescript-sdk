// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachColumnarInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @example
   * 422922413
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

