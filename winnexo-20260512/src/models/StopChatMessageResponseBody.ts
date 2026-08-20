// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopChatMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The reason for stopping.
   * 
   * @example
   * string_value
   */
  finishReason?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * exampleMessageId
   */
  messageId?: string;
  /**
   * @remarks
   * The partially generated content.
   * 
   * @example
   * string_value
   */
  partialContent?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The final status of the message.
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      finishReason: 'finishReason',
      message: 'message',
      messageId: 'messageId',
      partialContent: 'partialContent',
      requestId: 'requestId',
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      finishReason: 'string',
      message: 'string',
      messageId: 'string',
      partialContent: 'string',
      requestId: 'string',
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

