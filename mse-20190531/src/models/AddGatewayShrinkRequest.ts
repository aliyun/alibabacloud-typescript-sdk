// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The ID of the resource group.
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

export class AddGatewayShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The billing method you specify when you purchase an ordinary instance.
   * 
   * Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
   * 
   * *   pubnet: Internet
   * *   privatenet: private network
   * *   privatepubnet: Internet and private network
   * 
   * @example
   * pubnet
   */
  clbNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to activate Tracing Analysis.
   * 
   * @example
   * false
   */
  enableHardwareAcceleration?: boolean;
  /**
   * @remarks
   * The tag of the gateway.
   * 
   * @example
   * false
   */
  enableSls?: boolean;
  /**
   * @remarks
   * The sampling rate of Tracing Analysis. Valid values: [1,100].
   * 
   * @example
   * false
   */
  enableXtrace?: boolean;
  /**
   * @remarks
   * Specifies whether to enable hardware acceleration.
   * 
   * @example
   * false
   */
  enterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * The specifications of the Internet-facing Server Load Balancer (SLB) instance. Valid values:
   * 
   * *   slb.s1.small
   * *   slb.s2.smal
   * *   slb.s2.medium
   * *   slb.s3.small
   * *   slb.s3.medium
   * *   slb.s3.large
   * 
   * @example
   * slb.s2.small
   * 
   * @deprecated
   */
  internetSlbSpec?: string;
  /**
   * @example
   * pubnet
   */
  managedEntryNetworkType?: string;
  /**
   * @remarks
   * The MSE instance type. Valid values:
   * 
   * *   mse_pro: ordinary instance
   * *   mse_serverless: serverless instance
   * 
   * @example
   * mse_pro
   */
  mserVersion?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * test-ceshi
   */
  name?: string;
  /**
   * @remarks
   * The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
   * 
   * *   pubnet: Internet
   * *   privatenet: private network
   * *   privatepubnet: Internet and private network
   * 
   * @example
   * pubnet
   */
  nlbNetworkType?: string;
  /**
   * @remarks
   * The specifications of the internal-facing Server Load Balancer (SLB) instance. Valid values:
   * 
   * *   slb.s1.small
   * *   slb.s2.small
   * *   slb.s2.medium
   * *   slb.s3.small
   * *   slb.s3.medium
   * *   slb.s3.large
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The number of nodes you specify when you purchase an ordinary instance.
   * 
   * @example
   * 2
   */
  replica?: number;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * rg-acfm34x43l*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of the internal-facing Server Load Balancer (SLB) instance. Valid values:
   * 
   * *   slb.s1.small
   * *   slb.s2.small
   * *   slb.s2.medium
   * *   slb.s3.small
   * *   slb.s3.medium
   * *   slb.s3.large
   * 
   * @example
   * slb.s2.small
   * 
   * @deprecated
   */
  slbSpec?: string;
  /**
   * @remarks
   * The node specifications you specify when you purchase an ordinary instance. Valid values:
   * 
   * *   MSE_GTW_16_32_200_c(16C32G)
   * *   MSE_GTW_2_4_200_c(2C4G)
   * *   MSE_GTW_4_8_200_c(4C8G)
   * *   MSE_GTW_8_16_200_c(8C16G)
   * 
   * @example
   * MSE_GTW_2_4_200_c
   */
  spec?: string;
  /**
   * @remarks
   * The tag object.
   */
  tag?: AddGatewayShrinkRequestTag[];
  /**
   * @remarks
   * The ID of the primary vSwitch.
   * 
   * @example
   * vsw-bp1q8th57frl5khj2li43
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Specifies whether to use an advanced security group.
   * 
   * @example
   * vsw-wz9bu6o5vsvitt5mrxo6s
   */
  vSwitchId2?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp15mncnrtm83uauxd1xb
   */
  vpc?: string;
  /**
   * @remarks
   * Specifies whether to activate Log Service.
   * 
   * @example
   * 10
   */
  xtraceRatio?: string;
  /**
   * @remarks
   * The details of the zone.
   */
  zoneInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      chargeType: 'ChargeType',
      clbNetworkType: 'ClbNetworkType',
      enableHardwareAcceleration: 'EnableHardwareAcceleration',
      enableSls: 'EnableSls',
      enableXtrace: 'EnableXtrace',
      enterpriseSecurityGroup: 'EnterpriseSecurityGroup',
      internetSlbSpec: 'InternetSlbSpec',
      managedEntryNetworkType: 'ManagedEntryNetworkType',
      mserVersion: 'MserVersion',
      name: 'Name',
      nlbNetworkType: 'NlbNetworkType',
      region: 'Region',
      replica: 'Replica',
      requestPars: 'RequestPars',
      resourceGroupId: 'ResourceGroupId',
      slbSpec: 'SlbSpec',
      spec: 'Spec',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vSwitchId2: 'VSwitchId2',
      vpc: 'Vpc',
      xtraceRatio: 'XtraceRatio',
      zoneInfoShrink: 'ZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      chargeType: 'string',
      clbNetworkType: 'string',
      enableHardwareAcceleration: 'boolean',
      enableSls: 'boolean',
      enableXtrace: 'boolean',
      enterpriseSecurityGroup: 'boolean',
      internetSlbSpec: 'string',
      managedEntryNetworkType: 'string',
      mserVersion: 'string',
      name: 'string',
      nlbNetworkType: 'string',
      region: 'string',
      replica: 'number',
      requestPars: 'string',
      resourceGroupId: 'string',
      slbSpec: 'string',
      spec: 'string',
      tag: { 'type': 'array', 'itemType': AddGatewayShrinkRequestTag },
      vSwitchId: 'string',
      vSwitchId2: 'string',
      vpc: 'string',
      xtraceRatio: 'string',
      zoneInfoShrink: 'string',
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

