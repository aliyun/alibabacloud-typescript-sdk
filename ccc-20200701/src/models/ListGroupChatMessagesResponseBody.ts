// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupChatMessagesResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * Message content.
   * 
   * @example
   * {"variables":{},"text":"<p>好的，不客气</p>","contentType":"Text","subContentType":"richtext"}
   */
  content?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @remarks
   * Indicates whether the message was revoked.
   * 
   * @example
   * false
   */
  recalled?: boolean;
  /**
   * @remarks
   * Sender profile picture URL.
   * 
   * @example
   * http://xxxxx.com
   */
  senderAvatarUrl?: string;
  /**
   * @remarks
   * User ID of the message sender.
   * 
   * @example
   * 64bb4ececc34fc5ec1ca1153
   */
  senderId?: string;
  /**
   * @remarks
   * Sender name.
   * 
   * @example
   * test-agent@test-instanceId
   */
  senderName?: string;
  /**
   * @remarks
   * Sender type.
   * 
   * Valid values:
   * 
   * - **ADMIN**: system
   * 
   * - **CUSTOMER**: visitor
   * 
   * - **AGENT**: agent
   * 
   * @example
   * CUSTOMER
   */
  senderType?: string;
  /**
   * @remarks
   * Message timestamp, in Unix timestamp format, measured in milliseconds.
   * 
   * @example
   * 1696126980371
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      jobId: 'JobId',
      recalled: 'Recalled',
      senderAvatarUrl: 'SenderAvatarUrl',
      senderId: 'SenderId',
      senderName: 'SenderName',
      senderType: 'SenderType',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      jobId: 'string',
      recalled: 'boolean',
      senderAvatarUrl: 'string',
      senderId: 'string',
      senderName: 'string',
      senderType: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupChatMessagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Message list.
   */
  messages?: ListGroupChatMessagesResponseBodyDataMessages[];
  /**
   * @remarks
   * Token for the next page.
   * 
   * @example
   * 54d1a616d95a4a01ba58967a9115b649
   */
  nextPageToken?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      nextPageToken: 'NextPageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ListGroupChatMessagesResponseBodyDataMessages },
      nextPageToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupChatMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListGroupChatMessagesResponseBodyData;
  /**
   * @remarks
   * HTTP status code returned in the response. A value of 200 indicates a successful request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 2263B273-AC1B-44EB-BA98-87F2322C6780
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGroupChatMessagesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

