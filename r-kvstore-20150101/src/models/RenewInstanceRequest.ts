// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: true. Valid values:
   * 
   * *   **true**: enables automatic payment.
   * *   **false**: disables automatic payment.
   * 
   * If you select false, you must choose **Expenses** > **Renewal Management** in the top navigation bar. In the left-side navigation pane, click **Orders**. Find the specified order and pay for it.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * *   **true**: enables auto-renewal. The instance is renewed based on the specified renewal duration. For example, if you set the renewal duration to three months, you are charged for three months of service each time the instance is automatically renewed.
   * *   **false** (default): disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the promotional event or business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: MB. When you renew the instance, you can specify this parameter to change specifications of the instance.
   * 
   * > To change the specifications when you renew the instance, you must specify at least one of the `Capacity` and `InstanceClass` parameters.
   * 
   * @example
   * 1024
   */
  capacity?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token is case-sensitive. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * TF-ModifyInstanceSpec-1686645570-7dac7257-4a14-4811-939c-51a282f
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
   * The source of the request. The default value is **OpenAPI** and cannot be changed.
   * 
   * @example
   * OpenAPI
   */
  fromApp?: string;
  /**
   * @remarks
   * The instance type code. For more information, see [Instance specifications overview](https://help.aliyun.com/document_detail/26350.html). When you renew the instance, you can specify this parameter to change specifications of the instance.
   * 
   * > To change the specifications when you renew the instance, you must specify at least one of the `Capacity` and `InstanceClass` parameters.
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
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
   * The renewal period. Valid values: **1**, 2, 3, 4, 5, 6, 7, 8, **9**, **12**, **24**, and **36**. Unit: months.
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

