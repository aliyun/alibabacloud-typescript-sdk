// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of plans.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The subscription period, in months.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The name of the plan.
   * 
   * @example
   * basic
   */
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

