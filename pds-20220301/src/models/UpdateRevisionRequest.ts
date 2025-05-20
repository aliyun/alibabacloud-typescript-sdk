// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRevisionRequest extends $dara.Model {
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
   * Specifies whether to permanently retain a version.
   * 
   * By default, this parameter is not specified, which indicates that you do not modify the permanent retention configuration of the version.
   * 
   * @example
   * true
   */
  keepForever?: boolean;
  /**
   * @remarks
   * The description of the version. The description can be up to 1,024 characters in length.
   * 
   * By default, this parameter is not specified, which indicates that you do not modify the description of the version.
   * 
   * @example
   * aaa
   */
  revisionDescription?: string;
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
      keepForever: 'keep_forever',
      revisionDescription: 'revision_description',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      keepForever: 'boolean',
      revisionDescription: 'string',
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

