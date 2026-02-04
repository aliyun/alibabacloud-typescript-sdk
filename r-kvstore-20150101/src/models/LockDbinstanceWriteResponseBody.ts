// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockDBInstanceWriteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-2ev03avw0r0552***
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The reason why write operations on the instance are locked.
   * 
   * @example
   * lock reason
   */
  lockReason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BE6E619-A657-42E3-AD2D-18F8428A****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 21986****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      lockReason: 'LockReason',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      lockReason: 'string',
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

