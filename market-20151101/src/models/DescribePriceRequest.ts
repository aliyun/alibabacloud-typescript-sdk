// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * Serialized commodity information based on the specified OrderType. The CommodityType corresponding to each OrderType is as follows:
   * 
   * INSTANCE_BUY: InstanceBuyCommodity
   * INSTANCE_RENEW: InstanceRenewCommodity
   * INSTANCE_UPGRADE: InstanceUpgradeCommodity
   * The parameters in the example are described as follows:
   * 
   * productCode: The product code.
   * skuCode: The product specification code. For non-image products: prepay for subscription, postpay for pay-as-you-go. For image products: ECS for pay-as-you-go, Package for subscription.
   * components: Specification modules. The version package_version is required, and other modules depend on the product settings.
   * duration: Number of cycles, such as 1, 2, 3...
   * pricingCycle: Cycle unit. Day, Month, or Year.
   * 
   * This parameter is required.
   * 
   * @example
   * {"components":{"package_version":"yuncode12928000016"},"duration":1,"pricingCycle":"YEAR","productCode":"cmgj01**28","quantity":1,"skuCode":"prepay"}
   */
  commodity?: string;
  /**
   * @remarks
   * Order type. Valid values:
   * 
   * INSTANCE_BUY: Product purchase
   * INSTANCE_RENEW: Instance renewal
   * INSTANCE_UPGRADE: Instance upgrade
   * Note: For renewal-type price inquiries, you must pass InstanceId in the Commodity parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE_BUY
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

