// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRulesRequestSubscription extends $dara.Model {
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * - **topic**: A topic can deliver messages to multiple subscribers. You can add or remove subscribers later.
   * 
   * - **queue**: Messages are delivered directly to a queue. This simplifies the delivery path, but you cannot add new subscribers later.
   * 
   * @example
   * topic
   */
  endpointType?: string;
  /**
   * @remarks
   * The actual value of the endpoint.
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
   * This parameter is deprecated. Use PageSize for paged queries.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is deprecated. Use PageNum for paged queries.
   * 
   * @example
   * cd7NlPlX4kgKCdsCWMiMR/+HnVzPLQ4/XLvjR64jZ7F9AQ+Mr3T59J6IVkuXeV3w
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the results to return.
   * Valid values: 1 to 100000.
   * If you set this parameter to a value less than 1, the system uses 1. If you set this parameter to a value greater than 100000, the system uses 100000.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * Valid values: 10 to 50.
   * If you set this parameter to a value less than 10, the system uses 10. If you set this parameter to a value greater than 50, the system uses 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the Alibaba Cloud service for which event notifications are configured.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * The resource name in the matching rule. This parameter is used to filter rules. For example, for Object Storage Service (OSS), this is the bucket name.
   * 
   * @example
   * test-bucket
   */
  resourceName?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  /**
   * @remarks
   * The subscriber.
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

