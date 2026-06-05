// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppFileContentRequest extends $dara.Model {
  /**
   * @example
   * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
   */
  conversationId?: string;
  /**
   * @example
   * index.html
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      filePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

