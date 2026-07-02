// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Automatic payment. This is the default value.
   * 
   * - **false**: Manual payment. In the console, choose **Billing Management** > **Renewal Management** in the top navigation bar. In the navigation pane on the left, click **Or\\*\\*rs** > **My Or\\*\\*rs** to find and pay for the or\\*er.
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
   * - **false** (default): Auto-renewal is disabled.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period, in months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required when the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The target billing method. Valid values:
   * 
   * - **PrePaid**: subscription. If you set this parameter to this value, you must also specify the **Period** parameter.
   * 
   * - **PostPaid**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The coupon ID.
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query instance IDs.
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
   * The subscription duration, in months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * 
   * > This parameter is available and required only when the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * 1
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
      chargeType: 'ChargeType',
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
      chargeType: 'string',
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

