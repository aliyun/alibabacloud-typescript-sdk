// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceRequestSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The CIDR block security configuration. This parameter is required only when the SecurityConfig parameter is set to ip. You can enter a CIDR block or an IP address.
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
   * The secure domain name configuration. This parameter is required only when the SecurityConfig parameter is set to referer. You can enter a domain name.
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

export class CreateEventSourceRequestSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * wechat_peer_****
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pc-2zehmg67txzuyuuwl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The concurrency quota (number of consumers).
   * 
   * @example
   * 1
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The network configuration. Valid values: Default (default network) and PublicNetwork (self-managed network).
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID. Required for self-managed networks.
   * 
   * @example
   * sg-8vbf66aoyp0wfzrz****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * prod_ma_dispatch_center_call_re****
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID. Required for self-managed networks.
   * 
   * @example
   * vsw-bp127azpeirmwu4q9****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID. Required for self-managed networks.
   * 
   * @example
   * vpc-2ze5ejm986a73qq3v****
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
   * Specifies whether to enable Base64 decoding. A value of true indicates that Base64 decoding is enabled. Valid values: true and false.
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
   * MyQueue
   */
  queueName?: string;
  /**
   * @remarks
   * The region where the Simple Message Queue (formerly MNS) queue resides. Valid values: cn-qingdao, cn-beijing, cn-zhangjiakou, cn-huhehaote, cn-wulanchabu, cn-hangzhou, cn-shanghai, cn-shenzhen, cn-guangzhou, cn-chengdu, cn-hongkong, ap-southeast-1, ap-southeast-2, ap-southeast-3, ap-southeast-5, ap-northeast-1, eu-central-1, us-west-1, us-east-1, ap-south-1, me-east-1, and cn-north-2-gov-1.
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

export class CreateEventSourceRequestSourceOSSEventParametersMatchRules extends $dara.Model {
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
   * The suffix.
   * 
   * @example
   * document
   */
  suffix?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * bucketName
   */
  name?: string;
  /**
   * @remarks
   * The match state.
   */
  matchState?: boolean;
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
      suffix: 'Suffix',
      name: 'Name',
      matchState: 'MatchState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
      suffix: 'string',
      name: 'string',
      matchState: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceOSSEventParameters extends $dara.Model {
  /**
   * @remarks
   * The list of event types.
   */
  eventTypes?: string[];
  /**
   * @remarks
   * The matching rules.
   */
  matchRules?: CreateEventSourceRequestSourceOSSEventParametersMatchRules[][];
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
      matchRules: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': CreateEventSourceRequestSourceOSSEventParametersMatchRules } },
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

export class CreateEventSourceRequestSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ApsaraMQ for RabbitMQ instance. For more information, see Limits.
   * 
   * @example
   * amqp-cn-nif22u74****
   */
  instanceId?: string;
  /**
   * @remarks
   * eb-connect: The queue name of the ApsaraMQ for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * demo
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
   * The authentication type. Valid values: ACL or leave empty.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The group ID of ApsaraMQ for RocketMQ.
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
   * The instance ID of ApsaraMQ for RocketMQ. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
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
   * The security group ID. Required for VPCs.
   * 
   * @example
   * sg-catalog-eventlist****
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
   * The vSwitch ID. Required for VPCs.
   * 
   * @example
   * vsw-bp10rbrt6rb6vrd89****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC. Required for VPCs.
   * 
   * @example
   * vpc-bp1a4gmlk31hyg6pt****
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The consumption offset of the message. Valid values:
   * - CONSUME_FROM_LAST_OFFSET: Consumes from the latest offset.
   * - CONSUME_FROM_FIRST_OFFSET: Consumes from the earliest offset.
   * - CONSUME_FROM_TIMESTAMP: Consumes from the offset at a specified point in time.
   * Default value: CONSUME_FROM_LAST_OFFSET.
   * 
   * @example
   * CONSUME_FROM_LAST_OFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region where the ApsaraMQ for RocketMQ instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The filter tag of the message.
   * 
   * @example
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp. This parameter takes effect only when the Offset parameter is set to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1636597951964
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic name of the ApsaraMQ for RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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
   * The start consumption offset. You can select the earliest or latest offset, which corresponds to begin or end. You can also specify a point in time to start consumption, in seconds.
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
   * test-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * When authorizing EventBridge to use this role to read Simple Log Service logs, the following conditions must be met: When creating the role in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service as the trusted entity and EventBridge as the trusted service. For the permission policy of this role, refer to the custom event source Simple Log Service.
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
   * The time zone for cron execution.
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

export class CreateEventSourceRequest extends $dara.Model {
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
   * The name of the event bus associated with the event source.
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
   * The external data source configuration.
   * 
   * @example
   * {"IsBase64Decode":true,"QueueName":"queue-1"}
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
   * Specifies whether to connect to an external data source.
   * 
   * @example
   * true
   */
  linkedExternalSource?: boolean;
  /**
   * @remarks
   * The request parameter SourceHttpEventParameters.
   */
  sourceHttpEventParameters?: CreateEventSourceRequestSourceHttpEventParameters;
  /**
   * @remarks
   * The request parameter SourceKafkaParameters.
   */
  sourceKafkaParameters?: CreateEventSourceRequestSourceKafkaParameters;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) event source parameters. When you select Simple Message Queue (formerly MNS) as the event source, the RegionId, IsBase64Decode, and QueueName parameters are required.
   */
  sourceMNSParameters?: CreateEventSourceRequestSourceMNSParameters;
  /**
   * @remarks
   * The parameters for an OSS event source.
   */
  sourceOSSEventParameters?: CreateEventSourceRequestSourceOSSEventParameters;
  /**
   * @remarks
   * The request parameter SourceRabbitMQParameters.
   */
  sourceRabbitMQParameters?: CreateEventSourceRequestSourceRabbitMQParameters;
  /**
   * @remarks
   * The request parameter SourceRocketMQParameters.
   */
  sourceRocketMQParameters?: CreateEventSourceRequestSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters for a Simple Log Service event source.
   */
  sourceSLSParameters?: CreateEventSourceRequestSourceSLSParameters;
  /**
   * @remarks
   * The request parameter SourceScheduledEventParameters.
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
      externalSourceType: 'Buffer',
      linkedExternalSource: 'boolean',
      sourceHttpEventParameters: CreateEventSourceRequestSourceHttpEventParameters,
      sourceKafkaParameters: CreateEventSourceRequestSourceKafkaParameters,
      sourceMNSParameters: CreateEventSourceRequestSourceMNSParameters,
      sourceOSSEventParameters: CreateEventSourceRequestSourceOSSEventParameters,
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

