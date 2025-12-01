// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreRangeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * dbssl67c7mx****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The earliest point in time to which you can restore data. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the value of the parameter for each backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646674092000
   */
  beginTimestampForRestore?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The latest point in time to which you can restore data. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the value of the parameter for each backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646846814000
   */
  endTimestampForRestore?: number;
  ownerId?: string;
  /**
   * @remarks
   * Specifies whether to query the most recent point in time to which you can restore data.
   * 
   * @example
   * true
   */
  recentlyRestore?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      beginTimestampForRestore: 'BeginTimestampForRestore',
      clientToken: 'ClientToken',
      endTimestampForRestore: 'EndTimestampForRestore',
      ownerId: 'OwnerId',
      recentlyRestore: 'RecentlyRestore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      beginTimestampForRestore: 'number',
      clientToken: 'string',
      endTimestampForRestore: 'number',
      ownerId: 'string',
      recentlyRestore: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

