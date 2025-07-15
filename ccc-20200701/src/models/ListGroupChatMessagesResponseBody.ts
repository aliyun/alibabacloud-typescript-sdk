// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupChatMessagesResponseBodyDataMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @example
   * false
   */
  recalled?: boolean;
  /**
   * @example
   * http://xxxxx.com
   */
  senderAvatarUrl?: string;
  /**
   * @example
   * 64bb4ececc34fc5ec1ca1153
   */
  senderId?: string;
  /**
   * @example
   * test-agent@test-instanceId
   */
  senderName?: string;
  /**
   * @example
   * CUSTOMER
   */
  senderType?: string;
  /**
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
  messages?: ListGroupChatMessagesResponseBodyDataMessages[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListGroupChatMessagesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

