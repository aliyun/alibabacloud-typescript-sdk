// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * * **true**: enables automatic payment. This is the default value.
   * * **false**: disables automatic payment.
   * 
   * <props="china">If you set this parameter to false, you must log on to the console, choose **Billing** > **Renewal Management** in the top navigation bar, and then choose **Order Management** > **My Orders** in the left-side navigation pane to find and pay for the order.
   * 
   * <props="intl">If you set this parameter to false, you must log on to the console, choose **Billing** > **Renewal Management** in the top navigation bar, and then click **Order Management** in the left-side navigation pane to find and pay for the order.
   * 
   * 
   * 
   * <props="partner">If you set this parameter to false, you must log on to the console, choose **Billing** > **Renewal Management** in the top navigation bar, and then click **Order Management** in the left-side navigation pane to find and pay for the order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: enables auto-renewal. The instance is renewed for the specified period. For example, if you set the renewal period to 3 months, the instance is automatically renewed for 3 months each time.
   * * **false**: disables auto-renewal. This is the default value.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The activity ID and business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * **[Deprecated]** You cannot change the storage capacity when you renew an instance. By default, the renewal order is placed based on the current specifications.
   * 
   * @example
   * -
   */
  capacity?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 0.6823317918435086
   */
  clientToken?: string;
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
   * The source of the request. Default value: **OpenAPI**. You do not need to manually specify this parameter.
   * 
   * @example
   * OpenAPI
   */
  fromApp?: string;
  /**
   * @remarks
   * **[Deprecated]** You cannot change the instance type when you renew an instance. By default, the renewal order is placed based on the current specifications.
   * 
   * @example
   * -
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The renewal period. Unit: months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * >For example, if an instance expires in 3 months and you renew it for 3 months, the instance will expire in 6 months after the renewal.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      capacity: 'Capacity',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      fromApp: 'FromApp',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      businessInfo: 'string',
      capacity: 'string',
      clientToken: 'string',
      couponNo: 'string',
      fromApp: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

