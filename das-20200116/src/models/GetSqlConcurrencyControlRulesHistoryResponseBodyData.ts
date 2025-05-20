// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSqlConcurrencyControlRulesHistoryResponseBodyDataList } from "./GetSqlConcurrencyControlRulesHistoryResponseBodyDataList";


export class GetSqlConcurrencyControlRulesHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of the queried throttling rules.
   */
  list?: GetSqlConcurrencyControlRulesHistoryResponseBodyDataList;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GetSqlConcurrencyControlRulesHistoryResponseBodyDataList,
      total: 'number',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

