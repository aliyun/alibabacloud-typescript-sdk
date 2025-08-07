// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-385d35fb088f453c8fa1
   */
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

