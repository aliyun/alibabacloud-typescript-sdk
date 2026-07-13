// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulesResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The number of resources for which the check failed.
   * 
   * @example
   * 0
   */
  checkFailedResourceCount?: number;
  /**
   * @remarks
   * The check status. Valid values: NOT_CHECKED (Not checked), PASSED (Passed), FAILED (Failed), CHECKING (Checking), and CHECK_FAILED (Check failed).
   * 
   * @example
   * PASSED
   */
  checkStatus?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the check was performed.
   * 
   * @example
   * 1704157635
   */
  checkTime?: number;
  /**
   * @remarks
   * The product type to which the rule applies.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The resource type to which the rule applies.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of at-risk resources.
   * 
   * @example
   * 0
   */
  riskyResourceCount?: number;
  /**
   * @remarks
   * The unique ID of the rule.
   * 
   * @example
   * rule-bp11ggd8wr762
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule template.
   * 
   * @example
   * ecs-backup
   */
  ruleTemplate?: string;
  /**
   * @remarks
   * The total number of resources that were checked.
   * 
   * @example
   * 1
   */
  totalResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkFailedResourceCount: 'CheckFailedResourceCount',
      checkStatus: 'CheckStatus',
      checkTime: 'CheckTime',
      productType: 'ProductType',
      resourceType: 'ResourceType',
      riskyResourceCount: 'RiskyResourceCount',
      ruleId: 'RuleId',
      ruleTemplate: 'RuleTemplate',
      totalResourceCount: 'TotalResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFailedResourceCount: 'number',
      checkStatus: 'string',
      checkTime: 'number',
      productType: 'string',
      resourceType: 'string',
      riskyResourceCount: 'number',
      ruleId: 'string',
      ruleTemplate: 'string',
      totalResourceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned records.
   */
  content?: DescribeRulesResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * 0975951c75d7b41464c8d08ae17043ca
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries that meet the filter criteria. This parameter is optional and is not returned by default.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeRulesResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeRulesResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 86DEBAC9-AB6A-59AB-9E5C-A540E579ECC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeRulesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

