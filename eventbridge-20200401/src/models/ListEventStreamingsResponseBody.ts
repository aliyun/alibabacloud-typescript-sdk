// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BaiLianAgentTransformParameters } from "./BaiLianAgentTransformParameters";
import { DashScopeTransformParameters } from "./DashScopeTransformParameters";
import { SourceFeiShuDocsParameters } from "./SourceFeiShuDocsParameters";
import { SourceJDBCParameters } from "./SourceJdbcparameters";
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { SourcePostgreSQLParameters } from "./SourcePostgreSqlparameters";
import { SourceRabbitMQMetaParameters } from "./SourceRabbitMqmetaParameters";
import { SourceRabbitMQMsgSyncParameters } from "./SourceRabbitMqmsgSyncParameters";
import { SinkAgentRunParameters } from "./SinkAgentRunParameters";
import { SinkApiDestinationParameters } from "./SinkApiDestinationParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { SinkHttpsParameters } from "./SinkHttpsParameters";
import { SinkMQTTParameters } from "./SinkMqttparameters";
import { SinkOSSParameters } from "./SinkOssparameters";
import { SinkRabbitMQMetaParameters } from "./SinkRabbitMqmetaParameters";
import { SinkRabbitMQMsgSyncParameters } from "./SinkRabbitMqmsgSyncParameters";


export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow extends $dara.Model {
  /**
   * @remarks
   * The maximum number of events that the window can contain. When this threshold is reached, the data in the window is pushed downstream. If multiple windows exist, a push is triggered when any window meets the threshold.
   * 
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @remarks
   * The maximum time range (in seconds) of events that the window can contain. When this threshold is reached, the data in the window is pushed downstream. If multiple windows exist, a push is triggered when any window meets the threshold.
   * 
   * @example
   * 10
   */
  timeBasedWindow?: number;
  static names(): { [key: string]: string } {
    return {
      countBasedWindow: 'CountBasedWindow',
      timeBasedWindow: 'TimeBasedWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countBasedWindow: 'number',
      timeBasedWindow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption extends $dara.Model {
  businessMode?: string;
  maxCapacityUnitCount?: number;
  minCapacityUnitCount?: number;
  static names(): { [key: string]: string } {
    return {
      businessMode: 'BusinessMode',
      maxCapacityUnitCount: 'MaxCapacityUnitCount',
      minCapacityUnitCount: 'MinCapacityUnitCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMode: 'string',
      maxCapacityUnitCount: 'number',
      minCapacityUnitCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue extends $dara.Model {
  /**
   * @remarks
   * The ARN of the dead-letter queue.
   * 
   * @example
   * acs:ram::159787121179****:role/aliyunsaedefaultrole
   */
  arn?: string;
  /**
   * @remarks
   * The network type of the dead-letter queue.
   * 
   * @example
   * PrivateNetwork
   */
  network?: string;
  /**
   * @remarks
   * The security group ID of the instance where the dead-letter queue resides.
   * 
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID of the dead-letter queue.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID of the dead-letter queue.
   * 
   * @example
   * vpc-2zehizpoendb3****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      network: 'Network',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      network: 'string',
      securityGroupId: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The retry policy. Valid values: BACKOFF_RETRY (backoff retry) and EXPONENTIAL_DECAY_RETRY (exponential decay retry).
   * 
   * @example
   * EXPONENTIAL_DECAY_RETRY
   */
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushRetryStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batching window.
   */
  batchWindow?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow;
  businessOption?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter queue. By default, the dead-letter queue is disabled, and messages that exceed the retry policy are discarded.
   */
  deadLetterQueue?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The error tolerance policy. Valid values: NONE (no error tolerance) and ALL (tolerate all errors).
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The concurrent task count.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The retry policy when event push failed.
   */
  retryStrategy?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy;
  throttling?: number;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'BatchWindow',
      businessOption: 'BusinessOption',
      deadLetterQueue: 'DeadLetterQueue',
      errorsTolerance: 'ErrorsTolerance',
      maximumTasks: 'MaximumTasks',
      retryStrategy: 'RetryStrategy',
      throttling: 'Throttling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow,
      businessOption: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption,
      deadLetterQueue: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      retryStrategy: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy,
      throttling: 'number',
    };
  }

  validate() {
    if(this.batchWindow && typeof (this.batchWindow as any).validate === 'function') {
      (this.batchWindow as any).validate();
    }
    if(this.businessOption && typeof (this.businessOption as any).validate === 'function') {
      (this.businessOption as any).validate();
    }
    if(this.deadLetterQueue && typeof (this.deadLetterQueue as any).validate === 'function') {
      (this.deadLetterQueue as any).validate();
    }
    if(this.retryStrategy && typeof (this.retryStrategy as any).validate === 'function') {
      (this.retryStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The UNIX timestamp.
   * 
   * @example
   * 1636597951964
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersGroup extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The Group ID of the consumer group.
   * 
   * @example
   * GID_******
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * myTopic
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The consumption checkpoint.
   */
  consumeTimestamp?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The consumer group information of Apache RocketMQ.
   */
  group?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The endpoint of the Apache RocketMQ instance.
   * 
   * @example
   * 192.168.1.1:9876
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The password of the Apache RocketMQ instance.
   * 
   * @example
   * ****
   */
  instancePassword?: string;
  /**
   * @remarks
   * The username of the Apache RocketMQ instance.
   * 
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic name of the Apache RocketMQ instance.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz9qqeovkwjxlu9uc****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-2zehizpoendb3****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'ConsumeTimestamp',
      group: 'Group',
      instanceEndpoint: 'InstanceEndpoint',
      instancePassword: 'InstancePassword',
      instanceUsername: 'InstanceUsername',
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp,
      group: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersGroup,
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersTopic,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.consumeTimestamp && typeof (this.consumeTimestamp as any).validate === 'function') {
      (this.consumeTimestamp as any).validate();
    }
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
  /**
   * @remarks
   * The connector configuration.
   * 
   * @example
   * {
   *           "connector.class": "com.mongodb.kafka.connect.MongoSinkConnector",
   *           "tasks.max": "1",
   *           "topics": "sourceA,sourceB"
   *         }
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The connector name.
   * 
   * @example
   * mongo-sink
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @remarks
   * The OSS file download URL.
   * 
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV2i3gZJ"
   */
  connectorPackageUrl?: string;
  /**
   * @remarks
   * Parses the properties file in the current ZIP package.
   */
  connectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
  /**
   * @remarks
   * The instance configuration.
   * 
   * @example
   * {
   *         "group.id": "connect-eb-cluster-KAFKA_CONNECTORC",
   *         "offset.storage.topic": "connect-eb-offset-KAFKA_CONNECTOR_yjqC8K5ewC",
   *         "config.storage.topic": "connect-eb-config-KAFKA_CONNECTOR_yjqC8K5ewC",
   *         "status.storage.topic": "connect-eb-status-KAFKA_CONNECTOR_yjqC8K5ewC",
   *         "consumer.group.id": "connector-eb-cluster-KAFKA_CONNECTOR_yjqC8K5ewC-mongo-sink",
   *         "bootstrap.servers": "alikafka-post:9092"
   *       }
   */
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.connectorParameters && typeof (this.connectorParameters as any).validate === 'function') {
      (this.connectorParameters as any).validate();
    }
    if(this.workerParameters) {
      $dara.Model.validateMap(this.workerParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID of Message Queue for Apache Kafka.
   * 
   * @example
   * 90be1f96-4229-4535-bb76-34b4f6fb2b71
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersName extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersType extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersValue extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  name?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersName;
  type?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersType;
  value?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersValue;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersName,
      type: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersType,
      value: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersValue,
    };
  }

  validate() {
    if(this.name && typeof (this.name as any).validate === 'function') {
      (this.name as any).validate();
    }
    if(this.type && typeof (this.type as any).validate === 'function') {
      (this.type as any).validate();
    }
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * - If Form is CONSTANT: the constant value.
   * - If Form is JSONPATH: the JSONPath content to fetch.
   * 
   * Note: The Value field cannot exceed 10240 characters.
   * 
   * @example
   * default
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The primary key ID template. This parameter is required only when Form is set to TEMPLATE.
   * 
   * @example
   * ${ID}
   */
  template?: string;
  /**
   * @remarks
   * - If Form is JSONPATH: the JSONPath content to fetch.
   * - If Form is TEMPLATE: the template variable.
   * 
   * Note: The Value field cannot exceed 10240 characters.
   * 
   * @example
   * $.data.requestId
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The JSONPath content to fetch.
   * 
   * Note: The Value field cannot exceed 10240 characters.
   * 
   * @example
   * $.data.messageBody
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters extends $dara.Model {
  /**
   * @remarks
   * The API key created in the DashVector console.
   * 
   * @example
   * Q34nExQH7sQ****
   */
  apiKey?: string;
  /**
   * @remarks
   * The collection name.
   * 
   * @example
   * collection1
   */
  collection?: string;
  /**
   * @remarks
   * The schema field definition of the table entry when inserting into DashVector. The event content must be in JSON format after transformation.
   */
  dashVectorSchemaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * vrs-cn-lbj3ru1***
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The DashVector database operation type.
   * 
   * @example
   * Upsert
   */
  operation?: string;
  /**
   * @remarks
   * The partition. Default value: default.
   */
  partition?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition;
  /**
   * @remarks
   * The primary key ID when inserting or deleting records. If this field is not specified, a random primary key ID is used.
   */
  primaryKeyId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector of the record inserted into DashVector.
   */
  vector?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      collection: 'Collection',
      dashVectorSchemaParameters: 'DashVectorSchemaParameters',
      instanceId: 'InstanceId',
      network: 'Network',
      operation: 'Operation',
      partition: 'Partition',
      primaryKeyId: 'PrimaryKeyId',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      collection: 'string',
      dashVectorSchemaParameters: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters },
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition,
      primaryKeyId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId,
      vector: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector,
    };
  }

  validate() {
    if(Array.isArray(this.dashVectorSchemaParameters)) {
      $dara.Model.validateArray(this.dashVectorSchemaParameters);
    }
    if(this.partition && typeof (this.partition as any).validate === 'function') {
      (this.partition as any).validate();
    }
    if(this.primaryKeyId && typeof (this.primaryKeyId as any).validate === 'function') {
      (this.primaryKeyId as any).validate();
    }
    if(this.vector && typeof (this.vector as any).validate === 'function') {
      (this.vector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * ORIGINAL
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The record content template for the BLOB type.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The DataHub project name.
   * 
   * @example
   * demo-project
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The role name that grants authorization to the event bus EventBridge to read Simple Log Service log content. When creating the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service", and set "Trusted Service" to "event bus".
   * 
   * @example
   * testRole
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The DataHub topic name.
   * 
   * @example
   * demo-topic
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The TUPLE type topic content pattern.
   * 
   * @example
   * {"k1":"value1","k2":"value2"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The topic type. Valid values:
   * 
   * - TUPLE
   * - BLOB
   * 
   * @example
   * TUPLE
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters extends $dara.Model {
  /**
   * @remarks
   * The record content template for the BLOB type.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The DataHub project name.
   */
  project?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * The role name that grants authorization to the event bus EventBridge to read Simple Log Service log content. When creating the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service", and set "Trusted Service" to "event bus".
   */
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The DataHub topic name.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The TUPLE type topic content pattern.
   */
  topicSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema;
  /**
   * @remarks
   * The topic type. Valid values:
   * 
   * - TUPLE
   * - BLOB
   */
  topicType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
      topicSchema: 'TopicSchema',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody,
      project: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic,
      topicSchema: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema,
      topicType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    if(this.roleName && typeof (this.roleName as any).validate === 'function') {
      (this.roleName as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    if(this.topicSchema && typeof (this.topicSchema as any).validate === 'function') {
      (this.topicSchema as any).validate();
    }
    if(this.topicType && typeof (this.topicType as any).validate === 'function') {
      (this.topicType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBeHttpEndpoint extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBody extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersDatabase extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersFeHttpEndpoint extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersNetworkType extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersPassword extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersQueryEndpoint extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersSecurityGroupId extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersTable extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersUserName extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVSwitchIds extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVpcId extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters extends $dara.Model {
  beHttpEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBeHttpEndpoint;
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBody;
  database?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersDatabase;
  feHttpEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersFeHttpEndpoint;
  networkType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersNetworkType;
  password?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersPassword;
  queryEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersQueryEndpoint;
  securityGroupId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersSecurityGroupId;
  table?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersTable;
  userName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersUserName;
  vSwitchIds?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVSwitchIds;
  vpcId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      beHttpEndpoint: 'BeHttpEndpoint',
      body: 'Body',
      database: 'Database',
      feHttpEndpoint: 'FeHttpEndpoint',
      networkType: 'NetworkType',
      password: 'Password',
      queryEndpoint: 'QueryEndpoint',
      securityGroupId: 'SecurityGroupId',
      table: 'Table',
      userName: 'UserName',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beHttpEndpoint: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBeHttpEndpoint,
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBody,
      database: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersDatabase,
      feHttpEndpoint: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersFeHttpEndpoint,
      networkType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersNetworkType,
      password: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersPassword,
      queryEndpoint: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersQueryEndpoint,
      securityGroupId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersSecurityGroupId,
      table: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersTable,
      userName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersUserName,
      vSwitchIds: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVSwitchIds,
      vpcId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVpcId,
    };
  }

  validate() {
    if(this.beHttpEndpoint && typeof (this.beHttpEndpoint as any).validate === 'function') {
      (this.beHttpEndpoint as any).validate();
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.database && typeof (this.database as any).validate === 'function') {
      (this.database as any).validate();
    }
    if(this.feHttpEndpoint && typeof (this.feHttpEndpoint as any).validate === 'function') {
      (this.feHttpEndpoint as any).validate();
    }
    if(this.networkType && typeof (this.networkType as any).validate === 'function') {
      (this.networkType as any).validate();
    }
    if(this.password && typeof (this.password as any).validate === 'function') {
      (this.password as any).validate();
    }
    if(this.queryEndpoint && typeof (this.queryEndpoint as any).validate === 'function') {
      (this.queryEndpoint as any).validate();
    }
    if(this.securityGroupId && typeof (this.securityGroupId as any).validate === 'function') {
      (this.securityGroupId as any).validate();
    }
    if(this.table && typeof (this.table as any).validate === 'function') {
      (this.table as any).validate();
    }
    if(this.userName && typeof (this.userName as any).validate === 'function') {
      (this.userName as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    if(this.vpcId && typeof (this.vpcId as any).validate === 'function') {
      (this.vpcId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParametersMappingRulesColumnValue extends $dara.Model {
  /**
   * @remarks
   * The extraction method.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The extraction path.
   * 
   * @example
   * $.data.value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParametersMappingRules extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * age
   */
  columnName?: string;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * text
   */
  columnType?: string;
  /**
   * @remarks
   * The column value extraction rule.
   */
  columnValue?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParametersMappingRulesColumnValue;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      columnValue: 'ColumnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      columnValue: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParametersMappingRulesColumnValue,
    };
  }

  validate() {
    if(this.columnValue && typeof (this.columnValue as any).validate === 'function') {
      (this.columnValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParameters extends $dara.Model {
  /**
   * @remarks
   * The catalog name.
   * 
   * @example
   * cat1
   */
  catalogName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table1
   */
  eventTableName?: string;
  /**
   * @remarks
   * The field mapping rules.
   */
  mappingRules?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParametersMappingRules[];
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * name1
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      eventTableName: 'EventTableName',
      mappingRules: 'MappingRules',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      eventTableName: 'string',
      mappingRules: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParametersMappingRules },
      namespaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mappingRules)) {
      $dara.Model.validateArray(this.mappingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The delivery concurrency. The minimum value is 1.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * mFunction
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The invocation type. Valid values:
   * - Sync: Synchronous.
   * - Async: Asynchronous.
   * 
   * @example
   * Async
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   * 
   * @example
   * LATEST
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * myService
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The content body sent to the function.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. The minimum value is 1.
   */
  concurrency?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency;
  /**
   * @remarks
   * The transformation rule for the event content format.
   */
  dataFormat?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation type. Valid values:
   * - Sync: Synchronous.
   * - Async: Asynchronous.
   */
  invocationType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   */
  qualifier?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The name of the service.
   */
  serviceName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      concurrency: 'Concurrency',
      dataFormat: 'DataFormat',
      functionName: 'FunctionName',
      invocationType: 'InvocationType',
      qualifier: 'Qualifier',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody,
      concurrency: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency,
      dataFormat: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat,
      functionName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName,
      invocationType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType,
      qualifier: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier,
      serviceName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.concurrency && typeof (this.concurrency as any).validate === 'function') {
      (this.concurrency as any).validate();
    }
    if(this.dataFormat && typeof (this.dataFormat as any).validate === 'function') {
      (this.dataFormat as any).validate();
    }
    if(this.functionName && typeof (this.functionName as any).validate === 'function') {
      (this.functionName as any).validate();
    }
    if(this.invocationType && typeof (this.invocationType as any).validate === 'function') {
      (this.invocationType as any).validate();
    }
    if(this.qualifier && typeof (this.qualifier as any).validate === 'function') {
      (this.qualifier as any).validate();
    }
    if(this.serviceName && typeof (this.serviceName as any).validate === 'function') {
      (this.serviceName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The execution name.
   * 
   * @example
   * 123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The flow name.
   * 
   * @example
   * test-streaming-fnf
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The execution input information.
   * 
   * @example
   * 123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The role configuration.
   * 
   * @example
   * Al****FNF-x****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters extends $dara.Model {
  /**
   * @remarks
   * The execution name.
   */
  executionName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The execution input information.
   */
  input?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role configuration.
   */
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName,
      flowName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName,
      input: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName,
    };
  }

  validate() {
    if(this.executionName && typeof (this.executionName as any).validate === 'function') {
      (this.executionName as any).validate();
    }
    if(this.flowName && typeof (this.flowName as any).validate === 'function') {
      (this.flowName as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.roleName && typeof (this.roleName as any).validate === 'function') {
      (this.roleName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The Kafka write confirmation pattern:
   * - acks=0: No response is required from the server. Performance is high, but the risk of data loss is high.
   * - acks=1: A response is returned after the primary node writes successfully. Performance is moderate, and the risk of data loss is moderate. Data loss may occur if the primary node has a breakdown.
   * - acks=all: A response is returned after the primary node writes successfully and the secondary nodes complete synchronization. Performance is low, but data is more secure. Data loss occurs only if both the primary and secondary nodes have a breakdown.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersDynamicTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation type. Valid values:
   * CONSTANT: fixed value.
   * JSONPATH: fetch from upstream based on the path.
   */
  form?: string;
  /**
   * @remarks
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The value.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * Defaut_1283278472_sad****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersKey extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The identity of the message.
   * 
   * @example
   * key
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersValue extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The Kafka write confirmation pattern:
   * - acks=0: No response is required from the server. Performance is high, but the risk of data loss is high.
   * - acks=1: A response is returned after the primary node writes successfully. Performance is moderate, and the risk of data loss is moderate. Data loss may occur if the primary node has a breakdown.
   * - acks=all: A response is returned after the primary node writes successfully and the secondary nodes complete synchronization. Performance is low, but data is more secure. Data loss occurs only if both the primary and secondary nodes have a breakdown.
   */
  acks?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks;
  compressionType?: string;
  /**
   * @remarks
   * Specifies the destination topic strategy for message routing. If both the topic parameter and the topics parameter are specified, the value of the topics parameter takes precedence. Two configuration modes are supported:
   *     1. **Static constant mode**: Specify a fixed topic name string (such as "order_created"). All messages are sent to this topic.
   *     2. **Dynamic extraction mode**: Specify a standard JSONPath expression (such as "$.user.id" or "$.metadata.category"). The system parses the upstream message body and extracts the value of the matching field as the destination topic name.
   * [_single.resp.200.
   */
  dynamicTopic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersDynamicTopic;
  /**
   * @remarks
   * The target service type is Message Queue for Apache Kafka.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The identity of the message.
   */
  key?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The topic name.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The message body content.
   */
  value?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      compressionType: 'CompressionType',
      dynamicTopic: 'DynamicTopic',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks,
      compressionType: 'string',
      dynamicTopic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersDynamicTopic,
      instanceId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId,
      key: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersKey,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersTopic,
      value: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersValue,
    };
  }

  validate() {
    if(this.acks && typeof (this.acks as any).validate === 'function') {
      (this.acks as any).validate();
    }
    if(this.dynamicTopic && typeof (this.dynamicTopic as any).validate === 'function') {
      (this.dynamicTopic as any).validate();
    }
    if(this.instanceId && typeof (this.instanceId as any).validate === 'function') {
      (this.instanceId as any).validate();
    }
    if(this.key && typeof (this.key as any).validate === 'function') {
      (this.key as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersIsBase64Encode extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * Specifies whether to enable Base64 encoding.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersQueueName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The name of the Simple Message Queue (formerly MNS) queue.
   * 
   * @example
   * MyQueue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Indicates whether Base64 decoding is enabled.
   */
  isBase64Encode?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The target service type is Simple Message Queue (formerly MNS).
   */
  queueName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersBody,
      isBase64Encode: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersIsBase64Encode,
      queueName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersQueueName,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.isBase64Encode && typeof (this.isBase64Encode as any).validate === 'function') {
      (this.isBase64Encode as any).validate();
    }
    if(this.queueName && typeof (this.queueName as any).validate === 'function') {
      (this.queueName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersMessageId extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey extends $dara.Model {
  /**
   * @remarks
   * The data format. Default value: JSONPATH.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The routing rule of the message.
   * 
   * @example
   * housekeeping
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersBody;
  /**
   * @remarks
   * The RabbitMQ instance endpoint.
   * 
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @remarks
   * The exchange name used for message routing.
   * 
   * @example
   * my_exchange
   */
  exchange?: string;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersMessageId;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The username password used for identity verification.
   * 
   * @example
   * ****
   */
  password?: string;
  /**
   * @remarks
   * The filter properties.
   */
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @remarks
   * The name of the queue used to store messages.
   * 
   * @example
   * my_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The routing rule of messages. This parameter is required only when TargetType is set to Exchange.
   */
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The target type.
   * 
   * @example
   * exchange
   */
  targetType?: string;
  /**
   * @remarks
   * The username used for identity verification.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz9qqeovkwjxlu9uc****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The virtual hostname of the RabbitMQ instance.
   * 
   * @example
   * Vhost1
   */
  virtualHostName?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-2zehizpoendb3****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      body: 'Body',
      endpoint: 'Endpoint',
      exchange: 'Exchange',
      messageId: 'MessageId',
      networkType: 'NetworkType',
      password: 'Password',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      securityGroupId: 'SecurityGroupId',
      targetType: 'TargetType',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersBody,
      endpoint: 'string',
      exchange: 'string',
      messageId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersMessageId,
      networkType: 'string',
      password: 'string',
      properties: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersProperties,
      queueName: 'string',
      routingKey: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey,
      securityGroupId: 'string',
      targetType: 'string',
      username: 'string',
      vSwitchIds: 'string',
      virtualHostName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.messageId && typeof (this.messageId as any).validate === 'function') {
      (this.messageId as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.routingKey && typeof (this.routingKey as any).validate === 'function') {
      (this.routingKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The name of the Exchange on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * a_exchange
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The instance ID of ApsaraMQ for RabbitMQ.
   * 
   * @example
   * si-296cd57939a1421b****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The name of the queue on the instance.
   * 
   * @example
   * MyQueue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The routing rule of the message.
   * 
   * @example
   * housekeeping
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The target type. Valid values:
   * Exchange: Exchange mode.
   * Queue: Queue mode.
   * 
   * @example
   * Queue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The name of the vhost on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * rabbit-host
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The Exchange mode. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  exchange?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The target service type is ApsaraMQ for RabbitMQ.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The filter properties.
   */
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The Queue mode. This parameter is required only when the TargetType parameter is set to Queue.
   */
  queueName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The routing rule of the message. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The target type.
   */
  targetType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost on the ApsaraMQ for RabbitMQ instance.
   */
  virtualHostName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      targetType: 'TargetType',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody,
      exchange: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange,
      instanceId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId,
      messageId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId,
      properties: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties,
      queueName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName,
      routingKey: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey,
      targetType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType,
      virtualHostName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.exchange && typeof (this.exchange as any).validate === 'function') {
      (this.exchange as any).validate();
    }
    if(this.instanceId && typeof (this.instanceId as any).validate === 'function') {
      (this.instanceId as any).validate();
    }
    if(this.messageId && typeof (this.messageId as any).validate === 'function') {
      (this.messageId as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.queueName && typeof (this.queueName as any).validate === 'function') {
      (this.queueName as any).validate();
    }
    if(this.routingKey && typeof (this.routingKey as any).validate === 'function') {
      (this.routingKey as any).validate();
    }
    if(this.targetType && typeof (this.targetType as any).validate === 'function') {
      (this.targetType as any).validate();
    }
    if(this.virtualHostName && typeof (this.virtualHostName as any).validate === 'function') {
      (this.virtualHostName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The UNIX timestamp.
   * 
   * @example
   * 1636597951964
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersGroup extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The Group ID of the consumer group.
   * 
   * @example
   * GID_******
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * myTopic
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The consumption checkpoint.
   */
  consumeTimestamp?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The consumer group information of ApsaraMQ for RocketMQ.
   */
  group?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The RocketMQ instance ID.
   * 
   * @example
   * MQ_INST_1825725063814405_BZ******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of ApsaraMQ for RocketMQ.
   * 
   * @example
   * Cloud_5
   */
  instanceType?: string;
  /**
   * @remarks
   * The topic of the ApsaraMQ for RocketMQ instance.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersTopic;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'ConsumeTimestamp',
      group: 'Group',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersConsumeTimestamp,
      group: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersGroup,
      instanceId: 'string',
      instanceType: 'string',
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersTopic,
    };
  }

  validate() {
    if(this.consumeTimestamp && typeof (this.consumeTimestamp as any).validate === 'function') {
      (this.consumeTimestamp as any).validate();
    }
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersDeliveryOrderType extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The delivery order type.
   * 
   * @example
   * Orderly
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * vbr-8vbsvkkbpf3vb0zef****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The instance ID of ApsaraMQ for RocketMQ.
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The instance password.
   * 
   * @example
   * admin******
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - Cloud_4: Alibaba Cloud RocketMQ 4.0 instance (default).
   * - Cloud_5: Alibaba Cloud RocketMQ 5.0 instance.
   * - SelfBuilt: self-managed Apache RocketMQ cluster.
   * 
   * @example
   * Cloud_4
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The instance username.
   * 
   * @example
   * admin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - PublicNetwork
   * - PrivateNetwork
   * 
   * @example
   * PublicNetwork
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * b4bf375515f6440f942e3a20c33d****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The sharding key value.
   * 
   * @example
   * order_id
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The topic of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * topic
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vbr-8vb835n3zf9shwl****mp
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId extends $dara.Model {
  /**
   * @remarks
   * The format of the event transformation. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vbr-8vb835n3zf9shwlvb****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody;
  /**
   * @remarks
   * The delivery order type of messages.
   */
  deliveryOrderType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The instance endpoint.
   */
  instanceEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The target service type is ApsaraMQ for RocketMQ.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The instance password.
   */
  instancePassword?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The instance username.
   */
  instanceUsername?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The filter properties.
   */
  keys?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys;
  /**
   * @remarks
   * The network type. Valid values:           
   * - PublicNetwork
   * - PrivateNetwork
   */
  network?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The filter properties.
   */
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId;
  /**
   * @remarks
   * The sharding key of messages, which is used to control message partitioning.
   */
  shardingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The filter properties.
   */
  tags?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic of the ApsaraMQ for RocketMQ instance.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds;
  /**
   * @remarks
   * The VPC ID.
   */
  vpcId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      deliveryOrderType: 'DeliveryOrderType',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instancePassword: 'InstancePassword',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      keys: 'Keys',
      network: 'Network',
      properties: 'Properties',
      securityGroupId: 'SecurityGroupId',
      shardingKey: 'ShardingKey',
      tags: 'Tags',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody,
      deliveryOrderType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersDeliveryOrderType,
      instanceEndpoint: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId,
      instancePassword: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword,
      instanceType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType,
      instanceUsername: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername,
      keys: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys,
      network: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork,
      properties: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties,
      securityGroupId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId,
      shardingKey: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey,
      tags: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic,
      vSwitchIds: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds,
      vpcId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.deliveryOrderType && typeof (this.deliveryOrderType as any).validate === 'function') {
      (this.deliveryOrderType as any).validate();
    }
    if(this.instanceEndpoint && typeof (this.instanceEndpoint as any).validate === 'function') {
      (this.instanceEndpoint as any).validate();
    }
    if(this.instanceId && typeof (this.instanceId as any).validate === 'function') {
      (this.instanceId as any).validate();
    }
    if(this.instancePassword && typeof (this.instancePassword as any).validate === 'function') {
      (this.instancePassword as any).validate();
    }
    if(this.instanceType && typeof (this.instanceType as any).validate === 'function') {
      (this.instanceType as any).validate();
    }
    if(this.instanceUsername && typeof (this.instanceUsername as any).validate === 'function') {
      (this.instanceUsername as any).validate();
    }
    if(this.keys && typeof (this.keys as any).validate === 'function') {
      (this.keys as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.securityGroupId && typeof (this.securityGroupId as any).validate === 'function') {
      (this.securityGroupId as any).validate();
    }
    if(this.shardingKey && typeof (this.shardingKey as any).validate === 'function') {
      (this.shardingKey as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    if(this.vpcId && typeof (this.vpcId as any).validate === 'function') {
      (this.vpcId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
   * 
   * @example
   * {"Key_1":{"form":"CONSTANT","value":"demoKey"},"Value_1":{"form":"JSONPATH","value":"$.data.value"}}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The data format of Simple Log Service. You can select the default format or configure a specific key-value pair. Valid values:
   * 
   * - JSON
   * - KeyValue
   * 
   * @example
   * JSON
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   * 
   * @example
   * test-logstore
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * @example
   * test-project
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The role name that grants authorization to the event bus EventBridge to read Simple Log Service log content. When creating the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service", and set "Trusted Service" to "event bus".
   * 
   * @example
   * test-role
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The topic where the log resides, corresponding to the Simple Log Service reserved word "topic".
   * 
   * @example
   * topic
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The content to send to Simple Log Service.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The custom log key-value pairs. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The data format of Simple Log Service. You can select the default format or configure a specific key-value pair. Valid values:
   * 
   * - JSON
   * - KeyValue
   */
  contentType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   */
  logStore?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The Simple Log Service project.
   */
  project?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject;
  /**
   * @remarks
   * The role name that grants authorization to the event bus EventBridge to read Simple Log Service log content. When creating the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service", and set "Trusted Service" to "event bus".
   */
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic where the log resides, corresponding to the Simple Log Service reserved word "topic".
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contentSchema: 'ContentSchema',
      contentType: 'ContentType',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody,
      contentSchema: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema,
      contentType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType,
      logStore: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore,
      project: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.contentSchema && typeof (this.contentSchema as any).validate === 'function') {
      (this.contentSchema as any).validate();
    }
    if(this.contentType && typeof (this.contentType as any).validate === 'function') {
      (this.contentType as any).validate();
    }
    if(this.logStore && typeof (this.logStore as any).validate === 'function') {
      (this.logStore as any).validate();
    }
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    if(this.roleName && typeof (this.roleName as any).validate === 'function') {
      (this.roleName as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSink extends $dara.Model {
  sinkAgentRunParameters?: SinkAgentRunParameters;
  /**
   * @remarks
   * The Sink Apache RocketMQ Checkpoint parameters.
   */
  sinkApacheRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The ApiDestination target parameters.
   */
  sinkApiDestinationParameters?: SinkApiDestinationParameters;
  /**
   * @remarks
   * The Sink BaiLian parameters.
   */
  sinkBaiLianParameters?: SinkBaiLianParameters;
  /**
   * @remarks
   * The Sink Kafka connector parameters.
   */
  sinkCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The Sink Kafka parameters.
   */
  sinkCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters;
  /**
   * @remarks
   * The Sink DashVector parameters.
   */
  sinkDashVectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The Sink DataHub parameters.
   */
  sinkDataHubParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters;
  sinkDorisParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters;
  /**
   * @remarks
   * The event target name.
   */
  sinkEventHouseParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParameters;
  /**
   * @remarks
   * The function target.
   */
  sinkFcParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters;
  /**
   * @remarks
   * The Sink Fnf parameters.
   */
  sinkFnfParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters;
  /**
   * @remarks
   * The HTTPS target parameters.
   */
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The parameters for the Sink Kafka target.
   */
  sinkKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) event target.
   */
  sinkMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters;
  sinkMQTTParameters?: SinkMQTTParameters;
  sinkOSSParameters?: SinkOSSParameters;
  /**
   * @remarks
   * The Sink Open Source RabbitMQ parameters.
   */
  sinkOpenSourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters;
  sinkRabbitMQMetaParameters?: SinkRabbitMQMetaParameters;
  sinkRabbitMQMsgSyncParameters?: SinkRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The parameters for the Sink RabbitMQ target.
   */
  sinkRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * The Sink RocketMQ Checkpoint parameters.
   */
  sinkRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The Sink RocketMQ source.
   */
  sinkRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters;
  /**
   * @remarks
   * Sink SLS Parameters
   */
  sinkSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkAgentRunParameters: 'SinkAgentRunParameters',
      sinkApacheRocketMQCheckpointParameters: 'SinkApacheRocketMQCheckpointParameters',
      sinkApiDestinationParameters: 'SinkApiDestinationParameters',
      sinkBaiLianParameters: 'SinkBaiLianParameters',
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkDorisParameters: 'SinkDorisParameters',
      sinkEventHouseParameters: 'SinkEventHouseParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkHttpsParameters: 'SinkHttpsParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkMQTTParameters: 'SinkMQTTParameters',
      sinkOSSParameters: 'SinkOSSParameters',
      sinkOpenSourceRabbitMQParameters: 'SinkOpenSourceRabbitMQParameters',
      sinkRabbitMQMetaParameters: 'SinkRabbitMQMetaParameters',
      sinkRabbitMQMsgSyncParameters: 'SinkRabbitMQMsgSyncParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQCheckpointParameters: 'SinkRocketMQCheckpointParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkAgentRunParameters: SinkAgentRunParameters,
      sinkApacheRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters,
      sinkApiDestinationParameters: SinkApiDestinationParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters,
      sinkDataHubParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters,
      sinkDorisParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters,
      sinkEventHouseParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkEventHouseParameters,
      sinkFcParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters,
      sinkFnfParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters,
      sinkHttpsParameters: SinkHttpsParameters,
      sinkKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters,
      sinkMNSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters,
      sinkMQTTParameters: SinkMQTTParameters,
      sinkOSSParameters: SinkOSSParameters,
      sinkOpenSourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters,
      sinkRabbitMQMetaParameters: SinkRabbitMQMetaParameters,
      sinkRabbitMQMsgSyncParameters: SinkRabbitMQMsgSyncParameters,
      sinkRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters,
      sinkSLSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters,
    };
  }

  validate() {
    if(this.sinkAgentRunParameters && typeof (this.sinkAgentRunParameters as any).validate === 'function') {
      (this.sinkAgentRunParameters as any).validate();
    }
    if(this.sinkApacheRocketMQCheckpointParameters && typeof (this.sinkApacheRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sinkApacheRocketMQCheckpointParameters as any).validate();
    }
    if(this.sinkApiDestinationParameters && typeof (this.sinkApiDestinationParameters as any).validate === 'function') {
      (this.sinkApiDestinationParameters as any).validate();
    }
    if(this.sinkBaiLianParameters && typeof (this.sinkBaiLianParameters as any).validate === 'function') {
      (this.sinkBaiLianParameters as any).validate();
    }
    if(this.sinkCustomizedKafkaConnectorParameters && typeof (this.sinkCustomizedKafkaConnectorParameters as any).validate === 'function') {
      (this.sinkCustomizedKafkaConnectorParameters as any).validate();
    }
    if(this.sinkCustomizedKafkaParameters && typeof (this.sinkCustomizedKafkaParameters as any).validate === 'function') {
      (this.sinkCustomizedKafkaParameters as any).validate();
    }
    if(this.sinkDashVectorParameters && typeof (this.sinkDashVectorParameters as any).validate === 'function') {
      (this.sinkDashVectorParameters as any).validate();
    }
    if(this.sinkDataHubParameters && typeof (this.sinkDataHubParameters as any).validate === 'function') {
      (this.sinkDataHubParameters as any).validate();
    }
    if(this.sinkDorisParameters && typeof (this.sinkDorisParameters as any).validate === 'function') {
      (this.sinkDorisParameters as any).validate();
    }
    if(this.sinkEventHouseParameters && typeof (this.sinkEventHouseParameters as any).validate === 'function') {
      (this.sinkEventHouseParameters as any).validate();
    }
    if(this.sinkFcParameters && typeof (this.sinkFcParameters as any).validate === 'function') {
      (this.sinkFcParameters as any).validate();
    }
    if(this.sinkFnfParameters && typeof (this.sinkFnfParameters as any).validate === 'function') {
      (this.sinkFnfParameters as any).validate();
    }
    if(this.sinkHttpsParameters && typeof (this.sinkHttpsParameters as any).validate === 'function') {
      (this.sinkHttpsParameters as any).validate();
    }
    if(this.sinkKafkaParameters && typeof (this.sinkKafkaParameters as any).validate === 'function') {
      (this.sinkKafkaParameters as any).validate();
    }
    if(this.sinkMNSParameters && typeof (this.sinkMNSParameters as any).validate === 'function') {
      (this.sinkMNSParameters as any).validate();
    }
    if(this.sinkMQTTParameters && typeof (this.sinkMQTTParameters as any).validate === 'function') {
      (this.sinkMQTTParameters as any).validate();
    }
    if(this.sinkOSSParameters && typeof (this.sinkOSSParameters as any).validate === 'function') {
      (this.sinkOSSParameters as any).validate();
    }
    if(this.sinkOpenSourceRabbitMQParameters && typeof (this.sinkOpenSourceRabbitMQParameters as any).validate === 'function') {
      (this.sinkOpenSourceRabbitMQParameters as any).validate();
    }
    if(this.sinkRabbitMQMetaParameters && typeof (this.sinkRabbitMQMetaParameters as any).validate === 'function') {
      (this.sinkRabbitMQMetaParameters as any).validate();
    }
    if(this.sinkRabbitMQMsgSyncParameters && typeof (this.sinkRabbitMQMsgSyncParameters as any).validate === 'function') {
      (this.sinkRabbitMQMsgSyncParameters as any).validate();
    }
    if(this.sinkRabbitMQParameters && typeof (this.sinkRabbitMQParameters as any).validate === 'function') {
      (this.sinkRabbitMQParameters as any).validate();
    }
    if(this.sinkRocketMQCheckpointParameters && typeof (this.sinkRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sinkRocketMQCheckpointParameters as any).validate();
    }
    if(this.sinkRocketMQParameters && typeof (this.sinkRocketMQParameters as any).validate === 'function') {
      (this.sinkRocketMQParameters as any).validate();
    }
    if(this.sinkSLSParameters && typeof (this.sinkSLSParameters as any).validate === 'function') {
      (this.sinkSLSParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the Apache RocketMQ instance.
   * 
   * @example
   * 192.168.1.1:9876
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The password of the Apache RocketMQ instance.
   * 
   * @example
   * ****
   */
  instancePassword?: string;
  /**
   * @remarks
   * The username of the Apache RocketMQ instance.
   * 
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
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
   * sg-mw43*****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic of the Apache RocketMQ instance.
   */
  topics?: string[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-dwaafds****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-adw1awdw*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceEndpoint: 'InstanceEndpoint',
      instancePassword: 'InstancePassword',
      instanceUsername: 'InstanceUsername',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topics: 'Topics',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
      vpcId: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
  /**
   * @remarks
   * The connector configuration.
   * 
   * @example
   * {
   *           "connector.class": "com.mongodb.kafka.connect.MongoSinkConnector",
   *           "tasks.max": "1",
   *           "topics": "sourceA,sourceB"
   *         }
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The connector name.
   * 
   * @example
   * test-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @remarks
   * The download URL of the OSS resource ZIP package.
   * 
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV2i3gZJ"
   */
  connectorPackageUrl?: string;
  /**
   * @remarks
   * The connector parameters.
   */
  connectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
  /**
   * @remarks
   * The Kafka instance configuration.
   * 
   * @example
   * {
   *         "group.id": "connect-eb-cluster-KAFKA_CONNECTORC",
   *         "offset.storage.topic": "connect-eb-offset-KAFKA_CONNECTOR_yjqC8K5ewC",
   *         "config.storage.topic": "connect-eb-config-KAFKA_CONNECTOR_yjqC8K5ewC",
   *         "status.storage.topic": "connect-eb-status-KAFKA_CONNECTOR_yjqC8K5ewC",
   *         "consumer.group.id": "connector-eb-cluster-KAFKA_CONNECTOR_yjqC8K5ewC-mongo-sink",
   *         "bootstrap.servers": "alikafka-post:9092"
   *       }
   */
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.connectorParameters && typeof (this.connectorParameters as any).validate === 'function') {
      (this.connectorParameters as any).validate();
    }
    if(this.workerParameters) {
      $dara.Model.validateMap(this.workerParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gtm-cn-k2c2yfg****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters extends $dara.Model {
  /**
   * @remarks
   * The network address and port number of the data subscription channel.
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The consumption checkpoint, which is the timestamp when the SDK client consumes the first data entry. The value is a Unix timestamp.
   * 
   * @example
   * 1620962769
   */
  initCheckPoint?: string;
  /**
   * @remarks
   * The password of the consumer group account.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * HG9
   */
  sid?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1611b337285f44e2936a2c4170****
   */
  taskId?: string;
  /**
   * @remarks
   * The subscription topic of the data subscription channel.
   * 
   * @example
   * TP_TEST_UNDERWRITE_ISSUE
   */
  topic?: string;
  /**
   * @remarks
   * The account of the consumer group.
   * 
   * @example
   * admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      brokerUrl: 'BrokerUrl',
      initCheckPoint: 'InitCheckPoint',
      password: 'Password',
      sid: 'Sid',
      taskId: 'TaskId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerUrl: 'string',
      initCheckPoint: 'string',
      password: 'string',
      sid: 'string',
      taskId: 'string',
      topic: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * my-event-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * @example
   * my-event-rule
   */
  eventRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventRuleName: 'EventRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventRuleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The Group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * GID_TEST
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * bastionhost-cn-i7m2gwt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network configuration. The default value is Default. For VPC networks, the value is PublicNetwork.
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The offset.
   * 
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-5ud5f3p0rqqis69****eho7cp
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_empower_1642473600414
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1rmi8rind7eo50c****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The encoding format of the message body. Valid values:
   * 
   * - JSON
   * - Text
   * - Binary
   * 
   * @example
   * JSON
   */
  valueDataType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-wz9ki1qdlx3cx5cbf****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Base64 decoding is enabled.
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
   * work4
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters extends $dara.Model {
  /**
   * @remarks
   * The encoding format of the message body. Valid values:
   * 
   * - JSON
   * - Text
   * - Binary
   * 
   * @example
   * JSON
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * bastionhost-cn-zvp27kc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type.
   */
  networkType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * migration_instance
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * VPC ID。
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataType: 'BodyDataType',
      instanceId: 'InstanceId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataType: 'string',
      instanceId: 'string',
      networkType: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * bucket_abc
   */
  bucketName?: string;
  /**
   * @remarks
   * The delimiter. In chunked loading mode, this delimiter is used as the text chunking identifier. The default delimiter is the newline character 
   * .
   * 
   * @example
   * \\n
   */
  delimiter?: string;
  /**
   * @remarks
   * The document loader.
   * 
   * @example
   * TextLoader
   */
  loadFormat?: string;
  /**
   * @remarks
   * The data loading mode. "single" indicates single-document loading, and "element" indicates chunked loading. Valid values: single/element. Default value: single.
   * 
   * @example
   * single
   */
  loadMode?: string;
  /**
   * @remarks
   * The file path prefix.
   * 
   * @example
   * fun/document/
   */
  prefix?: string;
  /**
   * @remarks
   * The name of the role that grants authorization to the event bus EventBridge to read OSS files. The role must have at least read-only permissions on OSS.
   * 
   * @example
   * eventbridge_oss_role
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      delimiter: 'Delimiter',
      loadFormat: 'LoadFormat',
      loadMode: 'LoadMode',
      prefix: 'Prefix',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      delimiter: 'string',
      loadFormat: 'string',
      loadMode: 'string',
      prefix: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The data type of the message body.
   * 
   * @example
   * Json
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password used to connect to the open source RabbitMQ instance.
   * 
   * @example
   * ****
   */
  password?: string;
  /**
   * @remarks
   * The queue name of the open source RabbitMQ instance.
   * 
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-m5edtu24f12345****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The username used to connect to the open source RabbitMQ instance.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The virtual host name of the open source RabbitMQ instance.
   * 
   * @example
   * Vhost1
   */
  virtualHostName?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-m5e3sv4b12345****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bodyDataType: 'BodyDataType',
      endpoint: 'Endpoint',
      networkType: 'NetworkType',
      password: 'Password',
      queueName: 'QueueName',
      securityGroupId: 'SecurityGroupId',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bodyDataType: 'string',
      endpoint: 'string',
      networkType: 'string',
      password: 'string',
      queueName: 'string',
      securityGroupId: 'string',
      username: 'string',
      vSwitchIds: 'string',
      virtualHostName: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c83555068b6******ad213f565f209
   */
  clusterId?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * JSON
   */
  dataType?: string;
  /**
   * @remarks
   * The custom labels attached to the event.
   * 
   * @example
   * {"source":"prometheus-prod"}
   */
  externalLabels?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * __name__=.*
   */
  labels?: string;
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
   * The role used to access Prometheus data.
   * 
   * @example
   * testRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataType: 'DataType',
      externalLabels: 'ExternalLabels',
      labels: 'Labels',
      regionId: 'RegionId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataType: 'string',
      externalLabels: 'string',
      labels: 'string',
      regionId: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID of ApsaraMQ for RabbitMQ.
   * 
   * @example
   * dbaudit-cn-7mz2hqo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * liuyang
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the vhost on the ApsaraMQ for RabbitMQ instance.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID of ApsaraMQ for RocketMQ.
   * 
   * @example
   * rmq-cn-jte3w******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of ApsaraMQ for RocketMQ.
   * 
   * @example
   * Cloud_5
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
   * The topic of the ApsaraMQ for RocketMQ instance.
   */
  topics?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The encoding format of the message body. Valid values:
   * 
   * - JSON
   * - Text
   * - Binary
   * 
   * @example
   * JSON
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The SQL filter statement.
   * 
   * @example
   * index > 10
   */
  filterSql?: string;
  /**
   * @remarks
   * The message filter type.
   * 
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @remarks
   * The Group ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID_group1
   */
  groupID?: string;
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
   * The instance ID of ApsaraMQ for RocketMQ.
   * 
   * @example
   * i-f8zbher64dlm58pl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * - PublicNetwork
   * - PrivateNetwork
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
   * 123
   */
  instancePassword?: string;
  /**
   * @remarks
   * The security group information of the instance.
   * 
   * @example
   * sg-m5edtu24f12345****
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - Cloud_4: Alibaba Cloud RocketMQ 4.0 instance (default).
   * - Cloud_5: Alibaba Cloud RocketMQ 5.0 instance.
   * - SelfBuilt: self-managed Apache RocketMQ cluster.
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance username.
   * 
   * @example
   * admin**
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The vSwitch information of the instance.
   * 
   * @example
   * vsw-m5ev8asdc6h123456****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1a4gmlk31hy***l3ss
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The network type. Valid values:           
   * - PublicNetwork
   * - PrivateNetwork
   * 
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The consumption offset of the message. Valid values:
   * CONSUMEFROMLASTOFFSET: consumption starts from the latest offset.
   * CONSUMEFROMFIRSTOFFSET: consumption starts from the earliest offset.
   * CONSUMEFROMTIMESTAMP: consumption starts from the offset at a specified point in time.
   * 
   * @example
   * CONSUMEFROMTIMESTAMP
   */
  offset?: string;
  /**
   * @remarks
   * The region ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-m5edtu24f12345****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The filter tag of the message.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp. This parameter is valid only when the Offset parameter is set to CONSUMEFROMTIMESTAMP.
   * 
   * @example
   * 1670742074043
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic of the message.
   * 
   * @example
   * topic_add_anima
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-m5e3sv4b12345****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bodyDataType: 'BodyDataType',
      filterSql: 'FilterSql',
      filterType: 'FilterType',
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
      network: 'Network',
      offset: 'Offset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bodyDataType: 'string',
      filterSql: 'string',
      filterType: 'string',
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
      network: 'string',
      offset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      tag: 'string',
      timestamp: 'number',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The initial consumption position. You can select the earliest or latest position, which corresponds to "begin" or "end" respectively. You can also start consumption from a specified time in seconds.
   * 
   * @example
   * begin
   */
  consumePosition?: string;
  /**
   * @remarks
   * The Group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * go-dts-shelf-group
   */
  consumerGroup?: string;
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
   * dmmzk
   */
  project?: string;
  /**
   * @remarks
   * The role name that grants authorization to the event bus EventBridge to read Simple Log Service log content. When creating the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service", and set "Trusted Service" to "event bus".
   * 
   * @example
   * testRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      consumerGroup: 'ConsumerGroup',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      consumerGroup: 'string',
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSource extends $dara.Model {
  /**
   * @remarks
   * The parameters for the Source RocketMQ Checkpoint source.
   */
  sourceApacheRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters for the custom connector Apache Kafka event source.
   */
  sourceCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The parameters for the custom Kafka event source.
   */
  sourceCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters for the DTS source.
   */
  sourceDTSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters;
  /**
   * @remarks
   * The parameters for the EventBus source.
   */
  sourceEventBusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters;
  sourceFeiShuDocsParameters?: SourceFeiShuDocsParameters;
  sourceJDBCParameters?: SourceJDBCParameters;
  /**
   * @remarks
   * The parameters for the Kafka source.
   */
  sourceKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters;
  /**
   * @remarks
   * The parameters for the Simple Message Queue (formerly MNS) source.
   */
  sourceMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters;
  /**
   * @remarks
   * The parameters for the MQTT source.
   */
  sourceMQTTParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters;
  /**
   * @remarks
   * The parameters for the MySQL source.
   */
  sourceMySQLParameters?: SourceMySQLParameters;
  /**
   * @remarks
   * The parameters for the OSS event source.
   */
  sourceOSSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters;
  /**
   * @remarks
   * The parameters for the open source RabbitMQ source.
   */
  sourceOpenSourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters;
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  /**
   * @remarks
   * The parameters for the Prometheus event source.
   */
  sourcePrometheusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters;
  sourceRabbitMQMetaParameters?: SourceRabbitMQMetaParameters;
  sourceRabbitMQMsgSyncParameters?: SourceRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The parameters for the RabbitMQ source.
   */
  sourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters for the Source RocketMQ Checkpoint source.
   */
  sourceRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters for the RocketMQ source.
   */
  sourceRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters for the Simple Log Service source.
   */
  sourceSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sourceApacheRocketMQCheckpointParameters: 'SourceApacheRocketMQCheckpointParameters',
      sourceCustomizedKafkaConnectorParameters: 'SourceCustomizedKafkaConnectorParameters',
      sourceCustomizedKafkaParameters: 'SourceCustomizedKafkaParameters',
      sourceDTSParameters: 'SourceDTSParameters',
      sourceEventBusParameters: 'SourceEventBusParameters',
      sourceFeiShuDocsParameters: 'SourceFeiShuDocsParameters',
      sourceJDBCParameters: 'SourceJDBCParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceMQTTParameters: 'SourceMQTTParameters',
      sourceMySQLParameters: 'SourceMySQLParameters',
      sourceOSSParameters: 'SourceOSSParameters',
      sourceOpenSourceRabbitMQParameters: 'SourceOpenSourceRabbitMQParameters',
      sourcePostgreSQLParameters: 'SourcePostgreSQLParameters',
      sourcePrometheusParameters: 'SourcePrometheusParameters',
      sourceRabbitMQMetaParameters: 'SourceRabbitMQMetaParameters',
      sourceRabbitMQMsgSyncParameters: 'SourceRabbitMQMsgSyncParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQCheckpointParameters: 'SourceRocketMQCheckpointParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceApacheRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters,
      sourceEventBusParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters,
      sourceFeiShuDocsParameters: SourceFeiShuDocsParameters,
      sourceJDBCParameters: SourceJDBCParameters,
      sourceKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters,
      sourceMNSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters,
      sourceMQTTParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters,
      sourcePostgreSQLParameters: SourcePostgreSQLParameters,
      sourcePrometheusParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters,
      sourceRabbitMQMetaParameters: SourceRabbitMQMetaParameters,
      sourceRabbitMQMsgSyncParameters: SourceRabbitMQMsgSyncParameters,
      sourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters,
      sourceRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters,
      sourceRocketMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters,
      sourceSLSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters,
    };
  }

  validate() {
    if(this.sourceApacheRocketMQCheckpointParameters && typeof (this.sourceApacheRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sourceApacheRocketMQCheckpointParameters as any).validate();
    }
    if(this.sourceCustomizedKafkaConnectorParameters && typeof (this.sourceCustomizedKafkaConnectorParameters as any).validate === 'function') {
      (this.sourceCustomizedKafkaConnectorParameters as any).validate();
    }
    if(this.sourceCustomizedKafkaParameters && typeof (this.sourceCustomizedKafkaParameters as any).validate === 'function') {
      (this.sourceCustomizedKafkaParameters as any).validate();
    }
    if(this.sourceDTSParameters && typeof (this.sourceDTSParameters as any).validate === 'function') {
      (this.sourceDTSParameters as any).validate();
    }
    if(this.sourceEventBusParameters && typeof (this.sourceEventBusParameters as any).validate === 'function') {
      (this.sourceEventBusParameters as any).validate();
    }
    if(this.sourceFeiShuDocsParameters && typeof (this.sourceFeiShuDocsParameters as any).validate === 'function') {
      (this.sourceFeiShuDocsParameters as any).validate();
    }
    if(this.sourceJDBCParameters && typeof (this.sourceJDBCParameters as any).validate === 'function') {
      (this.sourceJDBCParameters as any).validate();
    }
    if(this.sourceKafkaParameters && typeof (this.sourceKafkaParameters as any).validate === 'function') {
      (this.sourceKafkaParameters as any).validate();
    }
    if(this.sourceMNSParameters && typeof (this.sourceMNSParameters as any).validate === 'function') {
      (this.sourceMNSParameters as any).validate();
    }
    if(this.sourceMQTTParameters && typeof (this.sourceMQTTParameters as any).validate === 'function') {
      (this.sourceMQTTParameters as any).validate();
    }
    if(this.sourceMySQLParameters && typeof (this.sourceMySQLParameters as any).validate === 'function') {
      (this.sourceMySQLParameters as any).validate();
    }
    if(this.sourceOSSParameters && typeof (this.sourceOSSParameters as any).validate === 'function') {
      (this.sourceOSSParameters as any).validate();
    }
    if(this.sourceOpenSourceRabbitMQParameters && typeof (this.sourceOpenSourceRabbitMQParameters as any).validate === 'function') {
      (this.sourceOpenSourceRabbitMQParameters as any).validate();
    }
    if(this.sourcePostgreSQLParameters && typeof (this.sourcePostgreSQLParameters as any).validate === 'function') {
      (this.sourcePostgreSQLParameters as any).validate();
    }
    if(this.sourcePrometheusParameters && typeof (this.sourcePrometheusParameters as any).validate === 'function') {
      (this.sourcePrometheusParameters as any).validate();
    }
    if(this.sourceRabbitMQMetaParameters && typeof (this.sourceRabbitMQMetaParameters as any).validate === 'function') {
      (this.sourceRabbitMQMetaParameters as any).validate();
    }
    if(this.sourceRabbitMQMsgSyncParameters && typeof (this.sourceRabbitMQMsgSyncParameters as any).validate === 'function') {
      (this.sourceRabbitMQMsgSyncParameters as any).validate();
    }
    if(this.sourceRabbitMQParameters && typeof (this.sourceRabbitMQParameters as any).validate === 'function') {
      (this.sourceRabbitMQParameters as any).validate();
    }
    if(this.sourceRocketMQCheckpointParameters && typeof (this.sourceRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sourceRocketMQCheckpointParameters as any).validate();
    }
    if(this.sourceRocketMQParameters && typeof (this.sourceRocketMQParameters as any).validate === 'function') {
      (this.sourceRocketMQParameters as any).validate();
    }
    if(this.sourceSLSParameters && typeof (this.sourceSLSParameters as any).validate === 'function') {
      (this.sourceSLSParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsTransforms extends $dara.Model {
  /**
   * @remarks
   * The ARN of the cloud service, such as the ARN of a function in Function Compute.
   * 
   * @example
   * acs:fc:cn-hangzhou:*****:services/demo-service.LATEST/functions/demo-func
   */
  arn?: string;
  baiLianAgentTransformParameters?: BaiLianAgentTransformParameters;
  dashScopeTransformParameters?: DashScopeTransformParameters;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      baiLianAgentTransformParameters: 'BaiLianAgentTransformParameters',
      dashScopeTransformParameters: 'DashScopeTransformParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      baiLianAgentTransformParameters: BaiLianAgentTransformParameters,
      dashScopeTransformParameters: DashScopeTransformParameters,
    };
  }

  validate() {
    if(this.baiLianAgentTransformParameters && typeof (this.baiLianAgentTransformParameters as any).validate === 'function') {
      (this.baiLianAgentTransformParameters as any).validate();
    }
    if(this.dashScopeTransformParameters && typeof (this.dashScopeTransformParameters as any).validate === 'function') {
      (this.dashScopeTransformParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamings extends $dara.Model {
  /**
   * @remarks
   * The description of the event stream.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The name of the event stream.
   * 
   * @example
   * name
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * The event filtering rule. If not specified, all events are matched.
   */
  filterPattern?: string;
  metadata?: string;
  /**
   * @remarks
   * The runtime environment parameters.
   */
  runOptions?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptions;
  /**
   * @remarks
   * The event target.
   */
  sink?: ListEventStreamingsResponseBodyDataEventStreamingsSink;
  /**
   * @remarks
   * The event source.
   */
  source?: ListEventStreamingsResponseBodyDataEventStreamingsSource;
  /**
   * @remarks
   * The status of the event stream.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The Transform configuration.
   */
  transforms?: ListEventStreamingsResponseBodyDataEventStreamingsTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      metadata: 'Metadata',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      status: 'Status',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      metadata: 'string',
      runOptions: ListEventStreamingsResponseBodyDataEventStreamingsRunOptions,
      sink: ListEventStreamingsResponseBodyDataEventStreamingsSink,
      source: ListEventStreamingsResponseBodyDataEventStreamingsSource,
      status: 'string',
      transforms: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsTransforms },
    };
  }

  validate() {
    if(this.runOptions && typeof (this.runOptions as any).validate === 'function') {
      (this.runOptions as any).validate();
    }
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(Array.isArray(this.transforms)) {
      $dara.Model.validateArray(this.transforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event stream list.
   */
  eventStreamings?: ListEventStreamingsResponseBodyDataEventStreamings[];
  /**
   * @remarks
   * Indicates the position from which the current call returns. An empty value indicates that all data has been read. Set this value to the NextToken input parameter in the next invoke.
   * 
   * @example
   * 177
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventStreamings: 'EventStreamings',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamings: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamings },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventStreamings)) {
      $dara.Model.validateArray(this.eventStreamings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. Valid values:
   * 
   * Success: The request was successful.
   * 
   * Other values: A fault occurred. For more details, see error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The event stream list.
   */
  data?: ListEventStreamingsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The event streaming [xxxx] not existed!
   */
  message?: string;
  /**
   * @remarks
   * The request ID generated by Alibaba Cloud for this request.
   * 
   * @example
   * 283FF852-C4B8-58C9-9777-F88A5A16****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. A value of true is returned if the operation was successful.
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
      data: ListEventStreamingsResponseBodyData,
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

