// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRulesShrinkRequest extends $dara.Model {
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * cd7NlPlX4kgKCdsCWMiMR/+HnVzPLQ4/XLvjR64jZ7F9AQ+Mr3T59J6IVkuXeV3w
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * oss
   */
  productName?: string;
  /**
   * @example
   * test-bucket
   */
  resourceName?: string;
  /**
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  subscriptionShrink?: string;
  /**
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

