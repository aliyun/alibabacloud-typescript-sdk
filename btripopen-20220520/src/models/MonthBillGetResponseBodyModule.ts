// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonthBillGetResponseBodyModuleMonthAccountBillDetail } from "./MonthBillGetResponseBodyModuleMonthAccountBillDetail";


export class MonthBillGetResponseBodyModule extends $dara.Model {
  endDate?: string;
  /**
   * @remarks
   * CorpMonthAccountBillFeeDetail
   */
  monthAccountBillDetail?: MonthBillGetResponseBodyModuleMonthAccountBillDetail;
  startDate?: string;
  /**
   * @example
   * https://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'end_date',
      monthAccountBillDetail: 'monthAccountBillDetail',
      startDate: 'start_date',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      monthAccountBillDetail: MonthBillGetResponseBodyModuleMonthAccountBillDetail,
      startDate: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.monthAccountBillDetail && typeof (this.monthAccountBillDetail as any).validate === 'function') {
      (this.monthAccountBillDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

