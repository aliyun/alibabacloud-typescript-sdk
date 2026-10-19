// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocalAvailableRecoveryTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-2ze3ngi149b313***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The start time from which backups can be restored.
   * > Calculated based on level-1 backups. Level-2 backups are not included.
   * 
   * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2025-09-10T14:19:48Z
   */
  recoveryBeginTime?: string;
  /**
   * @remarks
   * The end time to which backups can be restored.
   * 
   * > Calculated based on level-1 backups. Level-2 backups are not included.
   * 
   * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2025-09-17T08:56:45Z
   */
  recoveryEndTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

