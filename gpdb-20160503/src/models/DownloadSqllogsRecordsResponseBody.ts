// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSQLLogsRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the download task.
   * 
   * @example
   * 11
   */
  downloadId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7565770E-7C45-462D-BA4A-8A5396F2CAD1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

