// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadDiagnosisRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the download task.
   * 
   * @example
   * 68
   */
  downloadId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4ACF4E0-2952-3A87-9A2C-474058******
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

