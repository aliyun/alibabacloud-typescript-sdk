// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpsRulesToDefaultRequest extends $dara.Model {
  /**
   * @remarks
   * The application that is affected by the attack.
   * 
   * @example
   * PHP
   */
  attackApp?: string;
  /**
   * @remarks
   * The type of the Cloud Firewall. Valid values:
   * 
   * - **VpcFirewall**: VPC firewall.
   * 
   * - **InternetFirewall** (default): Internet firewall.
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * The language of the content. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - **basicRule**
   * 
   * - **customize**
   * 
   * This parameter is required.
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The list of rules.
   * 
   * @example
   * [
   *   "uuid_1",
   *   "uuid_2"
   * ]
   */
  rules?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 140.205.118.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      firewallType: 'FirewallType',
      lang: 'Lang',
      ruleType: 'RuleType',
      rules: 'Rules',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: 'string',
      firewallType: 'string',
      lang: 'string',
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

