// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcePackagePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the resource plan. The value must be the same as the duration of the resource plan specified in the specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  duration?: number;
  /**
   * @remarks
   * The time when the resource plan takes effect. If you do not specify this parameter, the resource plan immediately takes effect by default. 
   * When the **OrderType** is **BUY**, resource packs with the **EffectiveDate longer than the current time of 6 months** are not supported. 
   * If the **OrderType** is **UPGRADE**, the **EffectiveDate** **must be less than or equal to** the actual expiration time of the upgraded instance.
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-10T12:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The ID of the instance. **This parameter is required when the order type is renewal or upgrade.**
   * 
   * @example
   * OSSBAG-cn-0xl0002
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   BUY: You place the order to purchase an instance.
   * *   UPGRADE: You place the order to upgrade an instance.
   * *   RENEW: You place the order to renew an instance.
   * 
   * Default value: BUY.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the resource plan. The value must be the same as the value of the **ProductCode** parameter that is returned when you call the **DescribeResourcePackageProduct** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * FPT_ossbag_periodMonthlyAcc_NetworkOut_finance_common
   */
  packageType?: string;
  /**
   * @remarks
   * The unit of validity period of the resource plan. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The code of service. You can query the service code by calling the **QueryProductList** operation or viewing **Codes of Alibaba Cloud Services**.
   * 
   * This parameter is required.
   * 
   * @example
   * ossbag
   */
  productCode?: string;
  /**
   * @remarks
   * The specifications of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * 500
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      instanceId: 'string',
      orderType: 'string',
      ownerId: 'number',
      packageType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      specification: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

