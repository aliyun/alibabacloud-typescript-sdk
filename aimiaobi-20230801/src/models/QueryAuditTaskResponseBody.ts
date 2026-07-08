// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuditTaskResponseBodyDataResponseHeader extends $dara.Model {
  /**
   * @remarks
   * error code
   * 
   * @example
   * DataNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 数据不存在
   */
  errorMessage?: string;
  /**
   * @remarks
   * Event
   * 
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @remarks
   * Unique conversation ID.
   * 
   * @example
   * 49eab783-9172-487a-b9df-c6372c47392c
   */
  sessionId?: string;
  /**
   * @remarks
   * Unique multi-turn conversation ID.
   * 
   * @example
   * 896b733535274d28b1a61c78bc145217
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
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

export class QueryAuditTaskResponseBodyDataResponsePayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Final response result (JSON array structure)
   * 
   * @example
   * x\\"x\\"x
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditTaskResponseBodyDataResponsePayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Input tokens.
   * 
   * @example
   * 200
   */
  inputTokens?: number;
  /**
   * @remarks
   * Output tokens.
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total tokens.
   * 
   * @example
   * 300
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

export class QueryAuditTaskResponseBodyDataResponsePayload extends $dara.Model {
  /**
   * @remarks
   * response body
   */
  output?: QueryAuditTaskResponseBodyDataResponsePayloadOutput;
  /**
   * @remarks
   * usage
   */
  usage?: QueryAuditTaskResponseBodyDataResponsePayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: QueryAuditTaskResponseBodyDataResponsePayloadOutput,
      usage: QueryAuditTaskResponseBodyDataResponsePayloadUsage,
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

export class QueryAuditTaskResponseBodyDataResponse extends $dara.Model {
  /**
   * @remarks
   * Audit response header
   */
  header?: QueryAuditTaskResponseBodyDataResponseHeader;
  /**
   * @remarks
   * response body
   */
  payload?: QueryAuditTaskResponseBodyDataResponsePayload;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: QueryAuditTaskResponseBodyDataResponseHeader,
      payload: QueryAuditTaskResponseBodyDataResponsePayload,
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

export class QueryAuditTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Audit time.
   * 
   * @example
   * 2025-05-13 12:12:12
   */
  auditTime?: string;
  /**
   * @remarks
   * Original text at the time of audit.
   * 
   * @example
   * 审核时的原文
   */
  content?: string;
  /**
   * @remarks
   * Formatted content at the time of audit.
   * 
   * @example
   * 格式化的审核时的内容
   */
  htmlContent?: string;
  /**
   * @remarks
   * Audit results.
   */
  response?: QueryAuditTaskResponseBodyDataResponse;
  /**
   * @remarks
   * Task execution status: PENDING: pending, RUNNING: running, SUCCESSED: successful, SUSPENDED: paused, FAILED: failed, CANCELLED: canceled
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Task execution status: 0: pending, 1: running, 2: successful, 3: paused, 4: failed, 6: canceled
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @remarks
   * Content title
   * 
   * @example
   * 内容标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      auditTime: 'AuditTime',
      content: 'Content',
      htmlContent: 'HtmlContent',
      response: 'Response',
      status: 'Status',
      taskStatus: 'TaskStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditTime: 'string',
      content: 'string',
      htmlContent: 'string',
      response: QueryAuditTaskResponseBodyDataResponse,
      status: 'string',
      taskStatus: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * error code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Asynchronous task object
   */
  data?: QueryAuditTaskResponseBodyData;
  /**
   * @remarks
   * HTTP error code
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAuditTaskResponseBodyData,
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

