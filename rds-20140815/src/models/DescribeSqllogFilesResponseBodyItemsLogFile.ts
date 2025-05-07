// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogFilesResponseBodyItemsLogFile extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * custinsxxxxx.csv
   */
  fileID?: string;
  /**
   * @remarks
   * The download URL of the file. If the audit log file cannot be downloaded, this parameter is null.
   * 
   * @example
   * http://rdslog-hz-v3.oss-cn-hangzhou.aliyuncs.com/xxxxx
   */
  logDownloadURL?: string;
  /**
   * @remarks
   * The time at which the last SQL statement recorded in the audit log file was executed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-05-24T07:00:00Z
   */
  logEndTime?: string;
  /**
   * @remarks
   * The size of the audit log file. Unit: bytes.
   * 
   * @example
   * 3000
   */
  logSize?: string;
  /**
   * @remarks
   * The time at which the first SQL statement recorded in the audit log file was executed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-05-23T07:00:00Z
   */
  logStartTime?: string;
  /**
   * @remarks
   * The status of the audit log file. Valid values:
   * 
   * *   **Success**
   * *   **Failed**
   * *   **Generating**
   * 
   * @example
   * Success
   */
  logStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fileID: 'FileID',
      logDownloadURL: 'LogDownloadURL',
      logEndTime: 'LogEndTime',
      logSize: 'LogSize',
      logStartTime: 'LogStartTime',
      logStatus: 'LogStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileID: 'string',
      logDownloadURL: 'string',
      logEndTime: 'string',
      logSize: 'string',
      logStartTime: 'string',
      logStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

