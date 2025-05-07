// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinlogFilesResponseBodyItemsBinLogFile extends $dara.Model {
  /**
   * @remarks
   * The checksum. The value of this parameter is calculated by using the CRC64 algorithm.
   * 
   * @example
   * 18358304393468701857
   */
  checksum?: string;
  /**
   * @remarks
   * The HTTP-based download URL of the log file. If the return value of this parameter is NULL, ApsaraDB RDS does not provide a download URL for the log file.
   * 
   * @example
   * http://rdsxxxxx.oss.aliyuncs.com/xxxxxx
   */
  downloadLink?: string;
  /**
   * @remarks
   * The size of the log file.
   * 
   * Unit: bytes.
   * 
   * @example
   * 2269410
   */
  fileSize?: number;
  /**
   * @remarks
   * The ID of the instance to which the log file belongs. This parameter helps determine whether the log file is generated on the primary instance or the secondary instance.
   * 
   * >  You can log on to the ApsaraDB RDS console and go to the instance details page. In the left-side navigation pane, click **Service Availability** to view the values of **Primary Instance No.** and **Secondary Instance No.**.
   * 
   * @example
   * 5841973
   */
  hostInstanceID?: string;
  /**
   * @remarks
   * The URL that is used to download files over an internal network.
   * 
   * @example
   * http://rdslog-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/xxxxxx
   */
  intranetDownloadLink?: string;
  /**
   * @remarks
   * The expiration time of the URL.
   * 
   * The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2013-06-09T18:00:00Z
   */
  linkExpiredTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-09T17:45:21Z
   */
  logBeginTime?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-15T13:10:28Z
   */
  logEndTime?: string;
  /**
   * @remarks
   * The log file name.
   * 
   * @example
   * 000000040000000000000019
   */
  logFileName?: string;
  /**
   * @remarks
   * The status of the log file that is stored in the Object Storage Service (OSS) bucket.
   * 
   * Valid values:
   * 
   * *   **Uploading**
   * *   **Completed**
   * 
   * @example
   * Completed
   */
  remoteStatus?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      downloadLink: 'DownloadLink',
      fileSize: 'FileSize',
      hostInstanceID: 'HostInstanceID',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
      logBeginTime: 'LogBeginTime',
      logEndTime: 'LogEndTime',
      logFileName: 'LogFileName',
      remoteStatus: 'RemoteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      downloadLink: 'string',
      fileSize: 'number',
      hostInstanceID: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
      logBeginTime: 'string',
      logEndTime: 'string',
      logFileName: 'string',
      remoteStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

