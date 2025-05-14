// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAiOutboundTaskListResponseBodyDataList } from "./GetAiOutboundTaskListResponseBodyDataList";


export class GetAiOutboundTaskListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * false
   */
  hasNextPage?: boolean;
  list?: GetAiOutboundTaskListResponseBodyDataList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasNextPage: 'HasNextPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasNextPage: 'boolean',
      list: { 'type': 'array', 'itemType': GetAiOutboundTaskListResponseBodyDataList },
      pageSize: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

