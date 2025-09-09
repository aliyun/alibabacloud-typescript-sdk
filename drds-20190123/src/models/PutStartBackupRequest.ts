// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutStartBackupRequest extends $dara.Model {
  /**
   * @remarks
   * If you need to back up data at the database level, you must specify the list of databases to be backed up, and separate multiple databases with commas (,).
   * 
   * @example
   * db_1, db_2
   */
  backupDbNames?: string;
  /**
   * @remarks
   * The backup level. Valid values:
   * 
   * *   instance: instance
   * *   db: The database type.
   * 
   * @example
   * db
   */
  backupLevel?: string;
  /**
   * @remarks
   * The backup mode. For more information, see [backup mode](https://help.aliyun.com/document_detail/108631.html) and the valid values are as follows:
   * 
   * *   phy: fast backup
   * *   logic: Consistent backup
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds****c6vxxyzd
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupLevel: 'string',
      backupMode: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

