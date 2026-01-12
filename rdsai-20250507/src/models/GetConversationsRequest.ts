// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationsRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **GetConversations**.
   * 
   * @example
   * 77be60cd-237b-4ca9-9c46-48b663cb****
   */
  lastId?: string;
  /**
   * @remarks
   * The ID of the last conversation.
   * 
   * @example
   * 10
   */
  limit?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * true
   */
  pinned?: string;
  /**
   * @remarks
   * Specifies whether to pin the application.
   * 
   * @example
   * CreatedAt
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      lastId: 'LastId',
      limit: 'Limit',
      pinned: 'Pinned',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastId: 'string',
      limit: 'string',
      pinned: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

