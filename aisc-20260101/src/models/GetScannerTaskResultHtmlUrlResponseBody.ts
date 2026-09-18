// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScannerTaskResultHtmlUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The temporary download URL for the HTML result report. The URL is valid for 2 hours. After the URL expires, call this operation again to obtain a new URL. If the report has not been generated, this value is an empty string. The actual value is a signed temporary URL from object storage that includes signature parameters.
   * 
   * @example
   * https://example.com/result.task-abc123def4567.report.html
   */
  scannerTaskResultHtmlDownloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      scannerTaskResultHtmlDownloadUrl: 'ScannerTaskResultHtmlDownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scannerTaskResultHtmlDownloadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScannerTaskResultHtmlUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query result, which contains the temporary download URL for the HTML result report.
   */
  data?: GetScannerTaskResultHtmlUrlResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-B7AB7B5A9C8E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetScannerTaskResultHtmlUrlResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

