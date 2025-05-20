// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRunningSqlConcurrencyControlRulesResponseBodyDataList } from "./GetRunningSqlConcurrencyControlRulesResponseBodyDataList";


export class GetRunningSqlConcurrencyControlRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  list?: GetRunningSqlConcurrencyControlRulesResponseBodyDataList;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
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
      list: GetRunningSqlConcurrencyControlRulesResponseBodyDataList,
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

