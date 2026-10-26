// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyDataAccountInfo extends $dara.Model {
  /**
   * @remarks
   * The username of the instance. When you use public network access, you must configure the username and password of the instance in the SDK code for identity verification.
   * 
   * @example
   * 6W0xz2uPfiwp****
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataAclInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the instance. This parameter is deprecated. Use the aclTypes parameter instead.
   * 
   * @example
   * default
   * 
   * @deprecated
   */
  aclType?: string;
  /**
   * @remarks
   * The authentication types of the instance.
   */
  aclTypes?: string[];
  /**
   * @remarks
   * Indicates whether the authentication-free in VPC feature is enabled.
   * 
   * @example
   * true
   */
  defaultVpcAuthFree?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      aclTypes: 'aclTypes',
      defaultVpcAuthFree: 'defaultVpcAuthFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      aclTypes: { 'type': 'array', 'itemType': 'string' },
      defaultVpcAuthFree: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.aclTypes)) {
      $dara.Model.validateArray(this.aclTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataExtConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   * 
   * @example
   * default
   */
  aclType?: string;
  /**
   * @remarks
   * Indicates whether burstable elastic capacity beyond the base specification is enabled.
   * 
   * This parameter takes effect only when the value of supportAutoScaling is enable, which means the instance supports enabling elastic capacity.
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The Internet bandwidth specification. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The billing type for public network usage.
   * 
   * @example
   * payByBandwidth
   */
  flowOutType?: string;
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * The instance supports VPC access by default. If public network access is enabled, ApsaraMQ for RocketMQ charges fees for public downstream bandwidth. For more information about billing, see [Public network access fees](https://help.aliyun.com/document_detail/427240.html).
   * 
   * @example
   * enable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The message retention period. Unit: hours.
   * 
   * For the value range, see [Limits](https://help.aliyun.com/document_detail/440347.html) > Resource Quotas > Message retention period.
   * 
   * The message storage of ApsaraMQ for RocketMQ is fully serverless and elastic. You are charged based on the actual storage space used. You can control the storage capacity by adjusting the message retention period. For more information, see [Storage fees](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The message processing specification. For the TPS upper limit of message sending and receiving, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
  /**
   * @remarks
   * The ratio of message sending to message receiving.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Indicates whether the instance supports enabling burstable elastic capacity beyond the base specification.
   * 
   * After burstable elastic capacity is enabled, ApsaraMQ for RocketMQ allows the instance to exceed the TPS limit of the base specification within a certain range. Additional elastic specification fees are charged for the portion that exceeds the base specification. For more information about billing, see [Computing fees](https://help.aliyun.com/document_detail/427237.html).
   * 
   * > Only instances of specific specifications support burstable elastic capacity. For more information about supported instances, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  supportAutoScaling?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      autoScaling: 'autoScaling',
      flowOutBandwidth: 'flowOutBandwidth',
      flowOutType: 'flowOutType',
      internetSpec: 'internetSpec',
      messageRetentionTime: 'messageRetentionTime',
      msgProcessSpec: 'msgProcessSpec',
      sendReceiveRatio: 'sendReceiveRatio',
      supportAutoScaling: 'supportAutoScaling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      autoScaling: 'boolean',
      flowOutBandwidth: 'number',
      flowOutType: 'string',
      internetSpec: 'string',
      messageRetentionTime: 'number',
      msgProcessSpec: 'string',
      sendReceiveRatio: 'number',
      supportAutoScaling: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataInstanceQuotas extends $dara.Model {
  /**
   * @remarks
   * The free quota. Unit: count.
   * 
   * @example
   * 20
   */
  freeCount?: number;
  /**
   * @remarks
   * The quota name of the instance.
   * 
   * @example
   * TOPIC_COUNT
   */
  quotaName?: string;
  /**
   * @remarks
   * The total quota. Unit: count.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The used quota. Unit: count.
   * 
   * @example
   * 10
   */
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      freeCount: 'freeCount',
      quotaName: 'quotaName',
      totalCount: 'totalCount',
      usedCount: 'usedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeCount: 'number',
      quotaName: 'string',
      totalCount: 'number',
      usedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNetworkInfoEndpoints extends $dara.Model {
  /**
   * @remarks
   * The associated PrivateLink endpoint instance.
   * 
   * @example
   * ep-bpxxx
   */
  endpointId?: string;
  /**
   * @remarks
   * The endpoint type of the instance.
   * 
   * @example
   * TCP_INTERNET
   */
  endpointType?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * rmq-cn-c4d2tbk****-vpc.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The IP whitelist for public network access. IP whitelists are supported only for Internet endpoints and are not supported for VPC endpoints.
   * 
   * - If no IP whitelist is configured, all IP address ranges are allowed to access the MSMQ for RocketMQ queue broker over the Internet by default.
   * - If an IP whitelist is configured, only IP addresses in the whitelist are allowed to access the MSMQ for RocketMQ queue broker over the Internet.
   * 
   * This field is no longer recommended. Use the internetInfo.ipWhitelist field instead.
   * 
   * @example
   * 192.168.x.x/24
   */
  ipWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'endpointId',
      endpointType: 'endpointType',
      endpointUrl: 'endpointUrl',
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointType: 'string',
      endpointUrl: 'string',
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

export class GetInstanceResponseBodyDataNetworkInfoInternetInfo extends $dara.Model {
  /**
   * @remarks
   * The Internet bandwidth specification. Unit: Mbit/s.
   * 
   * @example
   * 1
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The billing type for public network usage.
   * 
   * @example
   * payByBandwidth
   */
  flowOutType?: string;
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * The instance supports VPC access by default. If public network access is enabled, ApsaraMQ for RocketMQ charges fees for public downstream bandwidth. For more information about billing, see [Public network access fees](https://help.aliyun.com/document_detail/427240.html).
   * 
   * @example
   * enable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The IP whitelist for public network access.
   * 
   * - If the IP whitelist is not configured, all IP address ranges are allowed to access the ApsaraMQ for RocketMQ broker over the public network by default.
   * - If the IP whitelist is configured, only the IP addresses in the whitelist are allowed to access the ApsaraMQ for RocketMQ broker over the public network.
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

export class GetInstanceResponseBodyDataNetworkInfoVpcInfoVSwitches extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6gwtbn6etadpvz7****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
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

export class GetInstanceResponseBodyDataNetworkInfoVpcInfo extends $dara.Model {
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-hp35r2hc3a3sv8q2sb16
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the instance.
   * 
   * <notice>This field is not recommended. Use the vSwitches field instead. For compatibility, this field currently returns only one vSwitch.</notice>
   * 
   * @example
   * vsw-uf6gwtbn6etadpvz7****
   * 
   * @deprecated
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of vSwitches.
   */
  vSwitches?: GetInstanceResponseBodyDataNetworkInfoVpcInfoVSwitches[];
  /**
   * @remarks
   * The ID of the VPC associated with the instance.
   * 
   * @example
   * vpc-uf6of9452b2pba82c****
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
      vSwitches: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNetworkInfoVpcInfoVSwitches },
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

export class GetInstanceResponseBodyDataNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * The endpoint information.
   */
  endpoints?: GetInstanceResponseBodyDataNetworkInfoEndpoints[];
  /**
   * @remarks
   * The public network information of the instance.
   */
  internetInfo?: GetInstanceResponseBodyDataNetworkInfoInternetInfo;
  /**
   * @remarks
   * The VPC information.
   */
  vpcInfo?: GetInstanceResponseBodyDataNetworkInfoVpcInfo;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      internetInfo: 'internetInfo',
      vpcInfo: 'vpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNetworkInfoEndpoints },
      internetInfo: GetInstanceResponseBodyDataNetworkInfoInternetInfo,
      vpcInfo: GetInstanceResponseBodyDataNetworkInfoVpcInfo,
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
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

export class GetInstanceResponseBodyDataProductInfo extends $dara.Model {
  /**
   * @remarks
   * The adaptive elasticity.
   * 
   * @example
   * false
   */
  adaptiveElasticity?: boolean;
  /**
   * @remarks
   * Indicates whether burstable elastic capacity beyond the base specification is enabled for seamless scaling.
   * 
   * This parameter takes effect only when the value of supportAutoScaling is enable, which means the instance supports enabling elastic capacity.
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The capacity mode.
   * 
   * @example
   * provisioned
   */
  capacityType?: string;
  /**
   * @remarks
   * The cross-region replication mode.
   * 
   * @example
   * async_cross_az
   */
  drReplicationMode?: string;
  /**
   * @remarks
   * The maximum interval for scheduled messages. Unit: seconds.
   * 
   * @example
   * 3456000
   */
  maxDelayTime?: number;
  /**
   * @remarks
   * The message retention period. Unit: hours.
   * 
   * For the value range, see [Limits](https://help.aliyun.com/document_detail/440347.html) > Resource Quotas > Message retention period.
   * 
   * The message storage of ApsaraMQ for RocketMQ is fully serverless and elastic. You are charged based on the actual storage space used. You can control the storage capacity by adjusting the message retention period. For more information, see [Storage fees](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The message processing specification. For the TPS upper limit of message sending and receiving, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
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
   * 3000
   */
  provisionedCapacity?: number;
  /**
   * @remarks
   * The ratio of message sending to message receiving.
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
   * The storage encryption key.
   * 
   * @example
   * xxxxx
   */
  storageSecretKey?: string;
  /**
   * @remarks
   * Indicates whether the burstable elastic capability beyond the base specification is enabled.
   * 
   * 
   * After the burstable elastic capability is enabled, ApsaraMQ for RocketMQ allows the instance to exceed the TPS limit of the base specification within a certain range. Additional elastic specification fees are charged for the portion that exceeds the base specification. For more information about billing, see [Computing capability fees](https://help.aliyun.com/document_detail/427237.html).
   * 
   * 
   * > Only instances of specific specifications support the burstable elastic capability. For more information about supported instances, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  supportAutoScaling?: boolean;
  /**
   * @remarks
   * Indicates whether the message trace feature is enabled.
   * - true: The message trace feature is enabled.
   * - false: The message trace feature is disabled.
   * 
   * <props="intl">This parameter does not take effect. Instances support the message trace feature by default regardless of whether this parameter is enabled.
   * <props="china">This parameter takes effect only for Serverless instances. If the message trace feature is enabled, message trace fees are incurred. For more information about billing, see [Serverless billing](https://help.aliyun.com/document_detail/2586280.html).
   * 
   * <props="china">For pay-as-you-go and subscription instances, this parameter does not take effect. The message trace feature is supported by default regardless of whether this parameter is enabled.
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
      maxDelayTime: 'maxDelayTime',
      messageRetentionTime: 'messageRetentionTime',
      msgProcessSpec: 'msgProcessSpec',
      provisionedCapacity: 'provisionedCapacity',
      sendReceiveRatio: 'sendReceiveRatio',
      storageEncryption: 'storageEncryption',
      storageSecretKey: 'storageSecretKey',
      supportAutoScaling: 'supportAutoScaling',
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveElasticity: 'boolean',
      autoScaling: 'boolean',
      capacityType: 'string',
      drReplicationMode: 'string',
      maxDelayTime: 'number',
      messageRetentionTime: 'number',
      msgProcessSpec: 'string',
      provisionedCapacity: 'number',
      sendReceiveRatio: 'number',
      storageEncryption: 'boolean',
      storageSecretKey: 'string',
      supportAutoScaling: 'boolean',
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

export class GetInstanceResponseBodyDataSoftware extends $dara.Model {
  /**
   * @remarks
   * The upgrade time window, in the format of HH:mm-HH:mm.
   * 
   * @example
   * 02:00-06:00
   * 
   * @deprecated
   */
  maintainTime?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 5.0-rmq-20230619-1
   */
  softwareVersion?: string;
  /**
   * @remarks
   * The upgrade method.
   * 
   * @example
   * auto
   */
  upgradeMethod?: string;
  static names(): { [key: string]: string } {
    return {
      maintainTime: 'maintainTime',
      softwareVersion: 'softwareVersion',
      upgradeMethod: 'upgradeMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintainTime: 'string',
      softwareVersion: 'string',
      upgradeMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
   * 
   * @example
   * value
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

export class GetInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account information.
   */
  accountInfo?: GetInstanceResponseBodyDataAccountInfo;
  /**
   * @remarks
   * The access control information.
   */
  aclInfo?: GetInstanceResponseBodyDataAclInfo;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled.
   * 
   * @example
   * false
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The BID of the sales channel for the commodity.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The commodity code of an MSMQ for RocketMQ 5.x series instance, such as ons_rmqsub_public_cn.
   * 
   * @example
   * ons_rmqsub_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created. The value is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance expires. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-09-01 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * **[Deprecated]** The extended configuration. This field is no longer recommended. Use the productInfo, internetInfo, and aclInfo fields instead.
   * 
   * @deprecated
   */
  extConfig?: GetInstanceResponseBodyDataExtConfig;
  /**
   * @remarks
   * The number of consumer groups.
   * 
   * @example
   * 10
   */
  groupCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The capacity information.
   */
  instanceQuotas?: GetInstanceResponseBodyDataInstanceQuotas[];
  /**
   * @remarks
   * The network information.
   */
  networkInfo?: GetInstanceResponseBodyDataNetworkInfo;
  /**
   * @remarks
   * The payment type of the instance.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The extended configuration of the instance.
   */
  productInfo?: GetInstanceResponseBodyDataProductInfo;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the instance was released. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-09-07 00:00:00
   */
  releaseTime?: string;
  /**
   * @remarks
   * The remarks for the instance.
   * 
   * @example
   * This is remark for instance.
   */
  remark?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm3tmjruyribi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary series code of the instance. For differences between primary series, see [Product selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * @example
   * standard
   */
  seriesCode?: string;
  /**
   * @remarks
   * The service code of the instance. The service code for MSMQ for RocketMQ is rmq.
   * 
   * @example
   * rmq
   */
  serviceCode?: string;
  /**
   * @remarks
   * The instance software information.
   */
  software?: GetInstanceResponseBodyDataSoftware;
  /**
   * @remarks
   * The time when the instance was started. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The sub-series code of the instance. For differences between sub-series, see [Product selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * @example
   * cluster_ha
   */
  subSeriesCode?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tags?: GetInstanceResponseBodyDataTags[];
  /**
   * @remarks
   * The number of topics.
   * 
   * @example
   * 10
   */
  topicCount?: number;
  /**
   * @remarks
   * The time when the instance was last modified. The value is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-02 00:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user to whom the instance belongs.
   * 
   * @example
   * 111111111111111
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'accountInfo',
      aclInfo: 'aclInfo',
      autoRenew: 'autoRenew',
      autoRenewPeriod: 'autoRenewPeriod',
      bid: 'bid',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      expireTime: 'expireTime',
      extConfig: 'extConfig',
      groupCount: 'groupCount',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      instanceQuotas: 'instanceQuotas',
      networkInfo: 'networkInfo',
      paymentType: 'paymentType',
      productInfo: 'productInfo',
      regionId: 'regionId',
      releaseTime: 'releaseTime',
      remark: 'remark',
      resourceGroupId: 'resourceGroupId',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
      software: 'software',
      startTime: 'startTime',
      status: 'status',
      subSeriesCode: 'subSeriesCode',
      tags: 'tags',
      topicCount: 'topicCount',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: GetInstanceResponseBodyDataAccountInfo,
      aclInfo: GetInstanceResponseBodyDataAclInfo,
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      bid: 'string',
      commodityCode: 'string',
      createTime: 'string',
      expireTime: 'string',
      extConfig: GetInstanceResponseBodyDataExtConfig,
      groupCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceQuotas: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataInstanceQuotas },
      networkInfo: GetInstanceResponseBodyDataNetworkInfo,
      paymentType: 'string',
      productInfo: GetInstanceResponseBodyDataProductInfo,
      regionId: 'string',
      releaseTime: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      software: GetInstanceResponseBodyDataSoftware,
      startTime: 'string',
      status: 'string',
      subSeriesCode: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataTags },
      topicCount: 'number',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.accountInfo && typeof (this.accountInfo as any).validate === 'function') {
      (this.accountInfo as any).validate();
    }
    if(this.aclInfo && typeof (this.aclInfo as any).validate === 'function') {
      (this.aclInfo as any).validate();
    }
    if(this.extConfig && typeof (this.extConfig as any).validate === 'function') {
      (this.extConfig as any).validate();
    }
    if(Array.isArray(this.instanceQuotas)) {
      $dara.Model.validateArray(this.instanceQuotas);
    }
    if(this.networkInfo && typeof (this.networkInfo as any).validate === 'function') {
      (this.networkInfo as any).validate();
    }
    if(this.productInfo && typeof (this.productInfo as any).validate === 'function') {
      (this.productInfo as any).validate();
    }
    if(this.software && typeof (this.software as any).validate === 'function') {
      (this.software as any).validate();
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

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The response result.
   */
  data?: GetInstanceResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Each request has a unique ID, which you can use to troubleshoot and locate issues.
   * 
   * @example
   * 05AB7FBD-F1D3-5D87-BF78-BD782249****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

