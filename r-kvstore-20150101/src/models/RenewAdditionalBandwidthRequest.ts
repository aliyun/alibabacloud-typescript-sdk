// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAdditionalBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * * **true**: Automatic payment. This is the default value.
   * * **false**: Manual payment. You must choose **Expenses and Costs** > **Renewals** in the top navigation bar of the console, and then choose **Order Management** > **My Orders** in the left-side navigation pane to find and pay for the order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The purchase duration. Unit: days. Valid values: **1**, **2**, **3**, **7**, **14**, **30**, **60**, **90**, **180**, **365**, **730**, **1095**, and **1825**.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  orderTimeLength?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The source of the API call. This parameter is used only for internal maintenance and does not need to be specified.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      couponNo: 'CouponNo',
      instanceId: 'InstanceId',
      orderTimeLength: 'OrderTimeLength',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      sourceBiz: 'SourceBiz',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      couponNo: 'string',
      instanceId: 'string',
      orderTimeLength: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      sourceBiz: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

