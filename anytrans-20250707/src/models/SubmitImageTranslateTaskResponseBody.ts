// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the translation task.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the image translation task.
   * 
   * @example
   * 2746f4be-cff2-465e-a2c6-12bff30ce0f9
   */
  taskId?: string;
  /**
   * @remarks
   * User-defined passthrough data returned unmodified in the response, which is useful for tracking purposes.
   * 
   * @example
   * {"traceId":"trace_123456"}
   */
  trackingData?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      taskId: 'taskId',
      trackingData: 'trackingData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'string',
      trackingData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageTranslateTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: SubmitImageTranslateTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, used for tracing API calls.
   * 
   * @example
   * 42FF90E5-5D40-5797-AAF6-8A4D837CCCD5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitImageTranslateTaskResponseBodyData,
      httpStatusCode: 'string',
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

