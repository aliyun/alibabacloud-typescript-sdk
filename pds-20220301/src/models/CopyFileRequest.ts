// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyFileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically rename the file if the file name already exists in the destination folder. Default value: false.
   * 
   * @example
   * true
   */
  autoRename?: boolean;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID or folder ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a share link, carry the `x-share-token` header for authentication in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify one of `share_id` and `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the drive to which you want to copy the file or folder. Default value: the value of drive_id.
   * 
   * @example
   * 1
   */
  toDriveId?: string;
  /**
   * @remarks
   * The ID of the destination parent folder. If you want to copy the file or folder to a root directory, set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * 6520943DC261
   */
  toParentFileId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRename: 'auto_rename',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
      toDriveId: 'to_drive_id',
      toParentFileId: 'to_parent_file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRename: 'boolean',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
      toDriveId: 'string',
      toParentFileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

