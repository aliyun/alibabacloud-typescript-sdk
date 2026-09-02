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


export class UpdateEventStreamingRequestRunOptionsBatchWindow extends $dara.Model {
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
   * The maximum time range, in seconds, for events in the window. When this threshold is reached, the data in the window is pushed downstream. If multiple windows exist, a push is triggered when any window meets the threshold.
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
   * The ARN of the dead-letter queue.
   * 
   * @example
   * acs:ram::131733464781****:role/rdstoecsassumekms
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

export class UpdateEventStreamingRequestRunOptionsRetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The maximum retry time, in seconds.
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
   * - BACKOFF_RETRY: backoff retry.
   * - EXPONENTIAL_DECAY_RETRY: exponential decay retry.
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

export class UpdateEventStreamingRequestRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batching window.
   */
  batchWindow?: UpdateEventStreamingRequestRunOptionsBatchWindow;
  businessOption?: UpdateEventStreamingRequestRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter queue. The dead-letter queue is disabled by default. Messages that exceed the retry policy are discarded.
   */
  deadLetterQueue?: UpdateEventStreamingRequestRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The error tolerance policy. Valid values:
   * - NONE: No tolerance for errors.
   * - ALL: Tolerate all errors.
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
   * The retry policy when event delivery fails.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersDynamicTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation type.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * [Required] The KMS resource ARN that stores the SSL private key. This parameter is used to locate the Key Management Service instance that stores the client private key. Format example: \\"acs:kms:ap-southeast-1:123456789:secret/ssl-keystore-key-xxxx\\". To obtain the ARN, view the ARN information of the corresponding key in the KMS console.
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS credential. When the KMS credential is stored as a key-value (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: if the KMS credential is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", enter \\"ssl_keystore_key\\". If the KMS credential is in plain text mode (directly storing the PEM content of the private key), leave this parameter empty.
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
  compressionType?: string;
  /**
   * @remarks
   * Specifies the target topic strategy for message routing. If both the Topic parameter and the DynamicTopic parameter are specified, the value of the DynamicTopic parameter takes precedence. The following two configuration modes are supported:
   */
  dynamicTopic?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersDynamicTopic;
  headers?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders;
  key?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersKey;
  networkType?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId;
  securityProtocol?: string;
  /**
   * @remarks
   * [Required for encrypted private key] The Kafka client private key password. This parameter is required when the client private key is protected by password encryption (the PEM file contains the \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" marker). Leave this parameter empty if the private key is not encrypted. Note: This password is used only to decrypt the private key and is not related to Kafka authentication.
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The Kafka client certificate chain. This parameter is required when the Kafka server enables mutual SSL authentication (ssl.client.auth=required). Format: Base64-encoded PEM format, containing the client certificate and the complete certificate chain (client certificate first, followed by intermediate CA certificates, with the root CA certificate being optional). Note: Ensure that the beginning and end of each PEM file content are \\"-----BEGIN CERTIFICATE-----\\" and \\"-----END CERTIFICATE-----\\" respectively, and then Base64-encode the concatenated content.
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * [Required for bidirectional authentication] The SSL private key configuration object. If the Kafka server has bidirectional SSL authentication enabled, provide the client private key. Only KMS pattern is supported for the key: specify the Key Management Service EPS resource that stores the private key by using KmsArn. The system retrieves the private key content from KMS only in memory, which provides higher security. Configuration example: {\\"KmsArn\\": \\"acs:kms:ap-southeast-1:123456789:secret/ssl-key-xxxx\\", \\"KmsSecretValueKey\\": \\"keystore_private_key\\"}
   */
  sslKeystoreKey?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL] The trusted certificate of the Kafka server. Signing certificate is used to verify the validity of the SSL certificate of the Kafka broker and prevent man-in-the-middle attacks. Format: Base64-encoded PEM format. Signing certificate typically contains the CA certificate or the server certificate of the Kafka server. Example: Base64-encode the content of the CA certificate PEM file. Make sure that the content starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\". If Kafka uses a self-signed certificate, provide the CA certificate that was used to issue signing certificate.
   */
  sslTruststoreCertificates?: string;
  topic?: string;
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds;
  value?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersValue;
  vpcId?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId;
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
      dynamicTopic: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersDynamicTopic,
      headers: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders,
      key: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersKey,
      networkType: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType,
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId,
      securityProtocol: 'string',
      sslKeyPassword: 'string',
      sslKeystoreCertificateChain: 'string',
      sslKeystoreKey: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSslKeystoreKey,
      sslTruststoreCertificates: 'string',
      topic: 'string',
      vSwitchIds: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds,
      value: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersValue,
      vpcId: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId,
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

export class UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
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
   * The timestamp.
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

export class UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersTopic extends $dara.Model {
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
   * The name of the topic of the RocketMQ instance.
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
   * The timestamp of message consumption.
   */
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The Group ID of the consumer group.
   */
  group?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup;
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
   * The password of the username.
   * 
   * @example
   * ****
   */
  instancePassword?: string;
  /**
   * @remarks
   * The username used for authentication.
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
   * The topic of the RocketMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters extends $dara.Model {
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
  connectorParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
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
   * The instance ID of ApsaraMQ for Kafka.
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
   * The transformation format:
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
   * - If Form is set to CONSTANT: a constant value.
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
   * The transformation format:
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
   * If Form is set to JSONPATH, this specifies the JSONPath expression used to extract content.
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
   * The JSONPath expression used to extract content.
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
   * The schema field definitions for table entries when inserting data into DashVector. The transformed event content must be in JSON format.
   */
  dashVectorSchemaParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters[];
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
  partition?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition;
  /**
   * @remarks
   * The primary key ID used when inserting or deleting records. If this field is not specified, a random primary key ID is used.
   */
  primaryKeyId?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector of the DashVector record to insert.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersContentType extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersProject extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopic extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType extends $dara.Model {
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
   * The topic type.
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
   * The Record content template for the BLOB type.
   */
  body?: UpdateEventStreamingRequestSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The key-value pairs of the custom log. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema;
  /**
   * @remarks
   * The data format. You can select the default format or configure a specified key-value pair:
   */
  contentType?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentType;
  /**
   * @remarks
   * The DataHub project name.
   */
  project?: UpdateEventStreamingRequestSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * The task role name.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The DataHub topic name.
   */
  topic?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The topic content schema for the TUPLE type.
   */
  topicSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema;
  /**
   * @remarks
   * The topic type.
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

export class UpdateEventStreamingRequestSinkSinkEventHouseParametersMappingRulesColumnValue extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkEventHouseParametersMappingRules extends $dara.Model {
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
  columnValue?: UpdateEventStreamingRequestSinkSinkEventHouseParametersMappingRulesColumnValue;
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
      columnValue: UpdateEventStreamingRequestSinkSinkEventHouseParametersMappingRulesColumnValue,
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

export class UpdateEventStreamingRequestSinkSinkEventHouseParameters extends $dara.Model {
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
   * The name of the destination table.
   * 
   * @example
   * demo-table
   */
  eventTableName?: string;
  /**
   * @remarks
   * The field mapping rules.
   */
  mappingRules?: UpdateEventStreamingRequestSinkSinkEventHouseParametersMappingRules[];
  /**
   * @remarks
   * The namespace of the destination table.
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
      mappingRules: { 'type': 'array', 'itemType': UpdateEventStreamingRequestSinkSinkEventHouseParametersMappingRules },
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

export class UpdateEventStreamingRequestSinkSinkFcParametersBody extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkFcParametersConcurrency extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkFcParametersDataFormat extends $dara.Model {
  /**
   * @remarks
   * The transformation format:
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

export class UpdateEventStreamingRequestSinkSinkFcParametersFunctionName extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkFcParametersInvocationType extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkFcParametersQualifier extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkFcParametersServiceName extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The content body sent to the function.
   */
  body?: UpdateEventStreamingRequestSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. The minimum value is 1.
   */
  concurrency?: UpdateEventStreamingRequestSinkSinkFcParametersConcurrency;
  /**
   * @remarks
   * The format transformation rule for event content.
   */
  dataFormat?: UpdateEventStreamingRequestSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The function name.
   */
  functionName?: UpdateEventStreamingRequestSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * Specifies whether the invocation is synchronous or asynchronous.
   */
  invocationType?: UpdateEventStreamingRequestSinkSinkFcParametersInvocationType;
  /**
   * @remarks
   * The alias of the service to which the function belongs.
   */
  qualifier?: UpdateEventStreamingRequestSinkSinkFcParametersQualifier;
  /**
   * @remarks
   * The name of the service.
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersFlowName extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersInput extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersRoleName extends $dara.Model {
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
   * The execution input information.
   */
  input?: UpdateEventStreamingRequestSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role configuration.
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
   * The acknowledgment mode for writing to Kafka:
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersDynamicTopic extends $dara.Model {
  /**
   * @remarks
   * The transformation type.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders extends $dara.Model {
  /**
   * @remarks
   * The transformation format:
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersKey extends $dara.Model {
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
   * The identifier of the message.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment mode for writing to Kafka:
   */
  acks?: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks;
  compressionType?: string;
  /**
   * @remarks
   * Specifies the target topic strategy for message routing. If both the Topic parameter and the DynamicTopic parameter are specified, the value of the DynamicTopic parameter takes precedence. The following two configuration modes are supported:
   */
  dynamicTopic?: UpdateEventStreamingRequestSinkSinkKafkaParametersDynamicTopic;
  /**
   * @remarks
   * The additional metadata of the Kafka message.
   */
  headers?: UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders;
  /**
   * @remarks
   * The event target type is ApsaraMQ for Kafka.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The identifier of the message.
   */
  key?: UpdateEventStreamingRequestSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The topic name.
   */
  topic?: UpdateEventStreamingRequestSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The message body content.
   */
  value?: UpdateEventStreamingRequestSinkSinkKafkaParametersValue;
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
      acks: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks,
      compressionType: 'string',
      dynamicTopic: UpdateEventStreamingRequestSinkSinkKafkaParametersDynamicTopic,
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

export class UpdateEventStreamingRequestSinkSinkMNSParametersBody extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: UpdateEventStreamingRequestSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Specifies whether to enable Base64 encoding.
   */
  isBase64Encode?: UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The event target type is Simple Message Queue (formerly MNS).
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters extends $dara.Model {
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
  body?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersBody;
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
   * The name of the exchange in RabbitMQ. This parameter takes effect only when TargetType is set to Exchange.
   * 
   * @example
   * my-exchange
   */
  exchange?: string;
  /**
   * @remarks
   * The unique identifier of the message.
   */
  messageId?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersMessageId;
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
   * The additional properties of the message.
   */
  properties?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties;
  /**
   * @remarks
   * The name of the queue in RabbitMQ. This parameter takes effect only when TargetType is set to Queue.
   * 
   * @example
   * my-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The message routing key.
   */
  routingKey?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersRoutingKey;
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
   * The target type for message delivery.
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
   * The virtual host name of the RabbitMQ instance.
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
   * The authentication type.
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
   * The transformation format. Default value: JSONPATH.
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters extends $dara.Model {
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
   * The HTTP request header template. Specify this parameter when Form is set to TEMPLATE. The result after event content transformation must be in JSON format.
   * 
   * @example
   * {
   *     "user_name":"${name}"
   * }
   */
  template?: string;
  /**
   * @remarks
   * - If Form is set to CONSTANT: a constant value.
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType extends $dara.Model {
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
   * The network type:
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersURL extends $dara.Model {
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
   * The Prometheus Remote Write URL.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
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

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId extends $dara.Model {
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
   * VPC ID。
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
   * The authentication type.
   */
  authorizationType?: UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType;
  /**
   * @remarks
   * The metric content.
   */
  data?: UpdateEventStreamingRequestSinkSinkPrometheusParametersData;
  /**
   * @remarks
   * The data structure of the request header parameters.
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
   * The security group ID.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId;
  /**
   * @remarks
   * The Prometheus Remote Write URL.
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
   * VPC ID。
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange extends $dara.Model {
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
   * The name of the Exchange of the ApsaraMQ for RabbitMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName extends $dara.Model {
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
   * The name of the Queue of the instance.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType extends $dara.Model {
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
   * The message content.
   */
  body?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody;
  /**
   * @remarks
   * The Exchange mode.
   */
  exchange?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The event target type is ApsaraMQ for RabbitMQ.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The filtering properties.
   */
  properties?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The Queue mode.
   */
  queueName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The routing rule of the message.
   */
  routingKey?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The target type.
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
   * The timestamp.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersTopic extends $dara.Model {
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
   * The name of the topic of the ApsaraMQ for RocketMQ instance.
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
   * The timestamp of message consumption.
   */
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The Group ID of the consumer group.
   */
  group?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersGroup;
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
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The topic of the ApsaraMQ for RocketMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType extends $dara.Model {
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
   * The delivery order type.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersTags extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: UpdateEventStreamingRequestSinkSinkRocketMQParametersBody;
  /**
   * @remarks
   * The delivery order type of messages. This parameter is optional. By default, messages are delivered concurrently.
   */
  deliveryOrderType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The instance endpoint.
   */
  instanceEndpoint?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The event target type is ApsaraMQ for RocketMQ.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The instance password.
   */
  instancePassword?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The instance username.
   */
  instanceUsername?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The filtering properties.
   */
  keys?: UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys;
  /**
   * @remarks
   * The network type.
   */
  network?: UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The filtering properties.
   */
  properties?: UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId;
  /**
   * @remarks
   * The sharding key of the message.
   */
  shardingKey?: UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The filtering properties.
   */
  tags?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic of the ApsaraMQ for RocketMQ instance.
   */
  topic?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds;
  /**
   * @remarks
   * The VPC ID.
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema extends $dara.Model {
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
   * The custom key-value pairs.
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
   * The data format of Simple Log Service.
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersProject extends $dara.Model {
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

export class UpdateEventStreamingRequestSinkSinkSLSParametersRoleName extends $dara.Model {
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
   * The role that provides authorization for the event bus EventBridge to read Simple Log Service log content. To use this role, create a role for the service in the Resource Access Management (RAM) console. Set the trusted entity type to Alibaba Cloud Service and set the trusted service to event bus.
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
   * The topic in which the log resides. This corresponds to the reserved field "topic" in Simple Log Service.
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
   * The content sent to Simple Log Service.
   */
  body?: UpdateEventStreamingRequestSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The custom key-value pairs for logs. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The data format of Simple Log Service. You can select the default format or configure a specific key-value format.
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
   * The role that provides authorization for the event bus EventBridge to read Simple Log Service log content. To use this role, create a role for the service in the Resource Access Management (RAM) console. Set the trusted entity type to Alibaba Cloud Service and set the trusted service to event bus.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic in which the log resides. This corresponds to the reserved field "topic" in Simple Log Service.
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
  sinkAgentRunParameters?: SinkAgentRunParameters;
  /**
   * @remarks
   * The description.
   */
  sinkApacheKafkaParameters?: UpdateEventStreamingRequestSinkSinkApacheKafkaParameters;
  /**
   * @remarks
   * Sink Apache RocketMQ Checkpoint Parameters
   */
  sinkApacheRocketMQCheckpointParameters?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The ApiDestination event target parameters.
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
  sinkCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The Sink Kafka parameters.
   */
  sinkCustomizedKafkaParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters;
  /**
   * @remarks
   * The Sink DashVector parameters.
   */
  sinkDashVectorParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The Sink DataHub parameters.
   */
  sinkDataHubParameters?: UpdateEventStreamingRequestSinkSinkDataHubParameters;
  sinkDataWorksTriggerParameters?: SinkDataWorksTriggerParameters;
  /**
   * @remarks
   * The event source type.
   */
  sinkDorisParameters?: UpdateEventStreamingRequestSinkSinkDorisParameters;
  /**
   * @remarks
   * The event target name.
   */
  sinkEventHouseParameters?: UpdateEventStreamingRequestSinkSinkEventHouseParameters;
  /**
   * @remarks
   * The function target.
   */
  sinkFcParameters?: UpdateEventStreamingRequestSinkSinkFcParameters;
  /**
   * @remarks
   * The Sink CloudFlow parameters.
   */
  sinkFnfParameters?: UpdateEventStreamingRequestSinkSinkFnfParameters;
  /**
   * @remarks
   * The HTTPS event target parameters.
   */
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The parameters for Sink Kafka.
   */
  sinkKafkaParameters?: UpdateEventStreamingRequestSinkSinkKafkaParameters;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) event target.
   */
  sinkMNSParameters?: UpdateEventStreamingRequestSinkSinkMNSParameters;
  sinkMQTTParameters?: SinkMQTTParameters;
  sinkOSSParameters?: SinkOSSParameters;
  /**
   * @remarks
   * Sink Open Source RabbitMQ Parameters
   */
  sinkOpenSourceRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The Sink Prometheus parameters.
   */
  sinkPrometheusParameters?: UpdateEventStreamingRequestSinkSinkPrometheusParameters;
  sinkRabbitMQMetaParameters?: SinkRabbitMQMetaParameters;
  sinkRabbitMQMsgSyncParameters?: SinkRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The parameters for Sink RabbitMQ.
   */
  sinkRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * Sink RocketMQ Checkpoint Parameters
   */
  sinkRocketMQCheckpointParameters?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * Sink RocketMQ Parameters
   */
  sinkRocketMQParameters?: UpdateEventStreamingRequestSinkSinkRocketMQParameters;
  /**
   * @remarks
   * Sink SLS Parameters
   */
  sinkSLSParameters?: UpdateEventStreamingRequestSinkSinkSLSParameters;
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
      sinkEventHouseParameters: UpdateEventStreamingRequestSinkSinkEventHouseParameters,
      sinkFcParameters: UpdateEventStreamingRequestSinkSinkFcParameters,
      sinkFnfParameters: UpdateEventStreamingRequestSinkSinkFnfParameters,
      sinkHttpsParameters: SinkHttpsParameters,
      sinkKafkaParameters: UpdateEventStreamingRequestSinkSinkKafkaParameters,
      sinkMNSParameters: UpdateEventStreamingRequestSinkSinkMNSParameters,
      sinkMQTTParameters: SinkMQTTParameters,
      sinkOSSParameters: SinkOSSParameters,
      sinkOpenSourceRabbitMQParameters: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters,
      sinkPrometheusParameters: UpdateEventStreamingRequestSinkSinkPrometheusParameters,
      sinkRabbitMQMetaParameters: SinkRabbitMQMetaParameters,
      sinkRabbitMQMsgSyncParameters: SinkRabbitMQMsgSyncParameters,
      sinkRabbitMQParameters: UpdateEventStreamingRequestSinkSinkRabbitMQParameters,
      sinkRocketMQCheckpointParameters: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters,
      sinkRocketMQParameters: UpdateEventStreamingRequestSinkSinkRocketMQParameters,
      sinkSLSParameters: UpdateEventStreamingRequestSinkSinkSLSParameters,
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

export class UpdateEventStreamingRequestSourceSourceApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * [Required] The KMS resource ARN that stores the SSL private key. This parameter is used to locate the Key Management Service instance that stores the client private key. Format example: \\"acs:kms:ap-southeast-1:123456789:secret/ssl-keystore-key-xxxx\\". To obtain the ARN, view the ARN information of the corresponding key in the KMS console.
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS credential. When the KMS credential is stored as a key-value (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: if the KMS credential is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", enter \\"ssl_keystore_key\\". If the KMS credential is in plain text mode (directly storing the PEM content of the private key), leave this parameter empty.
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
  /**
   * @remarks
   * [Required for encrypted private key] The Kafka client private key password. This parameter is required when the client private key is protected by password encryption (the PEM file contains the \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" marker). Leave this parameter empty if the private key is not encrypted. Note: This password is used only to decrypt the private key and is not related to Kafka authentication.
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The Kafka client certificate chain. This parameter is required when the Kafka server enables mutual SSL authentication (ssl.client.auth=required). Format: Base64-encoded PEM format, containing the client certificate and the complete certificate chain (client certificate first, followed by intermediate CA certificates, with the root CA certificate being optional). Note: Ensure that the beginning and end of each PEM file content are \\"-----BEGIN CERTIFICATE-----\\" and \\"-----END CERTIFICATE-----\\" respectively, and then Base64-encode the concatenated content.
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * [Required for bidirectional authentication] The SSL private key configuration object. When the Kafka server enables bidirectional SSL authentication, the client private key is required. Only KMS pattern is supported for the key: specify the Key Management Service EPS resource that stores the private key through KmsArn. The system retrieves the private key content from KMS only in memory, which provides higher security. Configuration example: {\\"KmsArn\\": \\"acs:kms:ap-southeast-1:123456789:secret/ssl-key-xxxx\\", \\"KmsSecretValueKey\\": \\"keystore_private_key\\"}
   */
  sslKeystoreKey?: UpdateEventStreamingRequestSourceSourceApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL] The Kafka server trust certificate. This certificate is used to authenticate the legitimacy of the Kafka Broker SSL certificate and prevent man-in-the-middle attacks. Format: Base64-encoded PEM format, typically containing the CA certificate of the Kafka server or the server certificate itself. Example: Base64-encode the PEM file content of the CA certificate (ensure that the beginning and end are \\"-----BEGIN CERTIFICATE-----\\" and \\"-----END CERTIFICATE-----\\" respectively). If Kafka uses a self-signed certificate, provide the CA certificate that issued the certificate.
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
      sslKeystoreKey: UpdateEventStreamingRequestSourceSourceApacheKafkaParametersSslKeystoreKey,
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

export class UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters extends $dara.Model {
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

export class UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $dara.Model {
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

export class UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters extends $dara.Model {
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
  connectorParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
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
   * @remarks
   * The instance ID of MSMQ for Apache Kafka.
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

export class UpdateEventStreamingRequestSourceSourceDTSParameters extends $dara.Model {
  /**
   * @remarks
   * The network address and port number of the data subscription channel.
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The consumer offset, which is the timestamp when the SDK client consumes the first data record. The value is a UNIX timestamp.
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
   * hkprdb
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

export class UpdateEventStreamingRequestSourceSourceEventBusParameters extends $dara.Model {
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
   * The instance ID.
   * 
   * @example
   * i-8vbh4a5b9yfhgkkzm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network configuration. Default value: Default. Set this parameter to PublicNetwork for VPC networks.
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
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-uf6jcm3y5hcs7hkl****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_empower_1641539400786
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz9t1l1e8eu2om****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The encoding and decoding parameter. Valid values: 3 enumerated values.
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
   * vpc-2ze6p0o345nykmekxt****
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
   * @remarks
   * The message encoding format:
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
   * i-bp1dsudbecqwt61j****
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
   * topic_empower_1642400400779
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

export class UpdateEventStreamingRequestSourceSourceOSSParameters extends $dara.Model {
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
   * The data loading mode. A value of single indicates single-document loading, and a value of element indicates chunked loading. Valid values: single and element. Default value: single.
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
   * The role name used for authorization of the event bus EventBridge to read OSS files. The role must have at least read-only permissions on OSS.
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

export class UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters extends $dara.Model {
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
   * The message body data type.
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
   * The password used to connect to the open-source RabbitMQ instance.
   * 
   * @example
   * ****
   */
  password?: string;
  /**
   * @remarks
   * The queue name of the open-source RabbitMQ instance.
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
   * The username used to connect to the open-source RabbitMQ instance.
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
   * The virtual host name of the open-source RabbitMQ instance.
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
   * The region ID of the instance.
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

export class UpdateEventStreamingRequestSourceSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * i-f8z9lqkldlb4oxsxwwub
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue of the ApsaraMQ for RabbitMQ instance.
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
   * @remarks
   * The instance ID of the ApsaraMQ for RocketMQ instance.
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

export class UpdateEventStreamingRequestSourceSourceRocketMQParameters extends $dara.Model {
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
   * The message encoding format:
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
   * The group ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID_test
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
   * The instance ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * i-f8z9a9mcgwri1c1id****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network information of the instance:
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
   * The instance type.
   * 
   * @example
   * Cloud_5
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
   * vsw-m5ev8asdc6h12****
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
   * The network type.
   * 
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The consumption offset of the message. Valid values:
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * cn-shanghai
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
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp. This parameter is valid only when the Offset parameter is set to CONSUMEFROMTIMESTAMP.
   * 
   * @example
   * 1670656652009
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * TOPIC-cainiao-pcs-order-process-inBoundConditionCheck
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
   * The VPC ID of the instance.
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

export class UpdateEventStreamingRequestSourceSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The role name used for authorization of the event bus EventBridge to read SLS log content. The following conditions must be met: when you create the role used by the service in the Resource Access Management (RAM) console, select "Alibaba Cloud Service" and set "Trusted Service" to "event bus".
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
  /**
   * @remarks
   * The parameters for RocketMQ checkpoint as the event source.
   */
  sourceApacheRocketMQCheckpointParameters?: UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The custom connector Apache Kafka event source.
   */
  sourceCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The custom Kafka event source.
   */
  sourceCustomizedKafkaParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The source DTS event source.
   */
  sourceDTSParameters?: UpdateEventStreamingRequestSourceSourceDTSParameters;
  /**
   * @remarks
   * The source event bus event source.
   */
  sourceEventBusParameters?: UpdateEventStreamingRequestSourceSourceEventBusParameters;
  sourceFeiShuDocsParameters?: SourceFeiShuDocsParameters;
  sourceJDBCParameters?: SourceJDBCParameters;
  /**
   * @remarks
   * The parameters for Kafka as the event source.
   */
  sourceKafkaParameters?: UpdateEventStreamingRequestSourceSourceKafkaParameters;
  /**
   * @remarks
   * The parameters for Simple Message Queue (formerly MNS) as the event source.
   */
  sourceMNSParameters?: UpdateEventStreamingRequestSourceSourceMNSParameters;
  /**
   * @remarks
   * The source MQTT event source.
   */
  sourceMQTTParameters?: UpdateEventStreamingRequestSourceSourceMQTTParameters;
  /**
   * @remarks
   * The source MySQL event source.
   */
  sourceMySQLParameters?: SourceMySQLParameters;
  /**
   * @remarks
   * The source OSS event source.
   */
  sourceOSSParameters?: UpdateEventStreamingRequestSourceSourceOSSParameters;
  /**
   * @remarks
   * The source open-source RabbitMQ event source.
   */
  sourceOpenSourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters;
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  /**
   * @remarks
   * The source Prometheus event source.
   */
  sourcePrometheusParameters?: UpdateEventStreamingRequestSourceSourcePrometheusParameters;
  sourceRabbitMQMetaParameters?: SourceRabbitMQMetaParameters;
  sourceRabbitMQMsgSyncParameters?: SourceRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The parameters for RabbitMQ as the event source.
   */
  sourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters for RocketMQ checkpoint as the event source.
   */
  sourceRocketMQCheckpointParameters?: UpdateEventStreamingRequestSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The parameters for RocketMQ as the event source.
   */
  sourceRocketMQParameters?: UpdateEventStreamingRequestSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The source SLS event source.
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
      sourceApacheKafkaParameters: UpdateEventStreamingRequestSourceSourceApacheKafkaParameters,
      sourceApacheRocketMQCheckpointParameters: UpdateEventStreamingRequestSourceSourceApacheRocketMQCheckpointParameters,
      sourceCustomizedKafkaConnectorParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: UpdateEventStreamingRequestSourceSourceDTSParameters,
      sourceEventBusParameters: UpdateEventStreamingRequestSourceSourceEventBusParameters,
      sourceFeiShuDocsParameters: SourceFeiShuDocsParameters,
      sourceJDBCParameters: SourceJDBCParameters,
      sourceKafkaParameters: UpdateEventStreamingRequestSourceSourceKafkaParameters,
      sourceMNSParameters: UpdateEventStreamingRequestSourceSourceMNSParameters,
      sourceMQTTParameters: UpdateEventStreamingRequestSourceSourceMQTTParameters,
      sourceMySQLParameters: SourceMySQLParameters,
      sourceOSSParameters: UpdateEventStreamingRequestSourceSourceOSSParameters,
      sourceOpenSourceRabbitMQParameters: UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters,
      sourcePostgreSQLParameters: SourcePostgreSQLParameters,
      sourcePrometheusParameters: UpdateEventStreamingRequestSourceSourcePrometheusParameters,
      sourceRabbitMQMetaParameters: SourceRabbitMQMetaParameters,
      sourceRabbitMQMsgSyncParameters: SourceRabbitMQMsgSyncParameters,
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

export class UpdateEventStreamingRequestTransforms extends $dara.Model {
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
   * The event filtering rule. If you do not specify this parameter, all events are matched. For more information, see [https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-patterns](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-patterns)
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
   * The generic JSON configurations for the event provider. This parameter is mutually exclusive with Source.
   */
  metadata?: string;
  /**
   * @remarks
   * The runtime environment parameters.
   */
  runOptions?: UpdateEventStreamingRequestRunOptions;
  /**
   * @remarks
   * The event target. You must select exactly one Sink type.
   */
  sink?: UpdateEventStreamingRequestSink;
  /**
   * @remarks
   * The event provider. You must select one and only one type of Source.
   */
  source?: UpdateEventStreamingRequestSource;
  /**
   * @remarks
   * The event transformer configurations.
   */
  transforms?: UpdateEventStreamingRequestTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      metadata: 'Metadata',
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
      metadata: 'string',
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

