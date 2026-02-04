// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformToPrePaidRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: false. Valid values:
   * 
   * *   **true**: enables auto-renewal.
   * *   **false**: disables auto-renewal. In this case, you can renew your instance in the console. For more information, see [Manually renew an instance](https://help.aliyun.com/document_detail/26352.html).
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * * *true*: enables auto-renewal.
   * * *false* (default): disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The subscription duration that is supported by auto-renewal. Unit: month. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * >  This parameter is required if the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: number;
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](~~DescribeInstances~~) operation to query the ID of the instance.
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
   * The subscription duration of the instance. Unit: months. Valid values: **1** to **9**, **12**, **24**, and **36**.
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

