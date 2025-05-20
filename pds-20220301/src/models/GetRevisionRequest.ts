// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRevisionRequest extends $dara.Model {
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
   * Specifies the returned fields.
   * 
   * By default, this parameter is left empty. If you set this parameter to \\*, all fields are returned. If you leave this parameter empty, the creator of the file is not returned.
   * 
   * @example
   * *
   */
  fields?: string;
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
  /**
   * @remarks
   * The validity period of the file download or preview. Valid values: 10 to 86400.
   * 
   * Default value: 900. Unit: seconds.
   * 
   * @example
   * 900
   */
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      fileId: 'file_id',
      revisionId: 'revision_id',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      fileId: 'string',
      revisionId: 'string',
      urlExpireSec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

