// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstanceSDGResponseBodyDataResultFailedItems extends $dara.Model {
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

export class RemoveInstanceSDGResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of failed tasks.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The list of failure details.
   */
  failedItems?: RemoveInstanceSDGResponseBodyDataResultFailedItems[];
  /**
   * @remarks
   * The number of successful tasks.
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
      failedItems: { 'type': 'array', 'itemType': RemoveInstanceSDGResponseBodyDataResultFailedItems },
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

export class RemoveInstanceSDGResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response message. A value of success indicates a successful request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The execution result of the synchronous request.
   */
  result?: RemoveInstanceSDGResponseBodyDataResult;
  /**
   * @remarks
   * Indicates whether all requests are successful. Valid values:
   * 
   * - **true**: All requests are successful.
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
      result: RemoveInstanceSDGResponseBodyDataResult,
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

export class RemoveInstanceSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business code returned. A value of 0 indicates success.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned Data object.
   */
  data?: RemoveInstanceSDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 125B04C7-3D0D-4245-AF96-14E3758E3F06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: RemoveInstanceSDGResponseBodyData,
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

