// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoTagScanStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - `true`: The API call succeeded.
   * 
   * - `false`: The API call failed.
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
   * - `ACR_SCAN_SERVICE`: The ACR Trivy scan engine.
   * - `SAS_SCAN_SERVICE`: The cloud security scan engine.
   * 
   * @example
   * ACR_SCAN_SERVICE
   */
  scanService?: string;
  /**
   * @remarks
   * The scan status of the image version. Valid values:
   * 
   * - `SCANNING`: Scanning.
   * 
   * - `COMPLETE`: Completed.
   * 
   * - `FAILED`: Failed.
   * 
   * - `RETRYING`: Retrying.
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

