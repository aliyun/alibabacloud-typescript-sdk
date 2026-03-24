// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatRequestMessagesContents extends $dara.Model {
  /**
   * @remarks
   * Content type
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Value of the content
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
   * Text or multimodal array
   */
  contents?: CreateChatRequestMessagesContents[];
  /**
   * @remarks
   * Unique identifier for the message
   * 
   * @example
   * message_id02
   */
  messageId?: string;
  /**
   * @remarks
   * Role of the message
   * 
   * @example
   * system
   */
  role?: string;
  /**
   * @remarks
   * Tools calls list
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
   * Action type: create (default), reconnect, or stop
   * 
   * @example
   * create
   */
  action?: string;
  /**
   * @remarks
   * Digital employee name
   * 
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * Messages list
   */
  messages?: CreateChatRequestMessages[];
  /**
   * @remarks
   * Session thread ID
   * 
   * @example
   * thread_id01
   */
  threadId?: string;
  /**
   * @remarks
   * Variables list
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

