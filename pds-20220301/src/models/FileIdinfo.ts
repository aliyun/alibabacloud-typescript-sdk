// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileIDInfo extends $dara.Model {
  driveId?: string;
  fileId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

