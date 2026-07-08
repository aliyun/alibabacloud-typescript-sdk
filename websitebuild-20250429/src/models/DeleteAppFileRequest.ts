// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppFileRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
   */
  conversationId?: string;
  /**
   * @remarks
   * The file path. The path is restricted to the ./public/ directory.
   * 
   * @example
   * pt3/01/31/pengpeixin.png
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

