// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatRequestMessagesContents extends $dara.Model {
  /**
   * @example
   * text
   */
  type?: string;
  /**
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
  contents?: CreateChatRequestMessagesContents[];
  /**
   * @example
   * message_id02
   */
  messageId?: string;
  /**
   * @example
   * system
   */
  role?: string;
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
   * @example
   * create
   */
  action?: string;
  /**
   * @example
   * test
   */
  digitalEmployeeName?: string;
  messages?: CreateChatRequestMessages[];
  /**
   * @example
   * thread_id01
   */
  threadId?: string;
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

