// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessagesRequest extends $dara.Model {
  /**
   * @example
   * app-iBuGU1VxEY42zrQRQfNA****
   */
  apiId?: string;
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
      apiId: 'ApiId',
      conversationId: 'ConversationId',
      firstId: 'FirstId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
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

