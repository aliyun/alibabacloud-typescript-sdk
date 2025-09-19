// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoTagRulesResponseBodyAutoTagRuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 558463566374****
   */
  aliUid?: number;
  /**
   * @remarks
   * The timestamp when the rule was created. Unit: milliseconds.
   * 
   * @example
   * 1614674401000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The expression of the rule.
   * 
   * @example
   * [{\\"groups\\":\\"0\\",\\"fieldValueType\\":\\"string\\",\\"field\\":\\"internetIp\\",\\"operator\\":\\"equals\\",\\"value\\":\\"12.0.0.1\\"}]
   */
  expression?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 900029
   */
  id?: number;
  /**
   * @remarks
   * The timestamp when the rule was last updated. Unit: milliseconds.
   * 
   * @example
   * 1614674401000
   */
  modifiedTimestamp?: number;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * describe
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * auto_test_rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The tag specified by the operation type of the rule.
   * 
   * @example
   * {\\"tagId\\":4577447}
   */
  tagContext?: string;
  /**
   * @remarks
   * The operation type of the rule. Valid values:
   * 
   * *   **group**
   * *   **tag**
   * 
   * @example
   * group
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTimestamp: 'CreateTimestamp',
      expression: 'Expression',
      id: 'Id',
      modifiedTimestamp: 'ModifiedTimestamp',
      ruleDesc: 'RuleDesc',
      ruleName: 'RuleName',
      tagContext: 'TagContext',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      createTimestamp: 'number',
      expression: 'string',
      id: 'number',
      modifiedTimestamp: 'number',
      ruleDesc: 'string',
      ruleName: 'string',
      tagContext: 'string',
      tagType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoTagRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 196
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoTagRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset auto-tagging rules.
   */
  autoTagRuleList?: ListAutoTagRulesResponseBodyAutoTagRuleList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAutoTagRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C8E67FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoTagRuleList: 'AutoTagRuleList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoTagRuleList: { 'type': 'array', 'itemType': ListAutoTagRulesResponseBodyAutoTagRuleList },
      pageInfo: ListAutoTagRulesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.autoTagRuleList)) {
      $dara.Model.validateArray(this.autoTagRuleList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

