// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryHotlineNumberResponseBodyDataHotlineNumList } from "./QueryHotlineNumberResponseBodyDataHotlineNumList";


export class QueryHotlineNumberResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  hotlineNumList?: QueryHotlineNumberResponseBodyDataHotlineNumList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hotlineNumList: 'HotlineNumList',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hotlineNumList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumList },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hotlineNumList)) {
      $dara.Model.validateArray(this.hotlineNumList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

