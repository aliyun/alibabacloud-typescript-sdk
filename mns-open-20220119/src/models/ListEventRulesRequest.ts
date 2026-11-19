// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRulesRequestSubscription extends $dara.Model {
  /**
   * @remarks
   * The endpoint type. Valid values:
   * - **topic**: The topic type. A topic supports delivery to multiple subscription endpoints. You can add or remove subscription endpoints later.
   * - **queue**: The queue type. Messages are delivered directly to a queue. This reduces the link path, but you cannot add new subscription endpoints later.
   * 
   * @example
   * topic
   */
  endpointType?: string;
  /**
   * @remarks
   * The actual value of the receiving endpoint. When EndpointType is set to topic, this is the topic name. When EndpointType is set to queue, this is the queue name.
   * 
   * @example
   * test-topic
   */
  endpointValue?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      endpointValue: 'EndpointValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      endpointValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventRulesRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Use PageSize for paging.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * **[Deprecated]** Use PageNum for paging.
   * 
   * @example
   * cd7NlPlX4kgKCdsCWMiMR/+HnVzPLQ4/XLvjR64jZ7F9AQ+Mr3T59J6IVkuXeV3w
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned results. Valid values: 1 to 100000. If the specified value is less than 1, the system defaults to 1. If the specified value is greater than 100000, the system defaults to 100000.
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
   * The name of the cloud service for event notifications.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * The resource name in the matching rules, used to filter rules. For example, in OSS, this is the OSS bucket name.
   * 
   * @example
   * test-bucket
   */
  resourceName?: string;
  /**
   * @remarks
   * The filter condition for the rule name.
   * 
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  /**
   * @remarks
   * The subscription endpoint.
   */
  subscription?: ListEventRulesRequestSubscription;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * test-topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productName: 'ProductName',
      resourceName: 'ResourceName',
      ruleName: 'RuleName',
      subscription: 'Subscription',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productName: 'string',
      resourceName: 'string',
      ruleName: 'string',
      subscription: ListEventRulesRequestSubscription,
      topicName: 'string',
    };
  }

  validate() {
    if(this.subscription && typeof (this.subscription as any).validate === 'function') {
      (this.subscription as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

