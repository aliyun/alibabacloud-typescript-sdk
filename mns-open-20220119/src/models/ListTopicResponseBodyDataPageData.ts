// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTopicResponseBodyDataPageDataTags } from "./ListTopicResponseBodyDataPageDataTags";


export class ListTopicResponseBodyDataPageData extends $dara.Model {
  /**
   * @remarks
   * The time when the subscription was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554962
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the subscription was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554962
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * Indicates whether the logging feature is enabled.
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
  tags?: ListTopicResponseBodyDataPageDataTags[];
  /**
   * @remarks
   * The internal URL of the message topic. The internal URL can be accessed over an internal network.
   * 
   * @example
   * http:// 111111111****.mns.us-west-1-internal.aliyuncs.com/topics/testTopic
   */
  topicInnerUrl?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * demo-topic
   */
  topicName?: string;
  /**
   * @remarks
   * The URL of the message topic.
   * 
   * @example
   * http:// 111111111****.mns.us-west-1.aliyuncs.com/topics/testTopic
   */
  topicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maxMessageSize: 'MaxMessageSize',
      messageCount: 'MessageCount',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      tags: 'Tags',
      topicInnerUrl: 'TopicInnerUrl',
      topicName: 'TopicName',
      topicUrl: 'TopicUrl',
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
      tags: { 'type': 'array', 'itemType': ListTopicResponseBodyDataPageDataTags },
      topicInnerUrl: 'string',
      topicName: 'string',
      topicUrl: 'string',
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

