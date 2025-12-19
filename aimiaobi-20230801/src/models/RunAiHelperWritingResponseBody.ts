// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAiHelperWritingResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * 请求错误时的错误码
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * 请求错误时的详细错误信息
   * 
   * @example
   * 参数错误
   */
  errorMessage?: string;
  /**
   * @remarks
   * SSE事件类型，如：result-generated(生成结果)、task-finished(任务完成)
   * 
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @remarks
   * 当前写作会话的唯一标识
   * 
   * @example
   * session-xxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * HTTP状态码
   * 
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @remarks
   * 写作任务的唯一标识
   * 
   * @example
   * task-xxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * 用于问题排查的链路追踪标识
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      statusCode: 'number',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAiHelperWritingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * AI生成的文章内容，流式返回时为增量文本
   * 
   * @example
   * 人工智能正在深刻改变我们的生活...
   */
  text?: string;
  /**
   * @remarks
   * 返回的写作参数键值对
   * 
   * @example
   * {"wordCount": "1000"}
   */
  writingParams?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      writingParams: 'WritingParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      writingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.writingParams) {
      $dara.Model.validateMap(this.writingParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAiHelperWritingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * 输入内容消耗的Token数量
   * 
   * @example
   * 256
   */
  inputTokens?: number;
  /**
   * @remarks
   * 生成内容消耗的Token数量
   * 
   * @example
   * 1024
   */
  outputTokens?: number;
  /**
   * @remarks
   * 输入和输出Token的总和
   * 
   * @example
   * 1280
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAiHelperWritingResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * AI生成的写作内容
   */
  output?: RunAiHelperWritingResponseBodyPayloadOutput;
  /**
   * @remarks
   * 本次请求的Token消耗统计
   */
  usage?: RunAiHelperWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunAiHelperWritingResponseBodyPayloadOutput,
      usage: RunAiHelperWritingResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAiHelperWritingResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务处理结果状态码
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * 流式响应的头部信息，包含事件类型、状态码等元数据
   */
  header?: RunAiHelperWritingResponseBodyHeader;
  /**
   * @remarks
   * HTTP响应状态码
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * 业务处理结果描述信息
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 包含写作输出内容和Token使用量统计
   */
  payload?: RunAiHelperWritingResponseBodyPayload;
  /**
   * @remarks
   * 本次API请求的唯一标识
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否处理成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      header: 'Header',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      payload: 'Payload',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      header: RunAiHelperWritingResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunAiHelperWritingResponseBodyPayload,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

