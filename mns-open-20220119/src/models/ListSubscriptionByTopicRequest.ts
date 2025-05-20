// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionByTopicRequest extends $dara.Model {
  endpointType?: string;
  endpointValue?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100000000. If you set this parameter to a value smaller than 1, the value of this parameter is 1 by default. If you set this parameter to a value greater than 100000000, the value of this parameter is 100000000 by default.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Value values: 10 to 50. If you set this parameter to a value smaller than 10, the value of this parameter is 10 by default. If you set this parameter to a value greater than 50, the value of this parameter is 50 by default.
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

