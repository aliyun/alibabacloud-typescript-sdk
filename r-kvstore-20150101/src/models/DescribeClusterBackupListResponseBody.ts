// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBackupListResponseBodyClusterBackupsBackupsExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The database engine version.
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
   * The end time of the backup. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format and displayed in UTC.
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
   * > You can use this URL to download the backup file from an ECS instance that is connected to the current instance. Both instances must reside in the same VPC.
   * 
   * @example
   * http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote-internal.aliyuncs.com/custins424747958/hins100322105_data_20240110012135.rdb
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The backup name.
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
   * The start time of the backup. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format and displayed in UTC.
   * 
   * @example
   * 2024-01-09T17:21:30Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * * **OK**: The backup is successful.
   * * **ERROR**: The backup failed.
   * 
   * @example
   * OK
   */
  backupStatus?: string;
  /**
   * @remarks
   * The database engine type. The value is fixed as **redis**.
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
   * The name of the instance.
   * 
   * @example
   * r-bp1y4is8svonly****-db-0
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * * **0**: unavailable.
   * * **1**: available.
   * 
   * @example
   * 1
   */
  isAvail?: string;
  /**
   * @remarks
   * This parameter is not in effect. Ignore this parameter.
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
   * The collection of backup sets for all child nodes under a single cluster backup set.
   */
  backups?: DescribeClusterBackupListResponseBodyClusterBackupsBackups[];
  /**
   * @remarks
   * The end time of the cluster backup. The time is in the YYYY-MM-DDTHH:mm:ssZ format and displayed in UTC.
   * 
   * @example
   * 2024-01-10T17:21:55Z
   */
  clusterBackupEndTime?: string;
  /**
   * @remarks
   * The cluster backup set ID.
   * 
   * @example
   * cb-zmdqj2m3xyxjtdt0
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The cluster backup mode.
   * 
   * @example
   * Automated
   */
  clusterBackupMode?: string;
  /**
   * @remarks
   * The size of the cluster backup set.
   * 
   * @example
   * 2048
   */
  clusterBackupSize?: string;
  /**
   * @remarks
   * The start time of the cluster backup. The time is in the YYYY-MM-DDTHH:mm:ssZ format and displayed in UTC.
   * 
   * @example
   * 2024-01-10T17:21:25Z
   */
  clusterBackupStartTime?: string;
  /**
   * @remarks
   * The status of the cluster backup set. Valid values:
   * - OK: The backup is successful.
   * - RUNNING: The backup is in progress.
   * - Other values: The backup failed.
   * 
   * @example
   * OK
   */
  clusterBackupStatus?: string;
  /**
   * @remarks
   * The expiration time of the backup set. The time is in the yyyy-MM-ddTHH:mmZ format and displayed in UTC.
   * 
   * @example
   * 2025-06-01T21:51:22Z
   */
  expectExpireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster backup set is valid. The value is 0 if the backup sets of child nodes are incomplete or failed.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The backup progress. This parameter is returned only for backups that are in progress.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The memory size of a single DB node when the full backup is created. Unit: MB.
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
   * The list of cluster backup sets. A cluster backup set contains the backup sets of all nodes in the cluster.
   */
  clusterBackups?: DescribeClusterBackupListResponseBodyClusterBackups[];
  /**
   * @remarks
   * <props="china">The free backup quota of the instance. Unit: bytes. The free quota is equal to the default memory capacity of the instance type. For more information, see the notice on backup commercialization. Full backups and log backups share this free quota. When you change the instance type, the free quota of the instance changes accordingly.
   * <props="intl">This parameter is not in effect. Ignore this parameter.
   * 
   * @example
   * 100000
   */
  freeSize?: number;
  /**
   * @remarks
   * The size of full backup files for the current instance. Unit: bytes. Full backups are generated from daily scheduled backups, manual backups, and backups generated during cache analysis.
   * > This value is independent of the number and size of backup sets returned in the current request. It represents the total size of all valid full backups for the instance.
   * 
   * @example
   * 1000
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * The size of the instance log backup files for the current instance. Unit: bytes. This value is valid only when the flashback feature is enabled.
   * > This value is independent of the number and size of backup sets in the current response. It represents the total size of all valid instance log backups for the current instance.
   * 
   * @example
   * 5000
   */
  logStorageSize?: number;
  /**
   * @remarks
   * The maximum number of records returned by the current request.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number, which is the same as the request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of records per page, which is the same as the request parameter.
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

