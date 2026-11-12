// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which data backups are retained. Default value: 7. Maximum value: 7. Valid values: 1 to 7.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic recovery point creation. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * Default value: true.
   * 
   * @example
   * true
   */
  enableRecoveryPoint?: boolean;
  /**
   * @remarks
   * The data backup cycle. Separate multiple values with commas (,). Valid values:
   * 
   * - Monday: Monday.
   * - Tuesday: Tuesday.
   * - Wednesday: Wednesday.
   * - Thursday: Thursday.
   * - Friday: Friday.
   * - Saturday: Saturday.
   * - Sunday: Sunday.
   * 
   * This parameter is required.
   * 
   * @example
   * Tuesday,Thursday,Saturday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The data backup time. Default value: 00:00Z-01:00Z. Format: HH:mmZ-HH:mmZ (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The frequency of recovery points. Valid values:
   * 
   * - **1**: Every hour.
   * - **2**: Every two hours.
   * - **4**: Every four hours.
   * - **8**: Every eight hours.
   * Default value: **1**.
   * 
   * @example
   * 8
   */
  recoveryPointPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBInstanceId: 'DBInstanceId',
      enableRecoveryPoint: 'EnableRecoveryPoint',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      recoveryPointPeriod: 'RecoveryPointPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      DBInstanceId: 'string',
      enableRecoveryPoint: 'boolean',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      recoveryPointPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

