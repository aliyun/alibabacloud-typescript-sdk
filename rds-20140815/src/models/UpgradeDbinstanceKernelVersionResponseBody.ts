// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceKernelVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-bpxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DA2ECBA0-4745-4491-9166-799FF8984AC9
   */
  requestId?: string;
  /**
   * @remarks
   * The new minor engine version of the instance.
   * 
   * @example
   * xcluster80_20210305
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 226917****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      targetMinorVersion: 'TargetMinorVersion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      targetMinorVersion: 'string',
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

