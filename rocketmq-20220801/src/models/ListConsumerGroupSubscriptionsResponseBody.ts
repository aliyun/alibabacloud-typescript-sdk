// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupSubscriptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consistency of the subscription relationship.
   * 
   * - false: The subscription relationship is inconsistent.
   * 
   * - true: The subscription relationship is consistent.
   * 
   * @example
   * true
   */
  consistency?: boolean;
  /**
   * @remarks
   * The ID of the consumer group.
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
   * The type of the filter expression.
   * 
   * - SQL: SQL filtering.
   * 
   * - TAG: Tag filtering.
   * 
   * @example
   * SQL
   */
  filterExpressionType?: string;
  /**
   * @remarks
   * The consumption mode of the consumer group.
   * 
   * - BROADCASTING: The broadcast consumption mode.
   * 
   * - CLUSTERING: The cluster consumption mode.
   * 
   * @example
   * CLUSTERING
   */
  messageModel?: string;
  /**
   * @remarks
   * The subscription status.
   * 
   * - ONLINE: The consumer group is online. If a consumer group contains multiple consumers, the group is considered online as long as at least one consumer is online.
   * 
   * - OFFLINE: The consumer group is offline. If a consumer group contains multiple consumers, the group is considered offline only when all consumers are offline.
   * 
   * @example
   * ONLINE
   */
  subscriptionStatus?: string;
  /**
   * @remarks
   * Indicates whether the topic is created.
   * 
   * @example
   * true
   */
  topicCreated?: boolean;
  /**
   * @remarks
   * The topic to which the consumer group subscribes.
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
      topicCreated: 'topicCreated',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistency: 'boolean',
      consumerGroupId: 'string',
      filterExpression: 'string',
      filterExpressionType: 'string',
      messageModel: 'string',
      subscriptionStatus: 'string',
      topicCreated: 'boolean',
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

export class ListConsumerGroupSubscriptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListConsumerGroupSubscriptionsResponseBodyData[];
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5F4D9D5F-625B-59FF-BD4F-DA8284575DB4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListConsumerGroupSubscriptionsResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

