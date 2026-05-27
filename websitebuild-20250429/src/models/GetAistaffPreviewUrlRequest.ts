// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIStaffPreviewUrlRequest extends $dara.Model {
  /**
   * @example
   * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
   */
  conversationId?: string;
  /**
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

