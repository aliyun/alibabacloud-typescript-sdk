// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the download task.
   * 
   * @example
   * 636890
   */
  downloadId?: number;
  /**
   * @remarks
   * The exception message returned if the download task fails.
   * 
   * @example
   * The query result is empty.
   */
  exceptionMsg?: string;
  /**
   * @remarks
   * The name of the downloaded file.
   * 
   * @example
   * 20210806094635-20210806095135
   */
  fileName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **running**: The task is in progress.
   * 
   * - **finished**: The task is complete.
   * 
   * - **failed**: The task failed.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The download URL of the result file.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      exceptionMsg: 'ExceptionMsg',
      fileName: 'FileName',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      exceptionMsg: 'string',
      fileName: 'string',
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication failure message.
   * 
   * @example
   * Authentication failed.
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * A list of download tasks.
   */
  records?: DescribeDownloadRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D761DA51-12F8-5457-AAA9-F52B9F436D2D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      records: { 'type': 'array', 'itemType': DescribeDownloadRecordsResponseBodyRecords },
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

