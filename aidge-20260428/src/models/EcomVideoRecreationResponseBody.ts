// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcomVideoRecreationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task, which is used to query the task result by calling QueryAsyncTaskResult.
   * 
   * @example
   * task_778fa8bd21804828a5d147050e30edac
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

export class EcomVideoRecreationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of `success` indicates success. If the call fails, the corresponding error code is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The submission result of the asynchronous task.
   */
  data?: EcomVideoRecreationResponseBodyData;
  /**
   * @remarks
   * The return message. If the call fails, an error description is returned.
   * 
   * @example
   * Task submitted
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to identify a unique call.
   * 
   * @example
   * 70CBEFDF-BB17-1EB3-8A21-569F3124738F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the submission is successful.
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
      data: EcomVideoRecreationResponseBodyData,
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

