// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateChatRequestMessagesContents extends $dara.Model {
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The value of the content.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatRequestMessages extends $dara.Model {
  /**
   * @remarks
   * The multimodal content of the message.
   */
  contents?: CreateChatRequestMessagesContents[];
  /**
   * @remarks
   * A unique identifier for the message.
   * 
   * @example
   * message_id02
   */
  messageId?: string;
  /**
   * @remarks
   * The role of the message.
   * 
   * @example
   * system
   */
  role?: string;
  /**
   * @remarks
   * The tool call list.
   */
  tools?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      contents: 'contents',
      messageId: 'messageId',
      role: 'role',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': CreateChatRequestMessagesContents },
      messageId: 'string',
      role: 'string',
      tools: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values: `create` (default), `reconnect`, and `stop`.
   * 
   * @example
   * create
   */
  action?: string;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The message list.
   */
  messages?: CreateChatRequestMessages[];
  /**
   * @remarks
   * The session thread ID.
   * 
   * @example
   * thread_id01
   */
  threadId?: string;
  /**
   * @remarks
   * The set of variables.
   * 
   * @example
   * {
   *   "workspace": "test",
   *   "region": "cn-beijing",
   *   "project": "test",
   *   "language": "zh",
   *   "timeZone": "Asia/Shanghai",
   *   "timeStamp": "1768893948",
   *   "startTime": 1768887171,
   *   "endTime": 1768890771,
   *   "skill": "trace"
   * }
   */
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      digitalEmployeeName: 'digitalEmployeeName',
      messages: 'messages',
      threadId: 'threadId',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      digitalEmployeeName: 'string',
      messages: { 'type': 'array', 'itemType': CreateChatRequestMessages },
      threadId: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

