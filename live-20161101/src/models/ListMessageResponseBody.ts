// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageResponseBodyResultMessageList extends $dara.Model {
  /**
   * @remarks
   * The message body. The value is a JSON string.
   * 
   * @example
   * test
   */
  data?: string;
  /**
   * @remarks
   * The ID of the message group.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * qt***
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the user who sent the message.
   * 
   * @example
   * yi***
   */
  senderId?: string;
  /**
   * @remarks
   * The type of the message.
   * 
   * @example
   * 10002
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      groupId: 'GroupId',
      messageId: 'MessageId',
      senderId: 'SenderId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      groupId: 'string',
      messageId: 'string',
      senderId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current page is followed by another page. Valid values:
   * 
   * *   true: The current page is followed by another page.
   * *   false: The current page is not followed by another page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * Details about the messages.
   */
  messageList?: ListMessageResponseBodyResultMessageList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      messageList: 'MessageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      messageList: { 'type': 'array', 'itemType': ListMessageResponseBodyResultMessageList },
    };
  }

  validate() {
    if(Array.isArray(this.messageList)) {
      $dara.Model.validateArray(this.messageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListMessageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListMessageResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

