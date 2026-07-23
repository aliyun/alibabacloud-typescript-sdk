// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceRequestSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The IP address range for security settings. This parameter is required only if you set `SecurityConfig` to `ip`. You can specify a single IP address or a CIDR block.
   */
  ip?: string[];
  /**
   * @remarks
   * The HTTP request methods supported by the webhook. You can specify more than one method. Valid values:
   * 
   * - `GET`
   * 
   * - `POST`
   * 
   * - `PUT`
   * 
   * - `PATCH`
   * 
   * - `DELETE`
   * 
   * - `HEAD`
   * 
   * - `OPTIONS`
   * 
   * - `TRACE`
   * 
   * - `CONNECT`
   */
  method?: string[];
  /**
   * @remarks
   * The security domain names. This parameter is required only if you set `SecurityConfig` to `referer`. You can specify one or more domain names.
   */
  referer?: string[];
  /**
   * @remarks
   * The type of security configuration. Valid values:
   * 
   * - `none`: No configuration is required.
   * 
   * - `ip`: IP address range.
   * 
   * - `referer`: Security domain name.
   * 
   * @example
   * none
   */
  securityConfig?: string;
  /**
   * @remarks
   * The supported protocol for the webhook. Valid values:
   * 
   * - `HTTP`
   * 
   * - `HTTPS`
   * 
   * - `HTTP&HTTPS`
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
   * The consumer group ID.
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
   * The concurrent consumption quota (number of consumers).
   * 
   * @example
   * 1
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The network type. Valid values are `Default` and `PublicNetwork`. Specify `PublicNetwork` if the instance is in a VPC.
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The consumer offset reset policy.
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
   * The security group ID. This parameter is required if `Network` is set to `PublicNetwork`.
   * 
   * @example
   * sg-8vbf66aoyp0wfzrz****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * prod_ma_dispatch_center_call_re****
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required if `Network` is set to `PublicNetwork`.
   * 
   * @example
   * vsw-bp127azpeirmwu4q9****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID. This parameter is required if `Network` is set to `PublicNetwork`.
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
   * Specifies whether to enable Base64 decoding. Valid values: `true` and `false`.
   * 
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @remarks
   * The name of the queue in Message Service (MNS).
   * 
   * @example
   * MyQueue
   */
  queueName?: string;
  /**
   * @remarks
   * The region where the Message Service (MNS) queue is located.
   * You can specify the following regions: `cn-qingdao`, `cn-beijing`, `cn-zhangjiakou`, `cn-huhehaote`, `cn-wulanchabu`, `cn-hangzhou`, `cn-shanghai`, `cn-shenzhen`, `cn-guangzhou`, `cn-chengdu`, `cn-hongkong`, `ap-southeast-1`, `ap-southeast-2`, `ap-southeast-3`, `ap-southeast-5`, `ap-northeast-1`, `eu-central-1`, `us-west-1`, `us-east-1`, `ap-south-1`, `me-east-1`, and `cn-north-2-gov-1`.
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
   */
  prefix?: string;
  /**
   * @remarks
   * The suffix.
   */
  suffix?: string;
  /**
   * @remarks
   * The name.
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
   * The match rules.
   */
  matchRules?: CreateEventSourceRequestSourceOSSEventParametersMatchRules[][];
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Security Token Service (STS) role.
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
   * The region where the Message Queue for RabbitMQ instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the virtual host (vhost) of the Message Queue for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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
   * The authentication type. You can set this parameter to `ACL` or leave it empty.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The consumer group ID on the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * GID-test
   */
  groupID?: string;
  /**
   * @remarks
   * The instance endpoint.
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
   * This parameter is not in use.
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password for the instance.
   * 
   * @example
   * ******
   */
  instancePassword?: string;
  /**
   * @remarks
   * The security group ID. This parameter is required if the instance is deployed in a VPC.
   * 
   * @example
   * sg-catalog-eventlist****
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - `Cloud_4`: For v4.0 instances.
   * 
   * - `Cloud_5`: For v5.0 instances.
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The username for the instance.
   * 
   * @example
   * root
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required if the instance is deployed in a VPC.
   * 
   * @example
   * vsw-bp10rbrt6rb6vrd89****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). This parameter is required if the instance is deployed in a VPC.
   * 
   * @example
   * vpc-bp1a4gmlk31hyg6pt****
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The consumer offset from which message consumption starts. Valid values:
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
   * The tag used to filter messages.
   * 
   * @example
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The point in time to start consumption, specified as a timestamp. This parameter is valid only if you set the `Offset` parameter to `CONSUME_FROM_TIMESTAMP`.
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
   * The consumer offset. Specifies where to start consumption. Valid values are `begin` (earliest offset), `end` (latest offset), or a specific UNIX timestamp.
   * 
   * @example
   * end
   */
  consumePosition?: string;
  /**
   * @remarks
   * The Logstore in Simple Log Service.
   * 
   * @example
   * test-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The Log Project in Simple Log Service.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The RAM role that EventBridge assumes to read logs from Simple Log Service. When you create this role in the RAM console, select **Alibaba Cloud Service** as the trusted entity and **EventBridge** as the trusted service. For more information about the permissions for this role, see Custom event sources for Simple Log Service (SLS).
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
   * @remarks
   * A user-defined JSON string.
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
   * RabbitMQ event source
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
   * The configuration of the external data source.
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
   * Parameters for an HTTP endpoint event source.
   */
  sourceHttpEventParameters?: CreateEventSourceRequestSourceHttpEventParameters;
  /**
   * @remarks
   * Parameters for the Message Queue for Apache Kafka event source.
   */
  sourceKafkaParameters?: CreateEventSourceRequestSourceKafkaParameters;
  /**
   * @remarks
   * Parameters for the Message Service (MNS) event source. The `RegionId`, `IsBase64Decode`, and `QueueName` parameters are required for this type.
   */
  sourceMNSParameters?: CreateEventSourceRequestSourceMNSParameters;
  /**
   * @remarks
   * Parameters for the Object Storage Service (OSS) event source.
   */
  sourceOSSEventParameters?: CreateEventSourceRequestSourceOSSEventParameters;
  /**
   * @remarks
   * Parameters for the Message Queue for RabbitMQ event source.
   */
  sourceRabbitMQParameters?: CreateEventSourceRequestSourceRabbitMQParameters;
  /**
   * @remarks
   * Parameters for the Message Queue for Apache RocketMQ event source.
   */
  sourceRocketMQParameters?: CreateEventSourceRequestSourceRocketMQParameters;
  /**
   * @remarks
   * Parameters for the Simple Log Service (SLS) event source.
   */
  sourceSLSParameters?: CreateEventSourceRequestSourceSLSParameters;
  /**
   * @remarks
   * Parameters for a scheduled event source.
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

