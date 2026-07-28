// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChatMessageResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The ID of the data API operation that is called.
   * 
   * @example
   * call_e0e9ee423c7e4ba88d058fd6
   */
  callId?: string;
  /**
   * @remarks
   * The name of the data API operation that is called.
   * 
   * @example
   * describeScalingRecommendation
   */
  name?: string;
  /**
   * @remarks
   * The output of the data API operation that is called.
   * 
   * @example
   * [{"type": "text", "text": "Skill not found: instance_health_inspection"}]
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      name: 'Name',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      name: 'string',
      output: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChatMessageResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The result set.
   */
  data?: DescribeChatMessageResponseBodyContentData;
  /**
   * @remarks
   * Indicates whether the content is incremental.
   * 
   * @example
   * false
   */
  delta?: boolean;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to get sse streaming, please try again later.
   */
  error?: string;
  /**
   * @remarks
   * The index.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * msg_294c8b98-dc64-4c82-9417-e03522a631f6
   */
  msgId?: string;
  /**
   * @remarks
   * The message object.
   * 
   * @example
   * content
   */
  object?: string;
  /**
   * @remarks
   * The sequence number of the message.
   * 
   * @example
   * 1
   */
  sequenceNumber?: number;
  /**
   * @remarks
   * The message status.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * 3 MB\\n-
   */
  text?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      delta: 'Delta',
      error: 'Error',
      index: 'Index',
      msgId: 'MsgId',
      object: 'Object',
      sequenceNumber: 'SequenceNumber',
      status: 'Status',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeChatMessageResponseBodyContentData,
      delta: 'boolean',
      error: 'string',
      index: 'number',
      msgId: 'string',
      object: 'string',
      sequenceNumber: 'number',
      status: 'string',
      text: 'string',
      type: 'string',
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

export class DescribeChatMessageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The parameters of the data API operation that is called.
   * 
   * @example
   * {"instanceName": "amv-bp1b9y9xhvpzm9p0", "pageNumber": 1, "pageSize": 10}
   */
  arguments?: string;
  /**
   * @remarks
   * The ID of the data API operation that is called.
   * 
   * @example
   * call_1891f1689bc44ab292aadff3
   */
  callId?: string;
  /**
   * @remarks
   * The name of the data API operation that is called.
   * 
   * @example
   * describeScalingRecommendation
   */
  name?: string;
  /**
   * @remarks
   * The output of the data API operation that is called.
   * 
   * @example
   * [{"type": "text", "text": "Skill not found: instance_health_inspection"}]
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      callId: 'CallId',
      name: 'Name',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      callId: 'string',
      name: 'string',
      output: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChatMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2026-03-18T02:01:56Z
   */
  completedAt?: string;
  /**
   * @remarks
   * The task content.
   */
  content?: DescribeChatMessageResponseBodyContent[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-18T02:01:56Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The result set.
   */
  data?: DescribeChatMessageResponseBodyData;
  /**
   * @remarks
   * Indicates whether the content is incremental.
   * 
   * @example
   * false
   */
  delta?: boolean;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to get sse streaming, please try again later.
   */
  error?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 97616
   */
  id?: string;
  /**
   * @remarks
   * The index.
   * 
   * @example
   * 2
   */
  index?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * msg_294c8b98-dc64-4c82-9417-e03522a631f6
   */
  msgId?: string;
  /**
   * @remarks
   * The message object.
   * 
   * @example
   * content
   */
  object?: string;
  /**
   * @remarks
   * The content output.
   * 
   * @example
   * [{"type": "text", "text": "Skill not found: instance_health_inspection"}]
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B47EED99-BFA5-529D-8D85-A6642421D390
   */
  requestId?: string;
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * assistant
   */
  role?: string;
  /**
   * @remarks
   * The sequence number of the message.
   * 
   * @example
   * 1
   */
  sequenceNumber?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 593b51eef93b443fb2ba2a6dc68b737b
   */
  sessionId?: string;
  /**
   * @remarks
   * The message status.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * ：-636 KB
   */
  text?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completedAt: 'CompletedAt',
      content: 'Content',
      createdAt: 'CreatedAt',
      data: 'Data',
      delta: 'Delta',
      error: 'Error',
      id: 'Id',
      index: 'Index',
      message: 'Message',
      msgId: 'MsgId',
      object: 'Object',
      output: 'Output',
      requestId: 'RequestId',
      role: 'Role',
      sequenceNumber: 'SequenceNumber',
      sessionId: 'SessionId',
      status: 'Status',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedAt: 'string',
      content: { 'type': 'array', 'itemType': DescribeChatMessageResponseBodyContent },
      createdAt: 'string',
      data: DescribeChatMessageResponseBodyData,
      delta: 'boolean',
      error: 'string',
      id: 'string',
      index: 'number',
      message: 'string',
      msgId: 'string',
      object: 'string',
      output: 'string',
      requestId: 'string',
      role: 'string',
      sequenceNumber: 'number',
      sessionId: 'string',
      status: 'string',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

