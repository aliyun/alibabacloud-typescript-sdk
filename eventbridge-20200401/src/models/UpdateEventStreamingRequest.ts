// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BaiLianAgentTransformParameters } from "./BaiLianAgentTransformParameters";
import { DashScopeTransformParameters } from "./DashScopeTransformParameters";
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { SourcePostgreSQLParameters } from "./SourcePostgreSqlparameters";
import { SinkApiDestinationParameters } from "./SinkApiDestinationParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { SinkDataWorksTriggerParameters } from "./SinkDataWorksTriggerParameters";
import { SinkHttpsParameters } from "./SinkHttpsParameters";
import { SinkOSSParameters } from "./SinkOssparameters";


export class UpdateEventStreamingRequestRunOptionsBatchWindow extends $dara.Model {
  /**
   * @remarks
   * The maximum number of events that are allowed in the batch window. When this threshold is reached, data in the window is pushed to the downstream service. If multiple batch windows exist, data is pushed if the triggering conditions are met in one of the windows.
   * 
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @remarks
   * The maximum period of time during which events are allowed in the batch window. Unit: seconds. When this threshold is reached, data in the window is pushed to the downstream service. If multiple batch windows exist, data is pushed if the triggering conditions are met in one of the windows.
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

export class UpdateEventStreamingRequestRunOptionsBusinessOption extends $dara.Model {
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

export class UpdateEventStreamingRequestRunOptionsDeadLetterQueue extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the dead-letter queue.
   * 
   * @example
   * acs:ram::1317334647812936:role/rdstoecsassumekms
   */
  arn?: string;
  /**
   * @remarks
   * The network type of the dead-letter queue. Valid values:
   * 
   * *   PrivateNetwork
   * *   PublicNetwork
   * 
   * @example
   * PrivateNetwork
   */
  network?: string;
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

export class UpdateEventStreamingRequestRunOptionsRetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The maximum timeout period for a retry.
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
   * The retry policy. Valid values: BACKOFF_RETRY and EXPONENTIAL_DECAY_RETRY.
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

export class UpdateEventStreamingRequestRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: UpdateEventStreamingRequestRunOptionsBatchWindow;
  businessOption?: UpdateEventStreamingRequestRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable dead-letter queues. By default, dead-letter queues are disabled. Events that fail to be pushed are discarded after the maximum number of retries that is specified by the retry policy is reached.
   */
  deadLetterQueue?: UpdateEventStreamingRequestRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The exception tolerance policy. Valid values: NONE and ALL.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The maximum number of concurrent tasks.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The retry policy that you want to use if events fail to be pushed.
   */
  retryStrategy?: UpdateEventStreamingRequestRunOptionsRetryStrategy;
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
      batchWindow: UpdateEventStreamingRequestRunOptionsBatchWindow,
      businessOption: UpdateEventStreamingRequestRunOptionsBusinessOption,
      deadLetterQueue: UpdateEventStreamingRequestRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      retryStrategy: UpdateEventStreamingRequestRunOptionsRetryStrategy,
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersKey extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersValue extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParameters extends $dara.Model {
  acks?: string;
  bootstraps?: string;
  headers?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders;
  key?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersKey;
  networkType?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId;
  securityProtocol?: string;
  topic?: string;
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds;
  value?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersValue;
  vpcId?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      bootstraps: 'Bootstraps',
      headers: 'Headers',
      key: 'Key',
      networkType: 'NetworkType',
      saslMechanism: 'SaslMechanism',
      saslPassword: 'SaslPassword',
      saslUser: 'SaslUser',
      securityGroupId: 'SecurityGroupId',
      securityProtocol: 'SecurityProtocol',
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
      headers: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders,
      key: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersKey,
      networkType: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType,
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId,
      securityProtocol: 'string',
      topic: 'string',
      vSwitchIds: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds,
      value: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersValue,
      vpcId: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId,
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

export class UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed.
   * 
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

export class UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The ID of the consumer group.
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

export class UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic on the Apache RocketMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed.
   */
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The ID of the consumer group.
   */
  group?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The endpoint that is used to access the Apache RocketMQ instance.
   * 
   * @example
   * 192.168.1.1:9876
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The password that is used to access the Apache RocketMQ instance.
   * 
   * @example
   * ****
   */
  instancePassword?: string;
  /**
   * @remarks
   * The username that is used to access the Apache RocketMQ instance.
   * 
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The network type.
   * 
   * *   PublicNetwork
   * *   PrivateNetwork
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
   * sg-2ze5bmpw6adn0q******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the Apache RocketMQ instance.
   */
  topic?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf62oqt1twuevrt******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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
      consumeTimestamp: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp,
      group: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup,
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      topic: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic,
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

export class UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
  /**
   * @remarks
   * The connector configurations.
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

export class UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @remarks
   * The download link of the ZIP package that includes Object Storage Service (OSS) resources.
   * 
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV2i3gZJ"
   */
  connectorPackageUrl?: string;
  /**
   * @remarks
   * The parameters that are configured for the parsing of the .properties file in the ZIP package.
   */
  connectorParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
  /**
   * @remarks
   * The instance configurations.
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
      connectorParameters: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
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

export class UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersName extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersType extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersValue extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  name?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersName;
  type?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersType;
  value?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersValue;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersName,
      type: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersType,
      value: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersValue,
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Valid values:
   * 
   * *   JSONPATH
   * *   CONSTANT
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
   * *   If you set Form to CONSTANT, specify a constant.
   * *   If you set Form to JSONPATH, specify a JSONPath rule.
   * 
   * >  The value of this parameter cannot exceed 10,240 characters in length.
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Valid values:
   * 
   * *   JSONPATH
   * *   TEMPLATE
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template that you want to use to specify primary key IDs. This parameter is required only if you set Form to TEMPLATE.
   * 
   * @example
   * ${ID}
   */
  template?: string;
  /**
   * @remarks
   * If you set Form to JSONPATH, specify a JSONPath rule. If you set Form to TEMPLATE, specify variables for the template.
   * 
   * >  The value of this parameter cannot exceed 10,240 characters in length.
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersVector extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
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
   * The JSONPath rule that you want to use to extract content.
   * 
   * >  The value of this parameter cannot exceed 10,240 characters in length.
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParameters extends $dara.Model {
  /**
   * @remarks
   * The API key that you want to create in the DashVector console.
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
   * The parameters in the Schema field of the table when data is inserted into DashVector. After the event content is transformed, the data must be in JSON format.
   */
  dashVectorSchemaParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters[];
  /**
   * @remarks
   * The ID of the DashVector instance.
   * 
   * @example
   * vrs-cn-lbj3ru1***
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PrivateNetwork
   * *   PublicNetwork
   * 
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The type of operation that you want to perform on the DashVector database. Valid values:
   * 
   * *   Delete
   * *   Upsert
   * 
   * @example
   * Upsert
   */
  operation?: string;
  /**
   * @remarks
   * The partition. Default value: default.
   */
  partition?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition;
  /**
   * @remarks
   * The ID of the primary key that you want to use when you insert or delete records. If you do not specify this parameter, a random primary key ID is returned.
   */
  primaryKeyId?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector that is recorded when data is inserted into DashVector.
   */
  vector?: UpdateEventStreamingRequestSinkSinkDashVectorParametersVector;
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
      dashVectorSchemaParameters: { 'type': 'array', 'itemType': UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters },
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition,
      primaryKeyId: UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId,
      vector: UpdateEventStreamingRequestSinkSinkDashVectorParametersVector,
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
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
   * The data is of the BLOB type, and a template is defined for the record.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema extends $dara.Model {
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersContentType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersProject extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The role name.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * {"k1":"${k1}","k2":"${k2}"}
   */
  template?: string;
  /**
   * @remarks
   * The data is of the TUBLE type, and a schema is defined for the DataHub topic.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The data type of the DataHub topic. Valid values:
   * 
   * *   TUPLE
   * *   BLOB
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

export class UpdateEventStreamingRequestSinkSinkDataHubParameters extends $dara.Model {
  /**
   * @remarks
   * The data is of the BLOB type, and a template is defined for the record.
   */
  body?: UpdateEventStreamingRequestSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The key-value pair of custom logs. This parameter takes effect only if you set ContentType to KeyValue. Each key-value pair is in the Key_n, Value_n format.
   */
  contentSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema;
  /**
   * @remarks
   * The data format. Valid values:
   * 
   * *   JSON
   * *   KeyValue
   */
  contentType?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentType;
  /**
   * @remarks
   * The name of the DataHub project.
   */
  project?: UpdateEventStreamingRequestSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * The role name.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The name of the DataHub topic.
   */
  topic?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The data is of the TUBLE type, and a schema is defined for the DataHub topic.
   */
  topicSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema;
  /**
   * @remarks
   * The data type of the DataHub topic. Valid values:
   * 
   * *   TUPLE
   * *   BLOB
   */
  topicType?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contentSchema: 'ContentSchema',
      contentType: 'ContentType',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
      topicSchema: 'TopicSchema',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkDataHubParametersBody,
      contentSchema: UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema,
      contentType: UpdateEventStreamingRequestSinkSinkDataHubParametersContentType,
      project: UpdateEventStreamingRequestSinkSinkDataHubParametersProject,
      roleName: UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName,
      topic: UpdateEventStreamingRequestSinkSinkDataHubParametersTopic,
      topicSchema: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema,
      topicType: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType,
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersBody extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersDatabase extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersPassword extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersTable extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersUserName extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersVSwitchIds extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersVpcId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDorisParameters extends $dara.Model {
  beHttpEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint;
  body?: UpdateEventStreamingRequestSinkSinkDorisParametersBody;
  database?: UpdateEventStreamingRequestSinkSinkDorisParametersDatabase;
  feHttpEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint;
  networkType?: UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType;
  password?: UpdateEventStreamingRequestSinkSinkDorisParametersPassword;
  queryEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint;
  securityGroupId?: UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId;
  table?: UpdateEventStreamingRequestSinkSinkDorisParametersTable;
  userName?: UpdateEventStreamingRequestSinkSinkDorisParametersUserName;
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkDorisParametersVSwitchIds;
  vpcId?: UpdateEventStreamingRequestSinkSinkDorisParametersVpcId;
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
      beHttpEndpoint: UpdateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint,
      body: UpdateEventStreamingRequestSinkSinkDorisParametersBody,
      database: UpdateEventStreamingRequestSinkSinkDorisParametersDatabase,
      feHttpEndpoint: UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint,
      networkType: UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType,
      password: UpdateEventStreamingRequestSinkSinkDorisParametersPassword,
      queryEndpoint: UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint,
      securityGroupId: UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId,
      table: UpdateEventStreamingRequestSinkSinkDorisParametersTable,
      userName: UpdateEventStreamingRequestSinkSinkDorisParametersUserName,
      vSwitchIds: UpdateEventStreamingRequestSinkSinkDorisParametersVSwitchIds,
      vpcId: UpdateEventStreamingRequestSinkSinkDorisParametersVpcId,
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

export class UpdateEventStreamingRequestSinkSinkFcParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersConcurrency extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersDataFormat extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Valid values:
   * 
   * *   ORIGINAL: complete event
   * *   JSONPATH: partial event
   * *   CONSTANT: constant
   * *   TEMPLATE: template
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * $.data.key
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersFunctionName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersInvocationType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The invocation mode.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersQualifier extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersServiceName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The service name.
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

export class UpdateEventStreamingRequestSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that you want to deliver to Function Compute.
   */
  body?: UpdateEventStreamingRequestSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: UpdateEventStreamingRequestSinkSinkFcParametersConcurrency;
  /**
   * @remarks
   * The rule that you want to use to transform the format of event content.
   */
  dataFormat?: UpdateEventStreamingRequestSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: UpdateEventStreamingRequestSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation mode. Valid values: Sync and Async.
   */
  invocationType?: UpdateEventStreamingRequestSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   */
  qualifier?: UpdateEventStreamingRequestSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The service name.
   */
  serviceName?: UpdateEventStreamingRequestSinkSinkFcParametersServiceName;
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
      body: UpdateEventStreamingRequestSinkSinkFcParametersBody,
      concurrency: UpdateEventStreamingRequestSinkSinkFcParametersConcurrency,
      dataFormat: UpdateEventStreamingRequestSinkSinkFcParametersDataFormat,
      functionName: UpdateEventStreamingRequestSinkSinkFcParametersFunctionName,
      invocationType: UpdateEventStreamingRequestSinkSinkFcParametersInvocationType,
      qualifier: UpdateEventStreamingRequestSinkSinkFcParametersQualifier,
      serviceName: UpdateEventStreamingRequestSinkSinkFcParametersServiceName,
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersFlowName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersInput extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   */
  template?: string;
  /**
   * @remarks
   * The role name.
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

export class UpdateEventStreamingRequestSinkSinkFnfParameters extends $dara.Model {
  /**
   * @remarks
   * The execution name.
   */
  executionName?: UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: UpdateEventStreamingRequestSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The input information of the execution.
   */
  input?: UpdateEventStreamingRequestSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role name.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkFnfParametersRoleName;
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
      executionName: UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName,
      flowName: UpdateEventStreamingRequestSinkSinkFnfParametersFlowName,
      input: UpdateEventStreamingRequestSinkSinkFnfParametersInput,
      roleName: UpdateEventStreamingRequestSinkSinkFnfParametersRoleName,
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersAcks extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The ACK mode.
   * 
   * *   If you set this parameter to 0, no response is returned from the broker. In this mode, the performance is high, but the risk of data loss is also high.
   * *   If you set this parameter to 1, a response is returned when data is written to the leader. In this mode, the performance and the risk of data loss are moderate. Data loss may occur if a failure occurs on the leader.
   * *   If you set this parameter to all, a response is returned when data is written to the leader and synchronized to the followers. In this mode, the performance is low, but the risk of data loss is also low. Data loss occurs if the leader and the followers fail at the same time.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Valid values:
   * 
   * *   ORIGINAL: complete event
   * *   JSONPATH: partial event
   * *   CONSTANT: constant
   * *   TEMPLATE: template
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The ID of the ApsaraMQ for Kafka instance.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersKey extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The name of the topic on the ApsaraMQ for Kafka instance.
   * 
   * @example
   * test
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersValue extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment (ACK) mode.
   * 
   * *   If you set this parameter to 0, no response is returned from the broker. In this mode, the performance is high, but the risk of data loss is also high.
   * *   If you set this parameter to 1, a response is returned when data is written to the leader. In this mode, the performance and the risk of data loss are moderate. Data loss may occur if a failure occurs on the leader.
   * *   If you set this parameter to all, a response is returned when data is written to the leader and synchronized to the followers. In this mode, the performance is low, but the risk of data loss is also low. Data loss occurs if the leader and the followers fail at the same time.
   */
  acks?: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks;
  /**
   * @remarks
   * The metadata added to messages in the ApsaraMQ for Kafka instance.
   */
  headers?: UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders;
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The message key.
   */
  key?: UpdateEventStreamingRequestSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
   */
  topic?: UpdateEventStreamingRequestSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The message body.
   */
  value?: UpdateEventStreamingRequestSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      headers: 'Headers',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks,
      headers: UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders,
      instanceId: UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId,
      key: UpdateEventStreamingRequestSinkSinkKafkaParametersKey,
      topic: UpdateEventStreamingRequestSinkSinkKafkaParametersTopic,
      value: UpdateEventStreamingRequestSinkSinkKafkaParametersValue,
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

export class UpdateEventStreamingRequestSinkSinkMNSParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkMNSParametersQueueName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The name of the SMQ queue.
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

export class UpdateEventStreamingRequestSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: UpdateEventStreamingRequestSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Specifies whether to enable Base64 encoding.
   */
  isBase64Encode?: UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The name of the SMQ queue.
   */
  queueName?: UpdateEventStreamingRequestSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkMNSParametersBody,
      isBase64Encode: UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode,
      queueName: UpdateEventStreamingRequestSinkSinkMNSParametersQueueName,
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value of the raw data.
   * 
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The value of the message ID.
   * 
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The attribute value.
   * 
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The routing key.
   * 
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   ACL
   * *   N/A
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The message body.
   */
  body?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody;
  /**
   * @remarks
   * The endpoint used to access the open source RabbitMQ instance.
   * 
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the exchange on the open source RabbitMQ instance. This parameter is valid only if you set TargetType to Exchange.
   * 
   * @example
   * my-exchange
   */
  exchange?: string;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PrivateNetwork
   * *   PublicNetwork
   * 
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password that is used to access the open source RabbitMQ instance.
   * 
   * @example
   * ****
   */
  password?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  properties?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @remarks
   * The name of the queue on the open source RabbitMQ instance. This parameter is valid only if you set TargetType to Queue.
   * 
   * @example
   * my-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The routing key.
   */
  routingKey?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-uf6of9452b2pba82c ****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type of the resource to which you want to deliver messages. Valid values:
   * 
   * *   **Exchange**: Messages are routed to the event target using an exchange.
   * *   **Queue**: Messages are delivered to a specific queue.
   * 
   * @example
   * Exchange
   */
  targetType?: string;
  /**
   * @remarks
   * The username that is used to access the open source RabbitMQ instance.
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
   * vsw-uf6of9452b2pba82c ****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The name of the virtual host of the open source RabbitMQ instance.
   * 
   * @example
   * Vhost1
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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
      body: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody,
      endpoint: 'string',
      exchange: 'string',
      messageId: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId,
      networkType: 'string',
      password: 'string',
      properties: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties,
      queueName: 'string',
      routingKey: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey,
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The authentication method.
   * 
   * @example
   * BASIC_AUTH
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersData extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: JSONPATH.
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
   * The metric data.
   * 
   * @example
   * $.data
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * **Valid values:**
   * 
   * *   JSONPATH
   * *   CONSTANT
   * *   TEMPLATE
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template that you want to use for HTTP request headers. This parameter is required only if you set Form to TEMPLATE. After the event content is transformed, the data must be in JSON format.
   * 
   * @example
   * {
   *     "user_name":"${name}"
   * }
   */
  template?: string;
  /**
   * @remarks
   * *   If you set Form to CONSTANT, specify a constant.
   * *   If you set Form to JSONPATH, specify a JSONPath rule.
   * *   If you set Form to TEMPLATE, specify variables for the template.
   * 
   * Note: The value of this parameter cannot exceed 10,240 characters in length.
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * *   PublicNetwork
   * *   PrivateNetwork
   * 
   * @example
   * PrivateNetwork
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The password.
   * 
   * @example
   * abc
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The ID of the security group.
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersURL extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The URL for the remote write configuration item of the Managed Service for Prometheus instance.
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The username.
   * 
   * @example
   * ***admin
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * vsw-dwaafds****
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * vpc-adw1awdw*****
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   */
  authorizationType?: UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType;
  /**
   * @remarks
   * The metric data.
   */
  data?: UpdateEventStreamingRequestSinkSinkPrometheusParametersData;
  /**
   * @remarks
   * The parameters that are configured for the request header.
   */
  headerParameters?: UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters;
  /**
   * @remarks
   * The network type.
   */
  networkType?: UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType;
  /**
   * @remarks
   * The password.
   */
  password?: UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword;
  /**
   * @remarks
   * The ID of the security group.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId;
  /**
   * @remarks
   * The URL for the remote write configuration item of the Managed Service for Prometheus instance.
   */
  URL?: UpdateEventStreamingRequestSinkSinkPrometheusParametersURL;
  /**
   * @remarks
   * The username.
   */
  username?: UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId;
  /**
   * @remarks
   * The VPC ID.
   */
  vpcId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      authorizationType: 'AuthorizationType',
      data: 'Data',
      headerParameters: 'HeaderParameters',
      networkType: 'NetworkType',
      password: 'Password',
      securityGroupId: 'SecurityGroupId',
      URL: 'URL',
      username: 'Username',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationType: UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType,
      data: UpdateEventStreamingRequestSinkSinkPrometheusParametersData,
      headerParameters: UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters,
      networkType: UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType,
      password: UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword,
      securityGroupId: UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId,
      URL: UpdateEventStreamingRequestSinkSinkPrometheusParametersURL,
      username: UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername,
      vSwitchId: UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId,
      vpcId: UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId,
    };
  }

  validate() {
    if(this.authorizationType && typeof (this.authorizationType as any).validate === 'function') {
      (this.authorizationType as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.headerParameters && typeof (this.headerParameters as any).validate === 'function') {
      (this.headerParameters as any).validate();
    }
    if(this.networkType && typeof (this.networkType as any).validate === 'function') {
      (this.networkType as any).validate();
    }
    if(this.password && typeof (this.password as any).validate === 'function') {
      (this.password as any).validate();
    }
    if(this.securityGroupId && typeof (this.securityGroupId as any).validate === 'function') {
      (this.securityGroupId as any).validate();
    }
    if(this.URL && typeof (this.URL as any).validate === 'function') {
      (this.URL as any).validate();
    }
    if(this.username && typeof (this.username as any).validate === 'function') {
      (this.username as any).validate();
    }
    if(this.vSwitchId && typeof (this.vSwitchId as any).validate === 'function') {
      (this.vSwitchId as any).validate();
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The name of the exchange on the ApsaraMQ for RabbitMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * amqp-cn-2r42e73o****
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The name of the queue on the ApsaraMQ for RabbitMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The rule that you want to use to route messages.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The type of the resource to which you want to deliver events. Valid values:
   * 
   * *   Exchange
   * *   Queue
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The name of the vhost of the ApsaraMQ for RabbitMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The exchange mode. This parameter is required only if you set TargetType to Exchange.
   */
  exchange?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The attributes that you want to use to filter messages.
   */
  properties?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is required only if you set TargetType to Queue.
   */
  queueName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The rule that you want to use to route messages. This parameter is required only if you set TargetType to Exchange.
   */
  routingKey?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The type of the resource to which you want to deliver events.
   */
  targetType?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost of the ApsaraMQ for RabbitMQ instance.
   */
  virtualHostName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName;
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
      body: UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody,
      exchange: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange,
      instanceId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId,
      messageId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId,
      properties: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties,
      queueName: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName,
      routingKey: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey,
      targetType: UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType,
      virtualHostName: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName,
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

export class UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed.
   * 
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

export class UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The ID of the consumer group.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed.
   */
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The ID of the consumer group.
   */
  group?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   Cloud_4: ApsaraMQ for RocketMQ 4.0 instance
   * *   Cloud_5: ApsaraMQ for RocketMQ 5.0 instance
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
   */
  topic?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic;
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
      consumeTimestamp: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp,
      group: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup,
      instanceId: 'string',
      instanceType: 'string',
      topic: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic,
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The type of the message delivery order. Valid values:
   * 
   * *   **Orderly**
   * *   **Concurrently**
   * 
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The endpoint that is used to access the instance.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The ID of the ApsaraMQ for RocketMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The password that is used to access the instance.
   * 
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * *   Cloud_4 (default): ApsaraMQ for RocketMQ 4.0 instance
   * *   Cloud_5: ApsaraMQ for RocketMQ 5.0 instance
   * *   SelfBuilt: self-managed Apache RocketMQ cluster
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The username that is used to access the instance.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * *   PublicNetwork
   * *   PrivateNetwork
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The value of the sharding key.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersTags extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: UpdateEventStreamingRequestSinkSinkRocketMQParametersBody;
  /**
   * @remarks
   * The type of the message delivery order. This parameter is optional. Default value: Concurrently.
   */
  deliveryOrderType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The endpoint that is used to access the instance.
   */
  instanceEndpoint?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The password that is used to access the instance.
   */
  instancePassword?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The username that is used to access the instance.
   */
  instanceUsername?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The keys that you want to use to filter messages.
   */
  keys?: UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PublicNetwork
   * *   PrivateNetwork
   */
  network?: UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The attributes that you want to use to filter messages.
   */
  properties?: UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties;
  /**
   * @remarks
   * The ID of the security group.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId;
  /**
   * @remarks
   * The sharding key.
   * 
   * >  If you set DeliveryOrderType to Orderly, this parameter is required. If you specify ApsaraMQ for RocketMQ as the event source, you can leave this parameter empty. In this case, the combined value of BrokerName and QueueId is used as the sharding key.
   */
  shardingKey?: UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The tags that you want to use to filter messages.
   */
  tags?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
   */
  topic?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   */
  vpcId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId;
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
      body: UpdateEventStreamingRequestSinkSinkRocketMQParametersBody,
      deliveryOrderType: UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType,
      instanceEndpoint: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId,
      instancePassword: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword,
      instanceType: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType,
      instanceUsername: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername,
      keys: UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys,
      network: UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork,
      properties: UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties,
      securityGroupId: UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId,
      shardingKey: UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey,
      tags: UpdateEventStreamingRequestSinkSinkRocketMQParametersTags,
      topic: UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic,
      vSwitchIds: UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds,
      vpcId: UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId,
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before event transformation.
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The key-value pair of custom logs.
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersContentType extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * None
   */
  template?: string;
  /**
   * @remarks
   * The format of the Simple Log Service data.
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersLogStore extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersProject extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the RAM console.
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersTopic extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
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
   * The topic that you want to use to store logs. This parameter corresponds to the reserved field topic in Simple Log Service.
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

export class UpdateEventStreamingRequestSinkSinkSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that you want to deliver to Simple Log Service.
   */
  body?: UpdateEventStreamingRequestSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The key-value pair of custom logs. This parameter takes effect only if you set ContentType to KeyValue. Each key-value pair is in the Key_n, Value_n format.
   */
  contentSchema?: UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The format of the Simple Log Service data. Valid values:
   * 
   * *   JSON
   * *   KeyValue
   */
  contentType?: UpdateEventStreamingRequestSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   */
  logStore?: UpdateEventStreamingRequestSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The Simple Log Service project.
   */
  project?: UpdateEventStreamingRequestSinkSinkSLSParametersProject;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic that you want to use to store logs. This parameter corresponds to the reserved field topic in Simple Log Service.
   */
  topic?: UpdateEventStreamingRequestSinkSinkSLSParametersTopic;
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
      body: UpdateEventStreamingRequestSinkSinkSLSParametersBody,
      contentSchema: UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema,
      contentType: UpdateEventStreamingRequestSinkSinkSLSParametersContentType,
      logStore: UpdateEventStreamingRequestSinkSinkSLSParametersLogStore,
      project: UpdateEventStreamingRequestSinkSinkSLSParametersProject,
      roleName: UpdateEventStreamingRequestSinkSinkSLSParametersRoleName,
      topic: UpdateEventStreamingRequestSinkSinkSLSParametersTopic,
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

export class UpdateEventStreamingRequestSink extends $dara.Model {
  sinkApacheKafkaParameters?: UpdateEventStreamingRequestSinkSinkApacheKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Apache RocketMQ (Offset Data) as the event target.
   */
  sinkApacheRocketMQCheckpointParameters?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters;
  sinkApiDestinationParameters?: SinkApiDestinationParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify BaiLian as the event target.
   */
  sinkBaiLianParameters?: SinkBaiLianParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Kafka Sink Connect as the event target.
   */
  sinkCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Kafka Source Connect as the event target.
   */
  sinkCustomizedKafkaParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify DashVector as the event target.
   */
  sinkDashVectorParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify DataHub as the event target.
   */
  sinkDataHubParameters?: UpdateEventStreamingRequestSinkSinkDataHubParameters;
  sinkDataWorksTriggerParameters?: SinkDataWorksTriggerParameters;
  /**
   * @remarks
   * The type of the event source.
   */
  sinkDorisParameters?: UpdateEventStreamingRequestSinkSinkDorisParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Function Compute as the event target.
   */
  sinkFcParameters?: UpdateEventStreamingRequestSinkSinkFcParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify CloudFlow as the event target.
   */
  sinkFnfParameters?: UpdateEventStreamingRequestSinkSinkFnfParameters;
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for Kafka as the event target.
   */
  sinkKafkaParameters?: UpdateEventStreamingRequestSinkSinkKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Simple Message Queue (SMQ, formerly MNS) as the event target.
   */
  sinkMNSParameters?: UpdateEventStreamingRequestSinkSinkMNSParameters;
  sinkOSSParameters?: SinkOSSParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify open source RabbitMQ as the event target.
   */
  sinkOpenSourceRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Managed Service for Prometheus as the event target.
   */
  sinkPrometheusParameters?: UpdateEventStreamingRequestSinkSinkPrometheusParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RabbitMQ as the event target.
   */
  sinkRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RocketMQ (Offset Data) as the event target.
   */
  sinkRocketMQCheckpointParameters?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RocketMQ as the event target.
   */
  sinkRocketMQParameters?: UpdateEventStreamingRequestSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Simple Log Service as the event target.
   */
  sinkSLSParameters?: UpdateEventStreamingRequestSinkSinkSLSParameters;
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
      sinkOSSParameters: 'SinkOSSParameters',
      sinkOpenSourceRabbitMQParameters: 'SinkOpenSourceRabbitMQParameters',
      sinkPrometheusParameters: 'SinkPrometheusParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQCheckpointParameters: 'SinkRocketMQCheckpointParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkApacheKafkaParameters: UpdateEventStreamingRequestSinkSinkApacheKafkaParameters,
      sinkApacheRocketMQCheckpointParameters: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters,
      sinkApiDestinationParameters: SinkApiDestinationParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: UpdateEventStreamingRequestSinkSinkDashVectorParameters,
      sinkDataHubParameters: UpdateEventStreamingRequestSinkSinkDataHubParameters,
      sinkDataWorksTriggerParameters: SinkDataWorksTriggerParameters,
      sinkDorisParameters: UpdateEventStreamingRequestSinkSinkDorisParameters,
      sinkFcParameters: UpdateEventStreamingRequestSinkSinkFcParameters,
      sinkFnfParameters: UpdateEventStreamingRequestSinkSinkFnfParameters,
      sinkHttpsParameters: SinkHttpsParameters,
      sinkKafkaParameters: UpdateEventStreamingRequestSinkSinkKafkaParameters,
      sinkMNSParameters: UpdateEventStreamingRequestSinkSinkMNSParameters,
      sinkOSSParameters: SinkOSSParameters,
      sinkOpenSourceRabbitMQParameters: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters,
      sinkPrometheusParameters: UpdateEventStreamingRequestSinkSinkPrometheusParameters,
      sinkRabbitMQParameters: UpdateEventStreamingRequestSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: UpdateEventStreamingRequestSinkSinkRocketMQParameters,
      sinkSLSParameters: UpdateEventStreamingRequestSinkSinkSLSParameters,
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
    if(this.sinkOSSParameters && typeof (this.sinkOSSParameters as any).validate === 'function') {
      (this.sinkOSSParameters as any).validate();
    }
    if(this.sinkOpenSourceRabbitMQParameters && typeof (this.sinkOpenSourceRabbitMQParameters as any).validate === 'function') {
      (this.sinkOpenSourceRabbitMQParameters as any).validate();
    }
    if(this.sinkPrometheusParameters && typeof (this.sinkPrometheusParameters as any).validate === 'function') {
      (this.sinkPrometheusParameters as any).validate();
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

export class UpdateEventStreamingRequestSourceSourceApacheKafkaParameters extends $dara.Model {
  bootstraps?: string;
  consumerGroup?: string;
  networkType?: string;
  offsetReset?: string;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: string;
  securityProtocol?: string;
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

export class UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters extends $dara.Model {
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

export class UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
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

export class UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV2i3gZJ"
   */
  connectorPackageUrl?: string;
  connectorParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
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
      connectorParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters,
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

export class UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters extends $dara.Model {
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

export class UpdateEventStreamingRequestSourceSourceDTSParameters extends $dara.Model {
  /**
   * @remarks
   * The URL and port number of the change tracking instance.
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The UNIX timestamp that is generated when the SDK client consumes the first data record.
   * 
   * @example
   * 1620962769
   */
  initCheckPoint?: number;
  /**
   * @remarks
   * The consumer group password.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * hkprdb
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
   * The name of the tracked topic of the change tracking instance.
   * 
   * @example
   * LTC_CACHE_PRD
   */
  topic?: string;
  /**
   * @remarks
   * The consumer group username.
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
      initCheckPoint: 'number',
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

export class UpdateEventStreamingRequestSourceSourceEventBusParameters extends $dara.Model {
  /**
   * @example
   * my-event-bus
   */
  eventBusName?: string;
  /**
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

export class UpdateEventStreamingRequestSourceSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * DEFAULT_GROUP
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
   * 
   * @example
   * i-8vbh4a5b9yfhgkkzm98f
   */
  instanceId?: string;
  /**
   * @remarks
   * The network setting. Default value: Default. The value PublicNetwork specifies a virtual private cloud (VPC).
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The offset from which messages are consumed.
   * 
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for Kafka instance resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * sg-uf6jcm3y5hcs7hklytxh
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
   * 
   * @example
   * topic_empower_1641539400786
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for Kafka instance is associated.
   * 
   * @example
   * vsw-wz9t1l1e8eu2omwjazmtm
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The encoding or decoding method. Valid values: Json, Text, and Binary. The value Json specifies that binary data is decoded into strings based on UTF-8 encoding and then parsed into the JSON format. The value Text specifies that binary data is decoded into strings based on UTF-8 encoding and then put into the payload. The value Binary specifies that binary data is encoded into strings based on Base64 encoding and then put into the payload.
   * 
   * @example
   * Text
   */
  valueDataType?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * vpc-2ze6p0o345nykmekxtuop
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

export class UpdateEventStreamingRequestSourceSourceMNSParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Base64 encoding. Default value: true.
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
   * queue_api_1642474203601
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the region where the MNS queue resides.
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

export class UpdateEventStreamingRequestSourceSourceMQTTParameters extends $dara.Model {
  /**
   * @example
   * JSON
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * i-bp1dsudbecqwt61jqswt
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for MQTT instance.
   * 
   * @example
   * topic_empower_1642400400779
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

export class UpdateEventStreamingRequestSourceSourceOSSParameters extends $dara.Model {
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

export class UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters extends $dara.Model {
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
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * ****
   */
  password?: string;
  /**
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
   */
  securityGroupId?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  /**
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
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

export class UpdateEventStreamingRequestSourceSourcePrometheusParameters extends $dara.Model {
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
   * json
   */
  dataType?: string;
  /**
   * @example
   * {"env":"test"}
   */
  externalLabels?: string;
  /**
   * @remarks
   * The labels.
   * 
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

export class UpdateEventStreamingRequestSourceSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * i-f8z9lqkldlb4oxsxwwub
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for RabbitMQ instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the vhost of the ApsaraMQ for RabbitMQ instance.
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

export class UpdateEventStreamingRequestSourceSourceRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @example
   * rmq-cn-jte3w******
   */
  instanceId?: string;
  /**
   * @example
   * Cloud_5
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

export class UpdateEventStreamingRequestSourceSourceRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   * 
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
   * The ID of the consumer group on the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID_test
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint that you want to use to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * reg****-vpc.cn-zhangjiakou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * i-f8z9a9mcgwri1c1idd0e
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type of the ApsaraMQ for RocketMQ instance. Valid values:
   * 
   * PublicNetwork and PrivateNetwork.
   * 
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password that you want to use to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * admin
   */
  instancePassword?: string;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for RocketMQ instance belongs.
   * 
   * @example
   * sg-m5edtu24f12345****
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The type of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * 2
   */
  instanceType?: string;
  /**
   * @remarks
   * The username that you want to use to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for RocketMQ instance is associated.
   * 
   * @example
   * vsw-m5ev8asdc6h12****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC in which the ApsaraMQ for RocketMQ instance is deployed.
   * 
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
   * The offset from which messages are consumed. Valid values:
   * 
   * *   CONSUMEFROMLASTOFFSET: Messages are consumed from the latest offset.
   * *   CONSUMEFROMFIRSTOFFSET: Messages are consumed from the earliest offset.
   * *   CONSUMEFROMTIMESTAMP: Messages are consumed from the offset at the specified point in time.
   * 
   * Default value: CONSUMEFROMLASTOFFSET.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for RocketMQ instance resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The tag that you want to use to filter messages.
   * 
   * @example
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed. This parameter is valid only if you set Offset to CONSUMEFROMTIMESTAMP.
   * 
   * @example
   * 1670656652009
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * TOPIC-cainiao-pcs-order-process-inBoundConditionCheck
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

export class UpdateEventStreamingRequestSourceSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console.
   * 
   * @example
   * testRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateEventStreamingRequestSource extends $dara.Model {
  sourceApacheKafkaParameters?: UpdateEventStreamingRequestSourceSourceApacheKafkaParameters;
  sourceApacheRocketMQCheckpointParameters?: UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters;
  sourceCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Data Transmission Service (DTS) as the event source.
   */
  sourceDTSParameters?: UpdateEventStreamingRequestSourceSourceDTSParameters;
  sourceEventBusParameters?: UpdateEventStreamingRequestSourceSourceEventBusParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for Kafka as the event source.
   */
  sourceKafkaParameters?: UpdateEventStreamingRequestSourceSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Message Service (MNS) as the event source.
   */
  sourceMNSParameters?: UpdateEventStreamingRequestSourceSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for MQTT as the event source.
   */
  sourceMQTTParameters?: UpdateEventStreamingRequestSourceSourceMQTTParameters;
  sourceMySQLParameters?: SourceMySQLParameters;
  sourceOSSParameters?: UpdateEventStreamingRequestSourceSourceOSSParameters;
  sourceOpenSourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters;
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Managed Service for Prometheus as the event source.
   */
  sourcePrometheusParameters?: UpdateEventStreamingRequestSourceSourcePrometheusParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RabbitMQ as the event source.
   */
  sourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceRabbitMQParameters;
  sourceRocketMQCheckpointParameters?: UpdateEventStreamingRequestSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify ApsaraMQ for RocketMQ as the event source.
   */
  sourceRocketMQParameters?: UpdateEventStreamingRequestSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are configured if you specify Simple Log Service as the event source.
   */
  sourceSLSParameters?: UpdateEventStreamingRequestSourceSourceSLSParameters;
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
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQCheckpointParameters: 'SourceRocketMQCheckpointParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceApacheKafkaParameters: UpdateEventStreamingRequestSourceSourceApacheKafkaParameters,
      sourceApacheRocketMQCheckpointParameters: UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: UpdateEventStreamingRequestSourceSourceDTSParameters,
      sourceEventBusParameters: UpdateEventStreamingRequestSourceSourceEventBusParameters,
      sourceKafkaParameters: UpdateEventStreamingRequestSourceSourceKafkaParameters,
      sourceMNSParameters: UpdateEventStreamingRequestSourceSourceMNSParameters,
      sourceMQTTParameters: UpdateEventStreamingRequestSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: UpdateEventStreamingRequestSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters,
      sourcePostgreSQLParameters: SourcePostgreSQLParameters,
      sourcePrometheusParameters: UpdateEventStreamingRequestSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: UpdateEventStreamingRequestSourceSourceRabbitMQParameters,
      sourceRocketMQCheckpointParameters: UpdateEventStreamingRequestSourceSourceRocketMQCheckpointParameters,
      sourceRocketMQParameters: UpdateEventStreamingRequestSourceSourceRocketMQParameters,
      sourceSLSParameters: UpdateEventStreamingRequestSourceSourceSLSParameters,
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

export class UpdateEventStreamingRequestTransforms extends $dara.Model {
  /**
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

export class UpdateEventStreamingRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event stream.
   * 
   * @example
   * rocketmq2mns
   */
  description?: string;
  /**
   * @remarks
   * The name of the event stream.
   * 
   * This parameter is required.
   * 
   * @example
   * myeventstreaming
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * The rule that is used to filter events. If you leave this parameter empty, all events are matched.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "source": [
   *         {
   *             "prefix": "acs:mns"
   *         }
   *     ],
   *     "type": [
   *         {
   *             "prefix": "mns:Queue"
   *         }
   *     ],
   *     "subject": [
   *         {
   *             "prefix": "acs:mns:cn-hangzhou:123456789098****:queues/zeus"
   *         }
   *     ]
   * }
   */
  filterPattern?: string;
  /**
   * @remarks
   * The parameters that are configured for the runtime environment.
   */
  runOptions?: UpdateEventStreamingRequestRunOptions;
  /**
   * @remarks
   * The event target. You must and can specify only one event target.
   * 
   * This parameter is required.
   */
  sink?: UpdateEventStreamingRequestSink;
  /**
   * @remarks
   * The event provider, which is also known as the event source. You must and can specify only one event source.
   * 
   * This parameter is required.
   */
  source?: UpdateEventStreamingRequestSource;
  transforms?: UpdateEventStreamingRequestTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: UpdateEventStreamingRequestRunOptions,
      sink: UpdateEventStreamingRequestSink,
      source: UpdateEventStreamingRequestSource,
      transforms: { 'type': 'array', 'itemType': UpdateEventStreamingRequestTransforms },
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

