// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugModelResponseBodyData extends $dara.Model {
  /**
   * @example
   * mc-1
   */
  connectionId?: string;
  debugSuccess?: boolean;
  /**
   * @remarks
   * 调试失败时的错误码。取值：MODEL_CONNECTION_NOT_READY（模型连接尚未发布就绪）、MODEL_CONNECTION_TEST_FAILED（平台调用网关失败）、UPSTREAM_MODEL_NOT_FOUND（模型服务商侧不存在该模型）、UPSTREAM_UNAUTHORIZED（模型服务商拒绝所配置的凭证）、UPSTREAM_RATE_LIMITED（模型服务商限流）、UPSTREAM_SERVER_ERROR（模型服务商服务端错误）、UPSTREAM_HTTP_ERROR（模型服务商返回其它非成功状态）、UPSTREAM_EMPTY_RESPONSE（模型服务商返回空响应）、UPSTREAM_INVALID_RESPONSE（模型服务商响应格式非法）、UPSTREAM_MODEL_ERROR（模型服务商拒绝本次请求）、MODEL_RESPONSE_INVALID（响应解析失败）。
   * 
   * @example
   * UPSTREAM_MODEL_ERROR
   */
  errorCode?: string;
  /**
   * @remarks
   * 调试失败时的错误描述，为固定脱敏文案，不透传模型服务商的原始错误详情。
   * 
   * @example
   * The model endpoint rejected the debug request.
   */
  errorMessage?: string;
  /**
   * @example
   * 3
   */
  inputTokens?: number;
  /**
   * @example
   * 12
   */
  latencyMs?: number;
  /**
   * @example
   * model-1
   */
  modelId?: string;
  /**
   * @example
   * 2
   */
  outputTokens?: number;
  /**
   * @example
   * ok
   */
  response?: string;
  /**
   * @remarks
   * 调试结果状态。取值：NORMAL（正常）、ABNORMAL（异常）。
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
   * @example
   * SUCCESS
   */
  code?: string;
  data?: DebugModelResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * request-1
   */
  requestId?: string;
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

