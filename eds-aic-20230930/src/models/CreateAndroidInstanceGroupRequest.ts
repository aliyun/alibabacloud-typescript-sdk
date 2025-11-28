// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndroidInstanceGroupRequestNetworkInfo extends $dara.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  bandwidthPackageName?: string;
  cidrBlock?: string;
  internetChargeType?: string;
  ipRatio?: number;
  isp?: string;
  limitedBandwidth?: number;
  payType?: string;
  period?: number;
  periodUnit?: string;
  visibleType?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bandwidthPackageName: 'BandwidthPackageName',
      cidrBlock: 'CidrBlock',
      internetChargeType: 'InternetChargeType',
      ipRatio: 'IpRatio',
      isp: 'Isp',
      limitedBandwidth: 'LimitedBandwidth',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      visibleType: 'VisibleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bandwidthPackageName: 'string',
      cidrBlock: 'string',
      internetChargeType: 'string',
      ipRatio: 'number',
      isp: 'string',
      limitedBandwidth: 'number',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      visibleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndroidInstanceGroupRequestTag extends $dara.Model {
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

export class CreateAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The number of instance groups. Default value: 1. Maximum value: 1.
   * 
   * @example
   * 8
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false.
   * 
   * Valid values:
   * 
   * *   true: enables automatic payment. Make sure that your Alibaba Cloud account has sufficient balance.
   * *   false: disables automatic payment. You must manually complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: false.
   * 
   * Valid values:
   * 
   * *   true: automatically renew resource upon expiration.
   * *   false: manually renew resources upon expiration.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  bandwidthPackageId?: string;
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The ID of the region. You can call the DescribeRegions operation to query the regions where Cloud Phone is supported.
   * 
   * Valid values:
   * 
   * *   cn-shenzhen: China (Shenzhen).
   * *   cn-beijing: China (Beijing).
   * *   cn-shanghai: China (Shanghai).
   * *   cn-hongkong: China (Hong Kong).
   * *   ap-southeast-1: Singapore.
   * *   cn-hangzhou: China (Hangzhou).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The value cannot exceed 100 characters in length.
   * 
   * @example
   * asadbuvwiabdbvchjsbj
   */
  clientToken?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * Specifies whether to enable GPU acceleration.
   * 
   * Valid values:
   * 
   * *   true: enables GPU acceleration.
   * *   false (default): disables GPU acceleration.
   * 
   * @example
   * false
   */
  gpuAcceleration?: boolean;
  /**
   * @remarks
   * The ID of the image. You can call the [DescribeImageList](https://help.aliyun.com/document_detail/2807324.html) operation to query images.
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
   * >  The name can be up to 30 characters in length. It can contain letters, digits, colons (:), underscores (_), periods (.), or hyphens (-). It must start with letters but cannot start with `http://` or `https://`.
   * 
   * @example
   * defaultInstanceGroup
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The specifications of the instance group. You can call the [DescribeSpec](https://help.aliyun.com/document_detail/2807299.html) operation to query the available specifications.
   * 
   * Valid values:
   * 
   * *   acp.perf.large: Performance (8 vCPUs, 16 GiB of memory, and 32 GiB of storage.
   * *   acp.basic.small: Lightweight (2 vCPUs, 4 GiB of memory, and 32 GiB of storage).
   * *   acp.std.large: Standard (4 vCPUs, 8 GiB of memory, and 32 GiB of storage).
   * 
   * This parameter is required.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  ipv6Bandwidth?: number;
  /**
   * @remarks
   * The ID of the key pair. When you create an instance group and specify a valid key pair ID, all cloud phone instances within the group will automatically be bound to that key pair upon creation. This eliminates the need to manually bind key pairs to individual cloud phone instances.
   * 
   * >  Binding key pairs to cloud phone instances is currently not supported during instance group resizing.
   * 
   * @example
   * kp-7o9xywwfutc1l****
   */
  keyPairId?: string;
  networkInfo?: CreateAndroidInstanceGroupRequestNetworkInfo;
  networkType?: string;
  /**
   * @remarks
   * The number of cloud phones in the instance group. Maximum value: 100.
   * 
   * @example
   * 1
   */
  numberOfInstances?: number;
  /**
   * @remarks
   * The ID of the network.
   * 
   * *   This parameter is required if you assign a shared network to cloud phones. You can go to the [Network](https://wya.wuying.aliyun.com/network) page of the Cloud Phone console to retrieve the ID of a **shared network**. If no shared network is available in the Cloud Phone console, you can leave this parameter empty. The system automatically creates one when you create an instance group.
   * *   This parameter is required if you assign a virtual private cloud (VPC) to cloud phones. You can go to the [Network](https://wya.wuying.aliyun.com/network) page of the Cloud Phone console to retrieve the ID of a **VPC**. If no VPC is available in the Cloud Phone console, you must first create one.
   * 
   * @example
   * cn-hangzhou+dir-745976****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * *   Hour (Note that this unit is supported only by pay-as-you-go.)
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy. You can call the [ListPolicyGroups](https://help.aliyun.com/document_detail/2807352.html) operation to query policies.
   * 
   * @example
   * pg-b7bxrrwxkijjh****
   */
  policyGroupId?: string;
  promotionId?: string;
  streamMode?: number;
  /**
   * @remarks
   * The tags
   */
  tag?: CreateAndroidInstanceGroupRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/448774.html) operation to query vSwitches.
   * 
   * *   This parameter is not required if you assign a shared network to cloud phones.
   * *   This parameter is required if you assign a VPC to cloud phones. The vSwitch specified by this parameter is used to create cloud phones.
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
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      enableIpv6: 'EnableIpv6',
      gpuAcceleration: 'GpuAcceleration',
      imageId: 'ImageId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      ipv6Bandwidth: 'Ipv6Bandwidth',
      keyPairId: 'KeyPairId',
      networkInfo: 'NetworkInfo',
      networkType: 'NetworkType',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      promotionId: 'PromotionId',
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
      chargeType: 'string',
      clientToken: 'string',
      enableIpv6: 'boolean',
      gpuAcceleration: 'boolean',
      imageId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      ipv6Bandwidth: 'number',
      keyPairId: 'string',
      networkInfo: CreateAndroidInstanceGroupRequestNetworkInfo,
      networkType: 'string',
      numberOfInstances: 'number',
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      promotionId: 'string',
      streamMode: 'number',
      tag: { 'type': 'array', 'itemType': CreateAndroidInstanceGroupRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.networkInfo && typeof (this.networkInfo as any).validate === 'function') {
      (this.networkInfo as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

