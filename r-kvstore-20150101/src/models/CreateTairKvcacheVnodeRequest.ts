// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairKVCacheVNodeRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * > You can specify up to 5 tag key-value pairs at a time.
   * 
   * @example
   * value1_test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * > **N** represents the index of a tag, starting from 1. For example, **Tag.1.Value** is the value of the first tag.
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
   * Specifies whether to automatically complete the payment. The value must be **true**.
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
   * - **false** (default): Disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period, in months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required when the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **true**: Use a coupon.
   * 
   * - **false** (default): Do not use a coupon.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * Additional business information, such as a promotion ID.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method for the instance. Valid value:
   * 
   * - **PrePaid**: Subscription. If you specify this value, you must also specify the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * A client-generated token that ensures request idempotence. This token must be unique across requests, is case-sensitive, and cannot exceed 64 ASCII characters.
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
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run and does not create the instance. The system checks the request parameters, request format, business limits, and available inventory. If the check fails, the system returns the corresponding error. If the check passes, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): Sends a normal request. If the check passes, the system creates the instance.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is no longer used.
   */
  elasticTimeRange?: string;
  /**
   * @remarks
   * The instance specification.
   * 
   * This parameter is required.
   * 
   * @example
   * kvcache.cu.g4b.2
   */
  instanceClass?: string;
  /**
   * @remarks
   * The name of the new instance. The name must be 2 to 80 characters long and must start with a letter (case-insensitive) or a Chinese character. Spaces and the following special characters are not supported: `@/:=”<>{[]}`.
   * 
   * @example
   * vnodetest
   */
  instanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription period in months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * 
   * > This parameter is required when the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The ID of the region where you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance will belong.
   * 
   * > - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation or view resource group IDs in the console. For more information, see [View the basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * >
   * > - Before changing the resource group of an instance, call the [ListResources](158866) API to view the current resource group of the instance.
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
   * The tags to add to the instance. You can specify a maximum of five tags.
   */
  tag?: CreateTairKVCacheVNodeRequestTag[];
  /**
   * @remarks
   * This parameter is no longer used.
   */
  VNodeType?: string;
  /**
   * @remarks
   * The ID of the vSwitch for the instance. The vSwitch must belong to the VPC that is associated with the specified virtual cluster. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to obtain the vSwitch ID.
   * 
   * > The vSwitch must be in the same zone as the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual cluster that hosts the VNode.
   * 
   * This parameter is required.
   * 
   * @example
   * tk-2ze4bba3c8fe****
   */
  vkName?: string;
  /**
   * @remarks
   * The ID of the zone where you want to create the instance.
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

