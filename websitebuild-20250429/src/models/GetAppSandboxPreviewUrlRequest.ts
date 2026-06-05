// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSandboxPreviewUrlRequest extends $dara.Model {
  /**
   * @example
   * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
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

