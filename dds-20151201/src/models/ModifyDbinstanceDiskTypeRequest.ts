// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceDiskTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Enables automatic payment. Make sure that your account has a sufficient balance.
   * 
   * <props="china">
   * 
   * - **false**: Disables automatic payment. To pay for the order, log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **Expenses and Costs**. In the navigation pane on the left, choose **Subscription Orders** > **My Orders**. On the **Product Orders** tab, find the order and complete the payment.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **false**: Disables automatic payment. To pay for the order, log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **Expenses and Costs**. In the navigation pane on the left, click **Order Management**. On the **Product Orders** page, find the order and complete the payment.
   * 
   * 
   * 
   * 
   * Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Enables auto-renewal.
   * 
   * - **false**: Disables auto-renewal.
   * 
   * Default value: **false**
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code. The default value is `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1fa5efaa93****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The disk type after the modification. Valid value:
   * 
   * - **cloud_auto**: ESSD AutoPL disk.
   * 
   * @example
   * cloud_auto
   */
  dbInstanceStorageType?: string;
  /**
   * @remarks
   * An additional parameter.
   * 
   * @example
   * async
   */
  extraParam?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * - **UPGRADE**: Upgrades the instance configuration.
   * 
   * - **DOWNGRADE**: Downgrades the instance configuration.
   * 
   * > This parameter is available only when the instance uses the subscription billing method.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The provisioned IOPS. Valid values: 0 to 50000.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      dbInstanceStorageType: 'DbInstanceStorageType',
      extraParam: 'ExtraParam',
      orderType: 'OrderType',
      provisionedIops: 'ProvisionedIops',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      dbInstanceStorageType: 'string',
      extraParam: 'string',
      orderType: 'string',
      provisionedIops: 'number',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

