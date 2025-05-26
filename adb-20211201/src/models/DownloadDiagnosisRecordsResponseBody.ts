// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadDiagnosisRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download ID.
   * 
   * @example
   * 25494
   */
  downloadId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 845774AC-5D43-53A2-AAB8-C73828E68508
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

