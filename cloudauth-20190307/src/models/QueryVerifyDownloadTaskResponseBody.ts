// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyDownloadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * -
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the download task is complete. Valid values:
   * - **true**: Complete.
   * - **false**: Not complete.
   * 
   * @example
   * true
   */
  finish?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **1**: The file is being generated.
   * - **2**: The file is generated.
   * - **3**: The file failed to be generated.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The download URL.
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

