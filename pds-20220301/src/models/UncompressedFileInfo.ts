// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UncompressedFileInfo extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 5060
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 66972349b2b12fa309a143fb9db29647b2ddabfd
   */
  fileId?: string;
  /**
   * @remarks
   * Whether it is a folder.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isFolder?: boolean;
  /**
   * @remarks
   * Subfiles
   */
  items?: UncompressedFileInfo[];
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 1.mov
   */
  name?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 218052
   */
  size?: number;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 1721368014000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      isFolder: 'is_folder',
      items: 'items',
      name: 'name',
      size: 'size',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      isFolder: 'boolean',
      items: { 'type': 'array', 'itemType': UncompressedFileInfo },
      name: 'string',
      size: 'number',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

