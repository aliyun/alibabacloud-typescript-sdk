// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySupabaseBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The data backup retention period. Unit: days. Valid values: 1 to 7.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic recovery points. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * If this parameter is not specified, false is used.
   */
  enableRecoveryPoint?: boolean;
  /**
   * @remarks
   * The data backup cycle. Separate multiple values with commas (,). Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
   * 
   * This parameter is required.
   * 
   * @example
   * Wednesday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time of the data backup. The time is in UTC and follows the HH:mmZ format, such as 01:00Z. The HH:mmZ-HH:mmZ time range format is also supported, and the server uses the start time of the range.
   * 
   * This parameter is required.
   * 
   * @example
   * 01:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * Instance ID of the Supabase instance. You can obtain instance ID on the Supabase page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-263****
   */
  projectId?: string;
  /**
   * @remarks
   * The interval for the automatic creation of recovery points. Unit: hours. Valid values: 1/6 (10 minutes), 1/2 (30 minutes), 1, 2, 4, and 8. This parameter takes effect only when EnableRecoveryPoint is set to true. If this parameter is not specified, the default value 1 is used. If EnableRecoveryPoint is set to false, this parameter is ignored.
   * 
   * @example
   * 1
   */
  recoveryPointPeriod?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableRecoveryPoint: 'EnableRecoveryPoint',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      projectId: 'ProjectId',
      recoveryPointPeriod: 'RecoveryPointPeriod',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      enableRecoveryPoint: 'boolean',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      projectId: 'string',
      recoveryPointPeriod: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

