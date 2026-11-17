// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendWorkItemMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. Other values indicate backend error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error description. This parameter is empty if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the assistant message. The reply is generated asynchronously in the background.
   * 
   * @example
   * 23456789-abcd-4ef0-8123-456789abcdef
   */
  messageId?: string;
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
   * The ID of the existing topic session.
   * 
   * @example
   * 01234567-89ab-4def-8123-456789abcdef
   */
  sessionId?: string;
  /**
   * @remarks
   * The ID of the user message.
   * 
   * @example
   * 12345678-9abc-4def-8123-456789abcdef
   */
  userMessageId?: string;
  /**
   * @remarks
   * The work item ID in the request. If only conversationId is specified, a compatible ID in the legacy-topic:<conversationId> format is returned.
   * 
   * @example
   * wi_0123456789abcdef0123456789abcdef
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      messageId: 'messageId',
      requestId: 'requestId',
      sessionId: 'sessionId',
      userMessageId: 'userMessageId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      messageId: 'string',
      requestId: 'string',
      sessionId: 'string',
      userMessageId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

