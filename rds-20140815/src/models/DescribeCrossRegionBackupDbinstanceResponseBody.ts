// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem extends $dara.Model {
  backupEnabled?: string;
  backupEnabledTime?: string;
  crossBackupRegion?: string;
  crossBackupType?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  engine?: string;
  engineVersion?: string;
  lockMode?: string;
  logBackupEnabled?: string;
  logBackupEnabledTime?: string;
  retentType?: number;
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      backupEnabled: 'BackupEnabled',
      backupEnabledTime: 'BackupEnabledTime',
      crossBackupRegion: 'CrossBackupRegion',
      crossBackupType: 'CrossBackupType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      lockMode: 'LockMode',
      logBackupEnabled: 'LogBackupEnabled',
      logBackupEnabledTime: 'LogBackupEnabledTime',
      retentType: 'RetentType',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEnabled: 'string',
      backupEnabledTime: 'string',
      crossBackupRegion: 'string',
      crossBackupType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      engine: 'string',
      engineVersion: 'string',
      lockMode: 'string',
      logBackupEnabled: 'string',
      logBackupEnabledTime: 'string',
      retentType: 'number',
      retention: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupDBInstanceResponseBodyItems extends $dara.Model {
  item?: DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem },
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

export class DescribeCrossRegionBackupDBInstanceResponseBody extends $dara.Model {
  items?: DescribeCrossRegionBackupDBInstanceResponseBodyItems;
  itemsNumbers?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  requestId?: string;
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      itemsNumbers: 'ItemsNumbers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeCrossRegionBackupDBInstanceResponseBodyItems,
      itemsNumbers: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalRecords: 'number',
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

