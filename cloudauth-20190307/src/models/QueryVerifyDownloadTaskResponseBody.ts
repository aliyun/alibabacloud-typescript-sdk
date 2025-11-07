// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyDownloadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * -
   */
  errorCode?: string;
  /**
   * @remarks
   * Whether the download task is completed:
   * - **true**: Completed
   * - **false**: Not completed
   * 
   * @example
   * true
   */
  finish?: boolean;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  /**
   * @remarks
   * Task status:
   * - **1**: File generation in progress
   * - **2**: File generation completed
   * - **3**: File generation failed
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Download URL.
   * 
   * @example
   * http://xxx/xxx.csv
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      finish: 'Finish',
      requestId: 'RequestId',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      finish: 'boolean',
      requestId: 'string',
      status: 'number',
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

