// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBackupListResponseBodyClusterBackupsBackupsExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 5.0
   */
  custinsDbVersion?: string;
  static names(): { [key: string]: string } {
    return {
      custinsDbVersion: 'CustinsDbVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custinsDbVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupListResponseBodyClusterBackupsBackups extends $dara.Model {
  /**
   * @remarks
   * The public download URL of the backup file.
   * 
   * @example
   * http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote.aliyuncs.com/custins424747958/hins100322105_data_20240110012135.rdb
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2024-01-09T17:21:57
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * 514645788
   */
  backupId?: string;
  /**
   * @remarks
   * The internal download URL of the backup file.
   * 
   * >  You can use this URL to download the backup file from an Elastic Compute Service (ECS) instance that is connected to the Tair (Redis OSS-compatible) instance. The ECS instance must reside in the same virtual private cloud (VPC) as the Tair (Redis OSS-compatible) instance.
   * 
   * @example
   * http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote-internal.aliyuncs.com/custins424747958/hins100322105_data_20240110012135.rdb
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * hins100322105_data_20240110012135.rdb
   */
  backupName?: string;
  /**
   * @remarks
   * The size of the backup file. Unit: bytes.
   * 
   * @example
   * 1024
   */
  backupSize?: string;
  /**
   * @remarks
   * The start time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2024-01-09T17:21:30Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup. Valid values:
   * 
   * *   **OK**
   * *   **ERROR**
   * 
   * @example
   * OK
   */
  backupStatus?: string;
  /**
   * @remarks
   * The database engine. The return value is **redis**.
   * 
   * @example
   * redis
   */
  engine?: string;
  /**
   * @remarks
   * The additional information.
   */
  extraInfo?: DescribeClusterBackupListResponseBodyClusterBackupsBackupsExtraInfo;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * hins100322105_data_20240108012127.rdb
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * *   **0**: unavailable
   * *   **1**: available
   * 
   * @example
   * 1
   */
  isAvail?: string;
  /**
   * @remarks
   * This parameter does not take effect. Ignore this parameter.
   * 
   * @example
   * null
   */
  recoverConfigMode?: string;
  static names(): { [key: string]: string } {
    return {
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupName: 'BackupName',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      engine: 'Engine',
      extraInfo: 'ExtraInfo',
      instanceName: 'InstanceName',
      isAvail: 'IsAvail',
      recoverConfigMode: 'RecoverConfigMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      backupIntranetDownloadURL: 'string',
      backupName: 'string',
      backupSize: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      engine: 'string',
      extraInfo: DescribeClusterBackupListResponseBodyClusterBackupsBackupsExtraInfo,
      instanceName: 'string',
      isAvail: 'string',
      recoverConfigMode: 'string',
    };
  }

  validate() {
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupListResponseBodyClusterBackups extends $dara.Model {
  /**
   * @remarks
   * The backup sets of all shards in the instance.
   */
  backups?: DescribeClusterBackupListResponseBodyClusterBackupsBackups[];
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 2024-01-10T17:21:55Z
   */
  clusterBackupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * cb-zmdqj2m3xyxjtdt0
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The backup mode.
   * 
   * @example
   * Automated
   */
  clusterBackupMode?: string;
  /**
   * @remarks
   * The size of the backup set.
   * 
   * @example
   * 2048
   */
  clusterBackupSize?: string;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 2024-01-10T17:21:25Z
   */
  clusterBackupStartTime?: string;
  /**
   * @remarks
   * The status of the backup set.
   * 
   * *   OK
   * *   RUNNING
   * *   Failed
   * 
   * @example
   * OK
   */
  clusterBackupStatus?: string;
  expectExpireTime?: string;
  /**
   * @remarks
   * Indicates whether the backup set is valid. A value of 0 indicates that shard-level backups failed or have not been completed.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The backup progress. The system displays only the progress of running backup tasks.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The memory size of a single shard during a full backup. Unit: MB.
   * 
   * @example
   * 1024
   */
  shardClassMemory?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      clusterBackupEndTime: 'ClusterBackupEndTime',
      clusterBackupId: 'ClusterBackupId',
      clusterBackupMode: 'ClusterBackupMode',
      clusterBackupSize: 'ClusterBackupSize',
      clusterBackupStartTime: 'ClusterBackupStartTime',
      clusterBackupStatus: 'ClusterBackupStatus',
      expectExpireTime: 'ExpectExpireTime',
      isAvail: 'IsAvail',
      progress: 'Progress',
      shardClassMemory: 'ShardClassMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: { 'type': 'array', 'itemType': DescribeClusterBackupListResponseBodyClusterBackupsBackups },
      clusterBackupEndTime: 'string',
      clusterBackupId: 'string',
      clusterBackupMode: 'string',
      clusterBackupSize: 'string',
      clusterBackupStartTime: 'string',
      clusterBackupStatus: 'string',
      expectExpireTime: 'string',
      isAvail: 'number',
      progress: 'string',
      shardClassMemory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backups)) {
      $dara.Model.validateArray(this.backups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup sets of the instance. A backup contains the backup sets of all shards in the instance.
   */
  clusterBackups?: DescribeClusterBackupListResponseBodyClusterBackups[];
  /**
   * @remarks
   * This parameter does not take effect. Ignore this parameter.
   * 
   * @example
   * 100000
   */
  freeSize?: number;
  /**
   * @remarks
   * The size of the full backup file of the instance. Unit: bytes. Full backups originate from scheduled backups, manual backups, and backups generated during cache analysis.
   * 
   * >  The value of this parameter is independent of the number and size of returned backup sets. Instead, it represents the size of all valid full backups of the instance.
   * 
   * @example
   * 1000
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * The size of the log backup file of the instance. Unit: bytes. This parameter is valid only when flashback is enabled.
   * 
   * >  The value of this parameter is independent of the number and size of returned backup sets. Instead, it represents the size of all valid log backups of the instance.
   * 
   * @example
   * 5000
   */
  logStorageSize?: number;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C009DA42-3B19-5B81-963D-1509DE2408DD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBackups: 'ClusterBackups',
      freeSize: 'FreeSize',
      fullStorageSize: 'FullStorageSize',
      logStorageSize: 'LogStorageSize',
      maxResults: 'MaxResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBackups: { 'type': 'array', 'itemType': DescribeClusterBackupListResponseBodyClusterBackups },
      freeSize: 'number',
      fullStorageSize: 'number',
      logStorageSize: 'number',
      maxResults: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterBackups)) {
      $dara.Model.validateArray(this.clusterBackups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

