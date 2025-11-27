// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossRegionLogBackupFilesResponseBodyItemsItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination region within which the cross-region backup file is stored.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The external URL from which you can download the cross-region log backup file.
   * 
   * @example
   * http://rdsddrlog-zb.oss-cn-zhangjiakou.aliyuncs.com/xxxxx
   */
  crossDownloadLink?: string;
  /**
   * @remarks
   * The internal URL from which you can download the cross-region log backup file.
   * 
   * @example
   * http://rdsddrlog-zb.oss-cn-zhangjiakou-internal.aliyuncs.com/xxxxx
   */
  crossIntranetDownloadLink?: string;
  /**
   * @remarks
   * The ID of the cross-region log backup file.
   * 
   * @example
   * 14567
   */
  crossLogBackupId?: number;
  /**
   * @remarks
   * The size of the cross-region log backup file. Unit: bytes.
   * 
   * @example
   * 5312836
   */
  crossLogBackupSize?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 8161055
   */
  instanceId?: number;
  /**
   * @remarks
   * The time when the URL expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-06-30T15:00:00Z
   */
  linkExpiredTime?: string;
  /**
   * @remarks
   * The start time of the cross-region log backup file. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-05-30T12:10:00Z
   */
  logBeginTime?: string;
  /**
   * @remarks
   * The end time of the cross-region log backup file. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-05-30T20:10:00Z
   */
  logEndTime?: string;
  /**
   * @remarks
   * The name of the cross-region log backup file.
   * 
   * @example
   * cn-hangzhou_rm-bpxxxxx_7198739_mysql-bin.000230
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-06-15T12:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cross-region log backup files.
   */
  items?: DescribeCrossRegionLogBackupFilesResponseBodyItems;
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
   * The number of cross-region backup files on the current page.
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
   * DAC241E8-28E6-49DA-BFB0-B2DD090885C1
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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

