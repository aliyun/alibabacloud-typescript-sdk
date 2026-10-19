// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemovalProAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The node ID used to query the asynchronous task result.
   * 
   * @example
   * TID_550e8400-e29b-41d4-a716-446655440000
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageRemovalProAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned when the call is successful.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The submission result of the Intelligent Erasure Pro asynchronous task.
   */
  data?: ImageRemovalProAsyncResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned when the call is successful. Example: "The parameters contain sensitive information. Try other inputs."
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to identify a unique request.
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
      data: ImageRemovalProAsyncResponseBodyData,
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

