// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyDataAccountInfo extends $dara.Model {
  /**
   * @remarks
   * The username of the instance. If you access a ApsaraMQ for RocketMQ instance over the Internet, you must configure the username and password of the instance in the SDK code for authentication.
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
   * The authentication type of the instance. This parameter is no longer in use. We recommend that you configure aclTypes.
   * 
   * Valid values:
   * 
   * - default: intelligent identity authentication
   * 
   * - apache_acl:access control list (ACL) identity authentication**
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
   * Indicates whether the authentication-free in VPCs feature is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * Valid value:
   * 
   * *   default: intelligent authentication
   * 
   * @example
   * default
   */
  aclType?: string;
  /**
   * @remarks
   * Specifies whether to enable the elastic TPS feature for the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * This parameter is valid only when the supportAutoScaling parameter is set to enable.
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The Internet bandwidth. Unit: MB/s.
   * 
   * @example
   * 10
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The metering method of Internet usage.
   * 
   * Valid values:
   * 
   * *   PayByTraffic: pay-by-traffic
   * *   paybybandwidth: pay-by-bandwidth
   * *   uninvolved: N/A
   * 
   * @example
   * payByBandwidth
   */
  flowOutType?: string;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * By default, you can access ApsaraMQ for RocketMQ instances in virtual private clouds (VPCs). If you enable the Internet access feature, you are charged for Internet outbound bandwidth. For more information, see [Internet access fees](https://help.aliyun.com/document_detail/427240.html).
   * 
   * @example
   * enable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The retention period of messages. Unit: hours.
   * 
   * For information about the valid values of this parameter, see the "Limits on resource quotas" section in [Usage limits](https://help.aliyun.com/document_detail/440347.html).
   * 
   * The storage of messages in ApsaraMQ for RocketMQ is serverless and scalable. You are charged for message storage based on your actual usage. You can change the retention period of messages to adjust storage capacity. For more information, see [Storage fee](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The computing specification that is used to send and receive messages. For information about the upper limit of TPS, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
  /**
   * @remarks
   * The ratio between sent messages and received messages in the instance.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Specifies whether the elastic TPS feature is supported by the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * After you enable the elastic TPS feature for a ApsaraMQ for RocketMQ instance, you can use a specific amount of TPS that exceeds the specification limit. You are charged for the elastic TPS feature. For more information, see [Computing fee](https://help.aliyun.com/document_detail/427237.html).
   * 
   * > The elastic TPS feature is supported only by specific instance editions. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
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
   * The number of topics that are free of charge on the instance.
   * 
   * @example
   * 20
   */
  freeCount?: number;
  /**
   * @remarks
   * The quota name.
   * 
   * Valid value:
   * 
   * *   TOPIC_COUNT: the number of topics that can be created on the instance
   * 
   * @example
   * TOPIC_COUNT
   */
  quotaName?: string;
  /**
   * @remarks
   * The total number of topics on the instance.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of used topics on the instance.
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
   * @example
   * ep-bpxxx
   */
  endpointId?: string;
  /**
   * @remarks
   * The type of the endpoint that is used to access the instance.
   * 
   * Valid values:
   * 
   * *   TCP_VPC: VPC endpoint
   * *   TCP_INTERNET: public endpoint
   * 
   * @example
   * TCP_INTERNET
   */
  endpointType?: string;
  /**
   * @remarks
   * The endpoint that is used to access the instance.
   * 
   * @example
   * rmq-cn-c4d2tbk****-vpc.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The whitelist that includes the IP addresses that are allowed to access the ApsaraMQ for RocketMQ broker over the Internet. This parameter can be configured only if you use the public endpoint to access the instance.
   * 
   * *   If you do not configure an IP address whitelist, all CIDR blocks are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * *   If you configure an IP address whitelist, only the IP addresses in the whitelist are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * 
   * We recommend that you configure internetInfo.ipWhitelist instead of this parameter.
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
   * The Internet bandwidth. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The metering method for Internet usage.
   * 
   * Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth. If the Internet access feature is enabled, specify this value for the parameter.
   * *   uninvolved: N/A. If the Internet access feature is not enabled, specify this value for the parameter.
   * 
   * @example
   * payByBandwidth
   */
  flowOutType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Internet access feature.
   * 
   * Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * By default, ApsaraMQ for RocketMQ instances are accessed in virtual private clouds (VPCs). If you enable the Internet access feature, you are charged for Internet outbound bandwidth. For more information, see [Internet access fee](https://help.aliyun.com/document_detail/427240.html).
   * 
   * @example
   * enable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The whitelist that includes the IP addresses that are allowed to access the ApsaraMQ for RocketMQ broker.
   * 
   * *   If this parameter is not configured, all IP addresses are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * *   If this parameter is configured, only the IP addresses that are included in the whitelist can access the ApsaraMQ for RocketMQ broker over the Internet.
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
   * The ID of the vSwitch with which the instance is associated.
   * 
   * @example
   * vsw-uf6gwtbn6etadpvz7****
   * 
   * @deprecated
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitches.
   */
  vSwitches?: GetInstanceResponseBodyDataNetworkInfoVpcInfoVSwitches[];
  /**
   * @remarks
   * The ID of the VPC with which the instance is associated.
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
   * The endpoints.
   */
  endpoints?: GetInstanceResponseBodyDataNetworkInfoEndpoints[];
  /**
   * @remarks
   * The information about the Internet.
   */
  internetInfo?: GetInstanceResponseBodyDataNetworkInfoInternetInfo;
  /**
   * @remarks
   * The virtual private cloud (VPC) information.
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
   * Specifies whether to enable the elastic TPS feature for the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * This parameter is valid only when the supportAutoScaling parameter is set to enable.
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  capacityType?: string;
  /**
   * @remarks
   * The retention period of messages. Unit: hours.
   * 
   * For information about the valid values of this parameter, see the "Limits on resource quotas" section in [Usage limits](https://help.aliyun.com/document_detail/440347.html).
   * 
   * The storage of messages in ApsaraMQ for RocketMQ is serverless and scalable. You are charged for message storage based on your actual usage. You can change the retention period of messages to adjust storage capacity. For more information, see [Storage fee](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The computing specification that is used to send and receive messages. For information about the upper limit of TPS, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
  provisionedCapacity?: number;
  /**
   * @remarks
   * The ratio between sent messages and received messages in the instance.
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
   * Specifies whether to enable the elastic TPS feature for the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * After you enable the elastic TPS feature for a ApsaraMQ for RocketMQ instance, you can use a specific amount of TPS that exceeds the specification limit. You are charged for the elastic TPS feature. For more information, see [Computing fee](https://help.aliyun.com/document_detail/427237.html).
   * 
   * > The elastic TPS feature is supported by only specific instance editions. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  supportAutoScaling?: boolean;
  /**
   * @remarks
   * Indicates whether the message trace feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is not in use. By default, the message trace feature is enabled for ApsaraMQ for RocketMQ instances, regardless of whether this parameter is configured.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'autoScaling',
      capacityType: 'capacityType',
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
      autoScaling: 'boolean',
      capacityType: 'string',
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
   * The period of upgrade time.
   * 
   * @example
   * 02:00-06:00
   */
  maintainTime?: string;
  /**
   * @remarks
   * The version of software.
   * 
   * @example
   * 5.0-rmq-20230619-1
   */
  softwareVersion?: string;
  /**
   * @remarks
   * The upgrade method.
   * 
   * Valid values:
   * 
   * - Auto: automatic upgrade
   * 
   * - Manual: manual upgrade
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
   * The tag key of the resource.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
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
   * The information about access control.
   */
  aclInfo?: GetInstanceResponseBodyDataAclInfo;
  /**
   * @remarks
   * The business ID (BID) of the commodity.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
   * 
   * @example
   * ons_rmqsub_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2022-09-01 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended configurations. We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
   * 
   * @deprecated
   */
  extConfig?: GetInstanceResponseBodyDataExtConfig;
  /**
   * @remarks
   * The number of groups.
   * 
   * @example
   * 10
   */
  groupCount?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance quotas.
   */
  instanceQuotas?: GetInstanceResponseBodyDataInstanceQuotas[];
  /**
   * @remarks
   * The network information.
   */
  networkInfo?: GetInstanceResponseBodyDataNetworkInfo;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The extended configurations of the instance.
   */
  productInfo?: GetInstanceResponseBodyDataProductInfo;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the instance was released.
   * 
   * @example
   * 2022-09-07 00:00:00
   */
  releaseTime?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * This is remark for instance.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3tmjruyribi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance. For information about the differences between primary edition instances, see [Instance selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   * 
   * @example
   * standard
   */
  seriesCode?: string;
  /**
   * @remarks
   * The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
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
   * The time when the instance was started.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * Valid values:
   * 
   * *   RELEASED
   * *   RUNNING
   * *   STOPPED
   * *   CHANGING
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The sub-category edition of the instance. For information about the differences between sub-category edition instances, see [Instance selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * Valid values:
   * 
   * *   cluster_ha: Cluster High-availability Edition
   * *   single_node: Standalone Edition
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
   * The time when the instance was last modified.
   * 
   * @example
   * 2022-08-02 00:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user who owns the instance.
   * 
   * @example
   * 111111111111111
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'accountInfo',
      aclInfo: 'aclInfo',
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
   * The error code returned if the call failed.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
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
   * The HTTP status code returned.
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
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 05AB7FBD-F1D3-5D87-BF78-BD782249****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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

