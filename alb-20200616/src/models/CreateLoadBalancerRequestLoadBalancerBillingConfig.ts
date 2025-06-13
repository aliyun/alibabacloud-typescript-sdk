// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestLoadBalancerBillingConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance that is associated with the Internet-facing ALB instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * Set the value to **PostPay**, which specifies the pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      payType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

