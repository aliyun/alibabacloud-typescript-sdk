// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAdvancedBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backup policies.
   */
  advancedBackupDataPoliciesShrink?: string;
  /**
   * @remarks
   * The list of log backup policies.
   */
  advancedBackupLogPoliciesShrink?: string;
  /**
   * @remarks
   * The backup retention policy. Valid values:
   * 
   * - 0: All backup sets of the instance are deleted immediately when the instance is released.
   * - 1: The last backup set is retained for long-term retention (LTR) when the instance is released.
   * - 2: All backup sets are retained for long-term retention (LTR) when the instance is released.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2zeb2d64cb46xxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time period during which the backup is performed. The format is <i>HH:mm</i>Z-<i>HH:mm</i>Z (UTC).
   * 
   * > The time range is limited to 1 hour.
   * 
   * @example
   * 09:00Z-10:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The snapshot backup type. Valid values:
   * 
   * - **Flash**: backup within seconds.
   * - **Standard**: standard backup. This is the default value.
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedBackupDataPoliciesShrink: 'AdvancedBackupDataPolicies',
      advancedBackupLogPoliciesShrink: 'AdvancedBackupLogPolicies',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      DBInstanceId: 'DBInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
      snapshotBackupType: 'SnapshotBackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedBackupDataPoliciesShrink: 'string',
      advancedBackupLogPoliciesShrink: 'string',
      backupRetentionPolicyOnClusterDeletion: 'number',
      DBInstanceId: 'string',
      preferredBackupTime: 'string',
      snapshotBackupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

