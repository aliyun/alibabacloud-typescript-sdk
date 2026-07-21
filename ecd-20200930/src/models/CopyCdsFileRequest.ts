// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically rename the file when a file with the same name exists in the destination folder.
   * 
   * @example
   * true
   */
  autoRename?: boolean;
  /**
   * @remarks
   * The enterprise cloud drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-352282****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the user who is logged on to the cloud drive.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID. You can call [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) to query the ID of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 640985a0ca2f71f489d2497682ca0bf468de****
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the personal drive (which can be obtained from the `UserId` response parameter of the [DescribeCloudDriveUsers](https://help.aliyun.com/document_detail/2357237.html) operation) or the team space ID (which can be obtained from the `GroupId` response parameter of the [DescribeCloudDriveGroups](https://help.aliyun.com/document_detail/609896.html) operation) at the copy destination.
   * > If both `FileReceiverId` and `FileReceiverType` are empty, the file is copied to the personal drive where the file currently resides by default.
   * 
   * @example
   * user02
   */
  fileReceiverId?: string;
  /**
   * @remarks
   * The type of space to which the file belongs.
   * 
   * @example
   * user
   */
  fileReceiverType?: string;
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * cg-hs3i1w39o68ma****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the parent folder at the copy destination. You can call [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) to query the ID of the folder. Set this parameter to `root` if you want to copy the file to the root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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

