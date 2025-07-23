// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigBackupRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-fdb897sdfg****
   */
  backupId?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * backup-test
   */
  name?: string;
  /**
   * @remarks
   * The description of the backup.
   * 
   * @example
   * Test backup.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

