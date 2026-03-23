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
  backupEndTime?: string;
  backupMethod?: string;
  backupSetScale?: number;
  backupSetStatus?: number;
  backupStartTime?: string;
  backupType?: string;
  category?: string;
  consistentTime?: string;
  crossBackupDownloadLink?: string;
  crossBackupId?: number;
  crossBackupRegion?: string;
  crossBackupSetFile?: string;
  crossBackupSetLocation?: string;
  crossBackupSetSize?: number;
  DBInstanceStorageType?: string;
  engine?: string;
  engineVersion?: string;
  instanceId?: number;
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
  endTime?: string;
  items?: DescribeCrossRegionBackupsResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  regionId?: string;
  requestId?: string;
  startTime?: string;
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

