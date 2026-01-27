// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The details of data backup policies.
   */
  advanceDataPoliciesShrink?: string;
  advanceIncPoliciesShrink?: string;
  advanceLogPoliciesShrink?: string;
  backupMethod?: string;
  backupPriority?: number;
  backupRetentionPolicyOnClusterDeletion?: string;
  category?: string;
  enableIncBackup?: boolean;
  /**
   * @remarks
   * The ID of the PolarDB instance.
   * 
   * @example
   * pc-2ze3nrr64c5****
   */
  instanceName?: string;
  /**
   * @remarks
   * The start time of a basic backup.
   * 
   * @example
   * 17:00Z
   */
  preferredBackupWindowBegin?: string;
  /**
   * @remarks
   * The region in which backup sets reside.
   * 
   * @example
   * cn-shanghai
   */
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      advanceDataPoliciesShrink: 'AdvanceDataPolicies',
      advanceIncPoliciesShrink: 'AdvanceIncPolicies',
      advanceLogPoliciesShrink: 'AdvanceLogPolicies',
      backupMethod: 'BackupMethod',
      backupPriority: 'BackupPriority',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      category: 'Category',
      enableIncBackup: 'EnableIncBackup',
      instanceName: 'InstanceName',
      preferredBackupWindowBegin: 'PreferredBackupWindowBegin',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceDataPoliciesShrink: 'string',
      advanceIncPoliciesShrink: 'string',
      advanceLogPoliciesShrink: 'string',
      backupMethod: 'string',
      backupPriority: 'number',
      backupRetentionPolicyOnClusterDeletion: 'string',
      category: 'string',
      enableIncBackup: 'boolean',
      instanceName: 'string',
      preferredBackupWindowBegin: 'string',
      regionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

