// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicAttributesResponseBodyDataTags } from "./GetTopicAttributesResponseBodyDataTags";


export class GetTopicAttributesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the topic was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554277
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the topic was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554460
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * Indicates whether the logging feature is enabled. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  loggingEnabled?: boolean;
  /**
   * @remarks
   * The maximum length of the message that is sent to the topic. Unit: bytes.
   * 
   * @example
   * 65536
   */
  maxMessageSize?: number;
  /**
   * @remarks
   * The number of messages in the topic.
   * 
   * @example
   * 0
   */
  messageCount?: number;
  /**
   * @remarks
   * The maximum duration for which a message is retained in the topic. After the specified retention period ends, the message is deleted regardless of whether the message is received. Unit: seconds.
   * 
   * @example
   * 86400
   */
  messageRetentionPeriod?: number;
  /**
   * @remarks
   * The tags added to the resources.
   */
  tags?: GetTopicAttributesResponseBodyDataTags[];
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * demo-topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maxMessageSize: 'MaxMessageSize',
      messageCount: 'MessageCount',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      tags: 'Tags',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      lastModifyTime: 'number',
      loggingEnabled: 'boolean',
      maxMessageSize: 'number',
      messageCount: 'number',
      messageRetentionPeriod: 'number',
      tags: { 'type': 'array', 'itemType': GetTopicAttributesResponseBodyDataTags },
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

