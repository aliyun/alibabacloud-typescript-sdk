// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpsRulesToDefaultRequest extends $dara.Model {
  /**
   * @example
   * PHP
   */
  attackApp?: string;
  /**
   * @example
   * InternetFirewall
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
   * customize
   */
  ruleType?: string;
  /**
   * @example
   * [
   *   "uuid_1",
   *   "uuid_2"
   * ]
   */
  rules?: string;
  /**
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

