// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebFilterRulesResponseBodyRulesConditions extends $dara.Model {
  /**
   * @remarks
   * The type of the match condition. Valid values: **URL**, which indicates matching by URL.
   * 
   * @example
   * URL
   */
  key?: string;
  /**
   * @remarks
   * The URL to match. A single asterisk (*) matches all URLs. A value ending with /* indicates prefix wildcard matching.
   * 
   * @example
   * www.example.com/login
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebFilterRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The list of match conditions for the rule. The list contains only one condition.
   */
  conditions?: ListWebFilterRulesResponseBodyRulesConditions[];
  /**
   * @remarks
   * The time when the web filtering rule was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731465600
   */
  createTime?: number;
  /**
   * @remarks
   * The action performed after the rule is matched. Valid values:
   * - **Allow**: Allows the request.
   * - **Alert**: Monitors the request.
   * - **Deny**: Blocks the request.
   * 
   * @example
   * Deny
   */
  ruleAction?: string;
  /**
   * @remarks
   * The time when the web filtering rule was last modified. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731469200
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the web filtering rule.
   * 
   * @example
   * wfr-8c1d2e3f4a5b6c7d
   */
  webFilterRuleId?: string;
  /**
   * @remarks
   * The ID of the web filtering template to which the rule belongs.
   * 
   * @example
   * wft-3f2a9c1d4b5e6f70
   */
  webFilterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      createTime: 'CreateTime',
      ruleAction: 'RuleAction',
      updateTime: 'UpdateTime',
      webFilterRuleId: 'WebFilterRuleId',
      webFilterTemplateId: 'WebFilterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ListWebFilterRulesResponseBodyRulesConditions },
      createTime: 'number',
      ruleAction: 'string',
      updateTime: 'number',
      webFilterRuleId: 'string',
      webFilterTemplateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebFilterRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The list of web filtering rules.
   */
  rules?: ListWebFilterRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of web filtering rules that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWebFilterRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

