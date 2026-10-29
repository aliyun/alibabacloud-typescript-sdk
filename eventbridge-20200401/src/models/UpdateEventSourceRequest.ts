// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSourceRequestSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The CIDR block for security configuration. This parameter is required only when the SecurityConfig parameter is set to ip. You can enter a CIDR block or an IP address.
   */
  ip?: string[];
  /**
   * @remarks
   * The HTTP request methods supported by the generated webhook. You can select multiple values. Valid values:
   * - GET
   * - POST
   * - PUT
   * - PATCH
   * - DELETE
   * - HEAD
   * - OPTIONS
   * - TRACE
   * - CONNECT
   */
  method?: string[];
  /**
   * @remarks
   * The secure domain name for security configuration. This parameter is required only when the SecurityConfig parameter is set to referer. You can enter a domain name.
   */
  referer?: string[];
  /**
   * @remarks
   * The type of the security configuration. Valid values:
   * - none: No configuration is required.
   * - ip: CIDR block.
   * - referer: Secure domain name.
   * 
   * @example
   * none
   */
  securityConfig?: string;
  /**
   * @remarks
   * The protocol type supported by the generated webhook. Valid values:
   * - HTTP
   * - HTTPS
   * - HTTP&HTTPS
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
   * The group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * dsp_online_ml_request
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cbwp-bp1o3m66wcjgbkssm3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The concurrency quota, which is the number of consumers.
   * 
   * @example
   * 1
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The network configuration. Valid values: Default and PublicNetwork.
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The consumption offset.
   * 
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group. This parameter is required for self-managed networks.
   * 
   * @example
   * sg-5wz3mjgo9wpvdnwpwnhkj****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * billing_notify
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required for self-managed networks.
   * 
   * @example
   * vsw-bp1xyntcxiwplhqxj****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC. This parameter is required for self-managed networks.
   * 
   * @example
   * vpc-2zefu4vfmx6sioguj****
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
   * Specifies whether to enable Base64 decoding. Default value: true.
   * 
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @remarks
   * The name of the Simple Message Queue (formerly MNS) queue.
   * 
   * @example
   * queue_api_bind_1672194645178
   */
  queueName?: string;
  /**
   * @remarks
   * The region where the Simple Message Queue (formerly MNS) queue resides.
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
  /**
   * @remarks
   * The suffix.
   * 
   * @example
   * /document
   */
  suffix?: string;
  /**
   * @remarks
   * The match state.
   */
  matchState?: boolean;
  /**
   * @remarks
   * The prefix.
   * 
   * @example
   * fun/document/
   */
  prefix?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * bucketName
   */
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
  /**
   * @remarks
   * The list of event types.
   */
  eventTypes?: string[];
  /**
   * @remarks
   * The matching rules.
   */
  matchRules?: UpdateEventSourceRequestSourceOSSEventParametersMatchRules[][];
  /**
   * @remarks
   * The ARN of the STS role.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:**
   */
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
   * The instance ID of the ApsaraMQ for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * bastionhost-cn-7mz2zky****
   */
  instanceId?: string;
  /**
   * @remarks
   * eb-connect: The name of the queue in the ApsaraMQ for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * eb-connect
   */
  queueName?: string;
  /**
   * @remarks
   * The region where the ApsaraMQ for RabbitMQ instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vhost name of the ApsaraMQ for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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
   * The authentication type. Set the value to ACL or leave it empty.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The group ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID-test
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * registry-vpc****.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The instance ID of the ApsaraMQ for RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * dbaudit-cn-i7m2nx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password of the instance.
   * 
   * @example
   * yourPassword
   */
  instancePassword?: string;
  /**
   * @remarks
   * The ID of the security group. This parameter is required for VPCs.
   * 
   * @example
   * sg-catalog-eventlistener
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - Cloud_4: 4.0 instance.
   * - Cloud_5: 5.0 instance.
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The username of the instance.
   * 
   * @example
   * root
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required for VPCs.
   * 
   * @example
   * vsw-bp10rbrt6rb6vrd89****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC. This parameter is required for VPCs.
   * 
   * @example
   * vpc-bp1a4gmlk31hyg6pt****
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The consumption offset of the message. Valid values:
   * - CONSUME_FROM_LAST_OFFSET: Consumes messages from the latest offset.
   * - CONSUME_FROM_FIRST_OFFSET: Consumes messages from the earliest offset.
   * - CONSUME_FROM_TIMESTAMP: Consumes messages from the offset at a specified point in time.
   * Default value: CONSUME_FROM_LAST_OFFSET.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region where the ApsaraMQ for RocketMQ instance resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The filter tag of the message.
   * 
   * @example
   * KEY2
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp. This parameter takes effect only when the Offset parameter is set to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1663555399032
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic name of the ApsaraMQ for RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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
   * The start consumption offset. You can set this parameter to begin to consume from the earliest offset, end to consume from the latest offset, or a specific timestamp in seconds to consume from a specified point in time.
   * 
   * @example
   * end
   */
  consumePosition?: string;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   * 
   * @example
   * waf-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * @example
   * VideoTestProject
   */
  project?: string;
  /**
   * @remarks
   * When authorizing EventBridge to use this role to read Simple Log Service log content, the following conditions must be met: when creating the role in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service, and select EventBridge as the trusted service. For the permission policy of this role, refer to the custom event source Simple Log Service.
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
   * The time zone for the cron expression.
   * 
   * @example
   * GMT+0:00
   */
  timeZone?: string;
  /**
   * @remarks
   * The JSON string.
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
   * 
   * @example
   * Event source of the RabbitMQ type
   */
  description?: string;
  /**
   * @remarks
   * The name of the associated event bus.
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
   * The external data source configuration.
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
   * The SourceHttpEventParameters request parameter.
   */
  sourceHttpEventParameters?: UpdateEventSourceRequestSourceHttpEventParameters;
  /**
   * @remarks
   * The SourceKafkaParameters request parameter.
   */
  sourceKafkaParameters?: UpdateEventSourceRequestSourceKafkaParameters;
  /**
   * @remarks
   * The parameters for a Simple Message Queue (formerly MNS) event source.
   */
  sourceMNSParameters?: UpdateEventSourceRequestSourceMNSParameters;
  /**
   * @remarks
   * The parameters for an OSS event source.
   */
  sourceOSSEventParameters?: UpdateEventSourceRequestSourceOSSEventParameters;
  /**
   * @remarks
   * The SourceRabbitMQParameters request parameter.
   */
  sourceRabbitMQParameters?: UpdateEventSourceRequestSourceRabbitMQParameters;
  /**
   * @remarks
   * The SourceRocketMQParameters request parameter.
   */
  sourceRocketMQParameters?: UpdateEventSourceRequestSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters for a Simple Log Service event source.
   */
  sourceSLSParameters?: UpdateEventSourceRequestSourceSLSParameters;
  /**
   * @remarks
   * The SourceScheduledEventParameters request parameter.
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

