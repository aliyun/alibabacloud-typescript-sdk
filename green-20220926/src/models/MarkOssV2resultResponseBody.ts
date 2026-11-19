// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkOssV2ResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of request IDs for failed operations.
   */
  failureRequestIds?: string[];
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
   * The list of request IDs for successful operations.
   */
  successRequestIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failureRequestIds: 'FailureRequestIds',
      requestId: 'RequestId',
      successRequestIds: 'SuccessRequestIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureRequestIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successRequestIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failureRequestIds)) {
      $dara.Model.validateArray(this.failureRequestIds);
    }
    if(Array.isArray(this.successRequestIds)) {
      $dara.Model.validateArray(this.successRequestIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

