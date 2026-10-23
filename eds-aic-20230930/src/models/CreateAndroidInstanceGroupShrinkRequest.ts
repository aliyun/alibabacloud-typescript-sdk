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
  /**
   * @remarks
   * The bandwidth plan ID.
   * 
   * @example
   * np-791ncq8qcuoop9hta
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The bandwidth type.
   * 
   * @example
   * cbwp_ecd
   */
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where cloud phones are available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The channel cookie, which is passed through to the sales system when an order is placed.
   * 
   * @example
   * channel-cookie-ig
   */
  channelCookie?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate requests. The token can be up to 100 characters in length.
   * 
   * @example
   * asadbuvwiabdbvchj****
   */
  clientToken?: string;
  /**
   * @remarks
   * > This parameter is not available to the public.
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
   * The image ID. You can call the [DescribeImageList](~~DescribeImageList~~) operation to query the image list for cloud phones.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * > The name can be up to 30 characters in length. It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`. It can contain only Chinese characters, letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * Cloud Phone A
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The specifications of the instance group. You can call the [DescribeSpec](~~DescribeSpec~~) operation to query the available specifications for cloud phones.
   * 
   * This parameter is required.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * The instance version. A value of basic indicates a Wuying cloud phone instance, and a value of EnterpriseAi indicates a JVS Mobile instance.
   * 
   * @example
   * EnterpriseAi
   */
  instanceVersion?: string;
  /**
   * @remarks
   * > This parameter is not available to the public.
   * 
   * @example
   * null
   */
  ipv6Bandwidth?: number;
  /**
   * @remarks
   * The key pair ID. When creating an instance group, if you specify a valid key pair ID, the key pair is bound to all successfully created instances, and you do not need to call the binding API operation again.
   * 
   * > Binding key pairs during scale-out is not supported.
   * 
   * @example
   * kp-7o9xywwfutc1l****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The network and bandwidth plan configurations of the instance group.
   */
  networkInfoShrink?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * network_pro_ecd
   */
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
   * - To create a shared network instance: The network ID is optional. Enter the network ID of the **Shared Network** type on the [Cloud Phone Console > Network](https://wya.wuying.aliyun.com/network) page. If no shared network is available in the console, you can leave this parameter empty, and automatic creation of a shared network is triggered when the instance group is created.
   * 
   * - To create a VPC network instance: The network ID is required. Enter the network ID of the **VPC Network** type on the [Cloud Phone Console > Network](https://wya.wuying.aliyun.com/network) page. If no VPC network is available in the console, you must create a network first.
   * 
   * @example
   * cn-hangzhou+dir-745976****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The redirect URL for the payment success page.
   * 
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
   * The policy ID. You can call the [ListPolicyGroups](~~ListPolicyGroups~~) operation to query the policy list.
   * 
   * @example
   * pg-b7bxrrwxkijjh****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The promotion activity ID.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * The streaming mode of the instances in the instance group. If this parameter is not specified, the default mode is preemptive mode.
   * 
   * @example
   * 1
   */
  streamMode?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateAndroidInstanceGroupShrinkRequestTag[];
  /**
   * @remarks
   * The vSwitch ID. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/448774.html) operation to query the vSwitch list.
   * 
   * - To create a shared network instance: Leave this parameter empty.
   * 
   * - To create a VPC network instance: The vSwitch ID is required. This vSwitch is used to create the instance.
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

