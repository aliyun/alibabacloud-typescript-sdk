// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceCrossBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the cross-region backup feature. Valid values:
   * * **Disable**: disabled.
   * * **Enable**: enabled.
   * 
   * @example
   * Enable
   */
  backupEnabled?: string;
  /**
   * @remarks
   * The time when cross-region backup was enabled. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-06-12T05:44:21Z
   */
  backupEnabledTime?: string;
  /**
   * @remarks
   * The ID of the destination region for cross-region backup.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The storage type for cross-region backup. Default value: **1**, which indicates that each backup is retained.
   * 
   * @example
   * 1
   */
  crossBackupType?: string;
  /**
   * @remarks
   * The instance name. The name is 2 to 256 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter or a Chinese character.
   * >The name cannot start with http:// or https://.
   * 
   * @example
   * testdb
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance status. For more information, see [Instance states](https://help.aliyun.com/document_detail/26315.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The database engine.
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
   * * **Unlock**: The instance is not locked.
   * * **ManualLock**: The instance is manually locked.
   * * **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * * **LockByRestoration**: The instance is automatically locked before a rollback.
   * * **LockByDiskQuota**: The instance is automatically locked because the storage space is exhausted. The instance is inaccessible.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The status of the cross-region log backup feature. Valid values:
   * * **Disable**: disabled.
   * * **Enable**: enabled.
   * 
   * @example
   * Enable
   */
  logBackupEnabled?: string;
  /**
   * @remarks
   * The time when cross-region log backup was enabled. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
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
   * The retention method for cross-region backup. Default value: **1**, which indicates that backups are retained based on the specified retention period.
   * 
   * @example
   * 1
   */
  retentType?: number;
  /**
   * @remarks
   * The number of days for which cross-region backups are retained. Valid values: **7 to 1825**.
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

