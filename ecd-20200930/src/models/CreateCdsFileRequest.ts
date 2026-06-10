// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * Enterprise cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-82414*****
   */
  cdsId?: string;
  /**
   * @remarks
   * How to handle files with the same name.
   * 
   * @example
   * ignore
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * SHA-1 hash value of the file.
   * 
   * @example
   * 7C4A8D09CA3762AF61E59520943DC26494F8****
   */
  fileHash?: string;
  /**
   * @remarks
   * File size. Unit: Byte.
   * 
   * This parameter is required.
   * 
   * @example
   * 1048576
   */
  fileLength?: number;
  /**
   * @remarks
   * File name.
   * 
   * This parameter is required.
   * 
   * @example
   * testFile.txt
   */
  fileName?: string;
  /**
   * @remarks
   * File type.
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  fileType?: string;
  /**
   * @remarks
   * Team space ID.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * Parent file ID. Get this from the `FileId` parameter returned by the [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) API.
   * 
   * @example
   * 637c9163b453b1a384874264ba79f3f9eab9****
   */
  parentFileId?: string;
  /**
   * @remarks
   * Region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to list regions supported by WUYING Workspace.
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
      fileHash: 'FileHash',
      fileLength: 'FileLength',
      fileName: 'FileName',
      fileType: 'FileType',
      groupId: 'GroupId',
      parentFileId: 'ParentFileId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      conflictPolicy: 'string',
      endUserId: 'string',
      fileHash: 'string',
      fileLength: 'number',
      fileName: 'string',
      fileType: 'string',
      groupId: 'string',
      parentFileId: 'string',
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

