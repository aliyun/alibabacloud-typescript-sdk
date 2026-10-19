// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAdditionalBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * * **true**: enables automatic payment. This is the default value. Make sure that your account has sufficient balance.
   * * **false**: disables automatic payment. You must manually complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: enables auto-renewal.
   * * **false**: disables auto-renewal. This is the default value.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period, in months. Valid values: **1**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **12**, **24**, **36**, and **60**.
   * 
   * > * This parameter is available and required only when the **AutoRenew** parameter is set to **true**.
   * > * After this parameter is configured, it cannot be queried by calling API operations. To query the auto-renewal period, choose **Billing** > **Renewal Management** in the top navigation bar of the console, and then enter the instance ID with the `-bw` suffix (for example, r-bp1zxszhcgatnx****-bw) in the **Instance ID** text box.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable burstable (second-level) elastic bandwidth. After elastic scaling for bandwidth is enabled, burstable (second-level) elastic bandwidth cannot be enabled, and vice versa.
   * 
   * @example
   * false
   */
  bandWidthBurst?: boolean;
  /**
   * @remarks
   * The bandwidth to be increased, in MB/s. The value must be an integer greater than or equal to **0**. The maximum value is six times the default bandwidth of the instance (or a single shard) specifications, but the upper limit of the increase is 192 MB/s. For example, if the default bandwidth of the instance is 10 MB/s, the value range is **0** to **60**.
   * 
   * > * You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) operation and use the **DefaultBandWidth** response parameter to obtain the default maximum bandwidth. For more information about instance specifications, see [Overview of instance specifications](https://help.aliyun.com/document_detail/26350.html).
   * > * If multiple data shard IDs are specified in the **NodeId** request parameter, the bandwidth values specified in this parameter must correspond to the order of the shard IDs. Separate multiple bandwidth values with commas (,).
   * 
   * @example
   * 20
   */
  bandwidth?: string;
  /**
   * @remarks
   * The billing method for the additional bandwidth. Valid values:
   * * **PrePaid**: subscription.
   * * **PostPaid**: pay-as-you-go. Currently, only this billing method is supported.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the coupon.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance. You can call [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard. You can call [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) to obtain the shard ID. Separate multiple shard IDs with commas (,). You can also set this parameter to **All** to specify all data shards.
   * > This parameter is available and required only when the instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html) or [read/write splitting architecture](https://help.aliyun.com/document_detail/62870.html).
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The subscription duration, in days. Valid values: **1**, **2**, **3**, **7**, **14**, **30**, **60**, **90**, **180**, **365**, **730**, **1095**, and **1825**.
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
   * The source of the call. This parameter is used only for internal maintenance and does not need to be specified.
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

