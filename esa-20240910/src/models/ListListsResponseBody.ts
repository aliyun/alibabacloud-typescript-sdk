// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListListsResponseBodyLists } from "./ListListsResponseBodyLists";


export class ListListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array that contains list information, including list data after paging.
   */
  lists?: ListListsResponseBodyLists[];
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of filtered lists.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of created lists.
   * 
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      lists: 'Lists',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lists: { 'type': 'array', 'itemType': ListListsResponseBodyLists },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      usage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lists)) {
      $dara.Model.validateArray(this.lists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

