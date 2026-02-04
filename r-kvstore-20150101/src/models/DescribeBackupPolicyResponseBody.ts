// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The following parameters are no longer used. Ignore the parameters.
   */
  accessDeniedDetail?: DescribeBackupPolicyResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * Indicates whether the backup-as-a-service feature is enabled for the instance. Valid values:
   * 
   * *   **1**: The backup-as-a-service feature is enabled for the instance.
   * *   **0**: The backup-as-a-service feature is disabled for the instance.
   * 
   * @example
   * 0
   */
  dbsInstance?: string;
  /**
   * @remarks
   * Indicates whether incremental data backup is enabled. Valid values:
   * 
   * *   **1**: Incremental data backup is enabled.
   * *   **0**: Incremental data backup is disabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time range during which the backup was created. The time follows the ISO 8601 standard in the *HH:mm*Z-*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 05:00Z-06:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The next backup time. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-14T05:28Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90B82DB7-FB28-4CC2-ADBF-1F8659F3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
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

