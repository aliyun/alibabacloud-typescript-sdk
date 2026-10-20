// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSDGsResponseBodyDataResultFailedItems extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * sdg not found
   */
  errMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * aic-xxxxx-0
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSDGsResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of failures.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The list of failure details.
   */
  failedItems?: RemoveSDGsResponseBodyDataResultFailedItems[];
  /**
   * @remarks
   * The number of successes.
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
      failedItems: { 'type': 'array', 'itemType': RemoveSDGsResponseBodyDataResultFailedItems },
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

export class RemoveSDGsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response message. The value success is returned for a successful request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The execution result of the synchronous request.
   */
  result?: RemoveSDGsResponseBodyDataResult;
  /**
   * @remarks
   * Indicates whether all requests succeeded. Valid values:
   * 
   * - **true**: All succeeded.
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
      result: RemoveSDGsResponseBodyDataResult,
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

export class RemoveSDGsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned Data object.
   */
  data?: RemoveSDGsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 903819D9-D18B-5C59-8DFD-20D56FD2DAE4
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
      data: RemoveSDGsResponseBodyData,
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

