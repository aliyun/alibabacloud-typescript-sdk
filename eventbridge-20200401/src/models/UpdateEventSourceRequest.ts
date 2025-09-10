// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSourceRequestSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The CIDR block that is used for security settings. This parameter is required only if SecurityConfig is set to ip. You can enter a CIDR block or an IP address.
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
   * The security domain name. This parameter is required only if SecurityConfig is set to referer. You can enter a domain name.
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

export class UpdateEventSourceRequestSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that subscribes to the topic.
   * 
   * @example
   * dsp_online_ml_request
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache Kafka instance.
   * 
   * @example
   * cbwp-bp1o3m66wcjgbkssm3k5m
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
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the Message Queue for Apache Kafka instance belongs. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * sg-5wz3mjgo9wpvdnwpwnhkjdjwn
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the Message Queue for Apache Kafka instance.
   * 
   * @example
   * billing_notify
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the Message Queue for Apache Kafka instance is associated. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * vsw-bp1xyntcxiwplhqxjybuk
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC in which the Message Queue for Apache Kafka instance resides. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * vpc-2zefu4vfmx6siogujmo0b
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

export class UpdateEventSourceRequestSourceMNSParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Base64 decoding is enabled. By default, Base64 decoding is enabled.
   * 
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @remarks
   * The name of the MNS queue.
   * 
   * @example
   * queue_api_bind_1672194645178
   */
  queueName?: string;
  /**
   * @remarks
   * The region where the MNS queue resides.
   * 
   * @example
   * cn-beijing
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

export class UpdateEventSourceRequestSourceOSSEventParametersMatchRules extends $dara.Model {
  suffix?: string;
  matchState?: boolean;
  prefix?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      suffix: 'Suffix',
      matchState: 'MatchState',
      prefix: 'Prefix',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suffix: 'string',
      matchState: 'boolean',
      prefix: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceOSSEventParameters extends $dara.Model {
  eventTypes?: string[];
  matchRules?: UpdateEventSourceRequestSourceOSSEventParametersMatchRules[][];
  stsRoleArn?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypes: 'EventTypes',
      matchRules: 'MatchRules',
      stsRoleArn: 'StsRoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      matchRules: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': UpdateEventSourceRequestSourceOSSEventParametersMatchRules } },
      stsRoleArn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    if(Array.isArray(this.matchRules)) {
      $dara.Model.validateArray(this.matchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the Message Queue for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * bastionhost-cn-7mz2zkyff09
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue on the Message Queue for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * eb-connect
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
   * amqp-cn-nif22u74****
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

export class UpdateEventSourceRequestSourceRocketMQParameters extends $dara.Model {
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
   * dbaudit-cn-i7m2nx2or01
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
   * The offset from which message consumption starts. Valid values:
   * 
   * *   CONSUME_FROM_LAST_OFFSET: Start message consumption from the latest offset.
   * *   CONSUME_FROM_FIRST_OFFSET: Start message consumption from the earliest offset.
   * *   CONSUME_FROM_TIMESTAMP: Start message consumption from the offset at the specified point in time.
   * 
   * Default value: CONSUME_FROM_LAST_OFFSET.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region where the Message Queue for Apache RocketMQ instance resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The tag that is used to filter messages.
   * 
   * @example
   * KEY2
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed. This parameter is valid only if you set Offset to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1663555399032
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic on the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * topic_default_195820716552192
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

export class UpdateEventSourceRequestSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The starting consumer offset. The value begin indicates the earliest offset, and the value end indicates the latest offset. You can also specify a time in seconds to start consumption.
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
   * waf-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The Log Service project.
   * 
   * @example
   * VideoTestProject
   */
  project?: string;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the RAM console. For information about the permission policy of this role, see Create a custom event source of the Log Service type.
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

export class UpdateEventSourceRequestSourceScheduledEventParameters extends $dara.Model {
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
   * @remarks
   * The user data that is displayed in a JSON string.
   * 
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

export class UpdateEventSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event source.
   */
  description?: string;
  /**
   * @remarks
   * The event bus with which the event source is associated.
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
   * myrabbitmq.source
   */
  eventSourceName?: string;
  /**
   * @remarks
   * The configurations of the external data source.
   * 
   * @example
   * {\\"ConsumePosition\\":\\"end\\",\\"LogStore\\":\\"oss_log\\",\\"Project\\":\\"slsaudit-center-5795350335281001-cn-beijing\\",\\"RoleName\\":\\"sls-beijing-tf\\"}
   */
  externalSourceConfig?: { [key: string]: any };
  /**
   * @remarks
   * The type of the external data source.
   * 
   * @example
   * SLS
   */
  externalSourceType?: string;
  /**
   * @remarks
   * Specifies whether to connect to an external data source.
   * 
   * @example
   * true
   */
  linkedExternalSource?: boolean;
  /**
   * @remarks
   * The parameters that are configured if the event source is HTTP events.
   */
  sourceHttpEventParameters?: UpdateEventSourceRequestSourceHttpEventParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache Kafka.
   */
  sourceKafkaParameters?: UpdateEventSourceRequestSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Service (MNS).
   */
  sourceMNSParameters?: UpdateEventSourceRequestSourceMNSParameters;
  sourceOSSEventParameters?: UpdateEventSourceRequestSourceOSSEventParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for RabbitMQ.
   */
  sourceRabbitMQParameters?: UpdateEventSourceRequestSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if the event source is Message Queue for Apache RocketMQ.
   */
  sourceRocketMQParameters?: UpdateEventSourceRequestSourceRocketMQParameters;
  /**
   * @remarks
   * SourceSLSParameters
   */
  sourceSLSParameters?: UpdateEventSourceRequestSourceSLSParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify scheduled events as the event source.
   */
  sourceScheduledEventParameters?: UpdateEventSourceRequestSourceScheduledEventParameters;
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
      sourceOSSEventParameters: 'SourceOSSEventParameters',
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
      externalSourceType: 'string',
      linkedExternalSource: 'boolean',
      sourceHttpEventParameters: UpdateEventSourceRequestSourceHttpEventParameters,
      sourceKafkaParameters: UpdateEventSourceRequestSourceKafkaParameters,
      sourceMNSParameters: UpdateEventSourceRequestSourceMNSParameters,
      sourceOSSEventParameters: UpdateEventSourceRequestSourceOSSEventParameters,
      sourceRabbitMQParameters: UpdateEventSourceRequestSourceRabbitMQParameters,
      sourceRocketMQParameters: UpdateEventSourceRequestSourceRocketMQParameters,
      sourceSLSParameters: UpdateEventSourceRequestSourceSLSParameters,
      sourceScheduledEventParameters: UpdateEventSourceRequestSourceScheduledEventParameters,
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
    if(this.sourceOSSEventParameters && typeof (this.sourceOSSEventParameters as any).validate === 'function') {
      (this.sourceOSSEventParameters as any).validate();
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

