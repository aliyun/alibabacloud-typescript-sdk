// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAdditionalBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment. Valid values:
   * 
   * - **true**: Enables auto-payment. This is the default. Ensure that your account has a sufficient balance.
   * 
   * - **false**: Disables auto-payment. You must manually complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: Enables auto-renewal.
   * 
   * - **false**: Disables auto-renewal. This is the default.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period, in months. Valid values: **1**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **12**, **24**, **36**, and **60**.
   * 
   * > - This parameter is required only when **AutoRenew** is set to **true**.
   * >
   * > - After you set this parameter, you cannot query its value by calling API operations. To check this setting, go to the console. In the top navigation bar, choose **Billing** > **Renewal Management**. Then, in the **Instance ID** field, enter the instance ID followed by the `-bw` suffix (for example, r-bp1zxszhcgatnx\\*\\*\\*\\*-bw).
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  bandWidthBurst?: boolean;
  /**
   * @remarks
   * The amount of bandwidth to add, in MB/s. The value must be an integer greater than or equal to **0**. The maximum value is six times the default bandwidth of the instance type or a single data shard, with an upper limit of 192 MB/s. For example, if the default bandwidth of an instance is 10 MB/s, the valid values for this parameter are **0** to **60**.
   * 
   * > - You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) operation and check the value of the **DefaultBandWidth** parameter in the response to get the default maximum bandwidth. For more information about instance types, see [Instance types](https://help.aliyun.com/document_detail/26350.html).
   * >
   * > - If you specified multiple data shard IDs for the **NodeId** parameter, the bandwidth values that you specify for this parameter must correspond to the order of the data shard IDs. Separate multiple bandwidth values with commas (,).
   * 
   * @example
   * 20
   */
  bandwidth?: string;
  /**
   * @remarks
   * The billing method for the additional bandwidth. Valid values:
   * 
   * - **PrePaid**: subscription.
   * 
   * - **PostPaid**: pay-as-you-go. This is the only supported billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard. You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query data shard IDs. Separate multiple data shard IDs with commas (,). You can also set this parameter to **All** to specify all data shards.
   * 
   * > This parameter is required only when the instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html) or the [read/write splitting architecture](https://help.aliyun.com/document_detail/62870.html).
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The subscription duration, in days. Valid values: **1**, **2**, **3**, **7**, **14**, **30**, **60**, **90**, **180**, **365**, **730**, **1095**, and **1825**.
   * 
   * > To continue using the purchased bandwidth, you must call the [RenewAdditionalBandwidth](https://help.aliyun.com/document_detail/473804.html) operation to renew the bandwidth before it expires.
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
   * The source of the call. This parameter is used for internal maintenance. Do not specify it.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      bandWidthBurst: 'BandWidthBurst',
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      couponNo: 'CouponNo',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
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
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      bandWidthBurst: 'boolean',
      bandwidth: 'string',
      chargeType: 'string',
      couponNo: 'string',
      instanceId: 'string',
      nodeId: 'string',
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

