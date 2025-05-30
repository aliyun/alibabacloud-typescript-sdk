// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPeriodBudgetBillResponseBodyPeriodBudgetBillDTOS extends $dara.Model {
  bill?: number;
  budget?: number;
  lastYearBill?: number;
  month?: string;
  static names(): { [key: string]: string } {
    return {
      bill: 'bill',
      budget: 'budget',
      lastYearBill: 'lastYearBill',
      month: 'month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bill: 'number',
      budget: 'number',
      lastYearBill: 'number',
      month: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

