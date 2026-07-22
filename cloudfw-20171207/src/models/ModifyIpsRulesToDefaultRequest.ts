// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpsRulesToDefaultRequest extends $dara.Model {
  /**
   * @remarks
   * The attack application.
   * 
   * @example
   * PHP
   */
  attackApp?: string;
  /**
   * @remarks
   * The type of the cloud firewall. Valid values:
   * - **VpcFirewall**: virtual private cloud (VPC) firewalls.
   * - **InternetFirewall** (default): the Internet border firewall.
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
   * The rule type. Valid values:
   * - **basicRule**
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
   * The rule list. Conditional requirement: when RuleType is set to customize, you must specify at least one of this parameter or AttackApp. If you specify only RuleType without Rules or AttackApp, the API returns ErrorParameters.
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
   * The source IP address of the request.
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

