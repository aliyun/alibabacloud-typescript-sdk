// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionByTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the subscription endpoint used to filter results. For queue push, set the value to queue.
   * 
   * @example
   * queue
   */
  endpointType?: string;
  /**
   * @remarks
   * The address of the subscription endpoint used to filter results. For queue push, specify the queue name.
   * 
   * @example
   * test-queue
   */
  endpointValue?: string;
  /**
   * @remarks
   * The page number of the returned results. Valid values: 1 to 100000000. If the specified value is less than 1, the system defaults to 1. If the specified value is greater than 100000000, the system defaults to 100000000.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 50. If the specified value is less than 10, the system defaults to 10. If the specified value is greater than 50, the system defaults to 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the subscription.
   * 
   * @example
   * demo-subscription
   */
  subscriptionName?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      endpointValue: 'EndpointValue',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      endpointValue: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

