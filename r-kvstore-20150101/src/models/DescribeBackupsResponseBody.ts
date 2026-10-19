// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * See the preceding description.
   * 
   * @example
   * -
   */
  authAction?: string;
  /**
   * @remarks
   * See the preceding description.
   * 
   * @example
   * -
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * See the preceding description.
   * 
   * @example
   * -
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * See the preceding description.
   * 
   * @example
   * -
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * See the preceding description.
   * 
   * @example
   * -
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * See the preceding description.
   * 
   * @example
   * -
   */
  noPermissionType?: string;
  /**
   * @remarks
   * See the preceding description.
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
   * This group of parameters is deprecated. Ignore it.
   */
  accessDeniedDetail?: DescribeBackupsResponseBodyAccessDeniedDetail;
  backups?: DescribeBackupsResponseBodyBackups;
  /**
   * @remarks
   * <props="china">The free backup quota for the instance. Unit: bytes. The free quota is equal to the default memory capacity of the instance type. For more information, see [Notice on backup commercialization](https://help.aliyun.com/document_detail/2664017.html).
   * Full backups and log backups share this free quota. When you change the instance type, the free quota of the instance changes accordingly.
   * <props="intl">This parameter is not in effect. Ignore this parameter.
   * 
   * @example
   * 100000
   */
  freeSize?: number;
  /**
   * @remarks
   * The size of full backup files for the current instance. Unit: bytes. Full backups include daily scheduled backups, manual backups, and backups generated during cache analysis.
   * > This value is independent of the number and size of backup sets returned in the current response. It represents the total size of all valid full backups for the instance.
   * 
   * @example
   * 1000
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * The size of instance log backup files for the current instance. Unit: bytes. This value is valid only when the flashback feature is enabled.
   * > This value is independent of the number and size of backup sets returned in the current response. It represents the total size of all valid instance log backups for the instance.
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
   * The maximum number of entries per page.
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
   * The total number of backups.
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

