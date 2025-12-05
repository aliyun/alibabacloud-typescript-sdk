// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessagesRequest extends $dara.Model {
  /**
   * @example
   * 941c6f59-acf5-4e11-9adc-31e52e1f****
   */
  conversationId?: string;
  /**
   * @example
   * 038866af-a050-4bc5-bfad-b7bfc838****
   */
  firstId?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      firstId: 'FirstId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      firstId: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

