// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * test
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

export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the logging feature. Valid values:
   * 
   * - true: enables the feature.
   * 
   * - false: disables the feature.
   * Default value: false.
   * 
   * @example
   * true
   */
  enableLogging?: boolean;
  /**
   * @remarks
   * Specifies whether to enable server-side encryption for the message body. Valid values: true or false.
   */
  enableSSE?: boolean;
  /**
   * @remarks
   * The KMS key ID used when KMS encryption is enabled. The key must belong to the same account and region as the topic.
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum size of the message body that can be sent to the topic.
   * Valid values: 1024 to 65536. Unit: bytes.
   * Default value: 65536.
   * 
   * @example
   * 10240
   */
  maxMessageSize?: number;
  /**
   * @remarks
   * The server-side encryption algorithm. Currently, only AES-256-GCM is supported. If this parameter is not specified, the default algorithm is used.
   * 
   * @example
   * AES-256-GCM
   */
  sseAlgorithm?: string;
  /**
   * @remarks
   * The server-side encryption method. Valid values: SMQ (service-hosted key) or KMS (user-managed KMS key).
   * 
   * @example
   * KMS
   */
  sseType?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tag?: CreateTopicRequestTag[];
  /**
   * @remarks
   * The name of the topic. The name can be up to 120 characters in length and must start with a letter. It can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topicName?: string;
  /**
   * @remarks
   * The type of the topic. Valid values:
   *    * normal: standard topic.
   *    * fifo: FIFO topic.
   * 
   * @example
   * normal
   */
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      enableLogging: 'EnableLogging',
      enableSSE: 'EnableSSE',
      kmsKeyId: 'KmsKeyId',
      maxMessageSize: 'MaxMessageSize',
      sseAlgorithm: 'SseAlgorithm',
      sseType: 'SseType',
      tag: 'Tag',
      topicName: 'TopicName',
      topicType: 'TopicType',
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
      tag: { 'type': 'array', 'itemType': CreateTopicRequestTag },
      topicName: 'string',
      topicType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

