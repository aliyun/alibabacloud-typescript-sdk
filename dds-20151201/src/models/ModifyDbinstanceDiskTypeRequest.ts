// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceDiskTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true**: enables automatic payment. Make sure that your account has sufficient balance.
   * <props="china">- **false**: disables automatic payment. You can manually pay for the order in the console. Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **Expenses and Costs**. In the left-side navigation pane, choose **Orders** > **My Orders**. On the **Orders** tab, find the target order and complete the payment.
   * <props="intl">- **false**: disables automatic payment. You can manually pay for the order in the console. Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **Expenses and Costs**. In the left-side navigation pane, click **Order Management**. On the **Orders** page, find the target order and complete the payment.
   * 
   * Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * - **true**: enables auto-renewal.
   * - **false**: disables auto-renewal.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The additional parameter for business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
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
   * The new disk type. Valid values:
   * - **cloud_auto**: ESSD AutoPL cloud disk.
   * 
   * > Prerequisite: The disk space of the instance must be at least 40 GB before you call this operation. If the disk space is insufficient, call ModifyDBInstanceSpec to expand the disk.
   * 
   * @example
   * cloud_auto
   */
  dbInstanceStorageType?: string;
  /**
   * @remarks
   * The additional parameter.
   * 
   * @example
   * async
   */
  extraParam?: string;
  /**
   * @remarks
   * The specification change type. Valid values:
   * 
   * - **UPGRADE**: upgrades the configurations.
   * - **DOWNGRADE**: downgrades the configurations.
   * 
   * > This parameter is available only when the billing method of the instance is subscription.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The provisioned performance (IOPS). Valid values: 0 to 50,000.
   * 
   * > If DbInstanceStorageType is set to cloud_auto, this parameter is conditionally required and can be set to 0. If this parameter is not specified, the API returns InvalidParameter.
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

