// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpsRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Cloud Firewall.
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
   * The action of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * alert
   */
  ruleAction?: string;
  /**
   * @remarks
   * The type of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * basicRule
   */
  ruleType?: string;
  /**
   * @remarks
   * The list of rules.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"4664138c-4f81-4650-9c8d-2230ea0d****\\"]
   */
  rules?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 218.1.147.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      firewallType: 'FirewallType',
      lang: 'Lang',
      ruleAction: 'RuleAction',
      ruleType: 'RuleType',
      rules: 'Rules',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallType: 'string',
      lang: 'string',
      ruleAction: 'string',
      ruleType: 'string',
      rules: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

