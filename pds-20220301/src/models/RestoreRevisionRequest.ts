// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreRevisionRequest extends $dara.Model {
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
   * The version ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 40CB7794C929
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

