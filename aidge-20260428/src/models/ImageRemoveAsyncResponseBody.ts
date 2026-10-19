// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemoveAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID used to query the result of the asynchronous task.
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

export class ImageRemoveAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code, such as "success".
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The returned result struct.
   */
  data?: ImageRemoveAsyncResponseBodyData;
  /**
   * @remarks
   * The error message, such as "The parameters contain sensitive information. Please try another input."
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
   * Indicates whether the call was successful. Valid values: true (success) and false (failure).
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
      data: ImageRemoveAsyncResponseBodyData,
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

