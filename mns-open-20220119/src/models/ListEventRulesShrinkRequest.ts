// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRulesShrinkRequest extends $dara.Model {
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
  subscriptionShrink?: string;
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
      subscriptionShrink: 'Subscription',
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
      subscriptionShrink: 'string',
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

