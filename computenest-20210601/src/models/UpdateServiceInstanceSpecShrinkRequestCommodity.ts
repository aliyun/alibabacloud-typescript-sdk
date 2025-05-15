// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceSpecShrinkRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * Valid values:
   * 
   * *   **true (default)**: automatically completes the payment. You must make sure that your account balance is sufficient.
   * *   **false**: does not automatically complete the payment. An unpaid order is generated. If your account balance is insufficient, you can set AutoPay to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.[](https://rdsnext.console.aliyun.com/dashboard/cn-beijing)
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

