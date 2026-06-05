// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppInstanceFileRequest extends $dara.Model {
  /**
   * @example
   * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
   */
  conversationId?: string;
  /**
   * @example
   * sdms-test/static/
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

