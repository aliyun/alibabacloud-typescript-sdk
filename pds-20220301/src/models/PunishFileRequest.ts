// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PunishFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pds_file_meta_frozen
   */
  actionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2498DZ2
   */
  fileId?: string;
  /**
   * @example
   * illegal
   */
  punishReason?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'action_code',
      driveId: 'drive_id',
      fileId: 'file_id',
      punishReason: 'punish_reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      driveId: 'string',
      fileId: 'string',
      punishReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

