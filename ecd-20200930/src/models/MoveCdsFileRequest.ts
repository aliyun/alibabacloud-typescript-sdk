// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud disk ID.
   * 
   * @example
   * cn-hangzhou+cds-346063****
   */
  cdsId?: string;
  /**
   * @remarks
   * The policy for handling files with the same name.
   * 
   * @example
   * ignore
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * The ID of the user who uses the cloud disk.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID. You can call [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) to query the ID of the file.
   * 
   * @example
   * 63f3257b68b018170b194d87b875512d108f****
   */
  fileId?: string;
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * cg-hvyou5jbob3b0****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the parent folder at the destination. You can call [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) to query the ID of the file. Set this parameter to `root` if you want to move the file to the root directory.
   * 
   * @example
   * 6409848a6da91d6240604e7ba7337d85ba8a1****
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

