// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionByTopicRequest extends $dara.Model {
  endpointType?: string;
  endpointValue?: string;
  /**
   * @remarks
   * The page number of the results to return.
   * Valid values: 1 to 100000000.
   * If the value is less than 1, the system uses 1. If the value is greater than 100000000, the system uses 100000000.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * Valid values: 10 to 50.
   * If the value is less than 10, the system uses 10. If the value is greater than 50, the system uses 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The subscription name.
   * 
   * @example
   * demo-subscription
   */
  subscriptionName?: string;
  /**
   * @remarks
   * The topic name.
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

