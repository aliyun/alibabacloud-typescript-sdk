// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The model connection ID.
   * 
   * @example
   * mc-1
   */
  connectionId?: string;
  /**
   * @remarks
   * Indicates whether the model debugging was successful.
   */
  debugSuccess?: boolean;
  /**
   * @remarks
   * The error code returned when debugging fails.
   * 
   * @example
   * UPSTREAM_MODEL_ERROR
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when debugging fails.
   * 
   * @example
   * The model endpoint rejected the debug request.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of input tokens consumed by this model debugging request.
   * 
   * @example
   * 3
   */
  inputTokens?: number;
  /**
   * @remarks
   * The time consumed by this model debugging call, in milliseconds.
   * 
   * @example
   * 12
   */
  latencyMs?: number;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model-1
   */
  modelId?: string;
  /**
   * @remarks
   * The number of output tokens consumed by this model debugging response.
   * 
   * @example
   * 2
   */
  outputTokens?: number;
  /**
   * @remarks
   * The text response returned by the model when debugging succeeds. This value is empty when debugging fails.
   * 
   * @example
   * ok
   */
  response?: string;
  /**
   * @remarks
   * The debug result status.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'connectionId',
      debugSuccess: 'debugSuccess',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      inputTokens: 'inputTokens',
      latencyMs: 'latencyMs',
      modelId: 'modelId',
      outputTokens: 'outputTokens',
      response: 'response',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'string',
      debugSuccess: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      inputTokens: 'number',
      latencyMs: 'number',
      modelId: 'string',
      outputTokens: 'number',
      response: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The model debugging result.
   */
  data?: DebugModelResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request processing result message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: DebugModelResponseBodyData,
      httpStatusCode: 'number',
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

