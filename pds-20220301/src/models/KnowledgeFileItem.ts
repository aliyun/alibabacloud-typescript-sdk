// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeFileItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
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

