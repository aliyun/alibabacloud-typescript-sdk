// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadSQLLogsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the download record.
   * 
   * @example
   * 1150
   */
  downloadId?: number;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * https://perth-download-task.oss-cn-beijing.aliyuncs.com/*****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Error message
   */
  exceptionMsg?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 20220509113448-20220509173448.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The task status. Valid values:
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

export class DescribeDownloadSQLLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of download records.
   */
  records?: DescribeDownloadSQLLogsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FDE9942A-D919-527B-B559-5D0F6F20CCEC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeDownloadSQLLogsResponseBodyRecords },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

