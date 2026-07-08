// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHtmlTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The translation task status.
   * 
   * @example
   * in_process
   */
  status?: string;
  /**
   * @remarks
   * The HTML translation task ID.
   * 
   * @example
   * 2746f4be-cff2-465e-a2c6-12bff30ce0f9
   */
  taskId?: string;
  /**
   * @remarks
   * User-defined tracking data that the service returns as-is. Use this parameter for data tracking.
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

export class SubmitHtmlTranslateTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: SubmitHtmlTranslateTaskResponseBodyData;
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
   * The request ID. Use it to trace the API call.
   * 
   * @example
   * 72E4FDA1-5474-5DC1-8DFF-968BEEA65C49
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
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
      data: SubmitHtmlTranslateTaskResponseBodyData,
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

