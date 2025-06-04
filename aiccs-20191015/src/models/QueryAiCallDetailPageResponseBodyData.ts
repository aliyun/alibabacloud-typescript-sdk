// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAiCallDetailPageResponseBodyDataList } from "./QueryAiCallDetailPageResponseBodyDataList";


export class QueryAiCallDetailPageResponseBodyData extends $dara.Model {
  list?: QueryAiCallDetailPageResponseBodyDataList[];
  /**
   * @example
   * 60
   */
  pageNo?: number;
  /**
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryAiCallDetailPageResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
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

