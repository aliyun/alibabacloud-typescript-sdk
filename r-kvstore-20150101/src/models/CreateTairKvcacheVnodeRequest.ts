// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairKVCacheVNodeRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. A tag key and a tag value form a tag key-value pair.
   * > You can specify up to 5 tag key-value pairs at a time.
   * 
   * @example
   * value1_test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * > **N** specifies the sequence number of the tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
   * 
   * @example
   * key1_test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTairKVCacheVNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Set the value to **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: enables auto-renewal.
   * * **false** (default): disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal epoch. Unit: months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * > This parameter is required when the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Specifies whether to use a voucher. Valid values:
   * * **true**: uses a voucher.
   * * **false** (default): does not use a voucher.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The extended information, such as the campaign ID and business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid**: subscription. If you set this parameter to PrePaid, you must also specify the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that the token is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of compute units. Currently, only one compute unit is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  computeUnitNum?: number;
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
   * Specifies whether to perform a dry run on the instance creation request. Valid values:
   * * **true**: performs a dry run without creating the instance. The system checks the request parameters, request format, service limits, and available resources. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * * **false** (default): sends the request. If the request passes the dry run, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  elasticTimeRange?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * kvcache.cu.g4b.2
   */
  instanceClass?: string;
  /**
   * @remarks
   * The name of the new instance. The name must be 2 to 80 characters in length and start with a letter or a Chinese character. It cannot contain spaces or the following special characters: `@/:=”<>{[]}`.
   * 
   * @example
   * vnodetest
   */
  instanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Unit: months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * > This parameter is required when the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The region ID. Specifies the region where you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * > * You can invoke the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation or go to the console to obtain the resource group ID list. For related operations, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * > * Before you change the resource group to which the instance belongs, you can invoke the [ListResources](https://help.aliyun.com/document_detail/158866.html) operation to view the current resource group of the instance.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The tag information of the instance.
   */
  tag?: CreateTairKVCacheVNodeRequestTag[];
  /**
   * @example
   * fixed
   */
  VNodeType?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance. The vSwitch must belong to the VPC associated with the specified VCluster virtual cluster. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation of the VPC API to query the vSwitch ID.
   * > The zone of the vSwitch must be the same as the zone of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The instance ID of the VCluster virtual cluster where the VNode resides.
   * 
   * This parameter is required.
   * 
   * @example
   * tk-2ze4bba3c8fe****
   */
  vkName?: string;
  /**
   * @remarks
   * The zone ID. Specifies the zone where you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      businessInfo: 'BusinessInfo',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      computeUnitNum: 'ComputeUnitNum',
      couponNo: 'CouponNo',
      dryRun: 'DryRun',
      elasticTimeRange: 'ElasticTimeRange',
      instanceClass: 'InstanceClass',
      instanceName: 'InstanceName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      VNodeType: 'VNodeType',
      vSwitchId: 'VSwitchId',
      vkName: 'VkName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewPeriod: 'string',
      autoUseCoupon: 'boolean',
      businessInfo: 'string',
      chargeType: 'string',
      clientToken: 'string',
      computeUnitNum: 'number',
      couponNo: 'string',
      dryRun: 'boolean',
      elasticTimeRange: 'string',
      instanceClass: 'string',
      instanceName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateTairKVCacheVNodeRequestTag },
      VNodeType: 'string',
      vSwitchId: 'string',
      vkName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

