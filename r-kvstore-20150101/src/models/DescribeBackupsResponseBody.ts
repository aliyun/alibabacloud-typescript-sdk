// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  authAction?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  noPermissionType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
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
  backupDBNames?: string;
  backupDownloadURL?: string;
  backupEndTime?: string;
  backupId?: number;
  backupIntranetDownloadURL?: string;
  backupJobID?: number;
  backupMethod?: string;
  backupMode?: string;
  backupSize?: number;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  engineVersion?: string;
  expectExpireTime?: string;
  nodeInstanceId?: string;
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
   * This parameter is deprecated.
   */
  accessDeniedDetail?: DescribeBackupsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * Details about the backup sets.
   */
  backups?: DescribeBackupsResponseBodyBackups;
  /**
   * @remarks
   * <props="china">The free backup quota for the instance, in bytes. The free quota is equal to the default memory size of the instance type. For more information, see [Changes to the free backup quota policy](https://help.aliyun.com/document_detail/2664017.html).
   * Full backups and log backups share this free quota. When the instance type is changed, the free quota also changes.
   * <props="intl">This parameter is not in effect. Ignore this parameter.
   * 
   * @example
   * 100000
   */
  freeSize?: number;
  /**
   * @remarks
   * The total size of full backups for the instance, in bytes. Full backups are generated from scheduled daily backups, manual backups, or cache analysis.
   * 
   * > This value represents the total size of all valid full backups for the instance, regardless of the backup sets returned in this request.
   * 
   * @example
   * 1000
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * The total size of log backups for the instance, in bytes. This parameter is returned only if flashback is enabled.
   * 
   * > This value represents the total size of all valid log backups for the instance, regardless of the backup sets returned in this request.
   * 
   * @example
   * 5000
   */
  logStorageSize?: number;
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
   * The number of entries per page.
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
   * 963C20F0-7CE1-4591-AAF3-6F3CD1CE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of backup sets.
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

