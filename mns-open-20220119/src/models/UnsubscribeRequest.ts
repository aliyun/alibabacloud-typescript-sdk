// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnsubscribeRequest extends $dara.Model {
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
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

