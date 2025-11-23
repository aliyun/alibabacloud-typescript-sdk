// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDbExportDownloadURLResponseBodyDownloadURLResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether export results are available for download. Valid values:
   * 
   * *   **true**: Export results are available for download.
   * *   **false**: No export results are available for download.
   * 
   * @example
   * true
   */
  hasResult?: boolean;
  /**
   * @remarks
   * The message that indicates an exception.
   * 
   * @example
   * tip message
   */
  tipMessage?: string;
  /**
   * @remarks
   * The download URL of the exported file.
   * 
   * @example
   * https://dms-idb-hangzhou.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      hasResult: 'HasResult',
      tipMessage: 'TipMessage',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasResult: 'boolean',
      tipMessage: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbExportDownloadURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of the exported file.
   */
  downloadURLResult?: GetDbExportDownloadURLResponseBodyDownloadURLResult;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request succeeded.
   * *   false: The request failed.
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

