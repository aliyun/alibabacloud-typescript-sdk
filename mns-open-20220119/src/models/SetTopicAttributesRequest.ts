// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetTopicAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the log management feature. Valid values:
   * 
   * *   true: enabled.
   * *   false: disabled. Default value: false.
   * 
   * @example
   * True
   */
  enableLogging?: boolean;
  /**
   * @remarks
   * The maximum length of the message that is sent to the topic. Valid values: 1024 to 65536. Unit: bytes. Default value: 65536.
   * 
   * @example
   * 65536
   */
  maxMessageSize?: number;
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
      maxMessageSize: 'MaxMessageSize',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableLogging: 'boolean',
      maxMessageSize: 'number',
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

