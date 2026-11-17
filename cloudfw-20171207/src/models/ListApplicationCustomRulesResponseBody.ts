// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationCustomRulesResponseBodyApplicationCustomRulesApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the application in the built-in application signature library.
   * 
   * @example
   * 10012150000
   */
  applicationId?: number;
  /**
   * @remarks
   * The name of the application. The name is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * DingTalk
   */
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      applicationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationCustomRulesResponseBodyApplicationCustomRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the application custom rule.
   * 
   * @example
   * acr-7d2e4f6a8b0c1d3e
   */
  applicationCustomRuleId?: string;
  /**
   * @remarks
   * The name of the custom rule.
   * 
   * @example
   * Custom rule 01
   */
  applicationCustomRuleName?: string;
  /**
   * @remarks
   * The ID of the application template to which the rule belongs.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The list of applications associated with the rule.
   */
  applications?: ListApplicationCustomRulesResponseBodyApplicationCustomRulesApplications[];
  /**
   * @remarks
   * The priority of the rule. Valid values: integers from 1 to 200. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The action performed after the rule is matched. Valid values:
   * - **Allow**: allows the traffic.
   * - **Alert**: monitors the traffic.
   * - **Deny**: blocks the traffic.
   * 
   * @example
   * Deny
   */
  ruleAction?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCustomRuleId: 'ApplicationCustomRuleId',
      applicationCustomRuleName: 'ApplicationCustomRuleName',
      applicationTemplateId: 'ApplicationTemplateId',
      applications: 'Applications',
      priority: 'Priority',
      ruleAction: 'RuleAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCustomRuleId: 'string',
      applicationCustomRuleName: 'string',
      applicationTemplateId: 'string',
      applications: { 'type': 'array', 'itemType': ListApplicationCustomRulesResponseBodyApplicationCustomRulesApplications },
      priority: 'number',
      ruleAction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationCustomRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application custom rules, sorted by priority in ascending order.
   */
  applicationCustomRules?: ListApplicationCustomRulesResponseBodyApplicationCustomRules[];
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
   * The total number of application custom rules that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCustomRules: 'ApplicationCustomRules',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCustomRules: { 'type': 'array', 'itemType': ListApplicationCustomRulesResponseBodyApplicationCustomRules },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationCustomRules)) {
      $dara.Model.validateArray(this.applicationCustomRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

