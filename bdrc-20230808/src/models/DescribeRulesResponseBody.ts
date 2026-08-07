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
   * The check status. Valid values:
   * - NOT_CHECKED: not checked.
   * - PASSED: check passed.
   * - FAILED: check failed.
   * - CHECKING: checking in progress.
   * - CHECK_FAILED: check execution failed.
   * 
   * @example
   * PASSED
   */
  checkStatus?: string;
  /**
   * @remarks
   * The check time.
   * 
   * @example
   * 1704157635
   */
  checkTime?: number;
  /**
   * @remarks
   * The applicable product type.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The applicable resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of resources with risks.
   * 
   * @example
   * 0
   */
  riskyResourceCount?: number;
  /**
   * @remarks
   * The unique identifier of the rule.
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
   * The total number of checked resources.
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
   * The collection of records returned in this request.
   */
  content?: DescribeRulesResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the current call starts reading. An empty value indicates that all data has been read.
   * 
   * @example
   * 0975951c75d7b41464c8d08ae17043ca
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of records that match the request conditions. This parameter is optional and may not be returned by default.
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
   * The unique identifier of the request.
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

