// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSupabaseProjectsResponseBodyItems } from "./ListSupabaseProjectsResponseBodyItems";


export class ListSupabaseProjectsResponseBody extends $dara.Model {
  items?: ListSupabaseProjectsResponseBodyItems[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSupabaseProjectsResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
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

