// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceMajorVersionPrecheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pgm-bp1c808s731l****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99C1FEEE-FB44-5342-8EBA-DC1E1A1557A4
   */
  requestId?: string;
  /**
   * @remarks
   * The new major engine version of the instance.
   * 
   * @example
   * 12.0
   */
  targetMajorVersion?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 41698****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      targetMajorVersion: 'TargetMajorVersion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      targetMajorVersion: 'string',
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

