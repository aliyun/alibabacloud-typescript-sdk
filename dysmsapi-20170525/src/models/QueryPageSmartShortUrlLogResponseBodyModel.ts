// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryPageSmartShortUrlLogResponseBodyModelList } from "./QueryPageSmartShortUrlLogResponseBodyModelList";


export class QueryPageSmartShortUrlLogResponseBodyModel extends $dara.Model {
  list?: QueryPageSmartShortUrlLogResponseBodyModelList[];
  /**
   * @example
   * 74
   */
  pageNo?: number;
  /**
   * @example
   * 15
   */
  pageSize?: number;
  /**
   * @example
   * 66
   */
  totalCount?: number;
  /**
   * @example
   * 86
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryPageSmartShortUrlLogResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
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

