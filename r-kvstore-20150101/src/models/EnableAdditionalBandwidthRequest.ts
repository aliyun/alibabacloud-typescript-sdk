// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAdditionalBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: true. Valid values:
   * 
   * *   **true**: enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. If automatic payment is disabled, you must perform the following steps to complete the payment in the Tair (Redis OSS-compatible) console: In the top navigation bar, choose **Expenses** > **Renewal Management**. In the left-side navigation pane, click **Orders**. On the **Orders** page, find the order and complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**: enables auto-renewal.
   * *   **false**: disables auto-renewal. This is the default value.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal cycle based on which Tair (Redis OSS-compatible) automatically renews the purchased bandwidth. Unit: months. Valid values: **1**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **12**, **24**, **36**, and **60**.
   * 
   * > * This parameter takes effect and must be specified only when you set the **AutoRenew** parameter to **true**.
   * > * You cannot query the auto-renewal cycle by calling an API operation. To obtain the auto-renewal cycle, you can perform the following procedure: In the top navigation bar of the Tair (Redis OSS-compatible) console, choose **Expenses** > **Renewal Management**. On the page that appears, enter the ID of the instance and the `-bw` suffix in the **Instance ID** field. Example: r-bp1zxszhcgatnx****-bw.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  bandWidthBurst?: boolean;
  /**
   * @remarks
   * The amount of extra bandwidth that you want to purchase. Unit: Mbit/s. The value must be an integer greater than or equal to **0**. The maximum value can be up to six times the default bandwidth of the instance or a single shard, but cannot exceed 192 Mbit/s. For example, if the default bandwidth of an instance is 10 Mbit/s, the value range of this parameter is **0** to **60**.
   * 
   * > *   You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) operation to obtain the default maximum bandwidth returned by the **DefaultBandWidth** response parameter. For more information about instance types, see [Overview](https://help.aliyun.com/document_detail/26350.html).
   * > -   If you specify multiple data shard IDs in the **NodeId** parameter, you must specify the amount of bandwidth that you want to purchase for each specified data shard in the Bandwidth parameter. The bandwidth values that you specify in the Bandwidth parameter must be in the same sequence as the data shard IDs that you specify in the NodeId parameter. In addition, you must separate the bandwidth values with commas (,).
   * 
   * @example
   * 20
   */
  bandwidth?: string;
  /**
   * @remarks
   * The billing method of the bandwidth instance. Default value: PostPaid. Valid values:
   * 
   * - PrePaid: subscription
   * - PostPaid: pay-as-you-go
   * 
   * @example
   * PostPaid
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
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the IDs of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard for which you want to purchase a specific amount of bandwidth. You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query the IDs of the data shards in an instance. If you specify multiple data shard IDs, separate the data shard IDs with commas (,). You can also set this parameter to **All**, which specifies all the data shards of the instance.
   * 
   * >  This parameter is valid and required only if the instance is a [cluster](https://help.aliyun.com/document_detail/52228.html) instance or [read/write splitting](https://help.aliyun.com/document_detail/62870.html) instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The validity period of the bandwidth that you purchase. Unit: day. Valid values: **1**, **2**, **3**, **7**, **14**, **30**, **60**, **90**, **180**, **365**, **730**, **1095**, and **1825**.
   * 
   * > If you want to continue using the purchased bandwidth after the specified period of time elapses, you must call the [RenewAdditionalBandwidth](https://help.aliyun.com/document_detail/473804.html) operation to submit a renewal order.
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
   * The source of the operation. This parameter is used only for internal maintenance. You do not need to specify this parameter.
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

