// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayRequestTag extends $dara.Model {
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

export class AddGatewayRequestZoneInfo extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp*****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The billing method. This parameter is specified when you purchase a traditional instance.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The network type of the pay-by-LCU Classic Load Balancer (CLB) to be purchased. Valid values:
   * - pubnet: Internet.
   * - privatenet: Internal network.
   * - privatepubnet: Internet and internal network.
   * 
   * > Traditional instance: When you create a traditional instance, you can purchase only one of the following load balancers: an NLB, a pay-by-LCU CLB, or a pay-by-specification CLB.
   * 
   * > Serverless instance: When you create a Serverless instance, you can purchase only one of the following load balancers: an NLB or a pay-by-LCU CLB.
   * 
   * @example
   * pubnet
   */
  clbNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to enable hardware acceleration.
   * 
   * @example
   * false
   */
  enableHardwareAcceleration?: boolean;
  /**
   * @remarks
   * Specifies whether to enable log delivery to Simple Log Service (SLS).
   * 
   * @example
   * false
   */
  enableSls?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Tracing Analysis.
   * 
   * @example
   * false
   */
  enableXtrace?: boolean;
  /**
   * @remarks
   * Specifies whether the security group is an advanced security group.
   * 
   * @example
   * false
   */
  enterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * The specifications of the Internet-facing SLB instance. This parameter is applicable to traditional instances. Valid values:
   * - Basic (slb.s1.small)
   * - Standard 1 (slb.s2.small)
   * - Standard I (slb.s2.medium)
   * - Advanced 1 (slb.s3.small)
   * - Advanced I (slb.s3.medium)
   * - Ultra-high I (slb.s3.large)
   * 
   * > Traditional instance: When you create a traditional instance, you can purchase only one of the following load balancers: an NLB, a pay-by-LCU CLB, or a pay-by-specification CLB.
   * 
   * > Serverless instance: When you create a Serverless instance, you can purchase only one of the following load balancers: an NLB or a pay-by-LCU CLB.
   * 
   * @example
   * slb.s2.small
   * 
   * @deprecated
   */
  internetSlbSpec?: string;
  /**
   * @remarks
   * The gateway ingress type. This parameter is applicable to the Professional Edition of a standard instance. Valid values:
   * - pubnet: Internet.
   * - privatenet: Internal network.
   * - privatepubnet: Internet and internal network.
   * 
   * @example
   * pubnet
   */
  managedEntryNetworkType?: string;
  /**
   * @remarks
   * The gateway product type. Valid values:
   * - mse_premium: Professional Edition of a standard instance.
   * - mse_pro: Standard Edition of a standard instance.
   * - mse_serverless: Serverless.
   * 
   * @example
   * mse_pro
   */
  mserVersion?: string;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * test-ceshi
   */
  name?: string;
  /**
   * @remarks
   * The network type of the Network Load Balancer (NLB) to be purchased. Valid values:
   * - pubnet: Internet.
   * - privatenet: Internal network.
   * - privatepubnet: Internet and internal network.
   * 
   * > Traditional instance: When you create a traditional instance, you can purchase only one of the following load balancers: an NLB, a pay-by-LCU Classic Load Balancer (CLB), or a pay-by-specification CLB.
   * 
   * > Serverless instance: When you create a Serverless instance, you can purchase only one of the following load balancers: an NLB or a pay-by-LCU CLB.
   * 
   * @example
   * pubnet
   */
  nlbNetworkType?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The number of nodes. This parameter is specified when you purchase a traditional instance.
   * 
   * @example
   * 2
   */
  replica?: number;
  /**
   * @remarks
   * The extended fields.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm34x43l*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of the internal-facing Server Load Balancer (SLB) instance. This parameter is applicable to traditional instances. Valid values:
   * - Basic (slb.s1.small)
   * - Standard 1 (slb.s2.small)
   * - Standard I (slb.s2.medium)
   * - Advanced 1 (slb.s3.small)
   * - Advanced I (slb.s3.medium)
   * - Ultra-high I (slb.s3.large)
   * 
   * > Traditional instance: When you create a traditional instance, you can purchase only one of the following load balancers: an NLB, a pay-by-LCU CLB, or a pay-by-specification CLB.
   * 
   * > Serverless instance: When you create a Serverless instance, you can purchase only one of the following load balancers: an NLB or a pay-by-LCU CLB.
   * 
   * @example
   * slb.s2.small
   * 
   * @deprecated
   */
  slbSpec?: string;
  /**
   * @remarks
   * The node specifications. This parameter is specified when you purchase a traditional instance. Valid values:
   * - MSE_GTW_16_32_200_c(16C32G)
   * - MSE_GTW_2_4_200_c(2C4G)
   * - MSE_GTW_4_8_200_c(4C8G)
   * - MSE_GTW_8_16_200_c(8C16G)
   * 
   * @example
   * MSE_GTW_2_4_200_c
   */
  spec?: string;
  /**
   * @remarks
   * The tags of the gateway.
   */
  tag?: AddGatewayRequestTag[];
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
   * The ID of the secondary vSwitch.
   * 
   * @example
   * vsw-wz9bu6o5vsvitt5mrxo6s
   */
  vSwitchId2?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp15mncnrtm83uauxd1xb
   */
  vpc?: string;
  /**
   * @remarks
   * The sampling rate for Tracing Analysis. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  xtraceRatio?: string;
  /**
   * @remarks
   * The zone information.
   */
  zoneInfo?: AddGatewayRequestZoneInfo[];
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
      zoneInfo: 'ZoneInfo',
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
      tag: { 'type': 'array', 'itemType': AddGatewayRequestTag },
      vSwitchId: 'string',
      vSwitchId2: 'string',
      vpc: 'string',
      xtraceRatio: 'string',
      zoneInfo: { 'type': 'array', 'itemType': AddGatewayRequestZoneInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zoneInfo)) {
      $dara.Model.validateArray(this.zoneInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

