// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the last conversation record.
   * 
   * @example
   * 77be60cd-237b-4ca9-9c46-48b663cb****
   */
  lastId?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  limit?: string;
  /**
   * @remarks
   * The favorite pinning flag for the application.
   * 
   * @example
   * true
   */
  pinned?: string;
  /**
   * @remarks
   * The sorting criterion.
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

