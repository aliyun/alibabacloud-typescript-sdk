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
import { SinkDataWorksTriggerParameters } from "./SinkDataWorksTriggerParameters";
import { SinkHttpsParameters } from "./SinkHttpsParameters";
import { SinkMQTTParameters } from "./SinkMqttparameters";
import { SinkOSSParameters } from "./SinkOssparameters";
import { SinkRabbitMQMetaParameters } from "./SinkRabbitMqmetaParameters";
import { SinkRabbitMQMsgSyncParameters } from "./SinkRabbitMqmsgSyncParameters";


export class GetEventStreamingResponseBodyDataDetailedStatus extends $dara.Model {
  /**
   * @remarks
   * The delay time.
   * 
   * @example
   * 3
   */
  delayTime?: number;
  /**
   * @remarks
   * The difference offset.
   * 
   * @example
   * 0
   */
  diffOffset?: number;
  /**
   * @remarks
   * The extension property.
   * 
   * @example
   * {
   *         "test": "test",
   *         "test2": 1
   *       }
   */
  extensions?: { [key: string]: any };
  /**
   * @remarks
   * The transactions per second.
   * 
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
   * The maximum number of events that the window can contain. When this threshold is reached, the data in the window is pushed downstream. If multiple windows exist, data is pushed when any one window meets the threshold.
   * 
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @remarks
   * The maximum time range (in seconds) of events that the window can contain. When this threshold is reached, the data in the window is pushed downstream. If multiple windows exist, data is pushed when any one window meets the threshold.
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
   * The ARN of the dead-letter queue.
   * 
   * @example
   * acs:ram::155020394332****:role/edskmstoecs
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
   * The vSwitch ID where the dead-letter queue resides.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID where the dead-letter queue resides.
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

export class GetEventStreamingResponseBodyDataRunOptionsRetryStrategy extends $dara.Model {
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
   * The retry policy. Valid values: BACKOFF_RETRY (backoff retry) and EXPONENTIALDECAY_RETRY (exponential attenuation retry).
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

export class GetEventStreamingResponseBodyDataRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batching window.
   */
  batchWindow?: GetEventStreamingResponseBodyDataRunOptionsBatchWindow;
  businessOption?: GetEventStreamingResponseBodyDataRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter queue. By default, the dead-letter queue is disabled, and messages that exceed the retry policy are discarded.
   */
  deadLetterQueue?: GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The fault tolerance policy. Valid values: NONE (no fault tolerance) and ALL (tolerate all faults).
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The concurrent tasks.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The retry policy when event push failed.
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersDynamicTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation type. Valid values:
   * CONSTANT: fixed value.
   * JSONPATH: extracted from upstream based on the path.
   */
  form?: string;
  /**
   * @remarks
   * The.
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * [Required] The KMS resource ARN that stores the SSL private key. Used to locate the Key Management Service instance that stores the client private key. Format example: \\"acs:kms:cn-hangzhou:123456789:secret/ssl-keystore-key-xxxx\\". Obtain this value from the ARN information of the corresponding key in the KMS console.
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS credential. When the KMS credential is stored as a key-value (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: if the KMS credential is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", specify \\"ssl_keystore_key\\". Leave this parameter empty if the KMS credential is in plain text mode (directly storing the PEM content of the private key).
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
  /**
   * @remarks
   * Specifies the target topic routing strategy for messages. If both the topic parameter and the DynamicTopic parameter are specified, the DynamicTopic parameter takes precedence. Two configuration modes are supported:
   *     1. **Static constant mode**: Specify a fixed topic name string (for example, "order_created"). All messages are sent to this topic.
   *     2. **Dynamic extraction mode**: Specify a standard JSONPath expression (for example, "$.user.id" or "$.metadata.category"). The system parses the upstream message body and extracts the matching field value as the target topic name.
   */
  dynamicTopic?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersDynamicTopic;
  headers?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersHeaders;
  key?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersKey;
  networkType?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersNetworkType;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSecurityGroupId;
  securityProtocol?: string;
  /**
   * @remarks
   * [Required for encrypted private key] The Kafka client private key password. Required when the client private key is encrypted (the PEM file contains \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" markers). Provide the decryption password. Leave empty if the private key is not encrypted. Note: This password is only used to decrypt the private key and is unrelated to Kafka authentication.
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The Kafka client certificate chain. Required when the Kafka server enables mutual SSL authentication (ssl.client.auth=required). Format: Base64-encoded PEM format, containing the client certificate and the complete certificate chain (client certificate first, intermediate CA certificate next, root CA certificate optional). Note: Ensure each PEM file content begins with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\", then Base64-encode the concatenated content.
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * **Required for bidirectional authentication** The SSL private key configuration object. When the Kafka server enables bidirectional SSL authentication, the client private key must be provided. Only KMS pattern is supported for the key: specify the Key Management Service EPS resource that stores the private key through KmsArn. The system retrieves the private key content from KMS only in memory, which provides higher security. Configuration example: {\\"KmsArn\\": \\"acs:kms:ap-southeast-1:123456789:secret/ssl-key-xxxx\\", \\"KmsSecretValueKey\\": \\"keystore_private_key\\"}
   */
  sslKeystoreKey?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL] The Kafka server trust certificate. Used to verify the legitimacy of the Kafka Broker SSL certificate and prevent man-in-the-middle attacks. Format: Base64-encoded PEM format, typically containing the CA certificate or the server certificate of the Kafka server. Example: Base64-encode the PEM file content of the CA certificate (ensure it begins with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\"). If Kafka uses a self-signed certificate, provide the CA certificate that issued it.
   */
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
      dynamicTopic: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersDynamicTopic,
      headers: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersHeaders,
      key: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersKey,
      networkType: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersNetworkType,
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSecurityGroupId,
      securityProtocol: 'string',
      sslKeyPassword: 'string',
      sslKeystoreCertificateChain: 'string',
      sslKeystoreKey: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSslKeystoreKey,
      sslTruststoreCertificates: 'string',
      topic: 'string',
      vSwitchIds: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVSwitchIds,
      value: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersValue,
      vpcId: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVpcId,
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
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
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The UNIX timestamp.
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup extends $dara.Model {
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
   * The template.
   */
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
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic of the ApsaraMQ for RabbitMQ instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp of message consumption.
   */
  consumeTimestamp?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The Group ID of the consumer group.
   */
  group?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * 192.168.1.1:9876
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The password for the username.
   * 
   * @example
   * ****
   */
  instancePassword?: string;
  /**
   * @remarks
   * The username required for authentication.
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
   * sg-2ze5bmpw6adn0q******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic of the ApsaraMQ for RocketMQ instance.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersTopic;
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
   * The ID of the virtual private cloud (VPC).
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

export class GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters extends $dara.Model {
  /**
   * @remarks
   * The OSS file download URL.
   * 
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV******"
   */
  connectorPackageUrl?: string;
  /**
   * @remarks
   * Parses the properties file in the current ZIP package.
   */
  connectorParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
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
   * @remarks
   * The instance ID of the MSMQ for Apache Kafka instance.
   * 
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
   * - If Form is JSONPATH: the content to fetch by JSONPath.
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId extends $dara.Model {
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
   * - If Form is JSONPATH: the content to fetch by JSONPath.
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector extends $dara.Model {
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
   * The content to fetch by JSONPath.
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters extends $dara.Model {
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
  dashVectorSchemaParameters?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters[];
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
  partition?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition;
  /**
   * @remarks
   * The primary key ID for inserting or deleting records. If this field is not specified, a random primary key ID is used.
   */
  primaryKeyId?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector of the record to be inserted into DashVector.
   */
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema extends $dara.Model {
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
   * The template.
   * 
   * @example
   * {"k1":"${k1}","k2":"${k2}"}
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParameters extends $dara.Model {
  /**
   * @remarks
   * The record content template for the BLOB type.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The DataHub project name.
   */
  project?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * The node role name.
   */
  roleName?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The DataHub topic name.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The TUPLE type topic content pattern.
   */
  topicSchema?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema;
  /**
   * @remarks
   * The topic type. Valid values:
   * 
   * - TUPLE
   * - BLOB
   */
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Valid values:
   * 
   * - ORIGINAL: complete event
   * - JSONPATH: partial event
   * - CONSTANT: constant
   * - TEMPLATE: template
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
   * $.data.key
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName extends $dara.Model {
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
   * The template.
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
   * The transformation format. Default value: CONSTANT.
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
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The invocation type. Valid values:
   * 
   * - Sync: synchronous.
   * - Async: asynchronous.
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
   * The transformation format. Default value: CONSTANT.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The content body sent to the function.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. Minimum value: 1.
   */
  concurrency?: GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency;
  /**
   * @remarks
   * The format conversion rule for event content.
   */
  dataFormat?: GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation type. Valid values:
   * 
   * - Sync: synchronous.
   * - Async: asynchronous.
   */
  invocationType?: GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The service version.
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
   * The transformation format. Default value: CONSTANT. Valid values:
   * 
   * - JSONPATH: partial event.
   * - CONSTANT: constant.
   * - TEMPLATE: template.
   * 
   * For more information, see [Event transformation](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-transformation).
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The execute name.
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
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
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
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The execute input information.
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
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
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
   * The execute name.
   */
  executionName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The execute input information.
   */
  input?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role configuration.
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
   * The transformation format. Default value: CONSTANT.
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
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The Kafka write confirm pattern:
   * 
   * - acks=0: No response is required from the server. Performance is high, but the risk of data loss is high.
   * - acks=1: A response is returned after the primary node writes successfully. Performance is moderate, and the risk of data loss is moderate. Data may be lost if the primary node has a breakdown.
   * - acks=all: A response is returned after the primary node writes successfully and the secondary nodes complete synchronization. Performance is low, but data is more secure. Data is lost only if both the primary and secondary nodes have a breakdown.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersDynamicTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation type. Valid values:
   * CONSTANT: fixed value.
   * JSONPATH: extracted from upstream based on the path.
   */
  form?: string;
  /**
   * @remarks
   * The.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Valid values:
   * 
   * - ORIGINAL: complete event
   * - JSONPATH: partial event
   * - CONSTANT: constant
   * - TEMPLATE: template
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey extends $dara.Model {
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
   * The template.
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
   * The transformation format. Default value: CONSTANT.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The Kafka write confirm pattern:
   * 
   * - acks=0: No response is required from the server. Performance is high, but the risk of data loss is high.
   * - acks=1: A response is returned after the primary node writes successfully. Performance is moderate, and the risk of data loss is moderate. Data may be lost if the primary node has a breakdown.
   * - acks=all: A response is returned after the primary node writes successfully and the secondary nodes complete synchronization. Performance is low, but data is more secure. Data is lost only if both the primary and secondary nodes have a breakdown.
   */
  acks?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks;
  compressionType?: string;
  /**
   * @remarks
   * Specifies the target topic routing strategy for messages. If both the topic parameter and the DynamicTopic parameter are specified, the DynamicTopic parameter takes precedence. Two configuration modes are supported:
   *     1. **Static constant mode**: Specify a fixed topic name string (for example, "order_created"). All messages are sent to this topic.
   *     2. **Dynamic extraction mode**: Specify a standard JSONPath expression (for example, "$.user.id" or "$.metadata.category"). The system parses the upstream message body and extracts the matching field value as the target topic name.
   */
  dynamicTopic?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersDynamicTopic;
  /**
   * @remarks
   * The additional metadata of the Kafka message.
   */
  headers?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders;
  /**
   * @remarks
   * The target service type is MSMQ for Apache Kafka.
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
   * The message body.
   */
  value?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue;
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
      acks: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks,
      compressionType: 'string',
      dynamicTopic: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersDynamicTopic,
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName extends $dara.Model {
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
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The name of the Simple MSMQ (formerly MNS) queue.
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
   * Indicates whether Base64 decoding is enabled.
   */
  isBase64Encode?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The target service type is Simple MSMQ (formerly MNS).
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
   * @remarks
   * The transformation format. Default value: CONSTANT.
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
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The raw data value.
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId extends $dara.Model {
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
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The message ID value.
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties extends $dara.Model {
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
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The property content.
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey extends $dara.Model {
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
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The routing key value.
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

export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
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
   * The message body content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersBody;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * 192.168.1.1:9876
   */
  endpoint?: string;
  /**
   * @remarks
   * The exchange name in RabbitMQ.
   * 
   * @example
   * my-exchange
   */
  exchange?: string;
  /**
   * @remarks
   * The unique identity of the message.
   */
  messageId?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersMessageId;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password used to access the RabbitMQ instance.
   * 
   * @example
   * ****
   */
  password?: string;
  /**
   * @remarks
   * The additional property of the message.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue name in RabbitMQ. This parameter takes effect only when TargetType is set to Queue.
   * 
   * @example
   * my-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The message routing key.
   */
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-uf6of9452b2pba82c ****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The target type for message delivery. This parameter takes effect only when TargetType is set to Exchange.
   * 
   * @example
   * Exchange
   */
  targetType?: string;
  /**
   * @remarks
   * The username used to access the RabbitMQ instance.
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
   * The virtual hostname of the RabbitMQ instance.
   * 
   * @example
   * vhost1
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
   * The transformation format.
   * 
   * @example
   * TEMPLATE
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange extends $dara.Model {
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
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The name of the Exchange on the MSMQ for RabbitMQ message instance.
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
   * The transformation format. Default value: CONSTANT.
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
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The instance ID of the MSMQ for RabbitMQ message instance.
   * 
   * @example
   * e5c9b727-e06c-4d7e-84d5-f8ce644e****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
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
   * The transformation format.
   * 
   * @example
   * TEMPLATE
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName extends $dara.Model {
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
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType extends $dara.Model {
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
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The target type. Valid values:
   * 
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

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName extends $dara.Model {
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
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The name of the vhost on the MSMQ for RabbitMQ message instance.
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
   * The Exchange mode. This parameter is required only when TargetType is set to Exchange.
   */
  exchange?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The target service type is MSMQ for RabbitMQ message.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The filter properties.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The Queue mode. This parameter is required only when TargetType is set to Queue.
   */
  queueName?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The routing rule of the message. This parameter is required only when TargetType is set to Exchange.
   */
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The target type.
   */
  targetType?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost on the MSMQ for RabbitMQ message instance.
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
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The UNIX timestamp.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersGroup extends $dara.Model {
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
   * The template.
   */
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
   * @remarks
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The topic name of the MSMQ for RocketMQ message instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp of message consumption.
   */
  consumeTimestamp?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The Group ID of the consumer group.
   */
  group?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - Cloud_4: ApsaraMQ for RocketMQ 4.0 instance.
   * - Cloud_5: ApsaraMQ for RocketMQ 5.0 instance.
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The topic of the MSMQ for RocketMQ message instance.
   */
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
   * The transformation format.
   * 
   * @example
   * TEMPLATE
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType extends $dara.Model {
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
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The delivery order type. Valid values:
   * 
   * - **Orderly:** Ordered delivery.
   * 
   * - **Concurrently:** Concurrent delivery.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId extends $dara.Model {
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
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The instance ID of the MSMQ for RocketMQ message instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic extends $dara.Model {
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
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The topic name of the MSMQ for RocketMQ message instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody;
  /**
   * @remarks
   * The delivery order type of messages. Optional. The default value is concurrent delivery.
   */
  deliveryOrderType?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The instance endpoint.
   */
  instanceEndpoint?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The target service type is MSMQ for RocketMQ message.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The instance password.
   */
  instancePassword?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - Cloud_4: ApsaraMQ for RocketMQ 4.0 instance (default)
   * - Cloud_5: ApsaraMQ for RocketMQ 5.0 instance
   * - SelfBuilt: self-managed Apache RocketMQ cluster
   */
  instanceType?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The instance username.
   */
  instanceUsername?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The filter properties.
   */
  keys?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - PublicNetwork
   * - PrivateNetwork
   */
  network?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The filter properties.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId;
  /**
   * @remarks
   * The sharding key parameter of the message.
   * > 
   * > - ShardingKey is required when DeliveryOrderType is set to Orderly.
   * > - When Source is RocketMQ, ShardingKey can be empty. In this case, the upstream BrokerName and QueueId are concatenated to form the message ShardingKey.
   */
  shardingKey?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The filter properties.
   */
  tags?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic of the MSMQ for RocketMQ message instance.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds;
  /**
   * @remarks
   * The VPC ID.
   */
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
   * The transformation format.
   * 
   * @example
   * TEMPLATE
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema extends $dara.Model {
  /**
   * @remarks
   * The template.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject extends $dara.Model {
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
   * The template.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName extends $dara.Model {
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
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The role name for authorization of the event bus EventBridge to read Simple Log Service log content. The following conditions must be met: when you create the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service" and set "Trusted Service" to "event bus".
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
   * The transformation format. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template.
   */
  template?: string;
  /**
   * @remarks
   * The topic where the log resides, corresponding to the SLS reserved word "topic".
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
   * The content to send to SLS.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The key-value pairs of custom logs. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The data format of Simple Log Service. You can select the default format or configure a specified key-value pair. Valid values:
   * 
   * - JSON
   * - KeyValue
   */
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
   * The role name for authorization of the event bus EventBridge to read Simple Log Service log content. The following conditions must be met: when you create the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service" and set "Trusted Service" to "event bus".
   */
  roleName?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic where the log resides, corresponding to the SLS reserved word "topic".
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
  sinkAgentRunParameters?: SinkAgentRunParameters;
  /**
   * @remarks
   * The description.
   */
  sinkApacheKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParameters;
  /**
   * @remarks
   * Sink Apache RocketMQ Checkpoint Parameters
   */
  sinkApacheRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The API destination target parameters.
   */
  sinkApiDestinationParameters?: SinkApiDestinationParameters;
  /**
   * @remarks
   * Sink BaiLian Parameters
   */
  sinkBaiLianParameters?: SinkBaiLianParameters;
  /**
   * @remarks
   * The Sink Kafka connector parameters.
   */
  sinkCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The Sink Kafka parameters.
   */
  sinkCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters;
  /**
   * @remarks
   * The Sink DashVector parameters.
   */
  sinkDashVectorParameters?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The Sink DataHub parameters.
   */
  sinkDataHubParameters?: GetEventStreamingResponseBodyDataSinkSinkDataHubParameters;
  sinkDataWorksTriggerParameters?: SinkDataWorksTriggerParameters;
  sinkDorisParameters?: GetEventStreamingResponseBodyDataSinkSinkDorisParameters;
  /**
   * @remarks
   * The function target.
   */
  sinkFcParameters?: GetEventStreamingResponseBodyDataSinkSinkFcParameters;
  /**
   * @remarks
   * The Sink CloudFlow (Chinese: Fnf) parameters.
   */
  sinkFnfParameters?: GetEventStreamingResponseBodyDataSinkSinkFnfParameters;
  /**
   * @remarks
   * The HTTPS target parameters.
   */
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The parameters for the ApsaraMQ for Kafka sink.
   */
  sinkKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkKafkaParameters;
  /**
   * @remarks
   * The parameters for the Simple MSMQ (formerly MNS) event target.
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
   * The parameters for the ApsaraMQ for RabbitMQ sink.
   */
  sinkRabbitMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * Sink RocketMQ Checkpoint Parameters
   */
  sinkRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * Sink RocketMQ Parameters
   */
  sinkRocketMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters;
  /**
   * @remarks
   * Sink SLS Parameters
   */
  sinkSLSParameters?: GetEventStreamingResponseBodyDataSinkSinkSLSParameters;
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

export class GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * [Required] The KMS resource ARN that stores the SSL private key. Used to locate the Key Management Service instance that stores the client private key. Format example: \\"acs:kms:cn-hangzhou:123456789:secret/ssl-keystore-key-xxxx\\". Obtain this value from the ARN information of the corresponding key in the KMS console.
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS credential. When the KMS credential is stored as a key-value (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: if the KMS credential is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", specify \\"ssl_keystore_key\\". Leave this parameter empty if the KMS credential is in plain text mode (directly storing the PEM content of the private key).
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
  /**
   * @remarks
   * [Required for encrypted private key] The Kafka client private key password. Required when the client private key is encrypted (the PEM file contains \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" markers). Provide the decryption password. Leave empty if the private key is not encrypted. Note: This password is only used to decrypt the private key and is unrelated to Kafka authentication.
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The Kafka client certificate chain. Required when the Kafka server enables mutual SSL authentication (ssl.client.auth=required). Format: Base64-encoded PEM format, containing the client certificate and the complete certificate chain (client certificate first, intermediate CA certificate next, root CA certificate optional). Note: Ensure each PEM file content begins with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\", then Base64-encode the concatenated content.
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * **Required for bidirectional authentication** The SSL private key configuration object. When the Kafka server enables bidirectional SSL authentication, the client private key must be provided. Only KMS pattern is supported for the key: specify the Key Management Service EPS resource that stores the private key through KmsArn. The system retrieves the private key content from KMS only in memory, which provides higher security. Configuration example: {\\"KmsArn\\": \\"acs:kms:ap-southeast-1:123456789:secret/ssl-key-xxxx\\", \\"KmsSecretValueKey\\": \\"keystore_private_key\\"}
   */
  sslKeystoreKey?: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL] The Kafka server trust certificate. Used to verify the legitimacy of the Kafka Broker SSL certificate and prevent man-in-the-middle attacks. Format: Base64-encoded PEM format, typically containing the CA certificate or the server certificate of the Kafka server. Example: Base64-encode the PEM file content of the CA certificate (ensure it begins with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\"). If Kafka uses a self-signed certificate, provide the CA certificate that issued it.
   */
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
      sslKeystoreKey: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParametersSslKeystoreKey,
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

export class GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters extends $dara.Model {
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
   * The RocketMQ instance ID.
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance password.
   * 
   * @example
   * 123456
   */
  instancePassword?: string;
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
   * The list of topics.
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

export class GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters extends $dara.Model {
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
  connectorParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
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
   * @remarks
   * The instance ID of the MSMQ for Apache Kafka instance.
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

export class GetEventStreamingResponseBodyDataSourceSourceDTSParameters extends $dara.Model {
  /**
   * @remarks
   * The network address and port number of the data subscription channel.
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The consumption checkpoint, which is the timestamp when the SDK client consumes the first data record. The value is a UNIX timestamp.
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
   * admin****
   */
  password?: string;
  /**
   * @remarks
   * The consumer group ID.
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
   * f86e5814-b223-482c-b768-3b873297****
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

export class GetEventStreamingResponseBodyDataSourceSourceEventBusParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * demo
   */
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
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
   * The group ID of the consumer that subscribes to the topic.
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
   * i-bp1fbtrnqmjvgq66****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network configuration. Default value: Default. Set to PublicNetwork for VPC networks.
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
   * cn-hangzhou
   */
  regionId?: string;
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
   * vsw-wz9qqeovkwjxlu9uc****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The encoding and decoding parameter enumeration value. Three valid values are available:
   *  
   * 1. JSON: The existing logic. Bytes are decoded into a character string by using UTF-8 and then parsed as JSON.
   * 2. Text: Bytes are decoded into a character string by using UTF-8 and directly placed into the payload.
   * 3. Binary: Bytes are encoded into a character string by using Base64 encoding and placed into the payload.
   * 
   * @example
   * Text
   */
  valueDataType?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-2zehizpoendb3****
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
   * Indicates whether Base64 decoding is enabled.
   * 
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @remarks
   * The name of the Simple MSMQ (formerly MNS) queue.
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
   * @remarks
   * The message encoding format. Valid values:
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
   * i-2ze06wqdwk0uq14k****
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
   * cn-shanghai
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
   * TOPIC-cainiao-pcs-wms-instock-noPrealertPrintLabel
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

export class GetEventStreamingResponseBodyDataSourceSourceOSSParameters extends $dara.Model {
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
   * The role name for authorization of the event bus EventBridge to read OSS files. The role must have at least read-only permissions on OSS.
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

export class GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters extends $dara.Model {
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
   * 
   * - JSON
   * - Text
   * - Binary
   * 
   * @example
   * Json
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The endpoint of the open-source RabbitMQ instance.
   * 
   * @example
   * 192.168.1.100:5672
   */
  endpoint?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * - PublicNetwork
   * - PrivateNetwork
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The name of the queue on the open-source RabbitMQ instance.
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
   * sg-2ze65razphjfz3******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The username.
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
   * vsw-uf65zhil5oukof5******
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The name of the vhost on the open-source RabbitMQ instance.
   * 
   * @example
   * eb-connect
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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
   * Json
   */
  dataType?: string;
  /**
   * @remarks
   * The external labels appended to the event stream.
   * 
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
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The task role name.
   * 
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
   * The instance ID of the MSMQ for RabbitMQ message instance.
   * 
   * @example
   * i-f8z9a9mcgwri1c1i****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue on the MSMQ for RabbitMQ message instance.
   * 
   * @example
   * comp
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
  /**
   * @remarks
   * The name of the vhost on the MSMQ for RabbitMQ message instance.
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
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmp-cn-jte3w******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
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

export class GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters extends $dara.Model {
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
   * 
   * - Json
   * - Text
   * - Binary
   * 
   * @example
   * Json
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
   * The Group ID of the MSMQ for RocketMQ message instance.
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
   * The instance ID of the MSMQ for RocketMQ message instance.
   * 
   * @example
   * i-f8zbher64dlm58pl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
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
   * xxxa
   */
  instancePassword?: string;
  /**
   * @remarks
   * The security group ID of the instance.
   * 
   * @example
   * sg-m5edtu24f12345****
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
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
   * The instance username.
   * 
   * @example
   * xxxa
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The vSwitch IDs of the instance.
   * 
   * @example
   * vsw-m5ev8asdc6h12****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * @example
   * vpc-m5e3sv4b12345****
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
   * - CONSUME_FROM_LAST_OFFSET: consumption starts from the latest offset.
   * - CONSUME_FROM_FIRST_OFFSET: consumption starts from the earliest offset.
   * - CONSUME_FROM_TIMESTAMP: consumption starts from the offset at a specified point in time.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region ID of the MSMQ for RocketMQ message instance.
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
   * The timestamp. This parameter is valid only when the Offset parameter is set to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1636597951964
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

export class GetEventStreamingResponseBodyDataSourceSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The starting consumption position. You can select the earliest or latest position, which corresponds to "begin" or "end" respectively. You can also start consumption from a specified time in seconds.
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
   * The role name for authorization of the event bus EventBridge to read Simple Log Service log content. The following conditions must be met: when you create the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service" and set "Trusted Service" to "event bus".
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
   * The parameters for the Source RocketMQ checkpoint.
   */
  sourceApacheRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters for the custom connector Apache Kafka event source.
   */
  sourceCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The parameters for the custom Kafka event source.
   */
  sourceCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The parameters for the Data Transmission Service (DTS) source.
   */
  sourceDTSParameters?: GetEventStreamingResponseBodyDataSourceSourceDTSParameters;
  /**
   * @remarks
   * The parameters for the event bus source.
   */
  sourceEventBusParameters?: GetEventStreamingResponseBodyDataSourceSourceEventBusParameters;
  sourceFeiShuDocsParameters?: SourceFeiShuDocsParameters;
  sourceJDBCParameters?: SourceJDBCParameters;
  /**
   * @remarks
   * The parameters for the ApsaraMQ for Kafka source.
   */
  sourceKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceKafkaParameters;
  /**
   * @remarks
   * The parameters for the Simple MSMQ (formerly MNS) source.
   */
  sourceMNSParameters?: GetEventStreamingResponseBodyDataSourceSourceMNSParameters;
  /**
   * @remarks
   * The parameters for the ApsaraMQ for MQTT source.
   */
  sourceMQTTParameters?: GetEventStreamingResponseBodyDataSourceSourceMQTTParameters;
  /**
   * @remarks
   * The parameters for the MySQL source.
   */
  sourceMySQLParameters?: SourceMySQLParameters;
  /**
   * @remarks
   * The parameters for the OSS event source.
   */
  sourceOSSParameters?: GetEventStreamingResponseBodyDataSourceSourceOSSParameters;
  /**
   * @remarks
   * The parameters for the open-source RabbitMQ source.
   */
  sourceOpenSourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters;
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  /**
   * @remarks
   * The parameters for the Prometheus event source.
   */
  sourcePrometheusParameters?: GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters;
  sourceRabbitMQMetaParameters?: SourceRabbitMQMetaParameters;
  sourceRabbitMQMsgSyncParameters?: SourceRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The parameters for the ApsaraMQ for RabbitMQ source.
   */
  sourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters for the Source RocketMQ checkpoint.
   */
  sourceRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters for the ApsaraMQ for RocketMQ source.
   */
  sourceRocketMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The parameters for the Simple Log Service (SLS) source.
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
      sourceApacheKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters,
      sourceApacheRocketMQCheckpointParameters: GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: GetEventStreamingResponseBodyDataSourceSourceDTSParameters,
      sourceEventBusParameters: GetEventStreamingResponseBodyDataSourceSourceEventBusParameters,
      sourceFeiShuDocsParameters: SourceFeiShuDocsParameters,
      sourceJDBCParameters: SourceJDBCParameters,
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

export class GetEventStreamingResponseBodyDataTransforms extends $dara.Model {
  /**
   * @remarks
   * The ARN of the cloud resource, such as the ARN of a function in Function Compute.
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
   * The description of the event stream.
   * 
   * @example
   * RocketMQ-to-RocketMQ
   */
  description?: string;
  /**
   * @remarks
   * The detailed status.
   */
  detailedStatus?: GetEventStreamingResponseBodyDataDetailedStatus;
  /**
   * @remarks
   * The name of the event stream.
   * 
   * @example
   * rocketmq-sync
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
   * The status of the event stream.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The event transformer configuration.
   */
  transforms?: GetEventStreamingResponseBodyDataTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      detailedStatus: 'DetailedStatus',
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
      detailedStatus: GetEventStreamingResponseBodyDataDetailedStatus,
      eventStreamingName: 'string',
      filterPattern: 'string',
      metadata: 'string',
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
   * The return code. Success indicates success. Other values indicate fault codes. For details, see Error codes.
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
   * 7892F480-58C9-5067-AB35-8A7BEF****
   */
  requestId?: string;
  /**
   * @remarks
   * Returns true if the operation is successful.
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

