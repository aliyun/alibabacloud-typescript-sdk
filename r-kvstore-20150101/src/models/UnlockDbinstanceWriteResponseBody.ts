// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnlockDBInstanceWriteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * r-2ev03avw0r0552***
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D622714-AEDD-4609-9167-F5DDD3D1****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 10****
   */
  taskId?: number;
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

