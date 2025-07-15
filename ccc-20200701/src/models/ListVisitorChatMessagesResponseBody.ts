// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisitorChatMessagesResponseBodyDataMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @example
   * http://xxxxx.com/avatar.png
   */
  senderAvatarUrl?: string;
  /**
   * @example
   * fcd020fe-****-1a272a174a7d
   */
  senderId?: string;
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
  messages?: ListVisitorChatMessagesResponseBodyDataMessages[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListVisitorChatMessagesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
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

