// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatConversationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reply content.
   * 
   * @example
   * FeatureDB近7天读写量为xxx
   */
  answer?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * ""
   */
  callId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * e47cfae9-c0cc-42e1-91e2-e67cdb0e7b96
   */
  conversationId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SERVER_ERROR
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connection failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The event.
   * 
   * @example
   * message
   */
  event?: string;
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * ""
   */
  func?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * chat-abcdefg
   */
  messageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * ""
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      callId: 'CallId',
      conversationId: 'ConversationId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      func: 'Func',
      gmtCreateTime: 'GmtCreateTime',
      messageId: 'MessageId',
      requestId: 'RequestId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      callId: 'string',
      conversationId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      func: 'string',
      gmtCreateTime: 'string',
      messageId: 'string',
      requestId: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

