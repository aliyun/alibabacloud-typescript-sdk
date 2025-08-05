// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceRequestSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The CIDR block that is used for security settings. This parameter is required only if you set SecurityConfig to ip. You can enter a CIDR block or an IP address.
   */
  ip?: string[];
  /**
   * @remarks
   * The HTTP request method supported by the generated webhook URL. You can select multiple values. Valid values:
   * 
   * *   GET
   * *   POST
   * *   PUT
   * *   PATCH
   * *   DELETE
   * *   HEAD
   * *   OPTIONS
   * *   TRACE
   * *   CONNECT
   */
  method?: string[];
  /**
   * @remarks
   * The security domain name. This parameter is required only if you set SecurityConfig to referer. You can enter a domain name.
   */
  referer?: string[];
  /**
   * @remarks
   * The type of security settings. Valid values:
   * 
   * *   none: No configuration is required.
   * *   ip: CIDR block.
   * *   referer: security domain name.
   * 
   * @example
   * none
   */
  securityConfig?: string;
  /**
   * @remarks
   * The protocol type that is supported by the generated webhook URL. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * *   HTTP\\&HTTPS
   * 
   * @example
   * HTTPS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      method: 'Method',
      referer: 'Referer',
      securityConfig: 'SecurityConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
      method: { 'type': 'array', 'itemType': 'string' },
      referer: { 'type': 'array', 'itemType': 'string' },
      securityConfig: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    if(Array.isArray(this.method)) {
      $dara.Model.validateArray(this.method);
    }
    if(Array.isArray(this.referer)) {
      $dara.Model.validateArray(this.referer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that subscribes to the topic.
   * 
   * @example
   * wechat_peer_prod
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache Kafka instance.
   * 
   * @example
   * pc-2zehmg67txzuyuuwlxv4f
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of consumers.
   * 
   * @example
   * 1
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The network. Valid values: Default and PublicNetwork. Default value: Default. The value PublicNetwork indicates a self-managed network.
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The consumer offset.
   * 
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The ID of the region where the Message Queue for Apache Kafka instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the Message Queue for Apache Kafka instance belongs. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * sg-8vbf66aoyp0wfzrzxlmy
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the Message Queue for Apache Kafka instance.
   * 
   * @example
   * prod_ma_dispatch_center_call_record
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the Message Queue for Apache Kafka instance is associated. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * vsw-bp127azpeirmwu4q9ttqi
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC in which the Message Queue for Apache Kafka instance resides. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * vpc-2ze5ejm986a73qq3vshlk
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      maximumTasks: 'number',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceMNSParameters extends $dara.Model {
  /**
   * @remarks
   * Specify whether to enable Base64 decoding. Valid values: true and false. If you set this parameter to true, Base64 decoding is enabled.
   * 
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @remarks
   * The name of the SMQ queue.
   * 
   * @example
   * MyQueue
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the region where the SMQ queue resides. Valid values: cn-qingdao, cn-beijing, cn-zhangjiakou, cn-huhehaote, cn-wulanchabu, cn-hangzhou, cn-shanghai, cn-shenzhen, cn-guangzhou, cn-chengdu, cn-hongkong, ap-southeast-1, ap-southeast-2, ap-southeast-3, ap-southeast-5, ap-northeast-1, eu-central-1, us-west-1, us-east-1, ap-south-1, me-east-1, and cn-north-2-gov-1.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the Message Queue for RabbitMQ instance. For more information, see Limits.
   * 
   * @example
   * amqp-cn-nif22u74****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue on the Message Queue for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the region where the Message Queue for RabbitMQ instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the vhost of the Message Queue for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * eb-connect
   */
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type. You can set this parameter to ACL or leave this parameter empty.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the consumer group on the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * GID-test
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * registry-vpc****.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @remarks
   * None.
   * 
   * @example
   * None
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * ******
   */
  instancePassword?: string;
  /**
   * @remarks
   * The ID of the security group to which the Message Queue for Apache RocketMQ instance belongs.
   * 
   * @example
   * sg-catalog-eventlistener
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The type of the Message Queue for Apache RocketMQ instance. Valid values:
   * 
   * *   Cloud_4: Message Queue for Apache RocketMQ 4.0 instance.
   * *   Cloud_5: Message Queue for Apache RocketMQ 5.0 instance.
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The username that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * root
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the Message Queue for Apache RocketMQ instance is associated.
   * 
   * @example
   * vsw-bp10rbrt6rb6vrd89****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the Message Queue for Apache RocketMQ instance resides.
   * 
   * @example
   * vpc-bp1a4gmlk31hyg6ptl3ss
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The offset from which message consumption starts. Valid values: CONSUME_FROM_LAST_OFFSET: Start message consumption from the latest offset. CONSUME_FROM_FIRST_OFFSET: Start message consumption from the earliest offset. CONSUME_FROM_TIMESTAMP: Start message consumption from the offset at the specified point in time. Default value: CONSUME_FROM_LAST_OFFSET.
   * 
   * @example
   * CONSUME_FROM_LAST_OFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region where the Message Queue for Apache RocketMQ instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tag that is used to filter messages.
   * 
   * @example
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed. This parameter is valid only if you set Offset to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1636597951964
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic on the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * mytopic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      offset: 'Offset',
      regionId: 'RegionId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      offset: 'string',
      regionId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The starting consumer offset. The value begin specifies the earliest offset, and the value end specifies the latest offset. You can also specify a time in seconds to start consumption.
   * 
   * @example
   * end
   */
  consumePosition?: string;
  /**
   * @remarks
   * The Log Service Logstore.
   * 
   * @example
   * test-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The Log Service project.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console. For information about the permission policy of this role, see Create a custom event source of the Log Service type.
   * 
   * @example
   * testRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      logStore: 'string',
      project: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceScheduledEventParameters extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 10 * * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The time zone in which the cron expression is executed.
   * 
   * @example
   * GMT+0:00
   */
  timeZone?: string;
  /**
   * @example
   * {"a": "b"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      schedule: 'Schedule',
      timeZone: 'TimeZone',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedule: 'string',
      timeZone: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event source.
   */
  description?: string;
  /**
   * @remarks
   * The name of the event bus with which the event source is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * my-event-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event source.
   * 
   * This parameter is required.
   * 
   * @example
   * myrabbitmq.sourc
   */
  eventSourceName?: string;
  /**
   * @remarks
   * The configurations of the external data source.
   */
  externalSourceConfig?: { [key: string]: any };
  /**
   * @remarks
   * The type of the external data source.
   * 
   * @example
   * RabbitMQ
   */
  externalSourceType?: Buffer;
  /**
   * @remarks
   * Specify whether to connect to an external data source.
   * 
   * @example
   * true
   */
  linkedExternalSource?: boolean;
  /**
   * @remarks
   * The parameters that are configured if the event source is HTTP events.
   */
  sourceHttpEventParameters?: CreateEventSourceRequestSourceHttpEventParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache Kafka.
   */
  sourceKafkaParameters?: CreateEventSourceRequestSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Simple Message Queue (formerly MNS) (SMQ) as the event source. If you specify SMQ as the event source, you must configure RegionId, IsBase64Decode, and QueueName.
   */
  sourceMNSParameters?: CreateEventSourceRequestSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for RabbitMQ.
   */
  sourceRabbitMQParameters?: CreateEventSourceRequestSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache RocketMQ.
   */
  sourceRocketMQParameters?: CreateEventSourceRequestSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Log Service.
   */
  sourceSLSParameters?: CreateEventSourceRequestSourceSLSParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify scheduled events as the event source.
   */
  sourceScheduledEventParameters?: CreateEventSourceRequestSourceScheduledEventParameters;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
      externalSourceConfig: 'ExternalSourceConfig',
      externalSourceType: 'ExternalSourceType',
      linkedExternalSource: 'LinkedExternalSource',
      sourceHttpEventParameters: 'SourceHttpEventParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
      sourceScheduledEventParameters: 'SourceScheduledEventParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventSourceName: 'string',
      externalSourceConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      externalSourceType: 'Buffer',
      linkedExternalSource: 'boolean',
      sourceHttpEventParameters: CreateEventSourceRequestSourceHttpEventParameters,
      sourceKafkaParameters: CreateEventSourceRequestSourceKafkaParameters,
      sourceMNSParameters: CreateEventSourceRequestSourceMNSParameters,
      sourceRabbitMQParameters: CreateEventSourceRequestSourceRabbitMQParameters,
      sourceRocketMQParameters: CreateEventSourceRequestSourceRocketMQParameters,
      sourceSLSParameters: CreateEventSourceRequestSourceSLSParameters,
      sourceScheduledEventParameters: CreateEventSourceRequestSourceScheduledEventParameters,
    };
  }

  validate() {
    if(this.externalSourceConfig) {
      $dara.Model.validateMap(this.externalSourceConfig);
    }
    if(this.sourceHttpEventParameters && typeof (this.sourceHttpEventParameters as any).validate === 'function') {
      (this.sourceHttpEventParameters as any).validate();
    }
    if(this.sourceKafkaParameters && typeof (this.sourceKafkaParameters as any).validate === 'function') {
      (this.sourceKafkaParameters as any).validate();
    }
    if(this.sourceMNSParameters && typeof (this.sourceMNSParameters as any).validate === 'function') {
      (this.sourceMNSParameters as any).validate();
    }
    if(this.sourceRabbitMQParameters && typeof (this.sourceRabbitMQParameters as any).validate === 'function') {
      (this.sourceRabbitMQParameters as any).validate();
    }
    if(this.sourceRocketMQParameters && typeof (this.sourceRocketMQParameters as any).validate === 'function') {
      (this.sourceRocketMQParameters as any).validate();
    }
    if(this.sourceSLSParameters && typeof (this.sourceSLSParameters as any).validate === 'function') {
      (this.sourceSLSParameters as any).validate();
    }
    if(this.sourceScheduledEventParameters && typeof (this.sourceScheduledEventParameters as any).validate === 'function') {
      (this.sourceScheduledEventParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

