// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairKVCacheVNodeRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  A maximum of five key-value pairs can be specified at a time.
   * 
   * @example
   * value1_test
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the instance.
   * 
   * >  **N** specifies the value of the nth tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
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
   * Specifies whether to enable auto-renewal for the instance. Default value: false. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The subscription duration that is supported by auto-renewal. Unit: month. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * >  This parameter is required if the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * *   **true**: uses a coupon.
   * *   **false**: does not use a coupon.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The extended information such as the promotional event ID and business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The new billing method. Valid values:
   * 
   * *   **PrePaid**: subscription. If you set this parameter to PrePaid, you must also specify the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests and is case-sensitive. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of compute units. Valid values: 1.
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
   * *   **true**: performs a dry run and does not create the instance. The system prechecks the request parameters, request format, service limits, and available resources. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and performs the actual request. If the request passes the dry run, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  elasticTimeRange?: string;
  /**
   * @remarks
   * Instance specification
   * 
   * This parameter is required.
   * 
   * @example
   * kvcache.cu.g4b.2
   */
  instanceClass?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 80 characters in length. The name must start with a letter and cannot contain spaces or the following special characters: `@ / : = " < > { [ ] }`
   * 
   * @example
   * vnodetest
   */
  instanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Valid values: **1** to **9**, **12**, **24**, and **36**. Unit: months.
   * 
   * >  This parameter is required only if the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group that you want to manage.
   * 
   * > 
   * 
   * *   You can query resource group IDs in the console or by calling the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation. For more information, see [View the basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * *   Before you modify the resource group to which an instance belongs, you can call the [ListResources](https://help.aliyun.com/document_detail/158866.html) operation to view the current resource group of the instance.
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
   * Details of the tags.
   */
  tag?: CreateTairKVCacheVNodeRequestTag[];
  VNodeType?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance belongs. The vSwitch must belong to the VPC of the VCluser. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the VPC ID.
   * 
   * >  The vSwitch and the instance must be deployed in the same zone.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VCluster that contains the VNode.
   * 
   * This parameter is required.
   * 
   * @example
   * tk-2ze4bba3c8fe****
   */
  vkName?: string;
  /**
   * @remarks
   * The zone ID of the instance.
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

