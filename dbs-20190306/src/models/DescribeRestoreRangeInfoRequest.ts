// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreRangeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * This parameter is required.
   * 
   * @example
   * dbssl67c7mx****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The start timestamp of the restorable time range. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646674092000
   */
  beginTimestampForRestore?: number;
  /**
   * @remarks
   * A client token that ensures the idempotence of requests and prevents duplicate submissions.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The end timestamp of the restorable time range. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to get this value.
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
   * Whether to enable recent restore.
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

