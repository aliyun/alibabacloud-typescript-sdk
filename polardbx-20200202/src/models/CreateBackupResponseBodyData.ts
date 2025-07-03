// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupResponseBodyData extends $dara.Model {
  backupSetId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

