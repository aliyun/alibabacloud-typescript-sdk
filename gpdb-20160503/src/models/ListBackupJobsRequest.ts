// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupJobsRequest extends $dara.Model {
  /**
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

