// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLongTextTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the translation task.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The ID of the long-text translation task.
   * 
   * @example
   * a8f25f25-0b36-4349-857f-e19a43f69e51
   */
  taskId?: string;
  /**
   * @remarks
   * A custom string passed from the request to the response unmodified. This is useful for tracking or correlating API calls.
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

export class SubmitLongTextTranslateTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code of the API call.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The object that contains the returned data.
   */
  data?: SubmitLongTextTranslateTaskResponseBodyData;
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
   * A message that corresponds to the code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID for the API request, used for tracing.
   * 
   * @example
   * C2D45266-3135-1A06-AD7F-69E782ED596F
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
      data: SubmitLongTextTranslateTaskResponseBodyData,
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

