// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudPhoneNodeShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * keyname
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * valuename
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

export class CreateCloudPhoneNodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance.
   * 
   * @example
   * cbwp-uf6g3hgg*******8s3lxiob3
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
   * The region ID.
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
   * The billing type. Only subscription is supported.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of cloud phone matrices to purchase.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The display settings.
   */
  displayConfigShrink?: string;
  /**
   * @remarks
   * The downstream bandwidth throttling. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  downBandwidthLimit?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type.
   * > To purchase more instance types, [contact pre-sales support](https://smartservice.console.aliyun.com/service/pre-sales-chat?spm=5176.6d6ecb63.0.0.729adda2VqVQx7).
   * 
   * @example
   * ac.max
   */
  instanceType?: string;
  isSingleImgDisk?: boolean;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-5mwr9azebliva****
   */
  networkId?: string;
  /**
   * @remarks
   * The network mapping information of the instance.
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
   * The name of the cloud phone matrix.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by PeriodUnit.
   * 
   * - If PeriodUnit is set to **year**, the value can only be 1.
   * - If PeriodUnit is set to **month**, valid values are 1, 2, 3, and 6.
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
   * The number of cloud phone instances to create in a single matrix.
   * 
   * @example
   * 25
   */
  phoneCount?: number;
  /**
   * @remarks
   * The size of the independent device storage. Unit: GiB.
   * 
   * @example
   * 10
   */
  phoneDataVolume?: number;
  promotionId?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The size of the shared device storage. Unit: GiB.
   * 
   * > The minimum value of the shared device storage must be greater than the number of instances in the matrix multiplied by 10 GiB.
   * 
   * @example
   * 200
   */
  serverShareDataVolume?: number;
  /**
   * @remarks
   * The specifications of the cloud phone matrix.
   * 
   * This parameter is required.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  /**
   * @remarks
   * The streaming mode for instances in the cloud phone matrix. If this parameter is not specified, the default value is preemptive mode.
   * 
   * @example
   * 1
   */
  streamMode?: number;
  swapSize?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateCloudPhoneNodeShrinkRequestTag[];
  /**
   * @remarks
   * The upstream bandwidth throttling. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  upBandwidthLimit?: number;
  /**
   * @remarks
   * Specifies whether to use a template during creation. Set this parameter to `Random` to use a random template from the template list. Alternatively, specify a template ID to use that template.
   * 
   * @example
   * Random
   */
  useTemplate?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zeekryyc1q3sm72l****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageType: 'BandwidthPackageType',
      bizRegionId: 'BizRegionId',
      channelCookie: 'ChannelCookie',
      chargeType: 'ChargeType',
      count: 'Count',
      displayConfigShrink: 'DisplayConfig',
      downBandwidthLimit: 'DownBandwidthLimit',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      isSingleImgDisk: 'IsSingleImgDisk',
      networkId: 'NetworkId',
      networkInfoShrink: 'NetworkInfo',
      networkType: 'NetworkType',
      nodeName: 'NodeName',
      paidCallBackUrl: 'PaidCallBackUrl',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
      phoneDataVolume: 'PhoneDataVolume',
      promotionId: 'PromotionId',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      serverShareDataVolume: 'ServerShareDataVolume',
      serverType: 'ServerType',
      streamMode: 'StreamMode',
      swapSize: 'SwapSize',
      tag: 'Tag',
      upBandwidthLimit: 'UpBandwidthLimit',
      useTemplate: 'UseTemplate',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bandwidthPackageId: 'string',
      bandwidthPackageType: 'string',
      bizRegionId: 'string',
      channelCookie: 'string',
      chargeType: 'string',
      count: 'string',
      displayConfigShrink: 'string',
      downBandwidthLimit: 'number',
      imageId: 'string',
      instanceType: 'string',
      isSingleImgDisk: 'boolean',
      networkId: 'string',
      networkInfoShrink: 'string',
      networkType: 'string',
      nodeName: 'string',
      paidCallBackUrl: 'string',
      period: 'number',
      periodUnit: 'string',
      phoneCount: 'number',
      phoneDataVolume: 'number',
      promotionId: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      serverShareDataVolume: 'number',
      serverType: 'string',
      streamMode: 'number',
      swapSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateCloudPhoneNodeShrinkRequestTag },
      upBandwidthLimit: 'number',
      useTemplate: 'string',
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

