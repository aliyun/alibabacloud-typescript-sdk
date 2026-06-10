// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppCodeRequest extends $dara.Model {
  /**
   * @remarks
   * Edit operation Content (JSON)
   * 
   * @example
   * verify_6554d8cc0de584306d16506dd119cbfc
   */
  content?: string;
  /**
   * @remarks
   * session ID
   * 
   * @example
   * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
   */
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

