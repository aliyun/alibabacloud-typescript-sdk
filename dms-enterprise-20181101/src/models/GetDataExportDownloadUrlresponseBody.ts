// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataExportDownloadURLResponseBodyDownloadURLResult } from "./GetDataExportDownloadUrlresponseBodyDownloadUrlresult";


export class GetDataExportDownloadURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the download URL of the file that records the export results for the ticket.
   */
  downloadURLResult?: GetDataExportDownloadURLResponseBodyDownloadURLResult;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4BF24EA5-9013-4C85-AE68-6C23AF5E0097
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
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
      downloadURLResult: GetDataExportDownloadURLResponseBodyDownloadURLResult,
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

