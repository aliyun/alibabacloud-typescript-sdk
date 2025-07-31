// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewDBInstanceRequest extends $dara.Model {
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
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * 
   * *   **default** or **null**: uses coupons.
   * *   **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * 1111111111111111
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription period of the instance. Unit: month. Valid values: **1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, and 36**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      resourceOwnerAccount: 'string',
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

