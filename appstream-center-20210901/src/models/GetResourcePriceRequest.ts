// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The quantity of resources to purchase.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The ID of the session specification type to purchase. You can obtain this value by calling the `ListAppInstanceType` operation.
   * 
   * Either AppInstanceType or NodeInstanceType must have a value. If both have values, NodeInstanceType is used.
   * 
   * @example
   * appstreaming.general
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The region ID of the delivery group. For more information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the resource specification type to purchase. You can obtain this value by calling the [ListNodeInstanceType](https://help.aliyun.com/document_detail/428502.html) operation.
   * 
   * Either AppInstanceType or NodeInstanceType must have a value. If both have values, NodeInstanceType is used.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The numeric part of the resource purchase duration. This parameter is used together with PeriodUnit to specify the complete purchase duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit part of the resource purchase duration. This parameter is used together with Period to specify the complete purchase duration. Valid combinations of Period and PeriodUnit:
   * 
   * - 1 Week (1 week)
   * - 1 Month (1 month)
   * - 2 Month (2 months)
   * - 3 Month (3 months)
   * - 6 Month (6 months)
   * - 1 Year (1 year)
   * - 2 Year (2 years)
   * - 3 Year (3 years)
   * 
   * > This parameter is case-sensitive. For example, `Week` is valid, but `week` is invalid. If the request parameters do not match the combinations listed above, such as `2 Week`, the call to this operation succeeds, but an error occurs during the order placement phase.
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appInstanceType: 'AppInstanceType',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      nodeInstanceType: 'NodeInstanceType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appInstanceType: 'string',
      bizRegionId: 'string',
      chargeType: 'string',
      nodeInstanceType: 'string',
      period: 'number',
      periodUnit: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

