// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDasSQLLogHotDataResponseBodyDataList } from "./GetDasSqllogHotDataResponseBodyDataList";


export class GetDasSQLLogHotDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  extra?: any;
  /**
   * @remarks
   * The details of the data returned.
   */
  list?: GetDasSQLLogHotDataResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
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
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'any',
      list: { 'type': 'array', 'itemType': GetDasSQLLogHotDataResponseBodyDataList },
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

