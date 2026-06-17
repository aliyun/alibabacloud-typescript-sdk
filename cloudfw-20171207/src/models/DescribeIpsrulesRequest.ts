// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPSRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The application targeted by the attack.
   * 
   * @example
   * SMB
   */
  attackApp?: string;
  /**
   * @remarks
   * The categories of applications targeted by attacks.
   */
  attackAppCategory?: string[];
  /**
   * @remarks
   * The applications targeted by attacks.
   */
  attackApps?: string[];
  /**
   * @remarks
   * The attack type.
   * 
   * @example
   * Web attack
   */
  attackType?: string;
  /**
   * @remarks
   * The CVE ID.
   * 
   * @example
   * CVE-2026-25253
   */
  cve?: string;
  /**
   * @remarks
   * The status of the rule.
   * 
   * @example
   * 1
   */
  defaultAction?: string;
  /**
   * @remarks
   * The type of firewall.
   * 
   * @example
   * VpcFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether to retrieve only modified rules.
   * 
   * @example
   * true
   */
  queryModify?: string;
  /**
   * @remarks
   * The rule action.
   * 
   * @example
   * alert
   */
  ruleAction?: string;
  /**
   * @remarks
   * The inspection mode.
   * 
   * @example
   * dropStrict
   */
  ruleClass?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * f835533b-01ef-49f4-b172-85bbfd0e****
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
   * The rule type.
   * 
   * This parameter is required.
   * 
   * @example
   * patchRule
   */
  ruleType?: string;
  /**
   * @remarks
   * The field to sort by.
   * 
   * @example
   * UpdateTime
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 8.139.222.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * cen-rnbkqx4a8er21a****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackAppCategory: 'AttackAppCategory',
      attackApps: 'AttackApps',
      attackType: 'AttackType',
      cve: 'Cve',
      defaultAction: 'DefaultAction',
      firewallType: 'FirewallType',
      lang: 'Lang',
      order: 'Order',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryModify: 'QueryModify',
      ruleAction: 'RuleAction',
      ruleClass: 'RuleClass',
      ruleId: 'RuleId',
      ruleLevel: 'RuleLevel',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      sort: 'Sort',
      sourceIp: 'SourceIp',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: 'string',
      attackAppCategory: { 'type': 'array', 'itemType': 'string' },
      attackApps: { 'type': 'array', 'itemType': 'string' },
      attackType: 'string',
      cve: 'string',
      defaultAction: 'string',
      firewallType: 'string',
      lang: 'string',
      order: 'string',
      pageNo: 'number',
      pageSize: 'number',
      queryModify: 'string',
      ruleAction: 'string',
      ruleClass: 'string',
      ruleId: 'string',
      ruleLevel: 'number',
      ruleName: 'string',
      ruleType: 'string',
      sort: 'string',
      sourceIp: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackAppCategory)) {
      $dara.Model.validateArray(this.attackAppCategory);
    }
    if(Array.isArray(this.attackApps)) {
      $dara.Model.validateArray(this.attackApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

