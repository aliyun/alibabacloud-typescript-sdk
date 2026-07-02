// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformToPrePaidRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment. Valid values:
   * 
   * - **true**: Automatically completes the payment.
   * 
   * - **false** (default): An order is generated, but is not automatically paid. You must then log on to the console to pay for the *order*. For more information, see [Manually renew an instance](https://help.aliyun.com/document_detail/26352.html).
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Auto-renewal is enabled.
   * 
   * - **false**: Auto-renewal is disabled.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period. Unit: months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required if **AutoRenew** is set to **true**.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The coupon code.
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to obtain the instance ID.
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
   * The subscription duration. Unit: months. Valid values: **1**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **12**, **24**, and **36**.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      couponNo: 'CouponNo',
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
      autoRenew: 'string',
      autoRenewPeriod: 'number',
      couponNo: 'string',
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

