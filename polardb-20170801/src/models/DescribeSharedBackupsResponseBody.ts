// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSharedBackupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup, in UTC.
   * 
   * @example
   * 2020-05-12T03:25:55Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Only snapshot backup is supported. The value is fixed to **Snapshot**.
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * - **Automated**: automated backup
   * 
   * - **Manual**: manual backup
   * 
   * @example
   * Manual
   */
  backupMode?: string;
  /**
   * @remarks
   * The size of the backup set, in bytes.
   * 
   * @example
   * 4639948800
   */
  backupSetSize?: string;
  /**
   * @remarks
   * The start time of the backup, in UTC.
   * 
   * @example
   * 2020-11-15T07:30:05Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * 
   * - **Success**: The backup is complete.
   * 
   * - **Failed**: The backup failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Only full backups are supported. The value is fixed to **FullBackup**.
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The backup level. Valid values:
   * 
   * - **Level-1**: Level-1 backup.
   * 
   * - **Level-2**: Level-2 backup.
   * 
   * @example
   * Level-2
   */
  backupsLevel?: string;
  /**
   * @remarks
   * The UNIX timestamp of the consistent snapshot, in seconds.
   * 
   * @example
   * 1589253947
   */
  consistentTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: prepaid (subscription)
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hongzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Serverless type. A value of **AgileServerless** indicates a Serverless cluster, while an empty value indicates a standard cluster.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The share type.
   * 
   * @example
   * ShareIncoming
   */
  shareType?: string;
  /**
   * @remarks
   * The UID of the account that shared the backup set.
   * 
   * @example
   * 170*************
   */
  sharerUID?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSetSize: 'BackupSetSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupsLevel: 'BackupsLevel',
      consistentTime: 'ConsistentTime',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      payType: 'PayType',
      regionId: 'RegionId',
      serverlessType: 'ServerlessType',
      shareType: 'ShareType',
      sharerUID: 'SharerUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSetSize: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      backupsLevel: 'string',
      consistentTime: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      payType: 'string',
      regionId: 'string',
      serverlessType: 'string',
      shareType: 'string',
      sharerUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSharedBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of shared backup sets.
   */
  items?: DescribeSharedBackupsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries on the current page.
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
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The total record count.
   * 
   * @example
   * 16
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSharedBackupsResponseBodyItems },
      pageNumber: 'string',
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

