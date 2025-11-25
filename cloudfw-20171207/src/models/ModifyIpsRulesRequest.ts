// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpsRulesRequest extends $dara.Model {
  /**
   * @example
   * VpcFirewall
   */
  firewallType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alert
   */
  ruleAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * basicRule
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\\"4664138c-4f81-4650-9c8d-2230ea0d****\\"]
   */
  rules?: string;
  /**
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

