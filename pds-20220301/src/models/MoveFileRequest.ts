// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveFileRequest extends $dara.Model {
  /**
   * @remarks
   * The processing method that is used if the file that you want to move has the same name as an existing file in the destination directory. Valid values:
   * 
   * ignore: allows you to move the file by using the same name as an existing file in the destination directory.
   * 
   * auto_rename: automatically renames the file that has the same name exists in the destination directory. By default, the current point in time is added to the end of the file name. Example: xxx_20060102_150405.
   * 
   * refuse: does not move the file that you want to move but returns the information about the file that has the same name in the destination directory.
   * 
   * Default value: ignore.
   * 
   * @example
   * ignore
   */
  checkNameMode?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the destination parent directory to which you want to move a file or folder. If you want to move a file or folder to the root directory, set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * 6520943DC261
   */
  toParentFileId?: string;
  static names(): { [key: string]: string } {
    return {
      checkNameMode: 'check_name_mode',
      driveId: 'drive_id',
      fileId: 'file_id',
      toParentFileId: 'to_parent_file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNameMode: 'string',
      driveId: 'string',
      fileId: 'string',
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

