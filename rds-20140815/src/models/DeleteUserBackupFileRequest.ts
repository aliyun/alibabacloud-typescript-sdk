// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the full backup file. You can call the ListUserBackupFiles operation to query the information about all full backup files in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * b-w1haya7e4i25********
   */
  backupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

