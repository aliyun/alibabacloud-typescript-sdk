// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSubscriptionByTopicResponseBodyDataPageDataDlqPolicy } from "./ListSubscriptionByTopicResponseBodyDataPageDataDlqPolicy";


export class ListSubscriptionByTopicResponseBodyDataPageData extends $dara.Model {
  /**
   * @remarks
   * The time when the subscription was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554806
   */
  createTime?: number;
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: ListSubscriptionByTopicResponseBodyDataPageDataDlqPolicy;
  /**
   * @remarks
   * The endpoint to which the messages are pushed.
   * 
   * @example
   * http://example.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The tag that is used to filter messages. Only the messages that are attached with the specified tag can be pushed.
   * 
   * @example
   * important
   */
  filterTag?: string;
  /**
   * @remarks
   * The time when the subscription was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554806
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The content format of the messages that are pushed to the endpoint. Valid values:
   * 
   * *   XML
   * *   JSON
   * *   SIMPLIFIED
   * 
   * @example
   * XML
   */
  notifyContentFormat?: string;
  /**
   * @remarks
   * The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint. Valid values:
   * 
   * *   BACKOFF_RETRY
   * *   EXPONENTIAL_DECAY_RETRY
   * 
   * @example
   * BACKOFF_RETRY
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * The name of the subscription.
   * 
   * @example
   * MySubscription
   */
  subscriptionName?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * MyTopic
   */
  topicName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the topic owner.
   * 
   * @example
   * 123456789098****
   */
  topicOwner?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dlqPolicy: 'DlqPolicy',
      endpoint: 'Endpoint',
      filterTag: 'FilterTag',
      lastModifyTime: 'LastModifyTime',
      notifyContentFormat: 'NotifyContentFormat',
      notifyStrategy: 'NotifyStrategy',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
      topicOwner: 'TopicOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dlqPolicy: ListSubscriptionByTopicResponseBodyDataPageDataDlqPolicy,
      endpoint: 'string',
      filterTag: 'string',
      lastModifyTime: 'number',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
      subscriptionName: 'string',
      topicName: 'string',
      topicOwner: 'string',
    };
  }

  validate() {
    if(this.dlqPolicy && typeof (this.dlqPolicy as any).validate === 'function') {
      (this.dlqPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

