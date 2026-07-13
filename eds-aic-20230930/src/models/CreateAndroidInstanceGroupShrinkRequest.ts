// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndroidInstanceGroupShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class CreateAndroidInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of instance groups. Default value: 1. Maximum value: 100.
   * 
   * @example
   * 8
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  bandwidthPackageId?: string;
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the list of regions where cloud phone instances can be purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  channelCookie?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent repeated submissions. The value cannot exceed 100 characters in length.
   * 
   * @example
   * asadbuvwiabdbvchj****
   */
  clientToken?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * Specifies whether to enable GPU acceleration.
   * 
   * @example
   * false
   */
  gpuAcceleration?: boolean;
  /**
   * @remarks
   * The image ID. You can call [DescribeImageList](~~DescribeImageList~~) to query the list of cloud phone images.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance group name.
   * 
   * > The instance group name cannot exceed 30 characters in length. It must start with an uppercase letter, lowercase letter, or Chinese character. It cannot start with `http://` or `https://`. It can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * Cloud phoneA
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The instance group specification. You can call [DescribeSpec](~~DescribeSpec~~) to query the specifications available for cloud phone instances.
   * 
   * This parameter is required.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  instanceVersion?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  ipv6Bandwidth?: number;
  /**
   * @remarks
   * The key pair ID. If you specify a valid key pair ID when creating an instance group, the key pair is bound to all instances that are successfully created, without the need to call the bindng operation again.
   * 
   * > Binding a key pair during scale-out is not supported.
   * 
   * @example
   * kp-7o9xywwfutc1l****
   */
  keyPairId?: string;
  networkInfoShrink?: string;
  networkType?: string;
  /**
   * @remarks
   * The number of instances in the instance group. Maximum value: 100.
   * 
   * @example
   * 1
   */
  numberOfInstances?: number;
  /**
   * @remarks
   * The network ID.
   * 
   * - To create a shared network instance: the network ID is optional. Specify the network ID of the **Shared Network** type on the [Cloud Phone console > Network](https://wya.wuying.aliyun.com/network) page. If no shared network exists in the console, you can leave this parameter empty. A shared network is automatically created when the instance group is created.
   * 
   * - To create a VPC network instance: the network ID is required. Specify the network ID of the **VPC Network** type on the [Cloud Phone console > Network](https://wya.wuying.aliyun.com/network) page. If no VPC network exists in the console, create a network first.
   * 
   * @example
   * cn-hangzhou+dir-745976****
   */
  officeSiteId?: string;
  /**
   * @example
   * wya.wuying.aliyun.com/instanceGroup
   */
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The subscription duration of the resource. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The policy ID. You can call [ListPolicyGroups](~~ListPolicyGroups~~) to query the list of policies.
   * 
   * @example
   * pg-b7bxrrwxkijjh****
   */
  policyGroupId?: string;
  promotionId?: string;
  saleMode?: string;
  streamMode?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateAndroidInstanceGroupShrinkRequestTag[];
  /**
   * @remarks
   * The vSwitch ID. You can call [DescribeVSwitches](https://help.aliyun.com/document_detail/448774.html) to query the list of vSwitches.
   * 
   * - To create a shared network instance: leave this parameter empty.
   * 
   * - To create a VPC network instance: the vSwitch ID is required. The specified vSwitch is used to create the instance.
   * 
   * @example
   * vsw-uf61uvzhz8ejaw776****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageType: 'BandwidthPackageType',
      bizRegionId: 'BizRegionId',
      channelCookie: 'ChannelCookie',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      enableIpv6: 'EnableIpv6',
      gpuAcceleration: 'GpuAcceleration',
      imageId: 'ImageId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      instanceVersion: 'InstanceVersion',
      ipv6Bandwidth: 'Ipv6Bandwidth',
      keyPairId: 'KeyPairId',
      networkInfoShrink: 'NetworkInfo',
      networkType: 'NetworkType',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      paidCallBackUrl: 'PaidCallBackUrl',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      promotionId: 'PromotionId',
      saleMode: 'SaleMode',
      streamMode: 'StreamMode',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bandwidthPackageId: 'string',
      bandwidthPackageType: 'string',
      bizRegionId: 'string',
      channelCookie: 'string',
      chargeType: 'string',
      clientToken: 'string',
      enableIpv6: 'boolean',
      gpuAcceleration: 'boolean',
      imageId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      instanceVersion: 'string',
      ipv6Bandwidth: 'number',
      keyPairId: 'string',
      networkInfoShrink: 'string',
      networkType: 'string',
      numberOfInstances: 'number',
      officeSiteId: 'string',
      paidCallBackUrl: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      promotionId: 'string',
      saleMode: 'string',
      streamMode: 'number',
      tag: { 'type': 'array', 'itemType': CreateAndroidInstanceGroupShrinkRequestTag },
      vSwitchId: 'string',
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

