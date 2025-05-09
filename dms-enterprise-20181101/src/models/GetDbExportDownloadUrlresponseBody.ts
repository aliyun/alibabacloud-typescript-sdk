// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDbExportDownloadURLResponseBodyDownloadURLResult } from "./GetDbExportDownloadUrlresponseBodyDownloadUrlresult";


export class GetDbExportDownloadURLResponseBody extends $dara.Model {
  downloadURLResult?: GetDbExportDownloadURLResponseBodyDownloadURLResult;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      downloadURLResult: 'DownloadURLResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadURLResult: GetDbExportDownloadURLResponseBodyDownloadURLResult,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.downloadURLResult && typeof (this.downloadURLResult as any).validate === 'function') {
      (this.downloadURLResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

