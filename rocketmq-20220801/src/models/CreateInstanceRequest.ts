// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestAclInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authentication-free access for VPC endpoints when the intelligent identity recognition type is used. Valid values:
   * - true: Enable authentication-free access.
   * - false: Disable authentication-free access.
   * 
   * @example
   * false
   */
  defaultVpcAuthFree?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultVpcAuthFree: 'defaultVpcAuthFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVpcAuthFree: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestNetworkInfoInternetInfo extends $dara.Model {
  /**
   * @remarks
   * The Internet bandwidth specification. Unit: Mb/s.
   * 
   * This parameter is required only when the Internet billing type is set to fixed bandwidth billing.
   * 
   * Valid values: 1 to 1000.
   * 
   * @example
   * 100
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The Internet billing type.
   * 
   * This parameter is required.
   * 
   * @example
   * uninvolved
   */
  flowOutType?: string;
  /**
   * @remarks
   * Specifies whether to enable public network access.
   * 
   * By default, instances support VPC access. If you enable public network access, ApsaraMQ for RocketMQ charges fees for public network downstream bandwidth. For more information about billing, see [Public network access fees](https://help.aliyun.com/document_detail/427240.html).
   * 
   * This parameter is required.
   * 
   * @example
   * disable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The public network access IP whitelist. Only public endpoints support IP whitelist configuration. VPC endpoints do not support this feature.
   * 
   * - If no IP whitelist is configured, all IP address ranges are allowed to access the ApsaraMQ for RocketMQ server over the Internet by default.
   * - If an IP whitelist is configured, only the IP addresses in the whitelist are allowed to access the ApsaraMQ for RocketMQ server over the Internet.
   * 
   * @deprecated
   */
  ipWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      flowOutBandwidth: 'flowOutBandwidth',
      flowOutType: 'flowOutType',
      internetSpec: 'internetSpec',
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowOutBandwidth: 'number',
      flowOutType: 'string',
      internetSpec: 'string',
      ipWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelist)) {
      $dara.Model.validateArray(this.ipWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestNetworkInfoVpcInfoVSwitches extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch associated with the instance.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv*******
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestNetworkInfoVpcInfo extends $dara.Model {
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp17hpmgz96tvnsdy6so
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the instance. If multiple vSwitches exist, separate them with vertical bars (|).
   * 
   * > After an ApsaraMQ for RocketMQ instance is created, the selected vSwitch cannot be changed. To modify the associated vSwitch, release the existing ApsaraMQ for RocketMQ instance and purchase a new one.
   * 
   * <notice>This field is not recommended. Use the vSwitches field instead.</notice>
   * 
   * @example
   * vsw-uf6gwtbn6etadpv*******
   * 
   * @deprecated
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of vSwitches.
   * 
   * > After an ApsaraMQ for RocketMQ instance is created, the selected vSwitch cannot be changed. To modify the associated vSwitch, release the existing ApsaraMQ for RocketMQ instance and purchase a new one.
   * 
   * <notice>This is a required field. Because the vSwitchId field is no longer recommended, use this field to configure vSwitches.</notice>
   */
  vSwitches?: CreateInstanceRequestNetworkInfoVpcInfoVSwitches[];
  /**
   * @remarks
   * The ID of the VPC to associate with the instance.
   * 
   * > After an ApsaraMQ for RocketMQ instance is created, the selected VPC cannot be changed. To modify the associated VPC, release the existing ApsaraMQ for RocketMQ instance and purchase a new one.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wz9qt50xhtj9krb******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupIds: 'securityGroupIds',
      vSwitchId: 'vSwitchId',
      vSwitches: 'vSwitches',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupIds: 'string',
      vSwitchId: 'string',
      vSwitches: { 'type': 'array', 'itemType': CreateInstanceRequestNetworkInfoVpcInfoVSwitches },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * The Internet configuration information.
   * 
   * This parameter is required.
   */
  internetInfo?: CreateInstanceRequestNetworkInfoInternetInfo;
  /**
   * @remarks
   * The VPC configuration information.
   * 
   * This parameter is required.
   */
  vpcInfo?: CreateInstanceRequestNetworkInfoVpcInfo;
  static names(): { [key: string]: string } {
    return {
      internetInfo: 'internetInfo',
      vpcInfo: 'vpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetInfo: CreateInstanceRequestNetworkInfoInternetInfo,
      vpcInfo: CreateInstanceRequestNetworkInfoVpcInfo,
    };
  }

  validate() {
    if(this.internetInfo && typeof (this.internetInfo as any).validate === 'function') {
      (this.internetInfo as any).validate();
    }
    if(this.vpcInfo && typeof (this.vpcInfo as any).validate === 'function') {
      (this.vpcInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestProductInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable adaptive elasticity. A value of true indicates that adaptive elasticity is enabled. A value of false indicates that adaptive elasticity is shutdown.
   */
  adaptiveElasticity?: boolean;
  /**
   * @remarks
   * Specifies whether to enable burstable elastic capacity beyond the specification.
   * 
   * After burstable elastic capacity is enabled, MSMQ for RocketMQ allows the instance to exceed the TPS limit of the base specification within a certain range. The portion that exceeds the base specification incurs additional elastic specification fees. For more information about billing, see [Computing fees](https://help.aliyun.com/document_detail/427237.html).
   * 
   * 
   * > Only instances of certain specifications support burstable elastic capacity. For more information about supported instances, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The capacity pattern.
   * 
   * @example
   * provisioned
   */
  capacityType?: string;
  /**
   * @remarks
   * The cross-region replication pattern.
   * 
   * @example
   * async_cross_az
   */
  drReplicationMode?: string;
  /**
   * @remarks
   * The message retention period. Unit: hours.
   * 
   * For the valid value range, see [Limits](https://help.aliyun.com/document_detail/440347.html) > Resource Quotas > Message Retention Period.
   * 
   * The log broker in MSMQ for RocketMQ is fully serverless and elastic. Fees are charged based on the actual storage space used. You can control the storage capacity by adjusting the message retention period. For more information, see [Storage fees](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The message sending and receiving computing specification. For more information about the TPS upper limit for message sending and receiving, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
  /**
   * @remarks
   * The provisioned capacity.
   * 
   * @example
   * 5000
   */
  provisionedCapacity?: number;
  /**
   * @remarks
   * The ratio of message sending TPS to the total message sending and accepting TPS of the instance.
   * 
   * For example, if the TPS upper limit for message sending and accepting of the instance is 1000 per second and the message sending ratio is 0.8, the TPS upper limit for message sending is 800 per second and the TPS upper limit for message accepting is 200 per second.
   * 
   * Valid values: [0.05, 0.95]. Default value: 0.5.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Indicates whether storage encryption is enabled.
   * 
   * @example
   * false
   */
  storageEncryption?: boolean;
  /**
   * @remarks
   * The key for storage encryption.
   * 
   * @example
   * xxxxx
   */
  storageSecretKey?: string;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature.
   * 
   * true: Enable the message trace feature.
   * false: Shutdown the message trace feature.
   * This parameter takes effect only for Serverless instances. If the message trace feature is enabled, message trace fees are incurred. For more information about billing, see the Serverless billing description. For pay-as-you-go and subscription instances, this parameter does not take effect. The message trace feature is supported by default regardless of whether this parameter is enabled.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      adaptiveElasticity: 'adaptiveElasticity',
      autoScaling: 'autoScaling',
      capacityType: 'capacityType',
      drReplicationMode: 'drReplicationMode',
      messageRetentionTime: 'messageRetentionTime',
      msgProcessSpec: 'msgProcessSpec',
      provisionedCapacity: 'provisionedCapacity',
      sendReceiveRatio: 'sendReceiveRatio',
      storageEncryption: 'storageEncryption',
      storageSecretKey: 'storageSecretKey',
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveElasticity: 'boolean',
      autoScaling: 'boolean',
      capacityType: 'string',
      drReplicationMode: 'string',
      messageRetentionTime: 'number',
      msgProcessSpec: 'string',
      provisionedCapacity: 'number',
      sendReceiveRatio: 'number',
      storageEncryption: 'boolean',
      storageSecretKey: 'string',
      traceOn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * xxxKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
   * 
   * @example
   * xxxValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The access control information.
   */
  aclInfo?: CreateInstanceRequestAclInfo;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when the billing method of the instance is set to Subscription.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The Unified Auto Renewal Cycle. This parameter takes effect only when auto-renewal is enabled. Unit: months.
   * 
   * Valid values:
   * 
   * - Monthly renewal: 1, 2, 3, 6, 12
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * <props="china">- ons_rmqsub_public_cn: subscription instance.
   * 
   * <props="china">- ons_rmqpost_public_cn: pay-as-you-go instance.
   * 
   * <props="china">- ons_rmqsrvlesspost_public_cn: serverless instance.
   * 
   * <props="intl">- ons_rmqpost_public_intl: pay-as-you-go.
   * 
   * <props="intl">- ons_rmqsub_public_intl: subscription.
   * <props="intl">- ons_rmqsrvlesspost_public_intl: serverless instance.
   * This parameter is required for serverless instances.
   * 
   * @example
   * ons_ rmqpost_public_cn
   * 
   * @deprecated
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name of the instance to be created.
   * 
   * If you do not specify this parameter, the instance ID is used as the instance name.
   * 
   * @example
   * rmq-cn-72u3048uxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The network configuration information.
   * 
   * This parameter is required.
   */
  networkInfo?: CreateInstanceRequestNetworkInfo;
  /**
   * @remarks
   * The billing method of the instance. ApsaraMQ for RocketMQ supports subscription and pay-as-you-go billing methods.
   * 
   * For more information, see [Billable methods](https://help.aliyun.com/document_detail/427234.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The subscription duration. This parameter takes effect only when the billing method of the instance is set to Subscription.
   * 
   * Valid values:
   * 
   * - Monthly subscription: 1, 2, 3, 4, 5, 6
   * 
   * - Yearly subscription: 1, 2, 3
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The minimum epoch unit of the subscription duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The instance specification information.
   */
  productInfo?: CreateInstanceRequestProductInfo;
  /**
   * @remarks
   * The remarks of the instance.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzy6pist7uuna
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary series encoding of the instance. For more information about the differences between primary series, see [Product selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  seriesCode?: string;
  /**
   * @remarks
   * The service encoding of the instance. The service encoding for MSMQ for RocketMQ is rmq.
   * 
   * This parameter is required.
   * 
   * @example
   * rmq
   */
  serviceCode?: string;
  /**
   * @remarks
   * The sub-series encoding of the instance. For more information about the differences between sub-series, see [Product selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * If the primary series is set to ultimate (Platinum Edition), the sub-series can only be set to cluster_ha (Cluster High Availability Edition).
   * >Notice: After the instance is created, the sub-series cannot be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster_ha
   */
  subSeriesCode?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tags?: CreateInstanceRequestTags[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client generates the value of this parameter, which must be unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * c2c5d1274a8d4317a13bc5b0d4******
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclInfo: 'aclInfo',
      autoRenew: 'autoRenew',
      autoRenewPeriod: 'autoRenewPeriod',
      commodityCode: 'commodityCode',
      instanceName: 'instanceName',
      networkInfo: 'networkInfo',
      paymentType: 'paymentType',
      period: 'period',
      periodUnit: 'periodUnit',
      productInfo: 'productInfo',
      remark: 'remark',
      resourceGroupId: 'resourceGroupId',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
      subSeriesCode: 'subSeriesCode',
      tags: 'tags',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclInfo: CreateInstanceRequestAclInfo,
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      commodityCode: 'string',
      instanceName: 'string',
      networkInfo: CreateInstanceRequestNetworkInfo,
      paymentType: 'string',
      period: 'number',
      periodUnit: 'string',
      productInfo: CreateInstanceRequestProductInfo,
      remark: 'string',
      resourceGroupId: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      subSeriesCode: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceRequestTags },
      clientToken: 'string',
    };
  }

  validate() {
    if(this.aclInfo && typeof (this.aclInfo as any).validate === 'function') {
      (this.aclInfo as any).validate();
    }
    if(this.networkInfo && typeof (this.networkInfo as any).validate === 'function') {
      (this.networkInfo as any).validate();
    }
    if(this.productInfo && typeof (this.productInfo as any).validate === 'function') {
      (this.productInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

