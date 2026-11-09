// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VisionFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task, which is used to query the processing result by calling QueryAsyncTaskResult.
   * 
   * @example
   * e4c48e88-3c34-91e3-ab8a-08484dc4d402
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

export class VisionFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. If the call is successful, "success" is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The submission result data of the asynchronous task, which includes the asynchronous task ID.
   */
  data?: VisionFlowResponseBodyData;
  /**
   * @remarks
   * The error message. If the call is successful, "Success" is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to identify a unique request.
   * 
   * @example
   * F3E65785-0180-1227-91B0-2F5F52F679FB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success, and a value of false indicates failure.
   * 
   * @example
   * true
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
      data: VisionFlowResponseBodyData,
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

