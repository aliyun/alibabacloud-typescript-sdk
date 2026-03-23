// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceCrossBackupPolicyRequest extends $dara.Model {
  backupEnabled?: string;
  crossBackupRegion?: string;
  crossBackupType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  logBackupEnabled?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retentType?: number;
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

