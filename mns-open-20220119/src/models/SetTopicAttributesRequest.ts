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
   * 65536
   */
  maxMessageSize?: number;
  sseAlgorithm?: string;
  sseType?: string;
  /**
   * @remarks
   * The name of the topic.
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

