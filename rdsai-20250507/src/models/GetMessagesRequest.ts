// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * 941c6f59-acf5-4e11-9adc-31e52e1f****
   */
  conversationId?: string;
  eventMode?: string;
  /**
   * @remarks
   * The ID of the first message.
   * 
   * @example
   * 038866af-a050-4bc5-bfad-b7bfc838****
   */
  firstId?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The ContextDB workspace ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      eventMode: 'EventMode',
      firstId: 'FirstId',
      limit: 'Limit',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      eventMode: 'string',
      firstId: 'string',
      limit: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

