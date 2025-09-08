// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDeepWritingResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * response.output_item.done
   */
  event?: string;
  /**
   * @example
   * c2e2e991-f96a-4fcc-9ff7-d0df46c6d232
   */
  sessionId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @example
   * b84d31a5-44b2-4a35-9c6d-878d459c93d0
   */
  taskId?: string;
  /**
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
   * @example
   * <TASK_DONE>
   */
  text?: string;
  /**
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
   * @example
   * ProjectManager
   */
  agent?: string;
  arguments?: string;
  content?: RunDeepWritingResponseBodyPayloadOutputItemContent[];
  /**
   * @example
   * 88f6ed9e85c4f9377378da23e6a370d1
   */
  id?: string;
  name?: string;
  result?: string;
  /**
   * @example
   * completed
   */
  status?: string;
  /**
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
   * @example
   * b2dc224b38694e0b668020159a7c5732
   */
  id?: string;
  /**
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
  item?: RunDeepWritingResponseBodyPayloadOutputItem;
  /**
   * @example
   * 1
   */
  outputIndex?: number;
  response?: RunDeepWritingResponseBodyPayloadOutputResponse;
  /**
   * @example
   * 1
   */
  sequenceNumber?: string;
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
   * @example
   * successful
   */
  code?: string;
  header?: RunDeepWritingResponseBodyHeader;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  payload?: RunDeepWritingResponseBodyPayload;
  /**
   * @example
   * 31AC01F1-88FB-5C4D-B6F5-E8BB136CD5A3
   */
  requestId?: string;
  /**
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

