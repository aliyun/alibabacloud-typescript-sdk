// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPSRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The attacked application.
   * 
   * @example
   * SMB
   */
  attackApp?: string;
  /**
   * @remarks
   * The attack type.
   * 
   * @example
   * Exception connection
   */
  attackType?: string;
  /**
   * @remarks
   * The current action.
   * 
   * @example
   * alert
   */
  currentMode?: string;
  /**
   * @remarks
   * The CVE ID.
   * 
   * @example
   * cve-2024-38816
   */
  cve?: string;
  /**
   * @remarks
   * The default action.
   * 
   * @example
   * alert
   */
  defaultMode?: string;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The supported engine mode.
   * 
   * This value is valid only when DefaultMode is set to drop (Block). In other modes, this value is meaningless.
   * 
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * f532f59d-2026-436b-8209-e04d8ebc2****
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule level.
   * 
   * @example
   * 1
   */
  ruleLevel?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * Nmap scan detection
   */
  ruleName?: string;
  /**
   * @remarks
   * The UUID of the rule.
   * 
   * @example
   * d401b0cb-dc64-4bbe-bba0-3e7c744****
   */
  ruleUuid?: string;
  /**
   * @remarks
   * The timestamp when the rule was modified.
   * 
   * @example
   * 1775101028
   */
  updateTime?: number;
  /**
   * @remarks
   * Specifies whether the rule is a custom rule.
   * 
   * @example
   * 1
   */
  userDefined?: string;
  /**
   * @remarks
   * The user status.
   * 
   * @example
   * 1
   */
  userStatus?: number;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      currentMode: 'CurrentMode',
      cve: 'Cve',
      defaultMode: 'DefaultMode',
      description: 'Description',
      ruleClass: 'RuleClass',
      ruleId: 'RuleId',
      ruleLevel: 'RuleLevel',
      ruleName: 'RuleName',
      ruleUuid: 'RuleUuid',
      updateTime: 'UpdateTime',
      userDefined: 'UserDefined',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: 'string',
      attackType: 'string',
      currentMode: 'string',
      cve: 'string',
      defaultMode: 'string',
      description: 'string',
      ruleClass: 'number',
      ruleId: 'string',
      ruleLevel: 'number',
      ruleName: 'string',
      ruleUuid: 'string',
      updateTime: 'number',
      userDefined: 'string',
      userStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPSRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of rules with the block action.
   * 
   * @example
   * 976
   */
  dropCount?: number;
  /**
   * @remarks
   * The number of high-risk rules.
   * 
   * @example
   * 518
   */
  highRiskCount?: number;
  /**
   * @remarks
   * The total number of enabled rules.
   * 
   * @example
   * 1752
   */
  openCount?: number;
  /**
   * @remarks
   * The page number.
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
   * 6DF55258-1448-5386-B263-4771D081****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rules.
   */
  rules?: DescribeIPSRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of rules with custom actions.
   * 
   * @example
   * 32
   */
  userDefineCount?: number;
  static names(): { [key: string]: string } {
    return {
      dropCount: 'DropCount',
      highRiskCount: 'HighRiskCount',
      openCount: 'OpenCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
      userDefineCount: 'UserDefineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropCount: 'number',
      highRiskCount: 'number',
      openCount: 'number',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeIPSRulesResponseBodyRules },
      totalCount: 'number',
      userDefineCount: 'number',
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

