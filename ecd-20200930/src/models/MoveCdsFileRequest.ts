// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * @example
   * cn-hangzhou+cds-346063****
   */
  cdsId?: string;
  /**
   * @remarks
   * The processing mode of files that have the same name.
   * 
   * Valid values:
   * 
   * *   <!-- -->
   * 
   *     refuse
   * 
   *     <!-- -->
   * 
   *     : If you want to create a file that uses the same name as an existing file in the cloud, the system denies your request and returns the details of the existing file.
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     auto_rename
   * 
   *     <!-- -->
   * 
   *     : If you want to create a file that uses the same name as an existing file in the cloud, the system renames the file that you want to create by appending the current time point.
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     ignore
   * 
   *     <!-- -->
   * 
   *     : The system allows you to create a file that uses the same name as an existing file in the cloud.
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     over_write
   * 
   *     <!-- -->
   * 
   *     : After you create a file that uses the same name as an existing file in the cloud, the new file overwrites the existing file.
   * 
   *     <!-- -->
   * 
   * @example
   * ignore
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * The user ID that you want to use to access the cloud disk.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 63f3257b68b018170b194d87b875512d108f****
   */
  fileId?: string;
  /**
   * @remarks
   * The group ID.
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the parent folder that you want to move. If you want to remove the root folder, set the value to root.
   * 
   * @example
   * 6409848a6da91d6240604e7ba7337d85ba8a1****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      conflictPolicy: 'ConflictPolicy',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      parentFolderId: 'ParentFolderId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      conflictPolicy: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      parentFolderId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

