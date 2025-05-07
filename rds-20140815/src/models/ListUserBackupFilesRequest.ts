// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserBackupFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the full backup file.
   * 
   * @example
   * b-kwwvr7v8t7of********
   */
  backupId?: string;
  /**
   * @remarks
   * The description of the full backup file.
   * 
   * > The system implements a fuzzy match based on the value of this parameter.
   * 
   * @example
   * BackupTest
   */
  comment?: string;
  /**
   * @remarks
   * The URL from which you can download the full backup file that is stored as an object in an Object Storage Service (OSS) bucket. For more information about how to obtain the URL, see [Obtain the access URL after you upload objects](https://help.aliyun.com/document_detail/39607.html).
   * 
   * @example
   * https://******.oss-ap-********.aliyuncs.com/backup_qp.xb
   */
  ossUrl?: string;
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
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the full backup file. Valid values:
   * 
   * *   **Importing**: The full backup file is being imported.
   * *   **Failed**: The full backup file fails to be imported.
   * *   **CheckSucccess**: The full backup file passes the check.
   * *   **BackupSuccess**: The full backup file is imported.
   * *   **Deleted**: The full backup file is deleted.
   * 
   * @example
   * CheckSuccess
   */
  status?: string;
  /**
   * @remarks
   * The tag that is added to the full backup file.
   * 
   * @example
   * key1:value1
   */
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

