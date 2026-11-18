// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The description is the same as above.
   * 
   * @example
   * -
   */
  authAction?: string;
  /**
   * @remarks
   * The description is the same as above.
   * 
   * @example
   * -
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The description is the same as above.
   * 
   * @example
   * -
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The description is the same as above.
   * 
   * @example
   * -
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The description is the same as above.
   * 
   * @example
   * -
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The description is the same as above.
   * 
   * @example
   * -
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The description is the same as above.
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
   * **[Deprecated]** This group of parameters is deprecated. Ignore it.
   */
  accessDeniedDetail?: DescribeBackupPolicyResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The earliest point in time for data flashback, in the yyyy-MM-ddTHH:mm:ssZ format (UTC). This parameter is returned only when the data flashback feature is enabled for the instance.
   * 
   * @example
   * 2021-07-06T05:49:55Z
   */
  backupLogStartTime?: string;
  /**
   * @remarks
   * The backup retention period in days.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * Indicates whether the backup service is enabled for the instance. Valid values:
   * * **1**: Enabled.
   * * **0**: Disabled.
   * 
   * @example
   * 0
   */
  dbsInstance?: string;
  /**
   * @remarks
   * Indicates whether incremental backup is enabled. Valid values:
   * * **1**: Enabled.
   * * **0**: Disabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * * **Monday**: Monday.
   * * **Tuesday**: Tuesday.
   * * **Wednesday**: Wednesday.
   * * **Thursday**: Thursday.
   * * **Friday**: Friday.
   * * **Saturday**: Saturday.
   * * **Sunday**: Sunday.
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time, in the <i>HH:mm</i>Z-<i>HH:mm</i>Z format (UTC).
   * 
   * @example
   * 05:00Z-06:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The time of the next backup, in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
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

