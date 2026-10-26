// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableRecoveryTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cross-region backup file.
   * 
   * @example
   * 1249****
   */
  crossBackupId?: number;
  /**
   * @remarks
   * The start time of the time range to which data can be restored from the cross-region backup file. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2024-03-04T21:00:47Z
   */
  recoveryBeginTime?: string;
  /**
   * @remarks
   * The end time of the time range to which data can be restored from the cross-region backup file. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2024-03-07T02:23:26Z
   */
  recoveryEndTime?: string;
  /**
   * @remarks
   * The region of the source instance.
   * 
   * @example
   * cn-chengdu
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

