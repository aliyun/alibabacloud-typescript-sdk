// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupLogDownloadLinksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the redo log backups.
   * 
   * @example
   * 78167430
   */
  backupLogIds?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The validity period of the download links in hours. Valid values: 1 to 596523.
   * 
   * @example
   * 3
   */
  expireHours?: number;
  static names(): { [key: string]: string } {
    return {
      backupLogIds: 'BackupLogIds',
      DBClusterId: 'DBClusterId',
      expireHours: 'ExpireHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogIds: 'string',
      DBClusterId: 'string',
      expireHours: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

