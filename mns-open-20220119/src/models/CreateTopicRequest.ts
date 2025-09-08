// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * joyce.wang
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
   * *   true: enabled.
   * *   false: disabled. Default value: false.
   * 
   * @example
   * true
   */
  enableLogging?: boolean;
  /**
   * @remarks
   * The maximum length of the message that is sent to the topic. Valid values: 1024 to 65536. Unit: bytes. Default value: 65536.
   * 
   * @example
   * 10240
   */
  maxMessageSize?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateTopicRequestTag[];
  /**
   * @remarks
   * The name of the topic that you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topicName?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      enableLogging: 'EnableLogging',
      maxMessageSize: 'MaxMessageSize',
      tag: 'Tag',
      topicName: 'TopicName',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableLogging: 'boolean',
      maxMessageSize: 'number',
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

