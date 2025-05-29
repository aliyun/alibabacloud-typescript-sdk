// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadSQLLogsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * Download record ID.
   * 
   * @example
   * 1150
   */
  downloadId?: number;
  /**
   * @remarks
   * Download link.
   * 
   * @example
   * https://perth-download-task.oss-cn-beijing.aliyuncs.com/*****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Error message
   */
  exceptionMsg?: string;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * 20220509113448-20220509173448.csv
   */
  fileName?: string;
  /**
   * @remarks
   * Task status, with possible values being:
   * - **running**: Downloading.
   * - **finished**: Completed.
   * - **failed**: Download failed.
   * 
   * @example
   * finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      downloadUrl: 'DownloadUrl',
      exceptionMsg: 'ExceptionMsg',
      fileName: 'FileName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      downloadUrl: 'string',
      exceptionMsg: 'string',
      fileName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

