// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAppInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * Valid values:
   * 
   * *   true
   * *   false: manual payment. This is the default value.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The subscription duration of resources. This parameter must be configured together with `PeriodUnit`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter must be configured together with `Period`. The following items describe valid values for the combinations of `Period` and `PeriodUnit`:
   * 
   * *   1 Week
   * *   1 Month
   * *   2 Month
   * *   3 Month
   * *   6 Month
   * *   1 Year
   * *   2 Year
   * *   3 Year
   * 
   * >  The value of this parameter is case-insensitive. For example, `Week` is valid and `week` is invalid. If you specify a value combination other than the preceding combinations, such as `2 Week`, the operation can still be called. However, an error occurs when you place the order.
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
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The promotion ID. You can call the [GetResourcePrice](https://help.aliyun.com/document_detail/428503.html) operation to obtain the ID.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  renewAmount?: number;
  renewMode?: string;
  renewNodesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      autoPay: 'AutoPay',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productType: 'ProductType',
      promotionId: 'PromotionId',
      renewAmount: 'RenewAmount',
      renewMode: 'RenewMode',
      renewNodesShrink: 'RenewNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      autoPay: 'boolean',
      period: 'number',
      periodUnit: 'string',
      productType: 'string',
      promotionId: 'string',
      renewAmount: 'number',
      renewMode: 'string',
      renewNodesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

