// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The processing method that is used if the file that you want to modify has the same name as an existing file on the cloud. Valid values:
   * 
   * ignore: allows you to modify the file by using the same name as an existing file on the cloud.
   * 
   * auto_rename: automatically renames the file that has the same name on the cloud. By default, the current point in time is added to the end of the file name. Example: xxx_20060102_150405.
   * 
   * refuse: does not modify the file that you want to modify but returns the information about the file that has the same name on the cloud.
   * 
   * Default value: ignore.
   * 
   * @example
   * ignore
   */
  checkNameMode?: string;
  /**
   * @remarks
   * The description of the file. The description can be up to 1,024 characters in length.
   */
  description?: string;
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
   * Specifies whether to hide the file.
   * 
   * @example
   * true
   */
  hidden?: boolean;
  /**
   * @remarks
   * The tags of the file. You can specify up to 100 tags.
   */
  labels?: string[];
  /**
   * @remarks
   * The local time when the file was modified. The time is in the yyyy-MM-ddTHH:mm:ssZ format based on the UTC+0 time zone.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  localModifiedAt?: string;
  /**
   * @remarks
   * The name of the file. The name can be up to 1,024 bytes in length based on the UTF-8 encoding rule.
   * 
   * @example
   * a.jpg
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to add the file to favorites.
   * 
   * @example
   * true
   */
  starred?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkNameMode: 'check_name_mode',
      description: 'description',
      driveId: 'drive_id',
      fileId: 'file_id',
      hidden: 'hidden',
      labels: 'labels',
      localModifiedAt: 'local_modified_at',
      name: 'name',
      starred: 'starred',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNameMode: 'string',
      description: 'string',
      driveId: 'string',
      fileId: 'string',
      hidden: 'boolean',
      labels: { 'type': 'array', 'itemType': 'string' },
      localModifiedAt: 'string',
      name: 'string',
      starred: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

