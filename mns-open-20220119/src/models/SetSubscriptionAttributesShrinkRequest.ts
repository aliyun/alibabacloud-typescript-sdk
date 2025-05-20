// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSubscriptionAttributesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicyShrink?: string;
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
   * This parameter is required.
   * 
   * @example
   * MySubscription
   */
  subscriptionName?: string;
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
      notifyStrategy: 'NotifyStrategy',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dlqPolicyShrink: 'string',
      notifyStrategy: 'string',
      subscriptionName: 'string',
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

