// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadRecordsResponseBodyRecords extends $dara.Model {
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
   * The URL that can be used to download the file.
   * 
   * @example
   * https://perth-download-task.oss-cn-beijing.aliyuncs.com/*****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Error message
   */
  exceptionMsg?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 20220509113448-20220509173448.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The state of the upload task. After you call the DownloadDiagnosisRecords operation, query diagnostic information is first uploaded to Object Storage Service (OSS). After the upload task is complete, the query diagnostic information can be downloaded. Valid values:
   * 
   * *   **running**: uploading
   * *   **finished**: uploaded
   * *   **failed**: failed
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

export class DescribeDownloadRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to download the file.
   */
  records?: DescribeDownloadRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
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

