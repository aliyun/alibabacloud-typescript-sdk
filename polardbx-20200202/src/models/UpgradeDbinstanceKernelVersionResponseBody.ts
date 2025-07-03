// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceKernelVersionResponseBody extends $dara.Model {
  /**
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  requestId?: string;
  /**
   * @example
   * polarx-kernel_5.4.7-16001481_xcluster-20200910
   */
  targetMinorVersion?: string;
  /**
   * @example
   * 422922413
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

