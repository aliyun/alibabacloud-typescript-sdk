// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID. You can call the ListUserBackupFiles operation to query the backup ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b-kwwvr7v8t7of********
   */
  backupId?: string;
  /**
   * @remarks
   * The new description of the full backup file.
   * 
   * @example
   * CommentTest
   */
  comment?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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
  /**
   * @remarks
   * The new retention period of the full backup file. Unit: days. Valid values: any non-zero positive integer.
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

