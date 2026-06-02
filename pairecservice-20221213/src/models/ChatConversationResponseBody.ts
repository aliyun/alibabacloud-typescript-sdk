// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatConversationResponseBody extends $dara.Model {
  answer?: string;
  /**
   * @example
   * e47cfae9-c0cc-42e1-91e2-e67cdb0e7b96
   */
  conversationId?: string;
  /**
   * @example
   * SERVER_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * connection failed
   */
  errorMessage?: string;
  /**
   * @example
   * message
   */
  event?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * chat-abcdefg
   */
  messageId?: string;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      conversationId: 'ConversationId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      gmtCreateTime: 'GmtCreateTime',
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      conversationId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      gmtCreateTime: 'string',
      messageId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

