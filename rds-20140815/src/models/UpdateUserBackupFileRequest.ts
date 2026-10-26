// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user backup. You can call the ListUserBackupFiles operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b-g14d0m772f7b****
   */
  backupId?: string;
  /**
   * @remarks
   * The new description of the user backup.
   * 
   * @example
   * CommentTest
   */
  comment?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can call the DescribeDBInstanceAttribute operation to query the ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new retention period of the user backup. Unit: days. The value must be an integer greater than 0.
   * 
   * @example
   * 30
   */
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

