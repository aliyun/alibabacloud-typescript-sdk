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
   * Specifies whether to enable automatic payment. When the RenewMode parameter is set to RENEW_SPECIFIED_NODE_COUNT or RENEW_SPECIFIED_NODE_IDS, this parameter must be set to false.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The numeric part of the subscription duration. This parameter is used together with the PeriodUnit parameter to specify the complete subscription duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is used together with the Period parameter to specify the complete subscription duration. Valid combinations of Period and PeriodUnit are as follows:
   * 
   * - 1 Week
   * - 1 Month
   * - 2 Month
   * - 3 Month
   * - 6 Month
   * - 1 Year
   * - 2 Year
   * - 3 Year
   * 
   * > This parameter is case-sensitive. For example, Week is valid, but week is invalid. If the request parameters do not match the preceding valid combinations, such as 2 Week, the API call may succeed, but an error will occur during the order placement stage.
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
   * The promotion ID. You can obtain the ID by calling the [GetResourcePrice](https://help.aliyun.com/document_detail/428503.html) operation.
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
   * The IDs of the nodes to renew.
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

