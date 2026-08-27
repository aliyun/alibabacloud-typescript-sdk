// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* or InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error description. This is empty when the request succeeds.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The assistant message ID. Use this ID to call streamChatMessage to subscribe to the generation results.
   * 
   * @example
   * 3cf84d92-f273-4bb7-ab3c-52646d25ec30
   */
  messageId?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether a new session was created by this call.
   * 
   * @example
   * true
   */
  sessionCreated?: boolean;
  /**
   * @remarks
   * The session ID. For continued sessions, this matches the input value. For new sessions, this is a server-generated value.
   * 
   * @example
   * bd772dcc-afab-44ad-9fb8-bca716726201
   */
  sessionId?: string;
  /**
   * @remarks
   * The user message ID. Use this ID to establish a pairing relationship with the assistant message in this turn.
   * 
   * @example
   * 60756cc6-8c53-4d1f-8db8-b8c09b81a5cb
   */
  userMessageId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      messageId: 'messageId',
      requestId: 'requestId',
      sessionCreated: 'sessionCreated',
      sessionId: 'sessionId',
      userMessageId: 'userMessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      messageId: 'string',
      requestId: 'string',
      sessionCreated: 'boolean',
      sessionId: 'string',
      userMessageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

