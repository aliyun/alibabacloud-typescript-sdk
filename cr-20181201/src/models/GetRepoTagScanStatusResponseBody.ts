// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoTagScanStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Specifies whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  /**
   * @remarks
   * The scan engine type. Valid values:
   * 
   * - `ACR_SCAN_SERVICE`: the ACR Trivy scan engine.
   * 
   * - `SAS_SCAN_SERVICE`: the Cloud Security scan engine.
   * 
   * @example
   * ACR_SCAN_SERVICE
   */
  scanService?: string;
  /**
   * @remarks
   * The scan status of the image. Valid values:
   * 
   * - `SCANNING`: The image is being scanned.
   * 
   * - `COMPLETE`: The scan is complete.
   * 
   * - `FAILED`: The scan failed.
   * 
   * - `RETRYING`: The scan is being retried.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      scanService: 'ScanService',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      scanService: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

