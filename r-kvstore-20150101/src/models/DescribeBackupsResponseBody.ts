// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  authAction?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  noPermissionType?: string;
  /**
   * @remarks
   * This parameter is no longer used. Ignore this parameter.
   * 
   * @example
   * _
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackupsBackup extends $dara.Model {
  /**
   * @remarks
   * The names of the databases that are backed up. The default value is **all**, which indicates that all databases are backed up.
   * 
   * @example
   * all
   */
  backupDBNames?: string;
  /**
   * @remarks
   * The public download URL of the backup file.
   * 
   * @example
   * https://rdsbak-hk45-v2.oss-cn-hongkong.aliyuncs.com/********
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 2019-03-14T05:31:13Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * 165*****50
   */
  backupId?: number;
  /**
   * @remarks
   * The internal download URL of the backup file.
   * 
   * >  You can use this URL to download the backup file from an Elastic Compute Service (ECS) instance that is connected to the Tair instance. The ECS instance must belong to the same classic network or reside in the same virtual private cloud (VPC) as the Tair instance.
   * 
   * @example
   * https://rdsbak-hk45-v2.oss-cn-hongkong.aliyuncs.com/********
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 24340
   */
  backupJobID?: number;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   **Logical**
   * *   **Physical**
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Automated**
   * *   **Manual**
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The size of the backup file.
   * 
   * @example
   * 1024
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 2019-03-14T05:28:50Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup. Valid values:
   * 
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The engine version (major version) of the instance.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  expectExpireTime?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  If the instance uses the standard architecture, this parameter returns the instance ID.
   * 
   * @example
   * r-bp10noxlhcoim2****-db-1
   */
  nodeInstanceId?: string;
  /**
   * @remarks
   * If the backup includes account information, kernel parameters and whitelist details.
   * 
   * @example
   * {"whitelist":true,"config":true,"account":true}
   */
  recoverConfigMode?: string;
  static names(): { [key: string]: string } {
    return {
      backupDBNames: 'BackupDBNames',
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupJobID: 'BackupJobID',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      engineVersion: 'EngineVersion',
      expectExpireTime: 'ExpectExpireTime',
      nodeInstanceId: 'NodeInstanceId',
      recoverConfigMode: 'RecoverConfigMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDBNames: 'string',
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupId: 'number',
      backupIntranetDownloadURL: 'string',
      backupJobID: 'number',
      backupMethod: 'string',
      backupMode: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      engineVersion: 'string',
      expectExpireTime: 'string',
      nodeInstanceId: 'string',
      recoverConfigMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackups extends $dara.Model {
  backup?: DescribeBackupsResponseBodyBackupsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyBackupsBackup },
    };
  }

  validate() {
    if(Array.isArray(this.backup)) {
      $dara.Model.validateArray(this.backup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The following parameters are no longer used. Ignore the parameters.
   */
  accessDeniedDetail?: DescribeBackupsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The queried backup sets.
   */
  backups?: DescribeBackupsResponseBodyBackups;
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
   * >  The value of this parameter is independent of the number and size of the returned backup sets. Instead, it reflects the total size of all valid full backups of the instance.
   * 
   * @example
   * 1000
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * The size of the log backup file of the instance. Unit: bytes. This value is valid only when flashback is enabled.
   * 
   * >  The value of this parameter is independent of the number and size of the returned backup sets. Instead, it reflects the total size of all valid log backups of the instance.
   * 
   * @example
   * 5000
   */
  logStorageSize?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 963C20F0-7CE1-4591-AAF3-6F3CD1CE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of backup files that were returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      backups: 'Backups',
      freeSize: 'FreeSize',
      fullStorageSize: 'FullStorageSize',
      logStorageSize: 'LogStorageSize',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeBackupsResponseBodyAccessDeniedDetail,
      backups: DescribeBackupsResponseBodyBackups,
      freeSize: 'number',
      fullStorageSize: 'number',
      logStorageSize: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.backups && typeof (this.backups as any).validate === 'function') {
      (this.backups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

