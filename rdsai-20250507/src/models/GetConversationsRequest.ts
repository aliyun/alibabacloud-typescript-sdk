// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationsRequest extends $dara.Model {
  /**
   * @example
   * app-iBuGU1VxEY42zrQRQfNA****
   */
  apiId?: string;
  /**
   * @example
   * 77be60cd-237b-4ca9-9c46-48b663cb****
   */
  lastId?: string;
  /**
   * @example
   * 10
   */
  limit?: string;
  /**
   * @example
   * true
   */
  pinned?: string;
  /**
   * @example
   * CreatedAt
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      lastId: 'LastId',
      limit: 'Limit',
      pinned: 'Pinned',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
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

