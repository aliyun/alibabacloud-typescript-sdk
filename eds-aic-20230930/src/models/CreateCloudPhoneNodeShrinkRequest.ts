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
   * The ID of the Shared Bandwidth instance.
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
  /**
   * @remarks
   * The billing method. Only the subscription billing method is supported.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of Cloud Phone matrices to purchase.
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
   * The downstream bandwidth limit, in Mbit/s.
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
   * 
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
   * The network settings for the instance.
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
   * The name of the Cloud Phone matrix.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by the `PeriodUnit` parameter.
   * 
   * - If `PeriodUnit` is set to **Year**, this parameter can only be set to 1.
   * 
   * - If `PeriodUnit` is set to **Month**, valid values are 1, 2, 3, and 6.
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
   * The number of Cloud Phone instances to create in a single Cloud Phone matrix.
   * 
   * @example
   * 25
   */
  phoneCount?: number;
  /**
   * @remarks
   * The size of the independent internal storage, in GiB.
   * 
   * @example
   * 10
   */
  phoneDataVolume?: number;
  promotionId?: string;
  /**
   * @remarks
   * The vertical resolution, in pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The horizontal resolution, in pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The size of the shared internal storage, in GiB.
   * 
   * > The size must exceed 10 GiB per instance in the matrix.
   * 
   * @example
   * 200
   */
  serverShareDataVolume?: number;
  /**
   * @remarks
   * The server type.
   * 
   * This parameter is required.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  /**
   * @remarks
   * The streaming mode for instances in the Cloud Phone matrix. Defaults to preemption mode.
   * 
   * @example
   * 1
   */
  streamMode?: number;
  swapSize?: number;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateCloudPhoneNodeShrinkRequestTag[];
  /**
   * @remarks
   * The upstream bandwidth limit, in Mbit/s.
   * 
   * @example
   * 50
   */
  upBandwidthLimit?: number;
  /**
   * @remarks
   * The template for instance creation. Set this parameter to `Random` to use a random template, or specify a template ID to use a specific template.
   * 
   * @example
   * Random
   */
  useTemplate?: string;
  /**
   * @remarks
   * The VSwitch ID.
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

