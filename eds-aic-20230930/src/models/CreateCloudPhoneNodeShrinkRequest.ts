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
   * Specifies whether to enable the auto-payment feature.
   * 
   * Valid values:
   * 
   * *   False (default): You must manually complete the payment in the Alibaba Cloud Expenses and Costs console.
   * *   true: enables the auto-payment feature.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-renewal feature. In this case, the system automatically renews instances upon expiration.
   * *   false (default): disables the auto-renewal feature. In this case, you need to manually renew instances upon expiration.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  bandwidthPackageId?: string;
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
   * The number of cloud phone matrixes you want to purchase.
   * 
   * @example
   * 1
   */
  count?: string;
  displayConfigShrink?: string;
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
   * The instance specification.
   * 
   * Valid values:
   * 
   * *   ac.max: By default, this specification allows up to 25 instances. You can adjust this number by using PhoneCount (Value range: 4 to 40).
   * *   ac.plus: By default, this specification allows up to 40 instances. You can adjust this number by using PhoneCount (Value range: 4 to 40).
   * 
   * @example
   * ac.max
   */
  instanceType?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-5mwr9azebliva****
   */
  networkId?: string;
  networkInfoShrink?: string;
  networkType?: string;
  /**
   * @remarks
   * The name of the cloud phone matrix.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by `PeriodUnit`. Valid values:
   * 
   * *   When `PeriodUnit` is set to **year**: 1.
   * *   When `PeriodUnit` is set to **month**: 1, 2, 3, and 6.
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
   * *   Month (default)
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The number of instances per cloud phone matrix.
   * 
   * @example
   * 25
   */
  phoneCount?: number;
  phoneDataVolume?: number;
  /**
   * @remarks
   * The resolution height. Unit: pixel.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The resolution width. Unit: pixel.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The shared storage size Unit: GiB.
   * 
   * @example
   * 200
   */
  serverShareDataVolume?: number;
  /**
   * @remarks
   * The matrix specification.
   * 
   * Valid values:
   * 
   * *   cpm.gn6.gx1
   * 
   * This parameter is required.
   * 
   * @example
   * cpm.gn6.gx1
   */
  serverType?: string;
  streamMode?: number;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateCloudPhoneNodeShrinkRequestTag[];
  upBandwidthLimit?: number;
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
      chargeType: 'ChargeType',
      count: 'Count',
      displayConfigShrink: 'DisplayConfig',
      downBandwidthLimit: 'DownBandwidthLimit',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      networkId: 'NetworkId',
      networkInfoShrink: 'NetworkInfo',
      networkType: 'NetworkType',
      nodeName: 'NodeName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
      phoneDataVolume: 'PhoneDataVolume',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      serverShareDataVolume: 'ServerShareDataVolume',
      serverType: 'ServerType',
      streamMode: 'StreamMode',
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
      networkId: 'string',
      networkInfoShrink: 'string',
      networkType: 'string',
      nodeName: 'string',
      period: 'number',
      periodUnit: 'string',
      phoneCount: 'number',
      phoneDataVolume: 'number',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      serverShareDataVolume: 'number',
      serverType: 'string',
      streamMode: 'number',
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

