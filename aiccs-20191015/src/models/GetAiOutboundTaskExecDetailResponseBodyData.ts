// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAiOutboundTaskExecDetailResponseBodyDataList } from "./GetAiOutboundTaskExecDetailResponseBodyDataList";


export class GetAiOutboundTaskExecDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * true
   */
  hasNextPage?: boolean;
  list?: GetAiOutboundTaskExecDetailResponseBodyDataList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 199
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
      list: { 'type': 'array', 'itemType': GetAiOutboundTaskExecDetailResponseBodyDataList },
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

