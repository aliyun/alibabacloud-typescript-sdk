// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConversationLockStatusRequest extends $dara.Model {
  /**
   * @remarks
   * session ID
   * 
   * @example
   * 5b7105a2-2999-430b-ba23-ba09149d5434
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

