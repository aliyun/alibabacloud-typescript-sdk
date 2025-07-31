// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceDiskTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. You must perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner, click **Expenses** and select **User Center** from the drop-down list. The User Center page appears. In the left-side navigation pane, choose **Order Management** > Renew. On the Renewal tab, find the bill that you want to pay and then click Renew in the Actions column.
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
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
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
   * 
   * *   **cloud_auto**: ESSD AutoPL disk
   * *   **cloud_essd1**: PL1 ESSD
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
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
   * The type of configuration changes. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE**
   * 
   * >  This parameter is valid only when the billing method of the instance is subscription.
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

