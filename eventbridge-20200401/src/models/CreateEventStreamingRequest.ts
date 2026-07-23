// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BaiLianAgentTransformParameters } from "./BaiLianAgentTransformParameters";
import { DashScopeTransformParameters } from "./DashScopeTransformParameters";
import { EmbeddingTransformParameters } from "./EmbeddingTransformParameters";
import { SourceFeiShuDocsParameters } from "./SourceFeiShuDocsParameters";
import { SourceJDBCParameters } from "./SourceJdbcparameters";
import { SourceMySQLParameters } from "./SourceMySqlparameters";
import { SourcePostgreSQLParameters } from "./SourcePostgreSqlparameters";
import { SourceRabbitMQMetaParameters } from "./SourceRabbitMqmetaParameters";
import { SourceRabbitMQMsgSyncParameters } from "./SourceRabbitMqmsgSyncParameters";
import { SinkAgentRunParameters } from "./SinkAgentRunParameters";
import { SinkApiDestinationParameters } from "./SinkApiDestinationParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { SinkDataWorksTriggerParameters } from "./SinkDataWorksTriggerParameters";
import { SinkHttpsParameters } from "./SinkHttpsParameters";
import { SinkMQTTParameters } from "./SinkMqttparameters";
import { SinkOSSParameters } from "./SinkOssparameters";
import { SinkRabbitMQMetaParameters } from "./SinkRabbitMqmetaParameters";
import { SinkRabbitMQMsgSyncParameters } from "./SinkRabbitMqmsgSyncParameters";


export class CreateEventStreamingRequestRunOptionsBatchWindow extends $dara.Model {
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

export class CreateEventStreamingRequestRunOptionsBusinessOption extends $dara.Model {
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

export class CreateEventStreamingRequestRunOptionsDeadLetterQueue extends $dara.Model {
  /**
   * @remarks
   * The ARN of the dead-letter queue.
   * 
   * @example
   * acs:ram::131733464781****:role/rdstoecsassumekms
   */
  arn?: string;
  network?: string;
  securityGroupId?: string;
  vSwitchIds?: string;
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

export class CreateEventStreamingRequestRunOptionsRetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The maximum retry time.
   * 
   * @example
   * 512
   */
  maximumEventAgeInSeconds?: number;
  /**
   * @remarks
   * The maximum number of retry attempts.
   * 
   * @example
   * 2
   */
  maximumRetryAttempts?: number;
  /**
   * @remarks
   * The retry policy. Valid values:
   * - BACKOFF_RETRY: Backoff retry.
   * - EXPONENTIAL_DECAY_RETRY: Exponential decay retry.
   * 
   * @example
   * BACKOFF_RETRY
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

export class CreateEventStreamingRequestRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: CreateEventStreamingRequestRunOptionsBatchWindow;
  businessOption?: CreateEventStreamingRequestRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter queue. By default, the dead-letter queue is disabled, and messages that exceed the retry policy are discarded.
   */
  deadLetterQueue?: CreateEventStreamingRequestRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The exception tolerance policy. Valid values:
   * - NONE: No tolerance for exceptions.
   * - ALL: Tolerate all exceptions.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The concurrency.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The retry policy when event delivery fails.
   */
  retryStrategy?: CreateEventStreamingRequestRunOptionsRetryStrategy;
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
      batchWindow: CreateEventStreamingRequestRunOptionsBatchWindow,
      businessOption: CreateEventStreamingRequestRunOptionsBusinessOption,
      deadLetterQueue: CreateEventStreamingRequestRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      retryStrategy: CreateEventStreamingRequestRunOptionsRetryStrategy,
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

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersDynamicTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation type.
   * CONSTANT: constant.
   * JSONPATH: extracts content from upstream based on a path.
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
   * [_single.params.Sink.props.SinkKafkaParameters.D
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersKey extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * [Required] The KMS resource ARN that stores the SSL private key. Used to locate the Key Management Service instance that stores the client private key. Format example: \\"acs:kms:cn-hangzhou:123456789:secret/ssl-keystore-key-xxxx\\". Obtain this value from the ARN information of the corresponding key in the KMS console.
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS secret. When the KMS secret is stored in a key-value (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: if the KMS secret is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", specify \\"ssl_keystore_key\\". Leave this parameter empty if the KMS secret is in plain text mode (directly stores the PEM content of the private key).
   */
  kmsSecretValueKey?: string;
  static names(): { [key: string]: string } {
    return {
      kmsArn: 'KmsArn',
      kmsSecretValueKey: 'KmsSecretValueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsArn: 'string',
      kmsSecretValueKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersValue extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheKafkaParameters extends $dara.Model {
  acks?: string;
  /**
   * @remarks
   * The initial endpoint of the Kafka cluster.
   */
  bootstraps?: string;
  compressionType?: string;
  /**
   * @remarks
   * Specifies the target Topic routing strategy for messages. If both the Topic parameter and the DynamicTopic parameter are specified, the DynamicTopic parameter takes precedence. Two configuration modes are supported:
   *     1. **Static constant mode**: directly specify a fixed Topic name string (for example, "order_created"). All messages are sent to this Topic.
   *     2. **Dynamic extraction mode**: specify a standard JSONPath expression (for example, "$.user.id" or "$.metadata.category"). The system parses the upstream message body and extracts the matching field value as the target Topic name.
   */
  dynamicTopic?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersDynamicTopic;
  headers?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders;
  key?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersKey;
  networkType?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId;
  securityProtocol?: string;
  /**
   * @remarks
   * [Required for encrypted private key] The Kafka client private key password. This parameter is required when the client private key is encrypted (the PEM file contains \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" markers). Leave this parameter empty if the private key is not encrypted. This password is used only to decrypt the private key and is unrelated to Kafka authentication.
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The Kafka client certificate chain. This parameter is required when the Kafka server enables mutual SSL authentication (ssl.client.auth=required). Format: Base64-encoded PEM format, containing the client certificate and the complete certificate chain (client certificate first, intermediate CA certificate next, root CA certificate optional). Ensure that each PEM file content starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\", then Base64-encode the concatenated content.
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * [Required for bidirectional authentication] The SSL private key configuration object. When the Kafka server enables bidirectional SSL authentication, you must provide the client private key. Only KMS pattern is supported: specify the Key Management EPS resource that stores the private key by using KmsArn. The system retrieves the private key content from KMS only in memory, which provides higher security. Configuration example: {\\"KmsArn\\": \\"acs:kms:ap-southeast-1:123456789:secret/ssl-key-xxxx\\", \\"KmsSecretValueKey\\": \\"keystore_private_key\\"}
   */
  sslKeystoreKey?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL] The Kafka server trust certificate. Used to authenticate the validity of the Kafka Broker SSL certificate and prevent man-in-the-middle attacks. Format: Base64 encoding of PEM format, typically containing the CA certificate or the server certificate of the Kafka server. Example: Base64-encode the PEM file content of the CA certificate (ensure it starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\"). If Kafka uses a self-signed certificate, provide the CA certificate that issued it.
   */
  sslTruststoreCertificates?: string;
  topic?: string;
  vSwitchIds?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds;
  value?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersValue;
  vpcId?: CreateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      bootstraps: 'Bootstraps',
      compressionType: 'CompressionType',
      dynamicTopic: 'DynamicTopic',
      headers: 'Headers',
      key: 'Key',
      networkType: 'NetworkType',
      saslMechanism: 'SaslMechanism',
      saslPassword: 'SaslPassword',
      saslUser: 'SaslUser',
      securityGroupId: 'SecurityGroupId',
      securityProtocol: 'SecurityProtocol',
      sslKeyPassword: 'SslKeyPassword',
      sslKeystoreCertificateChain: 'SslKeystoreCertificateChain',
      sslKeystoreKey: 'SslKeystoreKey',
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
      dynamicTopic: CreateEventStreamingRequestSinkSinkApacheKafkaParametersDynamicTopic,
      headers: CreateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders,
      key: CreateEventStreamingRequestSinkSinkApacheKafkaParametersKey,
      networkType: CreateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType,
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: CreateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId,
      securityProtocol: 'string',
      sslKeyPassword: 'string',
      sslKeystoreCertificateChain: 'string',
      sslKeystoreKey: CreateEventStreamingRequestSinkSinkApacheKafkaParametersSslKeystoreKey,
      sslTruststoreCertificates: 'string',
      topic: 'string',
      vSwitchIds: CreateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds,
      value: CreateEventStreamingRequestSinkSinkApacheKafkaParametersValue,
      vpcId: CreateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId,
    };
  }

  validate() {
    if(this.dynamicTopic && typeof (this.dynamicTopic as any).validate === 'function') {
      (this.dynamicTopic as any).validate();
    }
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
    if(this.sslKeystoreKey && typeof (this.sslKeystoreKey as any).validate === 'function') {
      (this.sslKeystoreKey as any).validate();
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

export class CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  group?: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup;
  instanceEndpoint?: string;
  instancePassword?: string;
  instanceUsername?: string;
  networkType?: string;
  securityGroupId?: string;
  topic?: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic;
  vSwitchId?: string;
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
      consumeTimestamp: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp,
      group: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup,
      instanceEndpoint: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      topic: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic,
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

export class CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters extends $dara.Model {
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
  connectorParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
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
      connectorParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
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

export class CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID of MSMQ for Apache Kafka.
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

export class CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersName extends $dara.Model {
  /**
   * @remarks
   * Form
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * Template
   */
  template?: string;
  /**
   * @remarks
   * Value
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

export class CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersType extends $dara.Model {
  /**
   * @remarks
   * Form
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * Template
   */
  template?: string;
  /**
   * @remarks
   * Value
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

export class CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersValue extends $dara.Model {
  /**
   * @remarks
   * Form
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * Template
   * 
   * @example
   * ${content}
   */
  template?: string;
  /**
   * @remarks
   * Value
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

export class CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  /**
   * @remarks
   * The property name.
   */
  name?: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersName;
  /**
   * @remarks
   * The DashVector property type.
   */
  type?: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersType;
  /**
   * @remarks
   * The property value.
   */
  value?: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersValue;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersName,
      type: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersType,
      value: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersValue,
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

export class CreateEventStreamingRequestSinkSinkDashVectorParametersPartition extends $dara.Model {
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
   * 
   * @example
   * ${partition}
   */
  template?: string;
  /**
   * @remarks
   * - If Form is CONSTANT: the constant value.
   * - If Form is JSONPATH: the JSONPath-extracted content.
   * > The Value field cannot exceed 10240 characters.
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

export class CreateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId extends $dara.Model {
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
   * The primary key ID template. Specify this parameter only when Form is set to TEMPLATE.
   * 
   * @example
   * ${ID}
   */
  template?: string;
  /**
   * @remarks
   * - If Form is JSONPATH: the JSONPath-extracted content.
   * - If Form is TEMPLATE: the template variable.
   * > The Value field cannot exceed 10240 characters.
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

export class CreateEventStreamingRequestSinkSinkDashVectorParametersVector extends $dara.Model {
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
   * 
   * @example
   * ${vector}
   */
  template?: string;
  /**
   * @remarks
   * The JSONPath-extracted content.
   * > The Value field cannot exceed 10240 characters.
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

export class CreateEventStreamingRequestSinkSinkDashVectorParameters extends $dara.Model {
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
   * The schema field definition of the table entry when inserting into DashVector. The result after event content transformation must be in JSON format.
   */
  dashVectorSchemaParameters?: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters[];
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
  partition?: CreateEventStreamingRequestSinkSinkDashVectorParametersPartition;
  /**
   * @remarks
   * The primary key ID for inserting or deleting records.
   * 
   * > If this field is not specified, a random primary key ID is used.
   */
  primaryKeyId?: CreateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector of the record to be inserted into DashVector.
   */
  vector?: CreateEventStreamingRequestSinkSinkDashVectorParametersVector;
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
      dashVectorSchemaParameters: { 'type': 'array', 'itemType': CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters },
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: CreateEventStreamingRequestSinkSinkDashVectorParametersPartition,
      primaryKeyId: CreateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId,
      vector: CreateEventStreamingRequestSinkSinkDashVectorParametersVector,
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

export class CreateEventStreamingRequestSinkSinkDataHubParametersBody extends $dara.Model {
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
   * The Record content template for the BLOB type.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDataHubParametersProject extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDataHubParametersRoleName extends $dara.Model {
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
   * The task role name.
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

export class CreateEventStreamingRequestSinkSinkDataHubParametersTopic extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema extends $dara.Model {
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
   * {"k1":"${k1}","k2":"${k2}"}
   */
  template?: string;
  /**
   * @remarks
   * The topic content schema for the TUPLE type.
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

export class CreateEventStreamingRequestSinkSinkDataHubParametersTopicType extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDataHubParameters extends $dara.Model {
  /**
   * @remarks
   * The Record content template for the BLOB type.
   */
  body?: CreateEventStreamingRequestSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The DataHub project name.
   */
  project?: CreateEventStreamingRequestSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * The task role name.
   */
  roleName?: CreateEventStreamingRequestSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The DataHub topic name.
   */
  topic?: CreateEventStreamingRequestSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The topic content schema for the TUPLE type.
   */
  topicSchema?: CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema;
  /**
   * @remarks
   * The topic type. Valid values:                 
   * - TUPLE
   * - BLOB
   */
  topicType?: CreateEventStreamingRequestSinkSinkDataHubParametersTopicType;
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
      body: CreateEventStreamingRequestSinkSinkDataHubParametersBody,
      project: CreateEventStreamingRequestSinkSinkDataHubParametersProject,
      roleName: CreateEventStreamingRequestSinkSinkDataHubParametersRoleName,
      topic: CreateEventStreamingRequestSinkSinkDataHubParametersTopic,
      topicSchema: CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema,
      topicType: CreateEventStreamingRequestSinkSinkDataHubParametersTopicType,
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

export class CreateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersBody extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersDatabase extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersNetworkType extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersPassword extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersTable extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersUserName extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersVSwitchIds extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParametersVpcId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkDorisParameters extends $dara.Model {
  beHttpEndpoint?: CreateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint;
  body?: CreateEventStreamingRequestSinkSinkDorisParametersBody;
  database?: CreateEventStreamingRequestSinkSinkDorisParametersDatabase;
  feHttpEndpoint?: CreateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint;
  networkType?: CreateEventStreamingRequestSinkSinkDorisParametersNetworkType;
  password?: CreateEventStreamingRequestSinkSinkDorisParametersPassword;
  queryEndpoint?: CreateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint;
  securityGroupId?: CreateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId;
  table?: CreateEventStreamingRequestSinkSinkDorisParametersTable;
  userName?: CreateEventStreamingRequestSinkSinkDorisParametersUserName;
  vSwitchIds?: CreateEventStreamingRequestSinkSinkDorisParametersVSwitchIds;
  vpcId?: CreateEventStreamingRequestSinkSinkDorisParametersVpcId;
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
      beHttpEndpoint: CreateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint,
      body: CreateEventStreamingRequestSinkSinkDorisParametersBody,
      database: CreateEventStreamingRequestSinkSinkDorisParametersDatabase,
      feHttpEndpoint: CreateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint,
      networkType: CreateEventStreamingRequestSinkSinkDorisParametersNetworkType,
      password: CreateEventStreamingRequestSinkSinkDorisParametersPassword,
      queryEndpoint: CreateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint,
      securityGroupId: CreateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId,
      table: CreateEventStreamingRequestSinkSinkDorisParametersTable,
      userName: CreateEventStreamingRequestSinkSinkDorisParametersUserName,
      vSwitchIds: CreateEventStreamingRequestSinkSinkDorisParametersVSwitchIds,
      vpcId: CreateEventStreamingRequestSinkSinkDorisParametersVpcId,
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

export class CreateEventStreamingRequestSinkSinkEventHouseParametersMappingRulesColumnValue extends $dara.Model {
  /**
   * @remarks
   * The transformation method, such as JSONPATH.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template configuration.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The extraction path, such as $.data.value.name.
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

export class CreateEventStreamingRequestSinkSinkEventHouseParametersMappingRules extends $dara.Model {
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
  columnValue?: CreateEventStreamingRequestSinkSinkEventHouseParametersMappingRulesColumnValue;
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
      columnValue: CreateEventStreamingRequestSinkSinkEventHouseParametersMappingRulesColumnValue,
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

export class CreateEventStreamingRequestSinkSinkEventHouseParameters extends $dara.Model {
  /**
   * @remarks
   * The catalog name.
   * 
   * @example
   * demo
   */
  catalogName?: string;
  /**
   * @remarks
   * The name of the target table.
   * 
   * @example
   * demo-table
   */
  eventTableName?: string;
  /**
   * @remarks
   * The field mapping rules.
   */
  mappingRules?: CreateEventStreamingRequestSinkSinkEventHouseParametersMappingRules[];
  /**
   * @remarks
   * The namespace of the target table.
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
      mappingRules: { 'type': 'array', 'itemType': CreateEventStreamingRequestSinkSinkEventHouseParametersMappingRules },
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

export class CreateEventStreamingRequestSinkSinkFcParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Valid values:
   * 
   * - ORIGINAL: complete event
   * - JSONPATH: partial event
   * - CONSTANT: constant
   * - TEMPLATE: template
   * 
   * For more information, see [Event transformation](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-transformation).
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

export class CreateEventStreamingRequestSinkSinkFcParametersConcurrency extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkFcParametersDataFormat extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkFcParametersFunctionName extends $dara.Model {
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
   * The function name.
   * 
   * @example
   * myFunction
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFcParametersInvocationType extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkFcParametersQualifier extends $dara.Model {
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
   * The service version.
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

export class CreateEventStreamingRequestSinkSinkFcParametersServiceName extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The content body sent to the function.
   */
  body?: CreateEventStreamingRequestSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. The minimum value is 1.
   */
  concurrency?: CreateEventStreamingRequestSinkSinkFcParametersConcurrency;
  dataFormat?: CreateEventStreamingRequestSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: CreateEventStreamingRequestSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation type. Valid values:
   * - Sync: Synchronous.
   * - Async: Asynchronous.
   */
  invocationType?: CreateEventStreamingRequestSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The service version.
   */
  qualifier?: CreateEventStreamingRequestSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The service name.
   */
  serviceName?: CreateEventStreamingRequestSinkSinkFcParametersServiceName;
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
      body: CreateEventStreamingRequestSinkSinkFcParametersBody,
      concurrency: CreateEventStreamingRequestSinkSinkFcParametersConcurrency,
      dataFormat: CreateEventStreamingRequestSinkSinkFcParametersDataFormat,
      functionName: CreateEventStreamingRequestSinkSinkFcParametersFunctionName,
      invocationType: CreateEventStreamingRequestSinkSinkFcParametersInvocationType,
      qualifier: CreateEventStreamingRequestSinkSinkFcParametersQualifier,
      serviceName: CreateEventStreamingRequestSinkSinkFcParametersServiceName,
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

export class CreateEventStreamingRequestSinkSinkFnfParametersExecutionName extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT. Valid values:
   * 
   * - JSONPATH: partial event
   * - CONSTANT: constant
   * - TEMPLATE: template
   * 
   * For more information, see [Event transformation](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-transformation).
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

export class CreateEventStreamingRequestSinkSinkFnfParametersFlowName extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkFnfParametersInput extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Valid values:
   * 
   * - ORIGINAL: complete event
   * - JSONPATH: partial event
   * - CONSTANT: constant
   * - TEMPLATE: template
   * 
   * For more information, see [Event transformation](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-transformation).
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

export class CreateEventStreamingRequestSinkSinkFnfParametersRoleName extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkFnfParameters extends $dara.Model {
  /**
   * @remarks
   * The execution name.
   */
  executionName?: CreateEventStreamingRequestSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: CreateEventStreamingRequestSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The execution input information.
   */
  input?: CreateEventStreamingRequestSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role configuration.
   */
  roleName?: CreateEventStreamingRequestSinkSinkFnfParametersRoleName;
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
      executionName: CreateEventStreamingRequestSinkSinkFnfParametersExecutionName,
      flowName: CreateEventStreamingRequestSinkSinkFnfParametersFlowName,
      input: CreateEventStreamingRequestSinkSinkFnfParametersInput,
      roleName: CreateEventStreamingRequestSinkSinkFnfParametersRoleName,
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

export class CreateEventStreamingRequestSinkSinkKafkaParametersAcks extends $dara.Model {
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
   * The acknowledgment mode for writing to Kafka:
   * - acks=0: No response is required from the server. This mode provides high performance but a high risk of data loss.
   * - acks=1: A response is returned after the primary node writes successfully. This mode provides moderate performance and a moderate risk of data loss. Data loss may occur if the primary node goes down.
   * - acks=all: A response is returned only after the primary node writes successfully and the secondary nodes complete synchronization. This mode provides lower performance but higher data security. Data loss occurs only if both the primary and secondary nodes go down.
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

export class CreateEventStreamingRequestSinkSinkKafkaParametersDynamicTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation type.
   * CONSTANT: constant.
   * JSONPATH: extracts content from upstream based on a path.
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
   * [_single.params.Sink.props.SinkKafkaParameters.D
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkKafkaParametersHeaders extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkKafkaParametersInstanceId extends $dara.Model {
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
   * Defaut_1283278472_s****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkKafkaParametersKey extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkKafkaParametersTopic extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkKafkaParametersValue extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment mode for writing to Kafka:
   * - acks=0: No response is required from the server. This mode provides high performance but a high risk of data loss.
   * - acks=1: A response is returned after the primary node writes successfully. This mode provides moderate performance and a moderate risk of data loss. Data loss may occur if the primary node goes down.
   * - acks=all: A response is returned only after the primary node writes successfully and the secondary nodes complete synchronization. This mode provides lower performance but higher data security. Data loss occurs only if both the primary and secondary nodes go down.
   */
  acks?: CreateEventStreamingRequestSinkSinkKafkaParametersAcks;
  compressionType?: string;
  /**
   * @remarks
   * Specifies the target Topic routing strategy for messages. If both the Topic parameter and the DynamicTopic parameter are specified, the DynamicTopic parameter takes precedence. Two configuration modes are supported:
   *     1. **Static constant mode**: directly specify a fixed Topic name string (for example, "order_created"). All messages are sent to this Topic.
   *     2. **Dynamic extraction mode**: specify a standard JSONPath expression (for example, "$.user.id" or "$.metadata.category"). The system parses the upstream message body and extracts the matching field value as the target Topic name.
   */
  dynamicTopic?: CreateEventStreamingRequestSinkSinkKafkaParametersDynamicTopic;
  headers?: CreateEventStreamingRequestSinkSinkKafkaParametersHeaders;
  /**
   * @remarks
   * The event target type is MSMQ for Apache Kafka.
   */
  instanceId?: CreateEventStreamingRequestSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The message key.
   */
  key?: CreateEventStreamingRequestSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The topic name.
   */
  topic?: CreateEventStreamingRequestSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The message body.
   */
  value?: CreateEventStreamingRequestSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      compressionType: 'CompressionType',
      dynamicTopic: 'DynamicTopic',
      headers: 'Headers',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: CreateEventStreamingRequestSinkSinkKafkaParametersAcks,
      compressionType: 'string',
      dynamicTopic: CreateEventStreamingRequestSinkSinkKafkaParametersDynamicTopic,
      headers: CreateEventStreamingRequestSinkSinkKafkaParametersHeaders,
      instanceId: CreateEventStreamingRequestSinkSinkKafkaParametersInstanceId,
      key: CreateEventStreamingRequestSinkSinkKafkaParametersKey,
      topic: CreateEventStreamingRequestSinkSinkKafkaParametersTopic,
      value: CreateEventStreamingRequestSinkSinkKafkaParametersValue,
    };
  }

  validate() {
    if(this.acks && typeof (this.acks as any).validate === 'function') {
      (this.acks as any).validate();
    }
    if(this.dynamicTopic && typeof (this.dynamicTopic as any).validate === 'function') {
      (this.dynamicTopic as any).validate();
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

export class CreateEventStreamingRequestSinkSinkMNSParametersBody extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode extends $dara.Model {
  /**
   * @remarks
   * The event transformation format. Default value: CONSTANT.
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

export class CreateEventStreamingRequestSinkSinkMNSParametersQueueName extends $dara.Model {
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
   * The queue name of Simple Message Queue (formerly MNS).
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

export class CreateEventStreamingRequestSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: CreateEventStreamingRequestSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Specifies whether to enable Base64 encoding.
   */
  isBase64Encode?: CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The target service type is Simple Message Queue (formerly MNS).
   */
  queueName?: CreateEventStreamingRequestSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkMNSParametersBody,
      isBase64Encode: CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode,
      queueName: CreateEventStreamingRequestSinkSinkMNSParametersQueueName,
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

export class CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
  authType?: string;
  body?: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody;
  endpoint?: string;
  exchange?: string;
  messageId?: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId;
  networkType?: string;
  password?: string;
  properties?: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties;
  queueName?: string;
  routingKey?: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  securityGroupId?: string;
  targetType?: string;
  username?: string;
  vSwitchIds?: string;
  virtualHostName?: string;
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
      body: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody,
      endpoint: 'string',
      exchange: 'string',
      messageId: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId,
      networkType: 'string',
      password: 'string',
      properties: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties,
      queueName: 'string',
      routingKey: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey,
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

export class CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkPrometheusParametersData extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: JSONPATH.
   * 
   * @example
   * JSAONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The metric content.
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

export class CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters extends $dara.Model {
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
   * The HTTP request header template style. Specify this parameter when Form is set to TEMPLATE. The result after event content transformation must be in JSON format.
   * 
   * @example
   * {
   *     "user_name":"${name}"
   * }
   */
  template?: string;
  /**
   * @remarks
   * - If Form is CONSTANT: the constant value.
   * - If Form is JSONPATH: the JSONPath-extracted content.
   * - If Form is TEMPLATE: the template variable.
   * 
   * Note: The Value field cannot exceed 10240 characters.
   * 
   * @example
   * name
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType extends $dara.Model {
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
   * The network type.
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

export class CreateEventStreamingRequestSinkSinkPrometheusParametersPassword extends $dara.Model {
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
   * The password.
   * 
   * @example
   * *****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkPrometheusParametersURL extends $dara.Model {
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
   * The template style. This parameter is empty when Form is set to CONSTANT.
   */
  template?: string;
  /**
   * @remarks
   * The Prometheus Remote Write URL address.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersUsername extends $dara.Model {
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
   * The username.
   * 
   * @example
   * ****admin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId extends $dara.Model {
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
   * The VPC ID.
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

export class CreateEventStreamingRequestSinkSinkPrometheusParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   */
  authorizationType?: CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType;
  /**
   * @remarks
   * The metric content.
   */
  data?: CreateEventStreamingRequestSinkSinkPrometheusParametersData;
  /**
   * @remarks
   * The data structure of request header parameters.
   */
  headerParameters?: CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters;
  /**
   * @remarks
   * The network type.
   */
  networkType?: CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType;
  /**
   * @remarks
   * The password.
   */
  password?: CreateEventStreamingRequestSinkSinkPrometheusParametersPassword;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId;
  /**
   * @remarks
   * The Prometheus Remote Write URL address.
   */
  URL?: CreateEventStreamingRequestSinkSinkPrometheusParametersURL;
  /**
   * @remarks
   * The username.
   */
  username?: CreateEventStreamingRequestSinkSinkPrometheusParametersUsername;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchId?: CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId;
  /**
   * @remarks
   * The VPC ID.
   */
  vpcId?: CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId;
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
      authorizationType: CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType,
      data: CreateEventStreamingRequestSinkSinkPrometheusParametersData,
      headerParameters: CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters,
      networkType: CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType,
      password: CreateEventStreamingRequestSinkSinkPrometheusParametersPassword,
      securityGroupId: CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId,
      URL: CreateEventStreamingRequestSinkSinkPrometheusParametersURL,
      username: CreateEventStreamingRequestSinkSinkPrometheusParametersUsername,
      vSwitchId: CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId,
      vpcId: CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId,
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersBody extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange extends $dara.Model {
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
   * The name of the exchange in the MSMQ for RabbitMQ instance.
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId extends $dara.Model {
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
   * The instance ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * a5ff91ad4f3f24947887fe184fc2****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersNetworkType extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName extends $dara.Model {
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
   * The queue name of the instance.
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersSecurityGroupId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersVSwitchIds extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName extends $dara.Model {
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
   * The vhost name of the ApsaraMQ for RabbitMQ instance.
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersVpcId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: CreateEventStreamingRequestSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The Exchange mode. This parameter is required only when TargetType is set to Exchange.
   */
  exchange?: CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The target service type is ApsaraMQ for RabbitMQ.
   */
  instanceId?: CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId;
  networkType?: CreateEventStreamingRequestSinkSinkRabbitMQParametersNetworkType;
  /**
   * @remarks
   * The filter properties.
   */
  properties?: CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The Queue mode. This parameter is required only when TargetType is set to Queue.
   */
  queueName?: CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The routing rule of the message. This parameter is required only when TargetType is set to Exchange.
   */
  routingKey?: CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey;
  securityGroupId?: CreateEventStreamingRequestSinkSinkRabbitMQParametersSecurityGroupId;
  /**
   * @remarks
   * The target type.
   */
  targetType?: CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType;
  vSwitchIds?: CreateEventStreamingRequestSinkSinkRabbitMQParametersVSwitchIds;
  /**
   * @remarks
   * The vhost name of the ApsaraMQ for RabbitMQ instance.
   */
  virtualHostName?: CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName;
  vpcId?: CreateEventStreamingRequestSinkSinkRabbitMQParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      networkType: 'NetworkType',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      securityGroupId: 'SecurityGroupId',
      targetType: 'TargetType',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkRabbitMQParametersBody,
      exchange: CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange,
      instanceId: CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId,
      messageId: CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId,
      networkType: CreateEventStreamingRequestSinkSinkRabbitMQParametersNetworkType,
      properties: CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties,
      queueName: CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName,
      routingKey: CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey,
      securityGroupId: CreateEventStreamingRequestSinkSinkRabbitMQParametersSecurityGroupId,
      targetType: CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType,
      vSwitchIds: CreateEventStreamingRequestSinkSinkRabbitMQParametersVSwitchIds,
      virtualHostName: CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName,
      vpcId: CreateEventStreamingRequestSinkSinkRabbitMQParametersVpcId,
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
    if(this.networkType && typeof (this.networkType as any).validate === 'function') {
      (this.networkType as any).validate();
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
    if(this.securityGroupId && typeof (this.securityGroupId as any).validate === 'function') {
      (this.securityGroupId as any).validate();
    }
    if(this.targetType && typeof (this.targetType as any).validate === 'function') {
      (this.targetType as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    if(this.virtualHostName && typeof (this.virtualHostName as any).validate === 'function') {
      (this.virtualHostName as any).validate();
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

export class CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  consumeTimestamp?: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  group?: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup;
  instanceId?: string;
  instanceType?: string;
  topic?: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic;
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
      consumeTimestamp: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp,
      group: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup,
      instanceId: 'string',
      instanceType: 'string',
      topic: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic,
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersBody extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId extends $dara.Model {
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
   * The instance ID of MSMQ for RocketMQ.
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType extends $dara.Model {
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
   * - Cloud_4: Alibaba Cloud ApsaraMQ for RocketMQ 4.0 instance (default)
   * - Cloud_5: Alibaba Cloud ApsaraMQ for RocketMQ 5.0 instance
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersKeys extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersProperties extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersShardingKey extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersTags extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersTopic extends $dara.Model {
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
   * The topic name of the MSMQ for RocketMQ instance.
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId extends $dara.Model {
  /**
   * @remarks
   * The event transformation format. Default value: CONSTANT.
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

export class CreateEventStreamingRequestSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: CreateEventStreamingRequestSinkSinkRocketMQParametersBody;
  deliveryOrderType?: CreateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The instance endpoint.
   */
  instanceEndpoint?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The event target type is MSMQ for RocketMQ.
   */
  instanceId?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The instance password.
   */
  instancePassword?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The instance username.
   */
  instanceUsername?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The filter properties.
   */
  keys?: CreateEventStreamingRequestSinkSinkRocketMQParametersKeys;
  /**
   * @remarks
   * The network type. Valid values:
   * - PublicNetwork
   * - PrivateNetwork
   */
  network?: CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The filter properties.
   */
  properties?: CreateEventStreamingRequestSinkSinkRocketMQParametersProperties;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId;
  shardingKey?: CreateEventStreamingRequestSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The filter properties.
   */
  tags?: CreateEventStreamingRequestSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic of the MSMQ for RocketMQ instance.
   */
  topic?: CreateEventStreamingRequestSinkSinkRocketMQParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds;
  /**
   * @remarks
   * The VPC ID.
   */
  vpcId?: CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId;
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
      body: CreateEventStreamingRequestSinkSinkRocketMQParametersBody,
      deliveryOrderType: CreateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType,
      instanceEndpoint: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId,
      instancePassword: CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword,
      instanceType: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType,
      instanceUsername: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername,
      keys: CreateEventStreamingRequestSinkSinkRocketMQParametersKeys,
      network: CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork,
      properties: CreateEventStreamingRequestSinkSinkRocketMQParametersProperties,
      securityGroupId: CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId,
      shardingKey: CreateEventStreamingRequestSinkSinkRocketMQParametersShardingKey,
      tags: CreateEventStreamingRequestSinkSinkRocketMQParametersTags,
      topic: CreateEventStreamingRequestSinkSinkRocketMQParametersTopic,
      vSwitchIds: CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds,
      vpcId: CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId,
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

export class CreateEventStreamingRequestSinkSinkSLSParametersBody extends $dara.Model {
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

export class CreateEventStreamingRequestSinkSinkSLSParametersContentSchema extends $dara.Model {
  /**
   * @remarks
   * The template style.
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

export class CreateEventStreamingRequestSinkSinkSLSParametersContentType extends $dara.Model {
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
   */
  template?: string;
  /**
   * @remarks
   * The value before transformation.
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

export class CreateEventStreamingRequestSinkSinkSLSParametersLogStore extends $dara.Model {
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
   * The Logstore of Simple Log Service.
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

export class CreateEventStreamingRequestSinkSinkSLSParametersProject extends $dara.Model {
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
   * The project of Simple Log Service.
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

export class CreateEventStreamingRequestSinkSinkSLSParametersRoleName extends $dara.Model {
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
   * To grant authorization to the event bus EventBridge to use this role to read Simple Log Service log content, the following conditions must be met: when creating the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service", and set "Trusted Service" to "event bus".
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

export class CreateEventStreamingRequestSinkSinkSLSParametersTopic extends $dara.Model {
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
   * The topic where the log resides, corresponding to the Simple Log Service reserved field "__topic__".
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

export class CreateEventStreamingRequestSinkSinkSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The content sent to Simple Log Service.
   */
  body?: CreateEventStreamingRequestSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The custom log key-value pairs. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: CreateEventStreamingRequestSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The Simple Log Service data format. You can select the default format or configure specified key-value pairs. Valid values:
   * 
   * - JSON
   * - KeyValue
   */
  contentType?: CreateEventStreamingRequestSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Logstore of Simple Log Service.
   */
  logStore?: CreateEventStreamingRequestSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The project of Simple Log Service.
   */
  project?: CreateEventStreamingRequestSinkSinkSLSParametersProject;
  /**
   * @remarks
   * To grant authorization to the event bus EventBridge to use this role to read Simple Log Service log content, the following conditions must be met: when creating the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service", and set "Trusted Service" to "event bus".
   */
  roleName?: CreateEventStreamingRequestSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic where the log resides, corresponding to the Simple Log Service reserved field "__topic__".
   */
  topic?: CreateEventStreamingRequestSinkSinkSLSParametersTopic;
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
      body: CreateEventStreamingRequestSinkSinkSLSParametersBody,
      contentSchema: CreateEventStreamingRequestSinkSinkSLSParametersContentSchema,
      contentType: CreateEventStreamingRequestSinkSinkSLSParametersContentType,
      logStore: CreateEventStreamingRequestSinkSinkSLSParametersLogStore,
      project: CreateEventStreamingRequestSinkSinkSLSParametersProject,
      roleName: CreateEventStreamingRequestSinkSinkSLSParametersRoleName,
      topic: CreateEventStreamingRequestSinkSinkSLSParametersTopic,
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

export class CreateEventStreamingRequestSink extends $dara.Model {
  sinkAgentRunParameters?: SinkAgentRunParameters;
  /**
   * @remarks
   * The description.
   */
  sinkApacheKafkaParameters?: CreateEventStreamingRequestSinkSinkApacheKafkaParameters;
  /**
   * @remarks
   * The event source type.
   */
  sinkApacheRocketMQCheckpointParameters?: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters;
  sinkApiDestinationParameters?: SinkApiDestinationParameters;
  sinkBaiLianParameters?: SinkBaiLianParameters;
  /**
   * @remarks
   * The Sink Kafka connector parameters.
   */
  sinkCustomizedKafkaConnectorParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The Sink Kafka parameters.
   */
  sinkCustomizedKafkaParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters;
  /**
   * @remarks
   * The Sink DashVector parameters.
   */
  sinkDashVectorParameters?: CreateEventStreamingRequestSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The Sink DataHub parameters.
   */
  sinkDataHubParameters?: CreateEventStreamingRequestSinkSinkDataHubParameters;
  sinkDataWorksTriggerParameters?: SinkDataWorksTriggerParameters;
  /**
   * @remarks
   * The event source type.
   */
  sinkDorisParameters?: CreateEventStreamingRequestSinkSinkDorisParameters;
  /**
   * @remarks
   * The event target name.
   */
  sinkEventHouseParameters?: CreateEventStreamingRequestSinkSinkEventHouseParameters;
  /**
   * @remarks
   * The function target.
   */
  sinkFcParameters?: CreateEventStreamingRequestSinkSinkFcParameters;
  /**
   * @remarks
   * The Sink Fnf parameters.
   */
  sinkFnfParameters?: CreateEventStreamingRequestSinkSinkFnfParameters;
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The Sink Kafka parameters.
   */
  sinkKafkaParameters?: CreateEventStreamingRequestSinkSinkKafkaParameters;
  /**
   * @remarks
   * The MNS event target.
   */
  sinkMNSParameters?: CreateEventStreamingRequestSinkSinkMNSParameters;
  sinkMQTTParameters?: SinkMQTTParameters;
  sinkOSSParameters?: SinkOSSParameters;
  sinkOpenSourceRabbitMQParameters?: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The Sink Prometheus parameters.
   */
  sinkPrometheusParameters?: CreateEventStreamingRequestSinkSinkPrometheusParameters;
  sinkRabbitMQMetaParameters?: SinkRabbitMQMetaParameters;
  sinkRabbitMQMsgSyncParameters?: SinkRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The Sink RabbitMQ parameters.
   */
  sinkRabbitMQParameters?: CreateEventStreamingRequestSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * The event source type.
   */
  sinkRocketMQCheckpointParameters?: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * Sink RocketMQ Parameters
   */
  sinkRocketMQParameters?: CreateEventStreamingRequestSinkSinkRocketMQParameters;
  /**
   * @remarks
   * Sink SLS Parameters
   */
  sinkSLSParameters?: CreateEventStreamingRequestSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkAgentRunParameters: 'SinkAgentRunParameters',
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
      sinkEventHouseParameters: 'SinkEventHouseParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkHttpsParameters: 'SinkHttpsParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkMQTTParameters: 'SinkMQTTParameters',
      sinkOSSParameters: 'SinkOSSParameters',
      sinkOpenSourceRabbitMQParameters: 'SinkOpenSourceRabbitMQParameters',
      sinkPrometheusParameters: 'SinkPrometheusParameters',
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
      sinkApacheKafkaParameters: CreateEventStreamingRequestSinkSinkApacheKafkaParameters,
      sinkApacheRocketMQCheckpointParameters: CreateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters,
      sinkApiDestinationParameters: SinkApiDestinationParameters,
      sinkBaiLianParameters: SinkBaiLianParameters,
      sinkCustomizedKafkaConnectorParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: CreateEventStreamingRequestSinkSinkDashVectorParameters,
      sinkDataHubParameters: CreateEventStreamingRequestSinkSinkDataHubParameters,
      sinkDataWorksTriggerParameters: SinkDataWorksTriggerParameters,
      sinkDorisParameters: CreateEventStreamingRequestSinkSinkDorisParameters,
      sinkEventHouseParameters: CreateEventStreamingRequestSinkSinkEventHouseParameters,
      sinkFcParameters: CreateEventStreamingRequestSinkSinkFcParameters,
      sinkFnfParameters: CreateEventStreamingRequestSinkSinkFnfParameters,
      sinkHttpsParameters: SinkHttpsParameters,
      sinkKafkaParameters: CreateEventStreamingRequestSinkSinkKafkaParameters,
      sinkMNSParameters: CreateEventStreamingRequestSinkSinkMNSParameters,
      sinkMQTTParameters: SinkMQTTParameters,
      sinkOSSParameters: SinkOSSParameters,
      sinkOpenSourceRabbitMQParameters: CreateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters,
      sinkPrometheusParameters: CreateEventStreamingRequestSinkSinkPrometheusParameters,
      sinkRabbitMQMetaParameters: SinkRabbitMQMetaParameters,
      sinkRabbitMQMsgSyncParameters: SinkRabbitMQMsgSyncParameters,
      sinkRabbitMQParameters: CreateEventStreamingRequestSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: CreateEventStreamingRequestSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: CreateEventStreamingRequestSinkSinkRocketMQParameters,
      sinkSLSParameters: CreateEventStreamingRequestSinkSinkSLSParameters,
    };
  }

  validate() {
    if(this.sinkAgentRunParameters && typeof (this.sinkAgentRunParameters as any).validate === 'function') {
      (this.sinkAgentRunParameters as any).validate();
    }
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
    if(this.sinkPrometheusParameters && typeof (this.sinkPrometheusParameters as any).validate === 'function') {
      (this.sinkPrometheusParameters as any).validate();
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

export class CreateEventStreamingRequestSourceSourceApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * [Required] The KMS resource ARN that stores the SSL private key. Used to locate the Key Management Service instance that stores the client private key. Format example: \\"acs:kms:cn-hangzhou:123456789:secret/ssl-keystore-key-xxxx\\". Obtain this value from the ARN information of the corresponding key in the KMS console.
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS secret. When the KMS secret is stored in a key-value (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: if the KMS secret is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", specify \\"ssl_keystore_key\\". Leave this parameter empty if the KMS secret is in plain text mode (directly stores the PEM content of the private key).
   */
  kmsSecretValueKey?: string;
  static names(): { [key: string]: string } {
    return {
      kmsArn: 'KmsArn',
      kmsSecretValueKey: 'KmsSecretValueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsArn: 'string',
      kmsSecretValueKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceApacheKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The bootstrap servers.
   */
  bootstraps?: string;
  /**
   * @remarks
   * The consumer group name.
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The Kafka network type.
   */
  networkType?: string;
  /**
   * @remarks
   * The consumption offset. latest: the system reads data from the latest offset. earliest: the system reads data from the earliest offset. This configuration applies only to the first initialization of an unused Group.
   */
  offsetReset?: string;
  /**
   * @remarks
   * The Kafka SASL authentication mechanism.
   */
  saslMechanism?: string;
  /**
   * @remarks
   * The Kafka SASL authentication password.
   */
  saslPassword?: string;
  /**
   * @remarks
   * The Kafka SASL authentication username.
   */
  saslUser?: string;
  /**
   * @remarks
   * The security group ID of the Kafka source.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The Kafka security protocol type. Valid values: SASL_SSL, PLAINTEXT, SASL_PLAINTEXT.
   */
  securityProtocol?: string;
  /**
   * @remarks
   * [Required for encrypted private key] The Kafka client private key password. This parameter is required when the client private key is encrypted (the PEM file contains \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" markers). Leave this parameter empty if the private key is not encrypted. This password is used only to decrypt the private key and is unrelated to Kafka authentication.
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The Kafka client certificate chain. This parameter is required when the Kafka server enables mutual SSL authentication (ssl.client.auth=required). Format: Base64-encoded PEM format, containing the client certificate and the complete certificate chain (client certificate first, intermediate CA certificate next, root CA certificate optional). Ensure that each PEM file content starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\", then Base64-encode the concatenated content.
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * [Required for bidirectional authentication] The SSL private key configuration object. When the Kafka server enables bidirectional SSL authentication, provide the client private key. Only KMS pattern is supported: specify the Key Management Service EPS resource that stores the private key through KmsArn. The system retrieves the private key content from KMS only in memory for higher security. Configuration example: {\\"KmsArn\\": \\"acs:kms:cn-hangzhou:123456789:secret/ssl-key-xxxx\\", \\"KmsSecretValueKey\\": \\"keystore_private_key\\"}
   */
  sslKeystoreKey?: CreateEventStreamingRequestSourceSourceApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL] The Kafka server trust certificate. Used to authenticate the SSL certificate of the Kafka Broker and prevent man-in-the-middle attacks. Format: Base64-encoded PEM format, typically containing the CA certificate of the Kafka server or the server certificate itself. Example: Base64-encode the PEM file content of the CA certificate (ensure it starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\"). If Kafka uses a self-signed certificate, provide the CA certificate that issued the certificate.
   */
  sslTruststoreCertificates?: string;
  /**
   * @remarks
   * The topic name.
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID list of the Kafka source.
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The data type. Valid values: Text, Binary, Json.
   */
  valueDataType?: string;
  /**
   * @remarks
   * The VPC ID of the Kafka source.
   */
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
      sslKeyPassword: 'SslKeyPassword',
      sslKeystoreCertificateChain: 'SslKeystoreCertificateChain',
      sslKeystoreKey: 'SslKeystoreKey',
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
      sslKeyPassword: 'string',
      sslKeystoreCertificateChain: 'string',
      sslKeystoreKey: CreateEventStreamingRequestSourceSourceApacheKafkaParametersSslKeystoreKey,
      sslTruststoreCertificates: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.sslKeystoreKey && typeof (this.sslKeystoreKey as any).validate === 'function') {
      (this.sslKeystoreKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The instance endpoint.
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The instance password.
   */
  instancePassword?: string;
  /**
   * @remarks
   * The instance username.
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The network type.
   */
  networkType?: string;
  /**
   * @remarks
   * The region ID.
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The message topic.
   */
  topics?: string[];
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
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

export class CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
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

export class CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters extends $dara.Model {
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
  connectorParameters?: CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
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
      connectorParameters: CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters,
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

export class CreateEventStreamingRequestSourceSourceCustomizedKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ApsaraMQ for Kafka instance.
   * 
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

export class CreateEventStreamingRequestSourceSourceDTSParameters extends $dara.Model {
  /**
   * @remarks
   * The network address and port number of the data subscription channel.
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The consumption offset, which is the timestamp when the SDK client consumes the first data record. The value is a UNIX timestamp.
   * 
   * @example
   * 1620962769
   */
  initCheckPoint?: number;
  /**
   * @remarks
   * The password of the consumer group account.
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
   * HD3
   */
  sid?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * f86e5814-b223-482c-b768-3b873297****
   */
  taskId?: string;
  /**
   * @remarks
   * The subscription topic of the data subscription channel.
   * 
   * @example
   * LTC_CACHE_PRD
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

export class CreateEventStreamingRequestSourceSourceEventBusParameters extends $dara.Model {
  eventBusName?: string;
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

export class CreateEventStreamingRequestSourceSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The Group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * DEFAULT_GROUP
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-8vb64581862c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network configuration. Default value: Default. For VPC networks, use PublicNetwork.
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
   * sg-bp1iv19sp1msc7zot4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * popvip_center_robot_order
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp179l3llg3jjxwrq72****
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
   * VPC ID。
   * 
   * @example
   * vpc-8vblalsi0vbhizr77****
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

export class CreateEventStreamingRequestSourceSourceMNSParameters extends $dara.Model {
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
   * The queue name.
   * 
   * @example
   * queue_api_1642474203601
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID.
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

export class CreateEventStreamingRequestSourceSourceMQTTParameters extends $dara.Model {
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
   * The instance ID.
   * 
   * @example
   * r-bp1b5ncun5lqer****
   */
  instanceId?: string;
  networkType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  securityGroupId?: string;
  /**
   * @remarks
   * The topic of the message.
   * 
   * @example
   * CANAL_VICUTU_UAT
   */
  topic?: string;
  vSwitchIds?: string;
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

export class CreateEventStreamingRequestSourceSourceOSSParameters extends $dara.Model {
  /**
   * @remarks
   * The bucket name in Object Storage Service (OSS).
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
   * The data loading mode. single indicates single-document loading, and element indicates chunked loading. Valid values: single/element. Default value: single.
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
   * The role name used to authorize the event bus EventBridge to read OSS files. The role must have at least read-only permissions on OSS.
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

export class CreateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters extends $dara.Model {
  authType?: string;
  bodyDataType?: string;
  endpoint?: string;
  networkType?: string;
  password?: string;
  queueName?: string;
  securityGroupId?: string;
  username?: string;
  vSwitchIds?: string;
  virtualHostName?: string;
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

export class CreateEventStreamingRequestSourceSourcePrometheusParameters extends $dara.Model {
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
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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

export class CreateEventStreamingRequestSourceSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * gtm-cn-k2c2yfg****
   */
  instanceId?: string;
  networkType?: string;
  /**
   * @remarks
   * The queue name of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  securityGroupId?: string;
  vSwitchIds?: string;
  /**
   * @remarks
   * The vhost name of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * eb-connect
   */
  virtualHostName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkType: 'NetworkType',
      queueName: 'QueueName',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkType: 'string',
      queueName: 'string',
      regionId: 'string',
      securityGroupId: 'string',
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

export class CreateEventStreamingRequestSourceSourceRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID.
   */
  regionId?: string;
  /**
   * @remarks
   * The message topic.
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

export class CreateEventStreamingRequestSourceSourceRocketMQParameters extends $dara.Model {
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
   * reg****-vpc.cn-zhangjiakou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The region where the ApsaraMQ for RocketMQ instance resides.
   * 
   * @example
   * default_C56C36026****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance network information. Valid values:
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
   * admin
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
   * - Cloud_4: Alibaba Cloud ApsaraMQ for RocketMQ 4.0 instance (default)
   * - Cloud_5: Alibaba Cloud ApsaraMQ for RocketMQ 5.0 instance
   * - SelfBuilt: self-managed Apache RocketMQ cluster
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
   * admin
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
   * The VPC information of the instance.
   * 
   * @example
   * vpc-m5e3sv4b12345****
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - PublicNetwork
   * - PrivateNetwork
   * 
   * @example
   * PrivateNetwork
   */
  network?: string;
  /**
   * @remarks
   * The consumption offset of the message. Valid values:
   * - CONSUME_FROM_LAST_OFFSET: starts consumption from the latest offset.
   * - CONSUME_FROM_FIRST_OFFSET: starts consumption from the earliest offset.
   * - CONSUME_FROM_TIMESTAMP: starts consumption from the offset at a specified point in time.
   * 
   * Default value: CONSUME_FROM_LAST_OFFSET.
   * 
   * @example
   * CONSUMEFROMLAST_OFFSET
   */
  offset?: string;
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
   * The security group for cross-border tasks.
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
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp. This parameter is valid only when the Offset parameter is set to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1670656652009
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic of the messaging service.
   * 
   * @example
   * Topic_publicRule_api_1667273421288
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch IDs for cross-border tasks.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID for cross-border tasks.
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

export class CreateEventStreamingRequestSourceSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The starting consumption offset. You can select the earliest or latest offset, which corresponds to "begin" or "end" respectively. You can also start consumption from a specified time in seconds.
   * 
   * @example
   * end
   */
  consumePosition?: string;
  /**
   * @remarks
   * The Logstore of Simple Log Service.
   * 
   * @example
   * sas-log
   */
  logStore?: string;
  /**
   * @remarks
   * The project of Simple Log Service.
   * 
   * @example
   * test
   */
  project?: string;
  /**
   * @remarks
   * The role name used to authorize the event bus EventBridge to read SLS log content. When creating the role in the Resource Access Management (RAM) console, select "Alibaba Cloud Service" and set "Trusted Service" to "EventBridge".
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

export class CreateEventStreamingRequestSource extends $dara.Model {
  /**
   * @remarks
   * The open-source Kafka parameter settings.
   */
  sourceApacheKafkaParameters?: CreateEventStreamingRequestSourceSourceApacheKafkaParameters;
  /**
   * @remarks
   * The Source RocketMQ checkpoint parameters.
   */
  sourceApacheRocketMQCheckpointParameters?: CreateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The custom connector Apache Kafka event source.
   */
  sourceCustomizedKafkaConnectorParameters?: CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The custom Kafka event source.
   */
  sourceCustomizedKafkaParameters?: CreateEventStreamingRequestSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The Source DTS parameters.
   */
  sourceDTSParameters?: CreateEventStreamingRequestSourceSourceDTSParameters;
  sourceEventBusParameters?: CreateEventStreamingRequestSourceSourceEventBusParameters;
  sourceFeiShuDocsParameters?: SourceFeiShuDocsParameters;
  sourceJDBCParameters?: SourceJDBCParameters;
  /**
   * @remarks
   * The Source Kafka parameters.
   */
  sourceKafkaParameters?: CreateEventStreamingRequestSourceSourceKafkaParameters;
  /**
   * @remarks
   * The Source MNS parameters.
   */
  sourceMNSParameters?: CreateEventStreamingRequestSourceSourceMNSParameters;
  /**
   * @remarks
   * The Source MQTT parameters.
   */
  sourceMQTTParameters?: CreateEventStreamingRequestSourceSourceMQTTParameters;
  sourceMySQLParameters?: SourceMySQLParameters;
  /**
   * @remarks
   * The Source OSS event source.
   */
  sourceOSSParameters?: CreateEventStreamingRequestSourceSourceOSSParameters;
  sourceOpenSourceRabbitMQParameters?: CreateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters;
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  /**
   * @remarks
   * The Source Prometheus event source.
   */
  sourcePrometheusParameters?: CreateEventStreamingRequestSourceSourcePrometheusParameters;
  sourceRabbitMQMetaParameters?: SourceRabbitMQMetaParameters;
  sourceRabbitMQMsgSyncParameters?: SourceRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The Source RabbitMQ parameters.
   */
  sourceRabbitMQParameters?: CreateEventStreamingRequestSourceSourceRabbitMQParameters;
  /**
   * @remarks
   * The Source RocketMQ checkpoint parameters.
   */
  sourceRocketMQCheckpointParameters?: CreateEventStreamingRequestSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The Source RocketMQ parameters.
   */
  sourceRocketMQParameters?: CreateEventStreamingRequestSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The Source SLS parameters.
   */
  sourceSLSParameters?: CreateEventStreamingRequestSourceSourceSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sourceApacheKafkaParameters: 'SourceApacheKafkaParameters',
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
      sourceApacheKafkaParameters: CreateEventStreamingRequestSourceSourceApacheKafkaParameters,
      sourceApacheRocketMQCheckpointParameters: CreateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: CreateEventStreamingRequestSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: CreateEventStreamingRequestSourceSourceDTSParameters,
      sourceEventBusParameters: CreateEventStreamingRequestSourceSourceEventBusParameters,
      sourceFeiShuDocsParameters: SourceFeiShuDocsParameters,
      sourceJDBCParameters: SourceJDBCParameters,
      sourceKafkaParameters: CreateEventStreamingRequestSourceSourceKafkaParameters,
      sourceMNSParameters: CreateEventStreamingRequestSourceSourceMNSParameters,
      sourceMQTTParameters: CreateEventStreamingRequestSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: CreateEventStreamingRequestSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: CreateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters,
      sourcePostgreSQLParameters: SourcePostgreSQLParameters,
      sourcePrometheusParameters: CreateEventStreamingRequestSourceSourcePrometheusParameters,
      sourceRabbitMQMetaParameters: SourceRabbitMQMetaParameters,
      sourceRabbitMQMsgSyncParameters: SourceRabbitMQMsgSyncParameters,
      sourceRabbitMQParameters: CreateEventStreamingRequestSourceSourceRabbitMQParameters,
      sourceRocketMQCheckpointParameters: CreateEventStreamingRequestSourceSourceRocketMQCheckpointParameters,
      sourceRocketMQParameters: CreateEventStreamingRequestSourceSourceRocketMQParameters,
      sourceSLSParameters: CreateEventStreamingRequestSourceSourceSLSParameters,
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

export class CreateEventStreamingRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestTransforms extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the cloud service, such as the ARN of a function in Function Compute.
   * 
   * @example
   * acs:fc:cn-hangzhou:*****:services/demo-service.LATEST/functions/demo-func
   */
  arn?: string;
  baiLianAgentTransformParameters?: BaiLianAgentTransformParameters;
  dashScopeTransformParameters?: DashScopeTransformParameters;
  embeddingTransformParameters?: EmbeddingTransformParameters;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      baiLianAgentTransformParameters: 'BaiLianAgentTransformParameters',
      dashScopeTransformParameters: 'DashScopeTransformParameters',
      embeddingTransformParameters: 'EmbeddingTransformParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      baiLianAgentTransformParameters: BaiLianAgentTransformParameters,
      dashScopeTransformParameters: DashScopeTransformParameters,
      embeddingTransformParameters: EmbeddingTransformParameters,
    };
  }

  validate() {
    if(this.baiLianAgentTransformParameters && typeof (this.baiLianAgentTransformParameters as any).validate === 'function') {
      (this.baiLianAgentTransformParameters as any).validate();
    }
    if(this.dashScopeTransformParameters && typeof (this.dashScopeTransformParameters as any).validate === 'function') {
      (this.dashScopeTransformParameters as any).validate();
    }
    if(this.embeddingTransformParameters && typeof (this.embeddingTransformParameters as any).validate === 'function') {
      (this.embeddingTransformParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequest extends $dara.Model {
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
   * The event filtering rule. If not specified, all events are matched.
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
  metadata?: string;
  /**
   * @remarks
   * The runtime environment parameters.
   */
  runOptions?: CreateEventStreamingRequestRunOptions;
  /**
   * @remarks
   * The event target. You must select exactly one Sink type.
   */
  sink?: CreateEventStreamingRequestSink;
  /**
   * @remarks
   * The event provider. You must select exactly one Source type.
   */
  source?: CreateEventStreamingRequestSource;
  /**
   * @remarks
   * The tag list. A maximum of 20 items are supported.
   */
  tags?: CreateEventStreamingRequestTags[];
  /**
   * @remarks
   * The Transform-related configurations.
   */
  transforms?: CreateEventStreamingRequestTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      metadata: 'Metadata',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      tags: 'Tags',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      metadata: 'string',
      runOptions: CreateEventStreamingRequestRunOptions,
      sink: CreateEventStreamingRequestSink,
      source: CreateEventStreamingRequestSource,
      tags: { 'type': 'array', 'itemType': CreateEventStreamingRequestTags },
      transforms: { 'type': 'array', 'itemType': CreateEventStreamingRequestTransforms },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

