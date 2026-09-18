// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScannerTaskHitDataUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The temporary download URL for the attack hit data (hits.csv). The URL is valid for 2 hours. After the URL expires, call this operation again to obtain a new URL. If the task is an existing task or the agent execution mode does not produce hit data, this parameter is an empty string. The actual value is a signed temporary URL of Object Storage Service (OSS) that contains signature parameters.
   * 
   * @example
   * https://example.com/result.task-abc123def4567.hits.csv
   */
  scannerTaskHitDataDownloadUrl?: string;
  /**
   * @remarks
   * The scan task identifier echoed from the request.
   * 
   * @example
   * task-abc123def4567
   */
  scannerTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      scannerTaskHitDataDownloadUrl: 'ScannerTaskHitDataDownloadUrl',
      scannerTaskId: 'ScannerTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scannerTaskHitDataDownloadUrl: 'string',
      scannerTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScannerTaskHitDataUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query result, which contains the task identifier and the temporary download URL for the hit data.
   */
  data?: GetScannerTaskHitDataUrlResponseBodyData;
  /**
   * @remarks
   * The request ID. You can use this ID for troubleshooting and log tracing.
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
      data: GetScannerTaskHitDataUrlResponseBodyData,
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

