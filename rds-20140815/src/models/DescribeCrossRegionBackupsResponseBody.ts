// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions extends $dara.Model {
  restoreRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      restoreRegion: 'RestoreRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.restoreRegion)) {
      $dara.Model.validateArray(this.restoreRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsResponseBodyItemsItem extends $dara.Model {
  /**
   * @remarks
   * The time when the cross-region data backup file was generated.
   * 
   * @example
   * 2019-06-15T12:10:00Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The method that is used to generate the cross-region data backup file. Valid values:
   * 
   * *   **L**: logical backup
   * *   **P**: physical backup
   * 
   * @example
   * P
   */
  backupMethod?: string;
  /**
   * @remarks
   * The level at which the cross-region data backup file is generated.
   * 
   * *   **0**: instance-level backup
   * *   **1**: database-level backup
   * 
   * @example
   * 0
   */
  backupSetScale?: number;
  /**
   * @remarks
   * The status of the cross-region data backup. Valid values:
   * 
   * *   **0**: The cross-region data backup is successful.
   * *   **1**: The cross-region data backup failed.
   * 
   * @example
   * 0
   */
  backupSetStatus?: number;
  /**
   * @remarks
   * The time when the cross-region data backup started.
   * 
   * @example
   * 2019-05-30T12:10:00Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The type of the cross-region data backup. Valid values:
   * 
   * *   **F**: full data backup
   * *   **I**: incremental data backup
   * 
   * @example
   * F
   */
  backupType?: string;
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition.
   * *   **HighAvailability**: RDS High-availability Edition.
   * *   **Finance**: RDS Enterprise Edition. This edition is available only for the China site (aliyun.com).
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The point in time that is indicated by the data in the cross-region data backup file.
   * 
   * @example
   * 2019-06-12T05:44:46Z
   */
  consistentTime?: string;
  /**
   * @remarks
   * The external URL from which you can download the cross-region data backup file.
   * 
   * @example
   * http://rdsddrbak-shanghai.oss-cn-shanghai.aliyuncs.com/xxxxx
   */
  crossBackupDownloadLink?: string;
  /**
   * @remarks
   * The ID of the cross-region data backup file.
   * 
   * @example
   * 14377
   */
  crossBackupId?: number;
  /**
   * @remarks
   * The ID of the region in which the cross-region backup files of the instance are stored.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The name of the compressed package that contains the cross-region data backup file.
   * 
   * @example
   * cn-hangzhou_rm-xxxxx_hins81xxx_data_20190612134426_qp.xb
   */
  crossBackupSetFile?: string;
  /**
   * @remarks
   * The location where the cross-region data backup file is stored.
   * 
   * @example
   * oss
   */
  crossBackupSetLocation?: string;
  /**
   * @remarks
   * The size of the cross-region data backup file. Unit: bytes.
   * 
   * @example
   * 5312836
   */
  crossBackupSetSize?: number;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   **local_ssd**: local SSDs. This is the recommended storage type.
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_essd**: enhanced SSD (ESSD).
   * 
   * @example
   * ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance ID. This parameter is used to determine whether the instance that generates the cross-region data backup file is a primary or secondary instance.
   * 
   * @example
   * 8161055
   */
  instanceId?: number;
  /**
   * @remarks
   * The regions to which the cross-region data backup file can be restored.
   */
  restoreRegions?: DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupMethod: 'BackupMethod',
      backupSetScale: 'BackupSetScale',
      backupSetStatus: 'BackupSetStatus',
      backupStartTime: 'BackupStartTime',
      backupType: 'BackupType',
      category: 'Category',
      consistentTime: 'ConsistentTime',
      crossBackupDownloadLink: 'CrossBackupDownloadLink',
      crossBackupId: 'CrossBackupId',
      crossBackupRegion: 'CrossBackupRegion',
      crossBackupSetFile: 'CrossBackupSetFile',
      crossBackupSetLocation: 'CrossBackupSetLocation',
      crossBackupSetSize: 'CrossBackupSetSize',
      DBInstanceStorageType: 'DBInstanceStorageType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceId: 'InstanceId',
      restoreRegions: 'RestoreRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupMethod: 'string',
      backupSetScale: 'number',
      backupSetStatus: 'number',
      backupStartTime: 'string',
      backupType: 'string',
      category: 'string',
      consistentTime: 'string',
      crossBackupDownloadLink: 'string',
      crossBackupId: 'number',
      crossBackupRegion: 'string',
      crossBackupSetFile: 'string',
      crossBackupSetLocation: 'string',
      crossBackupSetSize: 'number',
      DBInstanceStorageType: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceId: 'number',
      restoreRegions: DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions,
    };
  }

  validate() {
    if(this.restoreRegions && typeof (this.restoreRegions as any).validate === 'function') {
      (this.restoreRegions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsResponseBodyItems extends $dara.Model {
  item?: DescribeCrossRegionBackupsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeCrossRegionBackupsResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2019-06-15T12:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cross-region data backup files.
   */
  items?: DescribeCrossRegionBackupsResponseBodyItems;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of cross-region data backup files on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60912B41-7579-4B5D-B289-8856030F0A6A
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2019-05-30T12:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      regionId: 'RegionId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      items: DescribeCrossRegionBackupsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      regionId: 'string',
      requestId: 'string',
      startTime: 'string',
      totalRecordCount: 'number',
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

