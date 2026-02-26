// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB extends $dara.Model {
  dataBase?: string;
  downloadLink?: string;
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
  backupDownloadLinkByDB?: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB;
  backupDownloadURL?: string;
  backupEndTime?: string;
  backupId?: string;
  backupInitiator?: string;
  backupIntranetDownloadURL?: string;
  backupMethod?: string;
  backupMode?: string;
  backupSize?: number;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  checksum?: string;
  consistentTime?: number;
  copyOnlyBackup?: string;
  DBInstanceId?: string;
  encryption?: string;
  engine?: string;
  engineVersion?: string;
  expectExpireTime?: string;
  hostInstanceID?: string;
  isAvail?: number;
  metaStatus?: string;
  storageClass?: string;
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

