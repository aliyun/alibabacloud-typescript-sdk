// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GeneralImageGenerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task used to query the result by calling QueryAsyncTaskResult.
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

export class GeneralImageGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code, such as success.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The asynchronous task submission result.
   * 
   * @example
   * []
   */
  data?: GeneralImageGenerationResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned for normal calls.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is used to identify a unique request.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success, and a value of false indicates failure.
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
      data: GeneralImageGenerationResponseBodyData,
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

