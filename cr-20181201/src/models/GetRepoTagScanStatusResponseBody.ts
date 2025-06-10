// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoTagScanStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
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
   * The type of the scanning engine.
   * 
   * *   `ACR_SCAN_SERVICE`: Trivy scan engine provided by Container Registry
   * *   `SAS_SCAN_SERVICE`: Security Center scan engine
   * 
   * @example
   * ACR_SCAN_SERVICE
   */
  scanService?: string;
  /**
   * @remarks
   * The scanning status of the image tag. Valid values:
   * 
   * *   `SCANNING`: The image tag is being scanned.
   * *   `COMPLETE`: The scanning of the image tag is complete.
   * *   `FAILED`: The image tag failed to be scanned.
   * *   `RETRYING`: The system is retrying to scan the image tag.
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

