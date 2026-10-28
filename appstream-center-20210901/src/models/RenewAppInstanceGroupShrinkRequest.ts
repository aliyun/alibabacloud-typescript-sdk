// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAppInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. If RenewMode is set to RENEW_SPECIFIED_NODE_COUNT or RENEW_SPECIFIED_NODE_IDS, this parameter must be set to false.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The numeric part of the resource purchase duration. Use this parameter together with `PeriodUnit` to specify the full purchase duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit part of the resource purchase duration. Use this parameter together with `Period` to specify the full purchase duration. The valid combinations of `Period` and `PeriodUnit` are as follows:
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
   * > This parameter is case-sensitive. For example, `Week` is valid, but `week` is not. If the request parameters do not match the combinations listed above, such as `2 Week`, the operation call succeeds but an error occurs during order placement.
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
  /**
   * @remarks
   * The promotion ID. You can obtain this ID by calling the [GetResourcePrice](https://help.aliyun.com/document_detail/428503.html) operation.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The number of nodes to renew.
   * 
   * @example
   * 2
   */
  renewAmount?: number;
  /**
   * @remarks
   * The renewal mode.
   * 
   * @example
   * RENEW_ORIGINAL_CONFIG
   */
  renewMode?: string;
  /**
   * @remarks
   * The list of node IDs to renew.
   */
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

