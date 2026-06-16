// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VisionFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID. Use this ID to query the processing result through QueryAsyncTaskResult.
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
   * The status code. The value "success" is returned for a successful call.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The submit status data of the asynchronous task, which contains the asynchronous task ID.
   */
  data?: VisionFlowResponseBodyData;
  /**
   * @remarks
   * The error message. The value "Success" is returned for a successful call.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which uniquely identifies the API call.
   * 
   * @example
   * F3E65785-0180-1227-91B0-2F5F52F679FB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values: true and false.
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

