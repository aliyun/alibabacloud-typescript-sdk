// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The download job ID.
   * 
   * @example
   * 636890
   */
  downloadId?: number;
  /**
   * @remarks
   * The error message returned if the download job failed.
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
   * The status of the download job. Valid values:
   * 
   * *   **running**
   * *   **finished**
   * *   **failed**
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The download URL of the file.
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

