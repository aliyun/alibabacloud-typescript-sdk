// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageResponseBodyResultMessageList extends $dara.Model {
  /**
   * @remarks
   * The message body, in JSONString format.
   * 
   * @example
   * test
   */
  data?: string;
  /**
   * @remarks
   * The message group ID.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * qt***
   */
  messageId?: string;
  /**
   * @remarks
   * The message sender ID.
   * 
   * @example
   * yi***
   */
  senderId?: string;
  /**
   * @remarks
   * The message type.
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
   * Indicates whether there is a next page. Valid values:
   * 
   * - true: There is a next page.
   * 
   * - false: There is no next page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The message list.
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
   * The request ID.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
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

