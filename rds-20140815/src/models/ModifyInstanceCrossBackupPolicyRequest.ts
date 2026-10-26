// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceCrossBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the overall cross-region backup feature, which includes data backup and log backup. Valid values:
   * * **0**: disabled
   * * **1**: enabled
   * 
   * > When you enable cross-region backup, you must specify the destination region ID.
   * 
   * @example
   * 1
   */
  backupEnabled?: string;
  /**
   * @remarks
   * The ID of the destination region for cross-region backup.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The retention type of cross-region backups. Only **1** is supported, which indicates that all backups are retained.
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
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable cross-region log backup. Valid values:
   * * **0**: disabled
   * * **1**: enabled
   * 
   * > You can configure this parameter only when the overall cross-region backup feature is enabled.
   * 
   * @example
   * 1
   */
  logBackupEnabled?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the source instance. You can call the DescribeRegions operation to query region IDs.
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
   * The retention method for cross-region backups. Only **1** is supported, which indicates that backups are retained based on a specified retention period.
   * 
   * @example
   * 1
   */
  retentType?: number;
  /**
   * @remarks
   * The retention period of cross-region backups. Valid values: **7 to 1825**. Unit: days.
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

