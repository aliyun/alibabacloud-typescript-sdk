// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BaiLianAgentTransformParameters } from "./BaiLianAgentTransformParameters";
import { DashScopeTransformParameters } from "./DashScopeTransformParameters";
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { SourcePostgreSQLParameters } from "./SourcePostgreSqlparameters";
import { SourceRabbitMQMetaParameters } from "./SourceRabbitMqmetaParameters";
import { SourceRabbitMQMsgSyncParameters } from "./SourceRabbitMqmsgSyncParameters";
import { SinkApiDestinationParameters } from "./SinkApiDestinationParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { SinkDataWorksTriggerParameters } from "./SinkDataWorksTriggerParameters";
import { SinkHttpsParameters } from "./SinkHttpsParameters";
import { SinkMQTTParameters } from "./SinkMqttparameters";
import { SinkOSSParameters } from "./SinkOssparameters";
import { SinkRabbitMQMetaParameters } from "./SinkRabbitMqmetaParameters";
import { SinkRabbitMQMsgSyncParameters } from "./SinkRabbitMqmsgSyncParameters";


export class GetEventStreamingResponseBodyDataDetailedStatus extends $dara.Model {
  /**
   * @example
   * 3
   */
  delayTime?: number;
  /**
   * @example
   * 0
   */
  diffOffset?: number;
  /**
   * @example
   * {
   *         "test": "test",
   *         "test2": 1
   *       }
   */
  extensions?: { [key: string]: any };
  /**
   * @example
   * 5
   */
  TPS?: number;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      diffOffset: 'DiffOffset',
      extensions: 'Extensions',
      TPS: 'TPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      diffOffset: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      TPS: 'number',
    };
  }

  validate() {
    if(this.extensions) {
      $dara.Model.validateMap(this.extensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsBatchWindow extends $dara.Model {
  /**
   * @remarks
   * The maximum number of events that are allowed in the batch window. If this threshold is reached, data in the window is pushed downstream. When multiple batch windows exist, data is pushed if triggering conditions are met in one of the windows.
   * 
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @remarks
   * The maximum period of time during which events are allowed in the batch window. Unit: seconds. If this threshold is reached, data in the window is pushed downstream. When multiple batch windows exist, data is pushed if triggering conditions are met in one of the windows.
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

export class GetEventStreamingResponseBodyDataRunOptionsBusinessOption extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the dead-letter queue.
   * 
   * @example
   * acs:ram::1550203943326350:role/edskmstoecs
   */
  arn?: string;
  /**
   * @example
   * PrivateNetwork
   */
  network?: string;
  /**
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
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

export class GetEventStreamingResponseBodyDataRunOptionsRetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The maximum period of time during which retries are performed.
   * 
   * @example
   * 512
   */
  maximumEventAgeInSeconds?: number;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 2
   */
  maximumRetryAttempts?: number;
  /**
   * @remarks
   * The retry policy. Valid values: BACKOFFRETRY and EXPONENTIALDECAY_RETRY.
   * 
   * @example
   * BACKOFFRETRY
   */
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      maximumEventAgeInSeconds: 'MaximumEventAgeInSeconds',
      maximumRetryAttempts: 'MaximumRetryAttempts',
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumEventAgeInSeconds: 'number',
      maximumRetryAttempts: 'number',
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

export class GetEventStreamingResponseBodyDataRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: GetEventStreamingResponseBodyDataRunOptionsBatchWindow;
  businessOption?: GetEventStreamingResponseBodyDataRunOptionsBusinessOption;
  /**
   * @remarks
   * Indicates whether dead-letter queues are enabled. By default, dead-letter queues are disabled. Messages that fail to be pushed after allowed retries as specified by the retry policy are discarded.
   */
  deadLetterQueue?: GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The fault tolerance policy. The value NONE specifies that faults are not tolerated, and the value All specifies that all faults are tolerated.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The concurrency level.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The information about the retry policy that is used if the event fails to be pushed.
   */
  retryStrategy?: GetEventStreamingResponseBodyDataRunOptionsRetryStrategy;
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
      batchWindow: GetEventStreamingResponseBodyDataRunOptionsBatchWindow,
      businessOption: GetEventStreamingResponseBodyDataRunOptionsBusinessOption,
      deadLetterQueue: GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      retryStrategy: GetEventStreamingResponseBodyDataRunOptionsRetryStrategy,
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersHeaders extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersKey extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersNetworkType extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSecurityGroupId extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVSwitchIds extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersValue extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVpcId extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParameters extends $dara.Model {
  acks?: string;
  bootstraps?: string;
  compressionType?: string;
  headers?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersHeaders;
  key?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersKey;
  networkType?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersNetworkType;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSecurityGroupId;
  securityProtocol?: string;
  sslTruststoreCertificates?: string;
  topic?: string;
  vSwitchIds?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVSwitchIds;
  value?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersValue;
  vpcId?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      bootstraps: 'Bootstraps',
      compressionType: 'CompressionType',
      headers: 'Headers',
      key: 'Key',
      networkType: 'NetworkType',
      saslMechanism: 'SaslMechanism',
      saslPassword: 'SaslPassword',
      saslUser: 'SaslUser',
      securityGroupId: 'SecurityGroupId',
      securityProtocol: 'SecurityProtocol',
      sslTruststoreCertificates: 'SslTruststoreCertificates',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      value: 'Value',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: 'string',
      bootstraps: 'string',
      compressionType: 'string',
      headers: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersHeaders,
      key: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersKey,
      networkType: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersNetworkType,
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSecurityGroupId,
      securityProtocol: 'string',
      sslTruststoreCertificates: 'string',
      topic: 'string',
      vSwitchIds: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVSwitchIds,
      value: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersValue,
      vpcId: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVpcId,
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(this.key && typeof (this.key as any).validate === 'function') {
      (this.key as any).validate();
    }
    if(this.networkType && typeof (this.networkType as any).validate === 'function') {
      (this.networkType as any).validate();
    }
    if(this.securityGroupId && typeof (this.securityGroupId as any).validate === 'function') {
      (this.securityGroupId as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * 1570761026400
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @remarks
   * Group ID
   * 
   * @example
   * GID_EVENTBRIDGE_1736234******
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersTopic extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * Mytopic
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  group?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup;
  /**
   * @example
   * 192.168.1.1:9876
   */
  instanceEndpoint?: string;
  /**
   * @example
   * ****
   */
  instancePassword?: string;
  /**
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * sg-2ze5bmpw6adn0q******
   */
  securityGroupId?: string;
  topic?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersTopic;
  /**
   * @example
   * vsw-uf62oqt1twuevrt******
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-2zeccak5pb0j3ay******
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
      consumeTimestamp: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp,
      group: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup,
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      topic: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersTopic,
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

export class GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
  /**
   * @example
   * {
   *           "connector.class": "com.mongodb.kafka.connect.MongoSinkConnector",
   *           "tasks.max": "1",
   *           "topics": "sourceA,sourceB"
   *         }
   */
  config?: { [key: string]: any };
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV******"
   */
  connectorPackageUrl?: string;
  connectorParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
  /**
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
      connectorParameters: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
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

export class GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters extends $dara.Model {
  /**
   * @example
   * 90be1f96-4229-4535-bb76-34b4f6fb****
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersName extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersType extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersValue extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  name?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersName;
  type?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersType;
  value?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersValue;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersName,
      type: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersType,
      value: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersValue,
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId extends $dara.Model {
  /**
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @example
   * ${ID}
   */
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector extends $dara.Model {
  /**
   * @example
   * JSONPATH
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters extends $dara.Model {
  /**
   * @example
   * Q34nExQH7sQ****
   */
  apiKey?: string;
  /**
   * @example
   * collection1
   */
  collection?: string;
  dashVectorSchemaParameters?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters[];
  /**
   * @example
   * vrs-cn-lbj3ru1***
   */
  instanceId?: string;
  /**
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @example
   * Upsert
   */
  operation?: string;
  partition?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition;
  primaryKeyId?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId;
  vector?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector;
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
      dashVectorSchemaParameters: { 'type': 'array', 'itemType': GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters },
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition,
      primaryKeyId: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId,
      vector: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector,
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody extends $dara.Model {
  /**
   * @example
   * ORIGINAL
   */
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema extends $dara.Model {
  /**
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @example
   * {"k1":"${k1}","k2":"${k2}"}
   */
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParameters extends $dara.Model {
  body?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody;
  project?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject;
  roleName?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName;
  topic?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic;
  topicSchema?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema;
  topicType?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType;
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
      body: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody,
      project: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject,
      roleName: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName,
      topic: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic,
      topicSchema: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema,
      topicType: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType,
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersBeHttpEndpoint extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersBody extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersDatabase extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersFeHttpEndpoint extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersNetworkType extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersPassword extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersQueryEndpoint extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersSecurityGroupId extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersTable extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersUserName extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersVSwitchIds extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersVpcId extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParameters extends $dara.Model {
  beHttpEndpoint?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersBeHttpEndpoint;
  body?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersBody;
  database?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersDatabase;
  feHttpEndpoint?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersFeHttpEndpoint;
  networkType?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersNetworkType;
  password?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersPassword;
  queryEndpoint?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersQueryEndpoint;
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersSecurityGroupId;
  table?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersTable;
  userName?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersUserName;
  vSwitchIds?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersVSwitchIds;
  vpcId?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersVpcId;
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
      beHttpEndpoint: GetEventStreamingResponseBodyDataSinkSinkDorisParametersBeHttpEndpoint,
      body: GetEventStreamingResponseBodyDataSinkSinkDorisParametersBody,
      database: GetEventStreamingResponseBodyDataSinkSinkDorisParametersDatabase,
      feHttpEndpoint: GetEventStreamingResponseBodyDataSinkSinkDorisParametersFeHttpEndpoint,
      networkType: GetEventStreamingResponseBodyDataSinkSinkDorisParametersNetworkType,
      password: GetEventStreamingResponseBodyDataSinkSinkDorisParametersPassword,
      queryEndpoint: GetEventStreamingResponseBodyDataSinkSinkDorisParametersQueryEndpoint,
      securityGroupId: GetEventStreamingResponseBodyDataSinkSinkDorisParametersSecurityGroupId,
      table: GetEventStreamingResponseBodyDataSinkSinkDorisParametersTable,
      userName: GetEventStreamingResponseBodyDataSinkSinkDorisParametersUserName,
      vSwitchIds: GetEventStreamingResponseBodyDataSinkSinkDorisParametersVSwitchIds,
      vpcId: GetEventStreamingResponseBodyDataSinkSinkDorisParametersVpcId,
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * None
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat extends $dara.Model {
  /**
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @example
   * $.data.key
   */
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The invocation type.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that is sent to the function.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency;
  dataFormat?: GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation type. Valid values: Sync: synchronous Async: asynchronous
   */
  invocationType?: GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   */
  qualifier?: GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The service name.
   */
  serviceName?: GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName;
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
      body: GetEventStreamingResponseBodyDataSinkSinkFcParametersBody,
      concurrency: GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency,
      dataFormat: GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat,
      functionName: GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName,
      invocationType: GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType,
      qualifier: GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier,
      serviceName: GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName,
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

export class GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform events. Default value: CONSTANT.
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
   * None
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

export class GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform events. Default value: CONSTANT.
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
   * None
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

export class GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform events. Default value: CONSTANT.
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
   * None
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

export class GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform events. Default value: CONSTANT.
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
   * None
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

export class GetEventStreamingResponseBodyDataSinkSinkFnfParameters extends $dara.Model {
  /**
   * @remarks
   * The execution name.
   */
  executionName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The execution input information.
   */
  input?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role name.
   */
  roleName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName;
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
      executionName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName,
      flowName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName,
      input: GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput,
      roleName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName,
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The acknowledgment information.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * Defaut_1283278472_sadkj
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The message key.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * topic-test
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment information.
   */
  acks?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks;
  compressionType?: string;
  headers?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders;
  /**
   * @remarks
   * The target service type is Message Queue for Apache Kafka.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The message key.
   */
  key?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The topic name.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The message content.
   */
  value?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      compressionType: 'CompressionType',
      headers: 'Headers',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks,
      compressionType: 'string',
      headers: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId,
      key: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey,
      topic: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic,
      value: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue,
    };
  }

  validate() {
    if(this.acks && typeof (this.acks as any).validate === 'function') {
      (this.acks as any).validate();
    }
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * Specifies that Base64 encoding is enabled.
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The name of the MNS queue.
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Indicates whether Base64 encoding is enabled.
   */
  isBase64Encode?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The target service type is MNS.
   */
  queueName?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody,
      isBase64Encode: GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode,
      queueName: GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName,
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @example
   * {"key": "value"}
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * 12345
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @example
   * {"env": "prod"}
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @example
   * {"Form": "CONSTANT", "Value": "my-routing-key"}
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  body?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody;
  /**
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @example
   * my-exchange
   */
  exchange?: string;
  messageId?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId;
  /**
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @example
   * ****
   */
  password?: string;
  properties?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @example
   * my-queue
   */
  queueName?: string;
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @example
   * sg-uf6of9452b2pba82c ****
   */
  securityGroupId?: string;
  /**
   * @example
   * Exchange
   */
  targetType?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  /**
   * @example
   * vsw-uf6of9452b2pba82c ****
   */
  vSwitchIds?: string;
  /**
   * @example
   * vhost1
   */
  virtualHostName?: string;
  /**
   * @example
   * vpc-uf6of9452b2pba82c ****
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
      body: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody,
      endpoint: 'string',
      exchange: 'string',
      messageId: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId,
      networkType: 'string',
      password: 'string',
      properties: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties,
      queueName: 'string',
      routingKey: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey,
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The name of the exchange in the Message Queue for RabbitMQ instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The ID of the Message Queue for RabbitMQ instance.
   * 
   * @example
   * e5c9b727-e06c-4d7e-84d5-f8ce644e00bf
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The name of the queue in the Message Queue for RabbitMQ instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The type of the resource to which the event is delivered. Valid values: Exchange: exchanges. Queue: queues.
   * 
   * @example
   * Exchange/Queue
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The vhost name of the Message Queue for RabbitMQ instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The exchange mode. This parameter is available only if TargetType is set to Exchange.
   */
  exchange?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The target service type is Message Queue for RabbitMQ instance.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is available only if TargetType is set to Queue.
   */
  queueName?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The routing rule for the message. This parameter is available only if TargetType is set to Exchange.
   */
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The target type.
   */
  targetType?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost of the Message Queue for RabbitMQ instance.
   */
  virtualHostName?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName;
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
      body: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody,
      exchange: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId,
      messageId: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId,
      properties: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties,
      queueName: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName,
      routingKey: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey,
      targetType: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType,
      virtualHostName: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName,
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * 1570761026400
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersGroup extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @remarks
   * Group ID
   * 
   * @example
   * GID_EVENTBRIDGE_1736234******
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersTopic extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * Mytopic
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  group?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersGroup;
  /**
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @example
   * Cloud_4
   */
  instanceType?: string;
  topic?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersTopic;
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
      consumeTimestamp: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersConsumeTimestamp,
      group: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersGroup,
      instanceId: 'string',
      instanceType: 'string',
      topic: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersTopic,
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * Concurrently
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The ID of the Message Queue for Apache RocketMQ instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * admin****
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The name of the topic in the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * Mytopic
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody;
  deliveryOrderType?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType;
  instanceEndpoint?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The target service type is Message Queue for Apache RocketMQ.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId;
  instancePassword?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword;
  instanceType?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType;
  instanceUsername?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  keys?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys;
  network?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties;
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId;
  shardingKey?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  tags?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The name of the topic in the Message Queue for Apache RocketMQ instance.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic;
  vSwitchIds?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds;
  vpcId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId;
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
      body: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody,
      deliveryOrderType: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType,
      instanceEndpoint: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId,
      instancePassword: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword,
      instanceType: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType,
      instanceUsername: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername,
      keys: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys,
      network: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork,
      properties: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties,
      securityGroupId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId,
      shardingKey: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey,
      tags: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags,
      topic: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic,
      vSwitchIds: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds,
      vpcId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId,
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which the event is transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before the transformation.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The Log Service Logstore.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The Log Service project.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The role name. If you want to authorize EventBridge to use this role to read logs in Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the RAM console.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
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
   * The name of the topic in which logs are stored. The topic corresponds to the topic reserved field in Log Service.
   * 
   * @example
   * testTopic
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody;
  contentSchema?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema;
  contentType?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   */
  logStore?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The Simple Log Service project.
   */
  project?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console.
   */
  roleName?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The name of the topic in which logs are stored. The topic corresponds to the topic reserved field in Simple Log Service.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic;
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
      body: GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody,
      contentSchema: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema,
      contentType: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType,
      logStore: GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore,
      project: GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject,
      roleName: GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName,
      topic: GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic,
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

export class GetEventStreamingResponseBodyDataSink extends $dara.Model {
  sinkApacheKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParameters;
  /**
   * @remarks
   * Sink Apache RocketMQ Checkpoint Parameters
   */
  sinkApacheRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters;
  sinkApiDestinationParameters?: SinkApiDestinationParameters;
  /**
   * @remarks
   * Sink BaiLian Parameters
   */
  sinkBaiLianParameters?: SinkBaiLianParameters;
  sinkCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters;
  sinkDataHubParameters?: GetEventStreamingResponseBodyDataSinkSinkDataHubParameters;
  sinkDataWorksTriggerParameters?: SinkDataWorksTriggerParameters;
  sinkDorisParameters?: GetEventStreamingResponseBodyDataSinkSinkDorisParameters;
  /**
   * @remarks
   * The parameters that are returned if the event target is Function Compute.
   */
  sinkFcParameters?: GetEventStreamingResponseBodyDataSinkSinkFcParameters;
  /**
   * @remarks
   * The Sink Fnf parameters.
   */
  sinkFnfParameters?: GetEventStreamingResponseBodyDataSinkSinkFnfParameters;
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The parameters that are returned if the event target is Message Queue for Apache Kafka.
   */
  sinkKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if the event target is Message Service (MNS).
   */
  sinkMNSParameters?: GetEventStreamingResponseBodyDataSinkSinkMNSParameters;
  sinkMQTTParameters?: SinkMQTTParameters;
  sinkOSSParameters?: SinkOSSParameters;
  /**
   * @remarks
   * Sink Open Source RabbitMQ Parameters
   */
  sinkOpenSourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters;
  sinkRabbitMQMetaParameters?: SinkRabbitMQMetaParameters;
  sinkRabbitMQMsgSyncParameters?: SinkRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The parameters that are returned if the event target is Message Queue for RabbitMQ.
   */
  sinkRabbitMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * Sink RocketMQ Checkpoint Parameters
   */
  sinkRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RocketMQ is specified as the event target.
   */
  sinkRocketMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Log Service is specified as the event target.
   */
  sinkSLSParameters?: GetEventStreamingResponseBodyDataSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkApacheKafkaParameters: 'SinkApacheKafkaParameters',
      sinkApacheRocketMQCheckpointParameters: 'SinkApacheRocketMQCheckpointParameters',
      sinkApiDestinationParameters: 'SinkApiDestinationParameters',
      sinkBaiLianParameters: 'SinkBaiLianParameters',
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkDataWorksTriggerParameters: 'SinkDataWorksTriggerParameters',
      sinkDorisParameters: 'SinkDorisParameters',
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
      sinkApacheKafkaParameters: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParameters,
      sinkApacheRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters,
      sinkApiDestinationParameters: SinkApiDestinationParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters,
      sinkDataHubParameters: GetEventStreamingResponseBodyDataSinkSinkDataHubParameters,
      sinkDataWorksTriggerParameters: SinkDataWorksTriggerParameters,
      sinkDorisParameters: GetEventStreamingResponseBodyDataSinkSinkDorisParameters,
      sinkFcParameters: GetEventStreamingResponseBodyDataSinkSinkFcParameters,
      sinkFnfParameters: GetEventStreamingResponseBodyDataSinkSinkFnfParameters,
      sinkHttpsParameters: SinkHttpsParameters,
      sinkKafkaParameters: GetEventStreamingResponseBodyDataSinkSinkKafkaParameters,
      sinkMNSParameters: GetEventStreamingResponseBodyDataSinkSinkMNSParameters,
      sinkMQTTParameters: SinkMQTTParameters,
      sinkOSSParameters: SinkOSSParameters,
      sinkOpenSourceRabbitMQParameters: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters,
      sinkRabbitMQMetaParameters: SinkRabbitMQMetaParameters,
      sinkRabbitMQMsgSyncParameters: SinkRabbitMQMsgSyncParameters,
      sinkRabbitMQParameters: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters,
      sinkSLSParameters: GetEventStreamingResponseBodyDataSinkSinkSLSParameters,
    };
  }

  validate() {
    if(this.sinkApacheKafkaParameters && typeof (this.sinkApacheKafkaParameters as any).validate === 'function') {
      (this.sinkApacheKafkaParameters as any).validate();
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
    if(this.sinkDataWorksTriggerParameters && typeof (this.sinkDataWorksTriggerParameters as any).validate === 'function') {
      (this.sinkDataWorksTriggerParameters as any).validate();
    }
    if(this.sinkDorisParameters && typeof (this.sinkDorisParameters as any).validate === 'function') {
      (this.sinkDorisParameters as any).validate();
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

export class GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters extends $dara.Model {
  bootstraps?: string;
  consumerGroup?: string;
  networkType?: string;
  offsetReset?: string;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: string;
  securityProtocol?: string;
  sslTruststoreCertificates?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bootstraps: 'Bootstraps',
      consumerGroup: 'ConsumerGroup',
      networkType: 'NetworkType',
      offsetReset: 'OffsetReset',
      saslMechanism: 'SaslMechanism',
      saslPassword: 'SaslPassword',
      saslUser: 'SaslUser',
      securityGroupId: 'SecurityGroupId',
      securityProtocol: 'SecurityProtocol',
      sslTruststoreCertificates: 'SslTruststoreCertificates',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstraps: 'string',
      consumerGroup: 'string',
      networkType: 'string',
      offsetReset: 'string',
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: 'string',
      securityProtocol: 'string',
      sslTruststoreCertificates: 'string',
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

export class GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the Apache RocketMQ instance.
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @example
   * 123456
   */
  instancePassword?: string;
  /**
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-mw43*****
   */
  securityGroupId?: string;
  topics?: string[];
  /**
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
      instanceId: 'InstanceId',
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
      instanceId: 'string',
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

export class GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
  /**
   * @example
   * {
   *           "connector.class": "com.mongodb.kafka.connect.MongoSinkConnector",
   *           "tasks.max": "1",
   *           "topics": "sourceA,sourceB"
   *         }
   */
  config?: { [key: string]: any };
  /**
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

export class GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV2i3gZJ"
   */
  connectorPackageUrl?: string;
  connectorParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
  /**
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
      connectorParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParametersConnectorParameters,
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

export class GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters extends $dara.Model {
  /**
   * @example
   * r-8vb64581862c****
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

export class GetEventStreamingResponseBodyDataSourceSourceDTSParameters extends $dara.Model {
  /**
   * @remarks
   * The URL and port number of the data subscription channel.
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The consumer offset. A consumer offset is a timestamp that indicates when the SDK client consumes the first data record. The value is a UNIX timestamp.
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
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * HD1
   */
  sid?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * f86e5814-b223-482c-b768-3b873297dade
   */
  taskId?: string;
  /**
   * @remarks
   * The topic to which you want to subscribe by using the data subscription channel.
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

export class GetEventStreamingResponseBodyDataSourceSourceEventBusParameters extends $dara.Model {
  /**
   * @example
   * demo
   */
  eventBusName?: string;
  /**
   * @example
   * test
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

export class GetEventStreamingResponseBodyDataSourceSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that subscribes to the topic.
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
   * i-bp1fbtrnqmjvgq66ajdw
   */
  instanceId?: string;
  /**
   * @remarks
   * The network. Default value: Default. The value PublicNetwork specifies a virtual private cloud (VPC).
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
   * The region ID of the Message Queue for Apache Kafka instance.
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
   * sg-2vcgdxz7o1n9zappuimt
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
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz9qqeovkwjxlu9uc8rst
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The encoding or decoding format. Valid values: Json, Text, and Binary. The value Json indicates that bytes are decoded into UTF-8 strings and then parsed into JSON format. The value Text indicates that bytes are decoded into UTF-8 strings and then put into the payload. The value Binary indicates that bytes are encoded into Base64 strings and put into the payload.
   * 
   * @example
   * Text
   */
  valueDataType?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2zehizpoendb3nwwu9w5o
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

export class GetEventStreamingResponseBodyDataSourceSourceMNSParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Base64 encoding is enabled.
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
   * demo
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID of the MNS queue.
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

export class GetEventStreamingResponseBodyDataSourceSourceMQTTParameters extends $dara.Model {
  /**
   * @example
   * JSON
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2ze06wqdwk0uq14krrzv
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Message Queue for MQTT instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic in the Message Queue for MQTT instance.
   * 
   * @example
   * TOPIC-cainiao-pcs-wms-instock-noPrealertPrintLabel
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataType: 'BodyDataType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataType: 'string',
      instanceId: 'string',
      regionId: 'string',
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

export class GetEventStreamingResponseBodyDataSourceSourceOSSParameters extends $dara.Model {
  /**
   * @example
   * bucket_abc
   */
  bucketName?: string;
  /**
   * @example
   * \\n
   */
  delimiter?: string;
  /**
   * @example
   * TextLoader
   */
  loadFormat?: string;
  /**
   * @example
   * single
   */
  loadMode?: string;
  /**
   * @example
   * fun/document/
   */
  prefix?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @example
   * Json
   */
  bodyDataType?: string;
  /**
   * @example
   * 192.168.1.100:5672
   */
  endpoint?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * ******
   */
  password?: string;
  /**
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @example
   * sg-2ze65razphjfz3******
   */
  securityGroupId?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  /**
   * @example
   * vsw-uf65zhil5oukof5******
   */
  vSwitchIds?: string;
  /**
   * @example
   * eb-connect
   */
  virtualHostName?: string;
  /**
   * @example
   * vpc-bp1vllc1lnw1v657******
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

export class GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters extends $dara.Model {
  /**
   * @example
   * c83555068b6******ad213f565f209
   */
  clusterId?: string;
  /**
   * @example
   * json
   */
  dataType?: string;
  /**
   * @example
   * {"env":"test"}
   */
  externalLabels?: string;
  /**
   * @example
   * __name__=.*
   */
  labels?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * test-role
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

export class GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the Message Queue for RabbitMQ instance.
   * 
   * @example
   * i-f8z9a9mcgwri1c1idd0z
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue in the Message Queue for RabbitMQ instance.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID of the Message Queue for RabbitMQ instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vhost name of the Message Queue for RabbitMQ instance.
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

export class GetEventStreamingResponseBodyDataSourceSourceRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @example
   * rmp-cn-jte3w******
   */
  instanceId?: string;
  /**
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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

export class GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters extends $dara.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @example
   * Json
   */
  bodyDataType?: string;
  /**
   * @example
   * index > 10
   */
  filterSql?: string;
  /**
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @remarks
   * The ID of the consumer group in the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * GID_group1
   */
  groupID?: string;
  /**
   * @example
   * reg****-vpc.cn-zhangjiakou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * i-f8zbher64dlm58plyfte
   */
  instanceId?: string;
  /**
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @example
   * xxxa
   */
  instancePassword?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
   */
  instanceSecurityGroupId?: string;
  /**
   * @example
   * 2
   */
  instanceType?: string;
  /**
   * @example
   * xxxa
   */
  instanceUsername?: string;
  /**
   * @example
   * vsw-m5ev8asdc6h12****
   */
  instanceVSwitchIds?: string;
  /**
   * @example
   * vpc-m5e3sv4b12345****
   */
  instanceVpcId?: string;
  /**
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The consumer offset of messages. Valid values: CONSUME_FROM_LAST_OFFSET: Start consumption from the latest offset. CONSUME_FROM_FIRST_OFFSET: Start consumption from the earliest offset. CONSUME_FROM_TIMESTAMP: Start consumption from the offset at the specified point in time.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region ID of the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The tags that are used to filter messages.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp of the offset from which consumption starts. This parameter is valid only if you set the Offset parameter to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1636597951964
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * topic_add_anima
   */
  topic?: string;
  /**
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
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

export class GetEventStreamingResponseBodyDataSourceSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The starting consumer offset. The value begin indicates the earliest offset, and the value end indicates the latest offset. You can also specify a time in seconds to start consumption.
   * 
   * @example
   * begin
   */
  consumePosition?: string;
  /**
   * @remarks
   * The consumer group.
   */
  consumerGroup?: string;
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
   * dmmzk
   */
  project?: string;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the RAM console.
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

export class GetEventStreamingResponseBodyDataSource extends $dara.Model {
  sourceApacheKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if Apache RocketMQ (Offset Data) is specified as the event source.
   */
  sourceApacheRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters;
  sourceCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if the event source is Data Transmission Service (DTS).
   */
  sourceDTSParameters?: GetEventStreamingResponseBodyDataSourceSourceDTSParameters;
  sourceEventBusParameters?: GetEventStreamingResponseBodyDataSourceSourceEventBusParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for Kafka is specified as the event source.
   */
  sourceKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceKafkaParameters;
  /**
   * @remarks
   * Source MNS Parameters
   */
  sourceMNSParameters?: GetEventStreamingResponseBodyDataSourceSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for MQTT is specified as the event source.
   */
  sourceMQTTParameters?: GetEventStreamingResponseBodyDataSourceSourceMQTTParameters;
  sourceMySQLParameters?: SourceMySQLParameters;
  sourceOSSParameters?: GetEventStreamingResponseBodyDataSourceSourceOSSParameters;
  sourceOpenSourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters;
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  sourcePrometheusParameters?: GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters;
  sourceRabbitMQMetaParameters?: SourceRabbitMQMetaParameters;
  sourceRabbitMQMsgSyncParameters?: SourceRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * Source RabbitMQ Parameters
   */
  sourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters;
  sourceRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RocketMQ is specified as the event source.
   */
  sourceRocketMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if the event provider is Simple Log Service.
   */
  sourceSLSParameters?: GetEventStreamingResponseBodyDataSourceSourceSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sourceApacheKafkaParameters: 'SourceApacheKafkaParameters',
      sourceApacheRocketMQCheckpointParameters: 'SourceApacheRocketMQCheckpointParameters',
      sourceCustomizedKafkaConnectorParameters: 'SourceCustomizedKafkaConnectorParameters',
      sourceCustomizedKafkaParameters: 'SourceCustomizedKafkaParameters',
      sourceDTSParameters: 'SourceDTSParameters',
      sourceEventBusParameters: 'SourceEventBusParameters',
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
      sourceApacheKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters,
      sourceApacheRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: GetEventStreamingResponseBodyDataSourceSourceDTSParameters,
      sourceEventBusParameters: GetEventStreamingResponseBodyDataSourceSourceEventBusParameters,
      sourceKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceKafkaParameters,
      sourceMNSParameters: GetEventStreamingResponseBodyDataSourceSourceMNSParameters,
      sourceMQTTParameters: GetEventStreamingResponseBodyDataSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: GetEventStreamingResponseBodyDataSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters,
      sourcePostgreSQLParameters: SourcePostgreSQLParameters,
      sourcePrometheusParameters: GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters,
      sourceRabbitMQMetaParameters: SourceRabbitMQMetaParameters,
      sourceRabbitMQMsgSyncParameters: SourceRabbitMQMsgSyncParameters,
      sourceRabbitMQParameters: GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters,
      sourceRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSourceSourceRocketMQCheckpointParameters,
      sourceRocketMQParameters: GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters,
      sourceSLSParameters: GetEventStreamingResponseBodyDataSourceSourceSLSParameters,
    };
  }

  validate() {
    if(this.sourceApacheKafkaParameters && typeof (this.sourceApacheKafkaParameters as any).validate === 'function') {
      (this.sourceApacheKafkaParameters as any).validate();
    }
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

export class GetEventStreamingResponseBodyDataTransforms extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the cloud service, such as the ARN of a Function Compute function.
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

export class GetEventStreamingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the event stream that is returned.
   * 
   * @example
   * RocketMQ-to-RocketMQ
   */
  description?: string;
  detailedStatus?: GetEventStreamingResponseBodyDataDetailedStatus;
  /**
   * @remarks
   * The name of the event stream that is returned.
   * 
   * @example
   * rocketmq-sync
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * The rule that is used to filter events. If you leave this parameter empty, all events are matched.
   */
  filterPattern?: string;
  /**
   * @remarks
   * The runtime environment-related configurations.
   */
  runOptions?: GetEventStreamingResponseBodyDataRunOptions;
  /**
   * @remarks
   * The event target.
   */
  sink?: GetEventStreamingResponseBodyDataSink;
  /**
   * @remarks
   * The event source.
   */
  source?: GetEventStreamingResponseBodyDataSource;
  /**
   * @remarks
   * The status of the event stream that is returned.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  transforms?: GetEventStreamingResponseBodyDataTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      detailedStatus: 'DetailedStatus',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
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
      detailedStatus: GetEventStreamingResponseBodyDataDetailedStatus,
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: GetEventStreamingResponseBodyDataRunOptions,
      sink: GetEventStreamingResponseBodyDataSink,
      source: GetEventStreamingResponseBodyDataSource,
      status: 'string',
      transforms: { 'type': 'array', 'itemType': GetEventStreamingResponseBodyDataTransforms },
    };
  }

  validate() {
    if(this.detailedStatus && typeof (this.detailedStatus as any).validate === 'function') {
      (this.detailedStatus as any).validate();
    }
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

export class GetEventStreamingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetEventStreamingResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * The event streaming [xxxx] not existed!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7892F480-58C9-5067-AB35-8A7BEF0F726A
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
      data: GetEventStreamingResponseBodyData,
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

