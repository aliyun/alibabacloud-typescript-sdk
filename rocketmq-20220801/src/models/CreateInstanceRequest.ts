// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestNetworkInfoInternetInfo extends $dara.Model {
  /**
   * @remarks
   * The Internet bandwidth. Unit: MB/s.
   * 
   * This parameter is required only if you set flowOutType to payByBandwidth.
   * 
   * Valid values: 1 to 1000.
   * 
   * @example
   * 100
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The metering method of Internet usage.
   * 
   * Valid values:
   * 
   * *   payByBandwidth: pay-by-bandwidth. This value is valid only if you enable Internet access.
   * *   payByTraffic: pay-by-traffic. This value is valid only if you enable Internet access.
   * *   uninvolved: No metering method is involved. This value is valid only if you disable Internet access.
   * 
   * This parameter is required.
   * 
   * @example
   * uninvolved
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
   * By default, ApsaraMQ for RocketMQ allows you to access instances in VPCs. If you enable Internet access for an instance, you can access the instance over the Internet. After you enable this feature, you are charged for outbound Internet traffic. For more information, see [Internet access fees](https://help.aliyun.com/document_detail/427240.html).
   * 
   * This parameter is required.
   * 
   * @example
   * disable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The whitelist that includes the CIDR blocks that are allowed to access the ApsaraMQ for RocketMQ broker over the Internet. This parameter can be configured only if you use the public endpoint to access the instance.
   * 
   * *   If you do not configure an IP address whitelist, all CIDR blocks are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * *   If you configure an IP address whitelist, only the CIDR blocks in the whitelist are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
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
   * The ID of the vSwitch with which the instance is associated.
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
   * The ID of the security group to which the instance belongs.
   * 
   * @example
   * sg-bp17hpmgz96tvnsdy6so
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the instance is associated. If you want to specify multiple vSwitches, separate the vSwitches with vertical bars (|).
   * 
   * >  After you create an ApsaraMQ for RocketMQ instance, you cannot change the vSwitch with which the instance is associated. If you want to change the vSwitch with which the instance is associated, you must release the instance and purchase a new instance.
   * 
   * >  We recommend that you configure vSwitches instead of this parameter.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv*******
   * 
   * @deprecated
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitches.
   * 
   * >  After you create an ApsaraMQ for RocketMQ instance, you cannot change the vSwitch with which the instance is associated. If you want to change the vSwitch with which the instance is associated, you must release the instance and purchase a new instance.
   * 
   * >  This parameter is required. We recommend that you configure this parameter instead of vSwitchId.
   */
  vSwitches?: CreateInstanceRequestNetworkInfoVpcInfoVSwitches[];
  /**
   * @remarks
   * The ID of the VPC with which the instance to be created is associated.
   * 
   * >  After you create an ApsaraMQ for RocketMQ instance, you cannot change the VPC with which the instance is associated. If you want to change the VPC with which the instance is associated, you must release the instance and create a new instance.
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
   * The Internet-related configurations.
   * 
   * This parameter is required.
   */
  internetInfo?: CreateInstanceRequestNetworkInfoInternetInfo;
  /**
   * @remarks
   * The virtual private cloud (VPC)-related configurations.
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
   * Specifies whether to enable the elastic TPS feature for the instance.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * After you enable the elastic TPS feature for an ApsaraMQ for RocketMQ instance, you can use a specific amount of TPS that exceeds the specification limit. You are charged for the elastic TPS feature. For more information, see [Computing fees](https://help.aliyun.com/document_detail/427237.html).
   * 
   * >  The elastic TPS feature is supported only by instances of specific editions. For more information, see [Instance editions](https://help.aliyun.com/document_detail/444715.html).
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
   * For information about the valid values of this parameter, see the "Limits on resource quotas" section of the [Limits](https://help.aliyun.com/document_detail/440347.html) topic.
   * 
   * ApsaraMQ for RocketMQ supports serverless scaling of message storage. You are charged storage fees based on your actual storage usage. You can change the retention period of messages to manage storage capacity. For more information, see [Storage fees](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The computing specification that specifies the messaging transactions per second (TPS) of the instance. For more information, see [Instance editions](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
  provisionedCapacity?: number;
  /**
   * @remarks
   * The ratio of the message sending TPS to the messaging TPS of the instance.
   * 
   * For example, if the maximum messaging TPS of an instance is 1,000 and the ratio of the message sending TPS to the messaging TPS of the instance is 0.8, the maximum message sending TPS of the instance is 800 and the maximum message receiving TPS is 200.
   * 
   * Valid values: 0 to 1. Default value: 0.5.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Specifies whether to enable the encryption at rest feature.
   * 
   * @example
   * false
   */
  storageEncryption?: boolean;
  /**
   * @remarks
   * The key for encryption at rest.
   * 
   * @example
   * xxx
   */
  storageSecretKey?: string;
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
   * The `key` of the tag.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The `value` of the tag.
   * 
   * @example
   * bbb
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
   * Specifies whether to enable auto-renewal for the instance. This parameter takes effect only if you set paymentType to Subscription. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal cycle of the instance. This parameter takes effect only if you set autoRenew to true. Unit: months.
   * 
   * Valid values:
   * 
   * *   Monthly renewal: 1, 2, 3, 6, and 12
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The commodity code. Valid values:
   * 
   * *   ons_rmqpost_public_intl: pay-as-you-go
   * *   ons_rmqsub_public_intl: subscription
   * *   ons_rmqsrvlesspost_public_intl: serverless instance
   * serverless instance requires this parameter
   * 
   * @example
   * ons_ rmqpost_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name of the instance that you want to create.
   * 
   * If you leave this parameter empty, the instance ID is used as the instance name.
   * 
   * @example
   * rmq-cn-72u3048uxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The information about the network.
   * 
   * This parameter is required.
   */
  networkInfo?: CreateInstanceRequestNetworkInfo;
  /**
   * @remarks
   * The billing method of the instance. ApsaraMQ for RocketMQ supports the subscription and pay-as-you-go billing methods.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo: This billing method allows you to use resources before you pay for the resources.
   * *   Subscription: This billing method allows you to use resources after you pay for the resources.
   * 
   * For more information, see [Billing methods](https://help.aliyun.com/document_detail/427234.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The subscription duration of the instance. This parameter takes effect only if you set paymentType to Subscription.
   * 
   * Valid values:
   * 
   * *   Monthly subscription: 1, 2, 3, 4, 5, and 6
   * *   Yearly subscription: 1, 2, and 3
   * 
   * @example
   * 3
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
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The information about instance specifications.
   */
  productInfo?: CreateInstanceRequestProductInfo;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzy6pist7uuna
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance. For information about the differences among primary edition instances, see [Instance selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   * 
   * >  After you create an instance, you can only upgrade the primary edition of the instance. The following editions are sorted in ascending order: Standard Edition, Professional Edition, Enterprise Platinum Edition. For example, you can upgrade an instance from Standard Edition to Professional Edition, but you cannot downgrade an instance from Professional Edition to Standard Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  seriesCode?: string;
  /**
   * @remarks
   * The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
   * 
   * This parameter is required.
   * 
   * @example
   * rmq
   */
  serviceCode?: string;
  /**
   * @remarks
   * The sub-category edition of the instance. For information about the differences among sub-category edition instances, see [Instance selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * Valid values:
   * 
   * *   cluster_ha: Cluster High-availability Edition
   * *   single_node: Standalone Edition
   * *   serverless: serverless
   * 
   * If you set seriesCode to ultimate, you can set this parameter only to cluster_ha.
   * 
   * >  After you create an instance, you cannot change the sub-category edition of the instance.
   * 
   * Valid values:
   * 
   * *   serverless: serverless
   * *   cluster_ha: Cluster High-availability Edition
   * *   single_node: Standalone Edition
   * 
   * This parameter is required.
   * 
   * @example
   * cluster_ha
   */
  subSeriesCode?: string;
  /**
   * @remarks
   * The tags that you want to add to the instance.
   */
  tags?: CreateInstanceRequestTags[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value of this parameter, but you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * c2c5d1274a8d4317a13bc5b0d4******
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
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

