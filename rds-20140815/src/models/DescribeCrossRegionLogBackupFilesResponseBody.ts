// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossRegionLogBackupFilesResponseBodyItemsItem extends $dara.Model {
  crossBackupRegion?: string;
  crossDownloadLink?: string;
  crossIntranetDownloadLink?: string;
  crossLogBackupId?: number;
  crossLogBackupSize?: number;
  instanceId?: number;
  linkExpiredTime?: string;
  logBeginTime?: string;
  logEndTime?: string;
  logFileName?: string;
  static names(): { [key: string]: string } {
    return {
      crossBackupRegion: 'CrossBackupRegion',
      crossDownloadLink: 'CrossDownloadLink',
      crossIntranetDownloadLink: 'CrossIntranetDownloadLink',
      crossLogBackupId: 'CrossLogBackupId',
      crossLogBackupSize: 'CrossLogBackupSize',
      instanceId: 'InstanceId',
      linkExpiredTime: 'LinkExpiredTime',
      logBeginTime: 'LogBeginTime',
      logEndTime: 'LogEndTime',
      logFileName: 'LogFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossBackupRegion: 'string',
      crossDownloadLink: 'string',
      crossIntranetDownloadLink: 'string',
      crossLogBackupId: 'number',
      crossLogBackupSize: 'number',
      instanceId: 'number',
      linkExpiredTime: 'string',
      logBeginTime: 'string',
      logEndTime: 'string',
      logFileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionLogBackupFilesResponseBodyItems extends $dara.Model {
  item?: DescribeCrossRegionLogBackupFilesResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeCrossRegionLogBackupFilesResponseBodyItemsItem },
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

export class DescribeCrossRegionLogBackupFilesResponseBody extends $dara.Model {
  DBInstanceId?: string;
  endTime?: string;
  items?: DescribeCrossRegionLogBackupFilesResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  regionId?: string;
  requestId?: string;
  startTime?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
      endTime: 'string',
      items: DescribeCrossRegionLogBackupFilesResponseBodyItems,
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

