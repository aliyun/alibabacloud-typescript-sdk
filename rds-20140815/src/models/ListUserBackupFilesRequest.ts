// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserBackupFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The user backup ID.
   * 
   * @example
   * b-kwwvr7v8t7of****
   */
  backupId?: string;
  /**
   * @remarks
   * The comment of the user backup to query.
   * >You can enter part of the comment for fuzzy matching.
   * 
   * @example
   * BackupTest
   */
  comment?: string;
  /**
   * @remarks
   * The OSS download URL of the user backup file. For information about how to obtain the OSS download URL of a user backup file, see [How do I obtain the URL of an uploaded object?](https://help.aliyun.com/document_detail/39607.html).
   * 
   * @example
   * https://****.oss-ap-****.aliyuncs.com/backup_qp.xb
   */
  ossUrl?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call DescribeDBInstanceAttribute to query the resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the user backup file. Valid values:
   * * **Importing**: The backup is being imported.
   * * **Failed**: The import failed.
   * * **CheckSuccess**: The verification passed.
   * * **BackupSuccess**: The import succeeded.
   * * **Deleted**: The backup is deleted.
   * 
   * @example
   * CheckSuccess
   */
  status?: string;
  /**
   * @remarks
   * The tag information used to query the user backup.
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

