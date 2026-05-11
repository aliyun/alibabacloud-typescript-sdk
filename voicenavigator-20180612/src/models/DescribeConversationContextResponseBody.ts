// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConversationContextResponseBody extends $dara.Model {
  /**
   * @example
   * {         "CallingNumber": "135815***",         "AdditionalContext": "",         "ConversationId": "361c8a53-0e29-42f3-8aa7-c7752d010399"     }
   */
  conversationContext?: string;
  /**
   * @example
   * b19af5ce5314ac08108d1b33fe20e15
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationContext: 'ConversationContext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationContext: 'string',
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

