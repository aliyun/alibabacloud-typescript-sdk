// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChatMessageResponseBodyContentData extends $dara.Model {
  /**
   * @example
   * call_e0e9ee423c7e4ba88d058fd6
   */
  callId?: string;
  /**
   * @example
   * describeScalingRecommendation
   */
  name?: string;
  /**
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
  data?: DescribeChatMessageResponseBodyContentData;
  /**
   * @example
   * false
   */
  delta?: boolean;
  /**
   * @example
   * Failed to get sse streaming, please try again later.
   */
  error?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * msg_294c8b98-dc64-4c82-9417-e03522a631f6
   */
  msgId?: string;
  /**
   * @example
   * content
   */
  object?: string;
  /**
   * @example
   * 1
   */
  sequenceNumber?: number;
  /**
   * @example
   * completed
   */
  status?: string;
  /**
   * @example
   * 3 MB\\n-
   */
  text?: string;
  /**
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
   * @example
   * {"instanceName": "amv-bp1b9y9xhvpzm9p0", "pageNumber": 1, "pageSize": 10}
   */
  arguments?: string;
  /**
   * @example
   * call_1891f1689bc44ab292aadff3
   */
  callId?: string;
  /**
   * @example
   * describeScalingRecommendation
   */
  name?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 2026-03-18T02:01:56Z
   */
  completedAt?: string;
  content?: DescribeChatMessageResponseBodyContent[];
  /**
   * @example
   * 2026-03-18T02:01:56Z
   */
  createdAt?: string;
  data?: DescribeChatMessageResponseBodyData;
  /**
   * @example
   * false
   */
  delta?: boolean;
  /**
   * @example
   * Failed to get sse streaming, please try again later.
   */
  error?: string;
  /**
   * @example
   * 97616
   */
  id?: string;
  /**
   * @example
   * 2
   */
  index?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * msg_294c8b98-dc64-4c82-9417-e03522a631f6
   */
  msgId?: string;
  /**
   * @example
   * content
   */
  object?: string;
  /**
   * @example
   * [{"type": "text", "text": "Skill not found: instance_health_inspection"}]
   */
  output?: string;
  /**
   * @example
   * B47EED99-BFA5-529D-8D85-A6642421D390
   */
  requestId?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  /**
   * @example
   * 1
   */
  sequenceNumber?: number;
  /**
   * @example
   * 593b51eef93b443fb2ba2a6dc68b737b
   */
  sessionId?: string;
  /**
   * @example
   * created
   */
  status?: string;
  /**
   * @example
   * ：-636 KB
   */
  text?: string;
  /**
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

