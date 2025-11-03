// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-82414*****
   */
  cdsId?: string;
  /**
   * @remarks
   * The policy that is used when the file that you want to upload has the same name as an existing file in the cloud disk.
   * 
   * Valid values:
   * 
   * *   refuse
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     denies creating the file
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   auto_rename
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     automatically renames the file
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   ignore
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     allows the file to use the same name as the existing file in the cloud disk
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   over_write
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     overwrites the existing file in the cloud disk
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * ignore
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * The hash value of the SHA1 algorithm that is used by the file.
   * 
   * @example
   * 7C4A8D09CA3762AF61E59520943DC26494F8****
   */
  fileHash?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  fileLength?: number;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * testFile.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * Valid values:
   * 
   * *   file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   folder
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  fileType?: string;
  groupId?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * 637c9163b453b1a384874264ba79f3f9eab9****
   */
  parentFileId?: string;
  /**
   * @remarks
   * The region ID.
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

