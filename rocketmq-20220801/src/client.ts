// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddDisasterRecoveryItemRequestTopics extends $dara.Model {
  /**
   * @remarks
   * Consumer group ID, required for ACTIVE_ACTIVE bidirectional backup
   * 
   * @example
   * GID_xxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The order in which messages are delivered to the target instance. The parameter values ​​are as follows:
   *   - Concurrently: concurrent delivery
   *   - Orderly: sequential delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * Instance ID, an instance ID will be automatically generated when `instanceType` is `EXTERNAL_ROCKETMQ`, and it can be obtained by querying the backup plan.
   * 
   * @example
   * rmq-cn-em93y94xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Disaster recovery topic name, required
   * 
   * @example
   * Topic_xxx
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequestConsumeRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer still fails to consume a message after the message is retried for a specified number of times, the message is delivered to a dead-letter topic for subsequent business recovery or troubleshooting. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 16
   */
  maxRetryTimes?: number;
  /**
   * @remarks
   * The retry policy. For more information, see [Message retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * Valid values:
   * 
   * *   FixedRetryPolicy: Failed messages are retried at a fixed interval.
   * *   DefaultRetryPolicy: Failed messages are retried at incremental intervals as the number of retries increases.
   * 
   * This parameter is required.
   * 
   * @example
   * DefaultRetryPolicy
   */
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetTopic: 'deadLetterTargetTopic',
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetTopic: 'string',
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDisasterRecoveryPlanRequestInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * Property key
   * 
   * @example
   * aaa
   */
  propertyKey?: string;
  /**
   * @remarks
   * Property value
   * 
   * @example
   * bbb
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'propertyKey',
      propertyValue: 'propertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDisasterRecoveryPlanRequestInstances extends $dara.Model {
  /**
   * @remarks
   * Authentication method. Not required for instanceType of ALIYUN_ROCKETMQ and version 4.0
   *   - NO_AUTH: No authentication required
   *   - ACL_AUTH: ACL authentication
   * 
   * @example
   * ACL_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * Endpoint URL, not required for instanceType of ALIYUN_ROCKETMQ, but required for EXTERNAL_ROCKETMQ
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * Instance ID, not required for instanceType of EXTERNAL_ROCKETMQ, but required for ALIYUN_ROCKETMQ
   * 
   * @example
   * rmq-cn-******
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance role, either primary or secondary
   *   - ACTIVE: Primary
   *   - PASSIVE: Secondary
   * 
   * @example
   * PASSIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Message filtering properties. When messages are synchronized to the target cluster, this property will be automatically added for SQL filtering during message consumption.
   */
  messageProperty?: CreateDisasterRecoveryPlanRequestInstancesMessageProperty;
  /**
   * @remarks
   * Network type, not required for instanceType of ALIYUN_ROCKETMQ, but required for EXTERNAL_ROCKETMQ
   * Parameter values are as follows:
   *   - TCP_INTERNET: TCP public network
   *   - TCP_VPC: TCP VPC (Virtual Private Cloud)
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * Authentication password, required when authType is ACL_AUTH. Not required for instanceType of ALIYUN_ROCKETMQ
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * Region where the instance is located
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Security group ID, required only when the `instanceType` is EXTERNAL_ROCKETMQ and `networkType` is TCP_VPC.
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Authentication username, required when authType is ACL_AUTH
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * The ID of the switch associated with the instance, required only when the `instanceType` is EXTERNAL_ROCKETMQ and `networkType` is TCP_VPC.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the private network associated with the created instance. The instanceType instance type is only EXTERNAL_ROCKETMQ. It is required when the networkType is TCP_VPC.
   * 
   * @example
   * vpc-wz9qt50xhtj9krb******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      endpointUrl: 'endpointUrl',
      instanceId: 'instanceId',
      instanceRole: 'instanceRole',
      instanceType: 'instanceType',
      messageProperty: 'messageProperty',
      networkType: 'networkType',
      password: 'password',
      regionId: 'regionId',
      securityGroupId: 'securityGroupId',
      username: 'username',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      endpointUrl: 'string',
      instanceId: 'string',
      instanceRole: 'string',
      instanceType: 'string',
      messageProperty: CreateDisasterRecoveryPlanRequestInstancesMessageProperty,
      networkType: 'string',
      password: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      username: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.messageProperty && typeof (this.messageProperty as any).validate === 'function') {
      (this.messageProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * This parameter is required.
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
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
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'autoScaling',
      messageRetentionTime: 'messageRetentionTime',
      msgProcessSpec: 'msgProcessSpec',
      sendReceiveRatio: 'sendReceiveRatio',
      storageEncryption: 'storageEncryption',
      storageSecretKey: 'storageSecretKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: 'boolean',
      messageRetentionTime: 'number',
      msgProcessSpec: 'string',
      sendReceiveRatio: 'number',
      storageEncryption: 'boolean',
      storageSecretKey: 'string',
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

export class GetConsumerGroupResponseBodyDataConsumeRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer still fails to consume a message after the message is retried for a specified number of times, the message is delivered to a dead-letter topic for subsequent business recovery or troubleshooting. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 16
   */
  maxRetryTimes?: number;
  /**
   * @remarks
   * The retry policy.
   * 
   * Valid values:
   * 
   * *   FixedRetryPolicy
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Failed messages are retried at a fixed interval
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   DefaultRetryPolicy
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Failed messages are retried at incremental intervals as the number of retries increases
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * DefaultRetryPolicy
   */
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetTopic: 'deadLetterTargetTopic',
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetTopic: 'string',
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consumption retry policy that you want to configure for the consumer group. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   */
  consumeRetryPolicy?: GetConsumerGroupResponseBodyDataConsumeRetryPolicy;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The time when the consumer group was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The message delivery order of the consumer group.
   * 
   * Valid values:
   * 
   * *   Concurrently
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     concurrent delivery
   * 
   *     <!-- -->
   * 
   * *   Orderly
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     ordered delivery
   * 
   *     <!-- -->
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * Maximum received message tps
   * 
   * @example
   * 1000
   */
  maxReceiveTps?: number;
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
   * The remarks on the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The state of the consumer group.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * 
   *     <!-- -->
   * 
   *     : The consumer group is
   * 
   *     <!-- -->
   * 
   *     running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   CREATING
   * 
   *     <!-- -->
   * 
   *     : The consumer group is
   * 
   *     <!-- -->
   * 
   *     being created
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The time when the consumer group was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      consumerGroupId: 'consumerGroupId',
      createTime: 'createTime',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      maxReceiveTps: 'maxReceiveTps',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: GetConsumerGroupResponseBodyDataConsumeRetryPolicy,
      consumerGroupId: 'string',
      createTime: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      maxReceiveTps: 'number',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.consumeRetryPolicy && typeof (this.consumeRetryPolicy as any).validate === 'function') {
      (this.consumeRetryPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupLagResponseBodyDataTotalLag extends $dara.Model {
  /**
   * @remarks
   * Delivery delay time, in seconds
   * 
   * @example
   * 12
   */
  deliveryDuration?: number;
  /**
   * @remarks
   * The number of messages being consumed.
   * 
   * @example
   * 1
   */
  inflightCount?: number;
  /**
   * @remarks
   * Last consumption time
   * 
   * @example
   * 1735629607846
   */
  lastConsumeTimestamp?: number;
  /**
   * @remarks
   * Ready message count
   * 
   * @example
   * 1
   */
  readyCount?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryDuration: 'deliveryDuration',
      inflightCount: 'inflightCount',
      lastConsumeTimestamp: 'lastConsumeTimestamp',
      readyCount: 'readyCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryDuration: 'number',
      inflightCount: 'number',
      lastConsumeTimestamp: 'number',
      readyCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupLagResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Consumer Group ID
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Backlog for each topic
   */
  topicLagMap?: { [key: string]: DataTopicLagMapValue };
  /**
   * @remarks
   * Total lag count
   */
  totalLag?: GetConsumerGroupLagResponseBodyDataTotalLag;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      regionId: 'regionId',
      topicLagMap: 'topicLagMap',
      totalLag: 'totalLag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
      topicLagMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataTopicLagMapValue },
      totalLag: GetConsumerGroupLagResponseBodyDataTotalLag,
    };
  }

  validate() {
    if(this.topicLagMap) {
      $dara.Model.validateMap(this.topicLagMap);
    }
    if(this.totalLag && typeof (this.totalLag as any).validate === 'function') {
      (this.totalLag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * 192.168.50.191@19908#-2093249153#1534215565#40385215750900
   */
  clientId?: string;
  /**
   * @remarks
   * The public IP address of the host.
   * 
   * @example
   * xx.xx.xx.xx
   */
  egressIp?: string;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * nginx
   */
  hostname?: string;
  /**
   * @remarks
   * The language used by the client.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The consumption mode of the consumer group. Valid values:
   * 
   * *   BROADCASTING: broadcasting consumption
   * *   CLUSTERING: clustering consumption
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The client version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      egressIp: 'egressIp',
      hostname: 'hostname',
      language: 'language',
      messageModel: 'messageModel',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      egressIp: 'string',
      hostname: 'string',
      language: 'string',
      messageModel: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * GID_inspector_group
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @remarks
   * The type of the filter expression. Valid values:
   * 
   * *   SQL: filters messages by using SQL expressions.
   * *   TAG: filters messages by using tags.
   * 
   * @example
   * UNSPECIFIED
   */
  filterExpressionType?: string;
  /**
   * @remarks
   * The consumption mode of the consumer group. Valid values:
   * 
   * *   BROADCASTING: broadcasting consumption
   * *   CLUSTERING: clustering consumption
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The subscription status. Valid values:
   * 
   * *   ONLINE: The consumer group is online. If the consumer group contains multiple consumers, this value is returned if at least one of the consumers is online.
   * *   OFFLINE: The consumer group is offline. If the consumer group contains multiple consumers, this value is returned only if all consumers are offline.
   * 
   * @example
   * ONLINE
   */
  subscriptionStatus?: string;
  /**
   * @remarks
   * The topic to which the consumer group subscribes.
   * 
   * @example
   * Topic_normal_inspector
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      filterExpression: 'filterExpression',
      filterExpressionType: 'filterExpressionType',
      messageModel: 'messageModel',
      subscriptionStatus: 'subscriptionStatus',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      filterExpression: 'string',
      filterExpressionType: 'string',
      messageModel: 'string',
      subscriptionStatus: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupSubscriptionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The connection details.
   */
  connectionDTO?: GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO;
  /**
   * @remarks
   * The subscription details.
   */
  subscriptionDTO?: GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO;
  static names(): { [key: string]: string } {
    return {
      connectionDTO: 'connectionDTO',
      subscriptionDTO: 'subscriptionDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDTO: GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO,
      subscriptionDTO: GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO,
    };
  }

  validate() {
    if(this.connectionDTO && typeof (this.connectionDTO as any).validate === 'function') {
      (this.connectionDTO as any).validate();
    }
    if(this.subscriptionDTO && typeof (this.subscriptionDTO as any).validate === 'function') {
      (this.subscriptionDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStackResponseBodyDataStacks extends $dara.Model {
  /**
   * @remarks
   * Thread id.
   * 
   * @example
   * 123
   */
  thread?: string;
  /**
   * @remarks
   * Stack Information.
   */
  tracks?: string[];
  static names(): { [key: string]: string } {
    return {
      thread: 'thread',
      tracks: 'tracks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thread: 'string',
      tracks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tracks)) {
      $dara.Model.validateArray(this.tracks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStackResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Stack Information.
   */
  stacks?: GetConsumerStackResponseBodyDataStacks[];
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      regionId: 'regionId',
      stacks: 'stacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
      stacks: { 'type': 'array', 'itemType': GetConsumerStackResponseBodyDataStacks },
    };
  }

  validate() {
    if(Array.isArray(this.stacks)) {
      $dara.Model.validateArray(this.stacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryItemResponseBodyDataTopics extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * xxx_reserve_group
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The order in which messages are delivered to the target instance. The parameter values ​​are as follows:
   *   - Concurrently: concurrent delivery
   *   - Orderly: sequential delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-wwo3xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * regionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * order_push_xxx
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryItemResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the topic mapping task was created.
   * 
   * @example
   * 2024-06-24 02:57:31
   */
  createTime?: string;
  /**
   * @remarks
   * Additional Information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the topic mapping
   * 
   * @example
   * 100070284
   */
  itemId?: number;
  /**
   * @remarks
   * The topic mapping task status.
   * 
   * @example
   * RUNNING
   */
  itemStatus?: string;
  /**
   * @remarks
   * The ID of the global message backup plan.
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * Topics included in the backup mapping
   */
  topics?: GetDisasterRecoveryItemResponseBodyDataTopics[];
  /**
   * @remarks
   * The time when the topic mapping task was last updated.
   * 
   * @example
   * 2024-09-26 02:13:10
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      extInfo: 'extInfo',
      itemId: 'itemId',
      itemStatus: 'itemStatus',
      planId: 'planId',
      topics: 'topics',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'number',
      itemStatus: 'string',
      planId: 'number',
      topics: { 'type': 'array', 'itemType': GetDisasterRecoveryItemResponseBodyDataTopics },
      updateTime: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * Property key
   * 
   * @example
   * xxx
   */
  propertyKey?: string;
  /**
   * @remarks
   * Property value
   * 
   * @example
   * xxx
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'propertyKey',
      propertyValue: 'propertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryPlanResponseBodyDataInstances extends $dara.Model {
  /**
   * @remarks
   * Authentication method. Not required for instanceType of ALIYUN_ROCKETMQ and version 4.0
   *   - NO_AUTH: No authentication required
   *   - ACL_AUTH: ACL authentication
   * 
   * @example
   * ACL_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * Endpoint URL, not required for instanceType of ALIYUN_ROCKETMQ, but required for EXTERNAL_ROCKETMQ
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-gpz3qtcdxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance role, either primary or secondary 
   *   - ACTIVE: Primary
   *   - PASSIVE: Secondary
   * 
   * @example
   * ACTIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Message filtering properties. When messages are synchronized to the target cluster, this property will be automatically added for SQL filtering during message consumption.
   */
  messageProperty?: GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty;
  /**
   * @remarks
   * Network type, not required for instanceType of ALIYUN_ROCKETMQ, but required for EXTERNAL_ROCKETMQ Parameter values are as follows:
   *   - TCP_INTERNET: TCP public network
   *   - TCP_VPC: TCP VPC (Virtual Private Cloud)
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * Authentication password, required when authType is ACL_AUTH. Not required for instanceType of ALIYUN_ROCKETMQ
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Security group ID, required only when the instanceType is EXTERNAL_ROCKETMQ and networkType is TCP_VPC.
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Authentication username, required when authType is ACL_AUTH
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * The ID of the switch associated with the instance, required only when the instanceType is EXTERNAL_ROCKETMQ and networkType is TCP_VPC.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the private network associated with the created instance. The instanceType instance type is only EXTERNAL_ROCKETMQ. It is required when the networkType is TCP_VPC.
   * 
   * @example
   * vpc-wz9qt50xhtj9krb******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      endpointUrl: 'endpointUrl',
      instanceId: 'instanceId',
      instanceRole: 'instanceRole',
      instanceType: 'instanceType',
      messageProperty: 'messageProperty',
      networkType: 'networkType',
      password: 'password',
      regionId: 'regionId',
      securityGroupId: 'securityGroupId',
      username: 'username',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      endpointUrl: 'string',
      instanceId: 'string',
      instanceRole: 'string',
      instanceType: 'string',
      messageProperty: GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty,
      networkType: 'string',
      password: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      username: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.messageProperty && typeof (this.messageProperty as any).validate === 'function') {
      (this.messageProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryPlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic synchronization of consumption progress.
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * The time when the backup plan was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * Additional Information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * Instances involved in the backup plan
   */
  instances?: GetDisasterRecoveryPlanResponseBodyDataInstances[];
  /**
   * @remarks
   * The describe of the global message backup plan.
   * 
   * @example
   * xxxx
   */
  planDesc?: string;
  /**
   * @remarks
   * The ID of the global message backup plan.
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * The name of the global message backup plan.
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * The status of the global message backup plan.
   * 
   * @example
   * RUNNING
   */
  planStatus?: string;
  /**
   * @remarks
   * The type of the global message backup plan.
   * values are as follows:
   *   - ACTIVE_PASSIVE: One-way backup
   *   - ACTIVE_ACTIVE: Two-way backup
   * 
   * @example
   * ACTIVE_PASSIVE
   */
  planType?: string;
  /**
   * @remarks
   * Switch for synchronizing consumption progress
   * 
   * @example
   * true
   */
  syncCheckpointEnabled?: boolean;
  /**
   * @remarks
   * The time when the backup plan was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoSyncCheckpoint: 'autoSyncCheckpoint',
      createTime: 'createTime',
      extInfo: 'extInfo',
      instances: 'instances',
      planDesc: 'planDesc',
      planId: 'planId',
      planName: 'planName',
      planStatus: 'planStatus',
      planType: 'planType',
      syncCheckpointEnabled: 'syncCheckpointEnabled',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncCheckpoint: 'boolean',
      createTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instances: { 'type': 'array', 'itemType': GetDisasterRecoveryPlanResponseBodyDataInstances },
      planDesc: 'string',
      planId: 'number',
      planName: 'string',
      planStatus: 'string',
      planType: 'string',
      syncCheckpointEnabled: 'boolean',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
      endpointType: 'endpointType',
      endpointUrl: 'endpointUrl',
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      messageRetentionTime: 'messageRetentionTime',
      msgProcessSpec: 'msgProcessSpec',
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
      messageRetentionTime: 'number',
      msgProcessSpec: 'string',
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

export class GetInstanceAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the account.
   * 
   * Valid values:
   * 
   * *   DISABLE
   * *   ENABLE
   * 
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @remarks
   * The password of the account.
   * 
   * @example
   * *************
   */
  password?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      password: 'string',
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

export class GetInstanceAclResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   * 
   * Valid values:
   * 
   * *   apache_acl: open source access control list (ACL)
   * *   default: the default account of the instance
   * 
   * @example
   * apache_acl
   */
  aclType?: string;
  /**
   * @remarks
   * The type of operations that can be performed on the resource.
   */
  actions?: string[];
  /**
   * @remarks
   * The decision result of the authorization.
   * 
   * @example
   * Allow
   */
  decision?: string;
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
   * The IP address whitelists.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource on which the permissions are granted.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource on which the permissions are granted.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * abc
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      actions: 'actions',
      decision: 'decision',
      instanceId: 'instanceId',
      ipWhitelists: 'ipWhitelists',
      regionId: 'regionId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      instanceId: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhitelistResponseBodyData extends $dara.Model {
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
   * The IP address whitelists.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      ipWhitelists: 'ipWhitelists',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * {}
   */
  body?: string;
  /**
   * @remarks
   * The size of the message body.
   * 
   * @example
   * 123
   */
  bodySize?: number;
  /**
   * @remarks
   * The client on which the message was produced.
   * 
   * @example
   * xxx.xx.xxx.xx
   */
  bornHost?: string;
  /**
   * @remarks
   * The time when the message was generated.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
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
   * The sharding key. This parameter is returned only for ordered messages.
   * 
   * @example
   * xx
   */
  messageGroup?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 01BE87E485F0C7808C04543CAF00000001
   */
  messageId?: string;
  /**
   * @remarks
   * The message keys.
   */
  messageKeys?: string[];
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The broker on which the message was stored.
   * 
   * @example
   * xxx.xx.xxx.xx
   */
  storeHost?: string;
  /**
   * @remarks
   * The time when the message was stored.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  storeTime?: string;
  /**
   * @remarks
   * The default system attributes.
   */
  systemProperties?: { [key: string]: string };
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * The user attributes.
   */
  userProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      bodySize: 'bodySize',
      bornHost: 'bornHost',
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageGroup: 'messageGroup',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      messageType: 'messageType',
      regionId: 'regionId',
      storeHost: 'storeHost',
      storeTime: 'storeTime',
      systemProperties: 'systemProperties',
      topicName: 'topicName',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bodySize: 'number',
      bornHost: 'string',
      bornTime: 'string',
      instanceId: 'string',
      messageGroup: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      messageType: 'string',
      regionId: 'string',
      storeHost: 'string',
      storeTime: 'string',
      systemProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      topicName: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageKeys)) {
      $dara.Model.validateArray(this.messageKeys);
    }
    if(this.systemProperties) {
      $dara.Model.validateMap(this.systemProperties);
    }
    if(this.userProperties) {
      $dara.Model.validateMap(this.userProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation time of the topic.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the instance to which the topic belongs.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum TPS for message sending.
   * 
   * @example
   * 1000
   */
  maxSendTps?: number;
  /**
   * @remarks
   * The type of messages in the topic.
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional messages
   * *   FIFO: ordered messages
   * *   DELAY: scheduled or delayed messages
   * *   NORMAL: normal messages
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional messages
   * *   FIFO: ordered messages
   * *   DELAY: scheduled or delayed messages
   * *   NORMAL: normal messages
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The region ID to which the instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Remark information of the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The topic status.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * Last modification time of the topic.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceId: 'instanceId',
      maxSendTps: 'maxSendTps',
      messageType: 'messageType',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      topicName: 'topicName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      maxSendTps: 'number',
      messageType: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      topicName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataBrokerInfoOperations extends $dara.Model {
  /**
   * @remarks
   * Operation time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  operateTime?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'operateTime',
      operateType: 'operateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'string',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataBrokerInfo extends $dara.Model {
  /**
   * @remarks
   * Delay status.
   * 
   * @example
   * SUCCESS
   */
  delayStatus?: string;
  /**
   * @remarks
   * Operation list.
   */
  operations?: GetTraceResponseBodyDataBrokerInfoOperations[];
  /**
   * @remarks
   * Preset delivery time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  presetDelayTime?: string;
  /**
   * @remarks
   * Withdraw scheduled message request result
   * 
   * @example
   * RECALL_OK
   */
  recallResult?: string;
  static names(): { [key: string]: string } {
    return {
      delayStatus: 'delayStatus',
      operations: 'operations',
      presetDelayTime: 'presetDelayTime',
      recallResult: 'recallResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStatus: 'string',
      operations: { 'type': 'array', 'itemType': GetTraceResponseBodyDataBrokerInfoOperations },
      presetDelayTime: 'string',
      recallResult: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosDeadLetterInfo extends $dara.Model {
  /**
   * @remarks
   * MessageId.
   * 
   * @example
   * 7F000001001F7A4F0F29463F0376047D
   */
  messageId?: string;
  /**
   * @remarks
   * Arrival time in the dead letter queue.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  toDlqTime?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * Register_Sync
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'messageId',
      toDlqTime: 'toDlqTime',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      toDlqTime: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosRecordsOperations extends $dara.Model {
  /**
   * @remarks
   * Whether it is a dead letter message.
   * 
   * @example
   * true
   */
  deadMessage?: boolean;
  /**
   * @remarks
   * Invisible time, milliseconds.
   * 
   * @example
   * 100
   */
  invisibleTime?: number;
  /**
   * @remarks
   * Operation time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  operateTime?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      deadMessage: 'deadMessage',
      invisibleTime: 'invisibleTime',
      operateTime: 'operateTime',
      operateType: 'operateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadMessage: 'boolean',
      invisibleTime: 'number',
      operateTime: 'string',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosRecords extends $dara.Model {
  /**
   * @remarks
   * Client host.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientHost?: string;
  /**
   * @remarks
   * Consume status.
   * 
   * @example
   * SUCCESS
   */
  consumeStatus?: string;
  /**
   * @remarks
   * Whether to consume fifo.
   * 
   * @example
   * true
   */
  fifoEnable?: boolean;
  /**
   * @remarks
   * Operation list.
   */
  operations?: GetTraceResponseBodyDataConsumerInfosRecordsOperations[];
  /**
   * @remarks
   * POP_CK
   * 
   * @example
   * 123
   */
  popCk?: string;
  /**
   * @remarks
   * Consumer name.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientHost: 'clientHost',
      consumeStatus: 'consumeStatus',
      fifoEnable: 'fifoEnable',
      operations: 'operations',
      popCk: 'popCk',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHost: 'string',
      consumeStatus: 'string',
      fifoEnable: 'boolean',
      operations: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfosRecordsOperations },
      popCk: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfos extends $dara.Model {
  /**
   * @remarks
   * Consume status.
   * 
   * @example
   * SUCCESS
   */
  consumeStatus?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * GID_inspector_group
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Dead letter info.
   */
  deadLetterInfo?: GetTraceResponseBodyDataConsumerInfosDeadLetterInfo;
  /**
   * @remarks
   * Whether it is a dead letter message.
   * 
   * @example
   * true
   */
  deadMessage?: boolean;
  /**
   * @remarks
   * Consumer record list.
   */
  records?: GetTraceResponseBodyDataConsumerInfosRecords[];
  static names(): { [key: string]: string } {
    return {
      consumeStatus: 'consumeStatus',
      consumerGroupId: 'consumerGroupId',
      deadLetterInfo: 'deadLetterInfo',
      deadMessage: 'deadMessage',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeStatus: 'string',
      consumerGroupId: 'string',
      deadLetterInfo: GetTraceResponseBodyDataConsumerInfosDeadLetterInfo,
      deadMessage: 'boolean',
      records: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfosRecords },
    };
  }

  validate() {
    if(this.deadLetterInfo && typeof (this.deadLetterInfo as any).validate === 'function') {
      (this.deadLetterInfo as any).validate();
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataMessageInfo extends $dara.Model {
  /**
   * @remarks
   * Message body.
   * 
   * @example
   * {}
   */
  body?: string;
  /**
   * @remarks
   * Message born host.
   * 
   * @example
   * x.x.x.x
   */
  bornHost?: string;
  /**
   * @remarks
   * Message born time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-u0t2ygjq505
   */
  instanceId?: string;
  /**
   * @remarks
   * Message grpup.
   * 
   * @example
   * xx
   */
  messageGroup?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 0A79275A00207A4F0F2916C92F9A0B94
   */
  messageId?: string;
  /**
   * @remarks
   * Message keys.
   */
  messageKeys?: string[];
  /**
   * @remarks
   * Message tag.
   * 
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @remarks
   * Message type.
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Message store host.
   * 
   * @example
   * x.x.x.x
   */
  storeHost?: string;
  /**
   * @remarks
   * Message store time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  storeTime?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * Topic_normal_inspector
   */
  topicName?: string;
  /**
   * @remarks
   * Message transaction id.
   * 
   * @example
   * xx
   */
  transactionId?: string;
  /**
   * @remarks
   * Message user properties.
   */
  userProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      bornHost: 'bornHost',
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageGroup: 'messageGroup',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      messageType: 'messageType',
      regionId: 'regionId',
      storeHost: 'storeHost',
      storeTime: 'storeTime',
      topicName: 'topicName',
      transactionId: 'transactionId',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bornHost: 'string',
      bornTime: 'string',
      instanceId: 'string',
      messageGroup: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      messageType: 'string',
      regionId: 'string',
      storeHost: 'string',
      storeTime: 'string',
      topicName: 'string',
      transactionId: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageKeys)) {
      $dara.Model.validateArray(this.messageKeys);
    }
    if(this.userProperties) {
      $dara.Model.validateMap(this.userProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataProducerInfoRecords extends $dara.Model {
  /**
   * @remarks
   * Arrive time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  arriveTime?: string;
  /**
   * @remarks
   * Client host.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientHost?: string;
  /**
   * @remarks
   * Dead-letter queue message ID.
   * 
   * @example
   * 0A79275A00207A4F0F2916C92F9A0B94
   */
  dlqOriginMessageId?: string;
  /**
   * @remarks
   * Dead-letter queue topic.
   * 
   * @example
   * test_topic
   */
  dlqOriginTopic?: string;
  /**
   * @remarks
   * Message source.
   * 
   * @example
   * CONSOLE
   */
  messageSource?: string;
  /**
   * @remarks
   * Producer duration.
   * 
   * @example
   * 100
   */
  produceDuration?: number;
  /**
   * @remarks
   * Producer status.
   * 
   * @example
   * SUCCESS
   */
  produceStatus?: string;
  /**
   * @remarks
   * Producer time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  produceTime?: string;
  /**
   * @remarks
   * The time when the scheduled message withdrawal request was initiated
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  recallTime?: string;
  /**
   * @remarks
   * Producer name.
   * 
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      arriveTime: 'arriveTime',
      clientHost: 'clientHost',
      dlqOriginMessageId: 'dlqOriginMessageId',
      dlqOriginTopic: 'dlqOriginTopic',
      messageSource: 'messageSource',
      produceDuration: 'produceDuration',
      produceStatus: 'produceStatus',
      produceTime: 'produceTime',
      recallTime: 'recallTime',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arriveTime: 'string',
      clientHost: 'string',
      dlqOriginMessageId: 'string',
      dlqOriginTopic: 'string',
      messageSource: 'string',
      produceDuration: 'number',
      produceStatus: 'string',
      produceTime: 'string',
      recallTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataProducerInfo extends $dara.Model {
  /**
   * @remarks
   * The production records.
   */
  records?: GetTraceResponseBodyDataProducerInfoRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetTraceResponseBodyDataProducerInfoRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The broker trace.
   */
  brokerInfo?: GetTraceResponseBodyDataBrokerInfo;
  /**
   * @remarks
   * Consumer trace info.
   */
  consumerInfos?: GetTraceResponseBodyDataConsumerInfos[];
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
   * The message information.
   */
  messageInfo?: GetTraceResponseBodyDataMessageInfo;
  /**
   * @remarks
   * The producer trace.
   */
  producerInfo?: GetTraceResponseBodyDataProducerInfo;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      brokerInfo: 'brokerInfo',
      consumerInfos: 'consumerInfos',
      instanceId: 'instanceId',
      messageInfo: 'messageInfo',
      producerInfo: 'producerInfo',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerInfo: GetTraceResponseBodyDataBrokerInfo,
      consumerInfos: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfos },
      instanceId: 'string',
      messageInfo: GetTraceResponseBodyDataMessageInfo,
      producerInfo: GetTraceResponseBodyDataProducerInfo,
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(this.brokerInfo && typeof (this.brokerInfo as any).validate === 'function') {
      (this.brokerInfo as any).validate();
    }
    if(Array.isArray(this.consumerInfos)) {
      $dara.Model.validateArray(this.consumerInfos);
    }
    if(this.messageInfo && typeof (this.messageInfo as any).validate === 'function') {
      (this.messageInfo as any).validate();
    }
    if(this.producerInfo && typeof (this.producerInfo as any).validate === 'function') {
      (this.producerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableZonesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the zone was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the current zone.
   * 
   * @example
   * cn-qingdao-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the current zone.
   * 
   * @example
   * ha-cn-t9b30w902vm_qrs
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      updateTime: 'updateTime',
      zoneId: 'zoneId',
      zoneName: 'zoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConnectionsResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The ID of the client.
   * 
   * @example
   * 172.17.135.197@17392#1936705963#551717232#9873695589062458
   */
  clientId?: string;
  /**
   * @remarks
   * Host IP/Public IP
   * 
   * @example
   * xx.xx.xx.xx
   */
  egressIp?: string;
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * @example
   * vos
   */
  hostname?: string;
  /**
   * @remarks
   * The language of the client.
   * 
   * @example
   * java
   */
  language?: string;
  /**
   * @remarks
   * Consumption Mode
   * - BROADCASTING
   * - CLUSTERING
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The version of the client.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      egressIp: 'egressIp',
      hostname: 'hostname',
      language: 'language',
      messageModel: 'messageModel',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      egressIp: 'string',
      hostname: 'string',
      language: 'string',
      messageModel: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConnectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client connection list
   */
  connections?: ListConsumerConnectionsResponseBodyDataConnections[];
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
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
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'connections',
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConsumerConnectionsResponseBodyDataConnections },
      consumerGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupSubscriptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether message consumption is consistent. Valid values:
   * 
   * *   false: Unconsumed messages exist in the consumer group.
   * *   true: No unconsumed message exists in the consumer group.
   * 
   * @example
   * true
   */
  consistency?: boolean;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @remarks
   * The type of the filter expression. Valid values:
   * 
   * *   SQL: filters messages by using SQL expressions.
   * *   TAG: filters messages by using tags.
   * 
   * @example
   * SQL
   */
  filterExpressionType?: string;
  /**
   * @remarks
   * The consumption mode of the consumer group. Valid values:
   * 
   * *   BROADCASTING: broadcasting consumption
   * *   CLUSTERING: clustering consumption
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The subscription status. Valid values:
   * 
   * *   ONLINE: The consumer group is online. If the consumer group contains multiple consumers, this value is returned as long as one of the consumers is online.
   * *   OFFLINE: The consumer group is offline. If the consumer group contains multiple consumers, this value is returned only if all consumers are offline.
   * 
   * @example
   * ONLINE
   */
  subscriptionStatus?: string;
  /**
   * @remarks
   * Indicates whether the topic is created.
   * 
   * @example
   * true
   */
  topicCreated?: boolean;
  /**
   * @remarks
   * The topic to which the consumer group subscribes.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consistency: 'consistency',
      consumerGroupId: 'consumerGroupId',
      filterExpression: 'filterExpression',
      filterExpressionType: 'filterExpressionType',
      messageModel: 'messageModel',
      subscriptionStatus: 'subscriptionStatus',
      topicCreated: 'topicCreated',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistency: 'boolean',
      consumerGroupId: 'string',
      filterExpression: 'string',
      filterExpressionType: 'string',
      messageModel: 'string',
      subscriptionStatus: 'string',
      topicCreated: 'boolean',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Consumer group ID.
   * 
   * @example
   * GID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Creation time of the consumer group.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum TPS for message sending.
   * 
   * @example
   * 1000
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The region ID to which the instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Remark information of the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * Status of the consumer group.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Last update time of the consumer group.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      createTime: 'createTime',
      instanceId: 'instanceId',
      maxReceiveTps: 'maxReceiveTps',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      createTime: 'string',
      instanceId: 'string',
      maxReceiveTps: 'number',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consumer groups.
   */
  list?: ListConsumerGroupsResponseBodyDataList[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of returned results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListConsumerGroupsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData extends $dara.Model {
  /**
   * @remarks
   * Latest consumption time
   * 
   * @example
   * 1740724080343
   */
  consumeTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'consumeTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress extends $dara.Model {
  /**
   * @remarks
   * Consumer Group ID
   * 
   * @example
   * GID_TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-3mp3vblzxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Last fetch time
   * 
   * @example
   * 1740724080343
   */
  lastFetchTime?: number;
  /**
   * @remarks
   * Consumption progress data
   */
  progressData?: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * TOPIC_TEST
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      lastFetchTime: 'lastFetchTime',
      progressData: 'progressData',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      lastFetchTime: 'number',
      progressData: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData,
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(this.progressData && typeof (this.progressData as any).validate === 'function') {
      (this.progressData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgressProgressData extends $dara.Model {
  /**
   * @remarks
   * Latest consumption time
   * 
   * @example
   * 1740724080343
   */
  consumeTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'consumeTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress extends $dara.Model {
  /**
   * @remarks
   * Consumer group ID
   * 
   * @example
   * GID_TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-nwy3i065xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Latest fetch time
   * 
   * @example
   * 1740724080343
   */
  lastFetchTime?: number;
  /**
   * @remarks
   * Consumption progress data
   */
  progressData?: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgressProgressData;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Topic name
   * 
   * @example
   * TOPIC_TEST
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      lastFetchTime: 'lastFetchTime',
      progressData: 'progressData',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      lastFetchTime: 'number',
      progressData: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgressProgressData,
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(this.progressData && typeof (this.progressData as any).validate === 'function') {
      (this.progressData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Consumption Progress ID
   * 
   * @example
   * 10000000xx
   */
  checkpointId?: number;
  /**
   * @remarks
   * Backup Mapping ID
   * 
   * @example
   * 10000000xx
   */
  itemId?: number;
  /**
   * @remarks
   * Last synchronization time
   * 
   * @example
   * 1740724080343
   */
  lastSyncTime?: number;
  /**
   * @remarks
   * Backup Plan ID
   * 
   * @example
   * 13000000xx
   */
  planId?: number;
  /**
   * @remarks
   * Source consumption progress
   */
  sourceProgress?: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress;
  /**
   * @remarks
   * Target consumption progress
   */
  targetProgress?: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress;
  static names(): { [key: string]: string } {
    return {
      checkpointId: 'checkpointId',
      itemId: 'itemId',
      lastSyncTime: 'lastSyncTime',
      planId: 'planId',
      sourceProgress: 'sourceProgress',
      targetProgress: 'targetProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpointId: 'number',
      itemId: 'number',
      lastSyncTime: 'number',
      planId: 'number',
      sourceProgress: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress,
      targetProgress: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress,
    };
  }

  validate() {
    if(this.sourceProgress && typeof (this.sourceProgress as any).validate === 'function') {
      (this.sourceProgress as any).validate();
    }
    if(this.targetProgress && typeof (this.targetProgress as any).validate === 'function') {
      (this.targetProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Paged data
   */
  list?: ListDisasterRecoveryCheckpointsResponseBodyDataList[];
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDisasterRecoveryCheckpointsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryItemsResponseBodyDataListTopics extends $dara.Model {
  /**
   * @remarks
   * Consumer group ID
   * 
   * @example
   * group-test
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The order in which messages are delivered to the target instance.
   * 
   * Parameter values are as follows:
   * - Concurrently: concurrent delivery
   * - Orderly: sequential delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-kh43w0olz0c
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic-test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryItemsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-09-20 03:38:28
   */
  createTime?: string;
  /**
   * @remarks
   * Extended information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * Backup plan ID
   * 
   * @example
   * 100070284
   */
  itemId?: number;
  /**
   * @remarks
   * Backup mapping status:
   *   - CREATING (Creating)
   *   - CHANGING (Changing)
   *   - RUNNING (Running)
   *   - MANUAL_STOPPED (Manually Stopped)
   *   - OVERDUE_STOPPED (Stopped Due to Overdue)
   * 
   * @example
   * RUNNING
   */
  itemStatus?: string;
  /**
   * @remarks
   * Mapping ID
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * Topics included in the backup mapping
   */
  topics?: ListDisasterRecoveryItemsResponseBodyDataListTopics[];
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-10-04 02:19:44
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      extInfo: 'extInfo',
      itemId: 'itemId',
      itemStatus: 'itemStatus',
      planId: 'planId',
      topics: 'topics',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'number',
      itemStatus: 'string',
      planId: 'number',
      topics: { 'type': 'array', 'itemType': ListDisasterRecoveryItemsResponseBodyDataListTopics },
      updateTime: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryItemsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Paged data
   */
  list?: ListDisasterRecoveryItemsResponseBodyDataList[];
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request scroll ID.
   * Automatically generated by the system, subsequent pagination requests need to include this return value to continue pagination.
   * 
   * @example
   * B13D0B07-F24B-4790-88D8-D47A38063D00
   */
  scrollId?: string;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scrollId: 'scrollId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDisasterRecoveryItemsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * Property key
   * 
   * @example
   * aaa
   */
  propertyKey?: string;
  /**
   * @remarks
   * Property value
   * 
   * @example
   * bbb
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'propertyKey',
      propertyValue: 'propertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBodyDataListInstances extends $dara.Model {
  /**
   * @remarks
   * Authentication method
   * 
   * @example
   * NO_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * Endpoint URL
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-ot93rbxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance role
   * 
   * @example
   * ACTIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Message property
   */
  messageProperty?: ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty;
  /**
   * @remarks
   * Network type
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * Authentication password
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * The region where the instance is located
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Security group ID
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Authentication username
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * VSwitch ID
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp13docqysrgxtbxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      endpointUrl: 'endpointUrl',
      instanceId: 'instanceId',
      instanceRole: 'instanceRole',
      instanceType: 'instanceType',
      messageProperty: 'messageProperty',
      networkType: 'networkType',
      password: 'password',
      regionId: 'regionId',
      securityGroupId: 'securityGroupId',
      username: 'username',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      endpointUrl: 'string',
      instanceId: 'string',
      instanceRole: 'string',
      instanceType: 'string',
      messageProperty: ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty,
      networkType: 'string',
      password: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      username: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.messageProperty && typeof (this.messageProperty as any).validate === 'function') {
      (this.messageProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic synchronization of consumption progress.
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * Extended information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * Instances involved in the backup plan
   */
  instances?: ListDisasterRecoveryPlansResponseBodyDataListInstances[];
  /**
   * @remarks
   * Plan description
   * 
   * @example
   * xxx
   */
  planDesc?: string;
  /**
   * @remarks
   * Plan ID
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * Plan name
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * Plan status:
   *   - CREATED (Created)
   *   - RUNNING (Running)
   *   - DELETED (Deleted)
   * 
   * @example
   * RUNNING
   */
  planStatus?: string;
  /**
   * @remarks
   * Plan type:
   *   - ACTIVE_PASSIVE (One-way backup)
   *   - ACTIVE_ACTIVE (Two-way backup)
   * 
   * @example
   * ACTIVE_PASSIVE
   */
  planType?: string;
  /**
   * @remarks
   * Sync checkpoint switch
   * 
   * @example
   * true
   */
  syncCheckpointEnabled?: boolean;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoSyncCheckpoint: 'autoSyncCheckpoint',
      createTime: 'createTime',
      extInfo: 'extInfo',
      instances: 'instances',
      planDesc: 'planDesc',
      planId: 'planId',
      planName: 'planName',
      planStatus: 'planStatus',
      planType: 'planType',
      syncCheckpointEnabled: 'syncCheckpointEnabled',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncCheckpoint: 'boolean',
      createTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instances: { 'type': 'array', 'itemType': ListDisasterRecoveryPlansResponseBodyDataListInstances },
      planDesc: 'string',
      planId: 'number',
      planName: 'string',
      planStatus: 'string',
      planType: 'string',
      syncCheckpointEnabled: 'boolean',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Paged data
   */
  list?: ListDisasterRecoveryPlansResponseBodyDataList[];
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Scroll request ID.
   * Automatically generated by the system, subsequent paging requests need to include this result to continue paging.
   * 
   * @example
   * B13D0B07-F24B-4790-88D8-D47A38063D00
   */
  scrollId?: string;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 28
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scrollId: 'scrollId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDisasterRecoveryPlansResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAccountResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The status of the account.
   * Valid values:
   *   - DISABLE
   *   - ENABLE
   * 
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @remarks
   * The account type.
   *   - CUSTOMER
   *   - DEFAULT
   * 
   * @example
   * CUSTOMER
   */
  accountType?: string;
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      accountType: 'accountType',
      instanceId: 'instanceId',
      regionId: 'regionId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountType: 'string',
      instanceId: 'string',
      regionId: 'string',
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

export class ListInstanceAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  list?: ListInstanceAccountResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListInstanceAccountResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAclResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The ACL type.
   * 
   * Valid value:
   * 
   * *   APACHE: open source ACL.
   * 
   * @example
   * APACHE
   */
  aclType?: string;
  /**
   * @remarks
   * The types of the operations that are allowed by the ACL.
   */
  actions?: string[];
  /**
   * @remarks
   * The decision result.
   * 
   * Valid values:
   * 
   * *   Deny: Access is denied.
   * *   Allow: Access is allowed.
   * 
   * @example
   * Allow
   */
  decision?: string;
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
   * The IP address whitelists.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   Group
   * *   Topic
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      actions: 'actions',
      decision: 'decision',
      instanceId: 'instanceId',
      ipWhitelists: 'ipWhitelists',
      regionId: 'regionId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      instanceId: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAclResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  list?: ListInstanceAclResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListInstanceAclResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIpWhitelistResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  list?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataListProductInfo extends $dara.Model {
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
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListInstancesResponseBodyDataListTags extends $dara.Model {
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

export class ListInstancesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the instance. The commodity code of ApsaraMQ for RocketMQ 5.0 instances has a similar format to ons_rmqsub_public_cn.
   * 
   * @example
   * ons_rmqsub_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the version of the instance was updated.
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
   * The number of consumer groups that are created on the instance.
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
   * The product information.
   */
  productInfo?: ListInstancesResponseBodyDataListProductInfo;
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
   * The instance description.
   * 
   * @example
   * This is remark for instance.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance.
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
   * The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
   * 
   * @example
   * rmq
   */
  serviceCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
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
   * The sub-category edition of the instance.
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
  tags?: ListInstancesResponseBodyDataListTags[];
  /**
   * @remarks
   * The number of topics that are created on the instance.
   * 
   * @example
   * 20
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
   * 6W0xz2uPfiwp****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      expireTime: 'expireTime',
      groupCount: 'groupCount',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      paymentType: 'paymentType',
      productInfo: 'productInfo',
      regionId: 'regionId',
      releaseTime: 'releaseTime',
      remark: 'remark',
      resourceGroupId: 'resourceGroupId',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
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
      commodityCode: 'string',
      createTime: 'string',
      expireTime: 'string',
      groupCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      paymentType: 'string',
      productInfo: ListInstancesResponseBodyDataListProductInfo,
      regionId: 'string',
      releaseTime: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      startTime: 'string',
      status: 'string',
      subSeriesCode: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListTags },
      topicCount: 'number',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
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

export class ListInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  list?: ListInstancesResponseBodyDataList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Message body.
   * 
   * @example
   * {}
   */
  body?: string;
  /**
   * @remarks
   * Message body size.
   * 
   * @example
   * 100
   */
  bodySize?: number;
  /**
   * @remarks
   * The client on which messages are produced.
   * 
   * @example
   * xx.xx.xx.xx
   */
  bornHost?: string;
  /**
   * @remarks
   * Message born time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
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
   * The message group. This parameter is returned only for ordered messages.
   * 
   * @example
   * xx
   */
  messageGroup?: string;
  /**
   * @remarks
   * Message Id.
   * 
   * @example
   * 7F000001000114B4340C5ABF94500079
   */
  messageId?: string;
  /**
   * @remarks
   * Message keys.
   */
  messageKeys?: string[];
  /**
   * @remarks
   * The message tag.
   * 
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @remarks
   * Message type.
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The broker on which messages are stored.
   * 
   * @example
   * xx.xx.xx.xx
   */
  storeHost?: string;
  /**
   * @remarks
   * Message store time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  storeTime?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * Message user properties.
   */
  userProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      bodySize: 'bodySize',
      bornHost: 'bornHost',
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageGroup: 'messageGroup',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      messageType: 'messageType',
      regionId: 'regionId',
      storeHost: 'storeHost',
      storeTime: 'storeTime',
      topicName: 'topicName',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bodySize: 'number',
      bornHost: 'string',
      bornTime: 'string',
      instanceId: 'string',
      messageGroup: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      messageType: 'string',
      regionId: 'string',
      storeHost: 'string',
      storeTime: 'string',
      topicName: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageKeys)) {
      $dara.Model.validateArray(this.messageKeys);
    }
    if(this.userProperties) {
      $dara.Model.validateMap(this.userProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  list?: ListMessagesResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The scroll ID of the request.
   * 
   * The ID is automatically generated by the system. The result can be paginated only if this parameter is included in the pagination request.
   * 
   * @example
   * B13D0B07-F24B-4790-88D8-D47A38063D00
   */
  scrollId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scrollId: 'scrollId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricMetaResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Monitoring item tag
   * 
   * @example
   * Bug
   */
  category?: string;
  /**
   * @remarks
   * Monitoring item description
   * 
   * @example
   * Using Serverless Devs to deploy the infrastructure of project:get-userinfo-v1-infrastructure-as-template-project
   */
  description?: string;
  /**
   * @remarks
   * Monitoring item name
   * 
   * @example
   * SendMessageCountPerInstance
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      description: 'description',
      metricName: 'metricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      metricName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Paged data
   */
  list?: ListMetricMetaResponseBodyDataList[];
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total record count
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMetricMetaResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag code.
   * 
   * @example
   * xx
   */
  tagCode?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * xx
   */
  tagValue?: any;
  static names(): { [key: string]: string } {
    return {
      tagCode: 'tagCode',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCode: 'string',
      tagValue: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the ApsaraMQ for RocketMQ instance was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * Indicates whether ApsaraMQ for RocketMQ V4 is activated.
   * 
   * @example
   * true
   */
  supportRocketmqV4?: boolean;
  /**
   * @remarks
   * Indicates whether ApsaraMQ for RocketMQ V5 is activated.
   * 
   * @example
   * true
   */
  supportRocketmqV5?: boolean;
  /**
   * @remarks
   * The region tags.
   */
  tags?: ListRegionsResponseBodyDataTags[];
  /**
   * @remarks
   * The time when the ApsaraMQ for RocketMQ instance was last modified.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      regionId: 'regionId',
      regionName: 'regionName',
      supportRocketmqV4: 'supportRocketmqV4',
      supportRocketmqV5: 'supportRocketmqV5',
      tags: 'tags',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      regionId: 'string',
      regionName: 'string',
      supportRocketmqV4: 'boolean',
      supportRocketmqV5: 'boolean',
      tags: { 'type': 'array', 'itemType': ListRegionsResponseBodyDataTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyDataTagResources extends $dara.Model {
  /**
   * @remarks
   * UID of the resource owner.
   * 
   * @example
   * 1876441048322426
   */
  aliUid?: number;
  /**
   * @remarks
   * Tag category.
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * Resource ID.
   * 
   * @example
   * rmq-cn-pe334n08h08
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * Visibility scope.
   * 
   * @example
   * public
   */
  scope?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'aliUid',
      category: 'category',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      scope: 'scope',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      category: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The position from which the next query starts.
   * 
   * @example
   * d09e2b63e1b12d905b7080ff70
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F00C6A70-C782-5DD6-9D11-0CFC710100C7
   */
  requestId?: string;
  /**
   * @remarks
   * Resource tag relationships.
   */
  tagResources?: ListTagResourcesResponseBodyDataTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      tagResources: 'tagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyDataTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicSubscriptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether message consumption is consistent. Valid values:
   * 
   * *   false: Unconsumed messages exist in the consumer group.
   * *   true: No unconsumed message exists in the consumer group.
   * 
   * @example
   * true
   */
  consistency?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @remarks
   * The type of the filter expression. Valid values: SQL, TAG, and UNSPECIFIED. The value SQL indicates that messages are filtered by using SQL expressions. The value TAG indicates that messages are filtered by using tags. The value UNSPECIFIED indicates that no filter expression type is specified.
   * 
   * @example
   * SQL
   */
  filterExpressionType?: string;
  /**
   * @remarks
   * The consumption mode. Valid values: BROADCASTING and CLUSTERING.
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The subscription status. Valid values: ONLINE and OFFLINE.
   * 
   * @example
   * ONLINE
   */
  subscriptionStatus?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consistency: 'consistency',
      consumerGroupId: 'consumerGroupId',
      filterExpression: 'filterExpression',
      filterExpressionType: 'filterExpressionType',
      messageModel: 'messageModel',
      subscriptionStatus: 'subscriptionStatus',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistency: 'string',
      consumerGroupId: 'string',
      filterExpression: 'string',
      filterExpressionType: 'string',
      messageModel: 'string',
      subscriptionStatus: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum TPS for message sending.
   * 
   * @example
   * 1000
   */
  maxSendTps?: number;
  /**
   * @remarks
   * The type of messages in the topic.
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional messages
   * *   FIFO: ordered messages
   * *   DELAY: scheduled or delayed messages
   * *   NORMAL: normal messages
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The region ID to which the instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Remark information of the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The topic status.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * Last update time of the topic.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceId: 'instanceId',
      maxSendTps: 'maxSendTps',
      messageType: 'messageType',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      topicName: 'topicName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      maxSendTps: 'number',
      messageType: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      topicName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The topics.
   */
  list?: ListTopicsResponseBodyDataList[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of results returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListTopicsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Message born time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
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
   * Message id.
   * 
   * @example
   * 7F00000100207A4F0F294A938F7807AE
   */
  messageId?: string;
  /**
   * @remarks
   * Message keys.
   */
  messageKeys?: string[];
  /**
   * @remarks
   * Message tag.
   * 
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bornTime: 'string',
      instanceId: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageKeys)) {
      $dara.Model.validateArray(this.messageKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Trace list.
   */
  list?: ListTracesResponseBodyDataList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListTracesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupRequestConsumeRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer still fails to consume a message after the maximum number of retries specified for the message is reached, the message is delivered to the dead-letter topic for subsequent business recovery or troubleshooting. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 16
   */
  maxRetryTimes?: number;
  /**
   * @remarks
   * The retry policy. For more information, see [Message retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * Valid values:
   * 
   * *   FixedRetryPolicy: fixed-interval retry. This value is valid only if you set deliveryOrderType to Orderly.
   * *   DefaultRetryPolicy: exponential backoff retry. This value is valid only if you set deliveryOrderType to Concurrently.
   * 
   * This parameter is required.
   * 
   * @example
   * DefaultRetryPolicy
   */
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetTopic: 'deadLetterTargetTopic',
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetTopic: 'string',
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryItemRequestTopics extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group. If you use the two-way backup mode, you must specify this parameter.
   * 
   * @example
   * GID_xxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The method used to deliver messages to the destination instance.
   * 
   * Valid values:
   * 
   * *   Concurrently: concurrent delivery
   * *   Orderly: ordered delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The instance ID. If you set instanceType to EXTERNAL_ROCKETMQ, the system automatically generates an ID for the instance. You can obtain the ID by querying the global message backup plan.
   * 
   * @example
   * rmq-cn-em93y94xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   ALIYUN_ROCKETMQ: ApsaraMQ for RocketMQ instance
   * *   EXTERNAL_ROCKETMQ: open source RocketMQ cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name. You must specify this parameter.
   * 
   * @example
   * Topic_xxx
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryPlanRequestInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * The attribute key.
   * 
   * @example
   * aaa
   */
  propertyKey?: string;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * bbb
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'propertyKey',
      propertyValue: 'propertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryPlanRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The authentication type.
   * 
   * *   NO_AUTH: no authentication
   * *   ACL_AUTH: access control list (ACL)-based authentication
   * 
   * @example
   * NO_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * The instance endpoint. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ.
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-83l3r0xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance role. Valid values:
   * 
   * *   ACTIVE: primary instance
   * *   Passive: secondary instance
   * 
   * @example
   * ACTIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   ALIYUN_ROCKETMQ: ApsaraMQ for RocketMQ instance
   * *   EXTERNAL_ROCKETMQ: open source RocketMQ cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The message attribute. When you synchronize a message to the destination cluster, the system automatically adds the attribute to the message for SQL-based filtering.
   */
  messageProperty?: UpdateDisasterRecoveryPlanRequestInstancesMessageProperty;
  /**
   * @remarks
   * The network type. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ. Valid values:
   * 
   * *   TCP_INTERNET: Internet over TCP
   * *   TCP_VPC: virtual private cloud (VPC) over TCP.
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The password that is used for authentication. This parameter is required only if you set authType to ACL_AUTH.
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ.
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The username that is used for authentication. This parameter is required only if you set authType to ACL_AUTH.
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the instance is associated. If you want to specify multiple vSwitches, separate the vSwitches with vertical bars (|).
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC with which the instance is associated. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ.
   * 
   * @example
   * vpc-wz9qt50xhtj9krb******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      endpointUrl: 'endpointUrl',
      instanceId: 'instanceId',
      instanceRole: 'instanceRole',
      instanceType: 'instanceType',
      messageProperty: 'messageProperty',
      networkType: 'networkType',
      password: 'password',
      regionId: 'regionId',
      securityGroupId: 'securityGroupId',
      username: 'username',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      endpointUrl: 'string',
      instanceId: 'string',
      instanceRole: 'string',
      instanceType: 'string',
      messageProperty: UpdateDisasterRecoveryPlanRequestInstancesMessageProperty,
      networkType: 'string',
      password: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      username: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.messageProperty && typeof (this.messageProperty as any).validate === 'function') {
      (this.messageProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestAclInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   */
  aclTypes?: string[];
  /**
   * @remarks
   * Indicates whether the authentication-free in VPCs feature is enabled.
   * Indicates whether the authentication-free in VPCs feature is enabled.
   * Valid values:
   * - true
   * - false
   * 
   * @example
   * false
   */
  defaultVpcAuthFree?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclTypes: 'aclTypes',
      defaultVpcAuthFree: 'defaultVpcAuthFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateInstanceRequestNetworkInfoInternetInfo extends $dara.Model {
  /**
   * @remarks
   * The whitelist that includes the IP addresses that are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * 
   * *   If you do not configure an IP address whitelist, all CIDR blocks are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * *   If you configure an IP address whitelist, only the IP addresses in the whitelist are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   */
  ipWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateInstanceRequestNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the Internet over which the instance is accessed. This parameter takes effect only if the Internet access feature is enabled for the instance.
   */
  internetInfo?: UpdateInstanceRequestNetworkInfoInternetInfo;
  static names(): { [key: string]: string } {
    return {
      internetInfo: 'internetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetInfo: UpdateInstanceRequestNetworkInfoInternetInfo,
    };
  }

  validate() {
    if(this.internetInfo && typeof (this.internetInfo as any).validate === 'function') {
      (this.internetInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestProductInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the elastic transactions per second (TPS) feature for the instance.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * After you enable the elastic TPS feature for an ApsaraMQ for RocketMQ instance, you can use a specific number of TPS that exceeds the specification limit. You are charged for using the elastic TPS feature. For more information, see [Computing fees](https://help.aliyun.com/document_detail/427237.html).
   * 
   * >  The elastic TPS feature is supported only by specific instance editions. For more information, see [Instance editions](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
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
   * The ratio of the number of messages that you can send to the number of messages that you can receive on the instance.
   * 
   * Value values: 0.25 to 1.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature.
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
      messageRetentionTime: 'messageRetentionTime',
      sendReceiveRatio: 'sendReceiveRatio',
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: 'boolean',
      messageRetentionTime: 'number',
      sendReceiveRatio: 'number',
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

export class DataTopicLagMapValue extends $dara.Model {
  /**
   * @remarks
   * Ready message count
   * 
   * @example
   * 1
   */
  readyCount?: number;
  /**
   * @remarks
   * The number of messages being consumed.
   * 
   * @example
   * 1
   */
  inflightCount?: number;
  /**
   * @remarks
   * Delivery delay time, in seconds
   * 
   * @example
   * 12
   */
  deliveryDuration?: number;
  /**
   * @remarks
   * lastConsumeTimestamp
   * 
   * @example
   * 1735629607846
   */
  lastConsumeTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      readyCount: 'readyCount',
      inflightCount: 'inflightCount',
      deliveryDuration: 'deliveryDuration',
      lastConsumeTimestamp: 'lastConsumeTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readyCount: 'number',
      inflightCount: 'number',
      deliveryDuration: 'number',
      lastConsumeTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDisasterRecoveryItemRequest extends $dara.Model {
  /**
   * @remarks
   * Topics included in the backup mapping. Required.
   */
  topics?: AddDisasterRecoveryItemRequestTopics[];
  static names(): { [key: string]: string } {
    return {
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topics: { 'type': 'array', 'itemType': AddDisasterRecoveryItemRequestTopics },
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDisasterRecoveryItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details, only in the scenario where the user is denied access due to RAM not having permission
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return result, mapping task ID
   * 
   * @example
   * 1300000016
   */
  data?: number;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDisasterRecoveryItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDisasterRecoveryItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDisasterRecoveryItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance is changed.
   * 
   * You can call the [ListResourceGroups](https://www.alibabacloud.com/help/resource-management/latest/listresourcegroups) operation to query existing resource groups.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource. Set this parameter to the ID of the ApsaraMQ for RocketMQ instance whose resource group you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * c2c5d1274a8d4317a13bc5b0d4******
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource.
   * 
   * Set this parameter to **instance**. The value of this parameter cannot be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * consume retry policy
   * 
   * This parameter is required.
   */
  consumeRetryPolicy?: CreateConsumerGroupRequestConsumeRetryPolicy;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * This parameter is required.
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * Maximum received message tps
   * 
   * @example
   * 300
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      deliveryOrderType: 'deliveryOrderType',
      maxReceiveTps: 'maxReceiveTps',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: CreateConsumerGroupRequestConsumeRetryPolicy,
      deliveryOrderType: 'string',
      maxReceiveTps: 'number',
      remark: 'string',
    };
  }

  validate() {
    if(this.consumeRetryPolicy && typeof (this.consumeRetryPolicy as any).validate === 'function') {
      (this.consumeRetryPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
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
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateConsumerGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDisasterRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic synchronization of consumption progress.
   * 
   * > This is effective only when consumption progress synchronization is enabled, i.e., the value of `syncCheckpointEnabled` is true.
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * Instances involved in the backup plan. Required
   */
  instances?: CreateDisasterRecoveryPlanRequestInstances[];
  /**
   * @remarks
   * Plan description
   * 
   * @example
   * xxx
   */
  planDesc?: string;
  /**
   * @remarks
   * Plan name, required
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * Backup plan type, required. Please refer to the [documentation](https://help.aliyun.com/document_detail/2843187.html).
   * Parameter values are as follows:
   *   - ACTIVE_PASSIVE: One-way backup
   *   - ACTIVE_ACTIVE: Two-way backup
   * 
   * @example
   * ACTIVE_ACTIVE
   */
  planType?: string;
  /**
   * @remarks
   * Switch for synchronizing consumption progress
   * 
   * @example
   * true
   */
  syncCheckpointEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSyncCheckpoint: 'autoSyncCheckpoint',
      instances: 'instances',
      planDesc: 'planDesc',
      planName: 'planName',
      planType: 'planType',
      syncCheckpointEnabled: 'syncCheckpointEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncCheckpoint: 'boolean',
      instances: { 'type': 'array', 'itemType': CreateDisasterRecoveryPlanRequestInstances },
      planDesc: 'string',
      planName: 'string',
      planType: 'string',
      syncCheckpointEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDisasterRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details, provided only in scenarios where access is denied due to lack of RAM permissions
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result, which is the backup plan ID
   * 
   * @example
   * 1234
   */
  data?: number;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * C7E8AE3A-219B-52EE-BE32-4036F5xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDisasterRecoveryPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDisasterRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDisasterRecoveryPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
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

export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the created instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  data?: string;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
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
      data: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
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

export class CreateInstanceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * No permission details
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
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
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * 3AE0999C-8DBA-5CEE-8D9A-BE8D4A90DF8D
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAclRequest extends $dara.Model {
  /**
   * @remarks
   * The type of operations that can be performed on the resource.
   * 
   * The following types of operations are supported based on the resource type:
   * 
   * *   Topic: Pub, Sub, and Pub|Sub
   * *   Consumer group: Sub
   * 
   * Valid values:
   * 
   * *   SUB: subscribe
   * *   Pub|Sub: publish and subscribe
   * *   Pub: publish
   * 
   * This parameter is required.
   * 
   * @example
   * Pub
   */
  actions?: string[];
  /**
   * @remarks
   * The decision result of the authorization.
   * 
   * Valid values:
   * 
   * *   Deny
   * *   Allow
   * 
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  decision?: string;
  /**
   * @remarks
   * The IP address whitelists.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The name of the resource on which you want to grant permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource on which you want to grant permissions.
   * 
   * Valid values:
   * 
   * *   Group
   * *   Topic
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      decision: 'decision',
      ipWhitelists: 'ipWhitelists',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
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
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 200
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
   * The request ID.
   * 
   * @example
   * C7E8AE3A-219B-52EE-BE32-4036F5F88833
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceIpWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelists.
   * 
   * This parameter is required.
   */
  ipWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelists: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceIpWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
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
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * InstanceId
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
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A07B41BD-6DD3-5349-9E76-00303DF04BBE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceIpWhitelistResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceIpWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceIpWhitelistResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum TPS for message sending.
   * 
   * @example
   * 1500
   */
  maxSendTps?: number;
  /**
   * @remarks
   * The type of messages in the topic that you want to create.
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional messages
   * *   FIFO: ordered messages
   * *   DELAY: scheduled or delayed messages
   * *   NORMAL: normal messages
   * 
   * >  The type of messages in the topic must be the same as the type of messages that you want to send. For example, if you create a topic whose message type is ordered messages, you can use the topic to send and receive only ordered messages.
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The description of the topic that you want to create.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      maxSendTps: 'maxSendTps',
      messageType: 'messageType',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSendTps: 'number',
      messageType: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Topic.Existed
   */
  code?: string;
  /**
   * @remarks
   * Return result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The topic already exists.
   */
  message?: string;
  /**
   * @remarks
   * Request ID, each request\\"s ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTopicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
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
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConsumerGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The filter expression.
   * 
   * This parameter is required.
   * 
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @remarks
   * The type of the filter expression. Valid values:
   * 
   * *   SQL: filters messages by using SQL expressions.
   * *   TAG: filters messages by using tags.
   * 
   * This parameter is required.
   * 
   * @example
   * TAG
   */
  filterType?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      filterExpression: 'filterExpression',
      filterType: 'filterType',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterExpression: 'string',
      filterType: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 200
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
   * The request ID.
   * 
   * @example
   * 723CDA5C-E25C-5EAF-9601-******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConsumerGroupSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConsumerGroupSubscriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDisasterRecoveryItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details, only in the scenario where the user is denied access due to RAM not having permission
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * DisasterRecoveryItemStatus.Error
   */
  code?: string;
  /**
   * @remarks
   * The return data
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * The current status of the disaster recovery item does not support this operation.
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0B962390-D84B-5D44-8C11-79DFxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDisasterRecoveryItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDisasterRecoveryItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDisasterRecoveryItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDisasterRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DisasterRecoveryPlanStatus.Error
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * The response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The current status of the disaster recovery plan does not support this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDisasterRecoveryPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDisasterRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDisasterRecoveryPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $dara.Model {
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
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 048242AA-BADA-5F29-B2CD-ED9FA344467F
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
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
   * The request ID.
   * 
   * @example
   * 157DF7D4-53FB-58C6-BEBC-A9400E7EF68A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceAclRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource on which the permissions are granted.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource on which the permissions are granted.
   * 
   * Valid values:
   * 
   * *   Group
   * *   Topic
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied due to the reason that the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
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
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7358418D-83BD-507A-8079-*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceIpWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 0.0.0.0/0
   * 
   * @deprecated
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The IP address whitelist.
   */
  ipWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
      ipWhitelists: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceIpWhitelistShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 0.0.0.0/0
   * 
   * @deprecated
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The IP address whitelist.
   */
  ipWhitelistsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
      ipWhitelistsShrink: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
      ipWhitelistsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceIpWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied due to the reason that the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
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
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
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
   * The request ID.
   * 
   * @example
   * 16425867-C948-5A0C-9A24-5259727BE727
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceIpWhitelistResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceIpWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceIpWhitelistResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * topicName
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
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTopicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetConsumerGroupResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
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
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: GetConsumerGroupResponseBodyData,
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

export class GetConsumerGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsumerGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupLagRequest extends $dara.Model {
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * normal-topic-1
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupLagResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetConsumerGroupLagResponseBodyData;
  /**
   * @remarks
   * Dynamic error code
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
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5764C40-FB8C-53AE-B95D-96AB3D0E9375
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetConsumerGroupLagResponseBodyData,
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

export class GetConsumerGroupLagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerGroupLagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsumerGroupLagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetConsumerGroupSubscriptionResponseBodyData[];
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
   * The response code.
   * 
   * @example
   * 200
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
   * The request ID.
   * 
   * @example
   * 157DF7D4-53FB-58C6-BEBC-A9400E7EF68A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: { 'type': 'array', 'itemType': GetConsumerGroupSubscriptionResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupSubscriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerGroupSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsumerGroupSubscriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStackRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.26.76.48@Lqd7dImlp9KJ5V84
   */
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetConsumerStackResponseBodyData;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30F2CBC7-F69D-5D78-9661-0254C9E1FBFA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetConsumerStackResponseBodyData,
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

export class GetConsumerStackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsumerStackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDisasterRecoveryItemResponseBodyData;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetDisasterRecoveryItemResponseBodyData,
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

export class GetDisasterRecoveryItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDisasterRecoveryItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDisasterRecoveryItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDisasterRecoveryPlanResponseBodyData;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7358418D-83BD-507A-8079-611C63E0xxx
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetDisasterRecoveryPlanResponseBodyData,
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

export class GetDisasterRecoveryPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDisasterRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDisasterRecoveryPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
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

export class GetInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account.
   * 
   * If you do not configure this parameter, the default username of the instance is used.
   * 
   * @example
   * test
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

export class GetInstanceAccountResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: GetInstanceAccountResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * Request ID, each request\\"s ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * B5C59E80-FCFC-5796-ABE4-D39EAAE578E4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetInstanceAccountResponseBodyData,
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

export class GetInstanceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceAclRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource on which you want to grant permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource on which you want to grant permissions.
   * 
   * Valid values:
   * 
   * *   Group
   * *   Topic
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceAclResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: GetInstanceAclResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetInstanceAclResponseBodyData,
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

export class GetInstanceAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The  filter IP address whitelists.
   */
  ipWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelists: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhitelistShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The  filter IP address whitelists.
   */
  ipWhitelistsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ipWhitelistsShrink: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelistsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetInstanceIpWhitelistResponseBodyData;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B962390-D84B-5D44-8C11-79DF40299D41
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
      data: GetInstanceIpWhitelistResponseBodyData,
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

export class GetInstanceIpWhitelistResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceIpWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceIpWhitelistResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetMessageDetailResponseBodyData;
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
   * 200
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
   * The request ID.
   * 
   * @example
   * FAEBD71F-E839-52F9-BD7B-8F1290525841
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetMessageDetailResponseBodyData,
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

export class GetMessageDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMessageDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMessageDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetTopicResponseBodyData;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * Request ID, each request\\"s ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
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
      data: GetTopicResponseBodyData,
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

export class GetTopicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTopicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetTraceResponseBodyData;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * 7779A8FC-1BCD-5A1D-A603-C4A9BD8ADC49
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
      data: GetTraceResponseBodyData,
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

export class GetTraceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTraceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   */
  data?: ListAvailableZonesResponseBodyData[];
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
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
   * AF9A8B10-C426-530F-A0DD-96320B39****
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
      data: { 'type': 'array', 'itemType': ListAvailableZonesResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableZonesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAvailableZonesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * MissingPageNumber
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListConsumerConnectionsResponseBodyData;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A3620115-6F1F-5CFB-AA3F-BBD4853B2EC4
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
      data: ListConsumerConnectionsResponseBodyData,
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

export class ListConsumerConnectionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConsumerConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConsumerConnectionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupSubscriptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The topic name. If you do not specify this parameter, all subscriptions of the consumer group are queried.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupSubscriptionsResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: ListConsumerGroupSubscriptionsResponseBodyData[];
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
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
   * The request ID.
   * 
   * @example
   * 5F4D9D5F-625B-59FF-BD4F-DA8284575DB4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: { 'type': 'array', 'itemType': ListConsumerGroupSubscriptionsResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupSubscriptionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConsumerGroupSubscriptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConsumerGroupSubscriptionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the query. If not provided, all consumer groups under the specified instance will be queried.
   * 
   * @example
   * CID-TEST
   */
  filter?: string;
  /**
   * @remarks
   * Page number, indicating which page of results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results to display per page.
   * 
   * Value range: [10, 100].
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListConsumerGroupsResponseBodyData;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Parameter InstanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * Request ID, each request has a unique ID that can be used for troubleshooting and problem localization.
   * 
   * @example
   * 5503A460-98ED-5543-92CF-4853DE28****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
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
      data: ListConsumerGroupsResponseBodyData,
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

export class ListConsumerGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConsumerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConsumerGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter Condition
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * Source Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * Current page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response Data
   */
  data?: ListDisasterRecoveryCheckpointsResponseBodyData;
  /**
   * @remarks
   * Dynamic error code
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
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
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
      data: ListDisasterRecoveryCheckpointsResponseBodyData,
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

export class ListDisasterRecoveryCheckpointsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDisasterRecoveryCheckpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDisasterRecoveryCheckpointsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryItemsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter condition, filter by topicName
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * Page number, indicating which page of the results to query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details, provided only when access is denied due to lack of RAM permissions
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return result
   */
  data?: ListDisasterRecoveryItemsResponseBodyData;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * C115601B-8736-5BBF-AC99-7FEAE12xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListDisasterRecoveryItemsResponseBodyData,
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

export class ListDisasterRecoveryItemsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDisasterRecoveryItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDisasterRecoveryItemsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansRequest extends $dara.Model {
  /**
   * @remarks
   * Filter conditions, filter by backup name and description
   * 
   * @example
   * xxx
   */
  filter?: string;
  instanceId?: string;
  /**
   * @remarks
   * Page number, the page of results to be queried.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied due to the reason that the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return result
   */
  data?: ListDisasterRecoveryPlansResponseBodyData;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 855EF8E6-9C1D-5DE2-9E84-924E13Exxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListDisasterRecoveryPlansResponseBodyData,
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

export class ListDisasterRecoveryPlansResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDisasterRecoveryPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDisasterRecoveryPlansResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the account.
   * 
   * Valid values:
   * 
   * *   DISABLE
   * *   ENABLE
   * 
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @remarks
   * The account type.
   *   - CUSTOMER
   *   - DEFAULT
   * 
   * @example
   * CUSTOMER
   */
  accountType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      accountType: 'accountType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class ListInstanceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
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
   * The data returned.
   */
  data?: ListInstanceAccountResponseBodyData;
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
   * 200
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
   * C115601B-8736-5BBF-AC99-7FEAE1245A80
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListInstanceAccountResponseBodyData,
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

export class ListInstanceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAclRequest extends $dara.Model {
  /**
   * @remarks
   * The condition that you specify to filter the ACLs. If you do not specify this parameter, all ACLs are queried.
   * 
   * @example
   * CID-TEST
   */
  filter?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied due to the reason that the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
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
   * The returned data.
   */
  data?: ListInstanceAclResponseBodyData;
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA4D2F89-E2C8-5F04-936B-60D55B055FA7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListInstanceAclResponseBodyData,
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

export class ListInstanceAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIpWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * IP whitelist.
   * 
   * @example
   * 0.0.0.0/0
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIpWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListInstanceIpWhitelistResponseBodyData;
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
   * 200
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
   * 7358418D-83BD-507A-8079-611C63E05674
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListInstanceIpWhitelistResponseBodyData,
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

export class ListInstanceIpWhitelistResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceIpWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceIpWhitelistResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition that is used to query instances. If you do not configure this parameter, all instances are queried.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  filter?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If you set this parameter to a value smaller than 1, the system uses 1 as the value. If you set this parameter to a value greater than 100000000, the system uses 100000000 as the value.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Value values: 10 to 200.
   * 
   * If you set this parameter to a value smaller than 10, the system uses 10 as the value. If you set this parameter to a value greater than 200, the system uses 200 as the value.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance.
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   */
  seriesCodes?: string[];
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
   * The tags that are used to filter instances.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      seriesCodes: 'seriesCodes',
      storageSecretKey: 'storageSecretKey',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      seriesCodes: { 'type': 'array', 'itemType': 'string' },
      storageSecretKey: 'string',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.seriesCodes)) {
      $dara.Model.validateArray(this.seriesCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition that is used to query instances. If you do not configure this parameter, all instances are queried.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  filter?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If you set this parameter to a value smaller than 1, the system uses 1 as the value. If you set this parameter to a value greater than 100000000, the system uses 100000000 as the value.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Value values: 10 to 200.
   * 
   * If you set this parameter to a value smaller than 10, the system uses 10 as the value. If you set this parameter to a value greater than 200, the system uses 200 as the value.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance.
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   */
  seriesCodesShrink?: string;
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
   * The tags that are used to filter instances.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      seriesCodesShrink: 'seriesCodes',
      storageSecretKey: 'storageSecretKey',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      seriesCodesShrink: 'string',
      storageSecretKey: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * MissingPageNumber
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * PageNumber
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * pageNumber
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
   * Parameter pageNumber is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 84445A20-2B50-5306-A3C0-AF99FC1833C6
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
      data: ListInstancesResponseBodyData,
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

export class ListInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2024-09-09 09:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Message Id.
   * 
   * @example
   * 7F00000100207A4F0F294A938F7807AE
   */
  messageId?: string;
  /**
   * @remarks
   * Message key.
   * 
   * @example
   * XSCBillResult
   */
  messageKey?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scroll ID of the request.
   * 
   * You do not need to configure this parameter for the first page. This parameter is included in the pagination request based on the result returned for the first page.
   * 
   * @example
   * B13D0B07-F24B-4790-88D8-D47A38063D00
   */
  scrollId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2024-09-09 08:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      messageId: 'messageId',
      messageKey: 'messageKey',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scrollId: 'scrollId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      messageId: 'string',
      messageKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBody extends $dara.Model {
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
   * The data returned.
   */
  data?: ListMessagesResponseBodyData;
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
   * 200
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
   * A3531B6A-5A88-52BD-B3C4-A024C3D0AA2E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: ListMessagesResponseBodyData,
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

export class ListMessagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMessagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricMetaRequest extends $dara.Model {
  /**
   * @remarks
   * Page number, indicating which page of the results to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, indicating the maximum number of results per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * Return result
   */
  data?: ListMetricMetaResponseBodyData;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * The topic already exists.
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8B459455-4A35-5796-BA9D-98EF1AB9A931
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
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
      data: ListMetricMetaResponseBodyData,
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

export class ListMetricMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMetricMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMetricMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingPageNumber
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListRegionsResponseBodyData[];
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
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
   * 200
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
   * The request ID.
   * 
   * @example
   * 0B962390-D84B-5D44-8C11-79DF40299D41
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: { 'type': 'array', 'itemType': ListRegionsResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The position from which the next query starts.
   * 
   * @example
   * d09e2b63e1b12d905b7080ff70
   */
  nextToken?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * List of resource IDs, in JSON format.
   * 
   * @example
   * ["rmq-cn-pe334n08h08"]
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * List of tags, in JSON format.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * Return result
   */
  data?: ListTagResourcesResponseBodyData;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * The topic already exists.
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F00C6A70-C782-5DD6-9D11-0CFC710100C7
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
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
      data: ListTagResourcesResponseBodyData,
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

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicSubscriptionsResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: ListTopicSubscriptionsResponseBodyData[];
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * Topic
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92A9BE4E-B794-50C8-979C-0456E4D32943
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: { 'type': 'array', 'itemType': ListTopicSubscriptionsResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicSubscriptionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTopicSubscriptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTopicSubscriptionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the query. If not provided, all topics under the instance will be queried.
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * The message type of the topic.
   */
  messageTypes?: string[];
  /**
   * @remarks
   * Page number, indicating which page of results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results to display per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      messageTypes: 'messageTypes',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the query. If not provided, all topics under the instance will be queried.
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * The message type of the topic.
   */
  messageTypesShrink?: string;
  /**
   * @remarks
   * Page number, indicating which page of results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results to display per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      messageTypesShrink: 'messageTypes',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      messageTypesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTopicsResponseBodyData;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * Request ID, each request has a unique ID that can be used for troubleshooting and problem localization.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
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
      data: ListTopicsResponseBodyData,
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

export class ListTopicsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTopicsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTopicsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-19 10:10:09
   */
  endTime?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * This parameter is required if you set queryType to MESSAGE_ID.
   * 
   * @example
   * 0100163E0EC1F1965C04C7906700000000
   */
  messageId?: string;
  /**
   * @remarks
   * The message key.
   * 
   * This parameter is required if you set queryType to MESSAGE_ID.
   * 
   * @example
   * order_ceating
   */
  messageKey?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type.
   * 
   * Valid values:
   * 
   * *   MESSAGE_ID
   * *   MESSAGE_KEY
   * *   TOPIC
   * 
   * This parameter is required.
   * 
   * @example
   * MESSAGE_ID
   */
  queryType?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-10 10:42:11
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      messageId: 'messageId',
      messageKey: 'messageKey',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      queryType: 'queryType',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      messageId: 'string',
      messageKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListTracesResponseBodyData;
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
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
   * Id of the request
   * 
   * @example
   * EDFF77E1-1ED1-5389-B6A8-651D9433BBE5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: ListTracesResponseBodyData,
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

export class ListTracesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTracesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTracesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumeOffsetRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the consumer offset is reset.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  resetTime?: string;
  /**
   * @remarks
   * The method that is used to reset the consumer offset. Valid values: LATEST_OFFSET and SPECIFIED_TIME.
   * 
   * @example
   * LATEST_OFFSET
   */
  resetType?: string;
  static names(): { [key: string]: string } {
    return {
      resetTime: 'resetTime',
      resetType: 'resetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resetTime: 'string',
      resetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumeOffsetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The returned dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The returned dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F9A95891-EAD4-5A2B-8A30-676CD18921AF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
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
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumeOffsetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetConsumeOffsetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetConsumeOffsetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDisasterRecoveryItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied due to the reason that the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * DisasterRecoveryItemStatus.Error
   */
  code?: string;
  /**
   * @remarks
   * Return result
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * The current status of the disaster recovery item does not support this operation.
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * C7E8AE3A-219B-52EE-BE32-4036Fxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDisasterRecoveryItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDisasterRecoveryItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDisasterRecoveryItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDisasterRecoveryItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * DisasterRecoveryItemStatus.Error
   */
  code?: string;
  /**
   * @remarks
   * Return result
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * The current status of the disaster recovery item does not support this operation.
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A07B41BD-6DD3-5349-9E76-00303xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDisasterRecoveryItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDisasterRecoveryItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDisasterRecoveryItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDisasterRecoveryCheckpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error Code
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * Result Data
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic Error Code
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
   * HTTP Status Code
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error Message
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 7358418D-83BD-507A-8079-611C63E05674
   */
  requestId?: string;
  /**
   * @remarks
   * Success or Not
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDisasterRecoveryCheckpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncDisasterRecoveryCheckpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncDisasterRecoveryCheckpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs, in the JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * rmq-cn-pe3355cs707
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource.
   * 
   * Set this parameter to **instance**. The value of this parameter cannot be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * tag, in JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B962390-D84B-5D44-8C11-79DF40299D41
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to delete all tags.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs, in the JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * rmq-cn-pe3355cs707
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource.
   * 
   * Set this parameter to **instance**. The value of this parameter cannot be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of tags.
   * 
   * @example
   * ["key1", "key2"]
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      regionId: 'regionId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter deliveryOrderType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07B41BD-6DD3-5349-9E76-00303DF04BBE
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The new consumption retry policy of the consumer group. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * This parameter is required.
   */
  consumeRetryPolicy?: UpdateConsumerGroupRequestConsumeRetryPolicy;
  /**
   * @remarks
   * The new message delivery method of the consumer group.
   * 
   * Valid values:
   * 
   * *   Concurrently: concurrent delivery
   * *   Orderly: ordered delivery
   * 
   * This parameter is required.
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The maximum TPS for message sending.
   * 
   * @example
   * 100
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The new description of the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      deliveryOrderType: 'deliveryOrderType',
      maxReceiveTps: 'maxReceiveTps',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: UpdateConsumerGroupRequestConsumeRetryPolicy,
      deliveryOrderType: 'string',
      maxReceiveTps: 'number',
      remark: 'string',
    };
  }

  validate() {
    if(this.consumeRetryPolicy && typeof (this.consumeRetryPolicy as any).validate === 'function') {
      (this.consumeRetryPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidDeliveryOrderType
   */
  code?: string;
  /**
   * @remarks
   * The result returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Parameter deliveryOrderType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is unique for each request and can be used for troubleshooting and problem localization.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConsumerGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryItemRequest extends $dara.Model {
  /**
   * @remarks
   * The topics involved in the topic mapping.
   */
  topics?: UpdateDisasterRecoveryItemRequestTopics[];
  static names(): { [key: string]: string } {
    return {
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topics: { 'type': 'array', 'itemType': UpdateDisasterRecoveryItemRequestTopics },
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * The response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C32BED2-FA9F-50AD-9DA7-8B70E26C9D0D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDisasterRecoveryItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDisasterRecoveryItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic synchronization of consumption progress.
   * 
   * > This is effective only when consumption progress synchronization is enabled, i.e., the value of `syncCheckpointEnabled` is true.
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * The instances that are involved in the global message backup plan.
   */
  instances?: UpdateDisasterRecoveryPlanRequestInstances[];
  /**
   * @remarks
   * The description of the global message backup plan.
   * 
   * @example
   * xxx
   */
  planDesc?: string;
  /**
   * @remarks
   * The name of the global message backup plan.
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * The type of the global message backup plan. Valid values:
   * 
   * *   ACTIVE_PASSIVE: geo-disaster recovery
   * *   ACTIVE_ACTIVE: active geo-redundancy
   * 
   * @example
   * ACTIVE_PASSIVE
   */
  planType?: string;
  /**
   * @remarks
   * Switch for synchronizing consumption progress
   * 
   * @example
   * true
   */
  syncCheckpointEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSyncCheckpoint: 'autoSyncCheckpoint',
      instances: 'instances',
      planDesc: 'planDesc',
      planName: 'planName',
      planType: 'planType',
      syncCheckpointEnabled: 'syncCheckpointEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncCheckpoint: 'boolean',
      instances: { 'type': 'array', 'itemType': UpdateDisasterRecoveryPlanRequestInstances },
      planDesc: 'string',
      planName: 'string',
      planType: 'string',
      syncCheckpointEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DisasterRecoveryPlanStatus.Error
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * The response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The current status of the disaster recovery plan does not support this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A07B41BD-6DD3-5349-9E76-00303Dxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisasterRecoveryPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDisasterRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDisasterRecoveryPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The access control list for the instance.
   */
  aclInfo?: UpdateInstanceRequestAclInfo;
  /**
   * @remarks
   * The updated name of the instance.
   * 
   * @example
   * test_instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The updated network information about the instance.
   */
  networkInfo?: UpdateInstanceRequestNetworkInfo;
  /**
   * @remarks
   * Additional configurations of the instance.
   */
  productInfo?: UpdateInstanceRequestProductInfo;
  /**
   * @remarks
   * The updated description of the instance.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      aclInfo: 'aclInfo',
      instanceName: 'instanceName',
      networkInfo: 'networkInfo',
      productInfo: 'productInfo',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclInfo: UpdateInstanceRequestAclInfo,
      instanceName: 'string',
      networkInfo: UpdateInstanceRequestNetworkInfo,
      productInfo: UpdateInstanceRequestProductInfo,
      remark: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $dara.Model {
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
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * AA87DE09-DA44-52F4-9515-78B1B607****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the account.
   * 
   * Valid values:
   * 
   * *   DISABLE
   * *   ENABLE
   * 
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @remarks
   * The password of the account.
   * 
   * @example
   * test
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAclRequest extends $dara.Model {
  /**
   * @remarks
   * The following items describe the types of permissions that can be granted based on the resource type:
   * 
   * *   Topic: Pub, Sub, and Pub|Sub
   * *   Consumer group: Sub
   * 
   * Valid values:
   * 
   * *   SUB: subscribe
   * *   Pub|Sub: publish and subscribe
   * *   Pub: publish
   * 
   * @example
   * Pub
   */
  actions?: string[];
  /**
   * @remarks
   * The decision result of the authorization.
   * 
   * Valid values:
   * 
   * *   Deny
   * *   Allow
   * 
   * @example
   * Allow
   */
  decision?: string;
  /**
   * @remarks
   * The IP address whitelists.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The name of the resource on which you want to grant permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource on which you want to grant permissions.
   * 
   * Valid values:
   * 
   * *   Group
   * *   Topic
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      decision: 'decision',
      ipWhitelists: 'ipWhitelists',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
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
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 200
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
   * The request ID.
   * 
   * @example
   * C115601B-8736-5BBF-AC99-7FEAE1245A80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * Maximum send message tps
   * 
   * @example
   * 500
   */
  maxSendTps?: number;
  /**
   * @remarks
   * Updated remarks for the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      maxSendTps: 'maxSendTps',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSendTps: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * Return result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * 动态错误信息
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * Request ID, each request has a unique ID that can be used for troubleshooting and problem localization.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the execution result is successful.
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTopicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTopicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyConsumeMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * zeekr-settlement-server-dc555456f-v2lcg@1@1@qfvorazqns
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * TEST_FINANCE_STOCK_OUT_GROUP
   */
  consumerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      consumerGroupId: 'consumerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      consumerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyConsumeMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * 200
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
   * The request ID.
   * 
   * @example
   * 5304143F-AB0E-5AB4-A227-7C5489216FD5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyConsumeMessageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyConsumeMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyConsumeMessageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The message key.
   * 
   * @example
   * xx
   */
  messageKey?: string;
  /**
   * @remarks
   * The message tag.
   * 
   * @example
   * xx
   */
  messageTag?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      messageKey: 'messageKey',
      messageTag: 'messageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      messageKey: 'string',
      messageTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySendMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 0A64228900207A4F0F2931A4E0D40BE5
   */
  data?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3BD2C19B-66DE-59C7-B2F6-FD1BE21DC8C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySendMessageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifySendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifySendMessageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rocketmq", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Add Disaster Recovery Plan Entry
   * 
   * @param request - AddDisasterRecoveryItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDisasterRecoveryItemResponse
   */
  async addDisasterRecoveryItemWithOptions(planId: string, request: AddDisasterRecoveryItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AddDisasterRecoveryItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topics)) {
      body["topics"] = request.topics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new AddDisasterRecoveryItemResponse({}));
    } else {
      return $dara.cast<AddDisasterRecoveryItemResponse>(await this.execute(params, req, runtime), new AddDisasterRecoveryItemResponse({}));
    }

  }

  /**
   * Add Disaster Recovery Plan Entry
   * 
   * @param request - AddDisasterRecoveryItemRequest
   * @returns AddDisasterRecoveryItemResponse
   */
  async addDisasterRecoveryItem(planId: string, request: AddDisasterRecoveryItemRequest): Promise<AddDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addDisasterRecoveryItemWithOptions(planId, request, headers, runtime);
  }

  /**
   * Changes the resource group to which a ApsaraMQ for RocketMQ instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceGroup/change`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Changes the resource group to which a ApsaraMQ for RocketMQ instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * The ID of the consumer group. The ID is globally unique and is used to identify a consumer group.
   * The following limits are imposed on the ID:
   * *   Character limit: The ID can contain letters, digits, underscores (_), hyphens (-), and percent signs (%).
   * *   Length limit: The ID must be 1 to 60 characters in length.
   * For more information about strings that are reserved for the system, see [Limits on parameters](https://help.aliyun.com/document_detail/440347.html).
   * 
   * @param request - CreateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, request: CreateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumeRetryPolicy)) {
      body["consumeRetryPolicy"] = request.consumeRetryPolicy;
    }

    if (!$dara.isNull(request.deliveryOrderType)) {
      body["deliveryOrderType"] = request.deliveryOrderType;
    }

    if (!$dara.isNull(request.maxReceiveTps)) {
      body["maxReceiveTps"] = request.maxReceiveTps;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new CreateConsumerGroupResponse({}));
    } else {
      return $dara.cast<CreateConsumerGroupResponse>(await this.execute(params, req, runtime), new CreateConsumerGroupResponse({}));
    }

  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * The ID of the consumer group. The ID is globally unique and is used to identify a consumer group.
   * The following limits are imposed on the ID:
   * *   Character limit: The ID can contain letters, digits, underscores (_), hyphens (-), and percent signs (%).
   * *   Length limit: The ID must be 1 to 60 characters in length.
   * For more information about strings that are reserved for the system, see [Limits on parameters](https://help.aliyun.com/document_detail/440347.html).
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(instanceId: string, consumerGroupId: string, request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerGroupWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * Create Disaster Recovery Plan
   * 
   * @param request - CreateDisasterRecoveryPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDisasterRecoveryPlanResponse
   */
  async createDisasterRecoveryPlanWithOptions(request: CreateDisasterRecoveryPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDisasterRecoveryPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoSyncCheckpoint)) {
      body["autoSyncCheckpoint"] = request.autoSyncCheckpoint;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!$dara.isNull(request.planDesc)) {
      body["planDesc"] = request.planDesc;
    }

    if (!$dara.isNull(request.planName)) {
      body["planName"] = request.planName;
    }

    if (!$dara.isNull(request.planType)) {
      body["planType"] = request.planType;
    }

    if (!$dara.isNull(request.syncCheckpointEnabled)) {
      body["syncCheckpointEnabled"] = request.syncCheckpointEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDisasterRecoveryPlan",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDisasterRecoveryPlanResponse>(await this.callApi(params, req, runtime), new CreateDisasterRecoveryPlanResponse({}));
    } else {
      return $dara.cast<CreateDisasterRecoveryPlanResponse>(await this.execute(params, req, runtime), new CreateDisasterRecoveryPlanResponse({}));
    }

  }

  /**
   * Create Disaster Recovery Plan
   * 
   * @param request - CreateDisasterRecoveryPlanRequest
   * @returns CreateDisasterRecoveryPlanResponse
   */
  async createDisasterRecoveryPlan(request: CreateDisasterRecoveryPlanRequest): Promise<CreateDisasterRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDisasterRecoveryPlanWithOptions(request, headers, runtime);
  }

  /**
   * Creates an ApsaraMQ for RocketMQ 5.x instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      body["autoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.commodityCode)) {
      body["commodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.networkInfo)) {
      body["networkInfo"] = request.networkInfo;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["periodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.productInfo)) {
      body["productInfo"] = request.productInfo;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.seriesCode)) {
      body["seriesCode"] = request.seriesCode;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["serviceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.subSeriesCode)) {
      body["subSeriesCode"] = request.subSeriesCode;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
    } else {
      return $dara.cast<CreateInstanceResponse>(await this.execute(params, req, runtime), new CreateInstanceResponse({}));
    }

  }

  /**
   * Creates an ApsaraMQ for RocketMQ 5.x instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Creates an account that is used to access an instance.
   * 
   * @param request - CreateInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccountWithOptions(instanceId: string, request: CreateInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/accounts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceAccountResponse>(await this.callApi(params, req, runtime), new CreateInstanceAccountResponse({}));
    } else {
      return $dara.cast<CreateInstanceAccountResponse>(await this.execute(params, req, runtime), new CreateInstanceAccountResponse({}));
    }

  }

  /**
   * Creates an account that is used to access an instance.
   * 
   * @param request - CreateInstanceAccountRequest
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccount(instanceId: string, request: CreateInstanceAccountRequest): Promise<CreateInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates an access control list (ACL) in a specific instance.
   * 
   * @param request - CreateInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceAclResponse
   */
  async createInstanceAclWithOptions(instanceId: string, username: string, request: CreateInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceAclResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!$dara.isNull(request.decision)) {
      body["decision"] = request.decision;
    }

    if (!$dara.isNull(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    if (!$dara.isNull(request.resourceName)) {
      body["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl/account/${$dara.URL.percentEncode(username)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceAclResponse>(await this.callApi(params, req, runtime), new CreateInstanceAclResponse({}));
    } else {
      return $dara.cast<CreateInstanceAclResponse>(await this.execute(params, req, runtime), new CreateInstanceAclResponse({}));
    }

  }

  /**
   * Creates an access control list (ACL) in a specific instance.
   * 
   * @param request - CreateInstanceAclRequest
   * @returns CreateInstanceAclResponse
   */
  async createInstanceAcl(instanceId: string, username: string, request: CreateInstanceAclRequest): Promise<CreateInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Creates an IP address whitelist.
   * 
   * @param request - CreateInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceIpWhitelistResponse
   */
  async createInstanceIpWhitelistWithOptions(instanceId: string, request: CreateInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceIpWhitelistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/ip/whitelist`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new CreateInstanceIpWhitelistResponse({}));
    } else {
      return $dara.cast<CreateInstanceIpWhitelistResponse>(await this.execute(params, req, runtime), new CreateInstanceIpWhitelistResponse({}));
    }

  }

  /**
   * Creates an IP address whitelist.
   * 
   * @param request - CreateInstanceIpWhitelistRequest
   * @returns CreateInstanceIpWhitelistResponse
   */
  async createInstanceIpWhitelist(instanceId: string, request: CreateInstanceIpWhitelistRequest): Promise<CreateInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Create Topic
   * 
   * @param request - CreateTopicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTopicResponse
   */
  async createTopicWithOptions(instanceId: string, topicName: string, request: CreateTopicRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTopicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxSendTps)) {
      body["maxSendTps"] = request.maxSendTps;
    }

    if (!$dara.isNull(request.messageType)) {
      body["messageType"] = request.messageType;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTopicResponse>(await this.callApi(params, req, runtime), new CreateTopicResponse({}));
    } else {
      return $dara.cast<CreateTopicResponse>(await this.execute(params, req, runtime), new CreateTopicResponse({}));
    }

  }

  /**
   * Create Topic
   * 
   * @param request - CreateTopicRequest
   * @returns CreateTopicResponse
   */
  async createTopic(instanceId: string, topicName: string, request: CreateTopicRequest): Promise<CreateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTopicWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Deletes a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * After you delete a consumer group, the consumer client associated with the consumer group cannot consume messages. Exercise caution when you call this operation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new DeleteConsumerGroupResponse({}));
    } else {
      return $dara.cast<DeleteConsumerGroupResponse>(await this.execute(params, req, runtime), new DeleteConsumerGroupResponse({}));
    }

  }

  /**
   * Deletes a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * After you delete a consumer group, the consumer client associated with the consumer group cannot consume messages. Exercise caution when you call this operation.
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(instanceId: string, consumerGroupId: string): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Deletes the subscriptions of a consumer group.
   * 
   * @param request - DeleteConsumerGroupSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupSubscriptionResponse
   */
  async deleteConsumerGroupSubscriptionWithOptions(instanceId: string, consumerGroupId: string, request: DeleteConsumerGroupSubscriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteConsumerGroupSubscriptionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterExpression)) {
      query["filterExpression"] = request.filterExpression;
    }

    if (!$dara.isNull(request.filterType)) {
      query["filterType"] = request.filterType;
    }

    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroupSubscription",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/subscriptions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteConsumerGroupSubscriptionResponse>(await this.callApi(params, req, runtime), new DeleteConsumerGroupSubscriptionResponse({}));
    } else {
      return $dara.cast<DeleteConsumerGroupSubscriptionResponse>(await this.execute(params, req, runtime), new DeleteConsumerGroupSubscriptionResponse({}));
    }

  }

  /**
   * Deletes the subscriptions of a consumer group.
   * 
   * @param request - DeleteConsumerGroupSubscriptionRequest
   * @returns DeleteConsumerGroupSubscriptionResponse
   */
  async deleteConsumerGroupSubscription(instanceId: string, consumerGroupId: string, request: DeleteConsumerGroupSubscriptionRequest): Promise<DeleteConsumerGroupSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupSubscriptionWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * 删除容灾计划条目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDisasterRecoveryItemResponse
   */
  async deleteDisasterRecoveryItemWithOptions(planId: string, itemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDisasterRecoveryItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new DeleteDisasterRecoveryItemResponse({}));
    } else {
      return $dara.cast<DeleteDisasterRecoveryItemResponse>(await this.execute(params, req, runtime), new DeleteDisasterRecoveryItemResponse({}));
    }

  }

  /**
   * 删除容灾计划条目
   * @returns DeleteDisasterRecoveryItemResponse
   */
  async deleteDisasterRecoveryItem(planId: string, itemId: string): Promise<DeleteDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDisasterRecoveryItemWithOptions(planId, itemId, headers, runtime);
  }

  /**
   * Deletes a global message backup plan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDisasterRecoveryPlanResponse
   */
  async deleteDisasterRecoveryPlanWithOptions(planId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDisasterRecoveryPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDisasterRecoveryPlan",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDisasterRecoveryPlanResponse>(await this.callApi(params, req, runtime), new DeleteDisasterRecoveryPlanResponse({}));
    } else {
      return $dara.cast<DeleteDisasterRecoveryPlanResponse>(await this.execute(params, req, runtime), new DeleteDisasterRecoveryPlanResponse({}));
    }

  }

  /**
   * Deletes a global message backup plan.
   * @returns DeleteDisasterRecoveryPlanResponse
   */
  async deleteDisasterRecoveryPlan(planId: string): Promise<DeleteDisasterRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDisasterRecoveryPlanWithOptions(planId, headers, runtime);
  }

  /**
   * Deletes a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * *   This operation is used to delete a pay-as-you-go instance. A subscription instance is automatically released after it expires. You do not need to manually delete a subscription instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
    } else {
      return $dara.cast<DeleteInstanceResponse>(await this.execute(params, req, runtime), new DeleteInstanceResponse({}));
    }

  }

  /**
   * Deletes a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * *   This operation is used to delete a pay-as-you-go instance. A subscription instance is automatically released after it expires. You do not need to manually delete a subscription instance.
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Delete access control ACL user
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceAccountResponse
   */
  async deleteInstanceAccountWithOptions(instanceId: string, username: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceAccountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/accounts/${$dara.URL.percentEncode(username)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceAccountResponse>(await this.callApi(params, req, runtime), new DeleteInstanceAccountResponse({}));
    } else {
      return $dara.cast<DeleteInstanceAccountResponse>(await this.execute(params, req, runtime), new DeleteInstanceAccountResponse({}));
    }

  }

  /**
   * Delete access control ACL user
   * @returns DeleteInstanceAccountResponse
   */
  async deleteInstanceAccount(instanceId: string, username: string): Promise<DeleteInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceAccountWithOptions(instanceId, username, headers, runtime);
  }

  /**
   * Deletes the permissions of a specific account of an instance.
   * 
   * @param request - DeleteInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceAclResponse
   */
  async deleteInstanceAclWithOptions(instanceId: string, username: string, request: DeleteInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceAclResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceName)) {
      query["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl/account/${$dara.URL.percentEncode(username)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceAclResponse>(await this.callApi(params, req, runtime), new DeleteInstanceAclResponse({}));
    } else {
      return $dara.cast<DeleteInstanceAclResponse>(await this.execute(params, req, runtime), new DeleteInstanceAclResponse({}));
    }

  }

  /**
   * Deletes the permissions of a specific account of an instance.
   * 
   * @param request - DeleteInstanceAclRequest
   * @returns DeleteInstanceAclResponse
   */
  async deleteInstanceAcl(instanceId: string, username: string, request: DeleteInstanceAclRequest): Promise<DeleteInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Deletes a specific IP address whitelist from an instance.
   * 
   * @param tmpReq - DeleteInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceIpWhitelistResponse
   */
  async deleteInstanceIpWhitelistWithOptions(instanceId: string, tmpReq: DeleteInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceIpWhitelistResponse> {
    tmpReq.validate();
    let request = new DeleteInstanceIpWhitelistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipWhitelists)) {
      request.ipWhitelistsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipWhitelists, "ipWhitelists", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelist)) {
      query["ipWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.ipWhitelistsShrink)) {
      query["ipWhitelists"] = request.ipWhitelistsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/ip/whitelist`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new DeleteInstanceIpWhitelistResponse({}));
    } else {
      return $dara.cast<DeleteInstanceIpWhitelistResponse>(await this.execute(params, req, runtime), new DeleteInstanceIpWhitelistResponse({}));
    }

  }

  /**
   * Deletes a specific IP address whitelist from an instance.
   * 
   * @param request - DeleteInstanceIpWhitelistRequest
   * @returns DeleteInstanceIpWhitelistResponse
   */
  async deleteInstanceIpWhitelist(instanceId: string, request: DeleteInstanceIpWhitelistRequest): Promise<DeleteInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes a specified topic.
   * 
   * @remarks
   * If you delete the topic, the publishing and subscription relationships that are established based on the topic are cleared. Exercise caution when you call this operation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTopicResponse
   */
  async deleteTopicWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTopicResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTopicResponse>(await this.callApi(params, req, runtime), new DeleteTopicResponse({}));
    } else {
      return $dara.cast<DeleteTopicResponse>(await this.execute(params, req, runtime), new DeleteTopicResponse({}));
    }

  }

  /**
   * Deletes a specified topic.
   * 
   * @remarks
   * If you delete the topic, the publishing and subscription relationships that are established based on the topic are cleared. Exercise caution when you call this operation.
   * @returns DeleteTopicResponse
   */
  async deleteTopic(instanceId: string, topicName: string): Promise<DeleteTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTopicWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * Queries the details of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupResponse
   */
  async getConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetConsumerGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConsumerGroupResponse>(await this.callApi(params, req, runtime), new GetConsumerGroupResponse({}));
    } else {
      return $dara.cast<GetConsumerGroupResponse>(await this.execute(params, req, runtime), new GetConsumerGroupResponse({}));
    }

  }

  /**
   * Queries the details of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * @returns GetConsumerGroupResponse
   */
  async getConsumerGroup(instanceId: string, consumerGroupId: string): Promise<GetConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Query Consumer Group Backlog Information
   * 
   * @param request - GetConsumerGroupLagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupLagResponse
   */
  async getConsumerGroupLagWithOptions(instanceId: string, consumerGroupId: string, request: GetConsumerGroupLagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetConsumerGroupLagResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerGroupLag",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/lag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConsumerGroupLagResponse>(await this.callApi(params, req, runtime), new GetConsumerGroupLagResponse({}));
    } else {
      return $dara.cast<GetConsumerGroupLagResponse>(await this.execute(params, req, runtime), new GetConsumerGroupLagResponse({}));
    }

  }

  /**
   * Query Consumer Group Backlog Information
   * 
   * @param request - GetConsumerGroupLagRequest
   * @returns GetConsumerGroupLagResponse
   */
  async getConsumerGroupLag(instanceId: string, consumerGroupId: string, request: GetConsumerGroupLagRequest): Promise<GetConsumerGroupLagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupLagWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * Queries the subscriptions of a consumer group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupSubscriptionResponse
   */
  async getConsumerGroupSubscriptionWithOptions(instanceId: string, consumerGroupId: string, topicName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetConsumerGroupSubscriptionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerGroupSubscription",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/subscriptions/${$dara.URL.percentEncode(topicName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConsumerGroupSubscriptionResponse>(await this.callApi(params, req, runtime), new GetConsumerGroupSubscriptionResponse({}));
    } else {
      return $dara.cast<GetConsumerGroupSubscriptionResponse>(await this.execute(params, req, runtime), new GetConsumerGroupSubscriptionResponse({}));
    }

  }

  /**
   * Queries the subscriptions of a consumer group.
   * @returns GetConsumerGroupSubscriptionResponse
   */
  async getConsumerGroupSubscription(instanceId: string, consumerGroupId: string, topicName: string): Promise<GetConsumerGroupSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupSubscriptionWithOptions(instanceId, consumerGroupId, topicName, headers, runtime);
  }

  /**
   * Queries the stack information about a consumer.
   * 
   * @param request - GetConsumerStackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerStackResponse
   */
  async getConsumerStackWithOptions(instanceId: string, consumerGroupId: string, request: GetConsumerStackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetConsumerStackResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerStack",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/stack`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConsumerStackResponse>(await this.callApi(params, req, runtime), new GetConsumerStackResponse({}));
    } else {
      return $dara.cast<GetConsumerStackResponse>(await this.execute(params, req, runtime), new GetConsumerStackResponse({}));
    }

  }

  /**
   * Queries the stack information about a consumer.
   * 
   * @param request - GetConsumerStackRequest
   * @returns GetConsumerStackResponse
   */
  async getConsumerStack(instanceId: string, consumerGroupId: string, request: GetConsumerStackRequest): Promise<GetConsumerStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerStackWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * 查询容灾计划条目详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDisasterRecoveryItemResponse
   */
  async getDisasterRecoveryItemWithOptions(planId: string, itemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDisasterRecoveryItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new GetDisasterRecoveryItemResponse({}));
    } else {
      return $dara.cast<GetDisasterRecoveryItemResponse>(await this.execute(params, req, runtime), new GetDisasterRecoveryItemResponse({}));
    }

  }

  /**
   * 查询容灾计划条目详情
   * @returns GetDisasterRecoveryItemResponse
   */
  async getDisasterRecoveryItem(planId: string, itemId: string): Promise<GetDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDisasterRecoveryItemWithOptions(planId, itemId, headers, runtime);
  }

  /**
   * 查询容灾计划详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDisasterRecoveryPlanResponse
   */
  async getDisasterRecoveryPlanWithOptions(planId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDisasterRecoveryPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDisasterRecoveryPlan",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDisasterRecoveryPlanResponse>(await this.callApi(params, req, runtime), new GetDisasterRecoveryPlanResponse({}));
    } else {
      return $dara.cast<GetDisasterRecoveryPlanResponse>(await this.execute(params, req, runtime), new GetDisasterRecoveryPlanResponse({}));
    }

  }

  /**
   * 查询容灾计划详情
   * @returns GetDisasterRecoveryPlanResponse
   */
  async getDisasterRecoveryPlan(planId: string): Promise<GetDisasterRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDisasterRecoveryPlanWithOptions(planId, headers, runtime);
  }

  /**
   * Queries the detailed information about an instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
    } else {
      return $dara.cast<GetInstanceResponse>(await this.execute(params, req, runtime), new GetInstanceResponse({}));
    }

  }

  /**
   * Queries the detailed information about an instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Obtains the account used to access a specific instance.
   * 
   * @param request - GetInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceAccountResponse
   */
  async getInstanceAccountWithOptions(instanceId: string, request: GetInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceAccountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/account`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceAccountResponse>(await this.callApi(params, req, runtime), new GetInstanceAccountResponse({}));
    } else {
      return $dara.cast<GetInstanceAccountResponse>(await this.execute(params, req, runtime), new GetInstanceAccountResponse({}));
    }

  }

  /**
   * Obtains the account used to access a specific instance.
   * 
   * @param request - GetInstanceAccountRequest
   * @returns GetInstanceAccountResponse
   */
  async getInstanceAccount(instanceId: string, request: GetInstanceAccountRequest): Promise<GetInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries information about the access control list (ACL) of an instance.
   * 
   * @param request - GetInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceAclResponse
   */
  async getInstanceAclWithOptions(instanceId: string, username: string, request: GetInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceAclResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceName)) {
      query["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl/account/${$dara.URL.percentEncode(username)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceAclResponse>(await this.callApi(params, req, runtime), new GetInstanceAclResponse({}));
    } else {
      return $dara.cast<GetInstanceAclResponse>(await this.execute(params, req, runtime), new GetInstanceAclResponse({}));
    }

  }

  /**
   * Queries information about the access control list (ACL) of an instance.
   * 
   * @param request - GetInstanceAclRequest
   * @returns GetInstanceAclResponse
   */
  async getInstanceAcl(instanceId: string, username: string, request: GetInstanceAclRequest): Promise<GetInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Queries the information about the IP address whitelist of an instance.
   * 
   * @param tmpReq - GetInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceIpWhitelistResponse
   */
  async getInstanceIpWhitelistWithOptions(instanceId: string, tmpReq: GetInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceIpWhitelistResponse> {
    tmpReq.validate();
    let request = new GetInstanceIpWhitelistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipWhitelists)) {
      request.ipWhitelistsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipWhitelists, "ipWhitelists", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelistsShrink)) {
      query["ipWhitelists"] = request.ipWhitelistsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/ip/whitelists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new GetInstanceIpWhitelistResponse({}));
    } else {
      return $dara.cast<GetInstanceIpWhitelistResponse>(await this.execute(params, req, runtime), new GetInstanceIpWhitelistResponse({}));
    }

  }

  /**
   * Queries the information about the IP address whitelist of an instance.
   * 
   * @param request - GetInstanceIpWhitelistRequest
   * @returns GetInstanceIpWhitelistResponse
   */
  async getInstanceIpWhitelist(instanceId: string, request: GetInstanceIpWhitelistRequest): Promise<GetInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Obtains the details of a specific message.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageDetailResponse
   */
  async getMessageDetailWithOptions(instanceId: string, topicName: string, messageId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMessageDetailResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageDetail",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/messages/${$dara.URL.percentEncode(messageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMessageDetailResponse>(await this.callApi(params, req, runtime), new GetMessageDetailResponse({}));
    } else {
      return $dara.cast<GetMessageDetailResponse>(await this.execute(params, req, runtime), new GetMessageDetailResponse({}));
    }

  }

  /**
   * Obtains the details of a specific message.
   * @returns GetMessageDetailResponse
   */
  async getMessageDetail(instanceId: string, topicName: string, messageId: string): Promise<GetMessageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMessageDetailWithOptions(instanceId, topicName, messageId, headers, runtime);
  }

  /**
   * Query Topic Details
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicResponse
   */
  async getTopicWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTopicResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTopicResponse>(await this.callApi(params, req, runtime), new GetTopicResponse({}));
    } else {
      return $dara.cast<GetTopicResponse>(await this.execute(params, req, runtime), new GetTopicResponse({}));
    }

  }

  /**
   * Query Topic Details
   * @returns GetTopicResponse
   */
  async getTopic(instanceId: string, topicName: string): Promise<GetTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTopicWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * Queries the trace of a specific message in a specific topic.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceResponse
   */
  async getTraceWithOptions(instanceId: string, topicName: string, messageId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTraceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrace",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/traces/${$dara.URL.percentEncode(messageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTraceResponse>(await this.callApi(params, req, runtime), new GetTraceResponse({}));
    } else {
      return $dara.cast<GetTraceResponse>(await this.execute(params, req, runtime), new GetTraceResponse({}));
    }

  }

  /**
   * Queries the trace of a specific message in a specific topic.
   * @returns GetTraceResponse
   */
  async getTrace(instanceId: string, topicName: string, messageId: string): Promise<GetTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTraceWithOptions(instanceId, topicName, messageId, headers, runtime);
  }

  /**
   * 查询支持的可用区
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableZonesResponse
   */
  async listAvailableZonesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAvailableZonesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableZones",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/zones`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAvailableZonesResponse>(await this.callApi(params, req, runtime), new ListAvailableZonesResponse({}));
    } else {
      return $dara.cast<ListAvailableZonesResponse>(await this.execute(params, req, runtime), new ListAvailableZonesResponse({}));
    }

  }

  /**
   * 查询支持的可用区
   * @returns ListAvailableZonesResponse
   */
  async listAvailableZones(): Promise<ListAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvailableZonesWithOptions(headers, runtime);
  }

  /**
   * 查询消费者客户端连接信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerConnectionsResponse
   */
  async listConsumerConnectionsWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListConsumerConnectionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumerConnections",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/connections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListConsumerConnectionsResponse>(await this.callApi(params, req, runtime), new ListConsumerConnectionsResponse({}));
    } else {
      return $dara.cast<ListConsumerConnectionsResponse>(await this.execute(params, req, runtime), new ListConsumerConnectionsResponse({}));
    }

  }

  /**
   * 查询消费者客户端连接信息
   * @returns ListConsumerConnectionsResponse
   */
  async listConsumerConnections(instanceId: string, consumerGroupId: string): Promise<ListConsumerConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerConnectionsWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Queries the subscriptions of a specific consumer group.
   * 
   * @param request - ListConsumerGroupSubscriptionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupSubscriptionsResponse
   */
  async listConsumerGroupSubscriptionsWithOptions(instanceId: string, consumerGroupId: string, request: ListConsumerGroupSubscriptionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListConsumerGroupSubscriptionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumerGroupSubscriptions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/subscriptions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListConsumerGroupSubscriptionsResponse>(await this.callApi(params, req, runtime), new ListConsumerGroupSubscriptionsResponse({}));
    } else {
      return $dara.cast<ListConsumerGroupSubscriptionsResponse>(await this.execute(params, req, runtime), new ListConsumerGroupSubscriptionsResponse({}));
    }

  }

  /**
   * Queries the subscriptions of a specific consumer group.
   * 
   * @param request - ListConsumerGroupSubscriptionsRequest
   * @returns ListConsumerGroupSubscriptionsResponse
   */
  async listConsumerGroupSubscriptions(instanceId: string, consumerGroupId: string, request: ListConsumerGroupSubscriptionsRequest): Promise<ListConsumerGroupSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupSubscriptionsWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * List Consumer Groups
   * 
   * @remarks
   * >Notice: The OpenAPI provided by Alibaba Cloud is a management API used for managing and querying related resources of Alibaba Cloud services. It is recommended to integrate it only in the management chain. Do not rely on OpenAPI implementation in the core data chain for message sending and receiving, as this may lead to risks in the chain.
   * 
   * @param request - ListConsumerGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupsResponse
   */
  async listConsumerGroupsWithOptions(instanceId: string, request: ListConsumerGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListConsumerGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumerGroups",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListConsumerGroupsResponse>(await this.callApi(params, req, runtime), new ListConsumerGroupsResponse({}));
    } else {
      return $dara.cast<ListConsumerGroupsResponse>(await this.execute(params, req, runtime), new ListConsumerGroupsResponse({}));
    }

  }

  /**
   * List Consumer Groups
   * 
   * @remarks
   * >Notice: The OpenAPI provided by Alibaba Cloud is a management API used for managing and querying related resources of Alibaba Cloud services. It is recommended to integrate it only in the management chain. Do not rely on OpenAPI implementation in the core data chain for message sending and receiving, as this may lead to risks in the chain.
   * 
   * @param request - ListConsumerGroupsRequest
   * @returns ListConsumerGroupsResponse
   */
  async listConsumerGroups(instanceId: string, request: ListConsumerGroupsRequest): Promise<ListConsumerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Query disaster recovery plan consumption progress information
   * 
   * @param request - ListDisasterRecoveryCheckpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisasterRecoveryCheckpointsResponse
   */
  async listDisasterRecoveryCheckpointsWithOptions(planId: string, itemId: string, request: ListDisasterRecoveryCheckpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDisasterRecoveryCheckpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisasterRecoveryCheckpoints",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}/checkpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDisasterRecoveryCheckpointsResponse>(await this.callApi(params, req, runtime), new ListDisasterRecoveryCheckpointsResponse({}));
    } else {
      return $dara.cast<ListDisasterRecoveryCheckpointsResponse>(await this.execute(params, req, runtime), new ListDisasterRecoveryCheckpointsResponse({}));
    }

  }

  /**
   * Query disaster recovery plan consumption progress information
   * 
   * @param request - ListDisasterRecoveryCheckpointsRequest
   * @returns ListDisasterRecoveryCheckpointsResponse
   */
  async listDisasterRecoveryCheckpoints(planId: string, itemId: string, request: ListDisasterRecoveryCheckpointsRequest): Promise<ListDisasterRecoveryCheckpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDisasterRecoveryCheckpointsWithOptions(planId, itemId, request, headers, runtime);
  }

  /**
   * Query Disaster Recovery Plan Entry List
   * 
   * @param request - ListDisasterRecoveryItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisasterRecoveryItemsResponse
   */
  async listDisasterRecoveryItemsWithOptions(planId: string, request: ListDisasterRecoveryItemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDisasterRecoveryItemsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisasterRecoveryItems",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDisasterRecoveryItemsResponse>(await this.callApi(params, req, runtime), new ListDisasterRecoveryItemsResponse({}));
    } else {
      return $dara.cast<ListDisasterRecoveryItemsResponse>(await this.execute(params, req, runtime), new ListDisasterRecoveryItemsResponse({}));
    }

  }

  /**
   * Query Disaster Recovery Plan Entry List
   * 
   * @param request - ListDisasterRecoveryItemsRequest
   * @returns ListDisasterRecoveryItemsResponse
   */
  async listDisasterRecoveryItems(planId: string, request: ListDisasterRecoveryItemsRequest): Promise<ListDisasterRecoveryItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDisasterRecoveryItemsWithOptions(planId, request, headers, runtime);
  }

  /**
   * Query Disaster Recovery Plan List
   * 
   * @param request - ListDisasterRecoveryPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisasterRecoveryPlansResponse
   */
  async listDisasterRecoveryPlansWithOptions(request: ListDisasterRecoveryPlansRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDisasterRecoveryPlansResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisasterRecoveryPlans",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDisasterRecoveryPlansResponse>(await this.callApi(params, req, runtime), new ListDisasterRecoveryPlansResponse({}));
    } else {
      return $dara.cast<ListDisasterRecoveryPlansResponse>(await this.execute(params, req, runtime), new ListDisasterRecoveryPlansResponse({}));
    }

  }

  /**
   * Query Disaster Recovery Plan List
   * 
   * @param request - ListDisasterRecoveryPlansRequest
   * @returns ListDisasterRecoveryPlansResponse
   */
  async listDisasterRecoveryPlans(request: ListDisasterRecoveryPlansRequest): Promise<ListDisasterRecoveryPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDisasterRecoveryPlansWithOptions(request, headers, runtime);
  }

  /**
   * Queries the accounts that are used to access a specific instance.
   * 
   * @param request - ListInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAccountResponse
   */
  async listInstanceAccountWithOptions(instanceId: string, request: ListInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceAccountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountStatus)) {
      query["accountStatus"] = request.accountStatus;
    }

    if (!$dara.isNull(request.accountType)) {
      query["accountType"] = request.accountType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/accounts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceAccountResponse>(await this.callApi(params, req, runtime), new ListInstanceAccountResponse({}));
    } else {
      return $dara.cast<ListInstanceAccountResponse>(await this.execute(params, req, runtime), new ListInstanceAccountResponse({}));
    }

  }

  /**
   * Queries the accounts that are used to access a specific instance.
   * 
   * @param request - ListInstanceAccountRequest
   * @returns ListInstanceAccountResponse
   */
  async listInstanceAccount(instanceId: string, request: ListInstanceAccountRequest): Promise<ListInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the access control lists (ACLs) of an instance.
   * 
   * @param request - ListInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAclResponse
   */
  async listInstanceAclWithOptions(instanceId: string, request: ListInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceAclResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceAclResponse>(await this.callApi(params, req, runtime), new ListInstanceAclResponse({}));
    } else {
      return $dara.cast<ListInstanceAclResponse>(await this.execute(params, req, runtime), new ListInstanceAclResponse({}));
    }

  }

  /**
   * Queries the access control lists (ACLs) of an instance.
   * 
   * @param request - ListInstanceAclRequest
   * @returns ListInstanceAclResponse
   */
  async listInstanceAcl(instanceId: string, request: ListInstanceAclRequest): Promise<ListInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceAclWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the IP address whitelists of an instance.
   * 
   * @param request - ListInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceIpWhitelistResponse
   */
  async listInstanceIpWhitelistWithOptions(instanceId: string, request: ListInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceIpWhitelistResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelist)) {
      query["ipWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/ip/whitelist`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new ListInstanceIpWhitelistResponse({}));
    } else {
      return $dara.cast<ListInstanceIpWhitelistResponse>(await this.execute(params, req, runtime), new ListInstanceIpWhitelistResponse({}));
    }

  }

  /**
   * Queries the IP address whitelists of an instance.
   * 
   * @param request - ListInstanceIpWhitelistRequest
   * @returns ListInstanceIpWhitelistResponse
   */
  async listInstanceIpWhitelist(instanceId: string, request: ListInstanceIpWhitelistRequest): Promise<ListInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries all ApsaraMQ for RocketMQ instances in a specific region.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    tmpReq.validate();
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.seriesCodes)) {
      request.seriesCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.seriesCodes, "seriesCodes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.seriesCodesShrink)) {
      query["seriesCodes"] = request.seriesCodesShrink;
    }

    if (!$dara.isNull(request.storageSecretKey)) {
      query["storageSecretKey"] = request.storageSecretKey;
    }

    if (!$dara.isNull(request.tags)) {
      query["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
    } else {
      return $dara.cast<ListInstancesResponse>(await this.execute(params, req, runtime), new ListInstancesResponse({}));
    }

  }

  /**
   * Queries all ApsaraMQ for RocketMQ instances in a specific region.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of messages.
   * 
   * @param request - ListMessagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessagesResponse
   */
  async listMessagesWithOptions(instanceId: string, topicName: string, request: ListMessagesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMessagesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.messageId)) {
      query["messageId"] = request.messageId;
    }

    if (!$dara.isNull(request.messageKey)) {
      query["messageKey"] = request.messageKey;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scrollId"] = request.scrollId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMessages",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMessagesResponse>(await this.callApi(params, req, runtime), new ListMessagesResponse({}));
    } else {
      return $dara.cast<ListMessagesResponse>(await this.execute(params, req, runtime), new ListMessagesResponse({}));
    }

  }

  /**
   * Queries the list of messages.
   * 
   * @param request - ListMessagesRequest
   * @returns ListMessagesResponse
   */
  async listMessages(instanceId: string, topicName: string, request: ListMessagesRequest): Promise<ListMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessagesWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Query Monitoring Items List
   * 
   * @param request - ListMetricMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetricMetaResponse
   */
  async listMetricMetaWithOptions(request: ListMetricMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMetricMetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetricMeta",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/monitor/metrics/meta`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMetricMetaResponse>(await this.callApi(params, req, runtime), new ListMetricMetaResponse({}));
    } else {
      return $dara.cast<ListMetricMetaResponse>(await this.execute(params, req, runtime), new ListMetricMetaResponse({}));
    }

  }

  /**
   * Query Monitoring Items List
   * 
   * @param request - ListMetricMetaRequest
   * @returns ListMetricMetaResponse
   */
  async listMetricMeta(request: ListMetricMetaRequest): Promise<ListMetricMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMetricMetaWithOptions(request, headers, runtime);
  }

  /**
   * Queries regions in which ApsaraMQ for RocketMQ is available.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
    } else {
      return $dara.cast<ListRegionsResponse>(await this.execute(params, req, runtime), new ListRegionsResponse({}));
    }

  }

  /**
   * Queries regions in which ApsaraMQ for RocketMQ is available.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  /**
   * Query visible resource tag relationships
   * 
   * @param request - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Query visible resource tag relationships
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the subscriptions of a specific topic.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicSubscriptionsResponse
   */
  async listTopicSubscriptionsWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTopicSubscriptionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopicSubscriptions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/subscriptions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTopicSubscriptionsResponse>(await this.callApi(params, req, runtime), new ListTopicSubscriptionsResponse({}));
    } else {
      return $dara.cast<ListTopicSubscriptionsResponse>(await this.execute(params, req, runtime), new ListTopicSubscriptionsResponse({}));
    }

  }

  /**
   * Queries the subscriptions of a specific topic.
   * @returns ListTopicSubscriptionsResponse
   */
  async listTopicSubscriptions(instanceId: string, topicName: string): Promise<ListTopicSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTopicSubscriptionsWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * Query Topic List
   * 
   * @param tmpReq - ListTopicsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicsResponse
   */
  async listTopicsWithOptions(instanceId: string, tmpReq: ListTopicsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTopicsResponse> {
    tmpReq.validate();
    let request = new ListTopicsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.messageTypes)) {
      request.messageTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messageTypes, "messageTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.messageTypesShrink)) {
      query["messageTypes"] = request.messageTypesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopics",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTopicsResponse>(await this.callApi(params, req, runtime), new ListTopicsResponse({}));
    } else {
      return $dara.cast<ListTopicsResponse>(await this.execute(params, req, runtime), new ListTopicsResponse({}));
    }

  }

  /**
   * Query Topic List
   * 
   * @param request - ListTopicsRequest
   * @returns ListTopicsResponse
   */
  async listTopics(instanceId: string, request: ListTopicsRequest): Promise<ListTopicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTopicsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the message traces of a specific topic.
   * 
   * @param request - ListTracesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTracesResponse
   */
  async listTracesWithOptions(instanceId: string, topicName: string, request: ListTracesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTracesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.messageId)) {
      query["messageId"] = request.messageId;
    }

    if (!$dara.isNull(request.messageKey)) {
      query["messageKey"] = request.messageKey;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["queryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTraces",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/traces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTracesResponse>(await this.callApi(params, req, runtime), new ListTracesResponse({}));
    } else {
      return $dara.cast<ListTracesResponse>(await this.execute(params, req, runtime), new ListTracesResponse({}));
    }

  }

  /**
   * Queries the message traces of a specific topic.
   * 
   * @param request - ListTracesRequest
   * @returns ListTracesResponse
   */
  async listTraces(instanceId: string, topicName: string, request: ListTracesRequest): Promise<ListTracesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTracesWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Resets the consumer offset of a consumer group.
   * 
   * @param request - ResetConsumeOffsetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetConsumeOffsetResponse
   */
  async resetConsumeOffsetWithOptions(instanceId: string, consumerGroupId: string, topicName: string, request: ResetConsumeOffsetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ResetConsumeOffsetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resetTime)) {
      body["resetTime"] = request.resetTime;
    }

    if (!$dara.isNull(request.resetType)) {
      body["resetType"] = request.resetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetConsumeOffset",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/consumeOffsets/${$dara.URL.percentEncode(topicName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetConsumeOffsetResponse>(await this.callApi(params, req, runtime), new ResetConsumeOffsetResponse({}));
    } else {
      return $dara.cast<ResetConsumeOffsetResponse>(await this.execute(params, req, runtime), new ResetConsumeOffsetResponse({}));
    }

  }

  /**
   * Resets the consumer offset of a consumer group.
   * 
   * @param request - ResetConsumeOffsetRequest
   * @returns ResetConsumeOffsetResponse
   */
  async resetConsumeOffset(instanceId: string, consumerGroupId: string, topicName: string, request: ResetConsumeOffsetRequest): Promise<ResetConsumeOffsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetConsumeOffsetWithOptions(instanceId, consumerGroupId, topicName, request, headers, runtime);
  }

  /**
   * Enable Disaster Recovery Plan Entry
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDisasterRecoveryItemResponse
   */
  async startDisasterRecoveryItemWithOptions(planId: string, itemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartDisasterRecoveryItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new StartDisasterRecoveryItemResponse({}));
    } else {
      return $dara.cast<StartDisasterRecoveryItemResponse>(await this.execute(params, req, runtime), new StartDisasterRecoveryItemResponse({}));
    }

  }

  /**
   * Enable Disaster Recovery Plan Entry
   * @returns StartDisasterRecoveryItemResponse
   */
  async startDisasterRecoveryItem(planId: string, itemId: string): Promise<StartDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startDisasterRecoveryItemWithOptions(planId, itemId, headers, runtime);
  }

  /**
   * Deactivate Disaster Recovery Plan Entry
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDisasterRecoveryItemResponse
   */
  async stopDisasterRecoveryItemWithOptions(planId: string, itemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopDisasterRecoveryItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new StopDisasterRecoveryItemResponse({}));
    } else {
      return $dara.cast<StopDisasterRecoveryItemResponse>(await this.execute(params, req, runtime), new StopDisasterRecoveryItemResponse({}));
    }

  }

  /**
   * Deactivate Disaster Recovery Plan Entry
   * @returns StopDisasterRecoveryItemResponse
   */
  async stopDisasterRecoveryItem(planId: string, itemId: string): Promise<StopDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopDisasterRecoveryItemWithOptions(planId, itemId, headers, runtime);
  }

  /**
   * Synchronize Disaster Recovery Plan Consumption Progress
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDisasterRecoveryCheckpointResponse
   */
  async syncDisasterRecoveryCheckpointWithOptions(planId: string, itemId: string, checkpointId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SyncDisasterRecoveryCheckpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDisasterRecoveryCheckpoint",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}/checkpoints/${$dara.URL.percentEncode(checkpointId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SyncDisasterRecoveryCheckpointResponse>(await this.callApi(params, req, runtime), new SyncDisasterRecoveryCheckpointResponse({}));
    } else {
      return $dara.cast<SyncDisasterRecoveryCheckpointResponse>(await this.execute(params, req, runtime), new SyncDisasterRecoveryCheckpointResponse({}));
    }

  }

  /**
   * Synchronize Disaster Recovery Plan Consumption Progress
   * @returns SyncDisasterRecoveryCheckpointResponse
   */
  async syncDisasterRecoveryCheckpoint(planId: string, itemId: string, checkpointId: string): Promise<SyncDisasterRecoveryCheckpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncDisasterRecoveryCheckpointWithOptions(planId, itemId, checkpointId, headers, runtime);
  }

  /**
   * Creates resource tags.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Creates resource tags.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["all"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["tagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Update ConsumerGroup
   * 
   * @remarks
   * >Notice: The OpenAPI provided by Alibaba Cloud is a management API used for managing and querying related resources of Alibaba Cloud services. It is recommended to integrate it only in the management chain. It is strictly prohibited to rely on OpenAPI implementation in the core data chain of message sending and receiving, otherwise it may lead to risks in the chain.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, request: UpdateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateConsumerGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumeRetryPolicy)) {
      body["consumeRetryPolicy"] = request.consumeRetryPolicy;
    }

    if (!$dara.isNull(request.deliveryOrderType)) {
      body["deliveryOrderType"] = request.deliveryOrderType;
    }

    if (!$dara.isNull(request.maxReceiveTps)) {
      body["maxReceiveTps"] = request.maxReceiveTps;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateConsumerGroupResponse>(await this.callApi(params, req, runtime), new UpdateConsumerGroupResponse({}));
    } else {
      return $dara.cast<UpdateConsumerGroupResponse>(await this.execute(params, req, runtime), new UpdateConsumerGroupResponse({}));
    }

  }

  /**
   * Update ConsumerGroup
   * 
   * @remarks
   * >Notice: The OpenAPI provided by Alibaba Cloud is a management API used for managing and querying related resources of Alibaba Cloud services. It is recommended to integrate it only in the management chain. It is strictly prohibited to rely on OpenAPI implementation in the core data chain of message sending and receiving, otherwise it may lead to risks in the chain.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroup(instanceId: string, consumerGroupId: string, request: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerGroupWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * Updates a topic mapping in a global message backup plan.
   * 
   * @param request - UpdateDisasterRecoveryItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDisasterRecoveryItemResponse
   */
  async updateDisasterRecoveryItemWithOptions(planId: string, itemId: string, request: UpdateDisasterRecoveryItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDisasterRecoveryItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topics)) {
      body["topics"] = request.topics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new UpdateDisasterRecoveryItemResponse({}));
    } else {
      return $dara.cast<UpdateDisasterRecoveryItemResponse>(await this.execute(params, req, runtime), new UpdateDisasterRecoveryItemResponse({}));
    }

  }

  /**
   * Updates a topic mapping in a global message backup plan.
   * 
   * @param request - UpdateDisasterRecoveryItemRequest
   * @returns UpdateDisasterRecoveryItemResponse
   */
  async updateDisasterRecoveryItem(planId: string, itemId: string, request: UpdateDisasterRecoveryItemRequest): Promise<UpdateDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDisasterRecoveryItemWithOptions(planId, itemId, request, headers, runtime);
  }

  /**
   * Modifies a global message backup plan.
   * 
   * @param request - UpdateDisasterRecoveryPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDisasterRecoveryPlanResponse
   */
  async updateDisasterRecoveryPlanWithOptions(planId: string, request: UpdateDisasterRecoveryPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDisasterRecoveryPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoSyncCheckpoint)) {
      body["autoSyncCheckpoint"] = request.autoSyncCheckpoint;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!$dara.isNull(request.planDesc)) {
      body["planDesc"] = request.planDesc;
    }

    if (!$dara.isNull(request.planName)) {
      body["planName"] = request.planName;
    }

    if (!$dara.isNull(request.planType)) {
      body["planType"] = request.planType;
    }

    if (!$dara.isNull(request.syncCheckpointEnabled)) {
      body["syncCheckpointEnabled"] = request.syncCheckpointEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDisasterRecoveryPlan",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDisasterRecoveryPlanResponse>(await this.callApi(params, req, runtime), new UpdateDisasterRecoveryPlanResponse({}));
    } else {
      return $dara.cast<UpdateDisasterRecoveryPlanResponse>(await this.execute(params, req, runtime), new UpdateDisasterRecoveryPlanResponse({}));
    }

  }

  /**
   * Modifies a global message backup plan.
   * 
   * @param request - UpdateDisasterRecoveryPlanRequest
   * @returns UpdateDisasterRecoveryPlanResponse
   */
  async updateDisasterRecoveryPlan(planId: string, request: UpdateDisasterRecoveryPlanRequest): Promise<UpdateDisasterRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDisasterRecoveryPlanWithOptions(planId, request, headers, runtime);
  }

  /**
   * Updates the basic information and specifications of an ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(instanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aclInfo)) {
      body["aclInfo"] = request.aclInfo;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.networkInfo)) {
      body["networkInfo"] = request.networkInfo;
    }

    if (!$dara.isNull(request.productInfo)) {
      body["productInfo"] = request.productInfo;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
    } else {
      return $dara.cast<UpdateInstanceResponse>(await this.execute(params, req, runtime), new UpdateInstanceResponse({}));
    }

  }

  /**
   * Updates the basic information and specifications of an ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(instanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Updates the information about a specific account in a specific instance.
   * 
   * @param request - UpdateInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAccountResponse
   */
  async updateInstanceAccountWithOptions(instanceId: string, username: string, request: UpdateInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceAccountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountStatus)) {
      query["accountStatus"] = request.accountStatus;
    }

    if (!$dara.isNull(request.password)) {
      query["password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/accounts/${$dara.URL.percentEncode(username)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceAccountResponse>(await this.callApi(params, req, runtime), new UpdateInstanceAccountResponse({}));
    } else {
      return $dara.cast<UpdateInstanceAccountResponse>(await this.execute(params, req, runtime), new UpdateInstanceAccountResponse({}));
    }

  }

  /**
   * Updates the information about a specific account in a specific instance.
   * 
   * @param request - UpdateInstanceAccountRequest
   * @returns UpdateInstanceAccountResponse
   */
  async updateInstanceAccount(instanceId: string, username: string, request: UpdateInstanceAccountRequest): Promise<UpdateInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceAccountWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Updates the permissions on the resources of a specific instance for a specific user.
   * 
   * @param request - UpdateInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAclResponse
   */
  async updateInstanceAclWithOptions(instanceId: string, username: string, request: UpdateInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceAclResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!$dara.isNull(request.decision)) {
      body["decision"] = request.decision;
    }

    if (!$dara.isNull(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    if (!$dara.isNull(request.resourceName)) {
      body["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl/account/${$dara.URL.percentEncode(username)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceAclResponse>(await this.callApi(params, req, runtime), new UpdateInstanceAclResponse({}));
    } else {
      return $dara.cast<UpdateInstanceAclResponse>(await this.execute(params, req, runtime), new UpdateInstanceAclResponse({}));
    }

  }

  /**
   * Updates the permissions on the resources of a specific instance for a specific user.
   * 
   * @param request - UpdateInstanceAclRequest
   * @returns UpdateInstanceAclResponse
   */
  async updateInstanceAcl(instanceId: string, username: string, request: UpdateInstanceAclRequest): Promise<UpdateInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Update Topic
   * 
   * @param request - UpdateTopicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTopicResponse
   */
  async updateTopicWithOptions(instanceId: string, topicName: string, request: UpdateTopicRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTopicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxSendTps)) {
      body["maxSendTps"] = request.maxSendTps;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTopicResponse>(await this.callApi(params, req, runtime), new UpdateTopicResponse({}));
    } else {
      return $dara.cast<UpdateTopicResponse>(await this.execute(params, req, runtime), new UpdateTopicResponse({}));
    }

  }

  /**
   * Update Topic
   * 
   * @param request - UpdateTopicRequest
   * @returns UpdateTopicResponse
   */
  async updateTopic(instanceId: string, topicName: string, request: UpdateTopicRequest): Promise<UpdateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTopicWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Verifies the consumption status of a message in a specific topic on a specific instance.
   * 
   * @param request - VerifyConsumeMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyConsumeMessageResponse
   */
  async verifyConsumeMessageWithOptions(instanceId: string, topicName: string, messageId: string, request: VerifyConsumeMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<VerifyConsumeMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.consumerGroupId)) {
      query["consumerGroupId"] = request.consumerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyConsumeMessage",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/messages/${$dara.URL.percentEncode(messageId)}/action/verifyConsume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VerifyConsumeMessageResponse>(await this.callApi(params, req, runtime), new VerifyConsumeMessageResponse({}));
    } else {
      return $dara.cast<VerifyConsumeMessageResponse>(await this.execute(params, req, runtime), new VerifyConsumeMessageResponse({}));
    }

  }

  /**
   * Verifies the consumption status of a message in a specific topic on a specific instance.
   * 
   * @param request - VerifyConsumeMessageRequest
   * @returns VerifyConsumeMessageResponse
   */
  async verifyConsumeMessage(instanceId: string, topicName: string, messageId: string, request: VerifyConsumeMessageRequest): Promise<VerifyConsumeMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyConsumeMessageWithOptions(instanceId, topicName, messageId, request, headers, runtime);
  }

  /**
   * Verifies the message sending feature of a specific topic on a specific instance.
   * 
   * @param request - VerifySendMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySendMessageResponse
   */
  async verifySendMessageWithOptions(instanceId: string, topicName: string, request: VerifySendMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<VerifySendMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.message)) {
      body["message"] = request.message;
    }

    if (!$dara.isNull(request.messageKey)) {
      body["messageKey"] = request.messageKey;
    }

    if (!$dara.isNull(request.messageTag)) {
      body["messageTag"] = request.messageTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifySendMessage",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VerifySendMessageResponse>(await this.callApi(params, req, runtime), new VerifySendMessageResponse({}));
    } else {
      return $dara.cast<VerifySendMessageResponse>(await this.execute(params, req, runtime), new VerifySendMessageResponse({}));
    }

  }

  /**
   * Verifies the message sending feature of a specific topic on a specific instance.
   * 
   * @param request - VerifySendMessageRequest
   * @returns VerifySendMessageResponse
   */
  async verifySendMessage(instanceId: string, topicName: string, request: VerifySendMessageRequest): Promise<VerifySendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifySendMessageWithOptions(instanceId, topicName, request, headers, runtime);
  }

}
