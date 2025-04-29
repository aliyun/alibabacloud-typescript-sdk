// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserQueryResponseBodyModuleItems } from "./UserQueryResponseBodyModuleItems";


export class UserQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  items?: UserQueryResponseBodyModuleItems[];
  /**
   * @example
   * 9YN+jxa7PcxbNUTISeKjEw==
   */
  pageToken?: string;
  /**
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'has_more',
      items: 'items',
      pageToken: 'page_token',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': UserQueryResponseBodyModuleItems },
      pageToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

