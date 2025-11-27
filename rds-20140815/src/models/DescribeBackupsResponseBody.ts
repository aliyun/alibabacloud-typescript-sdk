// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbs
   */
  dataBase?: string;
  /**
   * @remarks
   * The public URL from which you can download the backup set.
   * 
   * @example
   * https://cn-hangzhou.bak.rds.aliyuncs.com/custins53664665/hins18676859_2021072909473127987849.zip?Expires=*****&dbList=tb1
   */
  downloadLink?: string;
  /**
   * @remarks
   * The internal URL from which you can download the backup set.
   * 
   * @example
   * https://cn-hangzhou-internal.bak.rds.aliyuncs.com/custins53664665/hins18676859_2021072909473127987849.zip?Expires=*****&dbList=tb1
   */
  intranetDownloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      dataBase: 'DataBase',
      downloadLink: 'DownloadLink',
      intranetDownloadLink: 'IntranetDownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBase: 'string',
      downloadLink: 'string',
      intranetDownloadLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB extends $dara.Model {
  backupDownloadLinkByDB?: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB[];
  static names(): { [key: string]: string } {
    return {
      backupDownloadLinkByDB: 'BackupDownloadLinkByDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadLinkByDB: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB },
    };
  }

  validate() {
    if(Array.isArray(this.backupDownloadLinkByDB)) {
      $dara.Model.validateArray(this.backupDownloadLinkByDB);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
  /**
   * @remarks
   * An array consisting of URLs from which you can download backup sets of individual databases.
   */
  backupDownloadLinkByDB?: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB;
  /**
   * @remarks
   * The URL that is used to download the backup set over the Internet. If the backup set cannot be downloaded, null is returned.
   * 
   * >  For example, if BackupMethod of an ApsaraDB RDS for SQL Server instance is set to **Snapshot**, a null string is returned.
   * 
   * @example
   * http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/xxxxx
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup task. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-13T12:20:00Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 321020562
   */
  backupId?: string;
  /**
   * @remarks
   * The initiator of the backup task. Valid values:
   * 
   * *   **System**
   * *   **User**
   * 
   * @example
   * System
   */
  backupInitiator?: string;
  /**
   * @remarks
   * The URL that is used to download the backup set over an internal network. If the backup set cannot be downloaded, null is returned.
   * 
   * >  For example, if BackupMethod of an ApsaraDB RDS for SQL Server instance is set to **Snapshot**, a null string is returned.
   * 
   * @example
   * http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/xxxxx
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The method that is used to generate the backup set. Valid values:
   * 
   * *   **Logical**: logical backup
   * *   **Physical**: physical backup
   * *   **Snapshot**: snapshot backup
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode of the backup set. Valid values:
   * 
   * *   **Automated**
   * *   **Manual**
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The size of the data backup file. Unit: bytes.
   * 
   * @example
   * 2167808
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-03T12:20:00Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The state of the backup set.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type of the backup set. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The checksum. The value of this parameter is calculated by using the CRC64 algorithm.
   * 
   * @example
   * 1835830439**********
   */
  checksum?: string;
  /**
   * @remarks
   * The point in time at which the data in the backup set is consistent. The return value of this parameter is a timestamp.
   * 
   * >  If the instance runs MySQL 5.6, a timestamp is returned. Otherwise, the value 0 is returned.
   * 
   * @example
   * 1576506856
   */
  consistentTime?: number;
  /**
   * @remarks
   * The backup mode of the backup set. Valid values:
   * 
   * *   0: the standard mode. This mode supports full backups and incremental backups.
   * *   1: the copy-only mode. This mode supports only full backups.
   * 
   * >  This parameter is returned only when the instance runs SQL Server.
   * 
   * @example
   * 0
   */
  copyOnlyBackup?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The encryption information about the backup set.
   * 
   * @example
   * {}
   */
  encryption?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * *   MySQL
   * *   SQLServer
   * *   PostgreSQL
   * *   MariaDB
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  expectExpireTime?: string;
  /**
   * @remarks
   * The ID of the instance that generates the backup set. This parameter is used to indicate whether the instance that generates the backup set is a primary instance or a secondary instance.
   * 
   * @example
   * 5882781
   */
  hostInstanceID?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * *   **0**: The backup set is unavailable.
   * *   **1**: The backup set is available.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The status of the backup set that is used to restore individual databases or tables. Valid values:
   * 
   * *   **OK**: The data backup file is normal.
   * *   **LARGE**: The data backup file contains an abnormally large number of tables. It cannot be used to restore individual databases or tables.
   * *   **EMPTY**: The data backup file is generated from a failed backup task.
   * 
   * >  If an empty string is returned, the data backup file cannot be used to restore individual databases or tables.
   * 
   * @example
   * OK
   */
  metaStatus?: string;
  /**
   * @remarks
   * The storage class of the backup set. Valid values:
   * 
   * *   **0**: regular storage
   * *   **1**: archive storage
   * 
   * @example
   * 0
   */
  storageClass?: string;
  /**
   * @remarks
   * Indicates whether the backup set can be deleted. Valid values:
   * 
   * *   **Enabled**: The backup set can be deleted.
   * *   **Disabled**: The backup set cannot be deleted.
   * 
   * @example
   * Disabled
   */
  storeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      backupDownloadLinkByDB: 'BackupDownloadLinkByDB',
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupInitiator: 'BackupInitiator',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      checksum: 'Checksum',
      consistentTime: 'ConsistentTime',
      copyOnlyBackup: 'CopyOnlyBackup',
      DBInstanceId: 'DBInstanceId',
      encryption: 'Encryption',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expectExpireTime: 'ExpectExpireTime',
      hostInstanceID: 'HostInstanceID',
      isAvail: 'IsAvail',
      metaStatus: 'MetaStatus',
      storageClass: 'StorageClass',
      storeStatus: 'StoreStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadLinkByDB: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB,
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      backupInitiator: 'string',
      backupIntranetDownloadURL: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      checksum: 'string',
      consistentTime: 'number',
      copyOnlyBackup: 'string',
      DBInstanceId: 'string',
      encryption: 'string',
      engine: 'string',
      engineVersion: 'string',
      expectExpireTime: 'string',
      hostInstanceID: 'string',
      isAvail: 'number',
      metaStatus: 'string',
      storageClass: 'string',
      storeStatus: 'string',
    };
  }

  validate() {
    if(this.backupDownloadLinkByDB && typeof (this.backupDownloadLinkByDB as any).validate === 'function') {
      (this.backupDownloadLinkByDB as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItems extends $dara.Model {
  backup?: DescribeBackupsResponseBodyItemsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackup },
    };
  }

  validate() {
    if(Array.isArray(this.backup)) {
      $dara.Model.validateArray(this.backup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned backup sets.
   */
  items?: DescribeBackupsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of backup sets on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
  requestId?: string;
  /**
   * @remarks
   * The size of the snapshot chain of the instance. Unit: bytes.
   * 
   * @example
   * 0
   */
  totalEcsSnapshotSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalEcsSnapshotSize: 'TotalEcsSnapshotSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBackupsResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalEcsSnapshotSize: 'number',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

