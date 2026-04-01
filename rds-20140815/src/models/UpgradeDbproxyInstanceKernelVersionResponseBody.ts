// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBProxyInstanceKernelVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the database proxy of the instance.
   * 
   * @example
   * bu9***
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 44537EC8-DFA2-4745-B579-E733FF2C5B9A
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 33436****
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

