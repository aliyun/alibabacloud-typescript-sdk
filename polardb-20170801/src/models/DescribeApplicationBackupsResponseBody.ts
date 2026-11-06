// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationBackupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2020-11-15T07:30:20Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 61*******
   */
  backupId?: string;
  /**
   * @remarks
   * The start time of the backup. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2020-11-15T07:30:05Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup status. A value of Success indicates that the backup is completed, and a value of Failed indicates that the backup failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. A value of FullBackup indicates a full backup, and a value of IncrementalBackup indicates an incremental backup.
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The backup mode. A value of Automated indicates an automatic backup, and a value of Manual indicates a manual backup.
   * 
   * @example
   * Manual
   */
  jobMode?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      jobMode: 'JobMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      jobMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application backup sets.
   */
  items?: DescribeApplicationBackupsResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumbers?: string;
  /**
   * @remarks
   * The number of backup sets returned on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of backup sets that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumbers: 'PageNumbers',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeApplicationBackupsResponseBodyItems },
      pageNumbers: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

