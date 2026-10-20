// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopySDGResponseBodyDataResultFailedItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination edge zone.
   * 
   * @example
   * cn-hangzhou-xxx
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * region not found
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionId: 'DestinationRegionId',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionId: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySDGResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of failed edge zones.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The list of failed edge zone details.
   */
  failedItems?: CopySDGResponseBodyDataResultFailedItems[];
  /**
   * @remarks
   * The number of successful operations.
   * 
   * @example
   * 1
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      failedItems: 'FailedItems',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedItems: { 'type': 'array', 'itemType': CopySDGResponseBodyDataResultFailedItems },
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedItems)) {
      $dara.Model.validateArray(this.failedItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySDGResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response message. The value success indicates a successful request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The execution result of the synchronous request.
   */
  result?: CopySDGResponseBodyDataResult;
  /**
   * @remarks
   * Indicates whether all requests were successful. Valid values:
   * 
   * - **true**: All requests were successful.
   * - **false**: Some tasks failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      result: CopySDGResponseBodyDataResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned Data object.
   */
  data?: CopySDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * XXX-XXX-XXX
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
      data: CopySDGResponseBodyData,
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

