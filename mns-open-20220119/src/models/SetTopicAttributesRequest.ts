// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetTopicAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the log management feature. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableLogging?: boolean;
  /**
   * @remarks
   * Specifies whether to enable server-side encryption for message bodies. Valid values: true or false.
   */
  enableSSE?: boolean;
  /**
   * @remarks
   * The KMS key ID. This parameter is required when you use KMS for encryption. The key must belong to the same Alibaba Cloud account and region as the topic.
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum size of a message body sent to the topic. Valid values: 1024 to 65536. Unit: bytes. Default value: 65536.
   * 
   * @example
   * 65536
   */
  maxMessageSize?: number;
  /**
   * @remarks
   * The server-side encryption algorithm. Currently, only AES-256-GCM is supported. If you do not specify this parameter, the default algorithm is used.
   * 
   * @example
   * AES-256-GCM
   */
  sseAlgorithm?: string;
  /**
   * @remarks
   * The server-side encryption method. Valid values: SMQ (service-managed key) or KMS (customer-managed KMS key).
   * 
   * @example
   * KMS
   */
  sseType?: string;
  /**
   * @remarks
   * The name of the topic. The name can be up to 120 characters in length. It must start with a letter and can contain letters, digits, and hyphens.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      enableLogging: 'EnableLogging',
      enableSSE: 'EnableSSE',
      kmsKeyId: 'KmsKeyId',
      maxMessageSize: 'MaxMessageSize',
      sseAlgorithm: 'SseAlgorithm',
      sseType: 'SseType',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableLogging: 'boolean',
      enableSSE: 'boolean',
      kmsKeyId: 'string',
      maxMessageSize: 'number',
      sseAlgorithm: 'string',
      sseType: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

