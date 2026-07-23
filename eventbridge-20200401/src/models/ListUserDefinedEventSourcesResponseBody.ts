// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The IP address range for security configuration. This parameter is required only when `SecurityConfig` is set to `ip`. You can specify a CIDR block or an IP address.
   */
  ip?: string[];
  /**
   * @remarks
   * The HTTP request methods supported by the webhook. You can select one or more methods. Valid values:
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
   * The public request URL.
   */
  publicWebHookUrl?: string[];
  /**
   * @remarks
   * The security domain settings. This parameter is required only when `SecurityConfig` is set to `referer`. You can specify one or more domain names.
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
   * - `referer`: Security domain.
   * 
   * @example
   * none
   */
  securityConfig?: string;
  /**
   * @remarks
   * The protocol type supported by the webhook. Valid values:
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
  /**
   * @remarks
   * The internal network request URL.
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
   * The ID of the consumer group that subscribes to the topic.
   * 
   * @example
   * test-gid
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the Kafka instance.
   * 
   * @example
   * i-2ze6kiwzkebf04s5h8ds
   */
  instanceId?: string;
  /**
   * @remarks
   * The concurrent quota (number of consumers).
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The network type. Valid values: `Default` (default network) and `PublicNetwork` (self-managed network).
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The position from which to start consumption if no offset is stored. For example, `earliest`.
   * 
   * @example
   * earliest
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
   * The security group ID.
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
   * The vSwitch IDs.
   * 
   * @example
   * vsw-bp1hcrxq3mkcik***e
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * Specifies whether to enable Base64 decoding. The default value is `true`.
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
   * queue.openapi-sign-callback
   */
  queueName?: string;
  /**
   * @remarks
   * The region where the MNS queue is located.
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

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceOSSEventParameters extends $dara.Model {
  /**
   * @remarks
   * The list of event types.
   */
  eventTypes?: string[];
  /**
   * @remarks
   * The matching rules.
   */
  matchRules?: any;
  /**
   * @remarks
   * The ARN of the Security Token Service (STS) role.
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
      matchRules: 'any',
      stsRoleArn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * bastionhost-cn-0ju2x28fj07
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue on the ApsaraMQ for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * file-upload-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The region where the ApsaraMQ for RabbitMQ instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the virtual host of the ApsaraMQ for RabbitMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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
   * The authentication type. You can set this parameter to ACL or leave it empty.
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
  groupId?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * bastionhost-cn-7mz293s9d1p
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance network.
   * 
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The instance password.
   * 
   * @example
   * ***
   */
  instancePassword?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * eb-167adad548***
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The instance type. You can set this parameter only to `CLOUD_4` (ApsaraMQ for RocketMQ 4.0 instance), `CLOUD_5` (ApsaraMQ for RocketMQ 5.0 instance), or `SELF_BUILT` (self-managed MQ instance).
   * 
   * @example
   * CLOUD_5
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance username.
   * 
   * @example
   * root
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * @example
   * vsw-bp1iu***
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC).
   * 
   * @example
   * vpc-***
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The consumer offset. Valid values:
   * 
   * - `CONSUME_FROM_LAST_OFFSET`: Start consumption from the latest offset.
   * 
   * - `CONSUME_FROM_FIRST_OFFSET`: Start consumption from the earliest offset.
   * 
   * - `CONSUME_FROM_TIMESTAMP`: Start consumption from a specified timestamp.
   * 
   * The default value is `CONSUME_FROM_LAST_OFFSET`.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region where the ApsaraMQ for RocketMQ instance is located.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The tag used to filter messages.
   * 
   * @example
   * dataact
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp, in seconds. This parameter is required only when the `Offset` parameter is set to `CONSUME_FROM_TIMESTAMP`.
   * 
   * @example
   * 1664591760
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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
   * The starting consumer offset. You can specify `begin` for the earliest offset, `end` for the latest offset, or a specific timestamp in seconds to start consumption.
   * 
   * @example
   * end
   */
  consumePosition?: string;
  /**
   * @remarks
   * The Log Service (SLS) Logstore.
   * 
   * @example
   * cloudfirewall-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The Log Service (SLS) Project.
   * 
   * @example
   * VideoTestProject
   */
  project?: string;
  /**
   * @remarks
   * The name of the RAM role that EventBridge assumes to read logs from Log Service (SLS). When you create this role in the RAM console, select Alibaba Cloud Service as the trusted entity and EventBridge as the trusted service. For more information about the access policy for this role, see Custom event source for Log Service (SLS).
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
   * The time zone for the cron expression.
   * 
   * @example
   * GMT+0:00
   */
  timeZone?: string;
  /**
   * @remarks
   * A JSON string.
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
   * The Alibaba Cloud Resource Name (ARN) of the event source.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/myRocketMQ.source
   */
  arn?: string;
  /**
   * @remarks
   * The time when the event source was created.
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
   * The type of the event provider.
   * 
   * @example
   * RabbitMQ
   */
  externalSourceType?: string;
  /**
   * @remarks
   * The name of the event source.
   * 
   * @example
   * rocketmq.source
   */
  name?: string;
  /**
   * @remarks
   * The parameters for the webhook event source.
   */
  sourceHttpEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters;
  /**
   * @remarks
   * The parameters for the Kafka event source.
   */
  sourceKafkaParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters;
  /**
   * @remarks
   * The parameters for the Message Service (MNS) event source.
   */
  sourceMNSParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters;
  /**
   * @remarks
   * The parameters for the Object Storage Service (OSS) event source.
   */
  sourceOSSEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceOSSEventParameters;
  /**
   * @remarks
   * The parameters for the ApsaraMQ for RabbitMQ event source.
   */
  sourceRabbitMQParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters for the ApsaraMQ for RocketMQ event source.
   */
  sourceRocketMQParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters for the Log Service (SLS) event source.
   */
  sourceSLSParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters;
  /**
   * @remarks
   * The parameters for the scheduled event source.
   */
  sourceScheduledEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters;
  /**
   * @remarks
   * The status of the event source. Valid value: `Activated`.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The type of the event source. The value `UserDefined` indicates a custom event source.
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
      sourceOSSEventParameters: 'SourceOSSEventParameters',
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
      sourceOSSEventParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceOSSEventParameters,
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

export class ListUserDefinedEventSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of event sources.
   */
  eventSourceList?: ListUserDefinedEventSourcesResponseBodyDataEventSourceList[];
  /**
   * @remarks
   * The token to retrieve the next page of results. This parameter is returned only when the results are truncated.
   * 
   * @example
   * 100
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
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
   * The response code:
   * 
   * - `Success`: The call was successful.
   * 
   * - Other values indicate an error. For more information about error codes, see Error Codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListUserDefinedEventSourcesResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * InvalidArgument
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request, generated by Alibaba Cloud.
   * 
   * @example
   * 5169654A-7059-57E3-BFD9-33C7E012****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of `true` indicates success.
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

