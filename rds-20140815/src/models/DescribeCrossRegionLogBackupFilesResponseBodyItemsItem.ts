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

