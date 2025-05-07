// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceCrossBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the cross-region backup feature on the instance. This parameter specifies whether you can back up data and logs. Valid values:
   * 
   * *   **0**: disables the feature.
   * *   **1:** enables the feature.
   * 
   * > Before you enable the cross-region backup feature, you must configure the CrossBackupRegion parameter.
   * 
   * @example
   * 1
   */
  backupEnabled?: string;
  /**
   * @remarks
   * The ID of the region in which the cross-region backup files of the instance are stored.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The policy that is used to save the cross-region backup files of the instance. Set the value to **1**. The value 1 specifies that all cross-region backup files are saved.
   * 
   * @example
   * 1
   */
  crossBackupType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the cross-region log backup feature on the instance. Valid values:
   * 
   * *   **0**: disables the feature.
   * *   **1:** enables the feature.
   * 
   * > You can enable the cross-region log backup feature only when the cross-region backup feature is enabled.
   * 
   * @example
   * 1
   */
  logBackupEnabled?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the source instance. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The policy that is used to retain the cross-region backup files of the instance. Set the value to 1. The value **1** specifies that the cross-region backup files of the instance are retained based on the specified retention period.
   * 
   * @example
   * 1
   */
  retentType?: number;
  /**
   * @remarks
   * The number of days for which the cross-region backup files of the instance are retained. Valid values: **7 to 1825**.
   * 
   * @example
   * 7
   */
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      backupEnabled: 'BackupEnabled',
      crossBackupRegion: 'CrossBackupRegion',
      crossBackupType: 'CrossBackupType',
      DBInstanceId: 'DBInstanceId',
      logBackupEnabled: 'LogBackupEnabled',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentType: 'RetentType',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEnabled: 'string',
      crossBackupRegion: 'string',
      crossBackupType: 'string',
      DBInstanceId: 'string',
      logBackupEnabled: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentType: 'number',
      retention: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

