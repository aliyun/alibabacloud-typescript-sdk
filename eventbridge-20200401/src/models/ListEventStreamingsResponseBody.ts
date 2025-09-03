// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";


export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow extends $dara.Model {
  /**
   * @remarks
   * The maximum number of events that are allowed in the batch window. When this threshold is reached, data in the window is pushed to the downstream service. When multiple batch windows exist, data is pushed if triggering conditions are met in one of the windows.
   * 
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @remarks
   * The maximum period of time during which events are allowed in the batch window. Unit: seconds. When this threshold is reached, data in the window is pushed to the downstream service. When multiple batch windows exist, data is pushed if triggering conditions are met in one of the windows.
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
   * acs:ram::1597871211794192:role/aliyunsaedefaultrole
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

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The retry policy. Valid values: BACKOFF_RETRY and EXPONENTIAL_DECAY_RETRY.
   * 
   * @example
   * EXPONENTIALDECAY_RETRY
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
  businessOption?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption;
  /**
   * @remarks
   * Indicates whether dead-letter queues are enabled. By default, dead-letter queues are disabled. Events that fail to be pushed are discarded after the maximum number of retries that is specified by the retry policy is reached.
   */
  deadLetterQueue?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue;
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
   * The retry policy that is used if events fail to be pushed.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersKey extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersNetworkType extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersSecurityGroupId extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersVSwitchIds extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersValue extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersVpcId extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParameters extends $dara.Model {
  acks?: string;
  bootstraps?: string;
  key?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersKey;
  networkType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersNetworkType;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersSecurityGroupId;
  securityProtocol?: string;
  topic?: string;
  vSwitchIds?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersVSwitchIds;
  value?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersValue;
  vpcId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      bootstraps: 'Bootstraps',
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
      key: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersKey,
      networkType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersNetworkType,
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersSecurityGroupId,
      securityProtocol: 'string',
      topic: 'string',
      vSwitchIds: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersVSwitchIds,
      value: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersValue,
      vpcId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParametersVpcId,
    };
  }

  validate() {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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
  consumeTimestamp?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  group?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersGroup;
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
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersTopic;
  /**
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV2i3gZJ"
   */
  connectorPackageUrl?: string;
  connectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  /**
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @example
   * [
   *   {
   *     "name": "schema1",
   *     "type": "INT",
   *     "value": "${value1}"
   *   },
   *   {
   *     "name": "schema2",
   *     "type": "FLOAT",
   *     "value": "${value2}"
   *   }
   * ]
   */
  template?: string;
  /**
   * @example
   * {
   *   "value1":"v1",
   *   "value2":"v2"
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters extends $dara.Model {
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
  dashVectorSchemaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters;
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
  partition?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition;
  primaryKeyId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId;
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
      dashVectorSchemaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters,
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition,
      primaryKeyId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId,
      vector: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector,
    };
  }

  validate() {
    if(this.dashVectorSchemaParameters && typeof (this.dashVectorSchemaParameters as any).validate === 'function') {
      (this.dashVectorSchemaParameters as any).validate();
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters extends $dara.Model {
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody;
  project?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject;
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName;
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic;
  topicSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema;
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * The method that is used to transform events. Default value: CONSTANT.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName extends $dara.Model {
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * The invocation mode. Valid values:
   * 
   * *   Sync
   * *   Async
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * The method that is used to transform events. Default value: CONSTANT.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that is delivered to Function Compute.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency;
  dataFormat?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation mode. Valid values:
   * 
   * *   Sync
   * *   Async
   */
  invocationType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   */
  qualifier?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The service name.
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
   * The method that is used to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName extends $dara.Model {
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
   * The template based on which events are transformed.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput extends $dara.Model {
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
   * The template based on which events are transformed.
   * 
   * @example
   * None
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
   * The method that is used to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * The input information of the execution.
   */
  input?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role name.
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
   * The method that is used to transform events. Default value: CONSTANT.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersKey extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersTopic extends $dara.Model {
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
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
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
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * The acknowledgment (ACK) mode.
   * 
   * *   If you set this parameter to 0, no response is returned from the broker. In this mode, the performance is high, but the risk of data loss is also high.
   * *   If you set this parameter to 1, a response is returned when data is written to the leader. In this mode, the performance and the risk of data loss are moderate. Data loss may occur if a failure occurs on the leader.
   * *   If you set this parameter to all, a response is returned when data is written to the leader and synchronized to the followers. In this mode, the performance is low, but the risk of data loss is also low. Data loss occurs if the leader and the followers fail at the same time.
   */
  acks?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks;
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The message key.
   */
  key?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The message body.
   */
  value?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks,
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
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * Indicates that Base64 encoding is enabled.
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
   * The method that is used to transform events. Default value: CONSTANT.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Indicates whether Base64 encoding is enabled.
   */
  isBase64Encode?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The name of the MNS queue.
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
   * @example
   * TEMPLATE
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersMessageId extends $dara.Model {
  /**
   * @example
   * TEMPLATE
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersProperties extends $dara.Model {
  /**
   * @example
   * TEMPLATE
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey extends $dara.Model {
  /**
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
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
   * @example
   * ACL
   */
  authType?: string;
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersBody;
  /**
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @example
   * my_exchange
   */
  exchange?: string;
  messageId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersMessageId;
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
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @example
   * my_queue
   */
  queueName?: string;
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @example
   * exchange
   */
  targetType?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  /**
   * @example
   * vsw-wz9qqeovkwjxlu9uc****
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
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * The method that is used to transform events. Default value: CONSTANT.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId extends $dara.Model {
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
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * si-296cd57939a1421b94ec
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
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
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * The method that is used to transform events. Default value: CONSTANT.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey extends $dara.Model {
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
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The rule that is used to route messages.
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * The type of the resource to which events are delivered. Valid values: Exchange and Queue.
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * The name of the vhost to which the ApsaraMQ for RabbitMQ instance belongs.
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
   * The exchange mode. This parameter is required only if TargetType is set to Exchange.
   */
  exchange?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The properties that are used to filter messages.
   */
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is required only if TargetType is set to Queue.
   */
  queueName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The rule that is used to route messages. This parameter is required only if TargetType is set to Exchange.
   */
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The type of the resource to which events are delivered.
   */
  targetType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost to which the ApsaraMQ for RabbitMQ instance belongs.
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
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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
  consumeTimestamp?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  group?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParametersGroup;
  /**
   * @example
   * MQ_INST_1825725063814405_BZ******
   */
  instanceId?: string;
  /**
   * @example
   * Cloud_5
   */
  instanceType?: string;
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
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * The topic on the ApsaraMQ for RocketMQ instance.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody;
  deliveryOrderType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersDeliveryOrderType;
  instanceEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId;
  instancePassword?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword;
  instanceType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType;
  instanceUsername?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The keys that are used to filter messages.
   */
  keys?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys;
  network?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The properties that are used to filter messages.
   */
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties;
  securityGroupId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId;
  shardingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  tags?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic on the ApsaraMQ for RocketMQ instance.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic;
  vSwitchIds?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds;
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
   * The method that is used to transform events.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template based on which events are transformed.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore extends $dara.Model {
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * The role name. If you want to authorize EventBridge to use this role to read logs in Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the RAM console.
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
   * The method that is used to transform events. Default value: CONSTANT.
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
   * The name of the topic in which logs are stored. The topic corresponds to the topic reserved field in Simple Log Service.
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
   * The message body that is sent to Simple Log Service.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody;
  contentSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema;
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
   * The role name. If you want to authorize EventBridge to use this role to read logs in Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the RAM console.
   */
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The name of the topic in which logs are stored. The topic corresponds to the topic reserved field in Simple Log Service.
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
  sinkApacheKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParameters;
  sinkApacheRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters;
  sinkBaiLianParameters?: SinkBaiLianParameters;
  sinkCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters;
  sinkDataHubParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters;
  sinkDorisParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters;
  /**
   * @remarks
   * The parameters that are returned if Function Compute is specified as the event target.
   */
  sinkFcParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters;
  /**
   * @remarks
   * The parameters that are returned if CloudFlow is specified as the event target.
   */
  sinkFnfParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for Kafka is specified as the event target.
   */
  sinkKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if MNS is specified as the event target.
   */
  sinkMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters;
  sinkOpenSourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RabbitMQ is specified as the event target.
   */
  sinkRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters;
  sinkRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RocketMQ is specified as the event target.
   */
  sinkRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Log Service is specified as the event target.
   */
  sinkSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkApacheKafkaParameters: 'SinkApacheKafkaParameters',
      sinkApacheRocketMQCheckpointParameters: 'SinkApacheRocketMQCheckpointParameters',
      sinkBaiLianParameters: 'SinkBaiLianParameters',
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkDorisParameters: 'SinkDorisParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkOpenSourceRabbitMQParameters: 'SinkOpenSourceRabbitMQParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQCheckpointParameters: 'SinkRocketMQCheckpointParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkApacheKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheKafkaParameters,
      sinkApacheRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters,
      sinkDataHubParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters,
      sinkDorisParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDorisParameters,
      sinkFcParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters,
      sinkFnfParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters,
      sinkKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters,
      sinkMNSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters,
      sinkOpenSourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkOpenSourceRabbitMQParameters,
      sinkRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters,
      sinkSLSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters,
    };
  }

  validate() {
    if(this.sinkApacheKafkaParameters && typeof (this.sinkApacheKafkaParameters as any).validate === 'function') {
      (this.sinkApacheKafkaParameters as any).validate();
    }
    if(this.sinkApacheRocketMQCheckpointParameters && typeof (this.sinkApacheRocketMQCheckpointParameters as any).validate === 'function') {
      (this.sinkApacheRocketMQCheckpointParameters as any).validate();
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
    if(this.sinkFcParameters && typeof (this.sinkFcParameters as any).validate === 'function') {
      (this.sinkFcParameters as any).validate();
    }
    if(this.sinkFnfParameters && typeof (this.sinkFnfParameters as any).validate === 'function') {
      (this.sinkFnfParameters as any).validate();
    }
    if(this.sinkKafkaParameters && typeof (this.sinkKafkaParameters as any).validate === 'function') {
      (this.sinkKafkaParameters as any).validate();
    }
    if(this.sinkMNSParameters && typeof (this.sinkMNSParameters as any).validate === 'function') {
      (this.sinkMNSParameters as any).validate();
    }
    if(this.sinkOpenSourceRabbitMQParameters && typeof (this.sinkOpenSourceRabbitMQParameters as any).validate === 'function') {
      (this.sinkOpenSourceRabbitMQParameters as any).validate();
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheKafkaParameters extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV2i3gZJ"
   */
  connectorPackageUrl?: string;
  connectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
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
  initCheckPoint?: string;
  /**
   * @remarks
   * The consumer group password.
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
   * 1611b337285f44e2936a2c4170bbbb7f
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the tracked topic of the change tracking instance.
   * 
   * @example
   * TP_TEST_UNDERWRITE_ISSUE
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
   * The ID of the ApsaraMQ for Kafka instance.
   * 
   * @example
   * bastionhost-cn-i7m2gwt7z1n
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Default value: Default. The value PublicNetwork indicates a VPC.
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
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * sg-5ud5f3p0rqqis69tpp8eho7cp
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
   * 
   * @example
   * topic_empower_1642473600414
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for Kafka instance is associated.
   * 
   * @example
   * vsw-bp1rmi8rind7eo50cbied
   */
  vSwitchIds?: string;
  /**
   * @example
   * JSON
   */
  valueDataType?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * vpc-wz9ki1qdlx3cx5cbbhowf
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
   * work4
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the region where the MNS queue resides.
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
   * @example
   * JSON
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * bastionhost-cn-zvp27kcha1r
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for MQTT instance.
   * 
   * @example
   * migration_instance
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters extends $dara.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters extends $dara.Model {
  /**
   * @example
   * c83555068b6******ad213f565f209
   */
  clusterId?: string;
  /**
   * @example
   * JSON
   */
  dataType?: string;
  /**
   * @example
   * {"source":"prometheus-prod"}
   */
  externalLabels?: string;
  /**
   * @example
   * __name__=.*
   */
  labels?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
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
   * dbaudit-cn-7mz2hqolc06
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
   * The ID of the region where the ApsaraMQ for RabbitMQ instance resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the vhost to which the ApsaraMQ for RabbitMQ instance belongs.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters extends $dara.Model {
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
   * JSON
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
   * GID_group1
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint that is used to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance
   * 
   * @example
   * i-f8zbher64dlm58plyfte
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type of the ApsaraMQ for RocketMQ instance. Valid values:
   * 
   * *   PublicNetwork
   * *   PrivateNetwork
   * 
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password that is used to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * 123
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
   * The username that is used to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * admin**
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for RocketMQ instance is associated.
   * 
   * @example
   * vsw-m5ev8asdc6h123456****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the ApsaraMQ for RocketMQ instance belongs.
   * 
   * @example
   * vpc-bp1a4gmlk31hy***l3ss
   */
  instanceVpcId?: string;
  /**
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The offset from which messages are consumed. Valid values: CONSUMEFROMLASTOFFSET: Messages are consumed from the latest offset. CONSUMEFROMFIRSTOFFSET: Messages are consumed from the earliest offset. CONSUME_FROM_TIMESTAMP: Messages are consumed from the offset at the specified point in time.
   * 
   * @example
   * CONSUMEFROMTIMESTAMP
   */
  offset?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for RocketMQ instance resides.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The tag that is used to filter messages.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that indicates the time from which messages are consumed. This parameter is valid only if Offset is set to CONSUMEFROMTIMESTAMP.
   * 
   * @example
   * 1670742074043
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic from which messages are sent.
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The consumer offset. The value begin indicates the earliest offset. The value end indicates the latest offset. You can also specify a time in seconds to start message consumption.
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
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console.
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
  sourceApacheKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheKafkaParameters;
  sourceApacheRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters;
  sourceCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if Data Transmission Service (DTS) is specified as the event source.
   */
  sourceDTSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters;
  sourceEventBusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for Kafka is specified as the event source.
   */
  sourceKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters;
  /**
   * @remarks
   * The parameters that are returned if Message Queue (MNS) is specified as the event source.
   */
  sourceMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for MQTT is specified as the event source.
   */
  sourceMQTTParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters;
  sourceMySQLParameters?: SourceMySQLParameters;
  sourceOSSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters;
  sourceOpenSourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters;
  sourcePrometheusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RabbitMQ is specified as the event source.
   */
  sourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters;
  sourceRocketMQCheckpointParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters that are returned if ApsaraMQ for RocketMQ is specified as the event source.
   */
  sourceRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters that are returned if Simple Log Service is specified as the event source.
   */
  sourceSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters;
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
      sourcePrometheusParameters: 'SourcePrometheusParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQCheckpointParameters: 'SourceRocketMQCheckpointParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceApacheKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheKafkaParameters,
      sourceApacheRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters,
      sourceEventBusParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceEventBusParameters,
      sourceKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters,
      sourceMNSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters,
      sourceMQTTParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceOpenSourceRabbitMQParameters,
      sourcePrometheusParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters,
      sourceRocketMQCheckpointParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQCheckpointParameters,
      sourceRocketMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters,
      sourceSLSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters,
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

export class ListEventStreamingsResponseBodyDataEventStreamingsTransforms extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the cloud service, such as the ARN of a Function Compute function.
   * 
   * @example
   * acs:fc:cn-hangzhou:*****:services/demo-service.LATEST/functions/demo-func
   */
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  validate() {
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
   * The rule that is used to filter events. If you leave this parameter empty, all events are matched.
   */
  filterPattern?: string;
  /**
   * @remarks
   * The parameters that are returned for the runtime environment.
   */
  runOptions?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptions;
  /**
   * @remarks
   * The event target.
   */
  sink?: ListEventStreamingsResponseBodyDataEventStreamingsSink;
  /**
   * @remarks
   * The event provider, which is also known as the event source.
   */
  source?: ListEventStreamingsResponseBodyDataEventStreamingsSource;
  /**
   * @remarks
   * The status of the event stream that is returned.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The transformation-related configurations.
   */
  transforms?: ListEventStreamingsResponseBodyDataEventStreamingsTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
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
      eventStreamingName: 'string',
      filterPattern: 'string',
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
   * The event streams.
   */
  eventStreamings?: ListEventStreamingsResponseBodyDataEventStreamings[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. You must specify the pagination token in the next request.
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
   * The response code. Valid values:
   * 
   * Success: The request is successful.
   * 
   * Other codes: The request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListEventStreamingsResponseBodyData;
  /**
   * @remarks
   * The returned error message.
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
   * 283FF852-C4B8-58C9-9777-F88A5A16A79F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. The value true indicates that the request is successful.
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

