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
import { SinkAgentRunParameters } from "./SinkAgentRunParameters";
import { SinkApiDestinationParameters } from "./SinkApiDestinationParameters";
import { SinkBaiLianParameters } from "./SinkBaiLianParameters";
import { SinkDataWorksTriggerParameters } from "./SinkDataWorksTriggerParameters";
import { SinkHttpsParameters } from "./SinkHttpsParameters";
import { SinkKnowledgeBaseParameters } from "./SinkKnowledgeBaseParameters";
import { SinkMQTTParameters } from "./SinkMqttparameters";
import { SinkOSSParameters } from "./SinkOssparameters";
import { SinkRabbitMQMetaParameters } from "./SinkRabbitMqmetaParameters";
import { SinkRabbitMQMsgSyncParameters } from "./SinkRabbitMqmsgSyncParameters";


export class UpdateEventStreamingRequestRunOptionsBatchWindow extends $dara.Model {
  /**
   * @remarks
   * The maximum number of events that the window can accommodate. When this threshold is reached, the data in the window is pushed downstream. If multiple windows exist, the push is triggered when the condition is met for any of the windows.
   * 
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @remarks
   * The maximum time window in seconds for accumulating events. When this threshold is reached, the data in the window is pushed downstream. If multiple windows exist, the push is triggered when the condition is met for any of the windows.
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
   * The network type of the dead-letter queue. Valid values:
   * - PrivateNetwork
   * - PublicNetwork
   * 
   * @example
   * PrivateNetwork
   */
  network?: string;
  /**
   * @remarks
   * The ID of the security group for the dead-letter queue instance.
   * 
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch where the dead-letter queue resides.
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

export class UpdateEventStreamingRequestRunOptionsRetryStrategy extends $dara.Model {
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

export class UpdateEventStreamingRequestRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: UpdateEventStreamingRequestRunOptionsBatchWindow;
  /**
   * @remarks
   * The business options.
   */
  businessOption?: UpdateEventStreamingRequestRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter queue. By default, the dead-letter queue is disabled, and messages that exceed the retry policy are discarded.
   */
  deadLetterQueue?: UpdateEventStreamingRequestRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The error tolerance policy. Valid values:
   * - NONE: No tolerance for errors.
   * - ALL: Tolerance for all errors.
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
   * The retry policy used when an event fails to be pushed.
   */
  retryStrategy?: UpdateEventStreamingRequestRunOptionsRetryStrategy;
  /**
   * @remarks
   * The throttling value.
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
   * The conversion type. Valid values:
   * - CONSTANT: A fixed value.
   * - JSONPATH: Extracted from the upstream message based on the specified path.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The message headers.
   * 
   * @example
   * "Headers"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
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
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * [Required] The ARN of the KMS resource that stores the SSL private key. This parameter is used to locate the KMS instance that stores the client private key. Format example: \\"acs:kms:cn-hangzhou:123456789:secret/ssl-keystore-key-xxxx\\". To obtain the ARN, view the ARN information of the corresponding key in the KMS console.
   * 
   * @example
   * "KmsArn"
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS secret. If the secret stored in KMS is in a key-value pair (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: If the KMS secret is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", enter \\"ssl_keystore_key\\". If the KMS secret is in plain text mode (directly storing the PEM content of the private key), leave this parameter empty.
   * 
   * @example
   * "KmsSecretValueKey"
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
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The list of vSwitch IDs for the Kafka source.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersValue extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The message body.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVpcId extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkApacheKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment mode for writing data to Kafka. Valid values:
   * - acks=0: No response from the server is required. This mode delivers high performance but carries a high risk of data loss.
   * - acks=1: A response is returned after the primary node successfully writes the data. This mode delivers medium performance and carries a medium risk of data loss. Data may be lost if the primary node fails.
   * - acks=all: A response is returned only after the primary node successfully writes the data and the secondary nodes synchronize the data. This mode delivers lower performance but ensures higher data security. Data is lost only if both the primary and secondary nodes fail.
   * 
   * @example
   * all
   */
  acks?: string;
  /**
   * @remarks
   * The initial endpoints of the Kafka cluster.
   * 
   * @example
   * "Bootstraps"
   */
  bootstraps?: string;
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
   * The target topic routing policy for messages. If both the Topic and DynamicTopic parameters are specified, the value of the DynamicTopic parameter takes precedence. The following configuration modes are supported:
   * 1. **Static constant mode**: Enter a fixed topic name string, such as "order_created". All messages are sent to this topic.
   * 2. **Dynamic extraction mode**: Enter a standard JSONPath expression, such as "$.user.id" or "$.metadata.category". The system parses the upstream message body and extracts the value of the matched field as the target topic name.
   */
  dynamicTopic?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersDynamicTopic;
  /**
   * @remarks
   * The message headers.
   */
  headers?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersHeaders;
  /**
   * @remarks
   * The message key.
   */
  key?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersKey;
  /**
   * @remarks
   * The network type.
   */
  networkType?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersNetworkType;
  /**
   * @remarks
   * The SASL authentication mechanism of Kafka.
   * 
   * @example
   * "SaslMechanism"
   */
  saslMechanism?: string;
  /**
   * @remarks
   * The SASL authentication password of Kafka.
   * 
   * @example
   * yourPassword
   */
  saslPassword?: string;
  /**
   * @remarks
   * The SASL authentication username of Kafka.
   * 
   * @example
   * "SaslUser"
   */
  saslUser?: string;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSecurityGroupId;
  /**
   * @remarks
   * The security protocol type of Kafka. Valid values:
   * - SASL_SSL
   * - PLAINTEXT
   * - SASL_PLAINTEXT
   * 
   * @example
   * SASL_SSL
   */
  securityProtocol?: string;
  /**
   * @remarks
   * [Required for encrypted private keys] The password for the Kafka client private key. If the client private key is protected by password encryption (the PEM file contains the \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" tag), you must provide the decryption password. If the private key is not encrypted, leave this parameter empty. Note: This password is used only to decrypt the private key and is unrelated to Kafka authentication.
   * 
   * @example
   * yourPassword
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The Kafka client certificate chain. If mutual SSL authentication (ssl.client.auth=required) is enabled on the Kafka server, you must provide this parameter. Format requirements: Base64-encoded PEM format, including the client certificate and the complete certificate chain (the client certificate first, followed by intermediate CA certificates, and the root CA certificate is optional). Note: Ensure that each PEM file starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\" before concatenating and Base64-encoding them.
   * 
   * @example
   * "SslKeystoreCertificateChain"
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * [Required for bidirectional authentication] The SSL private key configuration object. When bidirectional SSL authentication is enabled on the Kafka server, you must provide the client private key. The key only supports the KMS mode: specify the Key Management Service (KMS) resource that stores the private key by using KmsArn. The system retrieves the private key content from KMS only in memory, which provides higher security. Configuration example: {"KmsArn": "acs:kms:cn-hangzhou:123456789:secret/ssl-key-xxxx", "KmsSecretValueKey": "keystore_private_key"}.
   */
  sslKeystoreKey?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required in SSL scenarios] The Kafka server trust certificate. It is used to authenticate the validity of the SSL certificate of the Kafka broker and prevent man-in-the-middle attacks. Format requirements: PEM format with Base64 encoding, which usually contains the CA certificate of the Kafka server or the server certificate itself. Example: Perform Base64 encoding on the PEM file content of the CA certificate (ensure that it starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\"). If Kafka uses a self-signed certificate, you must provide the CA certificate that issued the certificate.
   * 
   * @example
   * "SslTruststoreCertificates"
   */
  sslTruststoreCertificates?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * LTC_CACHE_PRD
   */
  topic?: string;
  /**
   * @remarks
   * The list of vSwitch IDs for the Kafka source.
   */
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersVSwitchIds;
  /**
   * @remarks
   * The message body.
   */
  value?: UpdateEventStreamingRequestSinkSinkApacheKafkaParametersValue;
  /**
   * @remarks
   * The VPC ID.
   */
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The consumer group.
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
   * The conversion format. Default value: CONSTANT.
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
   * The name of the topic in the ApsaraMQ for RocketMQ instance.
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
   * The timestamp when the message is consumed.
   */
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The group ID of the consumer group.
   */
  group?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParametersGroup;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * 192.168.1.1:9876
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * yourPassword
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
   * The ID of the VPC.
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
   * The download URL of the OSS file.
   * 
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV2i3gZJ"
   */
  connectorPackageUrl?: string;
  /**
   * @remarks
   * The properties file in the current ZIP package.
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
   * The instance ID of the MSMQ for Apache Kafka.
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
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersType extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersValue extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  /**
   * @remarks
   * The property name.
   */
  name?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersName;
  /**
   * @remarks
   * The DashVector property type.
   */
  type?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParametersType;
  /**
   * @remarks
   * The property value.
   */
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
   * The transformation format. Valid values:
   * - JSONPATH
   * - CONSTANT
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
   * The value.
   * - If Form is CONSTANT: the constant value.
   * - If Form is JSONPATH: the content extracted by using JSONPath.
   * 
   * > The Value field cannot exceed 10,240 characters.
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
   * The transformation format. Valid values:
   * - JSONPATH
   * - TEMPLATE
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
   * The value.
   * - If Form is JSONPATH: the content extracted by using JSONPath.
   * - If Form is TEMPLATE: the template variable.
   * 
   * > The Value field cannot exceed 10,240 characters.
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
   * The template style.
   * 
   * @example
   * ${vector}
   */
  template?: string;
  /**
   * @remarks
   * The content extracted by using JSONPath.
   * 
   * > The Value field cannot exceed 10,240 characters.
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
   * The schema field definition of the table item when inserting data into DashVector. The result after event content transformation must be in JSON format.
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
   * The network type. Valid values:
   * - PrivateNetwork
   * - PublicNetwork
   * 
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The DashVector database operation type. Valid values:
   * - Delete
   * - Upsert
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
   * The primary key ID used when inserting or deleting a record. If this field is not specified, a random primary key ID is used.
   */
  primaryKeyId?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector of the DashVector record to be inserted.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The record content template for the BLOB type.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The value before conversion.
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The name of the task role.
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDataHubParameters extends $dara.Model {
  /**
   * @remarks
   * The record content template for the BLOB type.
   */
  body?: UpdateEventStreamingRequestSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The key-value pairs of the custom log. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema;
  /**
   * @remarks
   * The data format. You can select the default format or specify key-value pairs. Valid values:
   * 
   * - JSON
   * - KeyValue
   */
  contentType?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentType;
  /**
   * @remarks
   * The name of the DataHub project.
   */
  project?: UpdateEventStreamingRequestSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * The name of the task role.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The name of the DataHub topic.
   */
  topic?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The topic content schema for the TUPLE type.
   */
  topicSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema;
  /**
   * @remarks
   * The topic type. Valid values:
   * 
   * - TUPLE
   * - BLOB
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
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The public HTTP endpoint for BE.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersBody extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersDatabase extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The HTTP endpoint for FE.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersPassword extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The MySQL endpoint.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersTable extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersUserName extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersVSwitchIds extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The vSwitch IDs.
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

export class UpdateEventStreamingRequestSinkSinkDorisParametersVpcId extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkDorisParameters extends $dara.Model {
  /**
   * @remarks
   * The public HTTP endpoint for BE.
   */
  beHttpEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint;
  /**
   * @remarks
   * The message content.
   */
  body?: UpdateEventStreamingRequestSinkSinkDorisParametersBody;
  /**
   * @remarks
   * The database.
   */
  database?: UpdateEventStreamingRequestSinkSinkDorisParametersDatabase;
  /**
   * @remarks
   * The HTTP endpoint for FE.
   */
  feHttpEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint;
  /**
   * @remarks
   * The network type.
   */
  networkType?: UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType;
  /**
   * @remarks
   * The password.
   */
  password?: UpdateEventStreamingRequestSinkSinkDorisParametersPassword;
  /**
   * @remarks
   * The MySQL endpoint.
   */
  queryEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId;
  /**
   * @remarks
   * The destination table.
   */
  table?: UpdateEventStreamingRequestSinkSinkDorisParametersTable;
  /**
   * @remarks
   * The username.
   */
  userName?: UpdateEventStreamingRequestSinkSinkDorisParametersUserName;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkDorisParametersVSwitchIds;
  /**
   * @remarks
   * The VPC ID.
   */
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
   * The name of the column.
   * 
   * @example
   * age
   */
  columnName?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * text
   */
  columnType?: string;
  /**
   * @remarks
   * The extraction rule for the column value.
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
   * The name of the catalog.
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
  mappingRules?: UpdateEventStreamingRequestSinkSinkEventHouseParametersMappingRules[];
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
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersDataFormat extends $dara.Model {
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
   * The template style.
   * 
   * @example
   * $.data.key
   */
  template?: string;
  /**
   * @remarks
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersInvocationType extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersQualifier extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFcParametersServiceName extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The body of the content sent to the function.
   */
  body?: UpdateEventStreamingRequestSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. The minimum value is 1.
   */
  concurrency?: UpdateEventStreamingRequestSinkSinkFcParametersConcurrency;
  /**
   * @remarks
   * The format transformation rule for the event content.
   */
  dataFormat?: UpdateEventStreamingRequestSinkSinkFcParametersDataFormat;
  /**
   * @remarks
   * The name of the function.
   */
  functionName?: UpdateEventStreamingRequestSinkSinkFcParametersFunctionName;
  /**
   * @remarks
   * The invocation type. Valid values:
   * - Sync: synchronous invocation
   * - Async: asynchronous invocation
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersFlowName extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkFnfParametersInput extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The input information for the execution.
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
   * The conversion format. Default value: CONSTANT.
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
   * The name of the execution.
   */
  executionName?: UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The name of the flow.
   */
  flowName?: UpdateEventStreamingRequestSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The input information for the execution.
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
   * The conversion format. Default value: CONSTANT.
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
   * The acknowledgment mode for writing data to Kafka. Valid values:
   * - acks=0: No response from the server is required. This mode delivers high performance but carries a high risk of data loss.
   * - acks=1: A response is returned after the primary node successfully writes the data. This mode delivers medium performance and carries a medium risk of data loss. Data may be lost if the primary node fails.
   * - acks=all: A response is returned only after the primary node successfully writes the data and the secondary nodes synchronize the data. This mode delivers lower performance but ensures higher data security. Data is lost only if both the primary and secondary nodes fail.
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
   * The conversion type. Valid values:
   * - CONSTANT: A fixed value.
   * - JSONPATH: Extracted from the upstream message based on the specified path.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders extends $dara.Model {
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkKafkaParametersKey extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The name of the topic.
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
   * The value before conversion.
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
   * The acknowledgment mode for writing data to Kafka. Valid values:
   * - acks=0: No response from the server is required. This mode delivers high performance but carries a high risk of data loss.
   * - acks=1: A response is returned after the primary node successfully writes the data. This mode delivers medium performance and carries a medium risk of data loss. Data may be lost if the primary node fails.
   * - acks=all: A response is returned only after the primary node successfully writes the data and the secondary nodes synchronize the data. This mode delivers lower performance but ensures higher data security. Data is lost only if both the primary and secondary nodes fail.
   */
  acks?: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks;
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
   * The target topic routing policy for messages. If both the Topic and DynamicTopic parameters are specified, the value of the DynamicTopic parameter takes precedence. The following configuration modes are supported:
   * 1. **Static constant mode**: Enter a fixed topic name string, such as "order_created". All messages are sent to this topic.
   * 2. **Dynamic extraction mode**: Enter a standard JSONPath expression, such as "$.user.id" or "$.metadata.category". The system parses the upstream message body and extracts the value of the matched field as the target topic name.
   */
  dynamicTopic?: UpdateEventStreamingRequestSinkSinkKafkaParametersDynamicTopic;
  /**
   * @remarks
   * The additional metadata for Kafka messages.
   */
  headers?: UpdateEventStreamingRequestSinkSinkKafkaParametersHeaders;
  /**
   * @remarks
   * The target service type is Message Queue for Apache Kafka. Specify the instance ID of the message queue (MSMQ).
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId;
  /**
   * @remarks
   * The identifier of the message.
   */
  key?: UpdateEventStreamingRequestSinkSinkKafkaParametersKey;
  /**
   * @remarks
   * The name of the topic.
   */
  topic?: UpdateEventStreamingRequestSinkSinkKafkaParametersTopic;
  /**
   * @remarks
   * The content of the message body.
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
   * The value before conversion.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * Enables Base64 encoding.
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
   * The conversion format. Default value: CONSTANT.
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
   * The name of the queue in Simple Message Queue (formerly MNS), an MSMQ service.
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
   * The target service type is Simple Message Queue (formerly MNS), an MSMQ service.
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
   * 
   * @example
   * The template string, if any
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
   * The content of the property.
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
   * The authentication type. Valid values:
   * 
   * - ACL
   * - None
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The content of the message body.
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
   * The network type. Valid values:
   * 
   * - PrivateNetwork
   * - PublicNetwork
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
   * yourPassword
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
   * The routing key of the message.
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
   * The target type for message delivery. Valid values:
   * 
   * - **Exchange**: Messages are routed through an exchange.
   * 
   * - **Queue**: Messages are delivered directly to a specified queue.
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
   * The name of the virtual host in RabbitMQ.
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
   * The conversion format. Default value: CONSTANT.
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
   * The transformation format. Default value: JSONPATH.
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
   * The template string, if any
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
   * The transformation format. Valid values:
   * 
   * - JSONPATH: JSONPATH.
   * - CONSTANT: CONSTANT.
   * - TEMPLATE: TEMPLATE.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The HTTP request header template. This parameter is required when Form is set to TEMPLATE. The transformed event content must be in JSON format.
   * 
   * @example
   * {
   *     "user_name":"${name}"
   * }
   */
  template?: string;
  /**
   * @remarks
   * - CONSTANT: A constant value.
   * - JSONPATH: The content extracted by using JSONPath.
   * - TEMPLATE: A template variable.
   * 
   * Note: The Value field cannot exceed 10,240 characters in length.
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
   * The conversion format. Default value: CONSTANT.
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
   * 
   * - PublicNetwork
   * - PrivateNetwork
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The instance ID of the Message Queue for RabbitMQ instance.
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
   * The value before conversion.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersNetworkType extends $dara.Model {
  /**
   * @remarks
   * The parameter assignment method. Set this parameter to CONSTANT to use a fixed value.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template content. This network parameter uses a fixed value configuration and does not perform template conversion. You do not need to specify this field.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The network type used to connect to the target ApsaraMQ for RabbitMQ instance. Valid values:
   * - PublicNetwork: the Internet.
   * - PrivateNetwork: a VPC.
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
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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
   * The name of the queue in the instance.
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersSecurityGroupId extends $dara.Model {
  /**
   * @remarks
   * The parameter assignment method. Set this parameter to CONSTANT to use a fixed value.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template content. This network parameter uses a fixed value configuration and does not perform template conversion. You do not need to specify this field.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The ID of the security group used to connect to the target ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * sg-bp1xxxxxxxxxxxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
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
   * The conversion format. Default value: CONSTANT.
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
   * - Exchange: the exchange mode.
   * - Queue: the queue mode.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersVSwitchIds extends $dara.Model {
  /**
   * @remarks
   * The parameter assignment method. Set this parameter to CONSTANT to use a fixed value.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template content. This network parameter uses a fixed value configuration and does not perform template conversion. You do not need to specify this field.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The IDs of the vSwitches used to connect to the target ApsaraMQ for RabbitMQ instance. Separate multiple vSwitch IDs with commas (,).
   * 
   * @example
   * vsw-bp1xxxxxxxxxxxx,vsw-bp1yyyyyyyyyyyy
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
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
   * The conversion format. Default value: CONSTANT.
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
   * The name of the vhost in the Message Queue for RabbitMQ instance.
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

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersVpcId extends $dara.Model {
  /**
   * @remarks
   * The parameter assignment method. Set this parameter to CONSTANT to use a fixed value.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template content. This network parameter uses a fixed value configuration and does not perform template conversion. You do not need to specify this field.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The ID of the VPC where the target ApsaraMQ for RabbitMQ instance resides.
   * 
   * @example
   * vpc-bp1xxxxxxxxxxxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
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
   * The exchange mode. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  exchange?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The target service type is Message Queue for RabbitMQ.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The network type used to connect to the target ApsaraMQ for RabbitMQ instance. If you set this parameter to PrivateNetwork, you must also configure the VpcId, VSwitchIds, and SecurityGroupId parameters. When you update an event stream and want to retain the original private network configuration, you must include these network parameters.
   */
  networkType?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersNetworkType;
  /**
   * @remarks
   * The filter properties.
   */
  properties?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is required only when the TargetType parameter is set to Queue.
   */
  queueName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The routing rule of the message. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  routingKey?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The security group used to connect to the target ApsaraMQ for RabbitMQ instance. This parameter is required when the NetworkType.Value parameter is set to PrivateNetwork.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersSecurityGroupId;
  /**
   * @remarks
   * The target type.
   */
  targetType?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The vSwitches used to connect to the target ApsaraMQ for RabbitMQ instance. This parameter is required when the NetworkType.Value parameter is set to PrivateNetwork.
   */
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVSwitchIds;
  /**
   * @remarks
   * The name of the vhost in the Message Queue for RabbitMQ instance.
   */
  virtualHostName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName;
  /**
   * @remarks
   * The VPC where the target ApsaraMQ for RabbitMQ instance resides. This parameter is required when the NetworkType.Value parameter is set to PrivateNetwork.
   */
  vpcId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVpcId;
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
      body: UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody,
      exchange: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange,
      instanceId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId,
      messageId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId,
      networkType: UpdateEventStreamingRequestSinkSinkRabbitMQParametersNetworkType,
      properties: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties,
      queueName: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName,
      routingKey: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey,
      securityGroupId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersSecurityGroupId,
      targetType: UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType,
      vSwitchIds: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVSwitchIds,
      virtualHostName: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName,
      vpcId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVpcId,
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

export class UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The consumer group.
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
   * The conversion format. Default value: CONSTANT.
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
   * The name of the topic in the Message Queue for RocketMQ instance.
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
   * The timestamp when the message is consumed.
   */
  consumeTimestamp?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The group ID of the consumer group.
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
   * - Cloud_4: an ApsaraMQ for RocketMQ 4.0 instance.
   * - Cloud_5: an ApsaraMQ for RocketMQ 5.0 instance.
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The topic of the Message Queue for RocketMQ instance.
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
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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
   * The delivery order type. Valid values:
   * 
   * - **Orderly**: Orderly delivery.
   * - **Concurrently**: Concurrent delivery.
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
   * The conversion format. Default value: CONSTANT.
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

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The conversion format. Default value: CONSTANT.
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
   * The instance ID of the MSMQ RocketMQ message.
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * 
   * - Cloud_4: ApsaraMQ for RocketMQ 4.0 instance. This is the default value.
   * - Cloud_5: ApsaraMQ for RocketMQ 5.0 instance.
   * - SelfBuilt: Self-managed Apache RocketMQ cluster.
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
   * The conversion format. Default value: CONSTANT.
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
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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
   * The conversion format. Default value: CONSTANT.
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
   * The value before conversion.
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
   * The conversion format. Default value: CONSTANT.
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
   * The topic of the MSMQ RocketMQ message instance.
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
   * The conversion format. Default value: CONSTANT.
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The message delivery order type. Optional. Default value: Concurrently.
   */
  deliveryOrderType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The endpoint of the instance.
   */
  instanceEndpoint?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The instance ID. The destination service type is MSMQ RocketMQ message.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The password of the instance.
   */
  instancePassword?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The username of the instance.
   */
  instanceUsername?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The filter properties.
   */
  keys?: UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys;
  /**
   * @remarks
   * The network type. Valid values:
   * - PublicNetwork
   * - PrivateNetwork
   */
  network?: UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The filter properties.
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
   * > When DeliveryOrderType is set to Orderly, this specifies the event content transformation rule for the ShardingKey property when writing messages to the downstream service. If the source is RocketMQ, ShardingKey can be empty. In this case, the sharding key of the message is generated by concatenating the upstream BrokerName and QueueId.
   */
  shardingKey?: UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The filter properties.
   */
  tags?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic of the MSMQ RocketMQ message instance.
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
   * The value before conversion.
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
   * 
   * @example
   * The template string, if any
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
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The SLS data format.
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
   * The conversion format. Default value: CONSTANT.
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
   * The SLS Logstore.
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
   * The conversion format. Default value: CONSTANT.
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
   * The SLS project.
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
   * The conversion format. Default value: CONSTANT.
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
   * When granting authorization to the event bus EventBridge to use this role to read SLS log content, you must meet the following conditions: when creating the role for the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service and set the trusted service to the event bus.
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
   * The conversion format. Default value: CONSTANT.
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
   * The topic of the log. This corresponds to the reserved field topic in SLS.
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
   * The content sent to SLS.
   */
  body?: UpdateEventStreamingRequestSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The custom key-value pairs for logs. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The SLS data format. Valid values:
   * - JSON
   * - KeyValue
   */
  contentType?: UpdateEventStreamingRequestSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The SLS Logstore.
   */
  logStore?: UpdateEventStreamingRequestSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The SLS project.
   */
  project?: UpdateEventStreamingRequestSinkSinkSLSParametersProject;
  /**
   * @remarks
   * When granting authorization to the event bus EventBridge to use this role to read SLS log content, you must meet the following conditions: when creating the role for the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service and set the trusted service to the event bus.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic of the log. This corresponds to the reserved field topic in SLS.
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
  /**
   * @remarks
   * The delivery parameters for the agent runtime.
   */
  sinkAgentRunParameters?: SinkAgentRunParameters;
  /**
   * @remarks
   * The description.
   */
  sinkApacheKafkaParameters?: UpdateEventStreamingRequestSinkSinkApacheKafkaParameters;
  /**
   * @remarks
   * The event source type.
   */
  sinkApacheRocketMQCheckpointParameters?: UpdateEventStreamingRequestSinkSinkApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The API destination target parameters.
   */
  sinkApiDestinationParameters?: SinkApiDestinationParameters;
  /**
   * @remarks
   * The Model Studio delivery parameters.
   */
  sinkBaiLianParameters?: SinkBaiLianParameters;
  /**
   * @remarks
   * The sink Kafka connector parameters.
   */
  sinkCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The sink Kafka parameters.
   */
  sinkCustomizedKafkaParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters;
  /**
   * @remarks
   * The sink DashVector parameters.
   */
  sinkDashVectorParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParameters;
  /**
   * @remarks
   * The DataHub sink parameters.
   */
  sinkDataHubParameters?: UpdateEventStreamingRequestSinkSinkDataHubParameters;
  /**
   * @remarks
   * The delivery parameters for the DataWorks trigger.
   */
  sinkDataWorksTriggerParameters?: SinkDataWorksTriggerParameters;
  /**
   * @remarks
   * The event source type.
   */
  sinkDorisParameters?: UpdateEventStreamingRequestSinkSinkDorisParameters;
  /**
   * @remarks
   * The name of the event target.
   */
  sinkEventHouseParameters?: UpdateEventStreamingRequestSinkSinkEventHouseParameters;
  /**
   * @remarks
   * The function target.
   */
  sinkFcParameters?: UpdateEventStreamingRequestSinkSinkFcParameters;
  /**
   * @remarks
   * The Sink Fnf parameters.
   */
  sinkFnfParameters?: UpdateEventStreamingRequestSinkSinkFnfParameters;
  /**
   * @remarks
   * The HTTPS target parameters.
   */
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The sink Kafka parameters.
   */
  sinkKafkaParameters?: UpdateEventStreamingRequestSinkSinkKafkaParameters;
  /**
   * @remarks
   * The knowledge base delivery parameters.
   */
  sinkKnowledgeBaseParameters?: SinkKnowledgeBaseParameters;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) event target, which is an MSMQ service.
   */
  sinkMNSParameters?: UpdateEventStreamingRequestSinkSinkMNSParameters;
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
   * The parameters for the self-managed RabbitMQ sink.
   */
  sinkOpenSourceRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The parameters for the Prometheus sink.
   */
  sinkPrometheusParameters?: UpdateEventStreamingRequestSinkSinkPrometheusParameters;
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
  sinkRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * The event source type.
   */
  sinkRocketMQCheckpointParameters?: UpdateEventStreamingRequestSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The destination parameters for the MSMQ RocketMQ message.
   */
  sinkRocketMQParameters?: UpdateEventStreamingRequestSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The Simple Log Service (SLS) sink parameters.
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
      sinkKnowledgeBaseParameters: 'SinkKnowledgeBaseParameters',
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
      sinkKnowledgeBaseParameters: SinkKnowledgeBaseParameters,
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
   * [Required] The ARN of the KMS resource that stores the SSL private key. This parameter is used to locate the KMS instance that stores the client private key. Format example: \\"acs:kms:cn-hangzhou:123456789:secret/ssl-keystore-key-xxxx\\". To obtain the ARN, view the ARN information of the corresponding key in the KMS console.
   * 
   * @example
   * "KmsArn"
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS secret. If the secret stored in KMS is in a key-value pair (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: If the KMS secret is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", enter \\"ssl_keystore_key\\". If the KMS secret is in plain text mode (directly storing the PEM content of the private key), leave this parameter empty.
   * 
   * @example
   * "KmsSecretValueKey"
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
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * "Bootstraps"
   */
  bootstraps?: string;
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * @example
   * DEFAULT_GROUP
   */
  consumerGroup?: string;
  /**
   * @remarks
   * Specifies the network type of the Kafka cluster.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The consumption offset. Valid values:
   * - latest: The system reads data from the latest offset.
   * - earliest: The system reads data from the earliest offset. This value is supported only when an unused consumer group is initialized for the first time.
   * 
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The SASL authentication mechanism of Kafka.
   * 
   * @example
   * "SaslMechanism"
   */
  saslMechanism?: string;
  /**
   * @remarks
   * The SASL authentication password of Kafka.
   * 
   * @example
   * yourPassword
   */
  saslPassword?: string;
  /**
   * @remarks
   * The SASL authentication username of Kafka.
   * 
   * @example
   * "SaslUser"
   */
  saslUser?: string;
  /**
   * @remarks
   * The ID of the security group for the Kafka source.
   * 
   * @example
   * sg-bp1iv19sp1msc7zot4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security protocol type of Kafka. Valid values:
   * - SASL_SSL
   * - PLAINTEXT
   * - SASL_PLAINTEXT
   * 
   * @example
   * SASL_SSL
   */
  securityProtocol?: string;
  /**
   * @remarks
   * [Required for encrypted private keys] The password for the Kafka client private key. If the client private key is protected by password encryption (the PEM file contains the \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" tag), you must provide the decryption password. If the private key is not encrypted, leave this parameter empty. Note: This password is used only to decrypt the private key and is unrelated to Kafka authentication.
   * 
   * @example
   * yourPassword
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The Kafka client certificate chain. If mutual SSL authentication (ssl.client.auth=required) is enabled on the Kafka server, you must provide this parameter. Format requirements: Base64-encoded PEM format, including the client certificate and the complete certificate chain (the client certificate first, followed by intermediate CA certificates, and the root CA certificate is optional). Note: Ensure that each PEM file starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\" before concatenating and Base64-encoding them.
   * 
   * @example
   * "SslKeystoreCertificateChain"
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * [Required for bidirectional authentication] The SSL private key configuration object. If bidirectional SSL authentication is enabled on the Kafka server, you must provide the client private key. Only the KMS pattern is supported for the key: specify the EPS resource of the Key Management Service (KMS) that stores the private key by using KmsArn. The system retrieves the private key content from KMS only in memory, which provides higher security. Configuration example: {\\"KmsArn\\": \\"acs:kms:cn-hangzhou:123456789:secret/ssl-key-xxxx\\", \\"KmsSecretValueKey\\": \\"keystore_private_key\\"}.
   */
  sslKeystoreKey?: UpdateEventStreamingRequestSourceSourceApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL scenarios] The trusted certificate of the Kafka server. This parameter is used to authenticate the validity of the SSL certificate of the Kafka broker and prevent man-in-the-middle attacks. Format requirements: PEM format with Base64 encoding, which typically includes the CA certificate of the Kafka server or the server certificate itself. Example: Perform Base64 encoding on the PEM file content of the CA certificate (ensure that it starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\"). If Kafka uses a self-signed certificate, you must provide the CA certificate that issued the certificate.
   * 
   * @example
   * "SslTruststoreCertificates"
   */
  sslTruststoreCertificates?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * LTC_CACHE_PRD
   */
  topic?: string;
  /**
   * @remarks
   * The list of vSwitch IDs for the Kafka source.
   * 
   * @example
   * vsw-bp179l3llg3jjxwrq72****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * - Text
   * - Binary
   * - Json
   * 
   * @example
   * JSON
   */
  valueDataType?: string;
  /**
   * @remarks
   * The VPC ID of the Kafka source.
   * 
   * @example
   * vpc-8vblalsi0vbhizr77****
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
   * The VPC ID.
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
   * 
   * @example
   * "BrokerUrl"
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The consumption offset, which is the timestamp when the SDK client consumes the first piece of data. The value is a UNIX timestamp.
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
   * The ID of the consumer group.
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
   * The network configuration. Default value: Default. For VPC networks, set this parameter to PublicNetwork.
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
   * The encoding and decoding parameter. Valid values:
   * - Json: uses the existing logic. Bytes are decoded into strings by using UTF-8 and parsed as JSON.
   * - Text: bytes are decoded into strings by using UTF-8 and directly placed in the payload.
   * - Binary: bytes are encoded into strings by using Base64 encoding and placed in the payload.
   * 
   * @example
   * Text
   */
  valueDataType?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * i-bp1dsudbecqwt61j****
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
   * cn-shanghai
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
   * topic_empower_1642400400779
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * @example
   * vsw-bp179l3llg3jjxwrq72****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID.
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

export class UpdateEventStreamingRequestSourceSourceOSSParameters extends $dara.Model {
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
   * The delimiter. In chunk loading mode, this delimiter is used as the chunk identifier for text. Default value: 
   *  (line break).
   * 
   * @example
   * \\n
   */
  delimiter?: string;
  /**
   * @remarks
   * The file extension whitelist.
   * 
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
   * The data loading mode. Valid values:
   * - single: loads a single document.
   * - element: loads data in chunks.
   * Default value: single.
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
   * The name of the RAM role that authorizes EventBridge to read OSS files. The role must have at least read-only permissions on OSS.
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
   * The vhost name of the open source RabbitMQ instance.
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
   * The external labels attached to the event stream.
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
   * The name of the task role.
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
   * The network type used to connect to the source RabbitMQ instance. Valid values:
   * - PublicNetwork: the Internet.
   * - PrivateNetwork: a VPC.
   * If you set this parameter to PrivateNetwork, you must also configure VpcId, VSwitchIds, and SecurityGroupId. When you update an event stream and want to retain the original VPC configuration, you must pass these network parameters at the same time.
   * 
   * @example
   * PrivateNetwork
   */
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
  /**
   * @remarks
   * The ID of the security group used to connect to the source RabbitMQ instance. This parameter is required when NetworkType is set to PrivateNetwork.
   * 
   * @example
   * sg-bp1xxxxxxxxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch IDs used to connect to the source RabbitMQ instance. Separate multiple vSwitch IDs with commas (,). This parameter is required when NetworkType is set to PrivateNetwork.
   * 
   * @example
   * vsw-bp1xxxxxxxxxxxx,vsw-bp1yyyyyyyyyyyy
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The vhost name of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * eb-connect
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The VPC ID of the source RabbitMQ instance. This parameter is required when NetworkType is set to PrivateNetwork.
   * 
   * @example
   * vpc-bp1xxxxxxxxxxxx
   */
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
   * The topics of the ApsaraMQ for RocketMQ instance.
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
   * The message encoding format. Valid values:
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
   * The message filtering type.
   * 
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @remarks
   * The group ID of the MSMQ message queue RocketMQ.
   * 
   * @example
   * GID_test
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * reg****-vpc.cn-zhangjiakou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The instance ID of the MSMQ message queue RocketMQ.
   * 
   * @example
   * i-f8z9a9mcgwri1c1id****
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
   * The password of the instance.
   * 
   * @example
   * admin
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
   * - Cloud_4 (default): ApsaraMQ for RocketMQ 4.0 instance.
   * - Cloud_5: ApsaraMQ for RocketMQ 5.0 instance.
   * - SelfBuilt: Self-managed Apache RocketMQ instance.
   * 
   * @example
   * Cloud_5
   */
  instanceType?: string;
  /**
   * @remarks
   * The username of the instance.
   * 
   * @example
   * admin
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
   * The consumption offset of messages. Valid values:
   * - CONSUMEFROMLASTOFFSET: Consumes messages from the latest offset.
   * - CONSUMEFROMFIRSTOFFSET: Consumes messages from the earliest offset.
   * - CONSUMEFROMTIMESTAMP: Consumes messages from the offset at a specified point in time.
   * 
   * Default value: CONSUMEFROMLAST_OFFSET.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region ID of the MSMQ message queue RocketMQ.
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
   * The name of the role. For the authorization of the event bus EventBridge to use this role to read SLS log content, the following conditions must be met: when creating the role used by the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service, and the trusted service must be the event bus.
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
  /**
   * @remarks
   * The parameter settings for open source Kafka.
   */
  sourceApacheKafkaParameters?: UpdateEventStreamingRequestSourceSourceApacheKafkaParameters;
  /**
   * @remarks
   * The RocketMQ checkpoint source.
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
   * The DTS source.
   */
  sourceDTSParameters?: UpdateEventStreamingRequestSourceSourceDTSParameters;
  /**
   * @remarks
   * The event bus source.
   */
  sourceEventBusParameters?: UpdateEventStreamingRequestSourceSourceEventBusParameters;
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
   * The source Kafka parameters.
   */
  sourceKafkaParameters?: UpdateEventStreamingRequestSourceSourceKafkaParameters;
  /**
   * @remarks
   * The source Simple Message Queue (formerly MNS) parameters.
   */
  sourceMNSParameters?: UpdateEventStreamingRequestSourceSourceMNSParameters;
  /**
   * @remarks
   * The source MQTT parameters.
   */
  sourceMQTTParameters?: UpdateEventStreamingRequestSourceSourceMQTTParameters;
  /**
   * @remarks
   * The source MySQL parameters.
   */
  sourceMySQLParameters?: SourceMySQLParameters;
  /**
   * @remarks
   * The source OSS parameters.
   */
  sourceOSSParameters?: UpdateEventStreamingRequestSourceSourceOSSParameters;
  /**
   * @remarks
   * The source open source RabbitMQ parameters.
   */
  sourceOpenSourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The source PostgreSQL parameters.
   */
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  /**
   * @remarks
   * The source Prometheus event source parameters.
   */
  sourcePrometheusParameters?: UpdateEventStreamingRequestSourceSourcePrometheusParameters;
  /**
   * @remarks
   * The source ApsaraMQ for RabbitMQ metadata parameters.
   */
  sourceRabbitMQMetaParameters?: SourceRabbitMQMetaParameters;
  /**
   * @remarks
   * The source ApsaraMQ for RabbitMQ message synchronization parameters.
   */
  sourceRabbitMQMsgSyncParameters?: SourceRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The source RabbitMQ parameters.
   */
  sourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceRabbitMQParameters;
  /**
   * @remarks
   * The RocketMQ checkpoint source.
   */
  sourceRocketMQCheckpointParameters?: UpdateEventStreamingRequestSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The RocketMQ source parameters.
   */
  sourceRocketMQParameters?: UpdateEventStreamingRequestSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The Simple Log Service (SLS) source parameters.
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
   * The AI embedding parameters.
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
   * The ARN of the cloud service, such as the ARN of a function in Function Compute.
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
   * The event filtering rule. If you do not specify this parameter, all events are matched. For more information, see [https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-patterns](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-patterns).
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
   * The common JSON Configurations for event providers. This parameter is mutually exclusive with Source.
   * 
   * @example
   * {"key":"value"}
   */
  metadata?: string;
  /**
   * @remarks
   * The runtime environment parameters.
   */
  runOptions?: UpdateEventStreamingRequestRunOptions;
  /**
   * @remarks
   * The event target. You must select one sink, and you can configure only one sink.
   */
  sink?: UpdateEventStreamingRequestSink;
  /**
   * @remarks
   * The event provider. You must select exactly one source type and configure its parameters.
   */
  source?: UpdateEventStreamingRequestSource;
  /**
   * @remarks
   * The transform configurations.
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

