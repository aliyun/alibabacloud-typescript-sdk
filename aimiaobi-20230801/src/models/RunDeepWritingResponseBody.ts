// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDeepWritingResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误消息
   */
  errorMessage?: string;
  /**
   * @remarks
   * The Server-Sent Event (SSE).
   * 
   * @example
   * response.output_item.done
   */
  event?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * c2e2e991-f96a-4fcc-9ff7-d0df46c6d232
   */
  sessionId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * b84d31a5-44b2-4a35-9c6d-878d459c93d0
   */
  taskId?: string;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * FAB10D42-F081-557B-8DCB-D6FB7AAF100B
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

export class RunDeepWritingResponseBodyPayloadOutputItemContent extends $dara.Model {
  /**
   * @remarks
   * The text content that is output when the item type is \\`message\\`.
   * 
   * @example
   * <TASK_DONE>
   */
  text?: string;
  /**
   * @remarks
   * When the item type is \\`message\\`, the value of this field is \\`output_text\\`.
   * 
   * @example
   * output_text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDeepWritingResponseBodyPayloadOutputItem extends $dara.Model {
  /**
   * @remarks
   * The name of the agent that generated this item.
   * 
   * @example
   * ProjectManager
   */
  agent?: string;
  /**
   * @remarks
   * Parameter
   * 
   * @example
   * item类型为function_call时，此字段有值，为调用函数的入参
   */
  arguments?: string;
  /**
   * @remarks
   * This field has a value when the item type is \\`message\\`. The value is a list of output content.
   */
  content?: RunDeepWritingResponseBodyPayloadOutputItemContent[];
  /**
   * @remarks
   * The unique ID of the item.
   * 
   * @example
   * 88f6ed9e85c4f9377378da23e6a370d1
   */
  id?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * item类型为function_call时，此字段有值，为调用的函数名字
   */
  name?: string;
  /**
   * @remarks
   * The item\\"s result.
   * 
   * @example
   * item类型为function_call时，此字段有值，为调用的函数的输出
   */
  result?: string;
  /**
   * @remarks
   * The status of the item.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The type of the item.
   * 
   * @example
   * function_call
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      arguments: 'Arguments',
      content: 'Content',
      id: 'Id',
      name: 'Name',
      result: 'Result',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      arguments: 'string',
      content: { 'type': 'array', 'itemType': RunDeepWritingResponseBodyPayloadOutputItemContent },
      id: 'string',
      name: 'string',
      result: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDeepWritingResponseBodyPayloadOutputResponse extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * @example
   * b2dc224b38694e0b668020159a7c5732
   */
  id?: string;
  /**
   * @remarks
   * The execution status of the task.
   * 
   * @example
   * in_progress
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class RunDeepWritingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The new output item for this event.
   */
  item?: RunDeepWritingResponseBodyPayloadOutputItem;
  /**
   * @remarks
   * The ordinal number of the new output item in this event.
   * 
   * @example
   * 1
   */
  outputIndex?: number;
  /**
   * @remarks
   * The response body.
   */
  response?: RunDeepWritingResponseBodyPayloadOutputResponse;
  /**
   * @remarks
   * The ordinal number of the streaming event.
   * 
   * @example
   * 1
   */
  sequenceNumber?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * 同上级Event
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      outputIndex: 'OutputIndex',
      response: 'Response',
      sequenceNumber: 'SequenceNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: RunDeepWritingResponseBodyPayloadOutputItem,
      outputIndex: 'number',
      response: RunDeepWritingResponseBodyPayloadOutputResponse,
      sequenceNumber: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.item && typeof (this.item as any).validate === 'function') {
      (this.item as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDeepWritingResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The output.
   */
  output?: RunDeepWritingResponseBodyPayloadOutput;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDeepWritingResponseBodyPayloadOutput,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDeepWritingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The response header.
   */
  header?: RunDeepWritingResponseBodyHeader;
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
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The response body.
   */
  payload?: RunDeepWritingResponseBodyPayload;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 31AC01F1-88FB-5C4D-B6F5-E8BB136CD5A3
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
      header: RunDeepWritingResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunDeepWritingResponseBodyPayload,
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

