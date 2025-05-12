// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically rename the file if a file that has the same name exists in the folder to which you want to copy the file. Default value: false.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  autoRename?: boolean;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-352282****
   */
  cdsId?: string;
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
   * The file ID. You can call the CreateCdsFile operation to query the file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 640985a0ca2f71f489d2497682ca0bf468de****
   */
  fileId?: string;
  /**
   * @remarks
   * 目标复制文件所在的个人空间ID（即UserId，您可以在DescribeCloudDriveUsers接口返回的报文中获取。）或者目标复制文件所在的团队空间ID（即GroupId，您可以在DescribeCloudDriveGroups接口返回的报文中获取。）
   * > FileReceiverId和FileReceiverType都为空时，默认复制到文件所在的个人空间。
   * >
   * 
   * @example
   * user02
   */
  fileReceiverId?: string;
  /**
   * @remarks
   * 文件所属的空间类型。
   * 
   * @example
   * user
   */
  fileReceiverType?: string;
  groupId?: string;
  /**
   * @remarks
   * The ID of the parent folder of the folder to which you want to copy the file. If you want to copy the file to the root directory, set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * root
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
      autoRename: 'AutoRename',
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      fileReceiverId: 'FileReceiverId',
      fileReceiverType: 'FileReceiverType',
      groupId: 'GroupId',
      parentFolderId: 'ParentFolderId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRename: 'boolean',
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      fileReceiverId: 'string',
      fileReceiverType: 'string',
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

