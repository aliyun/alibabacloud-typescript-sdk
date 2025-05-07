// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableRecoveryTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cross-region data backup file.
   * 
   * @example
   * 14377
   */
  crossBackupId?: number;
  /**
   * @remarks
   * The start time from which data can be restored. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-06-12T05:22:29Z
   */
  recoveryBeginTime?: string;
  /**
   * @remarks
   * The end time to which data can be restored. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-06-12T07:33:12Z
   */
  recoveryEndTime?: string;
  /**
   * @remarks
   * The region where the source instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CCBF4BA-7CE1-47E1-B49F-E97EA200A40D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      crossBackupId: 'CrossBackupId',
      recoveryBeginTime: 'RecoveryBeginTime',
      recoveryEndTime: 'RecoveryEndTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossBackupId: 'number',
      recoveryBeginTime: 'string',
      recoveryEndTime: 'string',
      regionId: 'string',
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

