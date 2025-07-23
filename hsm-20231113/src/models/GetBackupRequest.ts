// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-fdb897sdf****
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

