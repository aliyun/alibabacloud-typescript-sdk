// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  authAction?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * -
   */
  noPermissionType?: string;
  /**
   * @remarks
   * Same as above.
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

export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Ignore this parameter.
   */
  accessDeniedDetail?: DescribeBackupPolicyResponseBodyAccessDeniedDetail;
  backupLogStartTime?: string;
  /**
   * @remarks
   * The number of days for which backup data is retained.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * Indicates whether the backup service is enabled for the instance. Valid values:
   * * **1**: enabled.
   * * **0**: disabled.
   * 
   * @example
   * 0
   */
  dbsInstance?: string;
  /**
   * @remarks
   * Indicates whether incremental backup is enabled. Valid values:
   * * **1**: enabled.
   * * **0**: disabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * * **Monday**
   * * **Tuesday**
   * * **Wednesday**
   * * **Thursday**
   * * **Friday**
   * * **Saturday**
   * * **Sunday**
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time. The time is in the <i>HH:mm</i>Z-<i>HH:mm</i>Z format (UTC).
   * 
   * @example
   * 05:00Z-06:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The next backup time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
   * 
   * @example
   * 2019-03-14T05:28Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90B82DB7-FB28-4CC2-ADBF-1F8659F3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      backupLogStartTime: 'BackupLogStartTime',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      dbsInstance: 'DbsInstance',
      enableBackupLog: 'EnableBackupLog',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeBackupPolicyResponseBodyAccessDeniedDetail,
      backupLogStartTime: 'string',
      backupRetentionPeriod: 'string',
      dbsInstance: 'string',
      enableBackupLog: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

