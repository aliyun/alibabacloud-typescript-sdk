// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreFileRequest extends $dara.Model {
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
   * The ID of the file or folder.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43a255edc4463bffa6f5f5d317401
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

