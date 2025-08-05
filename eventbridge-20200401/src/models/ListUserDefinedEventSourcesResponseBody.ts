// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The CIDR block that is used for security settings. This parameter is required only if SecurityConfig is set to ip. You can enter a CIDR block or an IP address.
   */
  ip?: string[];
  /**
   * @remarks
   * The HTTP request method that is supported by the generated webhook URL. You can select multiple values. Valid values:
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
   * The Internet request URL.
   */
  publicWebHookUrl?: string[];
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
  /**
   * @remarks
   * The internal request URL.
   */
  vpcWebHookUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      method: 'Method',
      publicWebHookUrl: 'PublicWebHookUrl',
      referer: 'Referer',
      securityConfig: 'SecurityConfig',
      type: 'Type',
      vpcWebHookUrl: 'VpcWebHookUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
      method: { 'type': 'array', 'itemType': 'string' },
      publicWebHookUrl: { 'type': 'array', 'itemType': 'string' },
      referer: { 'type': 'array', 'itemType': 'string' },
      securityConfig: 'string',
      type: 'string',
      vpcWebHookUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    if(Array.isArray(this.method)) {
      $dara.Model.validateArray(this.method);
    }
    if(Array.isArray(this.publicWebHookUrl)) {
      $dara.Model.validateArray(this.publicWebHookUrl);
    }
    if(Array.isArray(this.referer)) {
      $dara.Model.validateArray(this.referer);
    }
    if(Array.isArray(this.vpcWebHookUrl)) {
      $dara.Model.validateArray(this.vpcWebHookUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that subscribes to the topic on the Message Queue for Apache Kafka instance.
   * 
   * @example
   * test-gid
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache Kafka instance.
   * 
   * @example
   * i-2ze6kiwzkebf04s5h8ds
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of consumers.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The network type. Valid values: Default and PublicNetwork. Default value: Default. The value PublicNetwork indicates a self-managed network.
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
   * earliest
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
   * The ID of the security group to which the Message Queue for Apache Kafka instance belongs.
   * 
   * @example
   * sg-f8zatts5g97x0j***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_api_1674441611897
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the Message Queue for Apache Kafka instance is associated.
   * 
   * @example
   * vsw-bp1hcrxq3mkcik***e
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC in which the Message Queue for Apache Kafka instance is deployed.
   * 
   * @example
   * vpc-bp1kz3ohhzgrau2***
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

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters extends $dara.Model {
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
   * The name of the SMQ queue.
   * 
   * @example
   * queue.openapi-sign-callback
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the region where the SMQ queue resides.
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

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the Message Queue for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * bastionhost-cn-0ju2x28fj07
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue on the Message Queue for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * file-upload-queue
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

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type. This parameter can be set to ACL or left empty.
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
  groupId?: string;
  /**
   * @remarks
   * The endpoint that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * bastionhost-cn-7mz293s9d1p
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of network over which the Message Queue for Apache RocketMQ instance is accessed.
   * 
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * ***
   */
  instancePassword?: string;
  /**
   * @remarks
   * The ID of the security group to which the Message Queue for Apache RocketMQ instance belongs.
   * 
   * @example
   * eb-167adad548***
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The instance type. Valid values: CLOUD_4, CLOUD_5, and SELF_BUILT. The value CLOUD_4 indicates that the instance is a Message Queue for Apache RocketMQ 4.0 instance. The value CLOUD_5 indicates that the instance is a Message Queue for Apache RocketMQ 5.0 instance. The value SELF_BUILT indicates that the instance is a self-managed RocketMQ instance.
   * 
   * @example
   * CLOUD_5
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
   * vsw-bp1iu***
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the Message Queue for Apache RocketMQ instance is deployed.
   * 
   * @example
   * vpc-***
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The offset from which messages are consumed. Valid values:
   * 
   * *   CONSUME_FROM_LAST_OFFSET: Messages are consumed from the latest offset.
   * *   CONSUME_FROM_FIRST_OFFSET: Messages are consumed from the earliest offset.
   * *   CONSUME_FROM_TIMESTAMP: Messages are consumed from the offset at the specified point in time.
   * 
   * Default value: CONSUME_FROM_LAST_OFFSET.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The ID of the region where the Message Queue for Apache RocketMQ instance resides.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The tag that is used to filter messages.
   * 
   * @example
   * dataact
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that indicates the time from which messages are consumed. This parameter is valid only if Offset is set to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1664591760
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic on the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * migration_instance
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      groupId: 'GroupId',
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
      groupId: 'string',
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

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The consumer offset. The value begin indicates the earliest offset, and the value end indicates the latest offset. You can also specify a time in seconds to start consumption.
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
   * cloudfirewall-logstore
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
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console. For information about the permission policy of this role, see Create a custom event source of the Log Service type.
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

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 1 * * * *
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

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the queried event source.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/myRocketMQ.source
   */
  arn?: string;
  /**
   * @remarks
   * The timestamp that indicates when the event source was created.
   * 
   * @example
   * 1607071602000
   */
  ctime?: number;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * test-custom-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The type of the event source.
   * 
   * @example
   * RabbitMQ
   */
  externalSourceType?: string;
  /**
   * @remarks
   * The name of the queried event source.
   * 
   * @example
   * rocketmq.source
   */
  name?: string;
  /**
   * @remarks
   * The parameters that are returned if HTTP events are specified as the event source.
   */
  sourceHttpEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Queue for Apache Kafka is specified as the event source.
   */
  sourceKafkaParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Message Queue (formerly MNS) (SMQ) is specified as the event source.
   */
  sourceMNSParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Queue for RabbitMQ is specified as the event source.
   */
  sourceRabbitMQParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Queue for Apache RocketMQ is specified as the event source.
   */
  sourceRocketMQParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Log Service is specified as the event source.
   */
  sourceSLSParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters;
  /**
   * @remarks
   * The parameters that are returned if scheduled events are specified as the event source.
   */
  sourceScheduledEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters;
  /**
   * @remarks
   * The status of the queried event source. The returned value Activated indicates that the event source is activated.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The type of the queried event source. The returned value UserDefined indicates that the event source is a custom event source.
   * 
   * @example
   * UserDefined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      ctime: 'Ctime',
      eventBusName: 'EventBusName',
      externalSourceType: 'ExternalSourceType',
      name: 'Name',
      sourceHttpEventParameters: 'SourceHttpEventParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
      sourceScheduledEventParameters: 'SourceScheduledEventParameters',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      ctime: 'number',
      eventBusName: 'string',
      externalSourceType: 'string',
      name: 'string',
      sourceHttpEventParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters,
      sourceKafkaParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters,
      sourceMNSParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters,
      sourceRabbitMQParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters,
      sourceRocketMQParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters,
      sourceSLSParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters,
      sourceScheduledEventParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters,
      status: 'string',
      type: 'string',
    };
  }

  validate() {
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

export class ListUserDefinedEventSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event sources.
   */
  eventSourceList?: ListUserDefinedEventSourcesResponseBodyDataEventSourceList[];
  /**
   * @remarks
   * If excess return values exist when you configure Limit, this parameter is returned.
   * 
   * @example
   * 100
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 18
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventSourceList: 'EventSourceList',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceList: { 'type': 'array', 'itemType': ListUserDefinedEventSourcesResponseBodyDataEventSourceList },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventSourceList)) {
      $dara.Model.validateArray(this.eventSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. Valid values:
   * 
   * *   Success: The request is successful.
   * *   Other codes: The request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListUserDefinedEventSourcesResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * InvalidArgument
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5169654A-7059-57E3-BFD9-33C7E012EA1B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. The value true indicates that the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListUserDefinedEventSourcesResponseBodyData,
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

