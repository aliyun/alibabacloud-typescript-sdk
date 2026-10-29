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
   * The offset difference.
   * 
   * @example
   * 0
   */
  diffOffset?: number;
  /**
   * @remarks
   * The extension attributes.
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
   * The transactions per second (TPS).
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
   * The maximum number of events that the window can accommodate. When this threshold is reached, data in the window is pushed downstream. If multiple windows exist, the push is triggered when the threshold of any window is reached.
   * 
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @remarks
   * The maximum time range in seconds for events that the window can accommodate. When this threshold is reached, data in the window is pushed downstream. If multiple windows exist, the push is triggered when the threshold of any window is reached.
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
   * The ID of the security group to which the instance of the dead-letter queue belongs.
   * 
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches to which the dead-letter queue belongs.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC to which the dead-letter queue belongs.
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
   * The maximum retry time in seconds.
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
   * - EXPONENTIALDECAY_RETRY: exponential decay retry.
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
  /**
   * @remarks
   * The business options.
   */
  businessOption?: GetEventStreamingResponseBodyDataRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter queue. By default, the dead-letter queue is disabled, and messages that exceed the retry policy are discarded.
   */
  deadLetterQueue?: GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The error tolerance policy. Valid values:
   * - NONE: No errors are tolerated.
   * - ALL: All errors are tolerated.
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
  retryStrategy?: GetEventStreamingResponseBodyDataRunOptionsRetryStrategy;
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
   * - CONSTANT: a fixed value.
   * - JSONPATH: extracted from the upstream based on the path.
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersHeaders extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersKey extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersNetworkType extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSecurityGroupId extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * Required. The ARN of the KMS resource that stores the SSL private key. This parameter is used to locate the Key Management Service (KMS) instance that stores the client private key. Example format: acs:kms:cn-hangzhou:123456789:secret/ssl-keystore-key-xxxx. To obtain the value, view the ARN of the corresponding key in the KMS console.
   * 
   * @example
   * "KmsArn"
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS secret. When the secret stored in KMS uses a key-value (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: If the KMS secret is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", enter \\"ssl_keystore_key\\". If the KMS secret is in plaintext mode and directly stores the PEM content of the private key, leave this parameter empty.
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVSwitchIds extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersValue extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVpcId extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The Kafka write acknowledgment mode. Valid values:
   * - acks=0: No response from the server is required. Performance is high, but the risk of data loss is high.
   * - acks=1: A response is returned after the primary node successfully writes the data. Performance is medium, and the risk of data loss is medium. Data may be lost if the primary node goes down.
   * - acks=all: A response is returned after the primary node successfully writes the data and the secondary nodes successfully synchronize the data. Performance is low, but data is secure. Data is lost only when both the primary and secondary nodes go down.
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
   * The target topic routing policy for messages. If both the topic and DynamicTopic parameters are specified, the DynamicTopic parameter takes precedence. The following configuration modes are supported:
   * 1. **Static constant mode**: Enter a fixed topic name string, such as "order_created". All messages are sent to this topic.
   * 2. **Dynamic extraction mode**: Enter a standard JSONPath expression, such as "$.user.id" or "$.metadata.category". The system parses the upstream message body and extracts the value of the matched field as the target topic name.
   */
  dynamicTopic?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersDynamicTopic;
  /**
   * @remarks
   * The message headers.
   */
  headers?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersHeaders;
  /**
   * @remarks
   * The message key.
   */
  key?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersKey;
  /**
   * @remarks
   * The network type.
   */
  networkType?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersNetworkType;
  /**
   * @remarks
   * The Kafka SASL authentication mechanism.
   * 
   * @example
   * "SaslMechanism"
   */
  saslMechanism?: string;
  /**
   * @remarks
   * The Kafka SASL authentication password.
   * 
   * @example
   * yourPassword
   */
  saslPassword?: string;
  /**
   * @remarks
   * The Kafka SASL authentication username.
   * 
   * @example
   * "SaslUser"
   */
  saslUser?: string;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSecurityGroupId;
  /**
   * @remarks
   * The Kafka security protocol type. Valid values:
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
   * [Required for encrypted private keys] The password for the Kafka client private key. If the client private key is encrypted with a password (that is, the PEM file contains the \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" tag), you must provide the decryption password. Leave this parameter empty if the private key is not encrypted. Note: This password is used only to decrypt the private key and is not related to Kafka authentication.
   * 
   * @example
   * yourPassword
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The certificate chain of the Kafka client. This parameter is required when mutual SSL authentication (ssl.client.auth=required) is enabled on the Kafka server. Format requirements: Base64-encoded PEM format, including the client certificate and the complete certificate chain (the client certificate first, followed by the intermediate CA certificates, and the root CA certificate is optional). Note: Make sure that the content of each PEM file starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\". Concatenate the files and then encode them in Base64.
   * 
   * @example
   * "SslKeystoreCertificateChain"
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * [Required for bidirectional authentication] The SSL private key configuration object. The client private key is required when bidirectional SSL authentication is enabled on the Kafka server. Only the KMS pattern is supported for keys: specify the Key Management Service EPS resource that stores the private key by using KmsArn. The system retrieves the private key content from KMS only in memory, which provides higher security. Configuration example: {"KmsArn": "acs:kms:cn-hangzhou:123456789:secret/ssl-key-xxxx", "KmsSecretValueKey": "keystore_private_key"}.
   */
  sslKeystoreKey?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL scenarios] The trust certificate of the Kafka server. This certificate is used to authenticate the validity of the SSL certificate of the Kafka broker and prevent man-in-the-middle attacks. Format requirements: PEM format with Base64 encoding, which typically contains the CA certificate of the Kafka server or the server certificate itself. Example: Perform Base64 encoding on the content of the CA certificate PEM file, ensuring that it starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\". If Kafka uses a self-signed certificate, provide the CA certificate that issued the certificate.
   * 
   * @example
   * "SslTruststoreCertificates"
   */
  sslTruststoreCertificates?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * LTC_CACHE_PRD
   */
  topic?: string;
  /**
   * @remarks
   * The list of vSwitch IDs for the Kafka source.
   */
  vSwitchIds?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersVSwitchIds;
  /**
   * @remarks
   * The message body.
   */
  value?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParametersValue;
  /**
   * @remarks
   * The VPC ID.
   */
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic in the ApsaraMQ for RabbitMQ instance.
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
   * The timestamp when the message is consumed.
   */
  consumeTimestamp?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The group ID of the consumer group.
   */
  group?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParametersGroup;
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
   * The download URL of the OSS file.
   * 
   * @example
   * "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/testDoc/Old_Homebrew/2024-06-26%2022%3A34%3A08/opt/homebrew/homebrew/Library/Homebrew/test/support/fixtures/cask/AppWithBinary.zip?OSSAccessKeyId=ri&Expires=1725539627&Signature=rb8q3OpV******"
   */
  connectorPackageUrl?: string;
  /**
   * @remarks
   * The properties file to parse from the current ZIP package.
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
   * The instance ID of the MSMQ Kafka instance.
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
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersType extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersValue extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  /**
   * @remarks
   * The property name.
   */
  name?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersName;
  /**
   * @remarks
   * The DashVector property type.
   */
  type?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParametersType;
  /**
   * @remarks
   * The property value.
   */
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
   * The template style.
   * 
   * @example
   * ${partition}
   */
  template?: string;
  /**
   * @remarks
   * - If Form is set to CONSTANT: the constant value.
   * - If Form is set to JSONPATH: the content extracted by using JSONPath.
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
   * The primary key ID template. This field is required only when Form is set to TEMPLATE.
   * 
   * @example
   * ${ID}
   */
  template?: string;
  /**
   * @remarks
   * - If Form is set to JSONPATH: the content extracted by using JSONPath.
   * - If Form is set to TEMPLATE: the template variable.
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
   * The schema field definitions for table entries when inserting data into DashVector. The result after event content transformation must be in JSON format.
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
   * The primary key ID used when inserting or deleting a record. If this field is not specified, a random primary key ID is used.
   */
  primaryKeyId?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId;
  /**
   * @remarks
   * The vector of the DashVector record to be inserted.
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

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParameters extends $dara.Model {
  /**
   * @remarks
   * The record content template for the BLOB type.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The name of the DataHub project.
   */
  project?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * The name of the task role.
   */
  roleName?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The name of the DataHub topic.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The topic content schema for the TUPLE type.
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
  /**
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
   * The public HTTP endpoint of the BE.
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersBody extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersDatabase extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersFeHttpEndpoint extends $dara.Model {
  /**
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
   * The HTTP endpoint of the FE.
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersNetworkType extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersPassword extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersQueryEndpoint extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersSecurityGroupId extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersTable extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersUserName extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersVSwitchIds extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParametersVpcId extends $dara.Model {
  /**
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

export class GetEventStreamingResponseBodyDataSinkSinkDorisParameters extends $dara.Model {
  /**
   * @remarks
   * The public HTTP endpoint of the BE.
   */
  beHttpEndpoint?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersBeHttpEndpoint;
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersBody;
  /**
   * @remarks
   * The database.
   */
  database?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersDatabase;
  /**
   * @remarks
   * The HTTP endpoint of the FE.
   */
  feHttpEndpoint?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersFeHttpEndpoint;
  /**
   * @remarks
   * The network type.
   */
  networkType?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersNetworkType;
  /**
   * @remarks
   * The password.
   */
  password?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersPassword;
  /**
   * @remarks
   * The MySQL protocol endpoint.
   */
  queryEndpoint?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersQueryEndpoint;
  /**
   * @remarks
   * The security group.
   */
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersSecurityGroupId;
  /**
   * @remarks
   * The destination table.
   */
  table?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersTable;
  /**
   * @remarks
   * The username.
   */
  userName?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersUserName;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: GetEventStreamingResponseBodyDataSinkSinkDorisParametersVSwitchIds;
  /**
   * @remarks
   * The VPC ID.
   */
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
   * - ORIGINAL: complete event
   * - JSONPATH: partial event
   * - CONSTANT: constant
   * - TEMPLATE: template
   * 
   * For more information, refer to [Event transformation](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-transformation).
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersDataFormat extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Valid values:
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
   * - Sync: Synchronous invocation.
   * - Async: Asynchronous invocation.
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

export class GetEventStreamingResponseBodyDataSinkSinkFcParameters extends $dara.Model {
  /**
   * @remarks
   * The body content sent to the function.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkFcParametersBody;
  /**
   * @remarks
   * The delivery concurrency. The minimum value is 1.
   */
  concurrency?: GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency;
  /**
   * @remarks
   * The format transformation rule for the event content.
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
   * - Sync: Synchronous invocation.
   * - Async: Asynchronous invocation.
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
   * - JSONPATH: partial event
   * - CONSTANT: constant
   * - TEMPLATE: template
   * 
   * For more information, refer to [Event transformation](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-transformation).
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The execution input.
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The execution input.
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
   * The acknowledgment mode for writing data to Kafka. Valid values:
   * - acks=0: No response from the server is required. This mode provides high performance but has a high risk of data loss.
   * - acks=1: A response is returned after the leader node successfully writes the data. This mode provides moderate performance and has a moderate risk of data loss. Data may be lost if the leader node fails.
   * - acks=all: A response is returned after the leader node successfully writes the data and the follower nodes successfully replicate the data. This mode provides lower performance but higher data security. Data is lost only if both the leader and follower nodes fail.
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
   * - CONSTANT: a fixed value.
   * - JSONPATH: extracted from the upstream based on the path.
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersHeaders extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Valid values:
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

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment mode for writing data to Kafka. Valid values:
   * - acks=0: No response from the server is required. This mode provides high performance but has a high risk of data loss.
   * - acks=1: A response is returned after the leader node successfully writes the data. This mode provides moderate performance and has a moderate risk of data loss. Data may be lost if the leader node fails.
   * - acks=all: A response is returned after the leader node successfully writes the data and the follower nodes successfully replicate the data. This mode provides lower performance but higher data security. Data is lost only if both the leader and follower nodes fail.
   */
  acks?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks;
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
   * The target topic routing policy for messages. If both the topic and DynamicTopic parameters are specified, the DynamicTopic parameter takes precedence. The following configuration modes are supported:
   * 1. **Static constant mode**: Enter a fixed topic name string, such as "order_created". All messages are sent to this topic.
   * 2. **Dynamic extraction mode**: Enter a standard JSONPath expression, such as "$.user.id" or "$.metadata.category". The system parses the upstream message body and extracts the value of the matched field as the target topic name.
   */
  dynamicTopic?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersDynamicTopic;
  /**
   * @remarks
   * The additional metadata of the Kafka message.
   */
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
   * The name of the topic.
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Specifies whether to enable Base64 encoding.
   */
  isBase64Encode?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The target service type is Simple Message Queue (formerly MNS).
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The content of the properties.
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
   * The content of the message body.
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
   * The name of the exchange in RabbitMQ.
   * 
   * @example
   * my-exchange
   */
  exchange?: string;
  /**
   * @remarks
   * The unique identifier of the message.
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
   * yourPassword
   */
  password?: string;
  /**
   * @remarks
   * The additional properties of the message.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersProperties;
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
   * The name of the virtual host in RabbitMQ.
   * 
   * @example
   * vhost1
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The name of the exchange in the MSMQ message queue RabbitMQ instance.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The instance ID of the MSMQ message queue RabbitMQ instance.
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The destination type. Valid values:
   * 
   * - Exchange: the exchange mode
   * - Queue: the queue mode
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The name of the vhost in the MSMQ message queue RabbitMQ instance.
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
   * The exchange mode. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  exchange?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange;
  /**
   * @remarks
   * The destination service type is MSMQ message queue RabbitMQ.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId;
  /**
   * @remarks
   * The message ID.
   */
  messageId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId;
  /**
   * @remarks
   * The filtering properties.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties;
  /**
   * @remarks
   * The queue mode. This parameter is required only when the TargetType parameter is set to Queue.
   */
  queueName?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName;
  /**
   * @remarks
   * The routing rule of the message. This parameter is required only when the TargetType parameter is set to Exchange.
   */
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey;
  /**
   * @remarks
   * The destination type.
   */
  targetType?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType;
  /**
   * @remarks
   * The name of the vhost in the MSMQ message queue RabbitMQ instance.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic in the MSMQ message queue RocketMQ instance.
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
   * The timestamp when the message is consumed.
   */
  consumeTimestamp?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParametersConsumeTimestamp;
  /**
   * @remarks
   * The group ID of the consumer group.
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
   * - Cloud_4: ApsaraMQ for RocketMQ 4.0 instance
   * - Cloud_5: ApsaraMQ for RocketMQ 5.0 instance
   * 
   * @example
   * Cloud_4
   */
  instanceType?: string;
  /**
   * @remarks
   * The topic of the MSMQ message queue RocketMQ instance.
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
   * - **Orderly:** orderly delivery
   * 
   * - **Concurrently:** concurrent delivery
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The instance ID of the MSMQ message queue RocketMQ instance.
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The name of the topic in the MSMQ RocketMQ instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId extends $dara.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody;
  /**
   * @remarks
   * The delivery order type of the message. This parameter is optional. Default value: concurrent delivery.
   */
  deliveryOrderType?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The endpoint of the instance.
   */
  instanceEndpoint?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The destination service type is MSMQ message queue RocketMQ.
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
   * The filtering properties.
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
   * The filtering properties.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId;
  /**
   * @remarks
   * The sharding key of the message.
   * > 
   * > - If DeliveryOrderType is set to Orderly, ShardingKey is required.
   * > - If Source is set to RocketMQ, ShardingKey can be left empty. In this case, the sharding key of the message is generated by concatenating the upstream BrokerName and QueueId.
   */
  shardingKey?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The filtering properties.
   */
  tags?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic of the MSMQ RocketMQ instance.
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

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema extends $dara.Model {
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The template string, if any
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * For the authorization of the event bus EventBridge to use this role to read SLS log content, the following conditions must be met: when you create the role for the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service and set the trusted service to Event Bus.
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
   * The template style.
   * 
   * @example
   * The template string, if any
   */
  template?: string;
  /**
   * @remarks
   * The topic of the log, which corresponds to the reserved Simple Log Service (SLS) field "topic".
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
   * The content sent to SLS.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The custom key-value pairs of the log. This parameter takes effect only when ContentType is set to KeyValue. Each key-value pair is represented by Key_n and Value_n.
   */
  contentSchema?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The data format of SLS. You can select the default format or configure specified key-value pairs. Valid values:
   * 
   * - JSON
   * - KeyValue
   */
  contentType?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Logstore of Simple Log Service.
   */
  logStore?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The project of Simple Log Service.
   */
  project?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject;
  /**
   * @remarks
   * For the authorization of the event bus EventBridge to use this role to read SLS log content, the following conditions must be met: when you create the role for the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service and set the trusted service to Event Bus.
   */
  roleName?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic of the log, which corresponds to the reserved Simple Log Service (SLS) field "topic".
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
  /**
   * @remarks
   * The delivery parameters for the agent runtime.
   */
  sinkAgentRunParameters?: SinkAgentRunParameters;
  /**
   * @remarks
   * The description.
   */
  sinkApacheKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkApacheKafkaParameters;
  /**
   * @remarks
   * The Sink Apache RocketMQ Checkpoint parameters.
   */
  sinkApacheRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSinkSinkApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The ApiDestination target parameters.
   */
  sinkApiDestinationParameters?: SinkApiDestinationParameters;
  /**
   * @remarks
   * The Model Studio delivery parameters.
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
   * The DataHub sink parameters.
   */
  sinkDataHubParameters?: GetEventStreamingResponseBodyDataSinkSinkDataHubParameters;
  /**
   * @remarks
   * The DataWorks trigger delivery parameters.
   */
  sinkDataWorksTriggerParameters?: SinkDataWorksTriggerParameters;
  /**
   * @remarks
   * The event source type.
   */
  sinkDorisParameters?: GetEventStreamingResponseBodyDataSinkSinkDorisParameters;
  /**
   * @remarks
   * The function target.
   */
  sinkFcParameters?: GetEventStreamingResponseBodyDataSinkSinkFcParameters;
  /**
   * @remarks
   * The FNF sink parameters.
   */
  sinkFnfParameters?: GetEventStreamingResponseBodyDataSinkSinkFnfParameters;
  /**
   * @remarks
   * The HTTPS target parameters.
   */
  sinkHttpsParameters?: SinkHttpsParameters;
  /**
   * @remarks
   * The Kafka sink parameters.
   */
  sinkKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkKafkaParameters;
  /**
   * @remarks
   * The knowledge base delivery parameters.
   */
  sinkKnowledgeBaseParameters?: SinkKnowledgeBaseParameters;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) event target.
   */
  sinkMNSParameters?: GetEventStreamingResponseBodyDataSinkSinkMNSParameters;
  /**
   * @remarks
   * The MQTT delivery parameters.
   */
  sinkMQTTParameters?: SinkMQTTParameters;
  /**
   * @remarks
   * The OSS delivery parameters.
   */
  sinkOSSParameters?: SinkOSSParameters;
  /**
   * @remarks
   * The self-managed RabbitMQ event target parameters.
   */
  sinkOpenSourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The metadata delivery parameters for ApsaraMQ for RabbitMQ.
   */
  sinkRabbitMQMetaParameters?: SinkRabbitMQMetaParameters;
  /**
   * @remarks
   * The message synchronization delivery parameters for ApsaraMQ for RabbitMQ.
   */
  sinkRabbitMQMsgSyncParameters?: SinkRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The ApsaraMQ for RabbitMQ sink parameters.
   */
  sinkRabbitMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters;
  /**
   * @remarks
   * The Sink RocketMQ checkpoint parameters.
   */
  sinkRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQCheckpointParameters;
  /**
   * @remarks
   * The destination parameters for the MSMQ message queue RocketMQ.
   */
  sinkRocketMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters;
  /**
   * @remarks
   * The Simple Log Service (SLS) sink parameters.
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
      sinkKnowledgeBaseParameters: SinkKnowledgeBaseParameters,
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

export class GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParametersSslKeystoreKey extends $dara.Model {
  /**
   * @remarks
   * Required. The ARN of the KMS resource that stores the SSL private key. This parameter is used to locate the Key Management Service (KMS) instance that stores the client private key. Example format: acs:kms:cn-hangzhou:123456789:secret/ssl-keystore-key-xxxx. To obtain the value, view the ARN of the corresponding key in the KMS console.
   * 
   * @example
   * "KmsArn"
   */
  kmsArn?: string;
  /**
   * @remarks
   * [KMS KV mode] The key name in the KMS secret. When the secret stored in KMS uses a key-value (KV) structure, specify this parameter to indicate the key corresponding to the SSL private key. Example: If the KMS secret is \\"{"ssl_keystore_key":"-----BEGIN PRIVATE KEY-----...","ssl_truststore_key":"..."}\\", enter \\"ssl_keystore_key\\". If the KMS secret is in plaintext mode and directly stores the PEM content of the private key, leave this parameter empty.
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

export class GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters extends $dara.Model {
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
   * The Kafka SASL authentication mechanism.
   * 
   * @example
   * "SaslMechanism"
   */
  saslMechanism?: string;
  /**
   * @remarks
   * The Kafka SASL authentication password.
   * 
   * @example
   * yourPassword
   */
  saslPassword?: string;
  /**
   * @remarks
   * The Kafka SASL authentication username.
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
   * The Kafka security protocol type. Valid values:
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
   * [Required for encrypted private keys] The password for the Kafka client private key. If the client private key is encrypted with a password (that is, the PEM file contains the \\"Proc-Type: 4,ENCRYPTED\\" or \\"ENCRYPTED\\" tag), you must provide the decryption password. Leave this parameter empty if the private key is not encrypted. Note: This password is used only to decrypt the private key and is not related to Kafka authentication.
   * 
   * @example
   * yourPassword
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * [Required for mutual authentication] The certificate chain of the Kafka client. This parameter is required when mutual SSL authentication (ssl.client.auth=required) is enabled on the Kafka server. Format requirements: Base64-encoded PEM format, including the client certificate and the complete certificate chain (the client certificate first, followed by the intermediate CA certificates, and the root CA certificate is optional). Note: Make sure that the content of each PEM file starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\". Concatenate the files and then encode them in Base64.
   * 
   * @example
   * "SslKeystoreCertificateChain"
   */
  sslKeystoreCertificateChain?: string;
  /**
   * @remarks
   * [Required for bidirectional authentication] The SSL private key configuration object. When bidirectional SSL authentication is enabled on the Kafka server, the client private key must be provided. Only the KMS pattern is supported for keys: specify the Key Management Service (KMS) EPS resource that stores the private key by using KmsArn. The system retrieves the private key content from KMS only in memory for higher security. Configuration example: {"KmsArn": "acs:kms:cn-hangzhou:123456789:secret/ssl-key-xxxx", "KmsSecretValueKey": "keystore_private_key"}
   */
  sslKeystoreKey?: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParametersSslKeystoreKey;
  /**
   * @remarks
   * [Required for SSL] The trusted certificate of the Kafka server. It is used to authenticate the validity of the SSL certificate of the Kafka broker to prevent man-in-the-middle attacks. Format requirement: PEM format with Base64 encoding, which usually contains the CA certificate of the Kafka server or the server certificate itself. Example: Apply Base64 encoding to the content of the PEM file of the CA certificate (ensure that it starts with \\"-----BEGIN CERTIFICATE-----\\" and ends with \\"-----END CERTIFICATE-----\\"). If Kafka uses a self-signed certificate, you must provide the CA signing certificate that issued the certificate.
   * 
   * @example
   * "SslTruststoreCertificates"
   */
  sslTruststoreCertificates?: string;
  /**
   * @remarks
   * The topic name.
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
   * The endpoint of the instance.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The instance ID of the ApsaraMQ for RocketMQ.
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
   * The VPC ID.
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
   * The instance ID of the MSMQ for Apache Kafka.
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
   * The username of the consumer group account.
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
   * i-bp1fbtrnqmjvgq66****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network configuration. Default value: Default. For a VPC network, the value is PublicNetwork.
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
   * The ID of the region where the instance resides.
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
   * vsw-wz9qqeovkwjxlu9uc****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The encoding and decoding parameter. Valid values:
   * - JSON: The existing logic. Bytes are decoded into character strings by using UTF-8 and parsed as JSON.
   * - Text: Bytes are decoded into character strings by using UTF-8 and directly placed in the payload.
   * - Binary: Bytes are encoded into character strings by using Base64 encoding and placed in the payload.
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
   * Specifies whether to enable Base64 encoding.
   * 
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @remarks
   * The name of the queue in the MSMQ Simple Message Queue (formerly MNS).
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
   * TOPIC-cainiao-pcs-wms-instock-noPrealertPrintLabel
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
   * The delimiter. In chunk loading mode, this delimiter is used as the chunk identifier for text. Default value: 
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
   * The data loading mode. Valid values:
   * - single: Single document loading.
   * - element: Chunk loading.
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
   * The name of the RAM role that grants authorization to the EventBridge event bus to read OSS files. The role must have at least read-only permissions on OSS.
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
   * yourPassword
   */
  password?: string;
  /**
   * @remarks
   * The name of the queue in the open-source RabbitMQ instance.
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
   * The name of the vhost in the open-source RabbitMQ instance.
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
   * The region ID.
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

export class GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the MSMQ RabbitMQ message instance.
   * 
   * @example
   * i-f8z9a9mcgwri1c1i****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the queue in the MSMQ RabbitMQ message instance.
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
   * The name of the vhost in the MSMQ RabbitMQ message instance.
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
   * The message filtering type.
   * 
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @remarks
   * The group ID of the MSMQ RocketMQ message service.
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
   * reg****-vpc.cn-zhangjiakou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The instance ID of the MSMQ RocketMQ message service.
   * 
   * @example
   * i-f8zbher64dlm58pl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network information of the instance. Valid values:
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
   * - CONSUME_FROM_LAST_OFFSET: Consumes messages from the latest offset.
   * - CONSUME_FROM_FIRST_OFFSET: Consumes messages from the earliest offset.
   * - CONSUME_FROM_TIMESTAMP: Consumes messages from the offset at a specified timestamp.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region ID of the MSMQ RocketMQ message service.
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
   * The start consumption offset. You can set this parameter to begin or end to consume from the earliest or latest offset. You can also specify a timestamp in seconds to start consumption.
   * 
   * @example
   * begin
   */
  consumePosition?: string;
  /**
   * @remarks
   * The consumer group.
   * 
   * @example
   * go-dts-shelf-group
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The Logstore of Simple Log Service.
   * 
   * @example
   * waf-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The project of Simple Log Service.
   * 
   * @example
   * dmmzk
   */
  project?: string;
  /**
   * @remarks
   * When authorizing EventBridge to use this role to read SLS log content, the following conditions must be met: when you create the role used by the service in the Resource Access Management (RAM) console, you must select Alibaba Cloud Service and set the trusted service to EventBridge.
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
  /**
   * @remarks
   * The parameter settings for open-source Kafka.
   */
  sourceApacheKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters;
  /**
   * @remarks
   * The RocketMQ checkpoint source.
   */
  sourceApacheRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters;
  /**
   * @remarks
   * The custom connector Apache Kafka event source.
   */
  sourceCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters;
  /**
   * @remarks
   * The custom Kafka event source.
   */
  sourceCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters;
  /**
   * @remarks
   * The DTS source.
   */
  sourceDTSParameters?: GetEventStreamingResponseBodyDataSourceSourceDTSParameters;
  /**
   * @remarks
   * The event bus source.
   */
  sourceEventBusParameters?: GetEventStreamingResponseBodyDataSourceSourceEventBusParameters;
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
   * The Kafka source.
   */
  sourceKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceKafkaParameters;
  /**
   * @remarks
   * The MSMQ Simple Message Queue (formerly MNS) parameters.
   */
  sourceMNSParameters?: GetEventStreamingResponseBodyDataSourceSourceMNSParameters;
  /**
   * @remarks
   * The MQTT event source.
   */
  sourceMQTTParameters?: GetEventStreamingResponseBodyDataSourceSourceMQTTParameters;
  /**
   * @remarks
   * The MySQL event source.
   */
  sourceMySQLParameters?: SourceMySQLParameters;
  /**
   * @remarks
   * The OSS event source.
   */
  sourceOSSParameters?: GetEventStreamingResponseBodyDataSourceSourceOSSParameters;
  /**
   * @remarks
   * The open-source RabbitMQ event source.
   */
  sourceOpenSourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters;
  /**
   * @remarks
   * The PostgreSQL data source parameters.
   */
  sourcePostgreSQLParameters?: SourcePostgreSQLParameters;
  /**
   * @remarks
   * The Prometheus event source.
   */
  sourcePrometheusParameters?: GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters;
  /**
   * @remarks
   * The metadata source parameters for the MSMQ RabbitMQ message service.
   */
  sourceRabbitMQMetaParameters?: SourceRabbitMQMetaParameters;
  /**
   * @remarks
   * The message synchronization source parameters for the MSMQ RabbitMQ service.
   */
  sourceRabbitMQMsgSyncParameters?: SourceRabbitMQMsgSyncParameters;
  /**
   * @remarks
   * The ApsaraMQ for RabbitMQ event source.
   */
  sourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters;
  /**
   * @remarks
   * The RocketMQ checkpoint source.
   */
  sourceRocketMQCheckpointParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQCheckpointParameters;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ event source.
   */
  sourceRocketMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters;
  /**
   * @remarks
   * The SLS event source.
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

export class GetEventStreamingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the retrieved event stream.
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
   * The name of the retrieved event stream.
   * 
   * @example
   * rocketmq-sync
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * The event filtering rule. If this parameter is not specified, all events are matched.
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
   * The general JSON Configurations of the event provider. Specify either this parameter or Source.
   * 
   * @example
   * {"key":"value"}
   */
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
   * The event provider.
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
   * The transform configurations.
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
   * The response code. A value of Success indicates that the request is successful. Other values indicate error codes. For more information, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
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
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 7892F480-58C9-5067-AB35-8A7BEF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
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

