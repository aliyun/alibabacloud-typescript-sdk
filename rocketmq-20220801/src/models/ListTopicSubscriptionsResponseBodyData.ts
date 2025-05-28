// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicSubscriptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether message consumption is consistent. Valid values:
   * 
   * *   false: Unconsumed messages exist in the consumer group.
   * *   true: No unconsumed message exists in the consumer group.
   * 
   * @example
   * true
   */
  consistency?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @remarks
   * The type of the filter expression. Valid values: SQL, TAG, and UNSPECIFIED. The value SQL indicates that messages are filtered by using SQL expressions. The value TAG indicates that messages are filtered by using tags. The value UNSPECIFIED indicates that no filter expression type is specified.
   * 
   * @example
   * SQL
   */
  filterExpressionType?: string;
  /**
   * @remarks
   * The consumption mode. Valid values: BROADCASTING and CLUSTERING.
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The subscription status. Valid values: ONLINE and OFFLINE.
   * 
   * @example
   * ONLINE
   */
  subscriptionStatus?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consistency: 'consistency',
      consumerGroupId: 'consumerGroupId',
      filterExpression: 'filterExpression',
      filterExpressionType: 'filterExpressionType',
      messageModel: 'messageModel',
      subscriptionStatus: 'subscriptionStatus',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistency: 'string',
      consumerGroupId: 'string',
      filterExpression: 'string',
      filterExpressionType: 'string',
      messageModel: 'string',
      subscriptionStatus: 'string',
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

