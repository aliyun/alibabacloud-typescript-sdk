// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsNotForReviewRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2ve7h00a
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the project to query. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of projects to return per request. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for paging. Leave this parameter empty or do not specify this character for the first request.
   * 
   * @example
   * 4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the audit policy.
   * > You can invoke the ListReviewRules operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reviewRuleId?: number;
  /**
   * @remarks
   * The number of entries to skip.
   * 
   * > This parameter takes effect only when NextToken is empty.
   * 
   * @example
   * 0
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      reviewRuleId: 'ReviewRuleId',
      skip: 'Skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      reviewRuleId: 'number',
      skip: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

