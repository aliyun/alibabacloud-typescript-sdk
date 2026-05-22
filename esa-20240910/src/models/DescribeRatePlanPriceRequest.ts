// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanPriceRequest extends $dara.Model {
  amount?: number;
  period?: number;
  planName?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      period: 'Period',
      planName: 'PlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      period: 'number',
      planName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

