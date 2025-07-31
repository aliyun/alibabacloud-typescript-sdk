// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupDBsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * > 
   * 
   * *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup ID.
   * 
   * *   You must specify one of the **RestoreTime** and BackupId parameters.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default value: 30. Valid values: **30**, **50**, and **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ax68****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which the instance is restored. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The time can be a point in time within the previous seven days. The time must be earlier than the current time, but later than the time when the instance was created.
   * 
   * *   You must specify one of the RestoreTime and **BackupId** parameters.
   * 
   * @example
   * 2019-08-22T12:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * dds-bp2286****
   */
  sourceDBInstance?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      sourceDBInstance: 'SourceDBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      sourceDBInstance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

