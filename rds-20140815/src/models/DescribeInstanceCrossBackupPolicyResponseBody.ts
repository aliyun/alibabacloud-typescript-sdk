// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceCrossBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the cross-region backup feature on the instance. Valid values:
   * 
   * *   **Disable**
   * *   **Enable**
   * 
   * @example
   * Enable
   */
  backupEnabled?: string;
  /**
   * @remarks
   * The point in time at which the cross-region backup feature is enabled. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-06-12T05:44:21Z
   */
  backupEnabledTime?: string;
  /**
   * @remarks
   * The ID of the destination region where the cross-region backup files of the instance are stored.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The policy that is used to save the cross-region backup files of the instance. Default value: **1**. The value 1 indicates that all cross-region backup files are saved.
   * 
   * @example
   * 1
   */
  crossBackupType?: string;
  /**
   * @remarks
   * The name of the instance. It must be 2 to 256 characters in length. The value can contain letters, digits, underscores (_), and hyphens (-), and must start with a letter.
   * 
   * >  The value cannot start with http:// or https://.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance state table](https://help.aliyun.com/document_detail/26315.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  /**
   * @remarks
   * The lock status of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before a rollback.
   * *   **LockByDiskQuota**: The instance is automatically locked because its storage capacity is exhausted and the instance is inaccessible.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The status of the cross-region log backup feature on the instance. Valid values:
   * 
   * *   **Disable**
   * *   **Enable**
   * 
   * @example
   * Enable
   */
  logBackupEnabled?: string;
  /**
   * @remarks
   * The time when cross-region log backup was enabled on the instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-06-12T05:44:21Z
   */
  logBackupEnabledTime?: string;
  /**
   * @remarks
   * The region ID of the instance.
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
   * CB7667B2-72C8-497B-9BD8-3B343CEF51AB
   */
  requestId?: string;
  /**
   * @remarks
   * The policy that is used to retain the cross-region backup files of the instance. Default value: **1**. The value 1 indicates that the cross-region backup files of the instance are retained based on the specified retention period.
   * 
   * @example
   * 1
   */
  retentType?: number;
  /**
   * @remarks
   * The number of days for which the cross-region backup files of the instance are retained. Valid values: **7 to 1825**.
   * 
   * @example
   * 15
   */
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      backupEnabled: 'BackupEnabled',
      backupEnabledTime: 'BackupEnabledTime',
      crossBackupRegion: 'CrossBackupRegion',
      crossBackupType: 'CrossBackupType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      lockMode: 'LockMode',
      logBackupEnabled: 'LogBackupEnabled',
      logBackupEnabledTime: 'LogBackupEnabledTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      retentType: 'RetentType',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEnabled: 'string',
      backupEnabledTime: 'string',
      crossBackupRegion: 'string',
      crossBackupType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      engine: 'string',
      engineVersion: 'string',
      lockMode: 'string',
      logBackupEnabled: 'string',
      logBackupEnabledTime: 'string',
      regionId: 'string',
      requestId: 'string',
      retentType: 'number',
      retention: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

