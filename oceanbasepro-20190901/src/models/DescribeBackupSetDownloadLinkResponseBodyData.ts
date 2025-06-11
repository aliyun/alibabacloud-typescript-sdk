// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetDownloadLinkResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The restorable time of the backup set.
   * 
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  backupRestorableTime?: string;
  /**
   * @remarks
   * The ID of the target backup set.
   * 
   * @example
   * bak-4n****gacpa8
   */
  backupSetId?: string;
  /**
   * @remarks
   * The time when the download task corresponding to the target backup set was created.
   * 
   * @example
   * 2020-05-22T17:04:18
   */
  downloadTaskCreateTime?: string;
  /**
   * @remarks
   * The ID of the download task corresponding to the target backup set.
   * 
   * @example
   * 1000002
   */
  downloadTaskId?: number;
  /**
   * @remarks
   * The status of the download task corresponding to the target backup set.
   * 
   * @example
   * RUNNING
   */
  downloadTaskStatus?: string;
  /**
   * @remarks
   * The internal URL.
   * 
   * @example
   * http://bucket.oss-region-internal.aliyuncs.com/xxxxx
   */
  internalUrl?: string;
  /**
   * @remarks
   * The validity period of the URL, in seconds.
   * 
   * @example
   * 3600
   */
  urlAliveTime?: number;
  /**
   * @remarks
   * The expiration time of the URL.
   * 
   * @example
   * 2024-01-04 17:39:49
   */
  urlExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupRestorableTime: 'BackupRestorableTime',
      backupSetId: 'BackupSetId',
      downloadTaskCreateTime: 'DownloadTaskCreateTime',
      downloadTaskId: 'DownloadTaskId',
      downloadTaskStatus: 'DownloadTaskStatus',
      internalUrl: 'InternalUrl',
      urlAliveTime: 'UrlAliveTime',
      urlExpiredTime: 'UrlExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRestorableTime: 'string',
      backupSetId: 'string',
      downloadTaskCreateTime: 'string',
      downloadTaskId: 'number',
      downloadTaskStatus: 'string',
      internalUrl: 'string',
      urlAliveTime: 'number',
      urlExpiredTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

