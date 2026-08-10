// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiAppScanStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs that failed.
   */
  failedAppIds?: string[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - SUCCESS: Succeeded.
   * 
   * - PARTIAL_SUCCESS: Partially succeeded.
   * 
   * - FAILED: Failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The list of application IDs that succeeded.
   */
  successAppIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failedAppIds: 'FailedAppIds',
      requestId: 'RequestId',
      status: 'Status',
      successAppIds: 'SuccessAppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedAppIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'string',
      successAppIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedAppIds)) {
      $dara.Model.validateArray(this.failedAppIds);
    }
    if(Array.isArray(this.successAppIds)) {
      $dara.Model.validateArray(this.successAppIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

