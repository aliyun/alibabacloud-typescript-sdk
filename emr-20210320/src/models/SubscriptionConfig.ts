// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscriptionConfig extends $dara.Model {
  /**
   * @remarks
   * 自动续费。取值范围：
   * - true：开启启动续费。
   * - false：不开启自动续费。
   * 默认值：false。
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * 自动续费时长。当AutoRenew取值为true时生效。当AutoRenewDurationUnit取值为Month时，取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
   * 
   * @example
   * 12
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * - Month：月。
   * 
   * @example
   * Month
   */
  autoRenewDurationUnit?: string;
  /**
   * @remarks
   * 付费时长。PaymentDurationUnit取值为Month时，取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  paymentDuration?: number;
  /**
   * @remarks
   * 付费时长单位。取值范围：
   * - Month：月。
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

