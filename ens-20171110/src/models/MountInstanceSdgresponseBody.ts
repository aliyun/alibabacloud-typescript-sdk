// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MountInstanceSDGResponseBodyDataResultFailedItems extends $dara.Model {
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

export class MountInstanceSDGResponseBodyDataResult extends $dara.Model {
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
  failedItems?: MountInstanceSDGResponseBodyDataResultFailedItems[];
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
      failedItems: { 'type': 'array', 'itemType': MountInstanceSDGResponseBodyDataResultFailedItems },
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

export class MountInstanceSDGResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response message. The value success is returned if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The execution result of the synchronous request.
   */
  result?: MountInstanceSDGResponseBodyDataResult;
  /**
   * @remarks
   * Indicates whether all requests are successful. Valid values:
   * 
   * - **true**: All successful.
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
      result: MountInstanceSDGResponseBodyDataResult,
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

export class MountInstanceSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned Data object.
   */
  data?: MountInstanceSDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
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
      data: MountInstanceSDGResponseBodyData,
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

