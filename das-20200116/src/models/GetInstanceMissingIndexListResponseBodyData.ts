// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceMissingIndexListResponseBodyDataList } from "./GetInstanceMissingIndexListResponseBodyDataList";


export class GetInstanceMissingIndexListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  list?: GetInstanceMissingIndexListResponseBodyDataList[];
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 16
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
      list: { 'type': 'array', 'itemType': GetInstanceMissingIndexListResponseBodyDataList },
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

