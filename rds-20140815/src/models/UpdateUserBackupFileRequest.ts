// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  backupId?: string;
  comment?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      comment: 'Comment',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      comment: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

