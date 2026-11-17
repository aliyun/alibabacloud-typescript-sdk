// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiChunkTransformParameters } from "./AiChunkTransformParameters";
import { AiClassifyTransformParameters } from "./AiClassifyTransformParameters";
import { AiEmbedTransformParameters } from "./AiEmbedTransformParameters";
import { AiExtractTransformParameters } from "./AiExtractTransformParameters";
import { AiFilterTransformParameters } from "./AiFilterTransformParameters";
import { AiPrepSearchTransformParameters } from "./AiPrepSearchTransformParameters";
import { AiRedactTransformParameters } from "./AiRedactTransformParameters";
import { AiSentimentAnalysisTransformParameters } from "./AiSentimentAnalysisTransformParameters";
import { AiSummarizeTransformParameters } from "./AiSummarizeTransformParameters";
import { AiTranslateTransformParameters } from "./AiTranslateTransformParameters";
import { BaiLianAgentTransformParameters } from "./BaiLianAgentTransformParameters";
import { DashScopeTransformParameters } from "./DashScopeTransformParameters";
import { SourceFeiShuDocsParameters } from "./SourceFeiShuDocsParameters";
import { SourceJDBCParameters } from "./SourceJdbcparameters";
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { SourcePostgreSQLParameters } from "./SourcePostgreSqlparameters";
import { SourceRabbitMQMetaParameters } from "./SourceRabbitMqmetaParameters";
import { SourceRabbitMQMsgSyncParameters } from "./SourceRabbitMqmsgSyncParameters";
import { SinkAgentCoreKnowledgeBaseParameters } from "./SinkAgentCoreKnowledgeBaseParameters";
import { SinkAgentRunParameters } from "./SinkAgentRunParameters";
import { SinkApiDestinationParameters } from "./SinkApiDestinationParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { SinkHttpsParameters } from "./SinkHttpsParameters";
import { SinkKnowledgeBaseParameters } from "./SinkKnowledgeBaseParameters";
import { SinkMQTTParameters } from "./SinkMqttparameters";
import { SinkOSSParameters } from "./SinkOssparameters";
import { SinkRabbitMQMetaParameters } from "./SinkRabbitMqmetaParameters";
import { SinkRabbitMQMsgSyncParameters } from "./SinkRabbitMqmsgSyncParameters";


export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow extends $dara.Model {
  /**
   * @remarks
   * The maximum number of events that the window can hold. When this threshold is reached, data in the window is delivered downstream. If multiple windows are configured, the delivery is triggered when any of the windows reaches its threshold.
   * 
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @remarks
   * The maximum time window in seconds for batching events. When this threshold is reached, data in the window is delivered downstream. If multiple windows are configured, the delivery is triggered when any of the windows reaches its threshold.
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
  /**
   * @remarks
   * The business mode.
   * 
   * @example
   * "BusinessMode"
   */
  businessMode?: string;
  /**
   * @remarks
   * The maximum number of capacity units.
   * 
   * @example
   * 10
   */
  maxCapacityUnitCount?: number;
  /**
   * @remarks
   * The minimum number of capacity units.
   * 
   * @example
   * 1
   */
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
   * The ID of the security group for the instance where the dead-letter queue resides.
   * 
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches where the dead-letter queue resides.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC where the dead-letter queue resides.
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
   * The retry strategy. Valid values:
   * - BACKOFF_RETRY: backoff retry
   * - EXPONENTIAL_DECAY_RETRY: exponential decay retry
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
   * The batch window.
   */
  batchWindow?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow;
  /**
   * @remarks
   * The business options.
   */
  businessOption?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter queue. By default, the dead-letter queue is disabled, and messages that exceed the retry strategy are discarded.
   */
  deadLetterQueue?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The error tolerance strategy. Valid values:
   * - NONE: no error tolerance
   * - ALL: tolerate all errors
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The number of concurrent tasks.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The retry strategy for failed event delivery.
   */
  retryStrategy?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy;
  /**
   * @remarks
   * The throttling limit.
   * 
   * @example
   * 100
   */
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The timestamp.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The group ID of the consumer group.
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
   * 
   * @example
   * The template string, if any
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
   * yourPassword
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
   * The ID of the security group.
   * 
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic in the Apache RocketMQ instance.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersTopic;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-wz9qqeovkwjxlu9uc****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * The download URL of the OSS file.
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
   * The instance ID of the MSMQ Kafka edition.
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * content
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersType extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The DashVector property type.
   * 
   * @example
   * STRING
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersValue extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT.
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
   * ${content}
   */
  template?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * $.data.content
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  /**
   * @remarks
   * The property name.
   */
  name?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersName;
  /**
   * @remarks
   * The DashVector property type.
   */
  type?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParametersType;
  /**
   * @remarks
   * The property value.
   */
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
   * The template style.
   * 
   * @example
   * ${partition}
   */
  template?: string;
  /**
   * @remarks
   * - If Form is CONSTANT: the constant value.
   * - If Form is JSONPATH: the content extracted by JSONPath.
   * 
   * Note: The Value field cannot exceed 10,240 characters.
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
   * The primary key ID template. This field is required only when Form is set to TEMPLATE.
   * 
   * @example
   * ${ID}
   */
  template?: string;
  /**
   * @remarks
   * - If Form is JSONPATH: the content extracted by JSONPath.
   * - If Form is TEMPLATE: the template variable.
   * 
   * Note: The Value field cannot exceed 10,240 characters.
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
   * The template style.
   * 
   * @example
   * ${vector}
   */
  template?: string;
  /**
   * @remarks
   * The content extracted by JSONPath.
   * 
   * Note: The Value field cannot exceed 10,240 characters.
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
   * The name of the collection.
   * 
   * @example
   * collection1
   */
  collection?: string;
  /**
   * @remarks
   * The schema field definitions for the table entry when inserting data into DashVector. The transformed event content must be in JSON format.
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
   * The operation type for the DashVector database.
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
   * The primary key ID used when inserting or deleting a record. If this field is not specified, a random primary key ID is used.
   */
  primaryKeyId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector for the record inserted into DashVector.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The content template of the record. This parameter takes effect when the topic type is BLOB.
   * 
   * @example
   * {
   *   "key": "value"
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The name of the DataHub project.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * When granting authorization to the event bus EventBridge to use this role to read Simple Log Service (SLS) logs, you must meet the following conditions: when creating the role used by the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service, and select event bus as the trusted service.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The name of the DataHub topic.
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
   * The template style.
   * 
   * @example
   * {"k1":"${k1}","k2":"${k2}"}
   */
  template?: string;
  /**
   * @remarks
   * The content schema of the topic. This parameter takes effect when the topic type is TUPLE.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The type of the topic. Valid values:
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
   * The content template of the record. This parameter takes effect when the topic type is BLOB.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The name of the DataHub project.
   */
  project?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * When granting authorization to the event bus EventBridge to use this role to read Simple Log Service (SLS) logs, you must meet the following conditions: when creating the role used by the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service, and select event bus as the trusted service.
   */
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The name of the DataHub topic.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The content schema of the topic. This parameter takes effect when the topic type is TUPLE.
   */
  topicSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema;
  /**
   * @remarks
   * The type of the topic. Valid values:
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The BE public network HTTP protocol endpoint.
   * 
   * @example
   * "BeHttpEndpoint"
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBody extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * {
   *   "key": "value"
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersDatabase extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The database.
   * 
   * @example
   * "Database"
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersFeHttpEndpoint extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The FE HTTP protocol endpoint.
   * 
   * @example
   * "FeHttpEndpoint"
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersNetworkType extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The network.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersPassword extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * yourPassword
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersQueryEndpoint extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The MySQL protocol endpoint.
   * 
   * @example
   * "QueryEndpoint"
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersSecurityGroupId extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The security group.
   * 
   * @example
   * sg-mw43*****
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersTable extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The destination table.
   * 
   * @example
   * "Table"
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersUserName extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * "UserName"
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVSwitchIds extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The vSwitches.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVpcId extends $dara.Model {
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * i-2ze7u5i17mbqtx1p****
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters extends $dara.Model {
  /**
   * @remarks
   * The BE public network HTTP protocol endpoint.
   */
  beHttpEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBeHttpEndpoint;
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersBody;
  /**
   * @remarks
   * The database.
   */
  database?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersDatabase;
  /**
   * @remarks
   * The FE HTTP protocol endpoint.
   */
  feHttpEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersFeHttpEndpoint;
  /**
   * @remarks
   * The network.
   */
  networkType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersNetworkType;
  /**
   * @remarks
   * The password.
   */
  password?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersPassword;
  /**
   * @remarks
   * The MySQL protocol endpoint.
   */
  queryEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersQueryEndpoint;
  /**
   * @remarks
   * The security group.
   */
  securityGroupId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersSecurityGroupId;
  /**
   * @remarks
   * The destination table.
   */
  table?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersTable;
  /**
   * @remarks
   * The username.
   */
  userName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersUserName;
  /**
   * @remarks
   * The vSwitches.
   */
  vSwitchIds?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParametersVSwitchIds;
  /**
   * @remarks
   * The ID of the VPC.
   */
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The name of the function.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
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
   * The body content sent to the function.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency;
  /**
   * @remarks
   * The transformation rule for the event content format.
   */
  dataFormat?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The name of the function.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The name of the execution.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The name of the flow.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The input information of the execution.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The RAM role configuration.
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
   * The name of the execution.
   */
  executionName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The name of the flow.
   */
  flowName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The input information of the execution.
   */
  input?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The RAM role configuration.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The Kafka write acknowledgment mode. Valid values:
   * - acks=0: No response from the server is required. Performance is high, but the risk of data loss is high.
   * - acks=1: A response is returned after the primary node writes the data successfully. Performance and data loss risk are medium. Data may be lost if the primary node goes down.
   * - acks=all: A response is returned only after the primary node writes the data successfully and the secondary node synchronizes the data. Performance is low, but data is secure. Data is lost only when both the primary and secondary nodes go down.
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
   * - CONSTANT: Fixed value.
   * - JSONPATH: Extracted from the upstream based on the path.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * "DynamicTopic"
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The message identifier.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
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
   * The Kafka write acknowledgment mode. Valid values:
   * - acks=0: No response from the server is required. Performance is high, but the risk of data loss is high.
   * - acks=1: A response is returned after the primary node writes the data successfully. Performance and data loss risk are medium. Data may be lost if the primary node goes down.
   * - acks=all: A response is returned only after the primary node writes the data successfully and the secondary node synchronizes the data. Performance is low, but data is secure. Data is lost only when both the primary and secondary nodes go down.
   */
  acks?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks;
  /**
   * @remarks
   * The compression type.
   * 
   * @example
   * "CompressionType"
   */
  compressionType?: string;
  /**
   * @remarks
   * Specifies the target topic routing policy for messages. If both the topic and topics parameters are specified, the value of the topics parameter prevails. The following two configuration modes are supported:
   * 1. **Static constant mode**: Enter a fixed topic name string, such as "order_created". All messages are sent to this topic.
   * 2. **Dynamic extraction mode**: Enter a standard JSONPath expression, such as "$.user.id" or "$.metadata.category". The system parses the upstream message body and extracts the value of the matched field as the target topic name.
   */
  dynamicTopic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersDynamicTopic;
  /**
   * @remarks
   * The target service type is Message Queue for Apache Kafka.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The message identifier.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * Specifies whether Base64 encoding is enabled.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
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
   * Specifies whether Base64 encoding is enabled.
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
   * The routing rule for the message.
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
   * The endpoint of the RabbitMQ instance.
   * 
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the exchange used for message routing.
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
   * The password for the username used to authenticate.
   * 
   * @example
   * yourPassword
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
   * The routing rule for the message. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The ID of the security group.
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
   * The username used to authenticate.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-wz9qqeovkwjxlu9uc****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The name of the RabbitMQ virtual host.
   * 
   * @example
   * Vhost1
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The name of the exchange for the Message Queue for RabbitMQ instance.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The name of the queue for the instance.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The routing rule for the message.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The target type. Valid values:
   * - Exchange: Exchange mode.
   * - Queue: Queue mode.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The name of the vhost for the Message Queue for RabbitMQ instance.
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
   * The routing rule for the message. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The target type.
   */
  targetType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost in the ApsaraMQ for RabbitMQ instance.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The timestamp.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The group ID of the consumer group.
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
   * 
   * @example
   * The template string, if any
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
   * The consumer group information of the MSMQ message queue RocketMQ edition.
   */
  group?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The instance ID of the RocketMQ instance.
   * 
   * @example
   * MQ_INST_1825725063814405_BZ******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the MSMQ message queue RocketMQ edition.
   * 
   * @example
   * Cloud_5
   */
  instanceType?: string;
  /**
   * @remarks
   * The topic of the MSMQ message queue RocketMQ edition instance.
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The endpoint of the instance.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The instance ID of the Message Queue for Apache RocketMQ instance.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The password of the instance.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - Cloud_4: ApsaraMQ for RocketMQ 4.0 instance (default)
   * - Cloud_5: ApsaraMQ for RocketMQ 5.0 instance
   * - SelfBuilt: self-managed Apache RocketMQ cluster
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The username of the instance.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The network type. Valid values:
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The ID of the security group.
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
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The topic of the Message Queue for Apache RocketMQ instance.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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
   * The format of the event transformer. Default value: CONSTANT.
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
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * The message delivery order type.
   */
  deliveryOrderType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The endpoint of the instance.
   */
  instanceEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The target service type is Message Queue for Apache RocketMQ.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The password of the instance.
   */
  instancePassword?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The username of the instance.
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
   * The ID of the security group.
   */
  securityGroupId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId;
  /**
   * @remarks
   * The sharding key of the message, used to control message partitioning.
   */
  shardingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The filter properties.
   */
  tags?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic of the Message Queue for Apache RocketMQ instance.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic;
  /**
   * @remarks
   * The ID of the vSwitch.
   */
  vSwitchIds?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds;
  /**
   * @remarks
   * The ID of the VPC.
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The data format of SLS. You can select the default format or configure specific key-value pairs. Valid values:
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * When providing authorization for the event bus EventBridge to use this role to read SLS log content, the following conditions must be met: when creating the role used by the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service, and the trusted service must be the event bus.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The topic to which the log belongs. This corresponds to the reserved SLS field topic.
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
   * The content sent to SLS.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The custom key-value pairs of the log. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The data format of SLS. You can select the default format or configure specific key-value pairs. Valid values:
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
   * When providing authorization for the event bus EventBridge to use this role to read SLS log content, the following conditions must be met: when creating the role used by the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service, and the trusted service must be the event bus.
   */
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic to which the log belongs. This corresponds to the reserved SLS field topic.
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
  /**
   * @example
   * {"WorkspaceId":"workspace-demo","KnowledgeBaseId":"kb-demo","RoleName":"eventbridge-role"}
   */
  sinkAgentCoreKnowledgeBaseParameters?: SinkAgentCoreKnowledgeBaseParameters;
  /**
   * @remarks
   * The agent runtime delivery parameters.
   */
  sinkAgentRunParameters?: SinkAgentRunParameters;
  /**
   * @remarks
   * The sink Apache RocketMQ checkpoint parameters.
   */
  sinkApacheRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The API destination sink parameters.
   */
  sinkApiDestinationParameters?: SinkApiDestinationParameters;
  /**
   * @remarks
   * The BaiLian sink parameters.
   */
  sinkBaiLianParameters?: SinkBaiLianParameters;
  /**
   * @remarks
   * The custom Kafka sink connector parameters.
   */
  sinkCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The custom Kafka sink parameters.
   */
  sinkCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters;
  /**
   * @remarks
   * The DashVector sink parameters.
   */
  sinkDashVectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The DataHub sink parameters.
   */
  sinkDataHubParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters;
  /**
   * @remarks
   * The event source type.
   */
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
   * The FnF sink parameters.
   */
  sinkFnfParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters;
  /**
   * @remarks
   * The HTTPS sink parameters.
   */
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The sink Kafka parameters.
   */
  sinkKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters;
  /**
   * @remarks
   * The knowledge base delivery parameters.
   */
  sinkKnowledgeBaseParameters?: SinkKnowledgeBaseParameters;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) event target.
   */
  sinkMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters;
  /**
   * @remarks
   * The MQTT delivery parameters.
   */
  sinkMQTTParameters?: SinkMQTTParameters;
  /**
   * @remarks
   * The Object Storage Service (OSS) delivery parameters.
   */
  sinkOSSParameters?: SinkOSSParameters;
  /**
   * @remarks
   * The open source RabbitMQ sink parameters.
   */
  sinkOpenSourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The metadata delivery parameters for Message Queue for RabbitMQ.
   */
  sinkRabbitMQMetaParameters?: SinkRabbitMQMetaParameters;
  /**
   * @remarks
   * The message synchronization delivery parameters for Message Queue for RabbitMQ.
   */
  sinkRabbitMQMsgSyncParameters?: SinkRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The parameters for the ApsaraMQ for RabbitMQ sink.
   */
  sinkRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * The sink RocketMQ checkpoint parameters.
   */
  sinkRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The sink ApsaraMQ for RocketMQ parameters.
   */
  sinkRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The Simple Log Service (SLS) sink parameters.
   */
  sinkSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkAgentCoreKnowledgeBaseParameters: 'SinkAgentCoreKnowledgeBaseParameters',
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
      sinkKnowledgeBaseParameters: 'SinkKnowledgeBaseParameters',
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
      sinkAgentCoreKnowledgeBaseParameters: SinkAgentCoreKnowledgeBaseParameters,
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
      sinkKnowledgeBaseParameters: SinkKnowledgeBaseParameters,
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
    if(this.sinkAgentCoreKnowledgeBaseParameters && typeof (this.sinkAgentCoreKnowledgeBaseParameters as any).validate === 'function') {
      (this.sinkAgentCoreKnowledgeBaseParameters as any).validate();
    }
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
    if(this.sinkKnowledgeBaseParameters && typeof (this.sinkKnowledgeBaseParameters as any).validate === 'function') {
      (this.sinkKnowledgeBaseParameters as any).validate();
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
   * yourPassword
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
   * The ID of the security group.
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
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-dwaafds****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * The download URL of the ZIP package in OSS.
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
   * 
   * @example
   * "BrokerUrl"
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The consumption checkpoint, which is the timestamp when the SDK client consumes the first piece of data. The value is a UNIX timestamp.
   * 
   * @example
   * 1620962769
   */
  initCheckPoint?: string;
  /**
   * @remarks
   * The password of the consumer group.
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
   * The username of the consumer group.
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
   * The event bus name.
   * 
   * @example
   * my-event-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event rule name.
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
   * The group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * GID_TEST
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * bastionhost-cn-i7m2gwt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network configuration. Default value: Default. For a VPC, the value is PublicNetwork.
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
   * The ID of the security group.
   * 
   * @example
   * sg-5ud5f3p0rqqis69****eho7cp
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * topic_empower_1642473600414
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1rmi8rind7eo50c****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The encoding and decoding format of the message body. Valid values:
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
   * The ID of the VPC.
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
   * Specifies whether Base64 encoding is enabled.
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
   * The message encoding format. Valid values:
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
   * The ID of the instance.
   * 
   * @example
   * bastionhost-cn-zvp27kc****
   */
  instanceId?: string;
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
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1iv19sp1msc7zot4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * migration_instance
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp179l3llg3jjxwrq72****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vblalsi0vbhizr77****
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
   * The delimiter. In chunk loading mode, this delimiter is used as the chunk identifier for text. By default, the newline character 
   *  is used as the delimiter.
   * 
   * @example
   * \\n
   */
  delimiter?: string;
  /**
   * @example
   * ["pdf","docx"]
   */
  fileExtensions?: string[];
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
   * The data loading mode. A value of single indicates single-document loading, and a value of element indicates chunk loading. Valid values: single and element. Default value: single.
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
   * The name of the role used for authorization. The event bus EventBridge uses this role to read OSS files. The role must have at least read-only permissions on OSS.
   * 
   * @example
   * eventbridge_oss_role
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      delimiter: 'Delimiter',
      fileExtensions: 'FileExtensions',
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
      fileExtensions: { 'type': 'array', 'itemType': 'string' },
      loadFormat: 'string',
      loadMode: 'string',
      prefix: 'string',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileExtensions)) {
      $dara.Model.validateArray(this.fileExtensions);
    }
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
   * The endpoint of the instance.
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
   * yourPassword
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
   * The ID of the security group.
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
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The vhost name of the open source RabbitMQ instance.
   * 
   * @example
   * Vhost1
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * dbaudit-cn-7mz2hqo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue in the ApsaraMQ for RabbitMQ instance.
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
   * The name of the vhost in the ApsaraMQ for RabbitMQ instance.
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
   * The ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * rmq-cn-jte3w******
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the ApsaraMQ for RocketMQ instance.
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
   * The message encoding format. Valid values:
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
   * The group ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID_group1
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * i-f8zbher64dlm58pl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network information of the instance. Valid values:
   * - PublicNetwork
   * - PrivateNetwork
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
   * - Cloud_4: ApsaraMQ for RocketMQ 4.0 instance (default)
   * - Cloud_5: ApsaraMQ for RocketMQ 5.0 instance
   * - SelfBuilt: self-managed Apache RocketMQ cluster
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
   * The ID of the virtual private cloud (VPC).
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
   * - CONSUMEFROMLASTOFFSET: Consumes messages from the latest offset.
   * - CONSUMEFROMFIRSTOFFSET: Consumes messages from the earliest offset.
   * - CONSUMEFROMTIMESTAMP: Consumes messages from the offset at a specified timestamp.
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
   * The ID of the security group.
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
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * The starting consumption checkpoint. You can select the earliest or latest checkpoint, which corresponds to begin or end. You can also specify a time to start consumption in seconds.
   * 
   * @example
   * begin
   */
  consumePosition?: string;
  /**
   * @remarks
   * The group ID of the consumer that subscribes to the topic.
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
   * The role used for authorization. When the event bus EventBridge uses this role to read Simple Log Service logs, the following conditions must be met: when creating the role for the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service, and select the event bus for the trusted service.
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
   * The ApsaraMQ for RocketMQ checkpoint source.
   */
  sourceApacheRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The custom Apache Kafka connector event source.
   */
  sourceCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The custom Kafka event source.
   */
  sourceCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The DTS event source.
   */
  sourceDTSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters;
  /**
   * @remarks
   * The event bus source.
   */
  sourceEventBusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters;
  /**
   * @remarks
   * The Lark document source parameters.
   */
  sourceFeiShuDocsParameters?: SourceFeiShuDocsParameters;
  /**
   * @remarks
   * The JDBC data source parameters.
   */
  sourceJDBCParameters?: SourceJDBCParameters;
  /**
   * @remarks
   * The ApsaraMQ for Kafka source.
   */
  sourceKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) source.
   */
  sourceMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters;
  /**
   * @remarks
   * The ApsaraMQ for MQTT source.
   */
  sourceMQTTParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters;
  /**
   * @remarks
   * The MySQL event source.
   */
  sourceMySQLParameters?: SourceMySQLParameters;
  /**
   * @remarks
   * The OSS event source.
   */
  sourceOSSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters;
  /**
   * @remarks
   * The open source RabbitMQ event source.
   */
  sourceOpenSourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The PostgreSQL data source parameters.
   */
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  /**
   * @remarks
   * The Prometheus event source.
   */
  sourcePrometheusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters;
  /**
   * @remarks
   * The ApsaraMQ for RabbitMQ metadata source parameters.
   */
  sourceRabbitMQMetaParameters?: SourceRabbitMQMetaParameters;
  /**
   * @remarks
   * The ApsaraMQ for RabbitMQ message synchronization source parameters.
   */
  sourceRabbitMQMsgSyncParameters?: SourceRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The ApsaraMQ for RabbitMQ source.
   */
  sourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ checkpoint source.
   */
  sourceRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ source.
   */
  sourceRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The Simple Log Service (SLS) event source.
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
   * The AI local text chunking parameters.
   */
  aiChunkTransformParameters?: AiChunkTransformParameters;
  /**
   * @remarks
   * The AI text classification parameters.
   */
  aiClassifyTransformParameters?: AiClassifyTransformParameters;
  /**
   * @remarks
   * The AI vectorization parameters.
   */
  aiEmbedTransformParameters?: AiEmbedTransformParameters;
  /**
   * @remarks
   * The AI information extraction parameters.
   */
  aiExtractTransformParameters?: AiExtractTransformParameters;
  /**
   * @remarks
   * The AI conditional filtering parameters.
   */
  aiFilterTransformParameters?: AiFilterTransformParameters;
  /**
   * @remarks
   * The AI semantic chunking parameters.
   */
  aiPrepSearchTransformParameters?: AiPrepSearchTransformParameters;
  /**
   * @remarks
   * The AI data masking parameters.
   */
  aiRedactTransformParameters?: AiRedactTransformParameters;
  /**
   * @remarks
   * The AI emotion analysis parameters.
   */
  aiSentimentAnalysisTransformParameters?: AiSentimentAnalysisTransformParameters;
  /**
   * @remarks
   * The AI summarization parameters.
   */
  aiSummarizeTransformParameters?: AiSummarizeTransformParameters;
  /**
   * @remarks
   * The AI translation parameters.
   */
  aiTranslateTransformParameters?: AiTranslateTransformParameters;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the cloud service, such as the ARN of a function in Function Compute.
   * 
   * @example
   * acs:fc:cn-hangzhou:*****:services/demo-service.LATEST/functions/demo-func
   */
  arn?: string;
  /**
   * @remarks
   * The Model Studio agent transform parameters.
   */
  baiLianAgentTransformParameters?: BaiLianAgentTransformParameters;
  /**
   * @remarks
   * The DashScope model transform parameters.
   */
  dashScopeTransformParameters?: DashScopeTransformParameters;
  static names(): { [key: string]: string } {
    return {
      aiChunkTransformParameters: 'AiChunkTransformParameters',
      aiClassifyTransformParameters: 'AiClassifyTransformParameters',
      aiEmbedTransformParameters: 'AiEmbedTransformParameters',
      aiExtractTransformParameters: 'AiExtractTransformParameters',
      aiFilterTransformParameters: 'AiFilterTransformParameters',
      aiPrepSearchTransformParameters: 'AiPrepSearchTransformParameters',
      aiRedactTransformParameters: 'AiRedactTransformParameters',
      aiSentimentAnalysisTransformParameters: 'AiSentimentAnalysisTransformParameters',
      aiSummarizeTransformParameters: 'AiSummarizeTransformParameters',
      aiTranslateTransformParameters: 'AiTranslateTransformParameters',
      arn: 'Arn',
      baiLianAgentTransformParameters: 'BaiLianAgentTransformParameters',
      dashScopeTransformParameters: 'DashScopeTransformParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiChunkTransformParameters: AiChunkTransformParameters,
      aiClassifyTransformParameters: AiClassifyTransformParameters,
      aiEmbedTransformParameters: AiEmbedTransformParameters,
      aiExtractTransformParameters: AiExtractTransformParameters,
      aiFilterTransformParameters: AiFilterTransformParameters,
      aiPrepSearchTransformParameters: AiPrepSearchTransformParameters,
      aiRedactTransformParameters: AiRedactTransformParameters,
      aiSentimentAnalysisTransformParameters: AiSentimentAnalysisTransformParameters,
      aiSummarizeTransformParameters: AiSummarizeTransformParameters,
      aiTranslateTransformParameters: AiTranslateTransformParameters,
      arn: 'string',
      baiLianAgentTransformParameters: BaiLianAgentTransformParameters,
      dashScopeTransformParameters: DashScopeTransformParameters,
    };
  }

  validate() {
    if(this.aiChunkTransformParameters && typeof (this.aiChunkTransformParameters as any).validate === 'function') {
      (this.aiChunkTransformParameters as any).validate();
    }
    if(this.aiClassifyTransformParameters && typeof (this.aiClassifyTransformParameters as any).validate === 'function') {
      (this.aiClassifyTransformParameters as any).validate();
    }
    if(this.aiEmbedTransformParameters && typeof (this.aiEmbedTransformParameters as any).validate === 'function') {
      (this.aiEmbedTransformParameters as any).validate();
    }
    if(this.aiExtractTransformParameters && typeof (this.aiExtractTransformParameters as any).validate === 'function') {
      (this.aiExtractTransformParameters as any).validate();
    }
    if(this.aiFilterTransformParameters && typeof (this.aiFilterTransformParameters as any).validate === 'function') {
      (this.aiFilterTransformParameters as any).validate();
    }
    if(this.aiPrepSearchTransformParameters && typeof (this.aiPrepSearchTransformParameters as any).validate === 'function') {
      (this.aiPrepSearchTransformParameters as any).validate();
    }
    if(this.aiRedactTransformParameters && typeof (this.aiRedactTransformParameters as any).validate === 'function') {
      (this.aiRedactTransformParameters as any).validate();
    }
    if(this.aiSentimentAnalysisTransformParameters && typeof (this.aiSentimentAnalysisTransformParameters as any).validate === 'function') {
      (this.aiSentimentAnalysisTransformParameters as any).validate();
    }
    if(this.aiSummarizeTransformParameters && typeof (this.aiSummarizeTransformParameters as any).validate === 'function') {
      (this.aiSummarizeTransformParameters as any).validate();
    }
    if(this.aiTranslateTransformParameters && typeof (this.aiTranslateTransformParameters as any).validate === 'function') {
      (this.aiTranslateTransformParameters as any).validate();
    }
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
   * The event filtering rule. If you do not specify this parameter, all events are matched.
   * 
   * @example
   * {
   * "source": [
   * {
   * "prefix": "acs:mns"
   * }
   * ],
   * "type": [
   * {
   * "prefix": "mns:Queue"
   * }
   * ],
   * "subject": [
   * {
   * "prefix": "acs:mns:cn-hangzhou:123456789098****:queues/zeus"
   * }
   * ]
   * }
   */
  filterPattern?: string;
  /**
   * @remarks
   * The common JSON configurations for the event provider. This parameter and Source are mutually exclusive.
   * 
   * @example
   * {"key":"value"}
   */
  metadata?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
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
   * The transform configurations.
   */
  transforms?: ListEventStreamingsResponseBodyDataEventStreamingsTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      metadata: 'Metadata',
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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
   * The list of event streams.
   */
  eventStreamings?: ListEventStreamingsResponseBodyDataEventStreamings[];
  /**
   * @remarks
   * The token that indicates the position from which the current call returns data. An empty value indicates that all data has been read. For subsequent calls, set this value to the NextToken request parameter.
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
   * The return code of the API operation:
   * - Success: The call is successful.
   * - Other values: An error code. For more information, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of event streams.
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
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 283FF852-C4B8-58C9-9777-F88A5A16****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. true is returned if the operation is successful.
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

