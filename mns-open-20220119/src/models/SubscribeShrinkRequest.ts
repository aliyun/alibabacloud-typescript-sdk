// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicyShrink?: string;
  dmAttributesShrink?: string;
  dysmsAttributesShrink?: string;
  /**
   * @remarks
   * The receiver endpoint. The format of the endpoint varies based on the terminal type.
   * 
   * *   If you set PushType to http, set Endpoint to an `HTTP URL that starts with http:// or https://`.
   * *   If you set PushType to queue, set Endpoint to a `queue name`.
   * *   If you set PushType to mpush, set Endpoint to an `AppKey`.
   * *   If you set PushType to alisms, set Endpoint to a `mobile number`.
   * *   If you set PushType to email, set Endpoint to an `email address`.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example.com
   */
  endpoint?: string;
  kafkaAttributesShrink?: string;
  /**
   * @remarks
   * The tag that is used to filter messages. Only messages that have the same tag can be pushed. Set the value to a string of no more than 16 characters.
   * 
   * By default, no tag is specified to filter messages.
   * 
   * @example
   * important
   */
  messageTag?: string;
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
   * The terminal type. Valid values:
   * 
   * *   http: HTTP services
   * *   queue: queues
   * *   mpush: mobile devices
   * *   alisms: Alibaba Cloud Short Message Service (SMS)
   * *   email: emails
   * 
   * This parameter is required.
   * 
   * @example
   * queue
   */
  pushType?: string;
  stsRoleArn?: string;
  /**
   * @remarks
   * The name of the subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * testSubscription
   */
  subscriptionName?: string;
  tenantRateLimitPolicyShrink?: string;
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
      dlqPolicyShrink: 'DlqPolicy',
      dmAttributesShrink: 'DmAttributes',
      dysmsAttributesShrink: 'DysmsAttributes',
      endpoint: 'Endpoint',
      kafkaAttributesShrink: 'KafkaAttributes',
      messageTag: 'MessageTag',
      notifyContentFormat: 'NotifyContentFormat',
      notifyStrategy: 'NotifyStrategy',
      pushType: 'PushType',
      stsRoleArn: 'StsRoleArn',
      subscriptionName: 'SubscriptionName',
      tenantRateLimitPolicyShrink: 'TenantRateLimitPolicy',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dlqPolicyShrink: 'string',
      dmAttributesShrink: 'string',
      dysmsAttributesShrink: 'string',
      endpoint: 'string',
      kafkaAttributesShrink: 'string',
      messageTag: 'string',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
      pushType: 'string',
      stsRoleArn: 'string',
      subscriptionName: 'string',
      tenantRateLimitPolicyShrink: 'string',
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

