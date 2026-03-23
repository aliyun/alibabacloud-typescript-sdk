// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserBackupFilesRequest extends $dara.Model {
  backupId?: string;
  comment?: string;
  ossUrl?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      comment: 'Comment',
      ossUrl: 'OssUrl',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      comment: 'string',
      ossUrl: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

