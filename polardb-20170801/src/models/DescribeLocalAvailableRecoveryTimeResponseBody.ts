// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocalAvailableRecoveryTimeResponseBody extends $dara.Model {
  /**
   * @example
   * pc-2ze3ngi149b313***
   */
  DBClusterId?: string;
  /**
   * @example
   * 2025-09-10T14:19:48Z
   */
  recoveryBeginTime?: string;
  /**
   * @example
   * 2025-09-17T08:56:45Z
   */
  recoveryEndTime?: string;
  /**
   * @example
   * 4EA0E6F8-BDB2-17B2-9567-591F6B3D7***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      recoveryBeginTime: 'RecoveryBeginTime',
      recoveryEndTime: 'RecoveryEndTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      recoveryBeginTime: 'string',
      recoveryEndTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

