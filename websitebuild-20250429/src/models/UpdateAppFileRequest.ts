// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppFileRequest extends $dara.Model {
  /**
   * @remarks
   * File content
   * 
   * @example
   * verify_46630893e2b5efde444c82b4e3707adb
   */
  content?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
   */
  conversationId?: string;
  /**
   * @remarks
   * File Path
   * 
   * @example
   * pt3/01/31/pengpeixin.png
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      conversationId: 'ConversationId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

