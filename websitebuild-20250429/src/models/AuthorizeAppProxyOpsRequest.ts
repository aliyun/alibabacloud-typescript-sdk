// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeAppProxyOpsRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
   */
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

