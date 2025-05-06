// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupLogsResponseBodyItemsBackupLog extends $dara.Model {
  /**
   * @remarks
   * The time when the backup task ended. The time follows the ISO 8601 standard in the `YYYY-MM-DD\\"T\\"HH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-02-12T03:55:31Z
   */
  backupLogEndTime?: string;
  /**
   * @remarks
   * The ID of the backup log.
   * 
   * @example
   * 1111111111
   */
  backupLogId?: string;
  /**
   * @remarks
   * The name of the backup log.
   * 
   * @example
   * ib_logfile1
   */
  backupLogName?: string;
  /**
   * @remarks
   * The size of the backup log. Unit: bytes.
   * 
   * @example
   * 1073741824
   */
  backupLogSize?: string;
  /**
   * @remarks
   * The time when the backup task started. The time follows the ISO 8601 standard in the `YYYY-MM-DD\\"T\\"HH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-02-12T03:54:43Z
   */
  backupLogStartTime?: string;
  /**
   * @remarks
   * The public URL used to download the backup log.
   * 
   * @example
   * http://***********.oss-cn-hangzhou.aliyuncs.com
   */
  downloadLink?: string;
  /**
   * @remarks
   * The internal URL used to download the backup log.
   * 
   * @example
   * http://***********.oss-cn-hangzhou-internal.aliyuncs.com
   */
  intranetDownloadLink?: string;
  /**
   * @remarks
   * The time when the download URL expires.
   * 
   * @example
   * 2020-02-14T08:40:50Z
   */
  linkExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogEndTime: 'BackupLogEndTime',
      backupLogId: 'BackupLogId',
      backupLogName: 'BackupLogName',
      backupLogSize: 'BackupLogSize',
      backupLogStartTime: 'BackupLogStartTime',
      downloadLink: 'DownloadLink',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogEndTime: 'string',
      backupLogId: 'string',
      backupLogName: 'string',
      backupLogSize: 'string',
      backupLogStartTime: 'string',
      downloadLink: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

