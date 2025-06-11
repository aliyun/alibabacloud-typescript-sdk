// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupEncryptedStringResponseBodyData extends $dara.Model {
  backupInfoJson?: string;
  static names(): { [key: string]: string } {
    return {
      backupInfoJson: 'BackupInfoJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupInfoJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

