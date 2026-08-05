// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupMessagesResponseBodyMessageListSender extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who sent the message.
   * 
   * @example
   * uid2
   */
  userId?: string;
  /**
   * @remarks
   * The extended information of the user who sent the message.
   * 
   * @example
   * testusermeta2
   */
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveMessageGroupMessagesResponseBodyMessageList extends $dara.Model {
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * step2 helo, cc group
   */
  body?: string;
  /**
   * @remarks
   * The message identifier.
   * 
   * @example
   * c-1-1-0
   */
  msgTid?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * 2
   */
  msgType?: number;
  /**
   * @remarks
   * The message sender details.
   */
  sender?: ListLiveMessageGroupMessagesResponseBodyMessageListSender;
  /**
   * @remarks
   * The message sequence number.
   * 
   * @example
   * 1
   */
  seqNumber?: number;
  /**
   * @remarks
   * The time when the message was created, expressed as a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1697081134
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of messages.
   * 
   * @example
   * 1
   */
  totalMessages?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      msgTid: 'MsgTid',
      msgType: 'MsgType',
      sender: 'Sender',
      seqNumber: 'SeqNumber',
      timestamp: 'Timestamp',
      totalMessages: 'TotalMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      msgTid: 'string',
      msgType: 'number',
      sender: ListLiveMessageGroupMessagesResponseBodyMessageListSender,
      seqNumber: 'number',
      timestamp: 'number',
      totalMessages: 'number',
    };
  }

  validate() {
    if(this.sender && typeof (this.sender as any).validate === 'function') {
      (this.sender as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveMessageGroupMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group ID of the group to query.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * false
   */
  hasmore?: boolean;
  /**
   * @remarks
   * The message list.
   */
  messageList?: ListLiveMessageGroupMessagesResponseBodyMessageList[];
  /**
   * @remarks
   * The start position of the next page. The value is 0 if there is no next page.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1668FDC3-63D7-102F-B5D4-3D2F91D1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hasmore: 'Hasmore',
      messageList: 'MessageList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hasmore: 'boolean',
      messageList: { 'type': 'array', 'itemType': ListLiveMessageGroupMessagesResponseBodyMessageList },
      nextPageToken: 'number',
      requestId: 'string',
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

