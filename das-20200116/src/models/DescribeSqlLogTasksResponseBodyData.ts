// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSqlLogTasksResponseBodyDataList } from "./DescribeSqlLogTasksResponseBodyDataList";


export class DescribeSqlLogTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data returned.
   */
  list?: DescribeSqlLogTasksResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
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
   * The number of tasks.
   * 
   * @example
   * 40
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
      list: { 'type': 'array', 'itemType': DescribeSqlLogTasksResponseBodyDataList },
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

