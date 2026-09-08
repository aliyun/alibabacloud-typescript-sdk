// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisitorChatMessagesResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * Message content
   * 
   * @example
   * {"variables":{},"text":"Hi，我是小云~ 很高兴遇见你！","contentType":"Text"}
   */
  content?: string;
  /**
   * @remarks
   * Call ID
   * 
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @remarks
   * Sender profile picture URL
   * 
   * @example
   * http://xxxxx.com/avatar.png
   */
  senderAvatarUrl?: string;
  /**
   * @remarks
   * Sender user ID
   * 
   * @example
   * fcd020fe-****-1a272a174a7d
   */
  senderId?: string;
  /**
   * @remarks
   * Sender name
   * 
   * @example
   * 访客1
   */
  senderName?: string;
  /**
   * @remarks
   * Sender type
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
   * UNIX timestamp
   * 
   * @example
   * 1696126980371
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      jobId: 'JobId',
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

export class ListVisitorChatMessagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Message list
   */
  messages?: ListVisitorChatMessagesResponseBodyDataMessages[];
  /**
   * @remarks
   * Token for the next page
   * 
   * @example
   * 1737193352340::7463707254.EAUNIT
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
      messages: { 'type': 'array', 'itemType': ListVisitorChatMessagesResponseBodyDataMessages },
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

export class ListVisitorChatMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data
   */
  data?: ListVisitorChatMessagesResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8707EB29-BAED-4302-B999-40BA61877437
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
      data: ListVisitorChatMessagesResponseBodyData,
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

