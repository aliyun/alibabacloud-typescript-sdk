// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VirtualTryOnResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. It is used to query the task result later.
   * 
   * @example
   * task-xxxx-xxxx-xxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The usage details.
   * 
   * @example
   * {"ProcessingCount":1}
   */
  usageMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VirtualTryOnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned for successful calls.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result struct.
   */
  data?: VirtualTryOnResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned for successful calls.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. It is used to identify a unique request.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success, and a value of false indicates failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VirtualTryOnResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

