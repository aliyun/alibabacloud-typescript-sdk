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
   * Specifies whether to enable the log management feature. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * Default value: false.
   * 
   * @example
   * true
   */
  enableLogging?: boolean;
  enableSSE?: boolean;
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum length of the message body sent to the topic. Valid values: 1024 to 65536. Unit: bytes. Default value: 65536.
   * 
   * @example
   * 10240
   */
  maxMessageSize?: number;
  sseAlgorithm?: string;
  sseType?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tag?: CreateTopicRequestTag[];
  /**
   * @remarks
   * The name of the topic to create.
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
   *    * normal: normal topic
   *    * fifo: FIFO topic
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

