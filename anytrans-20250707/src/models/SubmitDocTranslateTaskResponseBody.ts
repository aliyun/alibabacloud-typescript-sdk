// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * ready
   */
  status?: string;
  /**
   * @remarks
   * The document translation task ID.
   * 
   * @example
   * d3a2397bc2c14ab4a2e40a4f5b46241b
   */
  taskId?: string;
  /**
   * @remarks
   * User-defined passthrough data. The translation service returns this data without processing it. This is useful for analytics tracking.
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

export class SubmitDocTranslateTaskResponseBody extends $dara.Model {
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
  data?: SubmitDocTranslateTaskResponseBodyData;
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
   * The request ID, used to trace the API call.
   * 
   * @example
   * 377A48D7-7CFA-53F9-8CA2-14FE3F2774B6
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
      data: SubmitDocTranslateTaskResponseBodyData,
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

