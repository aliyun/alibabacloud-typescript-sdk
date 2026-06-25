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
  paidCallbackUrl?: string;
  payType?: string;
  period?: number;
  periodUnit?: string;
  promotionId?: string;
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
      paidCallbackUrl: 'PaidCallbackUrl',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
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
      paidCallbackUrl: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
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
   * The number of instance groups to create. Valid values: 1 to 100. Default value: 1.
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
   * Specifies whether to enable auto-renewal for subscription resources. Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  bandwidthPackageId?: string;
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions where Cloud Phone instances are available.
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
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. This parameter prevents duplicate requests. The token can be up to 100 characters in length.
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
   * The image ID. You can call the [DescribeImageList](~~DescribeImageList~~) operation to query available images for Cloud Phone instances.
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
   * > The name can be up to 30 characters in length. It must start with an uppercase or lowercase letter or a Chinese character, and cannot start with `http://` or `https://`. The name can contain only Chinese characters, letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * Cloud phoneA
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The instance group specification. You can call the [DescribeSpec](~~DescribeSpec~~) operation to query the specifications that are available for Cloud Phone instances.
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
   * The key pair ID. If you specify a valid key pair ID when you create the instance group, the system attaches the key pair to all successfully created instances. No separate API call is required to attach the key pair.
   * 
   * > Attaching a key pair during a scale-out operation is not supported.
   * 
   * @example
   * kp-7o9xywwfutc1l****
   */
  keyPairId?: string;
  networkInfo?: CreateAndroidInstanceGroupRequestNetworkInfo;
  networkType?: string;
  /**
   * @remarks
   * The number of instances in the instance group. The maximum value is 100.
   * 
   * @example
   * 1
   */
  numberOfInstances?: number;
  /**
   * @remarks
   * The network ID.
   * 
   * - To create instances in a Shared Network: This parameter is optional. Specify the ID of a **Shared Network**. You can find the ID on the [Cloud Phone console > Network](https://wya.wuying.aliyun.com/network) page. If no Shared Network is available in the console, you can omit this parameter. The system automatically creates a Shared Network when you create the instance group.
   * 
   * - To create instances in a VPC: This parameter is required. Specify the ID of a **VPC**. You can find the ID on the [Cloud Phone console > Network](https://wya.wuying.aliyun.com/network) page. If no VPC is available in the console, you must create one first.
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
   * The subscription duration. The PeriodUnit parameter specifies the unit.
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
   * The policy ID. You can call the [ListPolicyGroups](~~ListPolicyGroups~~) operation to query available policies.
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
   * The resource tags.
   */
  tag?: CreateAndroidInstanceGroupRequestTag[];
  /**
   * @remarks
   * The vSwitch ID. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/448774.html) operation to query available vSwitches.
   * 
   * - If you create instances in a Shared Network, omit this parameter.
   * 
   * - If you create instances in a VPC, this parameter is required. The system creates the instances in the specified vSwitch.
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
      instanceVersion: 'InstanceVersion',
      ipv6Bandwidth: 'Ipv6Bandwidth',
      keyPairId: 'KeyPairId',
      networkInfo: 'NetworkInfo',
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
      networkInfo: CreateAndroidInstanceGroupRequestNetworkInfo,
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

